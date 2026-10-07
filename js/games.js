/* ============================================================
   SITE SETTINGS
   ============================================================ */
window.SITE = {
  name: "TotallyMath",
  tabTitle: "Google",              // text shown on the browser tab
  tabIcon: "imgs/google.jpg",      // icon shown on the browser tab
  panicUrl: "https://classroom.google.com", // where the red button sends you
  password: "gamesarefun231"       // Leave "" for no password.
                                   // (Client-side only: anyone can read it in the page source.)
};

/* ============================================================
   GAMES  -  to add a game, copy one line and change it.
   id        short unique name, no spaces
   name      title shown on the tile
   url       path to the game's folder / index.html
   img       thumbnail (square works best, ~256x256 jpg)
   featured  true = big tile at the top (optional)
   ============================================================ */
window.GAMES = [
  { id: "subwaysurfers", name: "Subway Surfers", url: "/schoolwork/subwaysurfers",        img: "imgs/subwaysurfers.jpg", featured: true },
  { id: "geodash",       name: "Geometry Dash",  url: "/schoolwork/geodash/index.html",   img: "imgs/geodash.jpg",       featured: true },
  { id: "slope",         name: "Slope",          url: "/schoolwork/slope/index.html",     img: "imgs/slope.jpg" },
  { id: "ovo2",          name: "OvO 2",          url: "/schoolwork/ovo2/index.html",      img: "imgs/ovo2.jpg" },
  { id: "amongus",          name: "Among Us",          url: "/schoolwork/among-us/index.html",      img: "imgs/amongus.jpeg" },
  { id: "bitlife",          name: "BitLife",          url: "/schoolwork/bitlife/index.html",      img: "imgs/bitlife.jpg" },
  { id: "mstuntcars3",          name: "Madalin Stunt Cars 3",          url: "/schoolwork/mstuntcars3/index.html",      img: "imgs/madalin-stunt-cars-3.png" },
  { id: "paperio2",          name: "Paper.io 2",          url: "/schoolwork/paperio2/index.html",      img: "imgs/paperio2.png" },
  { id: "eggycar",          name: "Eggy Car",          url: "/schoolwork/eggy-car/index.html",      img: "imgs/eggy-car.webp" },
  { id: "rocketpult",          name: "Rocket Pult",          url: "/schoolwork/rocket-pult/index.html",      img: "imgs/rocketpult.png" },
  { id: "fnaf1",          name: "FNAF 1",          url: "/schoolwork/fnaf-1/index.html",      img: "imgs/fnaf1.png" },
  // { id: "yourgame", name: "Your Game", url: "/schoolwork/yourgame/index.html", img: "imgs/yourgame.jpg" },
];
