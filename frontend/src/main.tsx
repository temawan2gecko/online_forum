import { createRoot } from "react-dom/client";
// Стили
import '@shared/styles/global.scss'
// Провайдеры
import { WithRouter } from "@app/providers/WithRouter.tsx";
import { WithStore } from "@app/providers/WithStore.tsx";
// Компоненты
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <WithRouter>
    <WithStore>
      <App />
    </WithStore>
  </WithRouter>
);
