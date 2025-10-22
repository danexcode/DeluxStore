import ProductCard from '@/components/ProductCard';
import { searchProductsAtom } from '@/services/products';
import { Category } from '@/types';
import { useAtom } from 'jotai';
import { ChangeEvent, useState } from 'react';
import { LiaTrashAlt } from 'react-icons/lia';
import { useSearchParams } from 'react-router-dom';

export default function Products() {
  const [{ data: allProducts, isPending, isError }] =
    useAtom(searchProductsAtom);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');
  const [category, setCategory] = useState(searchParams.get('category'));

  const productsByCategory = category
    ? allProducts?.filter((product) => product.category === category)
    : allProducts;

  const filteredProducts = search
    ? productsByCategory?.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    : productsByCategory;

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setCategory(newValue);
    setSearchParams({
      ...Object.fromEntries(searchParams),
      category: newValue,
    });
  };

  const handleCleanCategory = () => {
    setCategory(null);
    setSearchParams({
      ...Object.fromEntries(searchParams),
      category: '',
    });
  };

  window.scrollTo(0, 0);

  return (
    <section className="grid grid-cols-1 md:grid-cols-[240px_1fr] pt-[74px]">
      <aside className="shadow-md p-6 bg-neutral-100 max-md:hidden">
        <h2 className="text-center font-medium">Filtros</h2>
        <ul className="mt-4">
          <label className="flex flex-col gap-1" htmlFor="">
            Precio
            <input type="range" />
          </label>

          <span className="flex items-center justify-between mt-4 mb-2">
            <h3 className="">Categorías</h3>
            {category && (
              <button className='cursor-pointer' title='Limpiar filtros' onClick={handleCleanCategory}>
                <LiaTrashAlt className="text-xl" />
              </button>
            )}
          </span>
          <form className="flex flex-col pl-4 gap-1">
            <label className="flex gap-1 items-center" htmlFor="tv-radio">
              <input
                id="tv-radio"
                type="radio"
                name="category"
                value={Category.TV}
                checked={category === Category.TV}
                onChange={handleCategoryChange}
              />
              Tv
            </label>

            <label className="flex gap-1 items-center" htmlFor="audio-radio">
              <input
                id="audio-radio"
                type="radio"
                name="category"
                value={Category.AUDIO}
                checked={category === Category.AUDIO}
                onChange={handleCategoryChange}
              />
              Audio
            </label>

            <label className="flex gap-1 items-center" htmlFor="laptop-radio">
              <input
                id="laptop-radio"
                type="radio"
                name="category"
                value={Category.LAPTOP}
                checked={category === Category.LAPTOP}
                onChange={handleCategoryChange}
              />
              Laptop
            </label>

            <label className="flex gap-1 items-center" htmlFor="mobile-radio">
              <input
                id="mobile-radio"
                type="radio"
                name="category"
                value={Category.MOBILE}
                checked={category === Category.MOBILE}
                onChange={handleCategoryChange}
              />
              Mobile
            </label>

            <label className="flex gap-1 items-center" htmlFor="gaming-radio">
              <input
                id="gaming-radio"
                type="radio"
                name="category"
                value={Category.GAMING}
                checked={category === Category.GAMING}
                onChange={handleCategoryChange}
              />
              Gaming
            </label>

            <label
              className="flex gap-1 items-center"
              htmlFor="appliances-radio"
            >
              <input
                id="appliances-radio"
                type="radio"
                name="category"
                value={Category.APPLIANCES}
                checked={category === Category.APPLIANCES}
                onChange={handleCategoryChange}
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
