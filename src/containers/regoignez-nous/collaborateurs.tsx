export const Collaborateurs = () => {
    return <>
    
    <section className="flex flex-col items-center justify-center text-center">
        <h2 className="font font-ChangeOne text-[#ada796] text-[30px] mt-10 xl:mt-28">MHCS est à la recherche de ses collaborateurs <span className="font-Neonderthaw">de demain !</span></h2>
        <div className="flex flex-col bg-[#fffcf8] max-w-screen-2xl m-auto my-[100px]">

        <div className="flex flex-col bg-[#ffffff] shadow-md p-10 rounded-[6px] xl:px-[290px]">
            <div>
                <form className="flex flex-col gap-4 xl:flex-row" action="">
                    <div className="flex flex-col gap-4 px-[10px]">
                    <label htmlFor="" className="text-[20px]"><b>Nom, prénom</b> *</label>
                    <input type="text" placeholder="Pierre LEDUC"/>
                    <label htmlFor="" className="text-[20px]"><b>Numéro de téléphone</b> *</label>
                    <input type="text" placeholder="06.55.77.99.76"/>
                    <label htmlFor="" className="text-[20px]"><b>Adresse</b> *</label>
                    <input type="text" placeholder="1 Rue de la République"/>
                    </div>

                    <div className="flex flex-col gap-4">
                    <label htmlFor="" className="text-[20px]"><b>Votre e-mail</b> *</label>
                    <input type="text" placeholder="pierre@gmail.com"/>
                    <label htmlFor="" className="text-[20px]"><b>Poste souhaité</b> *</label>
                    <input type="text" placeholder="Stage, communication, ressources humaines, technicien, apprenti ..."/>
                    <label htmlFor="" className="text-[20px]"><b>Informations complémentaires</b> *</label>
                    <input type="text" placeholder="Dîtes-nous en plus sur vous !"/>
                    </div>
                </form>

                <div className="flex z-15 justify-center items-center gap-10 font-ChangeOne mt-6">
                <button className="bg-[#000000] text-[#f2ead5] p-2 rounded-[6px] border-[1px] hover:bg-[#f2ead5] hover:text-black transition ease-in-out duration-300  hover:-translate-y-2 shadow-md uppercase">POSTULER</button>
                </div>
            </div>
        </div>

      </div>

        <div className="max-w-[1200px] px-10 text-center mb-10 xl:px-0">
            <p><i>Nous vous informons que les informations demandées seront exclusivement gardées dans notre base de donnée pour la conception de vos devis et factures. Elles ne seront en aucun cas transmises à des organismes à des fins publicitaires.</i></p>
        </div>

        <div className="px-10">
            <div className="bg-main-500 flex flex-col justify-center items-center bg-[#f2ead5] shadow-md rounded-[6px] p-10 mt-10 gap-5 mb-10 xl:px-[500px]">
                <h2 className="uppercase font-ChangeOne text-sm xl:text-[36px]">Postuler autrement :</h2>
                <div className="flex flex-col gap-5 xl:flex-row">
                <button className="bg-[#ada796] text-white p-2 rounded-[2px] hover:bg-white hover:text-[#ada796] transition ease-in-out duration-300  hover:-translate-y-2 shadow-md"><b>07.72.50.38.81</b></button>
                <button className="bg-[#ffffff] text-[#ada796] p-2 rounded-[2px] hover:bg-[#ada796] hover:text-white transition ease-in-out duration-300  hover:-translate-y-2 shadow-md"><b>secretariat@mhcsparis.com</b></button>
                </div>
            </div>
        </div>


    </section>
  
    </>;
  };
  