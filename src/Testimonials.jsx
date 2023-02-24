import userImage1 from "./images/user_2.jpg";
import userImage2 from "./images/user_3.jpg";
import userImage3 from "./images/user_4.jpg";

function TestimonialsSection() {
  const container = document.querySelector(".container");
  const slideBtns = document.querySelectorAll(".slide-btn");

  slideBtns.forEach((item, index) => {
    item.addEventListener("click", () => {
      container.style.transform = `translateX(-${index * 100}vw)`;
      slideBtns.forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
    });
  });

  return (
    <section id="testimonials">
      <h2 className="sub-heading">
        Our <span>Testimonials</span>
      </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="container">
        <div>
          <img src={userImage1} alt="user" />
          <div className="info">
            <h3>James Johnson</h3>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              aliquid expedita quas voluptatum unde totam sequi consectetur aut
              doloremque, at neque laboriosam error repudiandae quod!"
            </p>
          </div>
        </div>
        <div>
          <img src={userImage2} alt="user" />
          <div className="info">
            <h3>Lana Palova</h3>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              aliquid expedita quas voluptatum unde totam sequi consectetur aut
              doloremque, at neque laboriosam error repudiandae quod!"
            </p>
          </div>
        </div>
        <div>
          <img src={userImage3} alt="user" />
          <div className="info">
            <h3>Alex Hudson</h3>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              aliquid expedita quas voluptatum unde totam sequi consectetur aut
              doloremque, at neque laboriosam error repudiandae quod!"
            </p>
          </div>
        </div>
      </div>

      <div className="slider">
        <div className="slide-btn active"></div>
        <div className="slide-btn"></div>
        <div className="slide-btn"></div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
