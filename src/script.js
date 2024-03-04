const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = [];

function handlePlates (event){
    event.preventDefault()
    let plate = addItems.item.value
    items.push(plate)
    addItems.reset()
    console.log(plate);
}

document.querySelector('[type=submit]').addEventListener('click',handlePlates)
