jQuery(document).ready(function(){

    /**
     * requests summarization via ajax
     */
    $("#btnAjax").click(function(){

        $.ajax({
                type:"POST",
                url:"/ajax_resumo",
                data:$( "#form_resumo" ).serialize(),

                success: function(response){
                    $( "#txt_resumo" ).val( response );
                    console.log("Ajax call to method --ajax_resumo-- answered");
                    // console.log($( "#form_resumo" ).serialize());
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
