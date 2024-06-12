import store from "./store.js";
import elements from "./elements.js";
import socketHandler from "./socketHandler";

const goToChatPage = () => {
    const introductionPage = document.querySelector(".introduction_page");
    const chatPage = document.querySelector(".chat_page");

    introductionPage.classList.add("display_none");

    chatPage.classList.remove("display_none");
    chatPage.classList.add("display_flex");

    const username = store.getUsername();
    updateUsername(username);

    createGroupChatbox();
    createRoomChatbox();
}

const updateUsername = (username) => {
    const usernameLabel = document.querySelector(".username_label");
    usernameLabel.innerHTML = username;
};

const chatboxId = "group-chat-chatbox";
const chatboxMessagesId = "group-chat-messages";
const chatboxInputId = "group-chat-input";

const createGroupChatbox = () => {
    const data = {
        chatboxLabel: "Group Chat",
        chatboxId,
        chatboxMessagesId,
        chatboxInputId,
    };

    const chatbox = elements.getChatbox(data);

    const chatboxesContainer = document.querySelector(".chatboxes_container");
    chatboxesContainer.appendChild(chatbox);

    const newMessageInput = document.getElementById(chatboxInputId);
    newMessageInput.addEventListener("keydown", (event) => {
        const key = event.key;

        if (key === "Enter") {
            const author = store.getUsername();
            const messageContent = event.target.value;
            // send message to socket.io server
            socketHandler.sendGroupChatMessage(author, messageContent);

            newMessageInput.value = "";
        }
    });
}

const createRoomChatbox = () => {
    const roomId = store.getRoomId();

    const chatboxLabel = roomId;
    const chatboxId = roomId;
    const chatboxMessagesId = `${roomId}-messages`;
    const chatboxInputId = `${roomId}-input`;

    const data = {
        chatboxLabel,
        chatboxId,
        chatboxMessagesId,
        chatboxInputId,
    };

    const chatbox = elements.getChatbox(data);

    const chatboxesContainer = document.querySelector(".chatboxes_container");
    chatboxesContainer.append(chatbox);

    // Add event listener to send room chat messages
    const newMessageInput = document.getElementById(chatboxInputId);
    newMessageInput.addEventListener("keydown", (event) => {
        const key = event.key;
        if (key === "Enter") {
            const author = store.getUsername();
            const messageContent = event.target.value;
            const authorSocketId = store.getSocketId();

            const data = {
                author,
                messageContent,
                authorSocketId,
                roomId,
            };

            socketHandler.sendRoomMessage(data);
            newMessageInput.value = "";
        }
    });
}

export default {
    goToChatPage
};