import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Calendar } from "./googleCalendar";
import { Welcome } from "./Welcome";
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Welcome />} />
            <Route path="cal" element={<Calendar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
