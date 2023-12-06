const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const containerCarrito = document.getElementById("container-carrito")

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className="card";
    content.innerHTML =`
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
    `;

shopContent.append(content);

let comprar= document.createElement("button");
comprar.innerHTML="comprar";
comprar.className="comprar";

content.append(comprar);

comprar.addEventListener("click",()=> {
    carrito.push ({
        id: product.id,
        img: product.img,
        nombre:product.nombre,
        precio:product.precio,
    })
    guardarCarrito()
})
})

verCarrito.addEventListener ("click",() => {
    const carritoHeader = document.createElement("div");
    carritoHeader.className= "carrito-header";
    carritoHeader.innerHTML= `
    <h1 class="carrito-header-title">Carrito.</h1>
    `;
    containerCarrito.append(carritoHeader);

    const carritoButton =document.createElement ("h1");
    carritoButton.innerText= "x";
    carritoButton.className= "carrito-header-button";

    carritoHeader.append(carritoButton);

    carrito.forEach ((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className ="carrito-content"
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
    `;

    containerCarrito.append(carritoContent);

    });

    const total= carrito.reduce ((acc,el) => acc + el.precio,0);

    const totalCompra = document.createElement("div")
    totalCompra.className ="total-content"
    totalCompra.innerHTML=`Total a pagar : ${total} $ `;
    containerCarrito.append(totalCompra);

});

const guardarCarrito= () => {
    localStorage.setItem("producto", JSON.stringify(carrito));
};

