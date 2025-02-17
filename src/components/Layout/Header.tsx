import { Link } from 'react-router-dom';
import {
  LiaBarsSolid,
  LiaBell,
  LiaShoppingCartSolid,
  LiaUser,
} from 'react-icons/lia';

export default function Header() {

  const handleSearch = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
  }

  return (
    <header className=" flex z-10 bg-white fixed w-full items-center justify-between py-4 px-4 md:px-12 shadow-md">
      <Link to="/" className='w-12 h-12 md:hidden' >
        <img src="/favicon.ico" alt="Logo" />
      </Link>
      <Link to="/" className="text-2xl font-bold text-font max-md:hidden">
        Delux<span className="text-primary">Shop</span>
      </Link>
      <form onSubmit={handleSearch} className='xl:w-[700px]'>
        <input
          className="bg-white lg:min-w-[480px] md:min-w-96 px-4 py-2 shadow-md border-neutral-200 border-[0.1px] rounded-md"
          type="search"
          name="main"
          id="inputSearch"
          placeholder="Buscar productos..."
        />
      </form>
      <ul className="flex items-center gap-6 max-md:hidden">
        <i>
          <LiaBell className="text-2xl cursor-pointer" />
        </i>
        <i>
          <LiaShoppingCartSolid className="text-2xl cursor-pointer" />
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
