export const Accompagnement = () => {
    return <>
    
      <section className="flex flex-col bg-[#fffcf8] max-w-screen-2xl mx-auto mt-[100px]">
      {/* p-[10vh] pr-[20vh] pl-[20vh] */}

        <div className="flex flex-col justufy-center items-center gap-14 bg-[#ffffff] shadow-md p-10 px-[100px] rounded-[6px] xl:gap-20">
            <h2 className="flex flex-col font-ChangeOne text-[500] w-full text-xl m-auto text-center xl:w-[600px] xl:text-[30px] xl:leading-10">
                Un accompagnement dédié, pour des travaux en toute
                <span className="font-Neonderthaw text-5xl xl:text-[50px]">serenite</span>
            </h2>
            <div className="flex flex-col relative justify-center items-center gap-20 md:flex-col md:gap-14 xl:flex-row xl:gap-36">
                <img className="rounded-[6px]" src="../../../public/assets/images/support-visual.jpg" alt="" />

                <div className="flex flex-col gap-6 md:grid md:grid-col-2 xl:-translate-x-20 xl:absolute">
                    <div className="flex flex-col md:flex-row gap-6 xl:flex-col">
                        <div className="bg-[#f2ead5] text-xl font-ChangeOne p-4 rounded-md shadow-md w-32">
                            <p>Réactivité</p>
                        </div>
                        <div className="bg-[#f2ead5] text-xl font-ChangeOne p-4 rounded-md shadow-md w-32">
                            <p>Flexibilité</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 xl:flex-col">
                        <div className="bg-[#f2ead5] text-xl font-ChangeOne p-4 rounded-md shadow-md w-48">
                            <p>Service premium</p>
                        </div>
                        <div className="bg-[#f2ead5] text-xl font-ChangeOne p-4 rounded-md shadow-md w-56">
                            <p>Interlocuteur unique</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col text-[#000000] justify-center items-center md:items-center md:justify-center xl:items-start xl:translate-x-4 xl:-translate-y-28 xl:px-6">
                    <h2 className="font-ChangeOne text-[20px]">Pourquoi choisir MHCS ?</h2>
                    <br/>
                    <p>
                        MHCS trouve son essence dans la volonté de répondre 
                        de manière précise et efficace aux besoins et aux exigences 
                        spécifiques du monde hôtelier. Notre expertise s'est solidement 
                        établie pour vous offrir des conseils avisés et éclairés, 
                        guidant chaque étape de la maintenance et de la rénovation 
                        au sein de votre établissement.
                    </p>
                    <br/>
                    <p>
                        Nous sommes fiers de notre capacité à conjuguer performance 
                        et durabilité, offrant ainsi à nos clients une approche globale, 
                        pragmatique et responsable pour faire face aux défis actuels 
                        du secteur hôtelier.
                    </p>
                </div>
            </div>

        </div>

      </section>
  
    </>;
  };