let categories = [];
let expenses = [];

const categoryForm = document.getElementById("categoryForm");
const categoryInput = document.getElementById("categoryInput");
const categoryList = document.getElementById("categoryList");
const expenseForm = document.getElementById("expenseForm");
const categorySelect = document.getElementById("categorySelect");
const expenseInput = document.getElementById("expenseInput");
const expenseList = document.getElementById("expenseList");

// Add category (add category to the 'categories' array)//
//-----------------------------------------------------//
//1- 'e.preventDefault()' evita que se envíe el formulario y se recargue la página.
//2- Obtiene el nombre de la categoría del campo de entrada, eliminando los espacios en blanco al principio y al final.
//3- Verifica si el nombre de la categoría es válido (no está vacío). Si no es válido, muestra un mensaje de error y sale de la función.
//4- Obtiene las categorías existentes de localStorage y las guarda en la variable categories. Si no hay categorías, se establece un arreglo vacío.
//5- Agrega la nueva categoría al final del arreglo categories.
//6- Actualiza las opciones del elemento de selección de categoría (un select) agregando una nueva opción con el valor y el texto establecidos como el nombre de la nueva categoría.
//7- Agrega la nueva categoría a la lista como un elemento li.//
//8- Muestra un mensaje de éxito con el nombre de la categoría agregada.//
//10- Restablece el formulario para borrar el campo de entrada.//

function addCategory(e) {
    e.preventDefault(); 
    const categoryName = categoryInput.value.trim();
    if (categoryName === '') {
        showMessage('Please enter a valid category name.', 'error');
        return;
    } 

    categories = JSON.parse(localStorage.getItem('categories')) || [];
    categories.push(categoryName);
    localStorage.setItem('categories', JSON.stringify(categories));

   
    const option = document.createElement('option');
    option.value = categoryName;
    option.textContent = categoryName;
    categorySelect.appendChild(option);

    categoryList.innerHTML += `<li>${categoryName}</li>`; 
    showMessage(`Category '${categoryName}' added successfully!`, 'success');
    categoryForm.reset(); 
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


