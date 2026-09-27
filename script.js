document.addEventListener("DOMContentLoaded", setupEvents);

function setupEvents() {
    const eventCards = document.querySelectorAll(".event-card");

    createSavedEventsSection();

    eventCards.forEach(function(card) {
        const button = document.createElement("button");

        button.textContent = "Save Event";
        button.classList.add("save-button");

        button.addEventListener("click", function() {
            toggleEvent(card, button);
        });

        card.appendChild(button);
    });
}

function createSavedEventsSection() {
    const main = document.querySelector("main");

    const section = document.createElement("section");
    section.id = "saved-events";

    const heading = document.createElement("h2");
    heading.textContent = "Saved Events";

    const message = document.createElement("p");
    message.id = "saved-message";
    message.textContent = "No events have been saved yet.";

    const list = document.createElement("ul");
    list.id = "saved-events-list";

    section.appendChild(heading);
    section.appendChild(message);
    section.appendChild(list);

    main.appendChild(section);
}

function toggleEvent(card, button) {
    if (card.classList.contains("saved")) {
        card.classList.remove("saved");
        button.textContent = "Save Event";
        removeSavedEvent(card);
    } else {
        card.classList.add("saved");
        button.textContent = "Remove Event";
        addSavedEvent(card);
    }

    updateSavedMessage();
}

function addSavedEvent(card) {
    const eventName = card.querySelector("h3").textContent;
    const eventTime = card.querySelector("time").textContent;
    const paragraphs = card.querySelectorAll("p");
    const eventLocation = paragraphs[1].textContent;

    const list = document.querySelector("#saved-events-list");

    const listItem = document.createElement("li");
    listItem.dataset.eventName = eventName;

    const name = document.createElement("strong");
    name.textContent = eventName;

    const details = document.createElement("p");
    details.textContent = eventTime + " - " + eventLocation;

    listItem.appendChild(name);
    listItem.appendChild(details);
    list.appendChild(listItem);
}

function removeSavedEvent(card) {
    const eventName = card.querySelector("h3").textContent;
    const savedItems = document.querySelectorAll("#saved-events-list li");

    savedItems.forEach(function(item) {
        if (item.dataset.eventName === eventName) {
            item.remove();
        }
    });
}

function updateSavedMessage() {
    const list = document.querySelector("#saved-events-list");
    const message = document.querySelector("#saved-message");

    if (list.children.length === 0) {
        message.textContent = "No events have been saved yet.";
    } else {
        message.textContent = "";
    }
}