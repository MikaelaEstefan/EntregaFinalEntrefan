//--------Fetch-------//
//-------------------//
//1- Realiza solicitud al archivo JSON local. //
//2- Tomar respuesta y convertirla en formato JSON //
//3- Toma esos datos y ejecuta función buscando elemento 'description' //
//4- Establece contenido de este elemento con los datos del archivo JSON //
//5- En caso de error en el proceso de solicitud o conversión a JSON captura el error y lo muestra en la consola //

fetch('./json/data.json')
  .then(response => response.json())
  .then(data => {
    const description = document.getElementById('description');
    description.textContent = data.description;
})
.catch(error => console.error('Error fetching description:', error));
