
const form = document.querySelector("#formulaire");

form.addEventListener('submit',(e) => {
    e.preventDefault()
    let nom = document.querySelector("#nom").value;
    let age = document.querySelector("#age").value;
    let sexe = document.querySelector("input[name=sexe]").value;
    let pays = document.querySelector("#pays").value;
    let commentaire = document.querySelector('#commentaire').value;
    let loisir = document.querySelectorAll("input[name=loisir]:checked");

    
    
    let resultat = document.querySelector('#resultat');

    let h1 = document.createElement('h1');
    h1.textContent = 'Resultat du formulaire';
    resultat.appendChild(h1);

    let p = document.createElement('p');
    p.textContent = nom+ ' ' + age + ' ' +sexe +' ' + pays + ' ' +commentaire;
    resultat.appendChild(p);

    for(let i=0;i<loisir.length; i++){
        let li = document.createElement('li');
        li.textContent = loisir[i].value;
        resultat.appendChild(li);
    }
})

