import serviceImage1 from "./images/service1.png";
import serviceImage2 from "./images/service2.png";
import serviceImage3 from "./images/service3.png";

function OfferSection() {
  return (
    <section id="offers">
      <h2 className="sub-heading">
        Our <span>Offers</span>
      </h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

      <div className="offers-row">
        <div>
          <img src={serviceImage1} alt="service" />
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            inventore dolorem modi, nostrum exercitationem labore!
          </p>
        </div>
        <div>
          <img src={serviceImage2} alt="service" />
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            inventore dolorem modi, nostrum exercitationem labore!
          </p>
        </div>
        <div>
          <img src={serviceImage3} alt="service" />
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
            inventore dolorem modi, nostrum exercitationem labore!
          </p>
        </div>
      </div>
    </section>
  );
}

export default OfferSection;
