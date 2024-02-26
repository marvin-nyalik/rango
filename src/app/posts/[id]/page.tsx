"use client";
import { useState } from "react";
import UpdatePostForm from "@/components/updatePostForm";

export default function Page (
{ searchParams, }:{
  searchParams?: {
    id?: number,
    title?: string,
    body?: string
  }
}) {
  const title = searchParams?.title;
  const body = searchParams?.body;
  const id = searchParams?.id;
  const [showModal, setShowModal] = useState(false);


  return (
    <>
      <div className="flex flex-col max-w-[70%] mx-auto space-x-4 space-y-4 h-screen shadow-xl my-2">
        <h1 className="my-3 text-xl font-semibold leading-loose uppercase">{title}</h1>
        <div className="w-full text-sm font-light leading-relaxed">
          <p>{body}</p>
        </div>
        <button onClick={() => setShowModal(true)} className="w-[10vw] bg-emerald-400 py-1 border border-teal-600 text-white rounded-xl">Update</button>
       
      {showModal && (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Update Post
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto w-full">
                  <UpdatePostForm id={id} title={title} body={body}/>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
      </div>
    </>
  )
}
