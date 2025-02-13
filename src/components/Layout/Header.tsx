import { Link } from "react-router-dom";
import { LiaBarsSolid, LiaBell, LiaShoppingCartSolid, LiaUser } from 'react-icons/lia';

export default function Header() {
  return (
    <header className="flex z-10 bg-white fixed w-full items-center justify-between py-5 px-4 md:px-12 shadow-md">
      <Link to="/" className="hidden">
        <img className="w-10 h-10" src="/public/favicon.ico" alt="Logo" />
      </Link>
      <Link to="/" className="text-2xl font-bold text-font">
        Delux<span className="text-primary">Shop</span>
      </Link>
      <div className="flex items-center gap-6 max-md:hidden">
        <i>
          <LiaBell className="text-2xl cursor-pointer" />
        </i>
        <i>
          <LiaShoppingCartSolid className="text-2xl cursor-pointer" />
        </i>
        <span>
          <LiaUser className="text-2xl cursor-pointer" />
        </span>
      </div>
      <div className="md:hidden">
        <i>
          <LiaBarsSolid className="text-2xl" />
        </i>
      </div>
    </header>
  )
}
