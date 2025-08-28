import { useState } from "react";
import Notification from "./NotificationUI";

export const useNotify = (position = "top-center") => {
  const [notifyStack, setNotifyStack] = useState([]);

  const AddNotify = (message, type) => {
    const id = Date.now();
    setNotifyStack((prev) => [
      ...prev,
      {
        message,
        type,
        id,
      },
    ]);

    setTimeout(() => {
      setNotifyStack((prev) => prev.filter((p) => p.id !== id));
    }, 2000);
  };

  const toast = {
    success: (message) => AddNotify(message, "success"),
    error: (message) => AddNotify(message, "error"),
    info: (message) => AddNotify(message, "info"),
  };

  const Toaster = notifyStack.length  > 0 ? (
    <div className={`fixed z-10  gap-1 flex flex-col ${positions[position]} -translate-x-1/2 transition-all `}>
      {notifyStack.map((noti) => {
        return (
          <Notification key={noti.id} {...noti} />
        );
      })}
    </div>
  ) : null;

  return { Toaster, toast };
};

const positions = {
  "top-center": "top-8 left-1/2",
  "top-left": "top-8 left-8",
  "top-right": "top-8 right-8",
  "bottom-center": "bottom-8 left-1/2",
  "bottom-left": "bottom-8 left-8",
  "bottom-right": "bottom-8 right-8",
};
