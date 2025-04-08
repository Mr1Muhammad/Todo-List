const cart = [
  { name: "Wash dishes", dueDate: '2025-05-22' },
  { name: "Wash clothes", dueDate: '2025-05-23' }
];


document.body.addEventListener("keydown", (event) => {
  if(event.key === "Enter"){
    add_tocart();
  }
  
});

  function add_tocart(){
  const textInputStoresHere = document.querySelector('.input_box');
  const dateInputElement = document.querySelector('.js-due-date-input');
  const name = textInputStoresHere.value;
  const dueDate = dateInputElement.value;

  cart.push({
    //name: name,
    //dueDate:dueDate
    name, 
    dueDate
  });
  textInputStoresHere.value = '';
  rederCart();
  console.log(cart);
}

function rederCart(){
  let todoHTML = '';
  for (let i = 0; i < cart.length; i++){
    const {name, dueDate} = cart[i];
    //const name = valuOfitObject.name; etc
    const capitalizeName = name.toUpperCase();
    const html = 
    `
    <div class="name_text">${capitalizeName}</div> 
    <div>${dueDate}</div>
      <button class="deleteButton" onclick="
        cart.splice(${i}, 1);
        rederCart();
      ">Delete</button>
    `;
    todoHTML += html;
  }
  document.querySelector('.display_toDoList_thing').innerHTML = todoHTML;
}
