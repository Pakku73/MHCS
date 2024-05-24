export type DynamicPrestationType = {
  image: Image;
  title: string;
  description: string;
  subImages: Image[];
};

type Image = {
  path: string;
  alt: string;
};

export const DYNAMIC_PRESTATIONS: DynamicPrestationType[] = [
  {
    title: "Accompagnement complet",
    description:
      "Accompagnement sur-mesure adapté à vos besoins et compatible avec les normes en vigueur dans vos établissements (ERP, IGH)",
    image: {
      path: "../../public/assets/images/realization3.jpg",
      alt: "Prestation 'Accompagnement complet' image",
    },
    subImages: [
      {
        path: "../../public/assets/images/realization4.jpg",
        alt: "",
      },
      {
        path: "../../public/assets/images/realization3.jpg",
        alt: " ",
      },
    ],
  },
  {
    title: "Gestion des urgences",
    description:
      "Réactif et complet, à tout moment ! Pour bénéficier de nos services de nos dépannages 24h24 et 7j/7, il faut déjà être client. Lorsque vous n’êtes pas client, contactez-nous du lundi au vendredi de 8h30 à 17h.",
    image: {
      path: "../../public/assets/images/realization1.jpg",
      alt: "Prestation 'Gestion des urgences' image",
    },
    subImages: [
      {
        path: "../../public/assets/images/realization1.jpg",
        alt: "",
      },
      {
        path: "../../public/assets/images/realization3.jpg",
        alt: " ",
      },
    ],
  },
  {
    title: "De nouveaux travaux",
    description:
      "Une prise de rendez-vous rapide pour étudier vos besoins précis. Une solution de dépannage peut être proposée en attente de l’établissement d’un devis complet et de la réalisation des travaux.",
    image: {
      path: "../../public/assets/images/realization3.jpg",
      alt: "Prestation 'De nouveaux travaux' image",
    },
    subImages: [
      {
        path: "../../public/assets/images/realization2.jpg",
        alt: "",
      },
      {
        path: "../../public/assets/images/realization3.jpg",
        alt: " ",
      },
    ],
  },
];
