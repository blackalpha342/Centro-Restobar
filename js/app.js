// Verificación de edad para la sección de bebidas con alcohol
document.addEventListener('DOMContentLoaded', function() {
  // Verificar si estamos en la página de bebidas con alcohol
  if (document.getElementById('alcoholic-drinks')) {
    verifyAge();
  }
});

function verifyAge() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();
  
  let birthDateInput = prompt("Para acceder a la sección de bebidas alcohólicas, por favor ingresa tu fecha de nacimiento en formato DD/MM/AAAA (ejemplo: 15/05/1990):");
  
  // Si el usuario cancela o no ingresa nada, aplicar efecto borroso
  if (birthDateInput === null || birthDateInput === "") {
    applyBlurEffect();
    alert("No has ingresado tu fecha de nacimiento. No puedes acceder a esta sección.");
    return;
  }
  
  // Validar formato DD/MM/AAAA
  const dateParts = birthDateInput.split('/');
  if (dateParts.length !== 3 || dateParts[0].length !== 2 || dateParts[1].length !== 2 || dateParts[2].length !== 4) {
    alert("Formato incorrecto. Por favor ingresa la fecha en formato DD/MM/AAAA (ejemplo: 15/05/1990)");
    verifyAge(); // Volver a preguntar
    return;
  }
  
  const birthDay = parseInt(dateParts[0]);
  const birthMonth = parseInt(dateParts[1]);
  const birthYear = parseInt(dateParts[2]);
  
  // Validar que sean números
  if (isNaN(birthDay) || isNaN(birthMonth) || isNaN(birthYear)) {
    alert("Por favor ingresa una fecha válida con dígitos (ejemplo: 15/05/1990)");
    verifyAge(); // Volver a preguntar
    return;
  }
  
  // Validar rangos de fecha
  if (birthDay < 1 || birthDay > 31 || birthMonth < 1 || birthMonth > 12 || birthYear < 1900 || birthYear > currentYear) {
    alert("Por favor ingresa una fecha de nacimiento válida");
    verifyAge(); // Volver a preguntar
    return;
  }
  
  // Calcular edad
  let age = currentYear - birthYear;
  
  // Ajustar si aún no ha cumplido años este año
  if (birthMonth > currentMonth || (birthMonth === currentMonth && birthDay > currentDay)) {
    age--;
  }
  
  if (age >= 18) {
    alert("Puedes acceder a las bebidas con alcohol. ¡Disfruta con responsabilidad!");
  } else {
    applyBlurEffect();
    alert("No puedes acceder a las bebidas con alcohol. Disfruta de nuestras opciones sin alcohol.");
  }
}

function applyBlurEffect() {
  const alcoholicItems = document.getElementById('alcoholic-items');
  if (alcoholicItems) {
    // Aplicar efecto borroso a todos los items
    const items = alcoholicItems.querySelectorAll('.menu-item');
    items.forEach(item => {
      item.classList.add('blurred');
      
      // Agregar mensaje de advertencia
      const warning = document.createElement('div');
      warning.className = 'age-warning';
      warning.textContent = 'Contenido solo para mayores de 18 años';
      item.appendChild(warning);
    });
  }
}
