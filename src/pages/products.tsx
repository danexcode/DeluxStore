import ProductCard from '@/components/ProductCard';
import { searchProductsAtom } from '@/services/products';
import { useAtom } from 'jotai';
import { useSearchParams } from 'react-router-dom';

export default function Products() {
  const [{ data: allProducts, isPending, isError }] =
    useAtom(searchProductsAtom);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  const category = searchParams.get('category');

  const productsByCategory = category
    ? allProducts?.filter((product) => product.category === category)
    : allProducts;

  const filteredProducts = search
    ? productsByCategory?.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    : productsByCategory;

  window.scrollTo(0, 0);

  return (
    <section className="grid grid-cols-[240px_1fr] pt-[74px]">
      <aside className="shadow-md p-6">
        <h2 className="text-center font-medium">Filtros</h2>
        <ul className='mt-4'>
            <label className='flex flex-col gap-1' htmlFor="">
              Precio
              <input type="range" />
            </label>

          <h3 className='mt-4 mb-2'>Categorías</h3>
          <form
            onChange={() => console.log('holaxd')}
            className="flex flex-col pl-4 gap-1"
          >
            <label htmlFor="tv-radio">
              <input id="tv-radio" type="radio" name="category" value="Tv" />
              Tv
            </label>

            <label htmlFor="audio-radio">
              <input
                id="audio-radio"
                type="radio"
                name="category"
                value="Audio"
              />
              Audio
            </label>
            <label htmlFor="laptop-radio">
              <input
                id="laptop-radio"
                type="radio"
                name="category"
                value="Laptop"
              />
              Laptop
            </label>
            <label htmlFor="mobile-radio">
              <input
                id="mobile-radio"
                type="radio"
                name="category"
                value="Mobile"
              />
              Mobile
            </label>
            <label htmlFor="gaming-radio">
              <input
                id="gaming-radio"
                type="radio"
                name="category"
                value="Gaming"
              />
              Gaming
            </label>
            <label htmlFor="appliances-radio">
              <input
                id="appliances-radio"
                type="radio"
                name="category"
                value="Appliances"
              />
              Appliances
            </label>
          </form>
        </ul>
      </aside>
      <article className="px-4 py-12 bg-neutral-100">
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] justify-items-center gap-10">
          {isPending && <div>Cargando...</div>}
          {isError && <div>Hubo un error...</div>}
          {filteredProducts?.length === 0 ? (
            <div>No hay productos.. </div>
          ) : (
            filteredProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </ul>
      </article>
    </section>
  );
}
