## Expense Tracker

El objetivo de esta aplicación es permitir al usuario llevar un registro de sus gastos, con la posibilidad de agregar categorías y filtrar por fecha. 

### Funcionalidades

Las funcionalidades son las siguientes:

- Añadir nueva categoría
- Añadir gastos a una categoría
- Mostrar gastos por categoría
- Mostrar reporte de gastos

### Cómo usarlo

1. Agrega una nueva categoría utilizando el formulario provisto. 
2. Agrega un gasto a una categoría seleccionando la categoría y completando los detalles del gasto. 
3. Muestra los gastos por categoría seleccionando una categoría de la lista desplegable. 
4. Muestra un reporte de gastos haciendo clic en el botón "Generar Reporte". 

### Código

El código JavaScript de la aplicación utiliza dos arrays diferentes, `categories` y `expenses`, para almacenar la información de las categorías y los gastos respectivamente. 

Las siguientes funciones están disponibles:

- `addCategory()`: Agrega una nueva categoría al array `categories`.
- `addExpense()`: Agrega un nuevo gasto al array `expenses`.
- `showExpenseByCategory()`: Muestra los gastos de una categoría específica.
- `showReport()`: Muestra un reporte de gastos.

Estas funciones son llamadas desde los event listeners de los botones y formularios de la aplicación. 

Además, la aplicación utiliza `localStorage` para almacenar las categorías, lo que permite que la información de las categorías se conserve incluso después de que el usuario haya cerrado la aplicación. 
