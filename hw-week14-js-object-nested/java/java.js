var artists = [ 
    {name: "Michael Jackson", ander: ["Smooth Criminal", "Billie Jean", "Beat It", "Earth Song"]}, 
    {name: "Billie Eilish", ander: ["Bad Guy", "Lovely", "Lunch", "Chihiro"]},
    {name: "Kairat Nurtas", ander: ["Auyrmaydy Zhurek", "Ol sen emes"]},
]
console.log(artists);

artists[2].ander[1] = "Baika";
console.log(artists[2].ander);


console.log(` Әнші аты-жөні:  ${artists[0].name} \nCоңғы әні:  ${artists[0].ander[artists[0].ander.length - 1]}`);


var kyskaAnder = artists[1].ander.filter(song => song.length <= 6);

console.log(`Billie Eilish-тің аты қысқа әндері:`, kyskaAnder);