const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

const avatarImg = document.getElementById("avatar-img");
const switchAvatarBtn = document.getElementById("switch-avatar-btn");
let isCasual = true;

switchAvatarBtn.addEventListener("click", () => {
  avatarImg.style.opacity = 0;

  setTimeout(() => {
    isCasual = !isCasual;
    if (isCasual) {
      avatarImg.src = "assets/casual.jpg";
      switchAvatarBtn.textContent = "Switch to Professional";
    } else {
      avatarImg.src = "assets/professional.jpg";
      switchAvatarBtn.textContent = "Switch to Casual";
    }
    avatarImg.style.opacity = 1;
  }, 300);
});
