export const Etapes = () => {
    return <>
    
      <section className="flex flex-col items-center max-w-screen-2xl m-auto gap-14">

        <h2 className="flex flex-col font-Arial text-center text-[25px]">
            Les étapes à suivre
            <span className="font-ChangeOne uppercase text-[#ada796] text-[30px]">SIMPLE, RAPIDE ET GARANTI.</span>
        </h2>

        <div className="flex items-center max-w-screen-2xl">
            
            <div className="flex flex-col bg-[#dedad2] max-w-[330px] rounded-[6px] items-center p-4 shadow-md">
                <h2 className="font-ChangeOne text-center z-10 bg-[#ada796] text-white p-2 rounded-[6px] -translate-y-10 -translate-x-[100px] -rotate-2 shadow-md">
                    Je prends contact
                </h2>
                <img className="max-w-40" src="../../../public/assets/icons/contact.png" alt="" />
                <p className="text-center">
                    Je prends contact via le formulaire de contact sur le site internet ou j’appelle directement le 07.72.50.38.81.
                </p>
            </div>

            <img className="mx-[30px] opacity-20 max-w-[10px]" src="../../../public/assets/icons/right-chevron.svg" alt="" />


            <div className="flex flex-col bg-[#dedad2] max-w-[330px] rounded-[6px] items-center p-4 shadow-md">
                <h2 className="font-ChangeOne text-center z-10 bg-[#ada796] text-white p-2 rounded-[6px] -translate-y-10 -translate-x-[55px] -rotate-2 shadow-md">
                    J'établis un rdv avec un expert
                </h2>
                <img className="max-w-40" src="../../../public/assets/icons/expert-rdv.png" alt="" />
                <p className="text-center">
                    La prise de rendez-vous sera faite suite aux échanges entre vous et nos équipes, selon vos besoins et votre calendrier.
                </p>
            </div>

            <img className="mx-[30px] opacity-20 max-w-[10px]" src="../../../public/assets/icons/right-chevron.svg" alt="" />


            <div className="flex flex-col bg-[#dedad2] max-w-[330px] rounded-[6px] items-center p-4 shadow-md">
                <h2 className="font-ChangeOne text-center z-10 bg-[#ada796] text-white p-2 rounded-[6px] -translate-y-10 -translate-x-[30px] -rotate-2 shadow-md">
                    Je souscris à une offre personnalisée
                </h2>
                <img className="max-w-40" src="../../../public/assets/icons/souscription.png" alt="" />
                <p className="text-center">
                    Suite à notre premier rendez-vous, nous établissons ensemble une offre parfaitement adaptée à votre établissement.
                </p>
            </div>

            <img className="mx-[30px] opacity-20 max-w-[10px]" src="../../../public/assets/icons/right-chevron.svg" alt="" />


            <div className="flex flex-col bg-[#f2ead5] max-w-[330px] rounded-[6px] items-center p-4 border-[1px] border-[#bfbcb5] shadow-md">
                <h2 className="font-ChangeOne text-center z-10 bg-[#ada796] text-white p-2 rounded-[6px] -translate-y-10 -translate-x-[75px] -rotate-2 shadow-md">
                    Service de gestion 24/24
                </h2>
                <img className="max-w-40" src="../../../public/assets/icons/service.png" alt="" />
                <p className="text-center">
                    Je prends contact via le formulaire de contact sur le site internet ou j’appelle directement le 07.72.50.38.81.
                </p>
                <p className="text-center text-[14px] mt-1">
                    (commissions de sécurité, contrôles périodiques obligatoires, garantie des contrôles obligatoires en vigueur selon le type de bâtiment)
                </p>
                <h2 className="font-ChangeOne text-center z-10 bg-[#000000] text-white p-2 translate-y-10 -rotate-2 shadow-md">
                    LE PACK COMPLET
                </h2>
            </div>
        </div>

        <button className="bg-[#000000] font-ChangeOne text-[#f2ead5] p-2 rounded-[2px] hover:bg-[#f2ead5] transition ease-in-out duration-300 hover:text-[#000000] hover:-translate-y-2">Prendre rendez-vous</button>

      </section>
  
    </>;
  };