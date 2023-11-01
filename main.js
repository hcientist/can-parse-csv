import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
// import * as csv from "csv-parse/esm/index.js";
// import { parse } from "csv-parse/dist/esm/index";
import { parse } from "csv-parse/browser/esm/sync";

document.querySelector("#app").innerHTML = `
  <section>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </section>
  <section>
    <p>no headings here</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis magnam architecto ea. Reiciendis adipisci unde ducimus impedit culpa consequatur quibusdam placeat, minima esse qui obcaecati atque harum iusto voluptate incidunt.</p>
  </section>
`;

setupCounter(document.querySelector("#counter"));

fetch("beg-band-hcb-melody-and-basslines-from-flat.io.csv")
  .then((r) => r.text())
  .then((t) =>
    parse(t, {
      columns: true,
      skip_empty_lines: true,
    })
  )
  .then(console.log);
