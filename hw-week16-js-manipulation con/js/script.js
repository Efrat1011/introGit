// let form = document.getElementById('form')
// let addBox = document.getElementById('addBox')
// let searchBox = document.getElementById('searchBox')


let addBtn = document.getElementById('addBtn')
let listBox = document.getElementById('list-box')

let searchBtn = document.getElementById('searchBtn')



addBtn.addEventListener('click',(event)=>{
    event.preventDefault()
    let toDoitem = document.getElementById('newTask')
    console.log(toDoitem);

    
    if(toDoitem.value && toDoitem.value != null && toDoitem.value != undefined){
        let createdItem = createNewList(toDoitem.value)
        listBox.appendChild(createdItem)
        toDoitem.value = ''
    }
    
})

searchBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    let search = document.getElementById('search')

    let items = listBox.querySelectorAll('div')
    items.forEach((item)=> {
        let paragraph = item.querySelector('p').textContent.toLowerCase()
        if(search.value.toLowerCase() == '' || search.value.toLowerCase() == null){
            item.style.display = 'block'
        }else if(paragraph == search.value.toLowerCase()){
            item.style.display = 'block'
        }else {
            item.style.display = "none"
        }

        console.log("paragraph mandery: ",paragraph);
        
    });

})












function createNewList(newToDoItem){
    let newDiv = document.createElement('div')
    let itemName = document.createElement('p')
    let deleteButton =document.createElement('button')
    newDiv.className = "newDiv"
    newDiv.style.backgroundColor = 'cadetblue'
    newDiv.style.borderRadius = 15+"px"
    newDiv.style.textAlign = "center"
    newDiv.style.display = "flex"
    newDiv.style.justifyContent = "space-between"
    newDiv.style.marginTop = 50 + "px" 
    newDiv.style.paddingLeft = 50 + "px"
    
    

    deleteButton.className = "deleteBtn"
    deleteButton.style.width = 100 +"px"
    deleteButton.style.borderRadius = 12 + "px"
    deleteButton.style.backgroundColor = "darkviolet"

    itemName.textContent = newToDoItem
    deleteButton.textContent = 'Өшір'
    
    deleteButton.addEventListener('click',() => {
        listBox.removeChild(newDiv)
    })



    newDiv.appendChild(itemName)
    newDiv.appendChild(deleteButton)

    return newDiv
}