import { Section } from '../../components/common/Section';

export const Urgences = () => {
  return (
    <Section>
      <div className="flex bg-[#000000] rounded-[6px] font-ChangeOne justify-around align-center">
        <div className="flex items-centes ml-auto">
          <img
            src="../../../public/assets/images/urgency-banner-image.png"
            alt=""
          />
        </div>

        <div className="flex flex-col justify-center gap-2">
          <h2 className="text-white text-[25px]">
            Pour toutes urgences en île-de-France !
          </h2>
          <div className="text-[#f2ead5] border-l-[1px] text-[22px] pl-2">
            <p>Ou contactez-nous directement :</p>
            <p>
              <a href="#">07.72.50.38.81</a>/
              <a href="#">secretariat@mhcsparis.com</a>
            </p>
          </div>
        </div>

        <div className="m-auto">
          <button className="bg-[#f2ead5] text-black p-4 rounded-[2px] transition ease-in-out hover:-translate-y-2">
            Prendre rendez-vous
          </button>
        </div>
      </div>
    </Section>
  );
};
