import { useState } from 'react';
import { Section } from '../../components/common/Section';
import { PrestationItem } from '../../components/nos-prestations/PrestationItem';
import {
  DYNAMIC_PRESTATIONS,
  DynamicPrestationType,
} from '../../data/dynamique';

export const Dynamique = () => {
  const [selectedPrestation, setSelectedPrestation] =
    useState<DynamicPrestationType>(DYNAMIC_PRESTATIONS[0]);

  return (
    <Section>
      <div className="flex flex-col gap-6 xl:flex-row">
        <div className="flex flex-col gap-4 max-w-3xl">
          {DYNAMIC_PRESTATIONS.map((prestation, index) => (
            <PrestationItem
              key={index}
              prestation={prestation}
              setSelectedPrestation={setSelectedPrestation}
              selectedPrestation={selectedPrestation}
            />
          ))}
        </div>

        <div className="flex flex-col gap-6 max-w-3xl">
          <div className="flex justify-center items-center gap-6">
            <div className="w-[2px] h-[160px] bg-black"></div>
            <div className="flex flex-col gap-2">
              <h2 className="font-ChangeOne text-3xl">
                {selectedPrestation.title}
              </h2>
              <p>{selectedPrestation.subDescription}</p>
            </div>
          </div>
          <div className="flex gap-4">
            {selectedPrestation.subImages.map((image, index) => (
              <img
                className="max-w-44 border-black border-[1px] rounded-[10px]"
                key={index}
                src={image.path}
                alt={image.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
