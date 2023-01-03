const gameAction = document.querySelector(".game-action div");
const pierre = document.querySelector(".btn-pierre");
const feuille = document.querySelector(".btn-feuille");
const ciseaux = document.querySelector(".btn-ciseau")
var loseText = "Vous avez perdu";
var winText = "Vous avez gagné";
var equalText ="Vous avez le même jeux " ;
var scoreVictoir = 0;
var scoreDefaite = 0;
var scoreEgalite = 0;
var valueAi = 0;

var myImgPierre = document.querySelector(".myGame-pierreImg");
var myImgfeuille = document.querySelector(".myGame-feuilleImg");
var myImgCiseaux = document.querySelector(".myGame-ciseauxImg");
var aiImgPierre = document.querySelector(".aiGame-pierreImg");
var aiImgfeuille = document.querySelector(".aiGame-feuilleImg");
var aiImgCiseaux = document.querySelector(".aiGame-ciseauxImg");

var defaite = document.querySelector(".defaite");
var victoire = document.querySelector(".victoire");
var egalite = document.querySelector(".egalite");
var result = document.querySelector(".result");



// verification
pierre.addEventListener('click', () => {
    var compter = 1;
    var jeux = jeuxAi();
    result.innerHTML = turnGame(compter,jeux);
    imgVisible(compter, jeux);
    defaite.innerHTML = scoreDefaite;
    victoire.innerHTML = scoreVictoir;
    egalite.innerHTML = scoreEgalite;
});
feuille.addEventListener('click', () => {
    var compter = 2;
    var jeux = jeuxAi();
    result.innerHTML = turnGame(compter,jeux);
    imgVisible(compter, jeux);
    defaite.innerHTML = scoreDefaite;
    victoire.innerHTML = scoreVictoir;
    egalite.innerHTML = scoreEgalite;
});
ciseaux.addEventListener('click', () => {
    var compter = 3;
    var jeux = jeuxAi();
    result.innerHTML = turnGame(compter,jeux);
    imgVisible(compter, jeux);
    defaite.innerHTML = scoreDefaite;
    victoire.innerHTML = scoreVictoir;
    egalite.innerHTML = scoreEgalite;
});

var imgVisible = function(compter , aiCompter){
    if (compter == 1){
        myImgPierre.style.display ="block";
        myImgfeuille.style.display = "none";
        myImgCiseaux.style.display = "none";
    }
    else if(compter == 2){
        myImgPierre.style.display ="none";
        myImgfeuille.style.display = "block";
        myImgCiseaux.style.display = "none";
    }
    else if(compter == 3){
        myImgPierre.style.display ="none";
        myImgfeuille.style.display = "none";
        myImgCiseaux.style.display = "block";
    }

    if (aiCompter == 1){
        aiImgPierre.style.display ="block";
        aiImgfeuille.style.display = "none";
        myImgCiseaux.style.display = "none";
    }
    else if(aiCompter == 2){
        aiImgPierre.style.display ="none";
        aiImgfeuille.style.display = "block";
        aiImgCiseaux.style.display = "none";
    }
    else if(aiCompter == 3){
        aiImgPierre.style.display ="none";
        aiImgfeuille.style.display = "none";
        aiImgCiseaux.style.display = "block";
    }
}

// Jeux ai
var jeuxAi = function(){
    
    var aiJeux = Math.round(Math.random(1 ,3) * 3) +1;
    if(aiJeux >3){
        while(aiJeux >=3 ){
            aiJeux = Math.round(Math.random(1 ,3) * 3) +1;
        }
    }
    if(aiJeux == valueAi){
        aiJeux = Math.round(Math.random(1 ,3) * 3) +1;
        if(aiJeux >3){
            while(aiJeux >=3 ){
                aiJeux = Math.round(Math.random(1 ,3) * 3) +1;
            }
        }
    }
    valueAi = aiJeux;
    return aiJeux;
}



// fonctionement du jeux

var turnGame = function(compter, aiJeux){
    if(compter == aiJeux){
        var result = equalText;
        scoreEgalite++;
    }
    else if(compter == 1 && aiJeux == 2){
        var result = loseText;
        scoreDefaite++;
    }
    else if (compter == 1 && aiJeux == 3){
        var result = winText;
        scoreVictoir++;
    }
    else if(compter == 2 && aiJeux == 1){
        var result = winText;
        scoreVictoir++;
    }
    else if(compter == 2 && aiJeux == 3){
        var result = loseText;
        scoreDefaite++;
    }
    else if (compter == 3 && aiJeux == 1){
        var result = loseText;
        scoreDefaite++;
    }
    else if (compter == 3 && aiJeux == 2){
        var result = winText;
        scoreVictoir++;
    }
    return result
}