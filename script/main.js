// let categories = [];
// let expenses = [];

// Añadir categoria (añadir categoría al array 'categories')//
//---------------------------------------------------------//
//1ro solicita que se ingrese el nombre de la categoría, si el usuario hace clic en cancelar o no ingresa ningún valor, la función muestra una alerta indicando que debe ingresar un nombre de categoría válido y luego sale de la función.
//2do si se agregó algo válido para el nombre de la categoría, la función agrega ese valor al array 'categories' usando push(). Luego, la función muestra una alerta indicando que la categoría se agregó con éxito.

// function addCategory() {
//     const categoryName = prompt('Enter category name:');
//     if (categoryName === null || categoryName.trim() === '') {
//         alert('Please enter a valid category name.');
//         return;
//     }
//     categories.push(categoryName);
//     alert(`Category '${categoryName}' added successfully!`);
// }

// Añadir gasto (agrega un gasto al array 'expenses')//
//--------------------------------------------------//
//1ro la función muestra tres prompts al usuario, solicitando la categoría del gasto, la fecha del gasto y la cantidad.
//2do se crea un objeto llamado 'expense' que almacena los 3 datos ingresados por el usuario. Luego, el objeto expense se agrega al array 'expenses' utilizando el método .push()
//3ro se comprueba si ya hay gastos en la misma fecha que se ingreso. Para eso se usa filter() que crea otro array conteniendo solo los gastos con la fecha del gasto recien ingresado. Si no hay gastos se muestra alert indicando que no hay. Si hay gasto se muestra alert indicando que se ingreso de manera correcta. 

// function addExpense() {
//     const category = prompt("Enter expense category:");
//     const date = prompt("Enter expense date: (DD-MM-YYYY)");
//     const amount = prompt("Enter expense amount:");
//     const expense = {
//         category: category,
//         date: date,
//         amount: amount
//     };
//     expenses.push(expense);
    
//     const expensesOnDate = expenses.filter(e => e.date === date);
//     if (expensesOnDate.length === 0) {
//         alert("No expenses on this date yet.");
//     } else {
//         alert("Expense added successfully.");
//     }
// }


// mostrar el reporte de gastos //
//-----------------------------//
//1ro chequear si hay categorías y gastos disponibles. De no ser así se muestra el mensaje de que deben añadirse mediante un alert. 
//2do se crea report para guardar los datos. 
//3ro bucle por cada categoria y por cada gasto. Si el gasto está en la misma categoría que la categoría actual, se agrega su cantidad al total
//4to se agrega una línea al reporte para cada categoría que muestra el nombre de la categoría y la cantidad total de gastos en ella. Luego, se muestra la alerta con el reporte de gastos.

// function showExpenseReport() {
//     if (categories.length === 0 || expenses.length === 0) {
//         alert('No categories or expenses available. Please add a category and expense first.');
//         return;
//     }
//     let report = 'Expense Report:\n';
//     categories.forEach(category => {
//         let total = 0;
//         expenses.forEach(expense => {
//             if (expense.category === category) {
//                 total += expense.amount;
//             }
//         });
//         report += `- ${category}: $${total}\n`;
//     });
//     alert(report);
// }

// filtrar datos por fecha // 
//------------------------//
//1ro chequear que existan gastos disponibles.
//2do se solicita que el usuario ingrese fecha que desea filtrar
//3ro se usa .filter() en el array expenses para filtrar todos los gastos que tienen la fecha ingresada por el usuario.
//4to creación de reporte. Si no existe se muestra mensaje correspondiente, de lo contrario se muestra la categoría y el monto. 


// function filterExpensesByDate() {
//     if (expenses.length === 0) {
//         alert('No expenses available. Please add an expense first.');
//         return;
//     }
//     const date = prompt('Enter date to filter expenses (DD-MM-YYYY):');
//     if (date === null || date.trim() === '') {
//         alert('Please enter a valid date.');
//         return;
//     }
//     const filteredExpenses = expenses.filter(expense => expense.date === date);
//     let report = `Expenses for date ${date}:\n`;
//     if (filteredExpenses.length === 0) {
//         report += 'No expenses found.';
//     } else {
//         filteredExpenses.forEach(expense => {
//             report += `- ${expense.category}: $${expense.amount}\n`;
//         });
//     }
//     alert(report);
// }

// menu principal //
//---------------//
//bucle while que continua mostrando el menu hasta que se seleccione opcion 'Exit'. 
//Cuando el usuario elige una opción, la función utiliza un switch para ejecutar la función correspondiente a la opción seleccionada. De no ingresar una opcion correcta se muestra un alert con el mensaje pidiendo que ingrese una opcion valida. 
// function showMainMenu() {34
//     while (true) {
//         const choice = prompt(`Expense Tracker\n\n1. Add Category\n2. Add Expense\n3. Show Expense Report\n4. Filter Expenses by Date\n5. Exit\n\nEnter your choice:`);
//         switch (choice) {
//             case '1':
//                 addCategory();
//                 break;
//             case '2':
//                 addExpense();
//                 break;
//             case '3':
//                 showExpenseReport();
//                 break;
//             case '4':
//                 filterExpensesByDate();
//                 break;
//             case '5':
//                 return;
//             default:
//                 alert('Please enter a valid choice.');
//                 break;
//         }
//     }
// }

// showMainMenu();


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


