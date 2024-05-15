export const Etapes = () => {
    return <>
    
      <section className="flex flex-col items-center max-w-screen-2xl m-auto mt-[100px] gap-14">

        <h2 className="flex flex-col font-Arial text-center text-[20px]">
            Les étapes à suivre
            <span className="font-ChangeOne uppercase text-[#ada796]">SIMPLE, RAPIDE ET GARANTI.</span>
        </h2>

        <div className="flex items-center max-w-screen-2xl">
            
            <div className="flex flex-col bg-[#dedad2] max-w-[330px] rounded-[6px] items-center p-4">
                <h2 className="font-ChangeOne text-center z-10 bg-[#ada796] text-white p-2 rounded-[6px] -translate-y-10 -translate-x-28 -rotate-2">
                    Je prends contact
                </h2>
                <img className="max-w-40" src="../../../public/assets/icons/contact.png" alt="" />
                <p className="text-center">
                    Je prends contact via le formulaire de contact sur le site internet ou j’appelle directement le 07.72.50.38.81.
                </p>
            </div>

            <img className="mx-[30px] opacity-20 max-w-[10px]" src="../../../public/assets/icons/right-chevron.svg" alt="" />


            <div className="flex flex-col bg-[#dedad2] max-w-[330px] rounded-[6px] items-center p-4">
                <h2 className="font-ChangeOne text-center z-10 bg-[#ada796] text-white p-2 rounded-[6px] -translate-y-10 -translate-x-28 -rotate-2">
                    J'établis un rdv avec un expert
                </h2>
                <img className="max-w-40" src="../../../public/assets/icons/expert-rdv.png" alt="" />
                <p className="text-center">
                    La prise de rendez-vous sera faite suite aux échanges entre vous et nos équipes, selon vos besoins et votre calendrier.
                </p>
            </div>

            <img className="mx-[30px] opacity-20 max-w-[10px]" src="../../../public/assets/icons/right-chevron.svg" alt="" />


            <div className="flex flex-col bg-[#dedad2] max-w-[330px] rounded-[6px] items-center p-4">
                <h2 className="font-ChangeOne text-center z-10 bg-[#ada796] text-white p-2 rounded-[6px] -translate-y-10 -translate-x-28 -rotate-2">
                    Je souscris à une offre personnalisée
                </h2>
                <img className="max-w-40" src="../../../public/assets/icons/souscription.png" alt="" />
                <p className="text-center">
                    Suite à notre premier rendez-vous, nous établissons ensemble une offre parfaitement adaptée à votre établissement.
                </p>
            </div>

            <img className="mx-[30px] opacity-20 max-w-[10px]" src="../../../public/assets/icons/right-chevron.svg" alt="" />

        </div>

      </section>
  
    </>;
  };