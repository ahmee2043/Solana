document.querySelectorAll('.dropdown-title').forEach(title => {
     title.addEventListener('click', () => {
         title.parentElement.classList.toggle('open');
     });
 });
 document.getElementById("hamburger").onclick = () => {
    document.getElementById("mobileNav").classList.add("active");
  };

  document.getElementById("closeNav").onclick = () => {
    document.getElementById("mobileNav").classList.remove("active");
  };

  // Mobile dropdowns
  document.querySelectorAll(".mobile-dropdown h4").forEach(drop => {
    drop.onclick = () => {
      drop.parentElement.classList.toggle("open");
    };
  });


 