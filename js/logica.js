document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
  
    // Obtiene los valores del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Aquí deberías implementar tu lógica de autenticación.
    // Por ejemplo, puedes comparar los valores ingresados con los datos almacenados en tu base de datos.
    // En este ejemplo, se usan valores hardcoded para simplificar.
    const validUsername = "usuario";
    const validPassword = "contraseña";
  
    if (username === validUsername && password === validPassword) {
      // Si las credenciales son válidas, redirige a la página principal
      window.location.href = "index.html";
    } else {
      // Si las credenciales son incorrectas, muestra un mensaje de error y limpia el formulario.
      alert("Nombre de usuario o contraseña incorrectos");
      document.getElementById("loginForm").reset();
    }
  });
  