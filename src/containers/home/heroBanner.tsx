// import { Button } from '../../components/common/Button';

export const HeroBanner = () => {
  return <>
  
    <section className="flex flex-col bg-[url('../../../public/images/hero-banner.jpg')] bg-no-repeat">
            <div className="flex flex-col">
              <h1>
                Votre service de
              </h1>
              <h1>
                maintenance hôtelière
              </h1>
              <h1>
                Sur-mesure, 24H/24.
              </h1>
            </div>

            <div className="flex">
              <button className="bg-white color-[#000000]">Prendre rendez-vous</button>
              <button>Découvrir les prestations</button>
            </div>
    </section>

  </>;
};
