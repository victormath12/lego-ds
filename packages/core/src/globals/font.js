/**
 * Import fonts.
 *
 * @export
 */
export function importFonts() {
  const link1 = document.createElement("link");
  link1.rel = "stylesheet";
  link1.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&display=swap";

  const link2 = document.createElement("link");
  link2.rel = "stylesheet";
  link2.href = "https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700&display=swap";

  const link3 = document.createElement("link");
  link3.rel = "stylesheet";
  link3.href = "https://fonts.googleapis.com/css?family=Roboto+Slab:400,500,600,700&display=swap";

  document.head.appendChild(link1);
  document.head.appendChild(link2);
  document.head.appendChild(link3);
}
