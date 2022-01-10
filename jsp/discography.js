//Discography
//Adentro del div creamos un parrafo que nos va a decir el total de la compra
let divCompras = document.getElementById("totalCarrito");
let albumAgregado = document.createElement("p")
let totalTop = document.createElement("p");

//Mientras no seleccione ningun album va a mostrar el siguiente mensaje
totalTop.innerHTML = "<p>Your cart is empty</p>";
divCompras.appendChild(albumAgregado);
divCompras.appendChild(totalTop);

let main = document.getElementById("principal");

class album{

    constructor(nombre, imagen, precio, id) {
        this.nombre = nombre;
        this.img = imagen;
        this.precio = precio;
        this.id = id;
    }


}


const albumes = [];
albumes.push(new album('Selftitled', 'img/SelfTitled.png', 650, "sel"));
albumes.push(new album('Regional at Best', 'img/RegionalAtBestjpg.jpg', 650, "reg"));
albumes.push(new album('Vessel', 'img/Vessel.jpg', 700, "ves"));
albumes.push(new album('Blurryface', 'img/Blurryface.jpg', 700, "tre"));
albumes.push(new album('Trench', 'img/Trench.jpg', 850, "blu"));
albumes.push(new album('Scaled and Icy', 'img/ScaledAndIcy.jpg', 1000, "sca"));

for (const album of albumes) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<img src=${album.img} width=\'200px\' height=\'200px\'>
                            <figcaption>${album.nombre}</figcaption>
                            <input type="button" id=${album.id} class="add" onclick={elCarrito(id)} value=$${album.precio}></input>`  
    main.appendChild(contenedor);
}

const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};

for (const album of albumes) {
    guardarLocal(album.nombre, JSON.stringify(album));
}

guardarLocal("listaAlbumes", JSON.stringify(albumes))

console.log("Lista de albumes: " + localStorage.getItem("listaAlbumes"))



preciosTop = 0;

//Funcion para que cada vez que seleccionen un album muestre por alert el nombre y precio del mismo
function elCarrito(albumCarrito) {
    for (let i = 0; i < albumes.length; i++){
        if (albumes[i].id ==  albumCarrito){
            //P para que se vea arriba del precio total el albúm añadido
            albumAgregado.innerHTML = `<ul><li> ${albumes[i].nombre} has been added.</li></ul>`
                
            //En caso de que elijan mas de un album, el mismo va a ir sumando su precio al total del carrito
            preciosTop = preciosTop + albumes[i].precio;

            totalTop.innerHTML = "Total: $ " + preciosTop;

        }
    }
}





