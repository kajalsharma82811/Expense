var add = document.querySelector('#add')
// console.log(add)
var inputAmount = document.querySelector('#amount')
var inputProduct = document.querySelector('#product')
var display = document.querySelector(".display")
console.log(display)

var total = document.querySelector('.total')
let totalExpense = 0;
var expenseItema = [];
add.addEventListener('click',function(){

      function deleteItem(){
      	console.log(`hi delete`)
      }
	
	


	 var amount = inputAmount.value
     //console.log(parseInt(amount))
     var product = inputProduct.value
     
     //console.log(product)
      if(amount==""&product==""){
      	alert("Enter amount and product")
      }else{
      	var expenseItem = {};
      	expenseItem.amount = amount;
      	expenseItem.product = product;
      	console.log(expenseItem)
      	expenseItema.push(expenseItem)
      	console.table(expenseItema)
      	// var data1 = expenseItema[0];
      	// var data2 = expenseItema[1];
      	// var data1Text = `${data1.amount}  :: ${data1.product}`
      	// var data2Text = `${data2.amount}  :: ${data2.product}`
      	// console.log(data1Text)
     
      var date = new Date()
      var year = date.getFullYear()
      var array = ['Jan','Feb','March','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec']
      var month = array[date.getMonth()]
      // var array = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat',]
      // var day = array[date.getDay()]
      var d = date.getDate();

    
      

      var template = "";
      // template+=`<div>${product}    :      ${amount}</div>`
     template+=`<li class="list-group-item d-flex justify-content-between">
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
                                onclick="deleteItem()"
                                >
									<i class="fas fa-trash-alt"></i>
								</button>
							</div>
						</li>`
      // console.log(template)
      display.innerHTML=template;
      function deleteItem(){
      	console.log(`deleteitem`)
      }


      
     
      

      totalExpense = parseInt(amount)+totalExpense;
      console.log(totalExpense)
      var someText = `Total:${totalExpense}`
      total.textContent= someText;


      }
      
      
})

