import Logo from "../Logo/Logo";
import Search from "../Search/Search";

export default function Header({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      {children}
    </nav>
  );
}
