// Array to store meals
let meals = [];

// Function to add a meal
function addMeal() {
    const mealName = document.getElementById('meal-name').value;
    const mealTime = document.getElementById('meal-time').value;

    // Check if inputs are not empty
    if (mealName && mealTime) {
        meals.push({ name: mealName, time: mealTime });
        document.getElementById('meal-name').value = ''; // Clear input
        document.getElementById('meal-time').value = ''; // Clear input
        displayMeals(); // Update meal list
    } else {
        alert('Please enter both meal name and time.'); // Alert if inputs are empty
    }
}

// Function to display meals
function displayMeals() {
    const mealList = document.getElementById('meal-list');
    mealList.innerHTML = meals.map((meal, index) =>
        `<div class="meal-card">
            <h2>${meal.name}</h2>
            <p>Time: ${meal.time}</p>
            <button onclick="deleteMeal(${index})">Delete</button>
        </div>`
    ).join(''); // Generate meal cards
}

// Function to delete a meal
function deleteMeal(index) {
    meals.splice(index, 1); // Remove meal from array
    displayMeals(); // Update meal list
}

// Event listener for adding meals
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add-meal-btn').addEventListener('click', addMeal); // Attach event
});