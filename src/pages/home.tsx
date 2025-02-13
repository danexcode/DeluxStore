import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Trends */}
      <section className="bg-neutral-50 px-10 py-16 text-neutral-900 flex flex-col items-center">
        <h2 className="text-6xl font-extrabold">Innovación a tu alcance</h2>
        <p className="py-4 text-neutral-600">Explora nuestra amplia selección de productos y encuentra la tecnología que te hará la vida más fácil.</p>
        <section className="grid grid-cols-2 max-md:grid-cols-1 w-[80%] min-h-64 gap-8 mt-6 justify-items-center">
          <div className="w-full h-auto rounded-md bg-white shadow-md">Tvs</div>
          <div className="w-full h-auto rounded-md bg-white shadow-md">Laptops</div>
          <div className="w-full h-auto rounded-md bg-white shadow-md">Audio</div>
          <div className="w-full h-auto rounded-md bg-white shadow-md">Gaming</div>
        </section>
      </section>

      <section className="bg-white px-4 md:px-[150px] py-16 flex flex-col gap-5 items-center text-neutral-900">
        <h3 className="text-4xl font-bold text-center">Calidad, variedad y los mejores precios en un solo lugar.</h3>
        <article className="grid mygrid w-full h-full gap-16 pt-10">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </article>
        <button className="py-2 px-4 rounded-md shadow bg-primary text-white cursor-pointer ">Cargar más</button>
      </section>
    </>
  );
}
