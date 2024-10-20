const sortableList = document.querySelector(".sortable-list");
let teamNumbers = [];
let pickModeActive = false;

window.addEventListener("DOMContentLoaded", (event) => {
    const storedOrder = JSON.parse(localStorage.getItem("sortableListOrder")) || [];

    if (storedOrder.length > 0) {
        // If there is a stored order, use it
        populateList(storedOrder);
    } else {
        //If there is no stored order, fetch data from the sheet
        getSheetData({
            sheetID: "1yWvryvsIh45Rx4ap04qQLE2N-prppXxoO633QWkbQ6Y",
            sheetName: "Compiled Data All Teams",
            query: "SELECT A",
            callback: sheetDataHandler,
        });
    }
});

const sheetDataHandler = (sheetData) => {
    // Clear existing items in the list
    sortableList.innerHTML = "";

    // Extract team numbers directly from the first column (A)
    teamNumbers = sheetData.map((row, index) => {
        // Get the first cell in the row
        const teamNumber = Object.values(row)[0];
        console.log(`Row ${index} value:`, teamNumber); // Log the team number

        // Return the team number if it's a number
        return !isNaN(teamNumber) && teamNumber !== null && teamNumber !== "" ? Number(teamNumber) : null;
    }).filter(teamNumber => teamNumber !== null); // Filter out null values

    // Debugging: log the final team numbers
    console.log("Extracted team numbers:", teamNumbers);

    // Populate the list with the fetched data
    populateList(teamNumbers);
};


const populateList = (order) => {
    sortableList.innerHTML = "";

    order.forEach((teamNumber, index) => {
        const listItem = document.createElement("li");
        listItem.className = "item";
        listItem.draggable = true;

        const orderSpan = document.createElement("span");
        orderSpan.className = "order-number";
        orderSpan.textContent = `#${index + 1}`;
        listItem.appendChild(orderSpan);

        const detailsDiv = document.createElement("div");
        detailsDiv.className = "details";

        // Make the team name a link
        const teamLink = document.createElement("a");
        teamLink.href = `your-page-url/${teamNumber}`; // Replace "your-page-url" with the actual URL
        teamLink.textContent = teamNumber;
        detailsDiv.appendChild(teamLink);

        listItem.appendChild(detailsDiv);

        const dragHandle = document.createElement("i");
        dragHandle.className = "uil uil-draggabledots";
        listItem.appendChild(dragHandle);

        sortableList.appendChild(listItem);
    });

    // Reattach event listeners for drag events
    attachDragListeners();

    // Update the order numbers
    updateOrderNumbers();
};

function attachDragListeners() {
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.addEventListener("dragstart", () => {
            setTimeout(() => item.classList.add("dragging"), 0);
        });
        item.addEventListener("dragend", () => {
            item.classList.remove("dragging");
            // Save the order of the list items to localStorage on dragend
            const order = Array.from(sortableList.children).map(item => {
                const teamLink = item.querySelector(".details a");
                return teamLink ? teamLink.textContent : "";
            });
            localStorage.setItem("sortableListOrder", JSON.stringify(order));

            // Debug: log the new order
            console.log("New order saved:", order);

            // Update the order numbers
            updateOrderNumbers();
        });
    });
}

const initSortableList = (e) => {
    e.preventDefault();
    const draggingItem = document.querySelector(".dragging");
    let siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];
    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });
    sortableList.insertBefore(draggingItem, nextSibling);

    // Update the order numbers and styles after dropping
    updateOrderNumbers();
};

sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", e => e.preventDefault());

const updateOrderNumbers = () => {
    const items = sortableList.querySelectorAll(".item");
    items.forEach((item, index) => {
        const orderSpan = item.querySelector(".order-number");
        orderSpan.textContent = `#${index + 1}`;

        // Remove previous place classes
        item.classList.remove("first", "second", "third", "fourth");

        // Add new place classes
        if (index === 0) {
            item.classList.add("first");
        } else if (index === 1) {
            item.classList.add("second");
        } else if (index === 2) {
            item.classList.add("third");
        } else if (index === 3) {
            item.classList.add("fourth");
        }
    });
};
