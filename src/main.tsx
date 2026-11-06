import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";

interface AppConfig {
  title: string;
}

async function loadConfig(): Promise<AppConfig> {
  return { title: "App Two" };
}

async function start(): Promise<void> {
  const config = await loadConfig();
  const container = document.getElementById("root");
  if (!container) {
    throw new Error("Missing root element");
  }
  createRoot(container).render(<App title={config.title} />);
}

void start();
