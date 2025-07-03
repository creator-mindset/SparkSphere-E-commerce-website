const chatWindow = document.getElementById("chat-window");
const chatInput = document.getElementById("chat-input");

const responses = {
  hello: "Hey there! How can I help you today?",
  price: "Our products range from ₹500 to ₹3000.What do you want to buy(shirt,jacket,sneaker)?",
  shirt: "We have cool shirts in different sizes.",
  jacket:"We offer a wide range of jackets, including lightweight windbreakers and insulated winter styles",
  sneaker:"Our collection includes versatile sneakers designed for both everyday wear and athletic performance.",
  refund: "You can request a refund within 7 days of delivery.",
  delivery: "We offer free delivery in India within 5-7 days.",
};

function handleChat(event) {
  if (event.key === "Enter") {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;
    appendMessage("You", userMessage);

    let response = "Sorry, I didn't get that.";
    for (const key in responses) {
      if (userMessage.toLowerCase().includes(key)) {
        response = responses[key];
        break;
      }
    }

    setTimeout(() => appendMessage("StyleBot", response), 500);
    chatInput.value = "";
  }
}

function appendMessage(sender, message) {
  const msgDiv = document.createElement("div");
  msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatWindow.appendChild(msgDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
