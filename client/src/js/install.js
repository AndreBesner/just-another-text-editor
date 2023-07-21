const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
window.addEventListener("beforeinstallprompt", (event) => {

  //store events triggered
  window.deferredPrompt = event;

  butInstall.classList.toggle("hidden", false);
});

// Click handler for the button
butInstall.addEventListener("click", async () => {

  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();

  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
    
  window.deferredPrompt = null;
});
