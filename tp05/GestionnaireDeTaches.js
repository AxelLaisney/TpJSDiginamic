const Tache = {
    description : "",
    terminee :false
}



function creerGestionnaire(){
    let tache = {
        tasks: [],
        ajouterTache(desc){
            let t = Object.create(Tache);
            t.description = desc;
            this.tasks.push(t);
        },
        terminerTache(index){
            this.tasks[index].terminee = true;
        },
        afficheTaches(){
            this.tasks.forEach(task => {
                console.log(task.description);
                console.log(task.terminee);
            });
        }
    }

    return tache;
}

let a = creerGestionnaire();
a.ajouterTache("un tache");
a.ajouterTache("une autre tache");
a.terminerTache(1);
a.afficheTaches();