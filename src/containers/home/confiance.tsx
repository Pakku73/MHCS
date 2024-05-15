export const Confiance = () => {
  return (
    <section className="flex flex-col items-center bg-[#ffffff] m-auto mt-[100px] gap-14 py-[50px]">
      <h2 className="flex flex-col font-ChangeOne text-center text-[30px]">
        Ils nous font confiance
      </h2>

      <div className="flex items-center justify-between max-w-[1280px] max-h-[50px]">
        <img
          className="max-h-[160px] m-[20px]"
          src="../../../public/assets/images/companies/hyatt.png"
          alt=""
        />
        <img
          className="max-h-[160px] m-[20px]"
          src="../../../public/assets/images/companies/marriott.png"
          alt=""
        />
        <img
          className="max-h-[160px] m-[20px]"
          src="../../../public/assets/images/companies/inwood.png"
          alt=""
        />
        <img
          className="max-h-[160px] m-[20px]"
          src="../../../public/assets/images/companies/dorchester.png"
          alt=""
        />
        <img
          className="max-h-[160px] m-[20px]"
          src="../../../public/assets/images/companies/suitcase.png"
          alt=""
        />
      </div>
    </section>
  );
};
