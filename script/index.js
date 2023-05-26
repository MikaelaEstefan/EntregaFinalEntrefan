fetch('./json/data.json')
  .then(response => response.json())
  .then(data => {
    const description = document.getElementById('description');
    description.textContent = data.description;
})
.catch(error => console.error('Error fetching description:', error));
