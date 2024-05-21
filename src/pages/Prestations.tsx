// import { Button } from '../components/common/Button';
import { Prestations } from "../containers/nos-prestations/nos-prestations";
import { Surmeusure } from "../containers/nos-prestations/surmeusure";
import { Realisation } from "../containers/home/realisation.tsx";
import { Poles } from "../containers/home/poles.tsx";
import { Dynamique } from "../containers/nos-prestations/dynamique.tsx";

export default function nosPrestations() {
  return (
    <>
      <Prestations />
      <Surmeusure />
      <Realisation />
      <Poles />
      <Dynamique />
    </>
  );
}
