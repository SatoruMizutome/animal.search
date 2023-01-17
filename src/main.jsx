import "bulma/css/bulma.css";
import * as React from 'react';
import { StrictMode } from 'react';

import { createRoot } from "react-dom";
import App from "./App";

createRoot(document.querySelector("#content")).render(<App />);


