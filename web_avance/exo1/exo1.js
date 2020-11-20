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

Tableau.prototype.construireTableau = function () {
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    for(var i = 0; i < this.nbLignes; i++){
        var row = document.createElement("tr");
        for(var j = 0; j < this.nbColonnes; j++) {
            new Cellule({baliseMere : row, style : this.styleCellule})
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    table.style.border = this.styleTable.border;
    this.conteneurHTML.appendChild(table);
}

function Cellule(parameters) {
    if (!parameters) return;
    this.style = parameters.style;
    this.baliseMere = parameters.baliseMere;
    
    var texte = "TEST";
    this.__defineGetter__("texte", function () {return texte;});
    this.__defineSetter__("texte", function(newText) {texte = newText;});
    
    this.construireLaCellule();
};
    
Cellule.prototype.construireLaCellule = function () {
    //console.log("NEW CELL");
    var cell = document.createElement("td");

    var cellContent = document.createTextNode(this.texte); // Change with cell content

    // Style cellule 
    cell.style.border = this.style.border;
    cell.style.width = this.style.width;
    cell.style.height = this.style.height;

    // Ajout
    cell.appendChild(cellContent);
    this.baliseMere.appendChild(cell);
};
    
Cellule.prototype.handleEvent = function (evenement) {
    
};

function CelluleAvecEntier(props){
    CelluleAvecEntier.prototype = new Cellule(props);
    this.compteur = 0;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
var monTableau = new Tableau(
    {
    conteneurHTML: document.body,
    nbColonnes: 20,
    nbLignes: 20,
    styleCellule : {
    width : "30px",
    height : "30px",
    border : "solid 1px #000000"
    },
    styleTable : {
    border : "solid 1px #000000"
    }
    }
    );

monTableau.construireTableau();