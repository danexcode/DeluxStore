import { cartAtom } from '@/store/global';
import { Product, ProductCart } from '@/types';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { LiaShoppingBagSolid } from 'react-icons/lia';

export default function ProductView({ product, onClose }: { product: Product, onClose: () => void }) {
  const [cart, setCart] = useAtom(cartAtom);
  const [isAdded, setIsAdded] = useState(cart.find(c => c.product.id === product.id) !== undefined);
  
  const handleAddToCart = () => {
    const newProduct: ProductCart = {
      product: product,
      amount: 1,
    }
    setCart(prev => [...prev, newProduct]);
    setIsAdded(true);
  }

  return (
    <section className="relative w-[70%] h-[80%] max-xl:w-full max-xl:h-full p-5 bg-white xl:rounded-4xl shadow-2xl max-xl:overflow-scroll xl:grid xl:grid-cols-2 gap-4">

      <figure className="self-center justify-self-center rounded-2xl overflow-hidden">
        <img className='' src={product.image} alt="Img" />
      </figure>

      <article className="max-lg:mt-4 lg:mt-12 flex flex-col justify-between gap-4 px-4 lg:pb-4">
        <div className='flex flex-col gap-4'>
          <button onClick={onClose} className='absolute right-[5%] top-[5%] text-2xl rounded-md cursor-pointer'>
            <IoMdClose />
          </button>
          <h2 className="font-medium text-lg">{product.title.slice(0, 85)}...</h2>
          <p className="text-xl bg-primary text-white rounded-full block w-fit px-4 py-1">${product.price}</p>
          <div className="flex gap-6 text-sm">
            <div className="font-medium flex flex-col">
              <span>Brand:</span>
              <span>Model:</span>
              <span>Color:</span>
            </div>
            <div className="flex flex-col">
              <span>{product.brand}</span>
              <span>{product.model}</span>
              <span>{product.color}</span>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-2">Descripción</h4>
            <p className="text-sm text-neutral-700">
              {product.description.slice(0, 300)}...
            </p>
          </div>
        </div>
        <button disabled={isAdded} onClick={handleAddToCart} className="disabled:bg-white border-2 disabled:text-primary-dark disabled:font-medium border-primary cursor-pointer flex justify-center items-center gap-2  px-4 py-2 max-lg:py-5 bg-primary hover:bg-primary-dark hover:border-primary-dark text-white rounded-md">
          {
            isAdded ? "Agregado al carrito" : "Agregar al carrito"
          }
          <LiaShoppingBagSolid className="text-2xl" />
        </button>
      </article>
    </section>
  );
}
