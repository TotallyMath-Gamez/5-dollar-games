(function () {
  var S = window.SITE, G = window.GAMES;
  var id = new URLSearchParams(location.search).get("g");
  var game = G.filter(function (g) { return g.id === id; })[0];

  var frame = document.getElementById("frame");
  var stage = document.getElementById("stage");
  var msg = document.getElementById("msg");
  var gate = document.getElementById("gate");

  document.title = S.tabTitle;
  document.getElementById("fav").href = S.tabIcon;

  function getOk() { try { return sessionStorage.getItem("ok") === "1"; } catch (e) { return false; } }
  function setOk() { try { setOk(); } catch (e) {} }

  function start() {
    gate.hidden = true;
    frame.src = game.url;
  }

  // The form must never do a normal page submit
  var form = document.getElementById("gateForm");
  form.addEventListener("submit", function (e) { e.preventDefault(); });

  if (!game) {
    msg.innerHTML = 'Game not found. <a href="index.html" style="color:#ffcf4a;margin-left:6px">Back to all games</a>';
  } else {
    frame.addEventListener("load", function () { msg.remove(); }, { once: true });

    if (S.password && !getOk()) {
      gate.hidden = false;
      var pw = document.getElementById("pw");
      pw.focus();
      form.addEventListener("submit", function () {
        if (pw.value === S.password) {
          setOk();
          start();
        } else {
          document.getElementById("err").textContent = "Wrong password";
          pw.select();
        }
      });
    } else {
      start();
    }
  }

  // Controls
  document.getElementById("bReload").onclick = function () {
    if (game && frame.src) frame.src = frame.src;
  };

  document.getElementById("bFull").onclick = function () {
    var f = stage.requestFullscreen || stage.webkitRequestFullscreen;
    if (f) f.call(stage);
  };

  document.getElementById("bPanic").onclick = function () {
    if (confirm("Leave now? Game progress may be lost.")) location.replace(S.panicUrl);
  };

  // Free memory when leaving the page
  addEventListener("pagehide", function () { frame.src = "about:blank"; });
})();
