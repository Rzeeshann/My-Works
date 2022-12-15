window.addEventListener('DOMContentLoaded',(e) => {
    e.preventDefault()
    axios.get('http://localhost:3000/products')
    .then(products => {
        console.log(products.data.data);
       let parent =  document.getElementById('bike-content')
       let child = ''
       for(let i =0; i<products.data.data.length; i++){
        child += `<div id='bike1'>
        <h3>${products.data.data[i].title}</h3>
        <div class="image-container">
            <img class="prod-images" src=${products.data.data[i].imageUrl} alt="">
        </div>
        <div class="prod-details">
            <span>₹<span>${products.data.data[i].price}</span></span>
            <button class="shop-item-button" type='button' onClick="addtocart(${products.data.data[i].id})">ADD TO CART</button>
        </div>
    </div>`
       }
       parent.innerHTML += child
    })
    .catch(err => {
        console.log(err);
    })
    showingCart()
    // updateCartTotal()
})

function addtocart(productId) {
    console.log(productId);
    axios
      .post("http://localhost:3000/cart", {productId: productId})
      .then((response) => {
       console.log(response);
      })
      .catch((err) => {
    console.log(err);
      });
    showingCart();
  }


  function showingCart() {
    axios
      .get("http://localhost:3000/cart")
      .then((data) => {
        console.log(data);
        if (data.status === 200) {
          let products = data.data.data;
          
          let cartItems = document.getElementsByClassName("cart-items")[0];
          cartItems.innerHTML = ''
          // console.log(cartItems)
          products.forEach((product) => {
            let cartRow = document.createElement("div");
             cartRow.className = "cart-row2";
             
            let content = ` <div class="cart-item cart-column">
                 <div class="divider">
                 <img class="cart-item-image" src=${product.imageUrl} width="100" height="100">
                 
                 <span class="cart-item-title">${product.title}</span>
                 </div>
                 <span class="cart-price cart-column">${product.price}</span>
                 <div class="cart-quantity cart-column">
                 <input class="cart-quantity-input" type="number" value="${product.cartItem.quantity}" change="addtocart${product.id}">
                
                 <button class="btn btn-danger" type="button" onclick="removeItem(${product.id})">REMOVE</button>
                 </div>
                 </div>`;
  
            cartRow.innerHTML = content;
            cartItems.append(cartRow);
          });
          
        } else {
          throw new Error("Something went wrong");
        }
      })
      .catch((err) => {
        console.log(err)
      });
    //   updateCartTotal()
  }
  // cart pop-up model

let open = document.getElementsByClassName("cart-holder");

const close = document.getElementsByClassName("close");

const container = document.getElementsByClassName("popup-container");


for (let i = 0; i < open.length; i++) {
  let btn = open[0];
  btn.addEventListener("click", showcart);
}


function showcart() {
    console.log("jnhfhjnhd")
  container[0].classList.add("active");
}

close[0].addEventListener("click", () => {
  container[0].classList.remove("active");
});

function removeItem(productId){
console.log(productId);
axios.delete(`http://localhost:3000/cart-delete-item/${productId}`)
.then(res => {
    showingCart()
    console.log(res);
})
.catch(err => {
    console.log(err);
})
}