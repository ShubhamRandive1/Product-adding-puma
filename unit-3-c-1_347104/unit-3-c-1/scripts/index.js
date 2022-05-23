//store the products array in localstorage as "products"

document.querySelector('#products').addEventListener('submit', addData);
let arr = JSON.parse(localStorage.getItem('products')) || [];


function Product(t, d, p, i) {
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i
}

function addData() {
    event.preventDefault();

    let form = document.getElementById('products');

    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;


    console.log(type, desc, price, image);

    let adding = new Product(type, desc, price, image);
    arr.push(adding);

    localStorage.setItem('products', JSON.stringify(arr));
    window.location.reload();
}