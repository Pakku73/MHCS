export const Poles = () => {
  return (
    <section className="flex flex-col items-center max-w-screen-2xl m-auto mt-[100px] gap-6">
      <h2 className="flex flex-col font-ChangeOne text-center text-[30px]">
        Nos 3 grands
        <span className="font-Neonderthaw">pôles</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-center xl:grid-cols-3 gap-12">
        <div className="flex flex-col items-center gap-4">
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

        <div className="flex flex-col items-center gap-4 ">
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
            confrontée, nous nous engageons à trouver des solutions durables à
            chaque étape de notre travail.
          </p>
        </div>

        <div className="flex w-full md:col-span-2 xl:col-auto flex-col items-center gap-4">
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
          <p className="text-center max-w-sm xl:max-w-none">
            Notre service de maintenance complet et réactif, disponible à tout
            moment pour répondre à vos besoins urgents et réguliers de votre
            établissement. Gagnez en efficacité avec la GMAO.
          </p>
        </div>
      </div>
    </section>
  );
};
