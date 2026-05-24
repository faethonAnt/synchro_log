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
async function submitForm() {
  const fname = document.getElementById("fname").value.trim();
  const email = document.getElementById("email").value.trim();
  const lname = document.getElementById("lname").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  if (!fname || !email) {
    alert("Παρακαλώ συμπληρώστε τουλάχιστον το όνομα και το email σας.");
    return;
  }

  const response = await fetch("https://formspree.io/f/mykvdkbb", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: fname + " " + lname,
      email: email,
      phone: phone,
      service: service,
      message: message,
    }),
  });

  if (response.ok) {
    document.getElementById("contact-form").style.display = "none";
    document.getElementById("form-success").classList.add("show");
  } else {
    alert("Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.");
  }
}
