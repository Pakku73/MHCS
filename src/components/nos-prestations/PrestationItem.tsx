import { DynamicPrestationType } from '../../data/dynamique';

export const PrestationItem = ({
  prestation,
  setSelectedPrestation,
}: {
  prestation: DynamicPrestationType;
  setSelectedPrestation: (prestation: DynamicPrestationType) => void;
}) => {
  return (
    <div
      onClick={() => setSelectedPrestation(prestation)}
      className={`flex justify-center items-center cursor-pointer border-black border-[1px] rounded-[6px] p-8 gap-6 bg-[#f2ead5]`}
    >
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
