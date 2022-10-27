//Clona uma linha como base
const linha = document.querySelector('.product');
const clone = linha.cloneNode(true);




// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  console.log(product);

  //... your code goes here
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')

  console.log(price.innerText)
  console.log(quantity.value)
  subtotal.innerText = +price.innerText * +quantity.value
  
  return (+price.innerText * +quantity.value)

}


// code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
          //const singleProduct = document.querySelector('.product');
          //updateSubtotal(singleProduct);
  // end of test
  
  // ITERATION 2
  //... your code goes here


function calculateAll() {
  const products = document.getElementsByClassName('product')
  let sum = 0;
  const total = document.querySelector('#total-value span')
  console.log(total)
  for (let i = 0; i<products.length; i++){
    sum += updateSubtotal(products[i])
    total.innerText = sum

  }
}
 

// ITERATION 4

function removeProduct(event) {
  event.currentTarget.parentElement.parentElement.remove()
  calculateAll()
}

// ITERATION 5

function createProduct(clone) {

  //GET OBJETOS NAS VARIAVEIS
  const productName = document.querySelector('.create-product td input[type=text]').value;
  const productPrice = document.querySelector('.create-product td input[type=number').value;


//GET TABELA E LINHA
  const tabela = document.querySelector('tbody');

//CLONE 
  clone = linha.cloneNode(true);

  clone.querySelector('.name span').innerHTML = productName;
  clone.querySelector('.price span').innerHTML = productPrice;

  // Limpa os campos Quantity e Subtotal 
  clone.querySelector('.quantity input').value = 0;
  clone.querySelector('.subtotal span').innerHTML = 0;

  tabela.appendChild(clone);

//GERAR DELETAR
  const btnRemove = document.querySelectorAll('.btn-remove')
  btnRemove.forEach(btn => btn.addEventListener('click', removeProduct));

}





  // const tableBody = document.querySelector('tbody');
  // const row = document.querySelector('.product');
  // const clone = row.cloneNode(true);
  // clone.querySelector('.name span').innerHTML = productName;
  // clone.querySelector('.price span').innerHTML = productPrice;
  // tableBody.appendChild(clone);


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

	//BUSCA CREATED
	const createProductBtn = document.querySelector('#create');
	createProductBtn.addEventListener('click', createProduct);
	
	//BUSCA BOTAO REMOVER 
	const btnRemove = document.querySelectorAll('.btn-remove')
	btnRemove.forEach(btn => btn.addEventListener('click', removeProduct));
	
	})
	
	
