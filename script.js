// JavaScript for handling interactivity

// Close sidebar button
const closeSidebarButton = document.getElementById("close_sidebar_button");
closeSidebarButton.addEventListener("click", () => {
    document.getElementById("left_side").style.display = "none";
    closeSidebarButton.style.display = "block";
});

// New Chat button
const newChatButton = document.getElementById("new_chat_button");
const listChatsSection = document.getElementById("list_of_chats");

newChatButton.addEventListener("click", () => {
    const chatItem = document.createElement("div");
    chatItem.classList.add("single_chat");
    chatItem.innerHTML = `
        <i class="fas fa-comment chat_icon"></i>
        <div class="chat_title">New Chat</div>
    `;
    listChatsSection.appendChild(chatItem);
});

// Add hover effects
const buttons = document.querySelectorAll("button");
const singleChats = document.querySelectorAll(".single_chat");

buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#444";
    });
    button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "transparent";
    });
});

singleChats.forEach((chat) => {
    chat.addEventListener("mouseover", () => {
        chat.style.backgroundColor = "#444";
    });
    chat.addEventListener("mouseout", () => {
        chat.style.backgroundColor = "transparent";
    });
});
