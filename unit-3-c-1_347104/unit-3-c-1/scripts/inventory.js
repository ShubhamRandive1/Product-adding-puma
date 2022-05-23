let arr = JSON.parse(localStorage.getItem('products')) || [];

arr.map(function (el, i) {



    let main_div = document.createElement('div');
    main_div.setAttribute('id', 'all_products');

    let type = document.createElement('h3')
    type.innerHTML = el.type;
    type.setAttribute('id', 'type')


    let price = document.createElement('h3')
    price.innerHTML = el.price;
    price.setAttribute('id', 'price')

    let image = document.createElement('img')
    image.src = el.image;
    image.setAttribute('id', 'image');


    let desc = document.createElement('h3')
    desc.innerHTML = el.description;
    desc.setAttribute('id', 'desc')


    let btn = document.createElement('button')
    btn.setAttribute('id', 'remove_product')
    btn.innerText = 'Remove Product'
    btn.addEventListener('click', function (element, index) {
        removeItem(element, index)
    });

    main_div.append(image, type, price, desc, btn);

    document.getElementById('all_products').append(main_div)

});


function removeItem(element, index) {
    console.log(element)
    arr.splice(index, 1)
    localStorage.setItem('products', JSON.stringify(arr))
    window.location.reload();
}