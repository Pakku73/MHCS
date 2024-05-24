import { DynamicPrestationType } from "../../data/dynamique";
import clsx from "clsx";

export const PrestationItem = ({
  prestation,
  setSelectedPrestation,
  selectedPrestation,
}: {
  prestation: DynamicPrestationType;
  setSelectedPrestation: (prestation: DynamicPrestationType) => void;
  selectedPrestation: DynamicPrestationType;
}) => {
  const classes = clsx(
    {
      "bg-[#f2ead5]": selectedPrestation === prestation,
      "bg-white hover:-translate-y-1 hover:bg-[#f2ead5]/20 ":
        selectedPrestation !== prestation,
    },
    "flex justify-center items-center relative hover:shadow-md transition ease-in-out duration-300 cursor-pointer border-black border-[1px] rounded-[6px] p-8 gap-6"
  );
  return (
    <div onClick={() => setSelectedPrestation(prestation)} className={classes}>
      {prestation.isPackComplet && (
        <div className="absolute -top-4 px-2 py-1 bg-black uppercase text-sm right-6 -rotate-2">
          <p className="uppercase font-ChangeOne text-white translate-x-1">Le pack complet</p>
        </div>
      )}
      <img
        className="max-w-28 max-h-28 border-black border-[1px] rounded-[6px]"
        src={prestation.image.path}
        alt={prestation.image.alt}
      />
      <div className="flex flex-col">
        <h2 className="font-ChangeOne text-[#ada796] text-2xl">
          {prestation.title}
        </h2>
        <p className="text-[14px]">{prestation.description}</p>
      </div>
    </div>
  );
};
