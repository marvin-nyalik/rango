'use client';
import deletePost from "@/app/actions/deletePostAction";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const DeleteForm = ({id}:{id: number,}) => {
  const { replace } = useRouter();

  async function clientDeleteAction(formData: FormData){
    const result = await deletePost(formData);

    if (result?.error){
      toast.error(result.error)
    }
    else {
      replace('/posts');
      toast.success("Post was successfully deleted");
    }
  }
  return(
    <>
      <form action={clientDeleteAction}>
        <input type="hidden" name="id" value={id} />
        <button type="submit" className="bg-red-700 px-1 text-sm mb:2 border border-gray-400 rounded-xl text-white">Delete</button>
      </form>
    </>
  )
}

export default DeleteForm;
