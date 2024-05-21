import { Section } from "../../components/common/Section";

export const Entreprise = () => {
  return (
    <>
      <Section>
        <div className="flex flex-col relative items-center justify-center top-10 h-[80vh] bg-[url('../../../public/assets/images/company-hero-banner.jpg')] bg-no-repeat bg-cover bg-center rounded-[6px]">
          <h1 className="flex flex-col mb-10 justify-center items-center ml-50 z-10 gap-4 text-6xl text-center">
            <span className="font-ChangeOne uppercase text-[#f2ead5] [text-shadow:_0_4px_0_rgb(0_0_0_/_14%)]">
              DÉCOUVREZ NOTRE
            </span>
            <span className="font-Neonderthaw text-[68px] text-[#f2ead5] [text-shadow:_0_4px_0_rgb(0_0_0_/_14%)]">
              entreprise
            </span>
          </h1>

          <div className="flex z-10 justify-center items-center gap-10 font-ChangeOne">
            <button className="bg-[#f2ead5] text-black p-2 rounded-[2px] hover:bg-[#000000] hover:text-[#f2ead5] transition ease-in-out duration-300  hover:-translate-y-2 shadow-md">
              Prendre rendez-vous
            </button>
          </div>

          <div className="absolute z-0 top-0 left-0 w-full bg-gradient-to-b from-[#ffffff99] to-[#00000073] h-full rounded-[6px]"></div>

          {/* <div className="absolute">

            <img
              className="h-full w-full object-cover rounded-[6px]"
              src="../../../public/assets/images/company-hero-banner.jpg"
              alt=""
            />
          </div> */}
        </div>
      </Section>
    </>
  );
};