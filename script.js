function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');

    if (userInput.value.trim() !== "") {
        const userMessage = document.createElement('div');
        userMessage.className = 'user-message';
        userMessage.textContent = userInput.value;
        chatBox.appendChild(userMessage);

        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.textContent = getBotResponse(userInput.value);
        chatBox.appendChild(botMessage);

        userInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function getBotResponse(message) {
    // Simple logic for bot response
    return `You said: ${message}`;
}
