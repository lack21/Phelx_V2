import logoImage from "./images/logo.png";
import iconImage from "./images/icon.png";

function HeaderSection() {
  function ChangeBackground() {
    document.body.classList.toggle("dark-body");
  }

  return (
    <header id="header">
      <img src={logoImage} alt="logo" className="logo" />

      <div className="content">
        <h1 className="title">
          Make It <span>Better,</span>
          <br />
          Make It <span>Faster!</span>
        </h1>
        <p className="sub-title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          nisi,
          <br /> dolorum omnis veniam excepturi repellendus officia cupiditate
          ducimus at!
        </p>
      </div>

      <ul className="sidebar">
        <li>
          <img src={iconImage} alt="icon" className="sidebar-img" />
        </li>
        <li>
          <a href="#header">
            <i className="fa fa-home"></i>
          </a>
        </li>
        <li>
          <a href="#offers">
            <i className="fa fa-sitemap"></i>
          </a>
        </li>
        <li>
          <a href="#why">
            <i className="fa fa-leanpub"></i>
          </a>
        </li>
        <li>
          <a href="#testimonials">
            <i className="fa fa-user"></i>
          </a>
        </li>
        <li>
          <a href="#contact">
            <i className="fa fa-phone"></i>
          </a>
        </li>
        <li>
          <i className="fa fa-adjust" onClick={ChangeBackground}></i>
        </li>
      </ul>

      <a href="#offers" className="down-btn">
        <i className="fa fa-arrow-down"></i>
      </a>
    </header>
  );
}

export default HeaderSection;
