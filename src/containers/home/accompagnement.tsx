export const Accompagnement = () => {
  return (
    <>
      <section>
        {/* Ici aussi attention, pas de vh pour positionner tes sections ( d'ailleurs attention tu utilise le padding pour créer du blanc sur x & y, normalement, 
            c'est ta section qui devrait avoir ce rôle, de plus renseigne toi sur les max-width, qui vont te permettre d'ajuster la taille maximal de tes blocks pour créer 
            les espaces blanc en x et avec du margin en y tu vas pouvoir créer le blanc en y (PS : les max-width sont un avantage pour le responsive, on en reparleras je te montrerais)  ) */}
        <div className="flex flex-col bg-[#fffcf8] p-[10vh] pr-[20vh] pl-[20vh]">
          <div className="flex flex-col bg-[#ffffff] shadow-md p-10 rounded-[6px]">
            <h2 className="flex flex-col font-ChangeOne text-[500] text-[30px] m-auto text-center w-[600px]">
              Un accompagnement dédié, pour des travaux en toute
              <span className="font-Neonderthaw text-[50px]">serenite</span>
            </h2>
            <div className="flex">
              <img
                className="rounded-[6px]"
                src="../../../public/assets/images/support-visual.jpg"
                alt=""
              />

              {/* Oupsi attention, je vois que tu as utilisé le padding pour centrer l'élément, quand tu dois centrer quelque choses et dans 80% des cas quand tu dois gérer le comportement de placement de contenu, tu utiliseras les flexboxs
              Si tu n'est pas encore à l'aise avec je te conseilles https://flexboxfroggy.com/#fr qui est une référence dans l'apprentissage de ces dernières. */}
              <div className="text-[#000000] p-20">
                {/* Pour harmoniser les tailles de polices, on essaie de se référencer au default tailwind (xs, sm, md, lg, xl etc..) que l'on viens modifier dans le tailwind.config.js pour l'ajuster au font sizes de la maquettes ( par le biais de l'objet extend ) */}
                <h2 className="font-ChangeOne text-[20px]">
                  Pourquoi choisir MHCS ?
                </h2>
                <br />
                <p>
                  MHCS trouve son essence dans la volonté de répondre de manière
                  précise et efficace aux besoins et aux exigences spécifiques
                  du monde hôtelier. Notre expertise s'est solidement établie
                  pour vous offrir des conseils avisés et éclairés, guidant
                  chaque étape de la maintenance et de la rénovation au sein de
                  votre établissement.
                </p>
                <br />
                <p>
                  Nous sommes fiers de notre capacité à conjuguer performance et
                  durabilité, offrant ainsi à nos clients une approche globale,
                  pragmatique et responsable pour faire face aux défis actuels
                  du secteur hôtelier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
