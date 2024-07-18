import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { setMessages } from "../store/slices/chat/userSlice";
import { useSocketContext } from "../context/socketContext";
import Notification from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.user.messages);

  const { socket } = useSocketContext();

  useEffect(() => {
    socket?.on("newMessages", (newMessage) => {
      const sound = new Audio(Notification);
      sound.play();

      dispatch(setMessages([...messages, newMessage]));
    });
  }, [socket, messages, dispatch]);
};

export default useListenMessages;
