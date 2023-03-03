const butInstall = document.getElementById("buttonInstall");
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  butInstall.disabled = false;
  butInstall.visibility = "visible";
  butInstall.textContent = "Install This App Bro!";
});

butInstall.addEventListener("click", async () => {
  butInstall.textContent = "Installing...!";
  const res = await deferredPrompt.prompt();
  console.log(res);
  if (res?.outcome === "accepted") {
    window.alert("Installation was accepted!");
    return (butInstall.disabled = true);
  }

  butInstall.disabled = false;
});

window.addEventListener("appinstalled", (event) => {
  console.log("App installed. Noice", event);
  butInstall.textContent = "App Installed!";
});
