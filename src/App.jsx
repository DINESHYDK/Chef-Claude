import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Main from "./Main";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Header />
    <Main />
  </>
);
