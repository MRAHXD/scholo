// components/Testimonials.js

export default function Testimonials() {
    const testimonials = [
      {
        name: 'Pooja',
        text: 'This is an amazing platform.',
      },
      {
        name: 'Aqeel',
        text: 'I love the easy application process!',
      },
      {
        name: 'Mary Whatson',
        text: 'Secure payments are the best part.',
      }
    ];
    const testimonialComponents = testimonials.map((testimonial, index) =>
      <div key={index} className="p-5 border">
        <h3 className="text-lg font-bold mb-2">{testimonial.name}</h3>
        <p>{testimonial.text}</p>
      </div>
    );
  
    return (
      <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonialComponents}
      </section>
    )
  }
  