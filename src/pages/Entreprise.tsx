// import { Button } from '../components/common/Button';
import { Entreprise } from '../containers/notre-entreprise/entreprise';
import { Histoire } from '../containers/notre-entreprise/notreHistoire';
import { Conseils } from '../containers/notre-entreprise/conseils';
import { Equipes } from '../containers/notre-entreprise/equipes';
import { Zones } from '../containers/notre-entreprise/zones';
import { Confiance } from '../containers/home/confiance';

export default function notreEntreprise() {
  return (
    <>
      <Entreprise />
      <Histoire />
      <Conseils/>
      <Equipes/>
      <Zones/>
      <Confiance/>
    </>
  );
}
