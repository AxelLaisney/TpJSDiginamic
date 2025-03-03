function Table(){
    let data;
    fetch("https://digicode.cleverapps.io/json/pays/pollution")
    .then(res => res.json())
    .then(json => {
        data = json;
    }).then(() => {
        for(let x of data.pays){
            let format = `<tr>
                            <td><img src="https://flagcdn.com/24x18/${x.code}.png"></td>
                            <td>${x.nom}</td>
                            <td>${x.valeur}</td>
                            <td>${x.pourcentage}</td>
                        </tr>`
            document.querySelector("#tbody").innerHTML += format;
        }
    });
}

function SubmitForm(){
    let max = document.querySelector("#max").value;
    let min = document.querySelector('#min').value;
    console.log(min, max);

    if(min > max && max && min){
        alert("Enter coherent numbers please!");
    }else if( min < 0 || max < 0){
        alert("Enter positive value pelase!");
    }else{
        if(min == "" || min == undefined || min == null || isNaN(min)){
            min = 0;
        }
    
        if(max == "" || max == undefined || max == null || isNaN(max)){
            max = Number.MAX_VALUE;
        }
    
        let parent = document.getElementById("tbody");
        while (parent.hasChildNodes()){
            parent.removeChild(parent.firstChild);
        }
    
        let data;
        fetch("https://digicode.cleverapps.io/json/pays/pollution")
        .then(res => res.json())
        .then(json => {
            data = json;
        }).then(() => {
            for(let x of data.pays){
                if(x.valeur >= min && x.valeur <=max){
                    let format = `<tr>
                                    <td><img src="https://flagcdn.com/24x18/${x.code}.png"></td>
                                    <td>${x.nom}</td>
                                    <td>${x.valeur}</td>
                                    <td>${x.pourcentage}</td>
                                </tr>`
                document.querySelector("#tbody").innerHTML += format;
                }
    
            }
        })
    }


}