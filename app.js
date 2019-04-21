
//add to cart
var productsCountEl = document.getElementById('products-count')
console.log(productsCountEl)



var addToCartButtons = document.querySelectorAll(".add-to-cart")
console.log(addToCartButtons)

for(var i=0;i < addToCartButtons.length;i++){
	addToCartButtons[i].addEventListener("click",function(e){
		e.preventDefault()
		var prevProductsCount =+productsCountEl.textContent
		productsCountEl.textContent = prevProductsCount + 1
	})
}

//change like state      
var likeButtons = document.querySelectorAll(".like-img")
for (var i = 0 ;i< likeButtons.length;  i++) {
	likeButtons[i].addEventListener("click",function() {
		if (this.classList.contains("liked")) {
			this.classList.remove("liked")
		} else {
			this.classList.add("liked")
		}
	})
}





 



    
var addProduct = document.querySelectorAll(".plus")[0]
console.log(addProduct)
var minProduct = document.querySelectorAll(".minus")[0]
console.log(minProduct)
var quantitiInput = document.querySelectorAll(".quantiti-input input")[0]
console.log(quantitiInput)
if (quantitiInput.value<=0) {
    minProduct.addEventListener("click",function(){
    var current = +quantitiInput.value
    quantitiInput.value = current + 1
})
}

addProduct.addEventListener("click",function(){
	var current = +quantitiInput.value
	quantitiInput.value = current + 1
})

minProduct.addEventListener("click",function(){
	var current = +quantitiInput.value
	quantitiInput.value = current - 1
})
