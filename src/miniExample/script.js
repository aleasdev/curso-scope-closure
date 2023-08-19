//estoy pensando en una calculadora sencilla para el super
//una funcion que vaya sumando todas los productos y que los recuerde

//funcion bacan que reciba el nombre y el precio del producto

let productInput = document.querySelector("#product-name-input");
let priceInput = document.querySelector("#product-price-input");
let productAddButton = document.querySelector("#product-add-button");

let displayProducts = document.querySelector("#product-in-cart");

let displayTotal = document.querySelector("#total-carrito");

productAddButton.addEventListener("click", mostrarInputs);
let allProducts = {};

function mostrarInputs() {
    let product = productInput.value;
    let price = Number(priceInput.value);

    if (!product && !price) {
        alert("add something");
    } else {
        if (product in allProducts) {
            alert("This item is already inside the cart");
            console.log("si ta");
        } else {
            addProductCarrito1(product, price);

            let newProduct = document.createElement("p");
            newProduct.innerText = `${product} | ${price}`;
            displayProducts.appendChild(newProduct);
            console.log(allProducts);
        }
    }
    // console.log({ product, price });
}

function calcularTotalCarrito() {
    let sumaPrecios = 0;
    return function suma(money) {
        console.log("cashin");
        sumaPrecios += money;
        displayTotal.innerText = sumaPrecios;
        return sumaPrecios;
    };
}

let carrito1 = calcularTotalCarrito();
function addProductCarrito1(productName, price) {
    allProducts[productName] = price;
    console.log(carrito1(price));
}
