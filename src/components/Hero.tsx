import { LiaArrowRightSolid } from 'react-icons/lia';

export default function Hero() {
  /* () => {
            const destino = document.getElementById('products');
            const alturaHeader = 74; // Altura de tu header
            
            if (destino) {
              window.scrollTo({
                top: destino.offsetTop - alturaHeader,
                behavior: 'smooth'
              });
            }
          } */

  return (
    <section className="relative">
      {/* <img className='absolute -z-10 h-screen w-full object-cover' src="/public/images/cinema-desktop-2.webp" alt="wallpaper" /> */}
      <section className="bg-transparent text-neutral-900 h-screen grid md:grid-cols-2 w-full justify-center px-24 items-center ">
        <article className="items-center flex-col max-md:flex">
          <h1 className="text-6xl font-extrabold">Tecnología que te inspira</h1>
          <p className="text-xl font-light my-8 max-md:mb-16">
            {' '}
            Descubre las últimas novedades y encuentra el producto perfecto para
            ti.
          </p>
          <button className="bg-primary flex items-center gap-2 py-3 px-6 cursor-pointer rounded-md shadow-md text-white text-xl hover:scale-105 ease-in-out duration-100">
            <a href="#products">
              Shop now
              <LiaArrowRightSolid className="inline" />
            </a>
          </button>
        </article>
        <figure className="flex justify-center max-md:hidden">
          <img
            className="cursor-pointer rounded-4xl shadow-md w-[75%] h-[75%] hover:scale-105 ease-in-out duration-200"
            src="/images/Hero-Image.png"
            alt="Desktop Monitor"
          />
        </figure>
      </section>
    </section>
  );
}
