
        document.addEventListener("DOMContentLoaded", function() {
            const formulario = document.querySelector(".formulario");
            const nombreInput = formulario.querySelector('input[name="Nombre"]');
            const emailInput = formulario.querySelector('input[name="e-mail"]');
            const asuntoInput = formulario.querySelector('input[name="Asunto"]');
            const mensajeTextarea = formulario.querySelector('textarea[name="mensaje"]');
            const mensajeButton = formulario.querySelector('#mensaje');

            formulario.addEventListener("submit", function(event) {
                event.preventDefault();

                if (!nombreInput.checkValidity()) {
                    alert("Por favor, ingrese un nombre válido (entre 4 y 16 caracteres alfabéticos).");
                    return;
                }

                if (!emailInput.checkValidity()) {
                    alert("Por favor, ingrese un correo electrónico válido.");
                    return;
                }

                if (!asuntoInput.checkValidity()) {
                    alert("Por favor, ingrese un asunto válido (entre 10 y 50 caracteres alfabéticos).");
                    return;
                }

                if (!mensajeTextarea.checkValidity()) {
                    alert("Por favor, ingrese un mensaje válido (entre 10 y 150 caracteres alfabéticos).");
                    return;
                }


                alert("Formulario enviado con éxito.");
                formulario.reset();
            });
        });
