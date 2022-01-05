var removeBtn = document.getElementsByClassName("btn-danger");
// for (let i = 0; i < removeBtn.length; i++) {
//     removeBtn[i].addEventListener("click",removeBtns);
// }
function removeBtns(event){
    var e = event.target;
    var parents = e.parentElement.parentElement.remove();
    //console.log(parents);
    grandTotal();
}

var addTocartBtn = document.getElementsByClassName("btn-primary");
for (let i = 0; i < addTocartBtn.length; i++) {
    const element = addTocartBtn[i];
    element.addEventListener("click",addTocartBtns);
}
function addTocartBtns(event){
    var addToCart = event.target;
    var addToCartParents = addToCart.parentElement;
    //console.log(addToCartParents);
    var imgName = addToCartParents.children[0].src;
    var titleName = addToCartParents.children[1].innerText;
    var price = addToCartParents.children[2].innerText;
    addToCartUpdate(imgName,titleName,price);
}

var tbody = document.getElementsByTagName('tbody')[0];
function addToCartUpdate(imgName,titleName,price){
    var createElement = document.createElement('tr');
    var titleNames = document.getElementsByClassName('item-title')
    for (let i = 0; i < titleNames.length; i++) {
        if(titleNames[i].innerText==titleName){
            alert('your cart is already added');
            return
        }
        
    }
    createElement.innerHTML = `<td><img src="${imgName}" class="item-img" alt="banana"></td>
    <td><h4 class="item-title">${titleName}</h4></td>
    <td><h4 class="item-price">${price}</h4></td>
    <td><input type="number" class="item-qty" value="0"></td>
    <td><h4 class="sub-total">AED 0</h4></td>
    <td><button class="btn btn-danger">Remove</button></td>`
    tbody.append(createElement);

    for (let i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener("click",removeBtns);
    }

    for (let i = 0; i < updateqty.length; i++) {
        updateqty[i].addEventListener('click',updateQty);  
    }
    grandTotal();
}
var updateqty = document.getElementsByClassName('item-qty');

function updateQty(event){
    var updateEl = event.target;
    var parentsEl = updateEl.parentElement.parentElement;
    //console.log(parentsEl);
    var itemPrice = parentsEl.getElementsByClassName('item-price')[0];
    var itemPrices = itemPrice.innerText.replace('AED', ' ');
    var subTotal = parentsEl.getElementsByClassName('sub-total')[0];
    subTotal.innerHTML = updateEl.value * itemPrices;
    if(isNaN(updateEl.value) || updateEl.value <=0){
        updateEl.value = 1;
    }
    grandTotal() 
}

function grandTotal(){
    var total = 0;
    var grands = document.getElementsByClassName('grand-total')[0];
    var updates = document.getElementsByClassName('sub-total');
    for (let i = 0; i < updates.length; i++) {
        var updatesAmount = parseInt(updates[i].innerText.replace('AED', ' '));
        total += updatesAmount;   
    }
    grands.innerHTML = 'AED ' + total;
}