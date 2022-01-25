

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotalPrice = price.innerText * quantity.value;
  product.querySelector('.subtotal span').innerText = subTotalPrice
  return subTotalPrice

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');

  let total = 0;
  const allProducts = document.querySelectorAll('.product').forEach(element => {
    total += updateSubtotal(element)
  });

  document.querySelector('#total-value span').innerText = total;

  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const targetParent = ((target.parentNode).parentNode).parentNode
  targetParent.removeChild((target.parentNode).parentNode)
  console.log('remove');
  calculateAll()
}

// ITERATION 5

function createProduct() {
  const newProductName = document.querySelector('.create-product input[type="text"]').value;
  const newProductPrice = document.querySelector('.create-product input[type="number"]').value;
  const newProductDOM = document.querySelector('.product').cloneNode(true);

  newProductDOM.querySelector(".name span").innerText = newProductName;
  newProductDOM.querySelector(".price span").innerText = newProductPrice;

  document.querySelector('tbody').appendChild(newProductDOM);
  const removeButtons = Array.from(document.getElementsByClassName('btn-remove'))
  removeButtons.forEach(element=>{
    element.addEventListener('click', removeProduct)
  })
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeButtons = Array.from(document.getElementsByClassName('btn-remove'))
  removeButtons.forEach(element=>{
    element.addEventListener('click', removeProduct)
  })

  const createButton = document.getElementById('create');
  createButton.addEventListener('click', createProduct)
  
  

});
