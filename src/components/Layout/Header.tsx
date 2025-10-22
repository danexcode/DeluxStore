import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  LiaBarsSolid,
  LiaBell,
  LiaShoppingCartSolid,
  LiaUser,
} from 'react-icons/lia';
import { ChangeEvent, useRef, useState } from 'react';
import { useAtomValue } from 'jotai';
import { cartAtom } from '@/store/global';

export default function Header() {
  const navigate = useNavigate();
  const inputSearchRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const cart = useAtomValue(cartAtom);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === '') return;
    navigate(`/products?search=${value}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    setSearchParams({
      ...Object.fromEntries(searchParams),
      search: newValue,
    });
  };

  return (
    <header className=" flex z-10 bg-slate-50 fixed w-full items-center justify-between py-4 px-4 md:px-12 shadow-md">
      <a href="/" className="w-12 h-12 md:hidden">
        <img src="/favicon.ico" alt="Logo" />
      </a>

      <a href="/" className="text-2xl font-bold text-font max-md:hidden">
        Delux<span className="text-primary">Shop</span>
      </a>

      <form onSubmit={handleSearch} className="xl:w-[700px]">
        <input
          className="bg-white lg:min-w-[480px] md:min-w-96 px-4 py-2 shadow-md border-neutral-200 border-[0.1px] rounded-md"
          type="search"
          name="main"
          id="inputSearch"
          placeholder="Buscar productos..."
          ref={inputSearchRef}
          value={value}
          onChange={handleChange}
        />
      </form>

      <ul className="flex items-center gap-6 max-md:hidden">
        <i>
          <LiaBell className="text-2xl cursor-pointer" />
        </i>
        <i className="relative cursor-pointer">
          <LiaShoppingCartSolid className="text-2xl" />
          {cart.length > 0 && (
            <div className="absolute top-[-5px] right-[-5px] bg-primary rounded-full text-white w-4 h-4 flex justify-center items-center font-normal not-italic text-xs">
              {cart.length}
            </div>
          )}
        </i>
        <span>
          <LiaUser className="text-2xl cursor-pointer" />
        </span>
      </ul>

      <div className="md:hidden">
        <i>
          <LiaBarsSolid className="text-3xl" />
        </i>
      </div>
    </header>
  );
}
