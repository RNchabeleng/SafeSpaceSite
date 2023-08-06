document.addEventListener("DOMContentLoaded", function () {
  const chatWidget = document.querySelector(".chat-widget");
  const chatToggleBtn = document.getElementById("chat-toggle-btn");
  const chatBody = document.querySelector(".chat-body");
  const chatMessages = document.querySelector(".chat-messages");
  const chatInputField = document.getElementById("chat-input-field");
  const chatSendBtn = document.getElementById("chat-send-btn");

  chatToggleBtn.addEventListener("click", function () {
      chatBody.classList.toggle("minimized");
  });

  // Predefined bot responses
  const botResponses = [
      "Hello! How can I assist you today?",
      "I'm here to help. Please let me know how I can assist you.",
      "Feel free to ask any questions you have.",
      "You're not alone. Let's work together to find a solution.",
      "I'm listening. Please share your concerns with me.",
      "Remember, your safety and well-being are important."
      // Add more bot responses here as needed
  ];

  chatSendBtn.addEventListener("click", function () {
      const userMessage = chatInputField.value;
      if (userMessage.trim() !== "") {
          // Display user message
          displayMessage(userMessage, "user");
3
          // Select a random bot response
          const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

          // Display bot response after a short delay
          setTimeout(function () {
              displayMessage(randomResponse, "bot");
          }, 500);

          // Clear input field
          chatInputField.value = "";
      }
  });

  // Function to display a message in the chat
  function displayMessage(message, sender) {
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("message", sender);
      messageDiv.textContent = message;
      chatMessages.appendChild(messageDiv);
  }

  // Animation for counting statistics
  let valueDisplays = document.querySelectorAll(".num");
  let interval = 4000;

  valueDisplays.forEach((valueDisplay) => {
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue >= endValue) {
              clearInterval(counter);
          }
      }, duration);
  });
});

