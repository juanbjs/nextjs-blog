"use client";

import React, { useState, Suspense, useEffect} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import AdminLayout from "@/components/Layouts/AdminLayout";

import { entityConfiguration } from '../constants';

import { getPostById } from "@/service/postsServices";

import { getFieldType } from "@/helper/form/FormFields";

function initialValues(post) {

  let init = {};

  entityConfiguration
    .fields
    .filter(item => item.showOnForm)
    .forEach(
      item => init[item.id] = post[item.id] || ""
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

interface Params {
  id: string;
}

export default function UpdatePost(context: { readonly params: Params }) {

  const { id } = context.params;

  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState();

  useEffect(() => {
    setIsLoading(true);
    const fetchPostData = async () => {
      try {
        const postData = await getPostById(id);
        setPost(postData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };

    fetchPostData();
  }, [id]);

  const formik = useFormik({
    initialValues: initialValues(post || {}),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData, { resetForm }) => {
      setIsLoading(true);
      console.log(formData);
      create(formData)
      resetForm({ values: "" });
      setIsLoading(false);
    },
  });

  console.log(formik);

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
                        getFieldType(field.type, field, formik)
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
