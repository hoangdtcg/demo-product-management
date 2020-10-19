const listProduct = document.getElementById("list-product");
const inputName = document.getElementById('add-product-name');
const inputPrice = document.getElementById('add-product-price');

let current = -1;
let products = [];
loadData();

function displayProducts() {
    let str = `<tr>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th colspan="2">Action</th>
                </tr>`;

    for (let i = 0; i < products.length; i++) {
        str += `<tr>
                    <td>${products[i][0]}</td>
                    <td>${products[i][1]}</td>
                    <td><button  onclick="editProduct(${i})">Edit</button></td>
                    <td><button onclick="deleteProduct(${i})">Delete</button></td>
                </tr>`;
    }
    listProduct.innerHTML = str;
}

function deleteProduct(index) {
    products.splice(index, 1);
    saveData();
    displayProducts();
}

function editProduct(index) {
    // let edit = prompt("Nhap ten moi cua san pham");
    // if (edit === '' || edit === null) return;
    // products[index] = edit;

    document.getElementById('edit-product-name').value = products[index][0];
    document.getElementById('edit-product-price').value = products[index][1];
    current = index;

    // displayProducts();
}

function addProduct() {
    let product = [inputName.value,inputPrice.value];
    if (product[0] == '' || product[1] == '') {
        alert("Vui long nhap san pham!");
        inputName.focus();
        return;
    }
    products.push(product);
    clearInput();
    saveData();
    displayProducts();
}

function updateProduct() {
    products[current][0] = document.getElementById('edit-product-name').value;
    products[current][1] = document.getElementById('edit-product-price').value;
    saveData();
    displayProducts();
    clearInput();
}

function clearInput() {
    document.getElementById('add-product').reset();
    document.getElementById('edit-product').reset();
}

function saveData() {
    localStorage.setItem("products", JSON.stringify(products));
}

function loadData() {
    if(localStorage.hasOwnProperty('products')){
        products = JSON.parse(localStorage.getItem('products'));
    }

}

displayProducts();

