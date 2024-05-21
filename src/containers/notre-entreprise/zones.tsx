import { Section } from "../../components/common/Section";

export const Zones = () => {
  return (
    <>
      <Section>
        <div className="flex flex-col justify-center items-center p-20">
          <h2 className="uppercase font-ChangeOne text-4xl">NOS ZONES</h2>
          <h3 className="font-Neonderthaw text-4xl mb-14">d'interventions</h3>
          <div className="flex items-center">
            <img
              className="border-[#c6c6c6] border-[1px] rounded-[6px] max-w-xl"
              src="../../../public/assets/images/map.jpg"
              alt=""
            />
            <div className="flex flex-col bg-[#f2ead5] shadow-md p-14 gap-5 max-w-4xl max-h-96 rounded-[6px] z-10 -translate-x-6">
              <div className="flex items-center gap-6">
                <img
                  className="max-w-xl"
                  src="../../../public/assets/icons/location.svg"
                  alt=""
                />
                <div className="flex flex-col">
                  <h3 className="uppercase font-ChangeOne">ILE-DE-FRANCE</h3>
                  <p>
                    Notre entreprise est présente sur l'ensemble de
                    l'Île-de-France afin de garantir la couverture de nos
                    services.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <img
                  className="max-w-xl"
                  src="../../../public/assets/icons/mail-fill.svg"
                  alt=""
                />
                <div className="flex flex-col">
                  <h3 className="uppercase font-ChangeOne">NOUS CONTACTER</h3>
                  <p>
                    Vous avez la possibilité de nous contacter via notre
                    fomulaire de contact ou directement via notre numéro de
                    telephone 07.72.50.38.81 ou notre adresse mail
                    secretariat@mhcsparis.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <img
                  className="max-w-xl"
                  src="../../../public/assets/icons/time.svg"
                  alt=""
                />
                <div className="flex flex-col">
                  <h3 className="uppercase font-ChangeOne">NOS HORRAIRES</h3>
                  <p>
                    Notre secrétariat est ouvert du lundi au vendredi de 8h30 à
                    17h00.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-[#000000] max-w-60 font-ChangeOne text-[#f2ead5] p-2 mt-10 rounded-[2px] hover:bg-[#f2ead5] hover:text-black transition ease-in-out duration-300  hover:-translate-y-2 shadow-md">Prendre rendez-vous</button>
        </div>
      </Section>
    </>
  );
};
