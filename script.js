document.addEventListener("DOMContentLoaded", setupEvents);

function setupEvents() {
    const eventCards = document.querySelectorAll(".event-card");

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

function toggleEvent(card, button) {
    if (card.classList.contains("saved")) {
        card.classList.remove("saved");
        button.textContent = "Save Event";
    } else {
        card.classList.add("saved");
        button.textContent = "Remove Event";
    }
}