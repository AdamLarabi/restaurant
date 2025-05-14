import React from "react";
import { FaCertificate, FaUtensils, FaBookOpen } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">
          À propos de l'École des Chefs
        </h2>
        <p className="text-gray-700 mb-12">
          L'École des Chefs forme les futurs talents culinaires en offrant des
          formations de qualité dans les arts de la cuisine. Nous croyons en
          l'excellence et le savoir-faire.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center">
              <FaBookOpen className="text-[#ffc100] text-4xl mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Formations de Qualité
            </h3>
            <p className="text-gray-600">
              Programmes approuvés par des chefs bien connus au Maroc et
              ailleurs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center">
              <FaUtensils className="text-[#ff9a00] text-4xl mb-4 " />
            </div>
            <h3 className="text-xl font-semibold mb-2">Formateurs Qualifiés</h3>
            <p className="text-gray-600">
              Nos chefs formateurs ont des années d'expertise.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center">
              <FaCertificate className="text-[#ff7400] text-4xl mb-4" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Obtenir une Certification
            </h3>
            <p className="text-gray-600">
              Couronnez votre expérience avec un certificat officiellement
              signé.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
