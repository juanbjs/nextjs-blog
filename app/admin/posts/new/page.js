"use client";

import { useState, useEffect, Suspense} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Breadcrumbs from "@/components/Breadcrumbs";
import AdminLayout from "@/components/Layouts/AdminLayout";

import { entityConfiguration } from '../constants';

function initialValues() {
  return {
    title: "",
  };
}

function validationSchema() {
  return {
    title: Yup.string().required("Este campo es requerido"),
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
      await fetch("/api/posts", {
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

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminLayout>
        <Breadcrumbs pageName={entityConfiguration.title} rootName="Admin" />
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="flex flex-col gap-4 p-6">
                <div>
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="title"
                  >
                    Titulo
                  </label>
                  <input
                    id ="title"
                    placeholder="Titulo"
                    onChange={formik.handleChange}
                    value={formik.values.userEmail}
                    onInvalid={formik.errors.userEmail}
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    type="text"
                    required
                    autoFocus
                  />
                </div>
                <div className="flex">
                  <button
                    className="w-32 flex-1 inline-flex items-center justify-center rounded-md border border-primary px-10 py-2 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
                  >
                    Cancelar
                  </button>
                  <div className="flex-1">
                  </div>
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