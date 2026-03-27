const cities = [
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Tanger",
  "Fes",
  "Agadir",
  "Meknes",
  "Oujda",
  "Kenitra",
  "Tetouan",
];

export default function Cities() {
  return (
    <section id="section-cities" className="reach-anywhere fade-up">
      <div className="skewed"></div>
      <div className="container">
        <div className="max-w-md m-x-auto">
          <h3 className="text-center">
            We come to you, wherever you are!
          </h3>
          <h5 className="text-center">
            Present across all major Moroccan cities, JABB connects brands with
            real consumers for authentic CX intelligence.
          </h5>
        </div>

        <div className="city-pills">
          {cities.map((city) => (
            <span key={city} className="city-pill">
              {city}
            </span>
          ))}
        </div>

        <div className="max-w-md m-x-auto flex flex--align-center flex--column">
          <h3 className="text-center">
            Are our services available in your city?
          </h3>
          <a href="#contact" className="button">
            Check availability
          </a>
        </div>
      </div>
    </section>
  );
}
