## Expense Tracker

El objetivo de es poder generar reportes de gastos, pudiendo generar categorías y filtrar por fecha. 
Las funcionalidad actuales son las siguientes:

-Añadir nueva categoría
This is a simple JavaScript application that allows users to track their expenses by category and date. It provides the following functionality:

- Añadir nueva categoría
- Añadir gastos a esa categoría
- Mostrar gasto por categoría
- Filtrar gastos por fecha. 

### Cómo usarlo

- El prompt inicial muestra un menú general con opciones para acceder a las funcionalidades:

1. Add Category
2. Add Expense
3. Show Expense Report
4. Filter Expenses by Date
5. Exit

Siguiendo las opciones en el orden que figura es posible: agregar nueva categoría, agregarle un gasto, mostrar el reporte y filtrar gastos por fecha. 

### Código

Consiste de las siguientes funciones:

- `addCategory()`: Agrega una nueva categoría a la lista. 
- `addExpense()`: Agrega un nuevo gasto. 
- `showExpenseReport()`: Muestra reporte por categoría. 
- `filterExpensesByDate()`: Filtra gastos por fecha. 

Estas funciones son llamadas desde la función `showMainMenu()` que muestra el menú y permite al usuario navegar las opciones disponibles. 

La lista de categorías y los gastos se guardan en 2 arrays diferentes: `categories` y `expenses`.
