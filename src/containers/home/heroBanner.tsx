export const HeroBanner = () => {
  return (
    // Pas besoin d'ajouter ce ' <> ', c'est ce que l'on appelle une fragement, en React ton jsx dois constamment être wrappé dans un seul parent
    // et quand ce n'est pas possible, car tu voudrais que les deux éléments que tu as soit côte à côte dans le DOM, on ajoute un fragment à la place
    // d'un div, le fragment ne rend rien dans le dom, ce qui te permet de ne pas avoir une div qui wrappe tes deux éléments, mais ces
    // derniers directement rendu côte a côte sans parents (je te ferais une demo à mon retour fais moi y penser !)
    <>
      {/* Ici essaie plutôt d'utiliser le composant Section en wrapper de ton contenu, cela te permettra de le réutiliser constamment afin que les classes tailwind ou les potentiels props
      que tu souhaiterais lui passer soit centraliser au même endroit ( en l'occurence, sur le composant Section ). Je te conseil de te renseigner sur ce qu'est
      'children' en react, on en as un peu parler, tu en auras besoin pour crée le composant Section. */}
      <section className="flex flex-col bg-no-repeat">
        <div>
          <div className="flex flex-col mt-80 absolute z-15 h-full w-full">
            {/* Attention à l'utilisation des margin, en général quand ton margin sur l'axe x dépasse '4' c'est que tu t'y prend mal ( sauf certain cas d'exception ) ici, il vaut mieux essayer de centrer le bloc. */}
            <h1 className="flex flex-col mb-10 justify-center items-center ml-50 z-10 text-[500] gap-4 text-6xl text-center">
              <span className="font-ChangeOne uppercase text-[#f2ead5] [text-shadow:_0_4px_0_rgb(0_0_0_/_14%)]">
                Votre service de
              </span>
              <span className="font-Neonderthaw text-[68px] text-[#f2ead5] [text-shadow:_0_4px_0_rgb(0_0_0_/_14%)]">
                maintenance hôtelière
              </span>
              <span className="font-ChangeOne uppercase text-[#f2ead5] [text-shadow:_0_4px_0_rgb(0_0_0_/_14%)]">
                Sur-mesure, 24H/24.
              </span>
            </h1>

            <div className="flex z-10 justify-center items-center gap-10">
              <button className="bg-[#f2ead5] text-black p-2 rounded-[2px] hover:bg-[#000000] hover:text-[#f2ead5]">
                Prendre rendez-vous
              </button>
              <button className="bg-[#ada796] text-white p-2 rounded-[2px] hover:bg-[#ffffff] hover:text-[#ada796]">
                Découvrir les prestations
              </button>
            </div>
          </div>

          <div>
            {/* L'index par défaut est "0" pas besoin du z-0 */}
            <div className="absolute z-0 top-0 left-0 w-full bg-gradient-to-b from-[#ffffff99] to-[#00000073] h-full"></div>{' '}
            {/*div 1*/}
            {/* Utilisation maladroite des vh, étant donné qu'ils dépendent de la hauteur de l'écran de l'utilisateur, on ne les utilises que pour définir la hauteur d'un bloc / contenu */}
            <img
              className="-mt-[5.5vh] h-full"
              src="../../../public/assets/images/hero-banner.jpg"
              alt=""
            />{' '}
            {/*div 2*/}
          </div>
        </div>
      </section>
    </>
  );
};

// bg-[url('../../../public/assets/images/hero-banner.jpg')]
// #50d71e
