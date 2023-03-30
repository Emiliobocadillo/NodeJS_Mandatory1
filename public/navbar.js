const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("a.nav-link").forEach(link =>{
if(link.href.includes(`${activePage}`)){
    link.classList.add("active")
}
})