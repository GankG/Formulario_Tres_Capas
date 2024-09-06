document.getElementById('registerForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const nombre = document.getElementById('nombre').value;
  const apellidoPaterno = document.getElementById('apellidoPaterno').value;
  const apellidoMaterno = document.getElementById('apellidoMaterno').value;
  const correo = document.getElementById('correo').value;
  const usuario = document.getElementById('usuario').value;
  const password = document.getElementById('password').value;

  // Validación de contraseña
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/;
  if (!passwordRegex.test(password)) {
    alert("La contraseña debe tener al menos 6 caracteres, una mayúscula, un número y un carácter especial.");
    return;
  }

  const formData = { nombre, apellidoPaterno, apellidoMaterno, correo, usuario, password };

  // Enviar datos al servidor
  const response = await fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });

  const result = await response.json();
  alert(result.message);
});
