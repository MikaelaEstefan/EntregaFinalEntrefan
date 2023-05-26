## Expense Tracker

El objetivo de esta aplicación es permitir al usuario llevar un registro de sus gastos, con la posibilidad de agregar categorías y generar un reporte. 

### Funcionalidades

Las funcionalidades son las siguientes:

- Añadir nueva categoría
- Añadir gastos a una categoría
- Mostrar reporte de gastos por categoría

### Cómo usarlo

1. Agregar una nueva categoría:

- Completa el formulario proporcionado con el nombre de la categoría.
- Haz clic en el botón "Agregar categoría" para añadir la categoría al registro.
- La categoría se mostrará en la lista de categorías disponibles.

2. Agregar gastos a una categoría:

- Selecciona una categoría de la lista desplegable.
- Agrega el monto.
- Haz clic en el botón "Agregar gasto" para registrar el gasto en la categoría seleccionada.
- El gasto se añadirá a la lista de gastos asociados a la categoría.

3. Mostrar un reporte de gastos:

- Haz clic en el botón "Generar reporte" para ver un informe de gastos por categoría.
- El informe se presentará en forma de gráfico, mostrando los montos totales de gastos por categoría.

### Código

El código JavaScript de la aplicación utiliza dos arrays diferentes, `categories` y `expenses`, para almacenar la información de las categorías y los gastos respectivamente. 

Las siguientes funciones están disponibles:

- `addCategory()`: Agrega una nueva categoría al array `categories`.
- `addExpense()`: Agrega un nuevo gasto al array `expenses`.
- `showMessage()`: Crea un nuevo elemento div que permite visualizar los mensajes correctamente. 
- `populateCategories()`: Crea una opción seleccionable en la sección de expenses por cada categoría    agregada.
- `showReport()`: Muestra el reporte de gastos.

Estas funciones son llamadas desde los event listeners de los botones y formularios de la aplicación. 

Además, la aplicación utiliza `localStorage` para almacenar las categorías, lo que permite que la información de las categorías se conserve incluso después de que el usuario haya cerrado la aplicación. 

La aplicación utiliza las siguientes librerías:

- SweetAlert para mostrar mensajes de éxito y error.
- Chart.js para generar el gráfico de gastos por categoría en el informe.

