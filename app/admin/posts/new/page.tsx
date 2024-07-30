"use client";

import React, { useState, Suspense} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import AdminLayout from "@/components/Layouts/AdminLayout";

import { entityConfiguration } from '../constants';
import { getFieldType } from "@/helper/form/FormFields";

function initialValues() {

  let init = {};

  entityConfiguration
    .fields
    .filter(item => item.showOnForm)
    .forEach(
      item => init[item.id] = item.defaultValue
    )

  return init;
}

function validationSchema() {
  return {
    title: Yup.string().required("Este campo es requerido"),
    /*urlToImage: Yup
                  .string()
                  .matches(
                      /^(https?:\/\/)?(www\.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(\/[a-zA-Z0-9#]+)*(\/\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                      'Enter correct url!'
                  )
                  .required('Please enter website')*/
  };
}

export default function NewPost() {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData, { resetForm }) => {
      setIsLoading(true);
      console.log(formData);
      create(formData)
      resetForm({ values: "" });
      setIsLoading(false);
    },
  });

  const create = async (formData) => {
    try {
      await fetch("/api/posts/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error(error);
    }
  };

  if(isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminLayout>
        <Breadcrumbs pageName={entityConfiguration.title} rootName="Admin" />
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="flex flex-col gap-4 p-6">
                {
                  entityConfiguration
                    .fields
                    .filter((item) => item.showOnForm)
                    .map(
                      field => (
                        getFieldType(field.type, field, formik.values, formik.handleChange, formik.errors, formik.setFieldValue)
                      )
                    )
                }
                <div className="flex">
                  <Link
                    className="w-32 flex-1 inline-flex items-center justify-center rounded-md border border-primary px-10 py-2 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
                    href="/admin/posts"
                  >
                    Cancelar
                  </Link>
                  <div className="flex-1" />
                  <button
                    type="submit"
                    className="w-32 flex-1 inline-flex items-center justify-center rounded-md bg-primary px-10 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </AdminLayout>
    </Suspense>
  );
}
