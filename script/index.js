function showPage(name) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("page-" + name).classList.add("active");
  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.classList.toggle("active", a.dataset.page === name);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function submitForm() {
  const fname = document.getElementById("fname").value.trim();
  const email = document.getElementById("email").value.trim();
  if (!fname || !email) {
    alert("Παρακαλώ συμπληρώστε τουλάχιστον το όνομα και το email σας.");
    return;
  }
  document.getElementById("contact-form").style.display = "none";
  document.getElementById("form-success").classList.add("show");
}
