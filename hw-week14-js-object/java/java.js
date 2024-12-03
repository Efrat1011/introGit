let soccer = {
    name: "Ronaldo",
    lastname: "Cristiano",
    goal: 913,
    age: 39,
    club: ["Sporting", "Man United", "Real Madrid", "Juventus", "Al-Nasr"],



    fullName: function(){
        return ` ${this.lastname} ${this.name}`
    },
    
    songyclub: function(){
         return this.club[this.club.length - 1];
    }
    
}; 

alert(`Aty: ${soccer.name} \nTegy: ${soccer.lastname} \nSalgan goli: ${soccer.goal} \nJasi: ${soccer.age} Oinagan clubtari: ${soccer.club}`);


soccer.goal +=2


console.log(`Ойыншы аты-жөні: ${soccer.fullName()}`);

console.log(` Ойнаған соңғы клубы: ${soccer.songyclub()}`);

console.log(`Ойыншы карьерасында салған гол саны: ${soccer.goal}`);


