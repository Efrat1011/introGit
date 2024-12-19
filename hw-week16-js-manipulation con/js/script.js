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