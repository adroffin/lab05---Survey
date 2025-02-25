import React from "react";
import Form from "./components/Form";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <div class="text-bg-success p-3">
          <h1>Encuesta Interactiva</h1>
        </div>
        <hr />
      </div>
      <Form />
    </div>
  );
}
