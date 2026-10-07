(function () {
  var S = window.SITE, G = window.GAMES;

  document.title = S.tabTitle;
  document.getElementById("fav").href = S.tabIcon;
  document.getElementById("name").textContent = S.name;

  var grid = document.getElementById("grid");
  var empty = document.getElementById("empty");
  var input = document.getElementById("q");

  // Featured games first, then the rest in the order listed
  var list = G.filter(function (g) { return g.featured; })
    .concat(G.filter(function (g) { return !g.featured; }));

  var frag = document.createDocumentFragment();
  var tiles = list.map(function (g) {
    var a = document.createElement("a");
    a.className = "tile" + (g.featured ? " big" : "");
    a.href = "play.html?g=" + encodeURIComponent(g.id);
    a.setAttribute("aria-label", g.name);

    var ph = document.createElement("span");
    ph.className = "ph";
    ph.textContent = g.name.charAt(0).toUpperCase();
    a.appendChild(ph);

    var img = new Image();
    img.width = 256; img.height = 256;
    img.loading = "lazy"; img.decoding = "async";
    img.alt = "";
    img.onerror = function () { img.remove(); }; // falls back to the letter tile
    img.src = g.img;
    a.appendChild(img);

    var nm = document.createElement("span");
    nm.className = "nm";
    nm.textContent = g.name;
    a.appendChild(nm);

    a._name = g.name.toLowerCase();
    frag.appendChild(a);
    return a;
  });
  grid.appendChild(frag);

  // Search: toggles visibility only, no re-rendering
  var timer;
  function filter() {
    var q = input.value.trim().toLowerCase();
    var shown = 0;
    grid.classList.toggle("q", q !== "");
    tiles.forEach(function (t) {
      var ok = t._name.indexOf(q) !== -1;
      t.hidden = !ok;
      if (ok) shown++;
    });
    empty.hidden = shown !== 0;
  }
  input.addEventListener("input", function () {
    clearTimeout(timer);
    timer = setTimeout(filter, 80);
  });

  // Dock buttons
  document.getElementById("bHome").onclick = function () {
    input.value = ""; filter();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  document.getElementById("bSearch").onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
    input.focus();
  };
  document.getElementById("bRandom").onclick = function () {
    var g = G[Math.floor(Math.random() * G.length)];
    if (g) location.href = "play.html?g=" + encodeURIComponent(g.id);
  };

  // Press "/" to jump to search
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== input) {
      e.preventDefault();
      input.focus();
    }
  });
})();
