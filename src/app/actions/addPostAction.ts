"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();

const addPost = async (formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    const post = await prisma.post.create({
      data: {
          title: formData.get("title") as string,
          body: formData.get("body") as string
      }
    })

    revalidatePath("/posts");
  }

export default addPost;