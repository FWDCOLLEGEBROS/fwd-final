document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar && !window.location.href.includes("index.html")) {
    const logoutBtn = document.createElement("button");
    logoutBtn.textContent = "Logout";
    logoutBtn.style.background = "white";
    logoutBtn.style.color = "#007BFF";
    logoutBtn.style.border = "none";
    logoutBtn.style.borderRadius = "5px";
    logoutBtn.style.padding = "6px 12px";
    logoutBtn.style.cursor = "pointer";
    logoutBtn.style.marginLeft = "auto";
    logoutBtn.onclick = () => {
      if (confirm("Are you sure you want to logout?")) {
        localStorage.removeItem("facultyEmail");
        window.location.href = "index.html";
      }
    };
    navbar.appendChild(logoutBtn);
  }
});
