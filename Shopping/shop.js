
let carts , i;
 carts = document.querySelectorAll("a.add-cart");

let products = [
{
	tag:"red",
	name:"Skoda",
	price:10000,
	inCart:0
},
{
	tag:"yellow",
	name:"VW",
	price:30000,
	inCart:0
},
{
	tag:"black",
	name:"Maruti",
	price:20000,
	inCart:0
}
];

for( let i=0; i < carts.length; i++){
	
	carts[i].addEventListener("click",
	 function(){
		cartNumbers(products[i]);
		totalCost(products[i]);
		
})}

function onloadCartNumbers(){
	let productNumbers = localStorage.getItem("cartNumbers");

	if(productNumbers){
		document.querySelector("#cart i").textContent = productNumbers;
	}
}

onloadCartNumbers();

function cartNumbers(product){
	
	let productNumbers = localStorage.getItem("cartNumbers");
	 productNumbers = parseInt(productNumbers);

	if(productNumbers){
		localStorage.setItem("cartNumbers", productNumbers + 1);
		document.querySelector("#cart i").textContent = productNumbers + 1;
	}
	else{
		localStorage.setItem("cartNumbers", 1)
		 document.querySelector("#cart i").textContent = 1;
}


function setItems(product){
let cartItem = localStorage.getItem("productIncart");
cartItem = JSON.parse(cartItem);


if( cartItem != null){

if (cartItem[product.name] == cartItem[product.name])
		{ 
	cartItem = {
 			...cartItem,
 			[product.name]:product
 				}
 		}
 		
		cartItem[product.name].inCart = cartItem[product.name].inCart + 1;
		
			   
	}
 else 
{
product.inCart = 1;
		cartItem =
		{
			[product.name]:product
		}
}
localStorage.setItem("productIncart", JSON.stringify(cartItem));
}
setItems(product);		
}

function totalCost(product){

let cartCost = localStorage.getItem("totalCost");
if (cartCost != null){
cartCost = parseInt(cartCost);
localStorage.setItem("totalCost", cartCost + product.price);
}else
localStorage.setItem("totalCost",product.price);
}


function displayCart(){
	let cartItem = localStorage.getItem("productIncart");
	let cartCost = localStorage.getItem("totalCost");
	cartItem =JSON.parse(cartItem);
	//let productContainer = document.querySelectorAll(".product");
	let productContainer = document.querySelector(".product");


	if(cartItem && productContainer){

		productContainer.innerHTML='';
		Object.values(cartItem).map(item => {
			
			productContainer.innerHTML +=`
				<div class="containerArea">
				<div class="prod">
						<i class="fa fa-window-close"></i>
						<img src="Image/${item.tag}.jpg">
						<span>${item.name}</span>
				</div>
				<div class="productPrice">
				<span>$${item.price}</span>
				</div>
				<div class="quantity">
				<i class="fa fa-minus"></i>
				<span>${item.inCart}</span>
				<i class="fa fa-plus"></i>
				</div>
				<div class="total">$${item.inCart * item.price}</div>
				</div>
				`;
			});		

				productContainer.innerHTML +=`
				<div class="basketContainer">
				<h1 class="basketCost">Basket Cost</h1>
				<h1 class="cartCost">$${cartCost}</h1>
				</div>
				`;
		}
	}

displayCart();

 