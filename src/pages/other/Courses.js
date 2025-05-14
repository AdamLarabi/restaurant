import React from "react";
import hotelImage from "./assets/hotel.webp";
import cuisine from "./assets/cuisine.jpeg";
import patisserie from "./assets/patisserie.jpeg";
import boucherie from "./assets/boucherie.jpg";
import emploi from "./assets/emploi.jpg";
import traiteur from "./assets/traiteur.jpg";

const courses = [
  {
    id: 1,
    title: "Gestion Hôtelière",
    description:
      "Le programme d’études en gestion hôtelière comprend un enseignement dans les opérations d’hôtel et de restaurant conçu pour préparer les étudiants à divers postes dans cette industrie mondiale.",
    image: hotelImage,
  },
  {
    id: 2,
    title: "Cuisine",
    description:
      "Rejoignez notre programme distingué et devenez un expert en arts culinaires prêt à exceller dans l’industrie gastronomique.",
    image: cuisine,
  },
  {
    id: 4,
    title: "Pâtisserie",
    description:
      "Rejoignez notre formation de 2 ans en pâtisserie et maîtrisez les techniques essentielles avec des chefs marocains. Découvrez l’art des pains, petits fours, entremets et pièces décoratives dans un environnement prestigieux.",
    image: patisserie,
  },
  {
    id: 5,
    title: "Boucherie",
    description:
      "La formation de technicien en boucherie offre une expertise pointue dans la découpe de viandes, la préparation de charcuterie de qualité et ouvre des opportunités dans l’industrie alimentaire.",
    image: boucherie,
  },
  {
    id: 7,
    title: "Traiteur",
    description:
      "Le programme d’études en service traiteur comprend un enseignement sur les opérations de traiteur et d’événementiel, conçu pour préparer les étudiants à occuper divers postes dans cette industrie dynamique et en pleine croissance.",
    image: traiteur,
  },
  {
    id: 8,
    title: "SOS Emploi",
    description:
      "Offres à nos Aimables clientèles une large gamme de profils domestiques, comme cuisinières, femmes de ménages, nounous, chauffeurs, agents de sécurité. Des profils que nous assurons leurs formations dans notre établissement, avec un suivi permanent pour garantir un bon rendement de services.",
    image: emploi,
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Nos Formations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white shadow-lg p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-center">
                {course.title}
              </h3>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <p className="text-gray-700">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
