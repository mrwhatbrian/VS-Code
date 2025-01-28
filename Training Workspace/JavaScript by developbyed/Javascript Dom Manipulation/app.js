// Select the element with the class "title"
const text = document.querySelector(".title");
// Select the button or element with the class "changeColor"
const changeColor = document.querySelector(".changeColor");

// Add the class "change" to the text element initially
text.classList.add("change");

// Add a click event listener to toggle the "change" class on the text element
changeColor.addEventListener("click", function () {
  // Toggle the "change" class (add it if not present, remove it if present)
  text.classList.toggle("change");
});

// Select all <li> elements inside the element with the class "name-list"
const userList = document.querySelectorAll(".name-list li");

// Add a click event listener to each <li> element to change its text color to red
for (user of userList) {
  user.addEventListener("click", function () {
    this.style.color = "Red"; // Change the clicked <li>'s text color to red
  });
}

// Select the parent <ul> or <ol> element with the class "name-list"
const userListParent = document.querySelector(".name-list");
// Select the input field for adding a new list item
const listInput = document.querySelector(".list-input");
// Select the button for adding a new list item
const addListButton = document.querySelector(".add-list-btn");

// Add a click event listener to the add list button
addListButton.addEventListener("click", function () {
  // CREATE AN LI OUT OF THIN AIR
  const newLi = document.createElement("li"); // Create a new <li> element
  const liContent = document.createTextNode(listInput.value); // Get the input value as text content

  // ADD THE INPUT VALUE INSIDE THE NEW LI
  newLi.appendChild(liContent); // Add the text content to the new <li>

  // ATTACHING THE LI TO THE USER LIST
  userListParent.appendChild(newLi); // Append the new <li> to the parent list

  // Clear the input field after adding
  listInput.value = ""; // Reset the input field
});
