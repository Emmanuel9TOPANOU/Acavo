document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mobile-menu-button');
  const closeBtn = document.getElementById('close-sidebar');
  const sidebar = document.getElementById('mobile-sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const content = document.getElementById('sidebar-content');
  const navLinks = document.querySelectorAll('.nav-link');

  const toggleSidebar = () => {
    if (sidebar && overlay && content) {
      sidebar.classList.toggle('invisible');
      overlay.classList.toggle('opacity-100');
      content.classList.toggle('-translate-x-full');
      document.body.classList.toggle('overflow-hidden');
    }
  };

  if (btn) btn.addEventListener('click', toggleSidebar);
  if (closeBtn) closeBtn.addEventListener('click', toggleSidebar);
  if (overlay) overlay.addEventListener('click', toggleSidebar);

  // Lien Actif
  const currentPath = window.location.pathname;
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath !== "#" && (currentPath.endsWith(linkPath) || (currentPath === "/" && linkPath === "index.html"))) {
      link.classList.add('active-link');
    }
  });


  

   
    function sendToWhatsApp() {
      const phone = "2290197081973"; // Ton numéro sans le +

      // Récupération des valeurs
      const nom = document.getElementById('nom').value;
      const prenom = document.getElementById('prenom').value;
      const objet = document.getElementById('objet').value;
      const message = document.getElementById('message').value;

      // Validation simple
      if (!nom || !prenom || !objet || !message) {
        alert("Veuillez remplir tous les champs");
        return;
      }

      // Construction du message
      const text = `*Nouveau message de contact*%0A%0A` +
        `*Nom:* ${nom}%0A` +
        `*Prénom:* ${prenom}%0A` +
        `*Objet:* ${objet}%0A%0A` +
        `*Message:*%0A${message}`;

      // Ouverture du lien WhatsApp
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    }
  
    
});