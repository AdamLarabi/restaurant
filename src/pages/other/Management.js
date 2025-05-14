import React from "react";
import Navbar from "./Navbar";
import img1 from "./assets/management_page.jpg";
import { FaEnvira } from "react-icons/fa";
import Footer from "./Footer";
import img11 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import img6 from "./assets/img6.jpg";
const courses = [
  {
    id: 1,
    title: "Gestion Hôtelière",
    image: img11,
  },
  {
    id: 2,
    title: "Cuisine Professionnelle",
    image: img2,
  },
  {
    id: 3,
    title: "Pâtisserie",
    image: img3,
  },
  {
    id: 4,
    title: "Boucherie",
    image: img4,
  },
  {
    id: 5,
    title: "Traiteur",
    image: img5,
  },
  {
    id: 6,
    title: "SOS Emploi",
    image: img6,
  },
];

const handleInscription = () => {
  console.log("soummetter");
};

function Management() {
  return (
    <>
      <Navbar />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg overflow-hidden mb-6 md:mb-0 md:mr-6">
              <img
                src={img1}
                alt="first img"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 ">
              <h2 className="text-4xl font-bold text-center md:text-left mb-4">
                Management et Hôtellerie
              </h2>
              <p className="text-gray-700">
                La formation en Gestion Hôtelière à SOS Chef Casablanca est
                conçue pour former des professionnels capables de gérer
                efficacement les différents aspects de l’hôtellerie moderne.
              </p>
              <div className="p-6">
                <ul className="space-y-6 max-w-md">
                  <li className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#ffc100] flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <h3 className="text-[#ffc100] text-lg font-bold mb-2">
                      Comptabilité Hôtelière
                    </h3>
                  </li>

                  <li className="relative pl-10 sm:ml-0 md:ml-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#ff9a00] flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <h3 className="text-[#ff9a00] text-lg font-bold mb-2">
                      Gestion des Ventes
                    </h3>
                  </li>

                  <li className="relative pl-10 sm:ml-0 md:ml-20">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#ff7400] flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <h3 className="text-[#ff7400] text-lg font-bold mb-2">
                      Approvisionnement et Stocks
                    </h3>
                  </li>

                  <li className="relative pl-10 sm:ml-0 md:ml-32">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#ff4d00] flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <h3 className="text-[#ff4d00] text-lg font-bold mb-2">
                      Ressources Humaines
                    </h3>
                  </li>

                  <li className="relative pl-10 sm:ml-0 md:ml-44">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#ff0000] flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">5</span>
                    </div>
                    <h3 className="text-[#ff0000] text-lg font-bold mb-2">
                      Évaluation du Marché
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={handleInscription}
              className=" bg-orange-400 text-white py-4 px-8 rounded-lg hover:bg-orange-600 hover:scale-105 transform transition duration-300 ease-in-out"
            >
              <div className="flex items-center space-x-2">
                <span>S'inscrire</span>
                <FaEnvira />
              </div>
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10 mb-10 ml-5 mr-5">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-110 duration-300 ease-in-out"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Management;
