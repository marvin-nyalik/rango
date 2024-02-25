"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient();

export const addPost = async (formData: FormData) => {
  const title = formData.get("title");
  const body = formData.get("body");

   try { 
    await prisma.post.create({
      data: {
          title: title as string,
          body: body as string
      }
    });
   }

   catch (error) {
     return {
      error:"Something went wrong!!!",
     };
   } 
   revalidatePath("/posts");
  }

