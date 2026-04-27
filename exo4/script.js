let bnt = document.querySelector('#bnt');

bnt.addEventListener('click',() => {
    let nom = document.querySelector('#nom').value;
    let liste = document.querySelector('#liste');
    if(nom){
        let li = document.createElement('li');
        li.textContent = nom;
        liste.appendChild(li);
        nom = '';  
    }
})