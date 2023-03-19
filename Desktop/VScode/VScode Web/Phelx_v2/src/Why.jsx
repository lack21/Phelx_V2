import networkImage from "./images/network.png";

function WhySection() {
  return (
    <section id="why">
      <h2 className="sub-heading">
        Why <span>Us</span>
      </h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="why-row">
        <ul>
          <li>
            <i className="fa fa-check-circle"></i> High Quality Products!
          </li>
          <li>
            <i className="fa fa-check-circle"></i> Best Services!
          </li>
          <li>
            <i className="fa fa-check-circle"></i> Lowest Prices!
          </li>
          <li>
            <i className="fa fa-check-circle"></i> On Time Delivery!
          </li>
          <li>
            <i className="fa fa-check-circle"></i> No Ads!
          </li>
          <li>
            <i className="fa fa-check-circle"></i> No Unnecessary Stuff!
          </li>
          <li>
            <i className="fa fa-check-circle"></i> Unlimited Options!
          </li>
          <li>
            <i className="fa fa-check-circle"></i> Trust!
          </li>
        </ul>

        <img src={networkImage} alt="network" />
      </div>
    </section>
  );
}

export default WhySection;
