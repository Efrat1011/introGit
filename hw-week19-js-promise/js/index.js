// function fetchdata(url) {
//     return new Promise((resolve,reject) =>{
//         fetch(url).then(response=>{
//             if(response.ok){
//                 resolve(response.json())
//             }else{
//                 reject(new Error("Aqparattardy alu mumkin bolmady!"))
//             }
//         })
       
//     })
    
// }
// fetchdata('https://jsonplaceholder.typicode.com/todos').then((response)=>{
// response.forEach((item) => {
//     console.log(item.userTd);
    
//  })
  // Деректерді алу функциясы
  async function fetchUserData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error("Қате орын алды!", error);
        return [];
    }
}

 // Деректерді көрсету функциясы
 function displayUsers(users) {
    const container = document.getElementById('users-container');
    container.innerHTML = '';

    users.forEach(user => {
        const userBlock = document.createElement('div');
        userBlock.className = 'user-block';
        userBlock.innerHTML = `
            <p><strong>Қолданушы аты:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
        `;
        container.appendChild(userBlock);
    });
}

// Негізгі функция
async function main() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const users = await fetchUserData(apiUrl);
    displayUsers(users);
}

// Функцияны шақыру
main();