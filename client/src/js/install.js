// const butInstall = document.getElementById("buttonInstall");

// // Logic for installing the PWA
// window.addEventListener("beforeinstallprompt", (event) => {

//   //store events triggered
//   window.deferredPrompt = event;

//   butInstall.classList.toggle("hidden", false);
// });

// // Click handler for the button
// butInstall.addEventListener("click", async () => {
//   console.log('it should have worked')

//   const promptEvent = window.deferredPrompt;

//   if (!promptEvent) {
//     return;
//   }

//   promptEvent.prompt();

//   window.deferredPrompt = null;

//   butInstall.classList.toggle("hidden", true);
// });

// // TODO: Add an handler for the `appinstalled` event
// window.addEventListener("appinstalled", (event) => {
//     console.log('it should have worked')
//   window.deferredPrompt = null;
// });


const butInstall = document.getElementById("buttonInstall");

window.addEventListener('beforeinstallprompt', (event) => {

    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
  });

butInstall.addEventListener('click', async () => {
  
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  // Show prompt
  promptEvent.prompt();
  
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  // Clear prompt
  window.deferredPrompt = null;
}); 
