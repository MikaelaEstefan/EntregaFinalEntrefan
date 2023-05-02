let categories = [];
let expenses = [];

const categoryForm = document.getElementById("categoryForm");
const categoryInput = document.getElementById("categoryInput");
const categoryList = document.getElementById("categoryList");
const expenseForm = document.getElementById("expenseForm");
const categorySelect = document.getElementById("categorySelect");
const expenseInput = document.getElementById("expenseInput");
const expenseList = document.getElementById("expenseList");

// Add category (add category to the 'categories' array)
function addCategory(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    const categoryName = categoryInput.value.trim();
    if (categoryName === '') {
        showMessage('Please enter a valid category name.', 'error');
        return;
    }
    // Save the new category to the localStorage
    categories = JSON.parse(localStorage.getItem('categories')) || [];
    categories.push(categoryName);
    localStorage.setItem('categories', JSON.stringify(categories));

    // Update the options of the category select element
    const option = document.createElement('option');
    option.value = categoryName;
    option.textContent = categoryName;
    categorySelect.appendChild(option);

    categoryList.innerHTML += `<li>${categoryName}</li>`; // Add the new category to the list
    showMessage(`Category '${categoryName}' added successfully!`, 'success');
    categoryForm.reset(); // Clear the input field
}

// Populate category select options
window.addEventListener('load', () => {
    categories = JSON.parse(localStorage.getItem('categories')) || [];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
});


// Add expense (add an expense to the 'expenses' array)
function addExpense(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    const category = categorySelect.value;
    const date = new Date().toLocaleDateString();
    const amount = expenseInput.value.trim();
    if (category === '' || amount === '') {
        showMessage('Please select a category and enter a valid expense amount.', 'error');
        return;
    }
    const expense = {
        category: category,
        date: date,
        amount: amount
    };
    expenses.push(expense);
    expenseList.innerHTML += `<li>${category} - ${date} - ${amount}</li>`; // Add the new expense to the list
    showMessage('Expense added successfully.', 'success');
    expenseForm.reset(); // Clear the input fields
}

// Show message (create and show a message element with the given text and class)
function showMessage(message, className) {
    const div = document.createElement('div');
    div.className = `message ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    container.insertBefore(div, null);
    // setTimeout(() => div.remove(), 3000); // Remove the message after 3 seconds
}

// Populate category select options (add options to the category select element)
function populateCategories() {
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.text = category;
        categorySelect.appendChild(option);
    });
}

// Check if there are categories and expenses available, and show the report
function showReport() {
    if (categories.length === 0 || expenses.length === 0) {
        showMessage('Please add categories and expenses first.', 'error');
        return;
    }
    const report = {};
    expenses.forEach(expense => {
        const category = expense.category;
        const amount = parseFloat(expense.amount);
        if (report[category]) {
            report[category] += amount;
        } else {
            report[category] = amount;
        }
    });
    let reportText = '';
    Object.entries(report).forEach(([category, amount]) => {
        reportText += `${category}: $${amount.toFixed(2)}\n`;
    });
    showMessage(reportText, 'success');
}

// Event listeners
categoryForm.addEventListener('submit', addCategory);
expenseForm.addEventListener('submit', addExpense);
document.addEventListener('DOMContentLoaded', () => {
    populateCategories();
    document.getElementById('reportButton').addEventListener('click', showReport);
});


