document.addEventListener('DOMContentLoaded', function() {
  // Menú hamburguesa
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Verificación de edad para página de bebidas
  if (window.location.pathname.includes('bebidas.html')) {
    verifyAge();
  }

  // Sistema de orden (ejemplo básico)
  document.querySelectorAll('.btn-order').forEach(button => {
    button.addEventListener('click', function() {
      const itemName = this.closest('.menu-card').querySelector('h3').textContent;
      const itemPrice = this.closest('.price-container').querySelector('.price').textContent;
      
      addToCart(itemName, itemPrice);
    });
  });

  // Animación de scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

// Función para verificar edad
function verifyAge() {
  const ageModal = document.createElement('div');
  ageModal.className = 'age-modal';
  ageModal.innerHTML = `
    <div class="modal-content">
      <h2>Verificación de Edad</h2>
      <p>Para acceder a nuestra sección de bebidas, debes ser mayor de 18 años. ¿Confirmas que cumples con este requisito?</p>
      <div class="modal-buttons">
        <button class="modal-btn btn-confirm">Sí, soy mayor</button>
        <button class="modal-btn btn-deny">No, soy menor</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(ageModal);
  ageModal.style.display = 'flex';

  // Event listeners para los botones del modal
  ageModal.querySelector('.btn-confirm').addEventListener('click', () => {
    ageModal.style.display = 'none';
    // Guardar en localStorage que ya verificó su edad
    localStorage.setItem('ageVerified', 'true');
  });

  ageModal.querySelector('.btn-deny').addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  // Si ya verificó su edad previamente, no mostrar el modal
  if (localStorage.getItem('ageVerified') === 'true') {
    ageModal.style.display = 'none';
  }
}

// Función para agregar al carrito (ejemplo)
function addToCart(itemName, itemPrice) {
  // Aquí iría la lógica real para agregar al carrito
  // Por ahora solo mostramos una alerta
  alert(`Agregado al carrito: ${itemName} - ${itemPrice}`);
  
  // Animación de feedback
  const button = event.target;
  button.textContent = '✓ Agregado';
  button.style.backgroundColor = '#27ae60';
  
  setTimeout(() => {
    button.textContent = 'Ordenar';
    button.style.backgroundColor = '';
  }, 1500);
}

// Función para formatear precios (opcional)
function formatPrice(price) {
  return parseFloat(price.replace('S/', '')).toFixed(2);
}
