let data = [
    {title: '"Abay Joly"- Mukhtar Auezov',
     description: 'Abaydin omyry men qazaq qogamynyn tarahi shejiresy'
    },
    {title: '"Qan men ter"- Abdimajil Nurpeisov',
        description: 'Qazaq halkynyn qiyin  kezenderinin epikalyq bayany'
       },
    {title: '"Koshpendiler"- Iliyas Esenberlin',
        description: 'Qazaq handygynyn qalyptasu tarihy'
       },
       {title: '"Za nami Moskva" - Aleksandr Bek',
        description: 'Panfilovshylardyn erjureltygy turaly  tarihi derekty roman'
       }
   
]
let box = document.getElementById('container')
for (let i = 0; i < data.length; i++)  {
    
    let card = document.createElement('div');
    card.className = 'card';

    
    let title = document.createElement('h3');
    title.textContent = data[i].title;

    
    let description = document.createElement('p');
    description.textContent = data[i].description;

    
    let joyuButton = document.createElement('button');
    joyuButton.textContent = 'Жою';
    joyuButton.className = 'delete-btn';

    
    joyuButton.addEventListener('click', function () {
        container.removeChild(card);
    });

    
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(joyuButton);


    container.appendChild(card);
};