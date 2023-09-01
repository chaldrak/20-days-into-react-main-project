import BaseCard from "./BaseCard";
import CourseImage from "../assets/default-course.png";

const ListCards = () => {
  const courses = [
    {
      id: 1,
      title: "Apprendre React",
      description: "Tout pour démarrer avec React",
      cover: CourseImage,
    },
    {
      id: 2,
      title: "Apprendre VueJS",
      description: "Tout pour démarrer avec le framework Vue",
      cover: CourseImage,
    },
    {
      id: 3,
      title: "Apprendre Angular",
      description: "Tout pour démarrer avec Angular",
      cover: CourseImage,
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
