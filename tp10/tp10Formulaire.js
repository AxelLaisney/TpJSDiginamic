function Soumettre(){
    let object = {};
    let value = document.getElementById("idCreateur").value;
    object["idCreateur"] = value;

    value = document.getElementById("nom").value;
    object["nom"] = value;

    value = document.getElementById("prenom").value;
    object["prenom"] = value;

    value = document.getElementById("genre").value;
    object["genre"] = value;

    value = document.getElementById("dateNaissance").value;
    object["dateNaissance"] = value;

    value = document.getElementById("lieuNaissance").value;
    object["lieuNaissance"] = value;

    value = document.getElementById("departementNaissance").value;
    object["departementNaissance"] = value;

    value = document.getElementById("numeroRue").value;
    object["numeroRue"] = value;

    value = document.getElementById("libelleRue").value;
    object["libelleRue"] = value;

    value = document.getElementById("codePostal").value;
    object["codePostal"] = value;

    value = document.getElementById("ville").value;
    object["ville"] = value;

    let json = JSON.stringify(object);
    console.log(json);
    const requestOPtions = {
        method: 'POST',
        header: { 'Content-Type': 'application/json'},
        body: json
    }
    fetch("https://digicode.cleverapps.io/utilisateurs/", requestOPtions);
}

function GetData(){
    let data;
    fetch("https://digicode.cleverapps.io/utilisateurs/ALaisney")
    .then(res => res.json())
    .then(json => {
        data = json;
    }).then(() => {
        console.log(data);
    })
}


function CreateTable(data){
    for(let x of data){

    }
}

