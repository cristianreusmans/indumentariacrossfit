/* Menu Responsive */

const iconohamb = document.querySelector('.icono-hamb');
const enlacesmenu = document.querySelector('.enlaces-menu-active');
const fabars = document.querySelectorAll('icono-hamb span');

iconohamb.addEventListener('click', () => {
    enlacesmenu.classList.toggle('enlances.active');
    fabars.forEach(child => {child.classList.toggle('fa-bars.animado')});
});




/*Formulario de contacto */
$(document).ready(function() {
    $('#btnSend').click(function(){
        var name, email, mensaje, phone;
        var validacion ='';

        // validar nombre
        if($('#names').val() == ''){
            validacion += '<p> Escriba un nombre </p>';
            $('#names').css("border-botton-color", "#f14b4b"); 
        } else{
            $('#names').css("border-botton-color", "#d1d1d1");
            nombre = $('#names').val();
        }
        // validar correo
        if($('#email').val() == ''){
            validacion += '<p> Ingrese un correo electronico </p>';
            $('#email').css("border-botton-color", "#f14b4b");
        } else{
            $('#email').css("border-botton-color", "#d1d1d1");
            email = $('#email').val();
        }
        // validar mensaje
        if($('#mensaje').val() == ''){
            validacion += '<p> Escriba un mensaje </p>';
            $('#mensaje').css("border-botton-color", "#f14b4b");
        } else{
            $('#mensaje').css("border-botton-color", "#d1d1d1");
            mensaje = $('#mensaje').val();
        }

        // Enviando Mensaje
        if (validacion == '' ==false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+
                                        '<span id="btnClose">Cerrar</span>'
                                    '</div>'+
                                '</div>';

            $('body').append(mensajeModal);
        }else {
            telefono = $("#phone").val();
            var envioDato = {
                mensaje: mensaje,
                email: email,
                nombre: nombre,
                telefono: phone,
            };

        }
        // Boton cerrar

        $('#btnClose').click(function(){
            $('.modal_wrap').remove(); 
        });


    });
});
