import { useRouter } from "next/router";
import ButtonText from "../buttons/button-text";

const Card = (props) => {
  const { todo, onPress } = props;
  const router = useRouter();
  const isCreate = todo?.updated_at ? "update" : "create";
  let date = new Date(todo?.updated_at ? todo?.updated_at : todo?.create_at);
  const handlePress = (type = "") => {
    if (type === "edit") {
      onPress(type, todo?.id);
    } else if (type === "delete") {
      onPress(type, todo?.id);
    }
  };
  return (
    <div className="bg-slate-400/10 shadow-lg px-5 py-2 rounded-lg w-[20em]">
      <div className="space-y-3">
        <h3 className="text-3xl font-bold capitalize line-clamp-1">
          {todo?.title}
        </h3>
        <div className="border-y-2 border-white py-2">
          <p className="leading-7 text-lg font-medium text-black">
            {todo?.description}
          </p>
          <p className=" text-base font-normal text-gray-500/70 italic mt-4">
            {isCreate ? "Update at" : "Create at"}: {date?.toDateString()}
          </p>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <ButtonText
            label="Edit"
            styleContainer={"animate-none bg-gray-900 text-white"}
            onPress={() => handlePress("edit")}
          />
          <ButtonText
            label="Delete"
            styleContainer={"animate-none bg-red-500 text-white"}
            onPress={() => handlePress("delete")}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
