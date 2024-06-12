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

export default {
    connectToSocketIoServer,
    registerActiveSession
};