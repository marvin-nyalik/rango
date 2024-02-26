'use server';

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function updatePost(formData:FormData){

  const id = formData.get('id');
  const prisma = new PrismaClient();
  const title = formData.get('title') as string;
  const body = formData.get('body') as string;

  const postId = typeof id === 'string' ? parseInt(id, 10) : undefined;
  try {
    await prisma.post.update({
      where: {
        id: postId
      },
      data: {
        title: title,
        body: body,
      }
    });
  } 
  catch (error){
    return {
      error: "Database Error. Post not updated"
    }
  }
  revalidatePath('/posts');
}
