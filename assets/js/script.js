$(function(){.
  var widgetValues = ['pierre', 'feuille', 'ciseaux'];
  var valueComputer = Math.floor(Math.random() * widgetValues.length);
  console.log(valueComputer);

  $("#0").draggable({
   
  });
  $("#1").draggable({
  });
  $("#2").draggable({

  });
  
  $("#drop1").droppable({

          //accept : '#pierre', '#feuille', '#ciseaux';
          
            drop: function(event, ui) {
              
                $(this).css('background', 'rgb(0,200,0)');
            },
            over: function(event, ui) {
                $(this).css('background', 'orange');
            },
            out: function(event, ui) {
                $(this).css('background', 'cyan');
            }
  });
  
  //$("#playAgain").click(function(){
          

  });

  $('#drop1').droppable(function() {
    var valueGamer = parseFloat($(this).val());
    var valueComputer = [Math.floor(Math.random() * widgetValues.length)];
    var message = "";
  
  if (valueGamer == valueComputer) {
      message = "Égalité !";
  }
  else if (
      (valueGamer == "pierre" && valueComputer == "ciseau")
      || (valueGamer == "feuille" && valueComputer == "pierre")
      || (valueGamer == "ciseau" && valueComputer == "feuille")
  ) {
      message = "Gagné !";
      //your_win++;
  }
  else {
      message = "Perdu !";
      //opponent_win++;
  }

   //if l'ordinateur a choisi la valeur pierre alors j'affiche "append" l'image pierre (au lieu d'afficher une alerte j'affiche l'image)
});


   



/*
    $("#pierre").draggable();
    $("#feuille").draggable();
    $("#ciseaux").draggable();
    $( "#drop1" ).droppable({
        drop: function( event, ui ) {
        $( this )
              .addClass( "widget" );
              .find( "img" );
                .html( "Dropped!" );
                
});
    }); */