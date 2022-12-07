function savetoCrudstorage(event) {
    event.preventDefault();
    let userDetails = {
      Name: document.getElementById("name").value,
      Email: document.getElementById("emailID").value,
      Number: document.getElementById("phone").value,
      Date: document.getElementById("date").value,
      Time: document.getElementById("time").value,
    };
  
    axios
      .post(
        "https://crudcrud.com/api/1d3f85bd354b4187bc86dd4c560c5fbb/AppointmentApp",
        userDetails
      )
      .then((response) => {
        showNewUseronScreen(response.data);
      })
      .catch((err) => console.log(err));
  }
  
  async function showNewUseronScreen(){
    window.addEventListener("DOMContentLoaded"), ()=>{
      try{
        let promise3=axios.get("https://crudcrud.com/api/1d3f85bd354b4187bc86dd4c560c5fbb/AppointmentApp")
        await((promise3)) =>{
          console.log(response);
          for (var i = 0; i < response.data.length; i++){
            showNewUseronScreen(response.data[i]);
          }
          catch(error){
            console.log(err);
          }
        }
      }
    }
  }
  // window.addEventListener("DOMContentLoaded", () => {
  //   axios
  //     .get("https://crudcrud.com/api/1d3f85bd354b4187bc86dd4c560c5fbb/AppointmentApp")
  //     .then((response) => {
  //       for (let i = 0; i < response.data.length; i++) {
  //         showNewUseronScreen(response.data[i]);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // });
  
  function showNewUseronScreen(user) {
    document.getElementById("emailID").value = "";
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
  
    const d = document.getElementById("ul");
    const li = `<li id="${user._id}"> ${user.Name} - ${user.Email} - ${user.Number} - ${user.Date} - ${user.Time} 
      <button onclick = "editUser('${user.Email}','${user.Name}','${user.Number}','${user.Date}','${user.Time}','${user._id}')"> Edit </button> 
      <button   onclick = "deleteUser('${user._id}')"> Delete </button> 
       </li>`;
  
    d.innerHTML = d.innerHTML + li;
  }
  
  function removeUserfromScreen(userId) {
    let parent = document.getElementById("ul");
  
    let child = document.getElementById(userId);
    if (child) {
      parent.removeChild(child);
    }
  }
  
  function deleteUser(userId) {
    axios
      .delete(
        `https://crudcrud.com/api/1d3f85bd354b4187bc86dd4c560c5fbb/AppointmentApp/${userId}`
      )
      .then((response) => {
        removeUserfromScreen(userId);
      });
  }
  
  function editUser(Email, Name, Number, Date, Time, userId) {
    document.getElementById("emailID").value = Email;
    document.getElementById("name").value = Name;
    document.getElementById("phone").value = Number;
    document.getElementById("date").value = Date;
    document.getElementById("time").value = Time;
  
    deleteUser(userId);
  }