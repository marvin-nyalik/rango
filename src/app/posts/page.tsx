import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import DeleteForm from "@/components/deletePostForm";

export default async function Posts() {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany();

  return (
    <>
      <h2 className="font-bold mx-auto text-xl flex justify-center items-center">Posts</h2>
      <div className="mx-auto max-w-[90%] flex flex-col space-y-4 my-3 shadow-2xl">
        {posts.map((post, index) => (
          <div className="flex justify-between w-full mx-auto" key={post.id}>
          <Link
          href={{
            pathname:`/posts/${encodeURIComponent(post.title)}`,
            query:{
              id: post.id,
              title: post.title,
              body: post.body
            }
          }}
          >
          <div key={index}
            className="leading-loose text-lg font-light"
          >
            <p> {post.title} </p>
          </div>
          </Link>
          <DeleteForm id={post.id}/>
          </div>
        ))}
      </div>
    </>
  );
}