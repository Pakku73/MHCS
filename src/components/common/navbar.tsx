import Logo from '../../../public/assets/images/logo.png'

export const Navbar = () => {
  return <>
        <nav className="navbar flex justify-between bg-navWhite ">

          <ul className="navbarLink flex align-center">
            <li className="navbar-link px-10">Notre entreprise</li>
            <li className="navbar-link px-10">Nos prestations</li>
            <li className="navbar-link px-10">Regoignez-nous</li>
            <li className="navbar-link px-10">Contact</li>
          </ul>

          <div className="navbarLogo">
            <img src={Logo} alt="logo" className="navbar-logo object-scale-down h-14 w-30"/>
          </div>

          <div className="rightCard flex align-center bg-rightCard">
            <img src="../../../public/assets/icons/mail.svg" alt=""/>
            <div className='flex-col'>
              <h2>Contactez-nous</h2>
              <p>07.72.50.38.81</p>
            </div>
          </div>
        </nav>
  </>;
};
