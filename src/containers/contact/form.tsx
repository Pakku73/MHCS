// import { Button } from '../../components/common/Button';

export const Form = () => {
    return <>
    
      <section className="flex flex-col items-center justify-center mb-[100px]">
  
          <div className="flex flex-col items-center justify-center absolute bg-[#ada796] max-w-[900px] rounded-[10px] py-2 z-10">
    
            <div>
              <img className="translate-x-[290px] translate-y-2 w" src="../../../public/assets/icons/mail-white.svg" alt="" />
              <h1 className="uppercase font-ChangeOne text-white text-[40px]">Contactez-nous</h1>
            </div>
            <p className="text-[#f2ead5] text-[18px]">Nos équipes vous contactent sous 48 heures !</p>
      
            <div className="flex flex-col items-center justify-center mt-6 gap-6 max-w-full">
              <form className="flex gap-4" action="">
                <div className="flex flex-col gap-4">
                  <input type="text" placeholder="Nom, Prénom"/>
                  <input type="text" placeholder="Adresse email"/>
                  <input type="text" placeholder="Nom de l'entreprise"/>
                </div>

                <div className="flex flex-col gap-4">
                  <input type="text" placeholder="Votre demande concerne"/>
                  <input type="text" placeholder="Numéro de téléphone"/>
                  <input type="text" placeholder="Adresse postale"/>
                </div>
              </form>

              <p className="flex items-center justify-center px-20 text-white text-[18px]">Vos informations saisies dans ce formulaire sont traitées avec confidentialité et resteront strictement confidentielles.</p>
              <div className="flex z-15 justify-center items-center gap-10 font-ChangeOne">
                <button className="bg-[#000000] text-[#f2ead5] p-2 rounded-[6px] border-[1px] border-black hover:bg-[#f2ead5] hover:text-black transition ease-in-out duration-300  hover:-translate-y-2 shadow-md uppercase">Envoyer</button>
              </div>
            </div>
    
          </div>

        <div className="flex items-center justify-center absolute translate-y-[290px] bg-white z-20 max-w-[900px] rounded-[10px] py-5 px-6 text-[18px] gap-4">
          <img src="../../../public/assets/icons/contact-popup.svg" alt="" />
          <p>Ou contactez-nous directement par téléphone <span>07.72.50.38.81</span> ou par mail <span>secretariat@mhcsparis.com.</span></p>
        </div>
  
        <div>
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000073]"></div> 
          {/* bg-gradient-to-b from-[#ffffff99] to-[#00000073]   */}
          <img className="-mt-[55px] h-[1000px]" src="../../../public/assets/images/contact-hero-banner.jpg" alt="" />
        </div>
        
  
      </section>
  
    </>;
  };
  
