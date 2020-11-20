// Exo 1
console.log("Hey ! Exo1");

function randomNumber(xmax){
    return Math.floor(Math.random()*xmax) + 1;
}

function Tableau(props) {
    this.conteneurHTML = props.conteneurHTML;
    this.nbColonnes = props.nbColonnes;
    this.nbLignes = props.nbLignes;
    this.styleCellule = props.styleCellule;
    this.styleTable = props.styleTable;
}