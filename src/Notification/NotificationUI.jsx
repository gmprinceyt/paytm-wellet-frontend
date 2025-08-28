import { Ban, CircleCheck, Info } from "lucide-react";

const TypeIcons = {
  error: <Ban className="text-white" />,
  success: <CircleCheck className="text-white" />,
  info: <Info className="text-white" />,
};
const BgType = {
  error: "bg-red-500",
  success: "bg-green-500",
  info: "bg-amber-500",
};

const Notification = ({ type, message}) => {
  return (
    <div
      className={`${BgType[type]} inline-block text-white rounded-md shadow p-2 `}
    >
      <span className="flex items-center  gap-2">
        {TypeIcons[type]}
        {message}
      </span>
    </div>
  );
};

export default Notification;
