// Task 1: Click event
document.getElementById("status-btn").addEventListener("click", function() {
    document.getElementById("status").textContent =
        "Button clicked successfully!";
});

// Task 2: Live character count
const message = document.getElementById("message");
const count = document.getElementById("count");
message.addEventListener("input", function() {
    count.textContent = message.value.length;
});

// Task 3 and 4: Registration form validation
const form = document.getElementById("registration-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const error = document.getElementById("error");
    const feedback = document.getElementById("feedback");
    error.textContent = "";
    feedback.textContent = "";
    if (name === "" || email === "") {
        error.textContent = "Error: Please fill in all fields.";
    } else {
        feedback.textContent =
            "Registration successful! Welcome, " + name + ".";
            form.reset();
    }
});
const events = [
    { title: "Technical Symposium", date: "25 October 2026" },
    { title: "Web Development Workshop", date: "28 October 2026" },
    { title: "Coding Competition", date: "30 October 2026" }
];
const eventList = document.getElementById("event-list");
events.forEach(function(event) {
    const card = document.createElement("div");
    card.classList.add("event-card");
    const title = document.createElement("h3");
    title.textContent = event.title;
    const date = document.createElement("p");
    date.textContent = "Date: " + event.date;
    const button = document.createElement("button");
    button.textContent = "Join";
    card.appendChild(title);
    card.appendChild(date);
    card.appendChild(button);
    eventList.appendChild(card);
});
eventList.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        const card = event.target.closest(".event-card");
        const eventName = card.querySelector("h3").textContent;
        document.getElementById("join-status").textContent =
            "You joined: " + eventName;
    }
});
