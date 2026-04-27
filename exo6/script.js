//stockage 
let users = JSON.parse(localStorage.getItem('users')) || [];
let taches = JSON.parse(localStorage.getItem('tasks')) || [];
//recuperer les listes
const listeUser = document.querySelector('#listUser');
const listeTache = document.querySelector('#listTache');


//fonction afficher les utilisateurs
function afficherUser(){
    listeUser.innerHTML = ''
    users.forEach((user, index) => {
        let li = document.createElement('li');
        li.textContent = user.name + (user.archiver ? " (archiver)" : "");

        //bouton modifier
        let bntModifier = document.createElement('button');
        bntModifier.textContent = 'Modifier';
        bntModifier.addEventListener('click', ()=>{
            let nouveauNom = prompt('Nouveau nom:', user.name);
            if(nouveauNom){
                users[index].name = nouveauNom;
                saveUsers();
                afficherUser();
            }
        });

        //bouton archiver
        let btnArchive = document.createElement('button');
        btnArchive.textContent = 'Archiver';
        btnArchive.onclick = () => {
            users[index].archiver = true;
            saveUsers();
            afficherUser();
        }
        li.appendChild(bntModifier);
        if(!user.archiver) li.appendChild(btnArchive);
        listeUser.appendChild(li);
    });
}

//Enregistrer dans le storage
function saveUsers(){
    localStorage.setItem('users', JSON.stringify(users));
}

//bouton ajouter utilisateur
document.querySelector('#btnUser').addEventListener('click', ()=>{
    let user = document.querySelector('#username').value;
    if(user){
        users.push({name:user, archiver:false});
        saveUsers();
        afficherUser();
        document.querySelector('#username').value = '';
    }
})


//afficher tache
function afficherTache(){
    listeTache.innerHTML = '';
    taches.forEach((tache, index)=>{
        let li = document.createElement('li');
        li.textContent = tache.name + (tache.affecter ? " ("+tache.affecter+")" : "") + (tache.etat? "Terminer": '');

        //boutton affecter
        let bntAffecter = document.createElement('button');
        bntAffecter.textContent = 'Affecter';
        bntAffecter.addEventListener('click', ()=>{
            let user = prompt('Username: ');
            taches[index].affecter = user;
            saveTache();
            afficherTache();
        })
        
        //bouton terminer
        let btnTerminer = document.createElement('button');
        btnTerminer.textContent = 'Terminer';
        btnTerminer.addEventListener('click', ()=>{
            taches[index].etat = true;
            saveTache();
            afficherTache();
        })

        //bouton supprimer
        let bntSupprimer = document.createElement('button');
        bntSupprimer.textContent = 'Supprimer';
        bntSupprimer.addEventListener('click', ()=>{
            valide = confirm('Voulez-vous supprimer ce tache !');
            if(valide) taches.pop(index);
            saveTache();
            afficherTache();
        })
        if(!tache.etat) li.appendChild(btnTerminer);
        if(!tache.affecter) li.appendChild(bntAffecter);
        li.appendChild(bntSupprimer);
        listeTache.appendChild(li);
    })
}

//Enregistrer la tache dans le storage du navigateur
function saveTache(){
    localStorage.setItem('tasks', JSON.stringify(taches));
}

//ajouter tache
document.querySelector('#btnTache').addEventListener('click', ()=>{
    let tache = document.querySelector('#newTache').value;
    if(tache){
        taches.push({name: tache, affecter: '', etat: false});
        saveTache();
        afficherTache();
        document.querySelector('#newTache').value = '';
    }
})

//demarrage
afficherUser();
afficherTache();





