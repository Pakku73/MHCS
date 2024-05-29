// import { Button } from '../../components/common/Button';

export const HeroBanner = () => {
  return (
    <section className="h-svh">
      <div className="relative h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center z-15 h-full w-full">
          <h1 className="flex flex-col mb-10 justify-center items-center ml-50 z-10 gap-4 text-3xl text-center xl:text-6xl">
            <span className="font-ChangeOne uppercase text-[#f2ead5] [text-shadow:_0_4px_0_rgb(0_0_0_/_14%)]">
              Votre service de
            </span>
            <span className="font-Neonderthaw text-3xl text-[#f2ead5] [text-shadow:_0_4px_0_rgb(0_0_0_/_14%)] xl:text-[68px]">
              maintenance hôtelière
            </span>
            <span className="font-ChangeOne uppercase text-[#f2ead5] [text-shadow:_0_4px_0_rgb(0_0_0_/_14%)]">
              Sur-mesure, 24H/24.
            </span>
          </h1>

          <div className="flex z-10 justify-center items-center gap-10 font-ChangeOne">
            <button className="bg-[#f2ead5] text-black p-2 rounded-[2px] text-[14px] hover:bg-[#000000] hover:text-[#f2ead5] transition ease-in-out duration-300  hover:-translate-y-2 shadow-md xl:text-base">
              Prendre rendez-vous
            </button>
            <button className="bg-[#ada796] text-white text-[14px] p-2 rounded-[2px] hover:bg-[#ffffff] hover:text-[#ada796] transition ease-in-out duration-300  hover:-translate-y-2 shadow-md xl:text-base">
              Découvrir les prestations
            </button>
            {/* <Button text="Prendre rendez-vous" variant="cream" />
          <Button text="Découvrir" variant="olive" /> */}
          </div>
        </div>

        <div className="absolute h-full w-full">
          <div className="absolute z-0 top-0 left-0 w-full bg-gradient-to-b from-[#ffffff99] to-[#00000073] h-full"></div>{' '}
          {/*div 1*/}
          <img
            className="h-full w-full object-cover"
            src="../../../public/assets/images/hero-banner.jpg"
            alt=""
          />{' '}
          {/*div 2*/}
        </div>
      </div>
    </section>
  );
};

// bg-[url('../../../public/assets/images/hero-banner.jpg')]
// #50d71e
