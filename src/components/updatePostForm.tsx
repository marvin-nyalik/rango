'use client';

import { toast } from "react-hot-toast";
import { updatePost } from "@/app/actions/updatePostAction";
import { useFormStatus } from "react-dom";

export default function UpdatePostForm({id, title, body}: 
    { id:number | undefined, 
      title: string | undefined,
      body: string | undefined
    }) {
  const { pending } = useFormStatus();

//   const searchParams = new URLSearchParams();
//   const postTitle = title as string;
//   const postBody = body as string;

//   searchParams.append('title', postTitle)
//   searchParams.append('body', postBody)
//   const queryParams = searchParams.toString();

  async function clientPostUpdate(formData: FormData) {
    const result = await updatePost(formData);
    if(result?.error){
      toast.error(result.error);
    }
    else{
      toast.success("Update was successful..");
    }
  }
  
  return (
    <>
      <div className="w-full flex flex-col mx-auto">
          <h2 className="font-semibold text-lead my-2 mx-auto">Update Post</h2>
            <form action={clientPostUpdate}>
              <div className="flex flex-col h-[30vh]">
                <div className="flex justify-evenly items-center space-x-4 space-y-4 mb-3">
                  <input className="p-1 w-full mx-auto border-2 border-gray-900 rounded-xl mb-2" 
                   id="title" 
                   name="title" 
                   type="text"
                   placeholder={title}
                   required
                  />
                </div>
                <div className="flex justify-evenly h-[30vh] items-center space-x-4 space-y-4 my-3">
                  <input className="p-1 w-full h-[100%] border-2 border-gray-900 mx-auto" 
                    id="body" 
                    name="body" 
                    type="text"
                    placeholder={body}
                    required
                  />
                  <input type="hidden" name="id" value={id}/>
                </div>
              </div>
              <div>
              <button type="submit"
                disabled={pending}
                className="border border-gray-200 disabled:bg-zinc-500 transition rounded-xl bg-emerald-500 p-1 my-2 text-white"
              >
                Update Post
              </button>
              </div>
            </form>
      </div>
    </>
  )
}

