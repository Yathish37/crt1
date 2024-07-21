let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};
  function downloadCV() {
        // Trigger the download programmatically
        const link = document.createElement('a');
        link.href = 'assets/img/resume.jpg';
        link.download = 'resume.jpg'; // Specify the download filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Optionally, add tracking or other logic here
        console.log('CV download initiated');
    }

