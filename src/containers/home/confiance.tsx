import { HiddenWrapper } from '../../components/common/[DEVONLY]/hiddenWrapper';

export const Confiance = () => {
  return (
    <HiddenWrapper>
      <section className="flex flex-col items-center bg-[#ffffff] m-auto mt-[100px] gap-14 py-[50px]">
        <h2 className="flex flex-col font-ChangeOne text-center text-[30px]">
          Ils nous font confiance
        </h2>

        <div className="flex max-w-[1280px] max-h-[50px]">
          <div className="flex items-center justify-center max-h[100px] gap-20">
            <img
              src="../../../public/assets/images/companies/hyatt.png"
              alt=""
            />
            <img
              src="../../../public/assets/images/companies/marriott.png"
              alt=""
            />
            <img
              src="../../../public/assets/images/companies/inwood.png"
              alt=""
            />
            <img
              src="../../../public/assets/images/companies/dorchester.png"
              alt=""
            />
            <img
              src="../../../public/assets/images/companies/suitcase.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </HiddenWrapper>
  );
};
