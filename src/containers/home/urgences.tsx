import { Section } from '../../components/common/Section';

export const Urgences = () => {
  return (
    <Section>
      <div className="flex flex-col bg-[#000000] rounded-[6px] font-ChangeOne justify-around align-center items-center gap-14 md:flex-row md:px-2 md:gap-4 xl:flex-row">
        <div className="flex items-centes ml-auto">
          <img
            src="../../../public/assets/images/urgency-banner-image.png"
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center gap-2 md:w-56 xl:w-auto xl:gap-">
          <h2 className="text-white text-[18px] md:text-[20px] xl:text-[25px]">
            Pour toutes urgences en île-de-France !
          </h2>
          <div className="text-[#f2ead5] text-sm border-l-[1px] pl-2 md:text-sm xl:text-[22px] xl:gap-2">
            <p>Ou contactez-nous directement :</p>
            <p>
              <a href="#">07.72.50.38.81</a>/
              <a href="#">secretariat@mhcsparis.com</a>
            </p>
          </div>
        </div>

        <div className="m-auto">
          <button className="bg-[#f2ead5] mb-10 text-black p-4 rounded-[2px] transition ease-in-out hover:-translate-y-2 md:p-2 xl:m-0">
            Prendre rendez-vous
          </button>
        </div>
      </div>
    </Section>
  );
};
