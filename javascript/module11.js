/* Task 1: Change page heading using ID */
document.getElementById("page-heading").textContent =
    "Upcoming Campus Events";


/* Task 2: Add highlight class to all event cards */
const cards = document.querySelectorAll(".event-card");

cards.forEach(function(card) {
    card.classList.add("highlight");
});


/* Task 3: Read input and display name using textContent */
document.getElementById("display-btn").addEventListener("click", function() {
    const name = document.getElementById("name-input").value;

    document.getElementById("output").textContent =
        "Welcome, " + name + "!";
});


/* Task 4: Create a card from an object and append it */
const event = {
    title: "Coding Competition",
    date: "30 October 2026"
};
function createEventCard(event) {
    const card = document.createElement("div");
    card.classList.add("event-card");
    const title = document.createElement("h3");
    title.textContent = event.title;
    const date = document.createElement("p");
    date.textContent = "Date: " + event.date;
    card.appendChild(title);
    card.appendChild(date);
    return card;
}
const eventList = document.getElementById("event-list");
const newCard = createEventCard(event);
eventList.appendChild(newCard);
const removeButton = document.createElement("button");
removeButton.textContent = "Remove";
removeButton.addEventListener("click", function() {
    newCard.remove();
});
newCard.appendChild(removeButton);
