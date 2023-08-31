import ReactLogo from "../assets/react.svg";

const Header = () => {
  return (
    <header className="header">
      <a href="#">
        <img src={ReactLogo} alt="React Logo" />
      </a>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
