export function unregister() {
  console.log("attempting to remove this sites broken service worker");
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
      console.log("removing sw");
    });
  }
}
