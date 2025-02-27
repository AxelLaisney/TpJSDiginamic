let json = [{
    Nom : "Google",
    Siège_social : "Googleplex, Mountain View, California, United States",
    Fondateurs : ["Larry Page, né le 26/03/1973 à East Lansing, Michigan", "Sergey Brin, né le 21/08/1973 à Moscou, Union Soviétique"],
    Chiffre_affaires : ["2008, 16.49", "2012, 37.97", "2016, 89.46", "018, 136.2"]
}]


json.forEach(ele => {
    ele.Fondateurs.forEach(fondateur =>{
        console.log("Fondateur : " + fondateur);
    })
    ele.Chiffre_affaires.forEach(chiffre => {
        console.log("Chiffre d'affaire en milliard : " + chiffre );
    })
});
