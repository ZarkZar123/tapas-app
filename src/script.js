const addItems = document.querySelector(".add-items");
const plateList = document.querySelector(".plates");
const plates = [];

function handlePlates (event){
    event.preventDefault()
    let plate = addItems.item.value
    plates.push(plate)
    addItems.reset()
    console.log(plate);

    handleDisplayList(plates)
}

document.querySelector('[type=submit]').addEventListener('click',handlePlates)

function handleDisplayList(plates=[]){
    plateList.innerHTML= plates.map((plate,i)=>{
            return `
            <li>
                <input type='checkbox' id='item${i}' checked />
                <label for='item${i}'>
                    <span>${plate}</span>
                </label>
                <button class='delete'> ❌ </button>
            </li>
            `
    })
}
