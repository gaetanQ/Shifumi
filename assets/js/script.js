$( function() {
    $("#pierre").draggable();
    $("#feuille").draggable();
    $("#ciseaux").draggable();
    $( "#drop1" ).droppable({
        drop: function( event, ui ) {
        $( this )
              .addClass( "widget" )
              .find( "img" )
                .html( "Dropped!" );
});