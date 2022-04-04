import plusImage from "../assets/plus.svg";
export const CreatEventButton = () => {
  return (
    <button className="border p-2 rounded-full flex items-center shadow-md hover:shadow-xl">
      <img className="h-7 w-7" src={plusImage} alt="create event" />
      <span className="pl-3 pr-7">Create</span>
    </button>
  );
};
