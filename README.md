Shopping List Application

Group Project Information

Course: Introduction to Software Development
course code: EMCICT311
Project: Shopping List Application
Project Type: Group Mini Project

Group Members

Name                      | Registration Number
Edomobi Chinwendu Angel   | 2023030213343
Egbuonu Mmessoma Jennifer | 2023030211315
Edeh Blessing Chinecherem | 2023030211906
Egwuma Victor Chinagorom  | 2023030210672
Member 5| 
Member 6| 

---

Project Description

This is a web-based Shopping List Application that helps users prepare and manage items before going to the market.

Users can add shopping items, specify quantities, mark items as purchased, edit or delete items, search for items, and save their shopping list using Local Storage.

---

Project Requirements

The application must:

1. Allow users to add shopping items with a specified quantity.
2. Allow users to mark shopping items as purchased and display purchased items differently.
3. Allow users to edit and delete existing shopping items.
4. Allow users to search for shopping items and display the total number of items.
5. Save shopping list data using Local Storage so that items remain available after refreshing the page.

---

Classes and Functions

Class

ShoppingItem
Represents a shopping item and stores its name, quantity, ID, and purchased status.

togglePurchased()
A method used to change an item's purchased status.

Functions

- addItem() — Adds a new shopping item to the list.
- displayItems() — Displays shopping items on the page.
- editItem() — Edits an existing item's name and quantity.
- deleteItem() — Removes an item from the shopping list.
- saveItems() — Saves shopping items to Local Storage.
- updateItemCount() — Displays the total number of shopping items.

---

Expected Input and Output

Feature| Expected Input| Expected Output
Add item| Item name and quantity| The new item appears in the shopping list
Mark purchased| Click an item| The item is displayed as purchased with a line through it
Edit item| New item name and quantity| The item information is updated
Delete item| Click the Delete button| The item is removed from the list
Search item| Type an item name or keyword| Matching shopping items are displayed
Local Storage| Add or modify an item| The data remains available after refreshing the page
Total items| Shopping items in the list| The total number of items is displayed

---

Input Validation

The application prevents invalid entries by:

- Preventing empty item names.
- Preventing empty quantities.
- Preventing quantities below 1.
- Requiring valid whole-number quantities.
- Preventing invalid values when editing an item.

---

Technologies Used

- HTML
- CSS
- JavaScript
- Local Storage

---

Responsive Design

The application uses responsive CSS so that the layout adapts to smaller screens such as mobile devices.

---

How to Run

1. Download or clone the project repository.
2. Open the project folder.
3. Open the "index.html" file in a web browser.
4. Start adding and managing shopping items.

---

Core Features

- Add shopping items
- Specify quantity
- Mark items as purchased
- Edit shopping items
- Delete shopping items
- Search shopping items
- Save items using Local Storage
- Display the total number of items
- Validate user input
- Responsive user interface

---

Testing

## Testing

The application was tested using both normal inputs and unusual or invalid inputs to ensure that the required features work correctly.

### Test Results

| Test | Expected Result | Result |
|---|---|---|
| Add a shopping item with a valid quantity | The item appears in the shopping list | Passed |
| Mark an item as purchased | The item is displayed with a line through it | Passed |
| Refresh the page | Saved items remain in the shopping list | Passed |
| Toggle purchased status after refreshing | The purchased status changes correctly | Passed |
| Edit an item | The item's name and quantity are updated | Passed |
| Delete an item | The selected item is removed from the list | Passed |
| Search for an item | Matching items are displayed | Passed |
| Add an item without a name | The application rejects the input | Passed |
| Enter a quantity of 0 or a negative number | The application rejects the invalid quantity | Passed |
| Display total items | The correct number of items is displayed | Passed |

### Bug Found and Fixed

During testing, a bug was identified with items loaded from Local Storage.

**Problem:**  
After refreshing the page, saved items were loaded as ordinary JavaScript objects. This meant that the `togglePurchased()` method from the `ShoppingItem` class was not available on the loaded items.

**Solution:**  
The saved objects are now converted back into `ShoppingItem` objects when the application loads. The item's ID, quantity, and purchased status are also preserved.

**Result:**  
After the fix, purchased items remain correctly saved after refreshing the page, and their purchased status can still be changed.