import store from "./store.js";

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

const createGroupChatbox = () => {

}

const createRoomChatbox = () => {

}

export default {
    goToChatPage
};