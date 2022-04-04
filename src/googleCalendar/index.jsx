import { useContext, useEffect, useState } from "react";
import { CalendarHeader } from "./components/CalendarHeader";
import { Month } from "./components/Month";
import { Sidebar } from "./components/Sidebar";
import { getMonth } from "./utils/util";
import GlobalContext from "./context/GlobalContext";
export const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
};
