import { Section } from "../../components/common/Section";

export const Equipes = () => {
  return (
    <>
      <Section>
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="font-ChangeOne text-black text-2xl">Notre équipe</h2>

          <div className=" flex flex-col gap-6 md:flex-row">
            <div className="flex flex-col items-center text-center gap-2 max-w-60">
              <img src="../../../public/assets/images/avatar_1.png" alt="" />
              <p className="bg-[#ada796] font-ChangeOne text-white p-1 w-fit rounded-[6px] px-8">Jonathan LEPAGE</p>
              <p className="bg-[#000000] text-white p-1 rounded-[6px] -rotate-1 -translate-y-2 px-8">Directeur</p>
            </div>

            <div className="flex flex-col items-center text-center gap-2 max-w-60">
              <img src="../../../public/assets/images/avatar_2.png" alt="" />
              <p className="bg-[#ada796] font-ChangeOne text-white p-1 rounded-[6px] px-8">Anne-Laure</p>
              <p className="bg-[#000000] text-white p-1 rounded-[6px] -rotate-1 -translate-y-2 px-8">Assistante de Direction</p>
            </div>

            <div className="flex flex-col items-center text-center gap-2 max-w-60">
              <img src="../../../public/assets/images/avatar_3.png" alt="" />
              <p className="bg-[#ada796] font-ChangeOne text-white p-1 rounded-[6px] px-8">Yohan</p>
              <p className="bg-[#000000] text-white p-1 rounded-[6px] -rotate-1 -translate-y-2 px-8">Technicien</p>
            </div>

            <div className="flex flex-col items-center text-center gap-2 max-w-60">
              <img src="../../../public/assets/images/avatar_4.png" alt="" />
              <p className="bg-[#ada796] font-ChangeOne text-white p-1 rounded-[6px] px-8">Cédric</p>
              <p className="bg-[#000000] text-white p-1 rounded-[6px] -rotate-1 -translate-y-2 px-8">Technicien</p>
            </div>
          </div>

          <div className="flex gap-6 flex-col md:flex-row">
            <div className="flex flex-col items-center text-center gap-2 max-w-60">
              <img src="../../../public/assets/images/avatar_5.png" alt="" />
              <p className="bg-[#ada796] font-ChangeOne text-white p-1 rounded-[6px] px-8">Souleiman</p>
              <p className="bg-[#000000] text-white p-1 rounded-[6px] -rotate-1 -translate-y-2 px-8">Technicien</p>
            </div>

            <div className="flex flex-col items-center text-center gap-2 max-w-60">
              <img src="../../../public/assets/images/avatar_6.png" alt="" />
              <p className="bg-[#ada796] font-ChangeOne text-white p-1 rounded-[6px] px-8">Samuel</p>
              <p className="bg-[#000000] text-white p-1 rounded-[6px] -rotate-1 -translate-y-2 px-8">Apprenti</p>
            </div>

            <div className="flex flex-col items-center text-center gap-2 max-w-60">
              <img src="../../../public/assets/images/avatar_7.png" alt="" />
              <p className="bg-[#ada796] font-ChangeOne text-white p-1 rounded-[6px] px-8">Caner</p>
              <p className="bg-[#000000] text-white p-1 rounded-[6px] -rotate-1 -translate-y-2 px-8">Apprenti</p>
            </div>
          </div>

        </div>
      </Section>
    </>
  );
};

