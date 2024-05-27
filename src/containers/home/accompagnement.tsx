import { Section } from '../../components/common/Section';

export const Accompagnement = () => {
  return (
    <Section variant="9/10">
      <div className="flex flex-col bg-[#fffcf8]">
        <div className="flex flex-col bg-[#ffffff] shadow-md p-10 px-[100px] rounded-[6px]">
          <h2 className="flex flex-col font-ChangeOne text-[500] text-[30px] m-auto text-center">
            Un accompagnement dédié, pour des travaux en toute
            <span className="font-Neonderthaw text-[50px]">serenite</span>
          </h2>

          <div className="flex flex-col gap-12 xl:flex-row xl:gap-36">
            <img
              className="rounded-[6px]"
              src="../../../public/assets/images/support-visual.jpg"
              alt=""
            />

            <div className="flex flex-col text-[#000000] justify-center">
              <h2 className="font-ChangeOne text-[20px]">
                Pourquoi choisir MHCS ?
              </h2>
              <br />
              <p>
                MHCS trouve son essence dans la volonté de répondre de manière
                précise et efficace aux besoins et aux exigences spécifiques du
                monde hôtelier. Notre expertise s'est solidement établie pour
                vous offrir des conseils avisés et éclairés, guidant chaque
                étape de la maintenance et de la rénovation au sein de votre
                établissement.
              </p>
              <br />
              <p>
                Nous sommes fiers de notre capacité à conjuguer performance et
                durabilité, offrant ainsi à nos clients une approche globale,
                pragmatique et responsable pour faire face aux défis actuels du
                secteur hôtelier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
