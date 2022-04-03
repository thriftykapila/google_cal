import { useState } from "react";
import "./App.css";
import { CalendarHeader } from "./components/CalendarHeader";
import { Month } from "./components/Month";
import { Sidebar } from "./components/Sidebar";
import { getMonth } from "./utils/util";
export const App = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  return (
    <>
      <div className="=" h-screen flex flex-columns>
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
};
