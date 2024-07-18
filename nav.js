document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const sidebar = document.getElementById("sidebar");
    const closeIcon = document.getElementById("close-icon");

    // Ensure the sidebar is hidden initially
    sidebar.style.transform = "translateX(-100%)";

    menuIcon.addEventListener("click", () => {
        sidebar.style.transform = "translateX(0)";
    });

    closeIcon.addEventListener("click", () => {
        sidebar.style.transform = "translateX(-100%)";
    });
});