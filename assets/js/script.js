$(function(){

  $("#pierre").draggable({
   
  });
  $("#feuille").draggable({
  });
  $("#ciseaux").draggable({

  });
        $("#drop1").droppable({

          accept : '#pierre',
          
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
        $("#playAgain").click(function(){
          

        });
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