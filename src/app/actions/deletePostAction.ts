"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export default async function deletePost(formData: FormData) {
  const prisma = new PrismaClient();

  try{
    const id = formData.get('id');
    const postId = typeof id === 'string' ? parseInt(id, 10) : undefined;

    await prisma.post.delete({
      where: {
        id: postId
      },
    })
  }
  catch(error){
    return {
      error: "An Error occurred. Post not deleted"
    }
  }
  revalidatePath('/posts')
}