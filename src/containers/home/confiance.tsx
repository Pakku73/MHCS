export const Confiance = () => {
    return <>
    
      <section className="flex flex-col items-center bg-[#ffffff] m-auto mt-[100px] gap-14 py-[50px]">

        <h2 className="flex flex-col font-ChangeOne text-center text-[30px]">
            Ils nous font confiance
        </h2>

        <div className="flex my-20 max-h-[5000px] xl:max-w-[1280px]">
          <div className="flex flex-col items-center justify-center max-h[100px] gap-20 md:grid md:grid-cols-2 xl:flex xl:flex-row">
            <img className="w-60 md:w-44 xl:w-52" src="../../../public/assets/images/companies/hyatt.png" alt="" />
            <img className="w-60 md:w-44 xl:w-52" src="../../../public/assets/images/companies/marriott.png" alt="" />
            <img className="w-60 md:w-44 xl:w-52" src="../../../public/assets/images/companies/inwood.png" alt="" />
            <img className="w-60 md:w-44 xl:w-52" src="../../../public/assets/images/companies/dorchester.png" alt="" />
            <img className="w-60 md:w-44 xl:w-52" src="../../../public/assets/images/companies/suitcase.png" alt="" />
          </div>
        </div>

      </section>
  
    </>;
  };