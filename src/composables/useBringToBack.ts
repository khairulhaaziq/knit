export default function (id: string) {
  if (id) {
    document.addEventListener("keyup", keyup);
  }

  function keyup(e: KeyboardEvent) {
    if (e.key === "[") {
      console.log("bring to back");
    }
  }
}
