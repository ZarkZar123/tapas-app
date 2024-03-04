const addItems = document.querySelector(".add-items");
const plateList = document.querySelector(".plates");
const plates = [];

function handlePlates (event){
    event.preventDefault()
    // get user input and add to list
    let plate = addItems.item.value
    if(plate == '')return;
    plates.push({text:plate,done:false})
    addItems.reset()

    // store to local storage
    localStorage.setItem('plates', JSON.stringify(plates))
    handleDisplayList(plates)
}



function handleDisplayList(plates=[]){
    plateList.innerHTML= plates.map((plate,i)=>{
            return `
            <li>
                <input onclick='toggleDone(event)' type='checkbox' id='item${i}' data-index=${i} ${plate.done ? "checked": ""} />
                <label for='item${i}'>
                    <span>${plate.text}</span>
                </label>
                <button class='delete' onclick='deletePlate(event)' data-index=${i}> ❌ </button>
            </li>
            `
    }).join("")
}

function toggleDone(event){
    const element =event.target
   const plateIndex = element.dataset.index
   console.log('heloo');
   plates[plateIndex].done = !plates[plateIndex].done
   localStorage.setItem('plates', JSON.stringify(plates))
    handleDisplayList(plates)

}

function deletePlate(event){
    const element =event.target
    const plateIndex = element.dataset.index
    plates.splice(plateIndex,1)
    localStorage.setItem('plates', JSON.stringify(plates))
    handleDisplayList(plates)

}

(function init(){
   const data = localStorage.getItem('plates')
   data && plates.push(...JSON.parse(data))
   handleDisplayList(plates)

})()

document.querySelector('[type=submit]').addEventListener('click',handlePlates)