import reactLogo from "./assets/react.svg";
import myLogo from "./assets/icon.png";

export default function Header() {
  return (
    <header className="header">
      <img src={reactLogo} alt="Chef-logo" className="logo" />
      {/* <img src={myLogo} alt="YDK-logo" className="logo" /> */}
      <h1 className="wider">Chef Claude</h1>
    </header>
  );
}
