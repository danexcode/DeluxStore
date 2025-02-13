import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Trends */}
      <section className="bg-neutral-50 h-screen px-10 py-16 text-neutral-900 flex flex-col items-center">
        <h2 className="text-6xl font-extrabold">Innovación a tu alcance</h2>
        <p className="py-4 text-neutral-600">Explora nuestra amplia selección de productos y encuentra la tecnología que te hará la vida más fácil.</p>

        <article className="grid grid-cols-4 w-full h-full gap-4 mt-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </article>
      </section>
      <section className="bg-contrast h-[50vh]">

      </section>
    </>
  );
}
