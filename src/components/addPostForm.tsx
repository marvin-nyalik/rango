'use client';
import { addPost } from "@/app/actions/addPostAction";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function AddPostForm() {

  const { replace } = useRouter();
  async function clientAction(formData: FormData) {
    const result = await addPost(formData);
    if (result?.error) {
      toast.error(result.error);
    }
    else {
      replace(`/posts`);
      toast.success('Post created');
    }
  }

  return (
    <>
      <div className="w-full max-w-[80%] flex flex-col mx-auto">
          <h2 className="font-semibold text-md my-2 mx-auto">Create Post Using Server Actions</h2>
            <form action={clientAction}>
              <div className="flex flex-col h-[70vh]">
                <div className="flex justify-evenly items-center space-x-4 space-y-4 mb-3">
                  <input className="p-1 w-full mx-auto border-2 border-gray-900 rounded-xl mb-2" 
                   id="title" 
                   name="title" 
                   type="text"
                   placeholder="title"
                   required
                  />
                </div>
                <div className="flex justify-evenly h-[30vh] items-center space-x-4 space-y-4 my-3">
                  <input className="p-1 w-full h-[100%] border-2 border-gray-900 mx-auto" 
                    id="body" 
                    name="body" 
                    type="text"
                    placeholder="body"
                    required
                  />
                </div>
              </div>
              <div>
              <button type="submit"
                className="border border-gray-200 disabled:bg-zinc-500 transition rounded-xl bg-emerald-500 p-1 my-2 text-white"
              >
                Create Post
              </button>
              </div>
            </form>
      </div>
    </>
  )
}

