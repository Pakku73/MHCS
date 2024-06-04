export const Conseils = () => {
    return <>
    
      <section className="flex bg-[#fffcf8] max-w-screen-2xl mx-auto mt-[100px]">
      {/* p-[10vh] pr-[20vh] pl-[20vh] */}

        <div className="flex flex-col bg-[#ffffff] shadow-md p-10 max-w-full px-[100px] rounded-[6px]">

            <div className="flex flex-col-reverse gap-36 xl:flex-row">
  
                <div className="flex flex-col text-[#000000] justify-center">
                    <h2 className="flex flex-col font-ChangeOne text-[500] text-[30px] text-start">
                        Conseils & accompagnement
                        <span className="font-Neonderthaw text-[50px]">personnalisé</span>
                    </h2>
                    <p>
                    Nous mettons un point d’honneur pour vous proposer les solutions adaptées
                     à chaque situation, toujours dans une optique d’excellence du service, 
                     mais aussi d’optimisation économique ainsi qu’écologique.
                    </p>
                    <br/>
                    <p>
                        Ayant collaboré avec de nombreux professionnels spécialisés dans leur 
                        domaines respectifs pendant toutes ces années, nous avons pu les 
                        évaluer et tirer le meilleur de chacun. Nous avons alors créé une relation 
                        basée sur la confiance, l’honnêteté et la qualité du travail.
                    </p>
                    <br />
                    <p>
                        C’est en ce sens que nous souhaitons, si nos valeurs MHCS ont su vous convaincre,
                        avancer ensemble en partageant une relation sincère et pérenne.
                    </p>
                    <button className="bg-[#000000] max-w-60 font-ChangeOne text-[#f2ead5] p-2 mt-10 rounded-[2px] hover:bg-[#f2ead5] hover:text-black transition ease-in-out duration-300  hover:-translate-y-2 shadow-md">Prendre rendez-vous</button>
                </div>

                <img className="rounded-[6px] w-96 md:w-full" src="../../../public/assets/images/advice-section-image.jpg" alt="" />

            </div>

        </div>

      </section>
  
    </>;
  };