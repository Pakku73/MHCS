export const Footer = () => {
  return (
    <>
    <section className="flex flex-col items-center justify-around gap-16 m-auto py-[50px] md:flex-row xl:flex-row">

      <div className="flex flex-col gap-20">
        <img className="max-w-[150px]" src="../../../public/assets/images/logo.png" alt="" />
        <p><b>© 2024 MHCS - Maintenance Hôtelière</b></p>
      </div>

      <div className="flex flex-col gap-10 md:flex-row xl:flex-row">
        <div className="gap-2">
          <h4><b>MHCS & VOUS</b></h4>
          <ul className="gap-5">
            <p>Notre entreprise</p>
            <p>Nos prestations</p>
            <p>Rejoignez-nous</p>
            <p>Contactez-nous</p>
          </ul>
        </div>

        <div className="gap-2">
          <h4><b>MHCS & VOUS</b></h4>
            <p>Politique de confidentialité</p>
        </div>

        <div className="flex gap-[100px]">
          <div className="gap-2">
            <h4><b>RESTONS CONNECTÉS</b></h4>
            <ul className="gap-5">
              <p>Instagram</p>
              <p>Facebook</p>
              <p>LinkedIn</p>
            </ul>
          </div>
        </div>

      </div>

    </section>
    </>
  );
};
