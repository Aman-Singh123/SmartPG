
  import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
  
import "./styles/index.css";
import { ReviewProvider } from "./app/context/ReviewContext.jsx";
import { PgProvider } from "./app/context/PgContext.jsx";

createRoot(document.getElementById("root")!).render(
  <ReviewProvider>
    <PgProvider>
      <App />
    </PgProvider>
  </ReviewProvider>);
  