import * as React from "react";
import { createRoot } from "react-dom/client";
import { MainScreen } from "./MainScreen";

const domNode = document.getElementById("MainScreen");
const root = createRoot(domNode);
root.render(<MainScreen />);
