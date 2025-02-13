import { LiaArrowRightSolid } from "react-icons/lia";

export default function Home() {
  return (
    <>
      <section className="bg-white text-font h-screen grid md:grid-cols-2 w-full justify-center px-24 items-center ">
        <section className="">
          <h1 className="text-6xl font-extrabold">Tecnología que te inspira</h1>
          <p className="text-xl font-light my-8">
            {' '}
            Descubre las últimas novedades y encuentra el producto perfecto para
            ti.
          </p>
          <button className="bg-primary flex items-center gap-2 py-3 px-6 cursor-pointer rounded-md shadow-md text-white text-xl">
            Shop now  
            <LiaArrowRightSolid className="inline" />
          </button>
        </section>
        <figure className="flex justify-center max-md:hidden">
          <img
            className="cursor-pointer rounded-4xl shadow-md w-[75%] h-[75%] hover:scale-105 ease-in-out duration-200"
            src="/public/images/Hero-Image.png"
            alt="Desktop Monitor"
          />
        </figure>
      </section>
      Home Page
    </>
  );
}
