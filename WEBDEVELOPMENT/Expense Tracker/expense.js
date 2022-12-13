function savetoLocalstorage(event) {
    event.preventDefault();
    
let userDetails = {
    My_Expense_Amount : document.getElementById('amount').value,
    Description: document.getElementById('des').value,
    category :document.getElementById('cat').value,
};
console.log("hey hey")
axios
.post("http://localhost:3000/post", userDetails)

.then((response) => {
  alert("Expense Added");
})
.catch((err) => {
  console.log(err);
});
showNewUseronScreen(userDetails);

window.addEventListener('DOMContentLoaded',() =>{
    axios.get("http://localhost:3000/expense")
    .then(res => {
      for(let i =0; i<res.data.data.length; i++){
        showNewUseronScreen(res.data.data[i].amount,res.data.data[i].des, res.data.data[i].cat)
  
      }
    })
    .catch(err => {
      console.log(err);
    })
  })

let userDetails_serialized=JSON.stringify(userDetails)  

localStorage.setItem(userDetails.My_Expense_Amount , userDetails_serialized)
showNewUseronScreen(userDetails)
}

function showNewUseronScreen(userDetails){
 const d=document.getElementById('ul')
 const li= `<li id="${userDetails. My_Expense_Amount}"> '${userDetails.My_Expense_Amount}','${userDetails.Description}','${userDetails.category}'
  <button onclick = editUser('${ userDetails.My_Expense_Amount}','${userDetails.Description}','${userDetails.category}')> Edit </button> 
  <button onclick = deleteUser('${userDetails.My_Expense_Amount}')> Delete </button> 
   </li>`
d.innerHTML=d.innerHTML + li
}



function deleteUser(amount) {
    let child = document.getElementById(amount)
    let parent=document.getElementById('ul')
    parent.removeChild(child)
    localStorage.removeItem(amount)
}

function editUser(amount,description,category) {
    
amount=document.getElementById('amount').value
description=document.getElementById('des').value
category=document.getElementById('cat').value

deleteUser(amount)

}