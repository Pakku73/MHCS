// import { Button } from '../../components/common/Button';

export const HeroBanner = () => {
  return <>
  
    <section className="flex flex-col bg-no-repeat">

    <div>

      <div>
        <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#ffffff99] to-[#00000073] h-full"></div> {/*div 1*/}
        <img className="-mt-[5.5vh] h-full" src="../../../public/assets/images/hero-banner.jpg" alt="" /> {/*div 2*/}
      </div>

      <h1> {/*div 3*/}
          <span>Votre service de</span>
          <span>maintenance hôtelière</span>
          <span>Sur-mesure, 24H/24.</span>
      </h1>
      
      <div className="flex"> {/*div 4*/}
          <button className="bg-white color-[#000000]">Prendre rendez-vous</button>
          <button>Découvrir les prestations</button>
      </div>


    </div>

    </section>

  </>;
};




// bg-[url('../../../public/assets/images/hero-banner.jpg')] 