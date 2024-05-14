// import { Button } from '../../components/common/Button';

export const HeroBanner = () => {
  return <>
  
    <section className="flex flex-col bg-no-repeat">

    <div>

      <div className="flex flex-col mt-80 absolute z-15 h-full w-full">

        <h1 className="flex flex-col mb-10 justify-center items-center ml-50 z-10 text-[500] gap-4 text-6xl text-center">
            <span className="font-ChangeOne uppercase text-[#f2ead5] [text-shadow:_0_4px_0_rgb(0_0_0_/_14%)]">Votre service de</span>
            <span className="font-Neonderthaw text-[68px] text-[#f2ead5] [text-shadow:_0_4px_0_rgb(0_0_0_/_14%)]">maintenance hôtelière</span>
            <span className="font-ChangeOne uppercase text-[#f2ead5] [text-shadow:_0_4px_0_rgb(0_0_0_/_14%)]">Sur-mesure, 24H/24.</span>
        </h1>

        <div className="flex z-10 justify-center items-center gap-10 font-ChangeOne">
          <button className="bg-[#f2ead5] text-black p-2 rounded-[2px] hover:bg-[#000000] hover:text-[#f2ead5] hover:transition-transform-0.2 hover:-translate-y-1">Prendre rendez-vous</button>
          <button className="bg-[#ada796] text-white p-2 rounded-[2px] hover:bg-[#ffffff] hover:text-[#ada796] hover:transition-transform-0.2 hover:-translate-y-1">Découvrir les prestations</button>
        </div>

      </div>

      <div>
        <div className="absolute z-0 top-0 left-0 w-full bg-gradient-to-b from-[#ffffff99] to-[#00000073] h-full"></div> {/*div 1*/}
        <img className="-mt-[5.5vh] h-full" src="../../../public/assets/images/hero-banner.jpg" alt="" /> {/*div 2*/}
      </div>
      


    </div>

    </section>

  </>;
};




// bg-[url('../../../public/assets/images/hero-banner.jpg')] 
// #50d71e