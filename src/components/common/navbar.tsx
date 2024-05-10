import Logo from '../../../public/assets/images/logo.png'

export const Navbar = () => {
  return <>
        <nav className="navbar flex p-4 h-20 justify-between bg-navWhite static">

          <ul className="navbarLink flex">
            <li className="navbar-link px-4">Notre entreprise</li>
            <li className="navbar-link px-4">Nos prestations</li>
            <li className="navbar-link px-4">Regoignez-nous</li>
            <li className="navbar-link px-4">Contact</li>
          </ul>

          <div className="navbarLogo">
            <img src={Logo} alt="logo" className="navbar-logo object-scale-down h-14 w-30"/>
          </div>

          <div className="rightCard flex p-2 align-center bg-rightCard w-40 text-xs">
            <img className="w-6 mr-4" src="../../../public/assets/icons/mail.svg" alt=""/>
            <div className='flex-col'>
              <h2>Contactez-nous</h2>
              <p>07.72.50.38.81</p>
            </div>
          </div>
        </nav>
  </>;
};
