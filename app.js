function validateForm() {
    const usuario = document.getElementById("usuario").value;
    const cargo = document.getElementById("cargo").value;
    const clave = document.getElementById("clave").value;
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = ""; // Limpiar el mensaje de error

    // a. Los campos de usuario, cargo y clave no deben estar vacíos
    if (usuario === "" || cargo === "" || clave === "") {
      errorMessage.textContent = "Error en usuario, cargo y/o clave.";
      return false;
    }

    // b. Los datos ingresados deben coincidir exactamente
    if ( cargo === "docente" && clave === "123") {
      // Credenciales válidas
      alert("Acceso concedido. Usuario: " + usuario + ", Cargo: " + cargo);
      return true;
    } else if ( cargo === "alumno" && clave === "234") {
        // Credenciales válidas
        alert("Acceso concedido. Usuario: " + usuario + ", Cargo: " + cargo);
        return true;
    } else {
        errorMessage.textContent = "Error en usuario, cargo y/o clave.";
        return false;
    } 
}  