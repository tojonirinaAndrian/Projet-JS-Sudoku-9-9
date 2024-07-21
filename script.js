// Les lignes :
const tab_l = ["ligne1", "ligne2", "ligne3", "ligne4", "ligne5", "ligne6", "ligne7", "ligne8", "ligne9"]

// Les colomnes : 
const tab_c = ["colonne1", "colonne2", "colonne3", "colonne4", "colonne5", "colonne6", "colonne7", "colonne8", "colonne9"]

// Les grilles :
const tab_cb = ["case_block1", "case_block2", "case_block3", "case_block4", "case_block5", "case_block6", "case_block7", "case_block8", "case_block9"]

// toutes les cases :
const toutes_les_cases = document.getElementsByClassName ("case")

let tab_val_initial_l = []
let tab_val_initial_c = []
let tab_val_initial_b = []

let ligne, colonne, box
    
let nb = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function nombre (id) {
    let element = document.getElementById (id)
    let verification
    
    for (let i = 0; i < nb.length; i++) {
    
        if (element.value === String (nb[i])) {
            verification = String (nb[i])
            break
        } else {
            verification = ""
        }
    }
    
    element.value = verification
    verification_a_l_input (element)
}
let tous_les_etats
let index_etat_actuel

function enregistrer_etat () {
    let etat_actuel = []

    for (let i = 0; i < toutes_les_cases.length; i++) {
        etat_actuel.push(toutes_les_cases[i].value)
    }
    // console.log ("avant enregistrement " + index_etat_actuel)

    if (etat_actuel != tous_les_etats [tous_les_etats.length - 1]) {
        tous_les_etats.push (etat_actuel)
    }

    index_etat_actuel = tous_les_etats.length - 1
    maj_etat ()
}

function maj_etat () {
    for (let i = tous_les_etats.length; i !== (index_etat_actuel +1); i--) {
        tous_les_etats.pop()
    }
}

function precedent () {
    if (index_etat_actuel >= 1) {
        index_etat_actuel--
        for (let i = 0; i < toutes_les_cases.length; i++) {
            toutes_les_cases[i].value = tous_les_etats [index_etat_actuel][i]
        }
        // console.log ("preced" + index_etat_actuel)
    }
}

function suivant () {
    if (tous_les_etats [index_etat_actuel + 1] !== undefined) {

        if (tous_les_etats.length >= index_etat_actuel) {
            index_etat_actuel++

            for (let i = 0; i < toutes_les_cases.length; i++) {
                toutes_les_cases[i].value = tous_les_etats [index_etat_actuel][i]
            }
            // console.log ("apres" + index_etat_actuel)
        }   
    }
}

function initialisation_avant_input (element) {
    tab_val_initial_l = []
    tab_val_initial_c = []
    tab_val_initial_b = []
    
    for (let i = 0; i < 9; i++) if (element.className.match(tab_l[i])) ligne = tab_l[i]
    for (let i = 0; i < 9; i++) if (element.className.match(tab_c[i])) colonne = tab_c[i]
    for (let i = 0; i < 9; i++) if (element.className.match(tab_cb[i])) box = tab_cb[i]

    
    for (let i = 0; i < document.getElementsByClassName(ligne).length; i++) if (document.getElementsByClassName(ligne)[i].value !== ""){
    
        if (tab_val_initial_l[ligne] === undefined) tab_val_initial_l[ligne] = [] 
        tab_val_initial_l[ligne].push (document.getElementsByClassName(ligne)[i].value)
    } 
    
    for (let i = 0; i < document.getElementsByClassName(colonne).length; i++) if (document.getElementsByClassName(colonne)[i].value !== "") {
    
        if (tab_val_initial_c[colonne] === undefined) tab_val_initial_c[colonne] = [] 
        tab_val_initial_c[colonne].push (document.getElementsByClassName(colonne)[i].value)
    }
    
    for (let i = 0; i < document.getElementsByClassName(box).length; i++) if (document.getElementsByClassName(box)[i].value !== "") {
    
        if (tab_val_initial_b[box] === undefined) tab_val_initial_b[box] = [] 
        tab_val_initial_b[box].push (document.getElementsByClassName(box)[i].value)
    }

}

let minutes
let secondes

let changer_couleur
let changer_couleur_interval 
function verification_a_l_input (valeur) {
    
    if (valeur.value === "") {
        initialisation_avant_input (valeur)
    }

    let couleur = ""
    
    if (tab_val_initial_l[ligne] === undefined) tab_val_initial_l[ligne] = [] 
    if (tab_val_initial_l[ligne].includes(valeur.value)) {
        couleur = "erreur_l"
    
        for (let j = 0; j < 9; j++) {
            document.getElementsByClassName(ligne)[j].style.border = "2px solid red"
            setTimeout (function () {
                valeur.value = ""
                for (let j = 0; j < 9; j++) {
                    document.getElementsByClassName(ligne)[j].style.border = ""                
                }
            }, 1200)
        }                
    }

    else {
    
        for (let j = 0; j < 9; j++) {
            document.getElementsByClassName(ligne)[j].style.border = ""                
        }
    }

    if (tab_val_initial_c[colonne] === undefined) tab_val_initial_c[colonne] = []
    if (tab_val_initial_c [colonne].includes(valeur.value)) {
        couleur = "erreur_c"
    
        for (let j = 0; j < 9; j++) {
            document.getElementsByClassName(colonne)[j].style.border = "2px solid red"
            setTimeout (function () {
                valeur.value = ""
                for (let j = 0; j < 9; j++) {
                    document.getElementsByClassName(colonne)[j].style.border = ""                
                }
            }, 1200)
        }                
    }

    else {
    
        for (let j = 0; j < 9; j++) {
            document.getElementsByClassName(colonne)[j].style.border = ""                
        }
    }
    
    if (tab_val_initial_b[box] === undefined) tab_val_initial_b[box] = [] 
    if (tab_val_initial_b [box].includes(valeur.value)) {
        couleur = "erreur_b"
    
        for (let j = 0; j < 9; j++) {
            document.getElementsByClassName(box)[j].style.border = "2px solid red"
            setTimeout (function () {
                valeur.value = ""
                document.getElementsByClassName(box)[j].style.border = ""
            }, 1200)
        }                
    }

    else if (!tab_val_initial_b [box].includes(valeur.value) && (couleur !== "erreur_l" || couleur !== "erreur_c")) {
    
        for (let j = 0; j < 9; j++) {
            document.getElementsByClassName(box)[j].style.border = ""                
        }
    
        if (tab_val_initial_l[ligne].includes(valeur.value)) {
            couleur = "erreur_l"
    
            for (let j = 0; j < 9; j++) {
                document.getElementsByClassName(ligne)[j].style.border = "2px solid red"
                setTimeout (function () {
                    valeur.value = ""
                    document.getElementsByClassName(ligne)[j].style.border = ""
                }, 1200)
            }                
        }
    
        if (tab_val_initial_c [colonne].includes(valeur.value)) {
            couleur = "erreur_c"
    
            for (let j = 0; j < 9; j++) {
                document.getElementsByClassName(colonne)[j].style.border = "2px solid red"
                setTimeout (function () {
                    valeur.value = ""
                    document.getElementsByClassName(colonne)[j].style.border = ""
                }, 1200)
            }                
        }
    }
    if (couleur === "" && valeur.value !== "") {
        enregistrer_etat ()
        // console.log(index_etat_actuel)
    }

    setTimeout (function () {
        let  oui = true
    
        for (let i = 0; i < toutes_les_cases.length; i++) {
    
            if (toutes_les_cases[i].value === "") {oui = false; break}
        }

        if (oui) {
    
            for (let i = 0; i < solution.length; i++) {
                toutes_les_cases [i].readOnly = true
            }

            document.getElementById("bouton_recommencer").disabled = true
            document.getElementById("bouton_recommencer").disabled = true
            document.getElementById("bouton_recommencer").style.backgroundColor = "rgb(209, 209, 224)"
            document.getElementById("bouton_resoudre").style.backgroundColor = "rgb(209, 209, 224)"
            clearInterval(mon_temps)
            document.getElementById ("alert_content").innerHTML = `
            Vous avez reussi en ` + document.getElementById ("temps_de_la_partie").innerHTML + `.<br> 
            Cliquer Sur NOUVELLE pour une nouvelle partie.`

            montrer_alert();

            changer_couleur = false
            changer_couleur_interval = setInterval (function () {
    
                if (changer_couleur) {
                    document.getElementById ("bouton_nouveau").style.backgroundColor = "rgb(213, 241, 241)"
                    document.getElementById ("bouton_nouveau").style.transition = "0.5s"
                    changer_couleur = false
                } else if (!changer_couleur) {
                    document.getElementById ("bouton_nouveau").style.backgroundColor = "rgb(90, 126, 128)"
                    document.getElementById ("bouton_nouveau").style.transition = "0.5s"
                    changer_couleur = true
    
                }
            }, 300)
        }        
    }, 2000)

}

function verifier_si_impossible (nombre, tab_l, tab_c, tab_b) {
    nombre = Math.floor (Math.random() * 9) + 1
    
    for (let i = 0; i < 100; i++) {
    
        if (tab_l.includes(nombre) || tab_c.includes(nombre) || tab_b.includes(nombre)) {
            nombre = Math.floor (Math.random() * 9) + 1 
        } else return nombre
    
    }
}

let condition = 0

function remplir_au_hazard () {
    
    for (let i = 0; i < toutes_les_cases.length; i++) {
        toutes_les_cases[i].value = ""
    }

    let numero_ligne
    let numero_colonne
    let numero_box

    let impo_l = []
    let impo_c = []
    let impo_b = []
    
    // initialisation des impossibles :
    for (let j = 0; j < 9; j++) {
        impo_l[j] = []
        impo_c[j] = []
        impo_b[j] = []
    }
    
    let valeur

    for (let i = 0; i < toutes_les_cases.length; i++) {
        
        // numero de ligne :
        if (i < 9) numero_ligne = 0
        else if (i >= 9 && i < 9 * 2) numero_ligne = 1
        else if (i >= 9 * 2 && i < 9 * 3) numero_ligne = 2
        else if (i >= 9 * 3 && i < 9 * 4) numero_ligne = 3
        else if (i >= 9 * 4 && i < 9 * 5) numero_ligne = 4
        else if (i >= 9 * 5 && i < 9 * 6) numero_ligne = 5
        else if (i >= 9 * 6 && i < 9 * 7) numero_ligne = 6
        else if (i >= 9 * 7 && i < 9 * 8) numero_ligne = 7
        else if (i >= 9 * 8 && i < 9 * 9) numero_ligne = 8

        // numero de colonne :
        for (let j = 0; j < 9; j++) {
            if (i === j + 9*0 || i === j + 9*1 || i === j + 9*2 || i === j + 9*3 || i === j + 9*4 || i === j + 9*5 || i === j + 9*6 || i === j + 9*7 || i === j + 9*8 ) {
                numero_colonne = j
                break
            }
        }


        // numero de grille :
        if ((i < 3) || (i >= 9 && i < 12) || (i >= 18 && i < 21)) numero_box = 0
        else if ((i >= 3 && i < 6) || (i >= 12 && i < 15) || (i >= 21 && i < 24)) numero_box = 1
        else if ((i >= 6 && i < 9) || (i >= 15 && i < 18) || (i >= 24 && i < 27)) numero_box = 2
        
        else if ((i >= 27 && i < 30) || (i >= 36 && i < 39) || (i >= 45 && i < 48)) numero_box = 3
        else if ((i >= 30 && i < 33) || (i >= 39 && i < 42) || (i >= 48 && i < 51)) numero_box = 4
        else if ((i >= 33 && i < 36) || (i >= 42 && i < 45) || (i >= 51 && i < 54)) numero_box = 5

        else if ((i >= 54 && i < 57) || (i >= 63 && i < 66) || (i >= 72 && i < 75)) numero_box = 6
        else if ((i >= 57 && i < 60) || (i >= 66 && i < 69) || (i >= 75 && i < 78)) numero_box = 7
        else if ((i >= 60 && i < 63) || (i >= 69 && i < 72) || (i >= 78 && i < 81)) numero_box = 8

        // remplir la grille complete :

        valeur = verifier_si_impossible (valeur, impo_l[numero_ligne], impo_c[numero_colonne], impo_b[numero_box])
        if (valeur === undefined) valeur = "0"

        impo_l[numero_ligne].push (valeur)
        impo_c[numero_colonne].push (valeur)
        impo_b[numero_box].push (valeur)

        toutes_les_cases[i].value = valeur
    }

    condition ++

    if (condition < 100000) {

        for (let i = 0; i < toutes_les_cases.length; i++) {

            if (toutes_les_cases[i].value === "0") {
                remplir_au_hazard ()
            }
        }
    }

}

let solution = []

let recommencement = []

function laisser_certaines_cases_vides (){
    for (let i = 0; i < toutes_les_cases.length; i++) {
        let le_hazard = Math.floor(Math.random() * 10)

        if (le_hazard < 5) toutes_les_cases[i].value = ""

        else {
            toutes_les_cases[i].readOnly = true 
            toutes_les_cases[i].style.backgroundColor = "rgb(219, 234, 235)"
        }
    }
}

function enregistrer () {
    let solution = []

    for (let i = 0; i < toutes_les_cases.length; i++) {
        solution.push (toutes_les_cases[i].value)
    }
    return solution
}

function enregistrer_les_cases_initiale () {
    recommencement = enregistrer ()
}

function recommencer () {
    tous_les_etats = []
    index_etat_actuel = 0
    minutes = 0
    secondes = 0
    clearInterval (mon_temps)
    compter_le_temps(minutes, secondes)
    for (let i = 0; i < toutes_les_cases.length; i++) toutes_les_cases[i].value = recommencement [i]
    enregistrer_etat ()
}
// console.log(solution)
let mon_temps 

function resoudre_le_sudoku() {

    for (let i = 0; i < solution.length; i++) {
        if (toutes_les_cases [i].value !== solution [i]) toutes_les_cases [i].style.color = "red"
        toutes_les_cases[i].value = solution [i]
        toutes_les_cases [i].readOnly = true
    }
    document.getElementById("bouton_recommencer").disabled = true
    document.getElementById("bouton_recommencer").style.backgroundColor = "rgb(209, 209, 224)"
    document.getElementById("bouton_resoudre").style.backgroundColor = "rgb(209, 209, 224)"

    clearInterval(mon_temps)
}

function nouveau () {
    tous_les_etats = []
    index_etat_actuel = 0

    if (changer_couleur) {
        clearInterval (changer_couleur_interval)
    }

    minutes = 0
    secondes = 0

    for (let i = 0; i < toutes_les_cases.length; i++) {
        toutes_les_cases[i].style.backgroundColor = "#fff"
        toutes_les_cases[i].style.color = "#000"
        toutes_les_cases[i].readOnly = false
    }

    document.getElementById("bouton_recommencer").enabled = true
    document.getElementById("bouton_recommencer").style.backgroundColor = ""
    document.getElementById("bouton_resoudre").style.backgroundColor = ""

    remplir_au_hazard ()
    solution = enregistrer ()
    laisser_certaines_cases_vides ()
    enregistrer_les_cases_initiale ()
    compter_le_temps(minutes, secondes)
    // console.log("  " + index_etat_actuel)
    enregistrer_etat()
    // console.log("          " + index_etat_actuel)
}

nouveau ()

let minutes_inter, secondes_inter
function compter_le_temps (minutes_f, secondes_f) {
        
    mon_temps = setInterval(function () {
        secondes_f += 1
    
        if (minutes_f.toString().length === 1 && secondes_f.toString().length === 1) {
            document.getElementById("temps_de_la_partie").innerHTML = "0" + minutes_f + " : 0" + secondes_f
        } else if (minutes_f.toString().length === 1 && secondes_f.toString().length !== 1) {
            document.getElementById("temps_de_la_partie").innerHTML = "0" + minutes_f + " : " + secondes_f
        } else if (secondes_f.toString().length === 1  && minutes_f.toString().length !== 1) {
            document.getElementById("temps_de_la_partie").innerHTML = minutes_f + " : 0" + secondes_f
        }
    
        if (secondes_f === 59) {minutes_f ++; secondes_f = 0}
    
        if (minutes_f === 59) {
            document.getElementById("temps_de_la_partie").innerHTML = "Vous prenez une heure pour faire un SUDOKU aussi simple, c'est trop !"
            resoudre_le_sudoku ()
        }
        minutes_inter = minutes_f
        secondes_inter = secondes_f
    }, 1000)
}

function montrer_alert() {
    document.getElementById("custom_alert").style.display = "block"
    
    for (let i = 0; i < document.getElementsByClassName("bloc").length; i ++) {
        document.getElementsByClassName("bloc")[i].style.filter = "blur(2.5px)"
    }
}

function fermer_alert() {
    document.getElementById("custom_alert").style.display = "none"
    
    for (let i = 0; i < document.getElementsByClassName("bloc").length; i ++) {
        document.getElementsByClassName("bloc")[i].style.filter = "blur(0px)"
    }
}

let id_focus = ""
function on_focus(id) {
    document.getElementById(id).style.outline = "none"
    document.getElementById(id).style.background = "#ffbb99"
    id_focus = id
}

function on_blur(id) {
    document.getElementById(id).style.background = "white"
}

let next_input
function chiffre_function (element) {
    next_input = element.value
    
    if (id_focus.length > 0) {
        document.getElementById(id_focus).value = next_input
        verification_a_l_input(document.getElementById(id_focus))
    }
}

let chiffre
for (let i = 1; i < 10; i++) {
    chiffre = document.createElement("input")
    chiffre.type = "button"
    chiffre.value = i
    chiffre.id = "bouton_" + i
    chiffre.className = "boutons_chiffre"
    
    chiffre.addEventListener("click", function() {
      chiffre_function(this)
    })
    
    document.getElementById("boutons_chiffres").appendChild(chiffre)
}

let symbol = document.getElementById("pauser_la_partie")

let secondes_pause, minutes_pause
let tableau_a_la_pause = []

function pauser() {
    if (symbol.innerHTML === "▶️") {
        symbol.innerHTML = "⏸️"
        
        if (minutes_pause === undefined) minutes_pause = 0
        
        if (secondes_pause === undefined) secondes_pause = 0
        compter_le_temps (minutes_pause, secondes_pause)
        
        for (let i = 0; i < toutes_les_cases.length; i++) {
            toutes_les_cases[i].value = tableau_a_la_pause [i]
        }

    } else if (symbol.innerHTML === "⏸️") {  
        tableau_a_la_pause = []  
        symbol.innerHTML = "▶️"
        secondes_pause = secondes_inter
        minutes_pause = minutes_inter
        
        clearInterval(mon_temps)
        
        for (let i = 0; i < toutes_les_cases.length; i++) {
            tableau_a_la_pause.push(toutes_les_cases[i].value)
        }

        for (let i = 0; i < toutes_les_cases.length; i++) {
            toutes_les_cases[i].value = ""
        }

    }
}