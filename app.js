
const toggleButton = document.querySelector('.toggle-button');
const navList = document.querySelector('.navlist');
const navLinks = document.querySelectorAll('.navlist a');

toggleButton.addEventListener('click', () => {
  navList.classList.toggle('active');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});