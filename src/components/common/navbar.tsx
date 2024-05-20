import { Link } from 'react-router-dom';
import Logo from '../../../public/assets/images/logo.png';
import { HEADER_LINK } from '../../data/header';

export const Navbar = () => {
  return (
    <nav className="p-5 fixed top-0 z-50 w-full bg-[#ffffff] border-b-2 border-[#e4e4e4]">
      <div className="relative flex items-center justify-between">
        <ul className="flex items-center gap-4">
          {HEADER_LINK.map((link, index) => (
            <Link key={index} to={link.href}>
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
          <img src={Logo} alt="logo" className="h-14 w-30" />
        </div>

        <div className="flex p-2 align-center bg-[#f2ead5] w-40 rounded-[6px] text-xs shadow-[0_4px_4px_-4px_rgba(0,0,0,0.4)]">
          <img
            className="w-6 mr-4"
            src="../../../public/assets/icons/mail.svg"
            alt=""
          />
          <div className="flex-col">
            <h2>
              <b>Contactez-nous</b>
            </h2>
            <p>07.72.50.38.81</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

// bg-[url('/img/hero-pattern.svg')]
