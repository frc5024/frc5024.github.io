/*!
 * 5k24SPARK.js
 * Description: Takes in a JSON file and creates objects for a scouting website
 * Author: Josh Bakelaar
 * Created Date: 2/25/2024
 * Modified Date: 2/25/2024
 */

let scoutingType = "matchScouting";

function updateScoutingType(newType) {
    scoutingType = newType;
}

document.addEventListener("DOMContentLoaded", function () {
    const event = jsonData.event;

    // Function for checkbox updating, making it so only one (true or false) can be selected
    function updateCheckbox(checkedId, uncheckedId) {
        const checkedCheckbox = document.getElementById(checkedId);
        const uncheckedCheckbox = document.getElementById(uncheckedId);

        if (checkedCheckbox.checked) {
            uncheckedCheckbox.checked = false;
        }
    }

    function changeTHColour(keyword, colour) {
        // Select all table headers
        const tableHeaders = document.querySelectorAll("th");
    
        tableHeaders.forEach(header => {
            if (header.textContent.includes(keyword)) {
                header.style.backgroundColor = colour; // Change to any background color you prefer
            }
        });
    }

    // Function to create the "pages" within the 5K24Spark
    function createPages(jsonData) {
        // Keep track of what page you are on
        let currentPageIndex = 0;
        // Keep track of how many checkboxes you have
        let checkboxCount = 1;
        // Keep track of inputed values
        let collectedValues = "";

        // Function which creates the table too act as the "page"
        function createTable(page) {
            // If the name of the page is title "QRCode" do not create a table
            if(page.name === "QRCode"){
                return;
            }
            // Get the data to be put on the page
            const pageData = page.fields;
            // Create a div for the table
            const container = document.createElement("div");
            container.classList.add("table-container");
            // Create the table
            const table = document.createElement("table");
            // Name the table based on the name given
            table.id = page.name + "Table";

            // For each input the JSON has create a new row with inputs and labels
            pageData.forEach(object => {
                const row = document.createElement("tr");
                const titleCell = document.createElement("th");
                
                // If it is a required object add a "*"
                if (object.name) {
                    titleCell.innerHTML = object.required === "yes" ? object.name + ' <span class="required">*</span>' : object.name;
                }

                // Put the title of the input
                row.appendChild(titleCell);
                const inputCell = document.createElement("td");
                
                // This controls what objects will be created for inputs, currently supports (text, radio, checkbox, select)
                switch (object.type) {
                    // If the object is a text field create one (usually used for number inputs)
                    case "field":
                        // Creates a group to put the buttons and input in
                        const inputGroup = document.createElement("div");
                        inputGroup.classList.add("input-group"); 

                        if(object.buttons === "yes"){
                            // Adds a minus button to the left hand side
                            const minusButton = document.createElement("button");
                            
                            minusButton.id = "minusButton";
                            minusButton.textContent = "-";
                            minusButton.addEventListener("click", () => decrementValue(object.id));
                            inputGroup.appendChild(minusButton);
                        }

                        // Add the text input
                        const input = document.createElement("input");
                        input.type = "text";
                        input.id = object.id;
                        // Default value is 0
                        input.value = "0";
                        // Makes the telephone keyboard pop up for easy number entry
                        input.inputMode  = "tel"
                        inputGroup.appendChild(input);

                        if(object.buttons === "yes"){
                            // Create the plus button on the right hand side
                            const plusButton = document.createElement("button");
                            plusButton.id = "plusButton";
                            plusButton.textContent = "+";
                            plusButton.addEventListener("click", () => incrementValue(object.id));
                            inputGroup.appendChild(plusButton);
                        }
                        inputGroup.className = "fieldInput";
                        inputCell.appendChild(inputGroup);
                        break;
                    // If the object is a radio button create one
                    case "radio":
                        for (let i = 0; i < object.count; i++) {
                            const radio = document.createElement("input");
                            radio.type = "radio";
                            inputCell.appendChild(radio);
                        }
                        break;
                    // If the object is a checkbox create on
                    case "checkbox":
                        // Create a container for grouping checkboxes side by side
                        const checkboxesGroupContainer = document.createElement("div");
                        checkboxesGroupContainer.className = "checkboxes-group-container";
                        
                        // CHANGE THIS TO NO, YES RATHER THAN YES NO
                        const labels = ["No", "Yes"];
                        labels.forEach(label => {
                            // Create individual container for each checkbox and its label
                            const checkboxContainer = document.createElement("div");
                            checkboxContainer.className = "checkbox-container";
                            
                            // Create checkbox
                            const checkbox = document.createElement("input");
                            checkbox.type = "checkbox";
                            checkbox.id = `checkbox${label}${object.id}`;

                            // Create label
                            const labelElement = document.createElement("label");
                            labelElement.htmlFor = checkbox.id;
                            labelElement.textContent = label;

                            // Append checkbox and label to their individual container
                            checkboxContainer.appendChild(checkbox);
                            checkboxContainer.appendChild(labelElement);

                            // Append the individual container to the parent group container
                            checkboxesGroupContainer.appendChild(checkboxContainer);

                            checkbox.addEventListener("click", () => updateCheckbox(`checkbox${label}${object.id}`, `checkbox${labels.find(l => l !== label)}${object.id}`));
                        });
                        // Append the parent group container to inputCell
                        inputCell.appendChild(checkboxesGroupContainer);
                        checkboxCount++;
                        break;
                    // If case is a select create one
                    case "select":
                        const select = document.createElement("select");
                        select.id = object.id;
                        inputCell.appendChild(select);
                        // Call populate select
                        populateSelect(object.file, object.id);
                        break;
                }
                // Add the row to the table
                row.appendChild(inputCell);
                table.appendChild(row);
            });

            // Add the table to the container
            container.appendChild(table);
            document.body.appendChild(container);
            changeTHColour("Coral", "#F17829");
            changeTHColour("Algae", "#0DAD8D");
        }

        // Function to increment a value in a text field
        // Takes in the id of the text field
        function incrementValue(inputId) {
            const input = document.getElementById(inputId);
            const value = parseInt(input.value) || 0;
            input.value = value + 1;
        }

        // Function to decrement a value in a text field
        // Takes in the id of the text field
        function decrementValue(inputId) {
            const input = document.getElementById(inputId);
            const value = parseInt(input.value) || 0;
            if (value > 0) {
                input.value = value - 1;
            }
        }

        // Function to clear all inputs in the form
        function clearAllInputs() {
            const inputs = document.querySelectorAll('input[type="text"], input[type="checkbox"], input[type="radio"], select');
            inputs.forEach(input => {
                // Reset text inputs to "0"
                if (input.type === 'text') {
                    if(input.id === 'match#'){
                        const matchNum = +input.value;
                        input.value = matchNum+1;
                        
                    }else{
                        input.value = '0';
                    }
                // Uncheck radio buttons and checkboxes
                } else if (input.type === 'checkbox' || input.type === 'radio') {
                    input.checked = false;
                // Reset the selects back to "Select", unless it is the name, then leave it
                } else if (input.tagName.toLowerCase() === 'select') {
                    if (input.id !== 'names') {
                        const firstOptionValue = $(input).find('option:first').val();
                        $(input).val(firstOptionValue).trigger('change.select2');;
                    }
                }
            });
        }
        
        // Function attached to newMatch button to create a newMatch
        function resetToFirstPage() {
            // Reset page index
            currentPageIndex = 0;
            // Hide all tables
            hideAllTables();
            // Show first table
            showCurrentTable();
        }

        // Function which checks if it is valid to move to next page
        // Returns false if you cant move, returns true if you can
        function canMoveToNextPage() {
            // Get current page inputs
            const currentPageData = jsonData.pages[currentPageIndex].fields;
            // Loop through each input checking to see if the object is required
            for (const object of currentPageData) {
                // If the object is required and not filled in, send an alert and dont allow to move to next page
                if (object.required === "yes") {
                    if (object.type === "select" && ($("#" + object.id).val() || "").trim().toLowerCase() === "select") {
                        alert("Please fill the required field before moving to the next page.");
                        return false;
                    } else if (object.type === "field" && !$("#match\\#").val()) {
                        alert("Please fill the required field before moving to the next page.");
                        return false;
                    } else if (object.type === "checkbox" && !document.getElementById(`checkboxYes${object.id}`).checked && !document.getElementById(`checkboxNo${object.id}`).checked) {
                        alert("Please fill the required field before moving to the next page.");
                        return false;
                    }
                }
            }
            return true;
        }

        // Function which sets all pages display to "none"
        function hideAllTables() {
            jsonData.pages.forEach(page => {
                const table = document.getElementById(page.name + "Table");
                if (table) {
                    table.style.display = "none";
                }
            });
        }
        
        // Function to show the current page
        function showCurrentTable() {
            const pages = jsonData.pages;
            const currentPage = pages[currentPageIndex];
            const currentTable = document.getElementById(currentPage.name + "Table");

            // Make sure the previous button is not shown on first page
            const prevButton = document.getElementById("prevButton");
            if (prevButton) {
                prevButton.style.display = currentPageIndex === 0 ? "none" : "";
            }

            // Make sure the next button is not shown on the last page
            const nextButton = document.getElementById("nextButton");
            if (nextButton) {
                nextButton.style.display = currentPageIndex === pages.length - 1 ? "none" : "";
            }

            // Make sure the new math button is not shown until the last page
            const restartButton = document.getElementById("clearButton");
            if (restartButton){
                restartButton.style.display = currentPageIndex === pages.length - 1 ? "" : "none";
            }

            // Make sure the QRcode is only shown on the last page
            const qrCodeDiv = document.getElementById("qrcode");
            if (qrCodeDiv) {
                qrCodeDiv.style.display = currentPageIndex === pages.length - 1 ? "" : "none";
            }

            // Set display "" for current table
            if (currentTable) {
                currentTable.style.display = "";
            }
            
            // If the pages name is "QRCode", call collectvalues() and create the qrcdoe
            if (currentPage.name === "QRCode") {
                collectValues();
                const qrcodeElement = document.getElementById("qrcode");
                if (qrcodeElement) {
                    qrcodeElement.innerHTML = "";
                    const qrcode = new QRCode(qrcodeElement, {
                        text: collectedValues
                    });
                }
            }

            // Show the title of the page
            const headingElement = document.getElementById("heading");
            if (headingElement) {
                headingElement.textContent = currentPage.name.charAt(0).toUpperCase() + currentPage.name.slice(1);
            }
        }

        

        // Function collectValues() gets all inputs
        function collectValues() {
            // Create empty string
            collectedValues = scoutingType + ", ";
            const inputs = document.querySelectorAll("input[type=text], input[type=checkbox], input[type=radio]:checked, select");
            inputs.forEach(input => {
                // If the input is a checkbox and the input is checked put "Yes" for true and "No" for false
                if (input.type === "checkbox" && input.checked) {
                    const checkboxId = input.id;
                    collectedValues += checkboxId.includes("No") ? "No, " : "Yes, ";
                // Put value from select or text
                } else if ((input.type === "text" || input.tagName.toLowerCase() === "select") && input.value.trim() !== "") {
                    collectedValues += input.value + ", ";
                }
            });
            // Make sure the string is one nice formatted line
            collectedValues = collectedValues.replace(/,\s*$/, "");
            collectedValues = collectedValues.replace(/\n/g, ' ');
        }
             
        // Function populateSelect to fill the select with values
        // Takes in the file path and the id of the select to fill
        function populateSelect(file, elementId) {
            // If the select is already populated dont fill
            if ($("#" + elementId).length > 0) {
                return;
            }

            // Get the file from the path
            $.get(file, function(data) {
                console.log("Data loaded successfully:", data);
                // Each option is on a new line
                const options = data.split("\n");
                // Create the options
                options.forEach(option => {
                    $("#" + elementId).append(`<option value='${option}'>${option}</option>`);
                });

                // For the teams and names select make a select2
                if (elementId === "teams" || elementId === "names") {
                    $("#" + elementId).select2();
                }
            })
            // On file fail
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.error("Error loading file: " + file);
                console.error("Status: " + textStatus);
                console.error("Error thrown: " + errorThrown);
            });
        }

        // For each paage create a table
        const pages = jsonData.pages;
        pages.forEach(page => {
            createTable(page);
        });

        // Hide all tables
        hideAllTables();
        // Show current index
        showCurrentTable();

        // Create a container for the buttons
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container"); // Add a class for styling

        // Create the previous button
        const prevButton = document.createElement("button");
        prevButton.textContent = "Previous";
        prevButton.style.display = "none";
        prevButton.id = "prevButton";
        prevButton.addEventListener("click", function () {
            hideAllTables();
            // If page index is greater than 0
            if (currentPageIndex > 0) {
                // Decrement page index
                currentPageIndex--;
            }
            // Show current table
            showCurrentTable();
        });

        // Create the next button
        const nextButton = document.createElement("button");
        nextButton.textContent = "Next";
        nextButton.id = "nextButton";
        nextButton.addEventListener("click", function () {
            // If canMoveToNextPage returns true
            if (canMoveToNextPage()) {
                // Hide all tables
                hideAllTables();
                // Increment the page index
                if (currentPageIndex < jsonData.pages.length - 1) {
                    currentPageIndex++;
                }
                // Show current table
                showCurrentTable();
            }
        });

        // Create the clear button
        const clearButton = document.createElement("button");
        clearButton.textContent = "New Match";
        // When clicked clear all inputs and bring back to first page
        clearButton.addEventListener("click", function () {
            clearAllInputs();
            resetToFirstPage();
        });
        clearButton.style.display = "none";
        clearButton.id = "clearButton";

        // Append buttons to the container
        buttonContainer.appendChild(prevButton);
        buttonContainer.appendChild(nextButton);
        buttonContainer.appendChild(clearButton);

        // Append the container to the document body
        document.body.appendChild(buttonContainer);

    }

    // Call create pages function with jsonData
    createPages(jsonData);
});
