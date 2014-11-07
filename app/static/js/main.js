jQuery(document).ready(function(){

    /**
     * requests summarization via ajax
     */
    $("#btnAjax").click(function(){
        var form = $( "form_resumo" );
        $.ajax({
                type:"POST",
                url:"/ajax_resumo",
                data:form.serialize(),
                success: function(response){
                    $( "#txt_resumo" ).val( response );
                    console.log(response);
                },

                fail: function(response){
                    console.log(response);
                }
            });
        });

        // alert($( "texto" ).val());
        // $.post( "/ajax_resumo", $( "#texto" ).val() {
        //   $( "#txt_resumo" ).value( data );
        // });
});
