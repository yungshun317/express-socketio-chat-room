let username;
let socketId;
let roomId = "frameworks";

const getUsername = () => {
    return username;
};

const setUsername = (name) => {
    username = name;
};

const getSocketId = () => {
    return socketId;
};

const setSocketId = (id) => {
    socketId = id;
};

const setRoomId = (id) => {
    roomId = id;
};

const getRoomId = () => {
    return roomId;
};

export default {
    getUsername,
    setUsername,
    getSocketId,
    setSocketId,
    getRoomId,
    setRoomId
}