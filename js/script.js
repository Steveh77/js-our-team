// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// # MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// # MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// # MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// # BONUS 1:
// Trasformare la stringa foto in una immagine effettiva (le trovate in allegato)
// # BONUS 2:
// Organizzare i singoli membri in card/schede e ispirarci alle grafiche in allegato

// variabili
const teamList = document.getElementById('team-list')
let stringaDaStampare = "";
// # MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const team = [
    {'Nome': "Wayne Barnett" , 'Ruolo': "Founder & CEO" , 'Foto': "wayne-barnett-founder-ceo.jpg"},
    {'Nome': "Angela Caroll" , 'Ruolo':	"Chief Editor"  , 'Foto': "angela-caroll-chief-editor.jpg"},
    {'Nome': "Walter Gordon" , 'Ruolo':	"Office Manager"  , 'Foto': "walter-gordon-office-manager.jpg"},
    {'Nome': "Angela Lopez" , 'Ruolo':	"Social Media Manager"  , 'Foto': "angela-lopez-social-media-manager.jpg"},
    {'Nome': "Scott Estrada" , 'Ruolo':	"Developer"  , 'Foto': "scott-estrada-developer.jpg"},
    {'Nome': "Barbara Ramos" , 'Ruolo':	"Graphic Designer"  , 'Foto': "barbara-ramos-graphic-designer.jpg"},
]
console.log(team)
// # MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto

for (let i = 0; i < team.length; i++) {
    const element = team[i];

    // # MILESTONE 2:
    // Stampare le stesse informazioni su DOM sottoforma di stringhe

    for(let key in element){
        console.log(element[key])
        teamList.innerHTML += '<li>' + key + " "+  " : " +  (element[key]) +  "<br>" + '</li>'
        
    }

    
}







