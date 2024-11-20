document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registrationForm');
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');

  // Eventos para validar los campos
  firstName.addEventListener('input', validarNombre);
  lastName.addEventListener('input', validarApellido);
  email.addEventListener('input', validarEmail);
  password.addEventListener('input', validarContrasenas);
  confirmPassword.addEventListener('input', validarContrasenas);

  // Evento para manejar el envío del formulario
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validarFormulario()) {
          alert('Formulario enviado con éxito. ¡Gracias por registrarte!');
          form.submit();
      }
  });

  // Función para validar nombres y apellidos
  function validarNombre() {
      const nameRegex = /^[A-Za-z\s]+$/;
      const mensajeError = firstName.nextElementSibling;
      if (!nameRegex.test(firstName.value.trim())) {
          mensajeError.textContent = "Nombre no es válido. Solo se permiten letras y espacios.";
          return false;
      } else {
          mensajeError.textContent = "";
          return true;
      }
  }

  function validarApellido() {
      const nameRegex = /^[A-Za-z\s]+$/;
      const mensajeError = lastName.nextElementSibling;
      if (!nameRegex.test(lastName.value.trim())) {
          mensajeError.textContent = "Apellido no es válido. Solo se permiten letras y espacios.";
          return false;
      } else {
          mensajeError.textContent = "";
          return true;
      }
  }

  // Función para validar el formato del correo electrónico
  function validarEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const mensajeError = email.nextElementSibling;
      if (!emailRegex.test(email.value.trim())) {
          mensajeError.textContent = "Correo electrónico no es válido.";
          return false;
      } else {
          mensajeError.textContent = "";
          return true;
      }
  }

  // Función para validar la contraseña y su confirmación
  function validarContrasenas() {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{4,10}$/;
      const mensajeErrorPassword = password.nextElementSibling;
      const mensajeErrorConfirmPassword = confirmPassword.nextElementSibling;

      let isValid = true;

      if (!passwordRegex.test(password.value.trim())) {
          mensajeErrorPassword.textContent = "La contraseña debe tener entre 4 y 10 caracteres, incluyendo letras mayúsculas, minúsculas, números y caracteres especiales.";
          isValid = false;
      } else {
          mensajeErrorPassword.textContent = "";
      }

      if (password.value.trim() !== confirmPassword.value.trim()) {
          mensajeErrorConfirmPassword.textContent = "Las contraseñas no coinciden.";
          isValid = false;
      } else {
          mensajeErrorConfirmPassword.textContent = "";
      }

      return isValid;
  }

  // Función para validar todo el formulario
  function validarFormulario() {
      let isValid = true;

      if (!validarNombre()) {
          isValid = false;
      }

      if (!validarApellido()) {
          isValid = false;
      }

      if (!validarEmail()) {
          isValid = false;
      }

      if (!validarContrasenas()) {
          isValid = false;
      }

      return isValid;
  }
});
