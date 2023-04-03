STAR WARS QUIZ

Este es un proyecto de un quiz de Star Wars. Los usuarios pueden responder preguntas sobre la franquicia de Star Wars y recibir una puntuación al final.

CÓMO FUNCIONA EL QUIZ

El quiz tiene 7 preguntas con 3 opciones de respuesta. El usuario debe seleccionar una respuesta para cada pregunta antes de clickear en el botón "Submit". Si no se ha ingresado una dirección de correo electrónico válida, se le pedirá al usuario que la ingrese.
Luego de completado el quiz, se calculará la puntuación del usuario y se mostrará en una alerta. 

JAVASCRIPT

Importante: al ser clickeado el botón de inicio muestra una alerta tres veces advirtiendo al usuario presionar al botón. No resolví como hacer que funcione de la manera contraria.  

A continuación, se valida la dirección de correo electrónico del usuario. Si la dirección de correo electrónico ingresada no cumple con el formato de la expresión regular, se muestra una alerta pidiendo al usuario que ingrese una dirección de correo válida. 

Finalmente, se definen dos funciones importantes para el quiz: checkAnswer y submitQuiz. checkAnswer toma como argumentos una pregunta y una respuesta, y devuelve una puntuación de 1 si la respuesta es correcta y 0 si no lo es. submitQuiz llama a checkAnswer para cada una de las 7 preguntas y suma las puntuaciones para obtener la puntuación total del usuario. Luego muestra la puntuación en una alerta. 

May the force be with you!