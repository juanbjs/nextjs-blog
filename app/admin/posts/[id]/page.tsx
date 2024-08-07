"use client";

import React, { useState, Suspense, useEffect} from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import AdminLayout from "@/components/Layouts/AdminLayout";

import { entityConfiguration } from '../constants';

import { getPostById, update } from "@/service/postsServices";

import { FormFields } from "@/helper/form/FormFields";
import Post from "@/model/posts";
import { Alert } from "@/model/Alert";

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
  return Yup.object().shape({
    title: Yup.string().required("Este campo es requerido"),
    category: Yup.string().required("Este campo es requerido"),
    /*urlToImage: Yup
                  .string()
                  .matches(
                      /^(https?:\/\/)?(www\.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(\/[a-zA-Z0-9#]+)*(\/\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                      'Enter correct url!'
                  )
                  .required('Please enter website')*/
  });
}

interface Params {
  id: string;
}

export default function UpdatePost(context: { readonly params: Params }) {

  const { id } = context.params;

  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState<Post>();
  const [messages, setMessages] = useState<Array<Alert>>([]);

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

  const onSubmit = (values, { setSubmitting }) => {
    const valuesOri: Post = post;

    Object
        .keys(values)
        .forEach(key => {
          valuesOri[key] = values[key]
        });

    setSubmitting(false);
    setIsLoading(true);

    update(valuesOri)
      .then(data => {
        console.log('Post actualizado exitosamente:', data);
        setMessages([{ type: "success", title: "Success", subTitle: "Post updated successfully" }]);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error updating post:', error);
        setMessages([{ type: "error", title: "Error", subTitle: "Error updating post" }]);
        setIsLoading(false);
      });
  };

  if(isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminLayout
        messages={messages}
      >
        <Breadcrumbs pageName={entityConfiguration.title} rootName="Admin" />
        <div>
          <Formik
            initialValues={initialValues(post || {})}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ isSubmitting, values, handleChange, errors, setFieldValue }) => (
              <Form>
                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div className="flex flex-col gap-4 p-6">
                    {
                      entityConfiguration
                        .fields
                        .filter((item) => item.showOnForm)
                        .map(
                          field => (
                            <FormFields
                              key={`form-fields-${field.id}`}
                              type={field.type}
                              field={field}
                              values={values}
                              handleChange={handleChange}
                              errors={errors}
                              setFieldValue={setFieldValue}
                            />
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
                        disabled={isSubmitting}
                        type="submit"
                        className="w-32 flex-1 inline-flex items-center justify-center rounded-md bg-primary px-10 py-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                      >
                        Guardar
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </AdminLayout>
    </Suspense>
  );
}
