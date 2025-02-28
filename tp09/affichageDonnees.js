function getData(){
    let data;
    fetch("https://restcountries.com/v2/all")
    .then(res => res.text())
    .then(text => {
        data = JSON.parse(text);
    })
    .then(() =>{
        //document.querySelector("#data").innerHTML = data;
        let keys = Object.keys(data[1]);
        let num = 0
        for( let key of keys){
            let formatHead = `<th>${key}</th>`;
            document.querySelector("#thead").innerHTML += formatHead;
        }

        for(let ele of data){
            let id = "td" + num;
            document.querySelector("tbody").innerHTML += `<tr id="${id}"></tr>`;
            for(let key of keys){
                let formatBody = "";
                if( ele.hasOwnProperty(key) == true){
                    if(typeof(ele[`${key}`]) === 'object'){
                        let text = "";
                        for(let [cle, value] of Object.entries(ele[`${key}`])){
                                text += `<p>${value}</p>`;
                        }
                        formatBody = `<td>${text}</td>`;
                    }else if(Array.isArray(ele[`${key}`])){
                            let text = "";
                            for(let txt of ele[`${key}`]){
                                console.log(typeof (txt));
                                if(typeof(txt) === 'object'){
                                    for(let [cle, value] of txt){
                                        console.log(value);
                                        text += `<p>${value}</p>`;
                                    }
                                }else{
                                    text += `<p>${txt}</p></br>`
                                }
                            }
                            formatBody = `<td>${text}</td>`
                    }else{
                        formatBody = `<td>${ele[`${key}`]}</td>`;
                    }
                }else{
                    formatBody = `<td></td>`
                }
                    document.querySelector(`#${id}`).innerHTML += formatBody;
                    num ++;
                }
            }
        });



        /*for( let ele of data){
            let body = `<tr>
                            <td>${ele.name}</td>
                            <td>${ele.capital}</td>
                        </tr>`;
            document.querySelector("#tbody").innerHTML += body;
        }*/
}