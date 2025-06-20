// script.js
// Smooth scroll to section when nav item is clicked
document.querySelectorAll('.navs').forEach(nav => {
  nav.addEventListener('click', () => {
    const targetId = nav.getAttribute('data-target');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.getElementById("banking-btn").addEventListener("click", function(){
  window.location.href = "https://github.com/Patk-Tuy/MazeBank";
});
document.getElementById("weather-btn").addEventListener("click", function(){
  window.location.href = "https://github.com/Patk-Tuy/Weather-Widget-JavaFX";
});
document.getElementById("sat-data-btn").addEventListener("click", function(){
  window.location.href = "https://github.com/Nzabinesha/lab-1_sateliteDataAnalysis";
});

