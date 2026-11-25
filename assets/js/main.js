(function () {
  "use strict";

  var CFG = window.RELUNG_CONFIG;
  var T = window.RELUNG_I18N;
  var lang = "id";

  /* ---------------- Data ---------------- */
  var PHOTOS = {
    deluxe: [
      ["pool-house", "Kolam renang pribadi & fasad villa", "Private pool & villa facade"],
      ["living-wide", "Ruang keluarga dengan void tinggi", "Double-height living room"],
      ["dining", "Meja makan & dapur", "Dining table & kitchen"],
      ["pool-aerial", "Kolam renang dari lantai atas", "The pool from upstairs"],
      ["loft", "Kamar tidur lantai 2", "Upstairs bedroom"],
      ["living", "Ruang santai & tangga", "Lounge & staircase"],
      ["lounge", "Sudut santai dengan jendela tinggi", "Lounge with tall windows"],
      ["living-above", "Ruang keluarga dari mezanin", "Living room from the mezzanine"],
      ["bedroom-loft", "Kamar tidur menghadap void", "Bedroom overlooking the void"],
      ["rooftop", "Rooftop terrace dikelilingi pohon kelapa", "Rooftop terrace among the palms"],
      ["balcony", "Balkon lantai 2", "Upstairs balcony"],
      ["pool", "Kolam renang & pelampung flamingo", "Pool with the flamingo float"],
      ["bathroom", "Kamar mandi dengan rain shower", "Bathroom with rain shower"],
      ["shower", "Kamar mandi lantai 1", "Ground-floor bathroom"],
      ["garden-path", "Taman samping", "Side garden"],
      ["garden-side", "Jalan setapak taman", "Garden walkway"]
    ],
    superior: [
      ["bedroom", "Kamar tidur A-frame dengan pemandangan", "A-frame bedroom with a view"],
      ["living", "Ruang keluarga Superior", "Superior living room"],
      ["pool-flamingo", "Kolam renang pribadi memanjang", "Private lap-style pool"],
      ["dining-stairs", "Dapur, meja makan & tangga", "Kitchen, dining & stairs"],
      ["living-2", "Ruang keluarga menghadap kolam", "Living room facing the pool"],
      ["dining", "Ruang makan & TV", "Dining & TV area"],
      ["loft-above", "Pemandangan dari lantai 2", "View from the upper floor"],
      ["balcony", "Balkon pribadi", "Private balcony"],
      ["pool", "Kolam renang & daybed", "Pool & daybed"],
      ["bathroom", "Kamar mandi marmer", "Marble bathroom"],
      ["bathroom-2", "Wastafel & area mandi", "Vanity & shower area"],
      ["shower", "Shower dengan air panas", "Hot-water shower"],
      ["shower-2", "Kamar mandi lantai 1", "Ground-floor bathroom"]
    ]
  };

  // 3 fasilitas utama — tampil sebagai kartu foto
  var FAC_HIGHLIGHTS = [
    ["superior/pool-flamingo", "Kolam renang pribadi", "Private swimming pool", "Di setiap villa, hanya untuk Anda", "In every villa, just for you"],
    ["deluxe/rooftop", "View alam & udara sejuk", "Nature views & cool air", "Pagi yang adem di lereng Merapi", "Cool mornings on Merapi's slopes"],
    ["deluxe/living-wide", "Ramah keluarga & anak", "Family & kid friendly", "Ruang luas untuk kumpul bersama", "Plenty of room to gather"]
  ];

  // Fasilitas lengkap — dikelompokkan
  var ICONS = {
    bed: '<path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7M3 15h18M3 18v2M21 18v2M7 9V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3"/>',
    kitchen: '<path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 21V3c-2 1.5-3 4-3 7v3h3"/>',
    bath: '<path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3ZM6 12V5a2 2 0 0 1 3.5-1.3M8 6h3M7 20l-1 2M17 20l1 2"/>'
  };
  var FAC_GROUPS = [
    ["bed", "Kamar & Kenyamanan", "Room & Comfort", [
      ["AC di setiap lantai", "AC on every floor"],
      ["1 bed, 1 sofa, 1 sofa bed", "1 bed, 1 sofa, 1 sofa bed"],
      ["Ekstra selimut & bantal", "Extra blankets & pillows"],
      ["Wi-Fi", "Wi-Fi"],
      ["Balkon & teras pribadi", "Private balcony & terrace"],
      ["Parkir luas gratis", "Spacious free parking"]
    ]],
    ["kitchen", "Dapur & Makan", "Kitchen & Dining", [
      ["Dapur lengkap & kitchen set", "Fully equipped kitchen"],
      ["Kompor gas & kulkas", "Gas stove & refrigerator"],
      ["Peralatan masak & makan", "Kitchenware & dining utensils"],
      ["Meja makan", "Dining table"],
      ["Dispenser air panas & dingin", "Hot & cold water dispenser"],
      ["Air minum", "Drinking water"]
    ]],
    ["bath", "Kamar Mandi", "Bathroom", [
      ["Kamar mandi di lantai 1 & 2", "Bathrooms on both floors"],
      ["Water heater (air panas)", "Water heater"],
      ["Rain shower & hand shower", "Rain & handheld shower"],
      ["Handuk, sabun & sampo", "Towels, soap & shampoo"],
      ["Sikat gigi & amenities", "Toothbrush & amenities"],
      ["Hair dryer", "Hair dryer"]
    ]]
  ];

  // [icon, name, desc-id, desc-en, minutes]
  var PLACES = [
    ["☕", "Kopine Eyang Potro", "Kafe di tepi Sungai Boyong, masih di Candibinangun.", "Riverside café on the Boyong River, right in Candibinangun.", "5"],
    ["🍛", "Warung Kopi Klotok", "Sarapan legendaris ala desa dengan view sawah & Merapi.", "Legendary village-style breakfast with rice-field & Merapi views.", "10"],
    ["🌋", "Museum Gunungapi Merapi", "Belajar sejarah & letusan Merapi — Jl. Kaliurang Km 22.", "Learn the history of Merapi's eruptions — Jl. Kaliurang Km 22.", "15"],
    ["🏛️", "Museum Ullen Sentalu", "Museum budaya & batik bangsawan Mataram di Kaliurang.", "Museum of Mataram royal culture and batik in Kaliurang.", "20"],
    ["🌲", "Kaliurang & Tlogo Putri", "Hutan pinus, udara dingin, dan air terjun kecil.", "Pine forest, cool air and a small waterfall.", "20"],
    ["🚙", "Merapi Lava Tour (Jeep)", "Petualangan jeep ke Kaliadem, bunker & Batu Alien.", "Jeep adventure to Kaliadem, the bunker & Alien Rock.", "15"],
    ["🏰", "The Lost World Castle", "Kastil batu ikonik dengan latar Gunung Merapi.", "Iconic stone castle with Mount Merapi as the backdrop.", "20"],
    ["🛕", "Candi Prambanan", "Kompleks candi Hindu terbesar di Indonesia.", "Indonesia's largest Hindu temple complex.", "40"]
  ];

  // Urutkan dari yang terdekat
  PLACES.sort(function (a, b) { return a[4] - b[4]; });

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var t = function (k) { return (T[lang] && T[lang][k]) || T.id[k] || k; };
  var img = function (type, name, thumb) { return "assets/img/" + type + "/" + (thumb ? "thumb/" : "") + name + ".jpg"; };

  /* ---------------- i18n ---------------- */
  function applyLang(l) {
    lang = T[l] ? l : "id";
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $$("[data-i18n-html]").forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
    $$("[data-i18n-ph]").forEach(function (el) { el.placeholder = t(el.getAttribute("data-i18n-ph")); });
    $$(".lang button").forEach(function (b) { b.classList.toggle("is-active", b.dataset.lang === lang); });
    renderFacilities(); renderPlaces(); renderGallery(); buildCarousels(); updateSummary();
    try { localStorage.setItem("relung-lang", lang); } catch (e) {}
  }
  $$(".lang button").forEach(function (b) { b.addEventListener("click", function () { applyLang(b.dataset.lang); }); });

  /* ---------------- Header & nav ---------------- */
  var header = $(".header"), burger = $("#burger"), nav = $("#nav");
  function onScroll() { header.classList.toggle("is-solid", window.scrollY > 40); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  function closeMenu() { nav.classList.remove("is-open"); header.classList.remove("menu-open"); burger.setAttribute("aria-expanded", "false"); }
  burger.addEventListener("click", function () {
    var open = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", open); header.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", String(open));
  });
  $$("#nav a").forEach(function (a) { a.addEventListener("click", closeMenu); });

  /* ---------------- Hero slideshow ---------------- */
  var slides = $$(".hero__slide"), si = 0;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (slides.length > 1 && !reduce) {
    setInterval(function () {
      slides[si].classList.remove("is-active");
      si = (si + 1) % slides.length;
      slides[si].classList.add("is-active");
    }, 6000);
  }

  /* ---------------- Lightbox ---------------- */
  var lb = $("#lightbox"), lbImg = $("img", lb), lbCap = $("figcaption", lb), lbList = [], lbIdx = 0;
  function lbShow() {
    var p = lbList[lbIdx];
    lbImg.src = p.src; lbImg.alt = p.cap; lbCap.textContent = p.cap + "  ·  " + (lbIdx + 1) + "/" + lbList.length;
  }
  function openLightbox(list, idx) { lbList = list; lbIdx = idx; lbShow(); lb.hidden = false; document.body.style.overflow = "hidden"; $(".lightbox__close").focus(); }
  function closeLightbox() { lb.hidden = true; document.body.style.overflow = ""; }
  function lbStep(d) { lbIdx = (lbIdx + d + lbList.length) % lbList.length; lbShow(); }
  $(".lightbox__close").addEventListener("click", closeLightbox);
  $(".lightbox__prev").addEventListener("click", function () { lbStep(-1); });
  $(".lightbox__next").addEventListener("click", function () { lbStep(1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lbStep(-1);
    if (e.key === "ArrowRight") lbStep(1);
  });
  var tx = 0;
  lb.addEventListener("touchstart", function (e) { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) { var dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) lbStep(dx < 0 ? 1 : -1); });

  function photoList(type) {
    return PHOTOS[type].map(function (p) { return { src: img(type, p[0]), cap: lang === "en" ? p[2] : p[1] }; });
  }

  /* ---------------- Villa carousels ---------------- */
  function buildCarousels() {
    $$("[data-carousel]").forEach(function (box) {
      var type = box.dataset.carousel, list = photoList(type), idx = box._idx || 0;
      box.innerHTML =
        '<div class="carousel"><div class="carousel__track">' +
        list.map(function (p, i) {
          return '<img src="' + p.src + '" alt="' + p.cap + '" ' + (i ? 'loading="lazy"' : "") + ' data-i="' + i + '">';
        }).join("") +
        '</div><button class="carousel__btn carousel__prev" aria-label="Prev">‹</button>' +
        '<button class="carousel__btn carousel__next" aria-label="Next">›</button>' +
        '<span class="carousel__count"></span><div class="carousel__dots">' +
        list.map(function (_, i) { return '<button aria-label="' + (i + 1) + '"></button>'; }).join("") +
        "</div></div>";
      var track = $(".carousel__track", box), dots = $$(".carousel__dots button", box), count = $(".carousel__count", box);
      function go(i) {
        idx = (i + list.length) % list.length; box._idx = idx;
        track.style.transform = "translateX(-" + idx * 100 + "%)";
        dots.forEach(function (d, j) { d.classList.toggle("is-active", j === idx); });
        count.textContent = (idx + 1) + " / " + list.length;
      }
      $(".carousel__prev", box).onclick = function () { go(idx - 1); };
      $(".carousel__next", box).onclick = function () { go(idx + 1); };
      dots.forEach(function (d, j) { d.onclick = function () { go(j); }; });
      track.onclick = function (e) { if (e.target.tagName === "IMG") openLightbox(list, +e.target.dataset.i); };
      var sx = 0;
      track.ontouchstart = function (e) { sx = e.touches[0].clientX; };
      track.ontouchend = function (e) { var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1)); };
      go(idx);
    });
  }

  /* ---------------- Facilities ---------------- */
  function renderFacilities() {
    var en = lang === "en";
    $("#facHighlights").innerHTML = FAC_HIGHLIGHTS.map(function (h) {
      return '<figure class="fac-card"><img src="assets/img/' + h[0].replace("/", "/thumb/") + '.jpg" alt="" loading="lazy">' +
        "<figcaption><strong>" + (en ? h[2] : h[1]) + "</strong><span>" + (en ? h[4] : h[3]) + "</span></figcaption></figure>";
    }).join("");
    $("#facGroups").innerHTML = FAC_GROUPS.map(function (g) {
      return '<div class="fac-group"><h3><svg viewBox="0 0 24 24" aria-hidden="true">' + ICONS[g[0]] + "</svg>" + (en ? g[2] : g[1]) + "</h3><ul>" +
        g[3].map(function (i) { return "<li>" + (en ? i[1] : i[0]) + "</li>"; }).join("") + "</ul></div>";
    }).join("");
  }

  /* ---------------- Nearby ---------------- */
  function renderPlaces() {
    $("#places").innerHTML = PLACES.map(function (p) {
      return '<li class="place"><span class="place__ico" aria-hidden="true">' + p[0] + "</span>" +
        "<div><h3>" + p[1] + "</h3><p>" + (lang === "en" ? p[3] : p[2]) + "</p></div>" +
        '<span class="place__time">±' + p[4] + " " + t("unit.min") + "<small>" + t("unit.drive") + "</small></span></li>";
    }).join("");
  }

  /* ---------------- Gallery ---------------- */
  var galFilter = "all";
  function renderGallery() {
    var all = [];
    var d = photoList("deluxe"), s = photoList("superior");
    // interleave for a nicer mix
    for (var i = 0; i < Math.max(d.length, s.length); i++) {
      if (d[i]) all.push({ type: "deluxe", p: d[i], name: PHOTOS.deluxe[i][0] });
      if (s[i]) all.push({ type: "superior", p: s[i], name: PHOTOS.superior[i][0] });
    }
    var grid = $("#galGrid");
    grid.innerHTML = all.map(function (it, i) {
      return '<figure class="gal-item" data-type="' + it.type + '" data-i="' + i + '">' +
        '<img src="' + img(it.type, it.name, true) + '" alt="' + it.p.cap + '" loading="lazy" width="800" height="600">' +
        "<figcaption>" + it.p.cap + "</figcaption></figure>";
    }).join("");
    grid._all = all;
    applyGalFilter();
  }
  function applyGalFilter() {
    $$("#galGrid .gal-item").forEach(function (el) {
      el.classList.toggle("is-hidden", galFilter !== "all" && el.dataset.type !== galFilter);
    });
  }
  $$("[data-filter]").forEach(function (b) {
    b.addEventListener("click", function () {
      galFilter = b.dataset.filter;
      $$("[data-filter]").forEach(function (x) { x.classList.toggle("is-active", x === b); });
      applyGalFilter();
    });
  });
  $("#galGrid").addEventListener("click", function (e) {
    var fig = e.target.closest(".gal-item"); if (!fig) return;
    var visible = $$("#galGrid .gal-item:not(.is-hidden)");
    var all = $("#galGrid")._all;
    var list = visible.map(function (el) { return all[+el.dataset.i].p; });
    openLightbox(list, visible.indexOf(fig));
  });

  /* ---------------- Price toggle ---------------- */
  $$("[data-plan]").forEach(function (b) {
    b.addEventListener("click", function () {
      var plan = b.dataset.plan;
      $$("[data-plan]").forEach(function (x) { var on = x === b; x.classList.toggle("is-active", on); x.setAttribute("aria-selected", String(on)); });
      $$(".price-card dd").forEach(function (dd) {
        dd.classList.add("is-swapping");
        setTimeout(function () { dd.textContent = "IDR " + dd.dataset[plan]; dd.classList.remove("is-swapping"); }, 200);
      });
      form.plan.value = plan; updateSummary();
    });
  });

  /* ---------------- Booking form → WhatsApp ---------------- */
  var form = $("#bookForm"), err = $("#bookError"), sum = $("#bookSummary");
  var pad = function (n) { return (n < 10 ? "0" : "") + n; };
  var iso = function (d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); };
  var today = new Date();
  form.checkin.min = iso(today);
  form.checkout.min = iso(new Date(today.getTime() + 864e5));

  function fmtDate(v) {
    if (!v) return "";
    var p = v.split("-"), d = new Date(+p[0], p[1] - 1, +p[2]);
    return d.toLocaleDateString(lang === "en" ? "en-GB" : "id-ID", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
  }
  function nights() {
    if (!form.checkin.value || !form.checkout.value) return 0;
    return Math.round((new Date(form.checkout.value) - new Date(form.checkin.value)) / 864e5);
  }
  function updateSummary() {
    if (!form) return;
    var n = nights();
    sum.textContent = n > 0 ? fmtDate(form.checkin.value) + " → " + fmtDate(form.checkout.value) + "  ·  " + n + " " + t("form.nights") : "";
  }
  form.checkin.addEventListener("change", function () {
    if (form.checkin.value) {
      var p = form.checkin.value.split("-"), next = new Date(+p[0], p[1] - 1, +p[2] + 1);
      form.checkout.min = iso(next);
      if (!form.checkout.value || form.checkout.value <= form.checkin.value) form.checkout.value = iso(next);
    }
    err.textContent = ""; updateSummary();
  });
  form.checkout.addEventListener("change", function () { err.textContent = ""; updateSummary(); });

  // "Pesan" buttons preselect the villa type
  $$("[data-villa]").forEach(function (a) {
    a.addEventListener("click", function () { form.villa.value = a.dataset.villa; });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    err.textContent = "";
    if (!form.checkin.value || !form.checkout.value) { err.textContent = t("form.errDates"); return; }
    if (nights() <= 0) { err.textContent = t("form.errOrder"); return; }
    if (form.villa.value === "Deluxe" && +form.units.value > 1) { err.textContent = t("form.errUnitsDeluxe"); return; }
    var planTxt = form.plan.value === "bf" ? t("form.planBf") : t("form.planOnly");
    var lines = [
      t("wa.greeting"), "",
      form.guestname.value.trim() ? "• " + t("wa.name") + ": " + form.guestname.value.trim() : null,
      "• " + t("wa.villa") + ": " + form.villa.value,
      "• " + t("wa.units") + ": " + form.units.value,
      "• " + t("wa.checkin") + ": " + fmtDate(form.checkin.value),
      "• " + t("wa.checkout") + ": " + fmtDate(form.checkout.value) + " (" + nights() + " " + t("form.nights") + ")",
      "• " + t("wa.guests") + ": " + form.guests.value,
      "• " + t("wa.plan") + ": " + planTxt,
      form.note.value.trim() ? "• " + t("wa.note") + ": " + form.note.value.trim() : null,
      "", t("wa.thanks")
    ].filter(function (l) { return l !== null; });
    window.open("https://wa.me/" + CFG.whatsapp + "?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener");
  });

  /* ---------------- OTA (hidden until enabled in config.js) ---------------- */
  (function () {
    if (!CFG.ota || !CFG.ota.enabled) return;
    var links = CFG.ota.links.filter(function (o) { return o.show && o.url; });
    if (!links.length) return;
    $("#otaLinks").innerHTML = links.map(function (o) {
      return '<a href="' + o.url + '" target="_blank" rel="noopener">' + o.name + "</a>";
    }).join("");
    $("#ota").hidden = false;
  })();

  /* ---------------- Reveal on scroll ---------------- */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    $$(".reveal").forEach(function (el) { el.classList.add("is-in"); });
  }

  $("#year").textContent = new Date().getFullYear();

  /* ---------------- Init ---------------- */
  var saved = null;
  try { saved = localStorage.getItem("relung-lang"); } catch (e) {}
  var qs = new URLSearchParams(location.search).get("lang");
  applyLang(qs || saved || ((navigator.language || "").toLowerCase().indexOf("id") === 0 ? "id" : (saved ? saved : "id")));
})();
