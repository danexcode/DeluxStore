import { Link } from "react-router-dom";
import { LiaBarsSolid, LiaBell, LiaShoppingCartSolid, LiaUser } from 'react-icons/lia';

export default function Header() {
  return (
    <header className="flex bg-white fixed w-full items-center justify-between py-5 px-12 shadow-md">
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
      <div className="hidden max-md:block">
        <i>
          <LiaBarsSolid className="text-2xl" />
        </i>
      </div>
    </header>
  )
}
