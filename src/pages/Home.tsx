import { HeroBanner } from '../containers/home/heroBanner.tsx';
import { Accompagnement } from '../containers/home/accompagnement.tsx';
import { Poles } from '../containers/home/poles.tsx';
import { Urgences } from '../containers/home/urgences.tsx';
import { Chiffres } from '../containers/home/chiffres.tsx';
import { Realisation } from '../containers/home/realisation.tsx';
import { Etapes } from '../containers/home/etapes.tsx';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Accompagnement />
      <Poles />
      <Urgences />
      <Chiffres />
      <Realisation />
      <Etapes />
    </>
  );
}
