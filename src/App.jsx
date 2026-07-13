import { BrowserRouter, Routes, Route } from "react-router-dom";

import FormValidation from "./form-validation-bt";
import FormStudent from "./form-validation-bt/Form-Student";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<FormValidation />}>
          <Route path="form-student" element={<FormStudent />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
