import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
// import { UseContextProvider } from "./components/hooks/context/UseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    // <UseContextProvider>
        <App/>
    // </UseContextProvider>
)