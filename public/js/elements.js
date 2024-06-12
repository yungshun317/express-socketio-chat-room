const getChatbox = (data) => {
    const { chatboxLabel, chatboxMessagesId, chatboxInputId, chatboxId } = data;

    const chatboxContainer = document.createElement("div");
    chatboxContainer.classList.add("chatbox_container");
    chatboxContainer.setAttribute("id", chatboxId);

    chatboxContainer.innerHTML = `
    <div class='chatbox_label_container'>
        <p class='chatbox_label'>${chatboxLabel}</p>
    </div>
    <div class='messages_container' id='${chatboxMessagesId}'>
    </div>
    <div class='new_message_input_container'>
        <input class='new_message_input' id='${chatboxInputId}' placeholder="Type your message .."></input>
    </div>
    `;

    return chatboxContainer;
};

export default {
    getChatbox
};