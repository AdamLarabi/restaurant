import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Jean Dupont",
    message: "Un apprentissage exceptionnel et des professeurs passionnés.",
  },
  {
    id: 2,
    name: "Marie Leblanc",
    message: "Des cours qui m'ont permis de devenir chef en quelques mois.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Témoignages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 shadow-lg rounded-lg"
            >
              <p className="text-gray-700 mb-4">"{testimonial.message}"</p>
              <h4 className="text-lg font-bold">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
