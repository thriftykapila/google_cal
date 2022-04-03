import { getCurrentDay } from "../utils/util";

export const Day = ({ day, rowIndex }) => {
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIndex === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDay(day)}`}>
          {day.format("DD")}
        </p>
      </header>
    </div>
  );
};
