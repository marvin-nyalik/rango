"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const addPost = async (formData: FormData) => {
    await prisma.post.create({
      data: {
          title: formData.get("title") as string,
          body: formData.get("body") as string
      }
    })
  }

export default addPost;