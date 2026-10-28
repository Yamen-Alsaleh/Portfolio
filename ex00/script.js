// Event Lifecycle:
// 1. User Action: User clicks the "Toggle Theme" button.
// 2. Event Firing: The browser generates a 'click' event.
// 3. JS Callback: The anonymous arrow function below is executed.
// 4. DOM/CSS Mutation: classList.toggle adds or removes 'dark-theme' on the body, modifying CSS variables.
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
