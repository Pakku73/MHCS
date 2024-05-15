export const Poles = () => {
  return (
    <>
      <section className="flex flex-col items-center max-w-screen-2xl m-auto mt-[100px] gap-6">
        <h2 className="flex flex-col font-ChangeOne text-center text-[30px]">
          Nos 3 grands
          <span className="font-Neonderthaw">pôles</span>
        </h2>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2  xl:flex xl:justify-between w-full">
          <div className="flex max-w-screen-2xl">
            <div className="flex flex-col items-center max-w-md gap-4">
              <img
                className="max-w-40"
                src="../../../public/assets/icons/travaux.png"
                alt=""
              />
              <h2 className="uppercase font-ChangeOne text-center">
                Les travaux
                <br />
                <span className="bg-[#ada796] text-white p-2 rounded-[2px]">
                  Sur-meusure
                </span>
              </h2>
              <p className="text-center">
                Bénéficiez d'un service personnalisé répondant à vos besoins les
                plus exigeants, mais également d’un suivi premium quotidien.
              </p>
            </div>
          </div>

          <div className="flex max-w-screen-2xl">
            <div className="flex flex-col items-center max-w-md gap-4">
              <img
                className="max-w-40"
                src="../../../public/assets/icons/energie.png"
                alt=""
              />
              <h2 className="uppercase font-ChangeOne text-center">
                L'énergie
                <br />
                <span className="bg-[#ada796] text-white p-2 rounded-[2px]">
                  Ecologie
                </span>
              </h2>
              <p className="text-center">
                Conscients des défis environnementaux auxquels notre société est
                confrontée, nous nous engageons à trouver des solutions durables
                à chaque étape de notre travail.
              </p>
            </div>
          </div>

          <div className="flex max-w-screen-2xl">
            <div className="flex flex-col items-center max-w-md gap-4">
              <img
                className="max-w-40"
                src="../../../public/assets/icons/maintenance.png"
                alt=""
              />
              <h2 className="uppercase font-ChangeOne text-center">
                LA MAINTENANCE
                <br />
                <span className="bg-[#ada796] text-white p-2 rounded-[2px]">
                  FIABILITE & PRATICITE
                </span>
              </h2>
              <p className="text-center">
                Notre service de maintenance complet et réactif, disponible à
                tout moment pour répondre à vos besoins urgents et réguliers de
                votre établissement. Gagnez en efficacité avec la GMAO.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
