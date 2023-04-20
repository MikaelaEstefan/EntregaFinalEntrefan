let categories = [];
let expenses = [];

// Añadir categoria 
function addCategory() {
    const categoryName = prompt('Enter category name:');
    if (categoryName === null || categoryName.trim() === '') {
        alert('Please enter a valid category name.');
        return;
    }
    categories.push(categoryName);
    alert(`Category '${categoryName}' added successfully!`);
}

// Añadir gasto
function addExpense() {
    const category = prompt("Enter expense category:");
    const date = prompt("Enter expense date: (DD-MM-YYYY)");
    const amount = prompt("Enter expense amount:");
    // Crear un objeto de gastos con los datos ingresados
    const expense = {
        category: category,
        date: date,
        amount: amount
    };
    // agregar el objeto al array de gastos
    expenses.push(expense);
    
    // chequear si hay gastos ingresados en esa fecha
    const expensesOnDate = expenses.filter(e => e.date === date);
    if (expensesOnDate.length === 0) {
        alert("No expenses on this date yet.");
    } else {
        alert("Expense added successfully.");
    }
}


// mostrar el reporte de gastos
function showExpenseReport() {
    if (categories.length === 0 || expenses.length === 0) {
        alert('No categories or expenses available. Please add a category and expense first.');
        return;
    }
    let report = 'Expense Report:\n';
    categories.forEach(category => {
        let total = 0;
        expenses.forEach(expense => {
            if (expense.category === category) {
                total += expense.amount;
            }
        });
        report += `- ${category}: $${total}\n`;
    });
    alert(report);
}

// filtrar datos por fecha
function filterExpensesByDate() {
    if (expenses.length === 0) {
        alert('No expenses available. Please add an expense first.');
        return;
    }
    const date = prompt('Enter date to filter expenses (DD-MM-YYYY):');
    if (date === null || date.trim() === '') {
        alert('Please enter a valid date.');
        return;
    }
    const filteredExpenses = expenses.filter(expense => expense.date === date);
    let report = `Expenses for date ${date}:\n`;
    if (filteredExpenses.length === 0) {
        report += 'No expenses found.';
    } else {
        filteredExpenses.forEach(expense => {
            report += `- ${expense.category}: $${expense.amount}\n`;
        });
    }
    alert(report);
}

// menu principal 
function showMainMenu() {
    while (true) {
        const choice = prompt(`Expense Tracker\n\n1. Add Category\n2. Add Expense\n3. Show Expense Report\n4. Filter Expenses by Date\n5. Exit\n\nEnter your choice:`);
        switch (choice) {
            case '1':
                addCategory();
                break;
            case '2':
                addExpense();
                break;
            case '3':
                showExpenseReport();
                break;
            case '4':
                filterExpensesByDate();
                break;
            case '5':
                return;
            default:
                alert('Please enter a valid choice.');
                break;
        }
    }
}

showMainMenu();



