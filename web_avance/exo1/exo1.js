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
            var cell = document.createElement("td");

            var cellContent = document.createTextNode("CELL"); // Change with cell content

            // Style cellule 
            cell.style.border = this.styleCellule.border;
            cell.style.width = this.styleCellule.width;
            cell.style.height = this.styleCellule.height;

            // Ajout
            cell.appendChild(cellContent);
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    table.style.border = this.styleTable.border;
    this.conteneurHTML.appendChild(table);
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