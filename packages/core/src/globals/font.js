/**
 * Import fonts.
 *
 * @export
 */
export function importFonts() {
  const link1 = document.createElement("link");
  link1.rel = "stylesheet";
  link1.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&display=swap";

  document.head.appendChild(link1);
}
