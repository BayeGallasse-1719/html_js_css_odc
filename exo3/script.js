
const form = document.querySelector("#formulaire");

form.addEventListener('submit',(e) => {
    e.preventDefault()
    let nom = document.querySelector("#nom").value;
    let age = document.querySelector("#age").value;
    let sexe = document.querySelector("input[name=sexe]").value;
    let pays = document.querySelector("#pays").value;
    let commentaire = document.querySelector('#commentaire').value;
    let loisir = document.querySelectorAll("input[name=loisir]:checked");

    console.log(nom);
    console.log(age);
    console.log(sexe);
    console.log(pays);
    console.log(commentaire);
    for(let i=0;i<loisir.length; i++){
        console.log(loisir[i].value);
    }
    
})

