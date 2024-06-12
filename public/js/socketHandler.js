import ui from "./ui.js";
import store from "./store.js";

let socket = null;

const connectToSocketIoServer = () => {
    socket = io("/");

    socket.on("connect", () => {
        console.log("Successfully connected" + socket.id);
        store.setSocketId(socket.id);
        registerActiveSession();
    });
}

const registerActiveSession = () => {
    const userData = {
        username: store.getUsername(),
        roomId: store.getRoomId(),
    };

    socket.emit("register-new-user", userData);
};

const sendGroupChatMessage = (author, messageContent) => {
    const messageData = {
        author,
        messageContent,
    };

    socket.emit("group-chat-message", messageData);
};

const sendRoomMessage = (data) => {
    socket.emit("room-message", data);
};

export default {
    connectToSocketIoServer,
    registerActiveSession,
    sendGroupChatMessage,
    sendRoomMessage
};