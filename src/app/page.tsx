import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Trending Worldwide'
}

export default function Home() {
  return (
    <main className="flex space-x-4 space-y-3 min-h-screen flex-col items-center justify-between p-24">
      <div className="flex h-screen flex-col w-full md:flex-row md:max-w-[90%] mx-auto">
        <Image
        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="person"
        width={100}
        height={100}
        className="w-1/2 h-screen">
        </Image>

        <div className="w-1/2 ml-2 text-lg leading-lg font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quam, molestiae adipisci veritatis necessitatibus exercitationem sequi ad facilis, omnis consectetur enim, qui cumque beatae? Impedit molestiae obcaecati non optio repellendus, at molestias labore consequatur repudiandae. Dolor incidunt placeat corporis autem porro minima tempore. Voluptatibus distinctio accusamus pariatur, optio quo doloremque eius sequi tempore! Nihil blanditiis corrupti similique vero facere! Laborum vel qui blanditiis! Illum distinctio nam temporibus at voluptatibus corporis, dolor doloremque vitae sequi, quod voluptatem repellendus consequatur iusto quisquam?
        </div>
      </div>
    </main>
  );
}
