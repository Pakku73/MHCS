export const Realisation = () => {
  return (
    <>
      <section className="flex flex-col bg-[#fffcf8] max-w-screen-2xl m-auto mt-[100px]">
        {/* p-[10vh] pr-[20vh] pl-[20vh] */}

        <div className="flex flex-col bg-[#ffffff] shadow-md p-10 pr-[10vh] pl-[10vh] rounded-[6px]">
          <h2 className="flex flex-col font-ChangeOne text-[500] text-[30px] m-auto text-center w-[600px]">
            Quelques unes de nos
            <span className="font-Neonderthaw text-[50px]">réalisations</span>
          </h2>
          {/* Renseigne toi sur la librairie "SWIPER JS" pour créer le caroussel, il y a un package pour react. */}
          <div className="flex">
            <div className="flex justify-center items-center align-center border-[2px] border-[#ada796] p-2 max-h-10 rounded-[30px]">
              <img
                className=""
                src="../../../public/assets/icons/left-chevron.svg"
                alt=""
              />
            </div>
            {/* Les max width ici ne fonctionne pas, tu n'a pas ajouter d'unité derrière le nombres */}
            <img
              className="rounded-[6px] max-w-[330] m-4"
              src="../../../public/assets/images/realization1.jpg"
              alt=""
            />
            <img
              className="rounded-[6px] max-w-[330] m-4"
              src="../../../public/assets/images/realization2.jpg"
              alt=""
            />
            <img
              className="rounded-[6px] max-w-[330] m-4"
              src="../../../public/assets/images/realization3.jpg"
              alt=""
            />
            <img
              className="rounded-[6px] max-w-[330] m-4"
              src="../../../public/assets/images/realization4.jpg"
              alt=""
            />
            <div className="flex justify-center items-center align-center border-[2px] border-[#ada796] p-2 max-h-10 rounded-[30px]">
              <img
                className=""
                src="../../../public/assets/icons/right-chevron.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
