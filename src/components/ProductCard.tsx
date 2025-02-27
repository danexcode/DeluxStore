import { Product } from '@/types';
import { useRef } from 'react';

export default function ProductCard({ product }: { product: Product }) {
  const title = product.title.split(' ').slice(0,7).join(' ');
  const productRef = useRef<HTMLLIElement>(null);

  const handleImageError = () => {
    console.log("Error en el item: ", product.id)
    productRef.current?.classList.add("hidden")
    console.log("Quitando el producto: ", product.id)
  }

  return (
    <li ref={productRef} className="rounded-lg shadow-md bg-white p-4 pb-6 h-fit">
      <figure className="overflow-hidden cursor-pointer">
        <img
          className="min-h-72 max-h-72 w-full object-contain rounded-lg hover:scale-110 duration-200 ease-in-out"
          src={product.image}
          alt="Product"
          onError={handleImageError}
        />
      </figure>

      <section className="mt-4 flex flex-col gap-2">
        <h3 className="font-bold">{title}</h3>
        <p className="text-neutral-600 font-light text-sm">
          {product.description.slice(0, 100)}...
        </p>
        <article className="flex items-center justify-between mt-2">
          <p className=" text-lg text-neutral-800 font-bold rounded-2xl">${product.price}</p>
          <button className="bg-primary cursor-pointer text-white px-2 py-1 rounded-md shadow-md border-none">
            Ver más
          </button>
        </article>
      </section>
    </li>
  );
}
