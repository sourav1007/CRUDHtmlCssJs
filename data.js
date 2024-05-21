let table = document.getElementById("table");
let h1 = document.querySelector("h1");


if (localStorage.length === 0) {
  table.remove();
  h1.innerText = "No data found";
} else {
  
  let data = JSON.parse(localStorage.getItem("data"));

  
  data.forEach((element, index) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td"); 

    
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    btn1.innerText = "edit";
    btn2.innerText = "delete";
    btn1.className = "edit";
    btn2.className = "delete";

   
    td1.innerText = element.name;
    td2.innerText = element.age;
    td3.innerText = element.email;

  
    td4.append(btn1, btn2);

  
    tr.append(td1, td2, td3, td4);

    
    table.append(tr);

   
    btn2.addEventListener("click", function() {
      tr.remove(); 

     
      data.splice(index, 1);
      localStorage.setItem('data', JSON.stringify(data));
    });

   
    btn1.addEventListener("click", function() {
      let name = prompt("Enter new name:", element.name);
      let age = prompt("Enter new age:", element.age);
      let email = prompt("Enter new email:", element.email);

      if (name && age && email) {
        element.name = name;
        element.age = age;
        element.email = email;

        td1.innerText = name;
        td2.innerText = age;
        td3.innerText = email;

        // Update localStorage with the new values
        data[index] = element;
        localStorage.setItem('data', JSON.stringify(data));
      }
    });
  });
}
