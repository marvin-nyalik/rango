"use client";

import { useFormStatus } from "react-dom";

const Submit = () => {
  const { pending } = useFormStatus();
  
  return (
    <>
      <button type="submit"
        disabled={pending}
        className="border border-gray-200 disabled:bg-zinc-500 transition rounded-xl bg-emerald-500 p-1 my-2 text-white"
        >
          {pending ? 'Creating': 'Create Post'}
      </button>
    </>
  )
}

export default Submit;