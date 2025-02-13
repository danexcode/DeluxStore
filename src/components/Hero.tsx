import { LiaArrowRightSolid } from 'react-icons/lia';

export default function Hero() {
  return (
    <section className="bg-white text-font h-screen grid md:grid-cols-2 w-full justify-center px-24 items-center ">
      <article className="items-center flex-col max-md:flex">
        <h1 className="text-6xl font-extrabold">Tecnología que te inspira</h1>
        <p className="text-xl font-light my-8 max-md:mb-16">
          {' '}
          Descubre las últimas novedades y encuentra el producto perfecto para
          ti.
        </p>
        <button className="bg-primary flex items-center gap-2 py-3 px-6 cursor-pointer rounded-md shadow-md text-white text-xl hover:scale-105 ease-in-out duration-100">
          Shop now
          <LiaArrowRightSolid className="inline" />
        </button>
      </article>
      <figure className="flex justify-center max-md:hidden">
        <img
          className="cursor-pointer rounded-4xl shadow-md w-[75%] h-[75%] hover:scale-105 ease-in-out duration-200"
          src="/public/images/Hero-Image.png"
          alt="Desktop Monitor"
        />
      </figure>
    </section>
  );
}
