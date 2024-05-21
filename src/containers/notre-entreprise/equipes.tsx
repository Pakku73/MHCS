import { Section } from "../../components/common/Section";

export const Equipes = () => {
  return (
    <>
      <Section>
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="font-ChangeOne text-black text-2xl">Notre équipe</h2>

          <div className=" flex gap-6">
            <div className="flex flex-col text-center gap-2 max-w-60">
              <img src="../../../public/assets/images/avatar_1.png" alt="" />
              <p className="bg-[#ada796] font-ChangeOne text-white p-1 rounded-[6px]">Jonathan LEPAGE</p>
              <p className="bg-[#000000] text-white p-1 rounded-[6px] -rotate-1 -translate-y-2">Assistante de Direction</p>
            </div>

            <div className="flex flex-col text-center gap-2 max-w-60">
              <img src="../../../public/assets/images/avatar_2.png" alt="" />
              <p className="bg-[#ada796] font-ChangeOne text-white p-1 rounded-[6px]">Anne-Laure</p>
              <p className="bg-[#000000] text-white p-1 rounded-[6px] -rotate-1 -translate-y-2">Directeur</p>
            </div>

            <div className="flex flex-col text-center gap-2 max-w-60">
              <img src="../../../public/assets/images/avatar_3.png" alt="" />
              <p className="bg-[#ada796] font-ChangeOne text-white p-1 rounded-[6px]">Yohan</p>
              <p className="bg-[#000000] text-white p-1 rounded-[6px] -rotate-1 -translate-y-2">Technicien</p>
            </div>

            <div className="flex flex-col text-center gap-2 max-w-60">
              <img src="../../../public/assets/images/avatar_4.png" alt="" />
              <p className="bg-[#ada796] font-ChangeOne text-white p-1 rounded-[6px]">Cédric</p>
              <p className="bg-[#000000] text-white p-1 rounded-[6px] -rotate-1 -translate-y-2">Technicien</p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col text-center gap-2 max-w-60">
              <img src="../../../public/assets/images/avatar_5.png" alt="" />
              <p className="bg-[#ada796] font-ChangeOne text-white p-1 rounded-[6px]">Souleiman</p>
              <p className="bg-[#000000] text-white p-1 rounded-[6px] -rotate-1 -translate-y-2">Technicien</p>
            </div>

            <div className="flex flex-col text-center gap-2 max-w-60">
              <img src="../../../public/assets/images/avatar_6.png" alt="" />
              <p className="bg-[#ada796] font-ChangeOne text-white p-1 rounded-[6px]">Samuel</p>
              <p className="bg-[#000000] text-white p-1 rounded-[6px] -rotate-1 -translate-y-2">Apprenti</p>
            </div>

            <div className="flex flex-col text-center gap-2 max-w-60">
              <img src="../../../public/assets/images/avatar_7.png" alt="" />
              <p className="bg-[#ada796] font-ChangeOne text-white p-1 rounded-[6px]">Caner</p>
              <p className="bg-[#000000] text-white p-1 rounded-[6px] -rotate-1 -translate-y-2">Apprenti</p>
            </div>
          </div>

        </div>
      </Section>
    </>
  );
};

