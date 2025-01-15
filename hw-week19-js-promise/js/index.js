function fetchdata(url) {
    return new Promise((resolve,reject) =>{
        fetch(url).then(response=>{
            if(response.ok){
                resolve(response.json())
            }else{
                reject(new Error("Aqparattardy alu mumkin bolmady!"))
            }
        })
       
    })
    
}
fetchdata(' https://jsonplaceholder.typicode.com/users ').then((otvet)=>{
    displayData(otvet)
 }).catch(qate=>{
     console.log(qate.toString());
    
 })

 function displayData(massiv) {
    console.log(massiv);
    let qorap = document.querySelector('.qorap')

    massiv.forEach(element => {
        let divElement = document.createElement('div')
        let name = document.createElement('h2')
        let paragraph = document.createElement('p')

        divElement.appendChild(name)
        divElement.appendChild(paragraph)

        name.textContent = element.name
        paragraph.textContent = element.email

        qorap.appendChild(divElement)
        
        divElement.className = "div"
        name.className = "name"
        paragraph.className = "email"
    });
    
 }