import { HeroBanner } from '../containers/home/heroBanner.tsx';
import { Accompagnement } from '../containers/home/accompagnement.tsx';
import { Poles } from '../containers/home/poles.tsx';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Accompagnement />
      <Poles />
    </>
  );
}
