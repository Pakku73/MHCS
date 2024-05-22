import { Section } from "../../components/common/Section";

export const Dynamique = () => {
  return (
    <>
      <Section>
        <div className="flex gap-6">
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="flex justify-center items-center bg-[#f2ead5] border-black border-[1px] rounded-[6px] p-8 gap-6">
              <img
                className="max-w-28 max-h-28 border-black border-[1px] rounded-[6px]"
                src="../../../public/assets/images/realization3-xl.jpg"
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="font-ChangeOne text-[#ada796] text-2xl">
                  Accompagnement complet
                </h2>
                <p className="text-[14px]">
                  Accompagnement sur-mesure adapté à vos besoins et compatible
                  avec les normes en vigueur dans vos établissements (ERP, IGH)
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center bg-white border-black border-[1px] rounded-[6px] p-8 gap-6">
              <img
                className="max-w-28 max-h-28 border-black border-[1px] rounded-[6px]"
                src="../../../public/assets/images/realization1.jpg"
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="font-ChangeOne text-[#ada796] text-2xl">
                  Gestion des urgences
                </h2>
                <p className="text-[14px]">
                  Réactif et complet, à tout moment ! Pour bénéficier de nos
                  services de nos dépannages 24h24 et 7j/7, il faut déjà être
                  client. Lorsque vous n’êtes pas client, contactez-nous du
                  lundi au vendredi de 8h30 à 17h.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center bg-white border-black border-[1px] rounded-[6px] p-8 gap-6">
              <img
                className="max-w-28 max-h-28 border-black border-[1px] rounded-[6px]"
                src="../../../public/assets/images/realization3-xl.jpg"
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="font-ChangeOne text-[#ada796] text-2xl">
                  De nouveaux travaux
                </h2>
                <p className="text-[14px]">
                  Une prise de rendez-vous rapide pour étudier vos besoins
                  précis. Une solution de dépannage peut être proposée en
                  attente de l’établissement d’un devis complet et de la
                  réalisation des travaux.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="flex justify-center items-center gap-6">
              <div className="w-[2px] h-[160px] bg-black"></div>
              <div className="flex flex-col gap-2">
                <h2 className="font-ChangeOne text-3xl">
                  Accompagnement complet
                </h2>
                <p>
                  Tout est parti d’une idée qui créa l’acronyme MHCS. C’est avec
                  un grand enthousiasme que nous souhaitons vous présenter nos
                  valeurs : Maintenance, service et logistique constituent notre
                  corps de métier depuis de nombreuses années. Nous les avons
                  exploités et adaptés aux codes de l’Hôtellerie de luxe, et
                  savons donc à quel point la qualité des prestations est
                  primordiale. C’est pourquoi, la création de la société MHCS a
                  pour but de répondre aux besoins et exigences du monde
                  hôtelier.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <img
                className="max-w-44 border-black border-[1px] rounded-[10px]"
                src="../../../public/assets/images/realization4.jpg"
                alt=""
              />
              <img
                className="max-w-44 border-black border-[1px] rounded-[10px]"
                src="../../../public/assets/images/realization3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
