if (localStorage.pagecount) {
  localStorage.pagecount = Number(localStorage.pagecount) + 1;
} else {
  localStorage.pagecount = 1;
}
document.write(
  '<div class="counter"><i class="fas fa-eye"></i> Visitas: ' +
    localStorage.pagecount +
    "</div>"
);
