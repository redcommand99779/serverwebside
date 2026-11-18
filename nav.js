(function(){
  var links=[["index.html","Status"],["start.html","Erste Schritte"],["rangliste.html","Rangliste"],["parkour.html","Parkour"],["spieler.html","Spieler"],["statistik.html","Statistik"],["rezepte.html","Rezepte"],["wiki.html","Wiki"],["aenderungen.html","Neuigkeiten"],["galerie.html","Galerie"],["faq.html","FAQ"],["map/","Karte"]];
  var here=location.pathname.split("/").pop()||"index.html";
  var css=document.createElement("style");
  css.textContent="nav.top{position:sticky;top:0;z-index:10;background:#0f1114;border-bottom:1px solid rgba(128,128,128,.25);display:flex;flex-wrap:wrap;gap:2px;padding:6px 10px;font:14px system-ui,sans-serif}nav.top a{color:#c9ced6;text-decoration:none;padding:5px 10px;border-radius:6px}nav.top a:hover{background:rgba(255,255,255,.08)}nav.top a.on{background:#60a5fa;color:#fff}";
  document.head.appendChild(css);
  var nav=document.createElement("nav");nav.className="top";
  links.forEach(function(l){var a=document.createElement("a");a.href=l[0];a.textContent=l[1];if(here===l[0])a.className="on";nav.appendChild(a)});
  document.body.insertBefore(nav,document.body.firstChild);
  window.esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})};
  window.getJSON=function(u){return fetch(u+"?"+Date.now()).then(function(r){if(!r.ok)throw new Error(r.status);return r.json()})};
})();
