import { CreatEventButton } from "./CreatEventButton";
import { SmallCalendar } from "./SmallCalendar";

export const Sidebar = () => {
  return (
    <aside className="border p-5 w-64">
      <CreatEventButton />
      <SmallCalendar />
    </aside>
  );
};
