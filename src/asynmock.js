const productos = [
    { nombre: "Blue Lightsaber", precio: 200, id: "1", img: "../public/Lightsaber1.png", idCat: "1" },
    { nombre: "Green Lightsaber", precio: 200, id: "2", img: "../public/greenLightsaber.jpg", idCat: "1" },
    { nombre: "Red Lightsaber", precio: 200, id: "3", img: "../public/redLightsaber.jpg", idCat: "1" },
    { nombre: "Mace Windu", precio: 50, id: "4", img: "../public/ActionFigure.png", idCat: "2" },
    { nombre: "Darth Maul", precio: 35, id: "5", img: "../public/actionFigure2.jpg", idCat: "2" },
    { nombre: "Darth Vader", precio: 35, id: "6", img: "../public/actionFigure3.png", idCat: "2" },
    { nombre: "Villain Set", precio: 40, id: "7", img: "../public/Collectibles.png", idCat: "3" },
    { nombre: "Luke Skywalker", precio: 30, id: "8", img: "../public/Luke2.jpg", idCat: "3" },
    { nombre: "Luke Skywalker 40th Anniversary", precio: 45, id: "9", img: "../public/Luke1.png", idCat: "3" },
    { nombre: "Star Wars: Hidden Empire", precio: 20, id: "10", img: "../public/Comic.png", idCat: "4" },
    { nombre: "Star Wars: The High Republic", precio: 20, id: "11", img: "../public/portrait_uncanny.jpg", idCat: "4" },
    { nombre: "Star Wars: Revelations", precio: 20, id: "12", img: "../public/starwars_revelations.jpg", idCat: "4" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}



export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}



export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}