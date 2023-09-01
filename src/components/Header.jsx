import ReactLogo from "../assets/react.svg";
import { MENU } from "../constants";

const Header = () => {
  return (
    <header className="header">
      <a href="#">
        <img src={ReactLogo} alt="React Logo" />
      </a>
      <ul>
        {MENU.map((item) => (
          <li key={item.name}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
