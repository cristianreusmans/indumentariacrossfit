$(document).ready(function() {
    $('#btnSend').click(function(){
        var name, email, mensaje, phone;
        var validacion ='';

        // validar nombre
        if($('#names').val() == ''){
            errores += '<p> Escriba un nombre </p>'
            $('#names').css("border-botton-color", "#f14b4b") 
        } else{
            $('#names').css("border-botton-color", "#d1d1d1")
        }
        // validar correo
        if($('#email').val() == ''){
            errores += '<p> Ingrese un correo electronico </p>'
            $('#email').css("border-botton-color", "#f14b4b")
        } else{
            $('#email').css("border-botton-color", "#d1d1d1")
        }
        // validar mensaje
        if($('#mensaje').val() == ''){
            errores += '<p> Escriba un mensaje </p>'
            $('#mensaje').css("border-botton-color", "#f14b4b")
        } else{
            $('#mensaje').css("border-botton-color", "#d1d1d1")
        }

        // Enviando Mensaje
        if (errores =='' ==false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'
                                    '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }
        // Boton cerrar

        $('#btnClose').click(function(){
            $('.modal_wrap').remove(); 
        });


    });
});