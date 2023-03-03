const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  butInstall.disabled = false;
  butInstall.textContent = "Install This App Bro!";

  butInstall.addEventListener("click", async () => {
    event.prompt();
    butInstall.disabled = true;
    installBtn.textContent = "Installing...!";
  });
});

window.addEventListener("appinstalled", (event) => {
  console.log("App installed. Noice", event);
  butInstall.textContent = "App Installed!";
});
