$(function(){. //ouverture de fonction principale
  var arrayChoices = ['pierre', 'feuille', 'ciseaux']; // Je crée un tableau avec les choix possible de l'ordinateur
  var gamerChoice = null; // Je définis une variable pour le choix du joueur et l'initialise à null. L'idée c'est qu'elle existe au chargement de ma page
  var message ="";

  $(".widget").draggable({  // Je rend déplaçable tous les éléments qui ont la classe choice
    revert : true, //Renvoie l'élément toujours à sa place
    snap:"#droppable";//Elles sont attirées par le bloc droppable
    snapMode: 'inner'; // Permet le magnétisme sur l'interieur du block
  });

  // J'ajoute un évènement mouseup à mes éléments
  // En fonction de l'image choisi j'attribue une valeur au choix du joueur
  $('#rockChoice').mouseup(function(){
    gamerChoice = 0;
    // Je vérifie dans ma console ce qui est stocker dans la variable gamerChoice
    console.log('Choix du joueur' + gamerChoice);
  });
  $('#paperChoice').mouseup(function(){
    gamerChoice = 1;
    console.log('Choix du joueur' + gamerChoice);
  });
  $('#scissorsChoice').mouseup(function(){
    gamerChoice = 2;
    console.log('Choix du joueur' + gamerChoice);
  });
  

    $( "#droppable" ).droppable({// Je rend ma div droppable
        accept: '.answer',// Elle n'accepte que les éléments qui ont la classe answer
        drop : function(event, ui){ //Je lui ajoute l'évènement jqueryUI drop. // Au moment de l'évènement droppable
          var computerChoice = Math.floor(Math.random() * arrayChoices.length); // L'ordinateur choisi aléatoirement un choix dans le tableau définis précédemment
          console.log('Choix de l\'ordinateur' + computerChoice);

        }
    });


   //MAINTENANT JE DOIS COMPARER LES CHOIX DE L'ORDINATEUR ET CELUI DU JOUEUR POUR AFFICHER LES BONS MESSAGES
  
  if (gamerChoice == computerChoice) {
      message = "Égalité !";
  }
  else if (
      (gamerChoice == "pierre" && computerChoice == "ciseaux")
      || (gamerChoice == "feuille" && computerChoice == "pierre")
      || (gamerChoice == "ciseaux" && computerChoice == "feuille")
  ) {
      message = "Gagné !";
      //your_win++;
  }
  else {
      message = "Perdu !";
      //opponent_win++;
  }

  $('#drop2').droppable(function() {
        if (computerChoice == "#0") {
        $("<img>#0</img>").appendTo("#0")}
    
        else if (computerChoice == "#1") {
        $("img").appendTo("#1")}
    
        else if (computerChoice == "#2") {
        $("img").appendTo("#2")}
  
}); //fermeture de la fonction principale