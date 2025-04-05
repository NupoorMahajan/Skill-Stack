document.addEventListener("DOMContentLoaded", () => {
  const profileIcon = document.querySelector(".profile a")
  const profileDropdown = document.getElementById("profileDropdown")

  profileIcon.addEventListener("click", (e) => {
    e.preventDefault()
    profileDropdown.classList.toggle("active")
  })

  document.addEventListener("click", (e) => {
    if (!profileIcon.contains(e.target) && !profileDropdown.contains(e.target)) {
      profileDropdown.classList.remove("active")
    }
  })

  const logoutButton = document.getElementById("logoutButton")
  if (logoutButton) {
    logoutButton.addEventListener("click", (e) => {
      e.preventDefault()
      localStorage.removeItem("isLoggedIn")
      window.location.href = "index.html"
    })
  }

  if (!localStorage.getItem("isLoggedIn")) {
    localStorage.setItem("isLoggedIn", "true")
  }

  const userNameElement = document.getElementById("userName")
  const userEmailElement = document.getElementById("userEmail")

  if (userNameElement && userEmailElement) {
    const storedEmail = localStorage.getItem("userEmail")
    const storedName = localStorage.getItem("userName")

    userNameElement.textContent = storedName || "Nupoor"
    userEmailElement.textContent = storedEmail || "nupoor@skillstack.com"
  }
})

function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem("isLoggedIn")
  if (!isLoggedIn) {
    window.location.href = "index.html"
  }
}