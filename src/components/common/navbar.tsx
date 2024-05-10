import Logo from '../../../public/assets/images/logo.png'

export const Navbar = () => {
  return <>
        <nav className="navbar flex p-4 h-20 justify-between bg-[#f6f6f6] static">

          <ul className="navbarLink flex">
            <li className="navbar-link px-4"><a href="#">Notre entreprise</a></li>
            <li className="navbar-link px-4"><a href="#">Nos prestations</a></li>
            <li className="navbar-link px-4"><a href="#">Regoignez-nous</a></li>
            <li className="navbar-link px-4"><a href="#">Contact</a></li>
          </ul>

          <div className="navbarLogo">
            <img src={Logo} alt="logo" className="navbar-logo object-scale-down h-14 w-30"/>
          </div>

          <div className="rightCard flex p-2 align-center bg-[#ffd7ab] w-40 rounded-[6px] text-xs shadow-[0_4px_4px_-4px_rgba(0,0,0,0.4)]">
            <img className="w-6 mr-4" src="../../../public/assets/icons/mail.svg" alt=""/>
            <div className='flex-col'>
              <h2>Contactez-nous</h2>
              <p>07.72.50.38.81</p>
            </div>
          </div>
        </nav>
  </>;
};

// bg-[url('/img/hero-pattern.svg')]
