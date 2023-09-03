import BaseCard from "./BaseCard";
import code1 from "../assets/code1.jpg"
import pc1 from "../assets/pc1.jpg"
import code2 from "../assets/code2.jpg"
import pc3 from "../assets/pc3.jpg"
import learning from "../assets/learning.jpg"
import work from "../assets/work.jpg"
import lovelearn from "../assets/lovelearn.jpg"
import pc2 from "../assets/pc2.jpg"

const ListCards = () => {
  const courses = [
    {
      id: 1,
      title: "Apprendre React",
      description: "Tout pour démarrer avec React",
      chapitres: "5 Chapitres",
      star: 5,
      cover: code1,
    },
    {
      id: 2,
      title: "Apprendre VueJS",
      description: "Tout pour démarrer avec le framework Vue",
      chapitres: "5 Chapitres",
      star: 3,
      cover: pc1,
    },
    {
      id: 3,
      title: "Apprendre Angular",
      description: "Tout pour démarrer avec Angular",
      chapitres: "5 Chapitres",
      star: 2,
      cover: code2,
    },
    {
      id: 4,
      title: "Apprendre Node js",
      description: "Tout pour démarrer avec Node Js",
      chapitres: "10 Chapitres",
      star: 4,
      cover: pc3,
    },
    {
      id: 5,
      title: "Apprendre Bootstrap",
      description: "Tout pour démarrer avec Bootstrap",
      chapitres: "3 Chapitres",
      star: 2,
      cover: learning,
    },
    {
      id: 6,
      title: "Apprendre Three JS",
      description: "Tout pour démarrer avec Three JS",
      chapitres: "15 Chapitres",
      star: 5,
      cover: work,
    },
    {
      id: 7,
      title: "Apprendre Laravel",
      description: "Tout pour démarrer avec le framework Laravel de PHP",
      chapitres: "10 Chapitres",
      star: 3,
      cover: lovelearn,
    },
    {
      id: 8,
      title: "Apprendre Python",
      description: "Tout pour débuter avec le langage Python",
      chapitres: "7 Chapitres",
      star: 5,
      cover: pc2,
    },
  ];

  return (
    <div className="container">
      {courses.map((item) => (
        <BaseCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ListCards;
