// A simple, no-op service worker that takes immediate control.
window.addEventListener("install", () => {
  // Skip over the "waiting" lifecycle state, to ensure that our
  // new service worker is activated immediately, even if there's
  // another tab open controlled by our older service worker code.
  window.skipWaiting();
});

export function unregister() {
  console.log("attempting to remove this sites broken service worker");
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
      console.log("removing sw");
    });
  }
}
