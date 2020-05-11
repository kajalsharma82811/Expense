var add = document.querySelector('#add')
var inputAmount = document.querySelector('#amount')
var inputProduct = document.querySelector('#product')
var display = document.querySelector(".display")
var total = document.querySelector('.total')

// console.log(add)
// console.log(display)
let totalExpense = 0;
var position = 0;
function deleteItem(position) {
    let li = document.querySelector('#unique-generated-id-' + position);
    li.remove();

}
add.addEventListener('click', function () {
    let amount = +inputAmount.value;
    let product = inputProduct.value.trim();
    if (isNaN(amount) || product === "") {
        alert("Enter amount and product")
    } else {
  let expenseItem = {}, date = new Date(), year = date.getFullYear(), array = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], month = array[date.getMonth()], d = date.getDate(),template="";
        expenseItem.amount = amount;
        expenseItem.product = product;
        
        template += `<li class="list-group-item d-flex justify-content-between" id="unique-generated-id-${position}">
							<div class="d-flex flex-column">
								${product}
								<small class="text-muted">${d} ${month} ${year}</small>
							</div>
							<div>
								<span class="px-5">
								${amount}
								</span>
								<button type="button" 

                        class="btn btn-outline-danger btn-sm button" 
                                id="deleteItem"

                                class="btn btn-outline-danger btn-sm button" 
                                onclick="deleteItem(${position})"

                                >
									<i class="fas fa-trash-alt"></i>
								</button>
							</div>

						</li>`;
            display.innerHTML = template + display.innerHTML;
        totalExpense = parseInt(amount) + totalExpense;
        var someText = `Total:${totalExpense}`
        total.textContent= someText;
        position++;

      // console.log(template)
      


      
     
      

      

      }
      
      
})

				







