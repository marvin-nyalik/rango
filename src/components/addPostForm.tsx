'use client';
import addPost from "@/app/actions/addPostAction";

export default async function AddPostForm() {
  return (
    <>
    <div className="w-full max-w-[80%] flex flex-col mx-auto">
          <h2 className="font-semibold text-md my-2 mx-auto">Create Post Using Server Actions</h2>

            <form action={addPost}>
              <div className="flex flex-col h-[70vh] border border-gray-500">
                <div className="flex justify-evenly items-center space-x-4 space-y-4 mb-3">
                  <input className="p-1 w-full mx-auto" id="title" name="text" type="text"
                    placeholder="title"
                    required
                  />
                </div>
                <div className="flex justify-evenly items-center space-x-4 space-y-4 mb-3">
                  <input className="p-1 w-full mx-auto" id="body" name="text" type="text"
                    placeholder="body"
                    required
                  />
                </div>
              </div>
              <div>
                <button type="submit" className="border border-gray-200 rounded-xl bg-emerald-500 p-1 my-2 text-white">Create Post</button>
              </div>
            </form>
          </div>
    </>
  )
}

