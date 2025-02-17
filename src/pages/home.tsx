import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { pageAtom, productsAtom } from "@/services/products";
import { Product } from "@/types";
import { useAtom } from "jotai";

export default function Home() {
  const [{ data: products, isPending, isError }] = useAtom(productsAtom)
  const [page, setPage] = useAtom(pageAtom)

  const handleLoadMoreProducts = () => {
    setPage(page + 1);
  }

  return (
    <>
      <Hero />

      {/* Categories */}
      <section className="bg-neutral-50 px-10 py-16 text-neutral-900 flex flex-col items-center">
        <h2 className="text-6xl font-extrabold">Innovación a tu alcance</h2>
        <p className="py-4 text-neutral-600">Explora nuestra amplia selección de productos y encuentra la tecnología que te hará la vida más fácil.</p>
        <section className="grid grid-cols-2 max-md:grid-cols-1 w-[80%] min-h-64 gap-8 mt-6 justify-items-center">
          <div className="cursor-pointer w-full h-auto rounded-md bg-white shadow-md overflow-hidden relative">
            <h4 className="absolute text-lg font-bold text-white lg:top-2 left-4 max-lg:bottom-2" >TV's</h4>
            <p className="max-lg:hidden absolute text-4xl font-light text-white bottom-12 left-4">Vive el cine en casa</p>
            <img className="object-cover h-full w-full" src="/images/visual-desktop.webp" alt="TV" />
          </div>
          <div className="cursor-pointer w-full h-auto rounded-md bg-white shadow-md overflow-hidden relative">
            <h4 className="absolute text-lg font-bold text-white lg:top-2 left-4 max-lg:bottom-2" >Audio</h4>
            <p className="max-lg:hidden absolute text-4xl font-light text-white bottom-4 left-4 drop-shadow-md">Sonido que <br /> te envuelve</p>
            <img className="object-cover h-full w-full" src="/images/audio.webp" alt="TV" />
          </div>
          <div className="cursor-pointer w-full h-auto rounded-md bg-white shadow-md overflow-hidden relative">
            <h4 className="absolute text-lg font-bold text-white lg:top-2 left-4 max-lg:bottom-2" >Smartphones</h4>
            <p className="max-lg:hidden absolute text-4xl font-light text-white bottom-4 left-4 drop-shadow-md">Conéctate <br /> con el mundo</p>
            <img className="object-cover h-full w-full" src="/images/phone-2.webp" alt="TV" />
          </div>
          <div className="cursor-pointer w-full h-auto rounded-md bg-white shadow-md overflow-hidden relative">
            <h4 className="absolute text-lg font-bold text-white lg:top-2 left-4 max-lg:bottom-2" >Gaming</h4>
            <p className="max-lg:hidden absolute text-2xl font-light text-white bottom-4 left-4 drop-shadow-md">El poder en tus manos</p>
            <img className="object-cover h-full w-full" src="/images/gaming.webp" alt="TV" />
          </div>
        </section>
      </section>

      <section id="products" className="bg-white px-4 md:px-[150px] py-16 flex flex-col gap-5 items-center text-neutral-900">
        <h3 className="text-4xl font-bold text-center">Calidad, variedad y los mejores precios en un solo lugar.</h3>
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] w-full h-full gap-16 pt-10 items-end">
          {isPending && <p>Cargando...</p>}
          {isError && <p>Ocurrió un error</p>}
          {products?.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
        <button onClick={handleLoadMoreProducts} className="py-2 px-4 rounded-md shadow bg-primary text-white cursor-pointer ">Cargar más</button>
      </section>
    </>
  );
}
