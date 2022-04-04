import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cache } from "./Cache/cache";
import { Calendar } from "./googleCalendar/Calendar";
import { Learn } from "./Learn/learn";
import { Projects } from "./Projects/Projects";
import { Welcome } from "./Welcome/Welcome";
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Welcome />} />

            <Route path="learn">
              <Route index element={<Learn />} />
              <Route path="cache" element={<Cache />} />
            </Route>

            <Route path="projects">
              <Route index element={<Projects />} />
              <Route path="cal" element={<Calendar />} />
            </Route>

            {/* <Route path="me">
              <Route index element={<Me />} />
              <Route path="diary" element={<Diary />} />
            </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
