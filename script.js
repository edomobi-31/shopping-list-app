// Shopping Item class
class ShoppingItem {
    constructor(name, quantity) {
        this.id = Date.now();
        this.name = name;
        this.quantity = Number(quantity);
        this.purchased = false;
    }

    // Method for marking an item as purchased
    togglePurchased() {
        this.purchased = !this.purchased;
    }
}


// Get elements from the HTML
const itemInput = document.getElementById("itemInput");
const quantityInput = document.getElementById("quantityInput");
const addButton = document.getElementById("addButton");
const shoppingList = document.getElementById("shoppingList");
const itemCount = document.getElementById("itemCount");
const searchInput = document.getElementById("searchInput");


// Get saved items from Local Storage
let shoppingItems = JSON.parse(localStorage.getItem("shoppingItems")) || [];


// Display saved items when the page loads
displayItems();


// Add item when the Add button is clicked
addButton.addEventListener("click", addItem);


function addItem() {
    const itemName = itemInput.value.trim();
    const quantity = quantityInput.value;

    // Input validation
    if (itemName === "" || quantity === "" || Number(quantity) < 1) {
        alert("Please enter a valid item and quantity.");
        return;
    }

    // Create a new ShoppingItem
    const newItem = new ShoppingItem(itemName, quantity);

    shoppingItems.push(newItem);

    saveItems();

    itemInput.value = "";
    quantityInput.value = "";

    displayItems();
}


// Display shopping items
function displayItems(items = shoppingItems) {

    shoppingList.innerHTML = "";

    // Loop through the shopping items
    items.forEach(function(item) {

        const listItem = document.createElement("li");

        const itemName = document.createElement("span");

        itemName.textContent =
            item.name + " - Quantity: " + item.quantity;


        // Show purchased items
        if (item.purchased) {
            itemName.classList.add("completed");
        }


        // Mark item as purchased
        itemName.addEventListener("click", function() {

            item.togglePurchased();

            saveItems();
            displayItems();
        });


        // Edit button
        const editButton = document.createElement("button");

        editButton.textContent = "Edit";

        editButton.addEventListener("click", function() {
            editItem(item.id);
        });


        // Delete button
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");

        deleteButton.addEventListener("click", function() {
            deleteItem(item.id);
        });


        // Button container
        const buttonContainer = document.createElement("div");

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);


        listItem.appendChild(itemName);
        listItem.appendChild(buttonContainer);

        shoppingList.appendChild(listItem);
    });


    updateItemCount();
}


// Edit an item
function editItem(id) {

    const item = shoppingItems.find(function(item) {
        return item.id === id;
    });

    if (item) {

        const newName = prompt(
            "Enter the new item name:",
            item.name
        );

        if (newName === null || newName.trim() === "") {
            return;
        }

        const newQuantity = prompt(
            "Enter the new quantity:",
            item.quantity
        );

        if (
            newQuantity === null ||
            newQuantity.trim() === "" ||
            Number(newQuantity) < 1
        ) {
            return;
        }

        item.name = newName.trim();
        item.quantity = Number(newQuantity);

        saveItems();
        displayItems();
    }
}


// Delete an item
function deleteItem(id) {

    shoppingItems = shoppingItems.filter(function(item) {
        return item.id !== id;
    });

    saveItems();
    displayItems();
}


// Search items
searchInput.addEventListener("input", function() {

    const searchText = searchInput.value.toLowerCase();

    const filteredItems = shoppingItems.filter(function(item) {

        return item.name
            .toLowerCase()
            .includes(searchText);
    });

    displayItems(filteredItems);
});


// Save items using Local Storage
function saveItems() {

    localStorage.setItem(
        "shoppingItems",
        JSON.stringify(shoppingItems)
    );
}


// Display total number of items
function updateItemCount() {

    itemCount.textContent = shoppingItems.length;
}