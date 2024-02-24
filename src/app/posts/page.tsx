import AddPostForm from "../../components/addPostForm";
import { PrismaClient } from "@prisma/client";

export default async function Posts() {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany();

  return (
    <>
      <AddPostForm />
      <hr />
      <h2 className="font-bold mx-auto text-xl flex justify-center items-center">Posts</h2>
      <div className="mx-auto max-w-[90%] flex flex-col space-y-4">
        {posts.map((post, index) => (
          <p key={index}
            className="leading-loose text-lg font-light"
          >
            {post.title}
          </p>
        ))}
      </div>
    </>
  );
}