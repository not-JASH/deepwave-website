(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}})();const l=[{id:"01",slug:"signal-lab",anchor:"signal-lab",title:"Signal Lab",label:"Acoustic + hydrodynamic models",status:"ACTIVE",accession:"DWR-01-317",color:"#81CBBE",summary:"Sonar traces, waveforms, anomaly detection, and model confidence systems for deep-water signals.",coordinates:"A-14 / LOWER ARRAY"},{id:"02",slug:"field-systems",anchor:"field-systems",title:"Field Systems",label:"Buoys, floats, coastal nodes",status:"DEPLOYED",accession:"DWR-02-104",color:"#DD5F4A",summary:"Instrument networks that collect live current, pressure, weather, and wave energy readings.",coordinates:"B-08 / PIER LOCK"},{id:"03",slug:"current-models",anchor:"current-models",title:"Current Models",label:"Forecasts + long-range drift",status:"REVISION B",accession:"DWR-03-241",color:"#9BACD5",summary:"Simulations that reconcile live sensor streams with archival current and climate datasets.",coordinates:"C-03 / MODEL ROOM"},{id:"04",slug:"publications",anchor:"publications",title:"Publications",label:"Reports, releases, papers",status:"PUBLIC",accession:"DWR-04-092",color:"#F2CD88",summary:"Public-facing field reports, model notes, paper abstracts, and release documentation.",coordinates:"D-20 / STACKS"},{id:"05",slug:"archive",anchor:"archive",title:"Archive",label:"Scans + field lineage",status:"CURATED",accession:"DWR-05-442",color:"#A07254",summary:"Recovered diagrams, instrument manuals, declassified field notes, and verified project history.",coordinates:"E-11 / COLD FILE"},{id:"06",slug:"reception",anchor:"contact",title:"Reception",label:"Briefings + collaboration",status:"OPEN",accession:"DWR-06-001",color:"#C86AAE",summary:"A controlled access point for field collaborations, data partnerships, and applied research briefs.",coordinates:"F-01 / ENTRY"}],E=[{label:"Array uptime",value:97,unit:"%"},{label:"Signal lock",value:82,unit:"%"},{label:"Current drift",value:14,unit:"cm/s"},{label:"Model confidence",value:91,unit:"%"}],$=[{code:"DRIFT WINDOW / 36H",title:"North Shelf shear recovery",summary:"Assimilation now converges across lower-array telemetry and the April pressure variance event.",status:"CONFIDENCE 91%",readout:"+14 cm/s"},{code:"REVISION NOTE / B.03",title:"Thermocline offset correction",summary:"Bias trims continue across two warm-water lanes where historical buoy logs underreported lateral drift.",status:"DELTA 4.2%",readout:"0.7 deg C"},{code:"OUTLOOK / 72H",title:"Array redeployment envelope",summary:"Field teams have a stable intervention window before signal scatter exceeds publication threshold.",status:"WINDOW OPEN",readout:"42 hours"}],M=[{code:"FIELD REPORT / 2026.04",title:"Abyssal Current Model, Revision B",excerpt:"Signal drift observed across three offshore nodes after a 42-hour pressure variance event.",stamp:"FIELD VERIFIED"},{code:"MODEL NOTE / 2026.03",title:"Wave-Energy Boundary Inference",excerpt:"A public summary of boundary conditions used in the North Shelf simulation environment.",stamp:"OPEN DATA"},{code:"TECH MEMO / 2026.01",title:"Buoy Array Recovery Protocol",excerpt:"Inspection checklist and telemetry continuity procedure for offshore sensor redeployment.",stamp:"RELEASED"}],h=[{code:"DWR-0142",title:"Pressure cassette scan",format:"Verified copy",year:"1987 / restored 2026",status:"Public access",summary:"Recovered from the lower-array storage room and matched against two later service annotations to confirm pressure drift during early tank tests."},{code:"DWR-0201",title:"First coastal node diagram",format:"Restored plate",year:"1991 / plate series",status:"Conservation complete",summary:"Original routing artwork for the first coastal telemetry node, including hand-marked redundancies that were later removed from the production plan."},{code:"DWR-0330",title:"Signal room logbook",format:"Partial transcription",year:"1998 / field office",status:"Cross-reference pending",summary:"Manual observations from an anomalous current event, preserved for lineage review while a second operator log is being reconciled."},{code:"DWR-0447",title:"Wave tank calibration notes",format:"Public summary",year:"2004 / calibration deck",status:"Release approved",summary:"Calibration tolerances and offset decisions used to align the tank simulation program with modern publication thresholds."}],u=[12,18,14,26,18,34,21,16,28,18,12,24,31,19,15,27,42,24,18,22,16,30,36,20,14,18,12],i=(t,e=document)=>e.querySelector(t),d=(t,e=document)=>[...e.querySelectorAll(t)],v=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let g=l[0].id;function m(t,e=440,a=140){const r=Math.max(...t),o=Math.min(...t),s=e/(t.length-1);return t.map((n,c)=>{const f=(n-o)/(r-o||1),p=c*s,b=a-f*(a*.74)-a*.12;return`${c===0?"M":"L"} ${p.toFixed(2)} ${b.toFixed(2)}`}).join(" ")}function w(t){return l.find(e=>e.id===t)??l[0]}function y(t){g=t;const e=w(t),a=e.anchor?`<a class="button button--ghost map-dossier__action" href="#${e.anchor}">Open node</a>`:"";document.documentElement.style.setProperty("--active-zone-color",e.color),document.documentElement.dataset.activeZone=t,d(".node-card, [data-map-zone]").forEach(o=>{o.toggleAttribute("data-active",o.dataset.zone===t)});const r=i("#map-dossier");r&&(r.innerHTML=`
      <p class="kicker">ACTIVE NODE / ${e.id}</p>
      <h3>${e.title}</h3>
      <p class="map-dossier__label">${e.label}</p>
      <p>${e.summary}</p>
      <div class="map-dossier__footer">
        <dl>
          <div><dt>Status</dt><dd>${e.status}</dd></div>
          <div><dt>Accession</dt><dd>${e.accession}</dd></div>
          <div><dt>Coordinate</dt><dd>${e.coordinates}</dd></div>
        </dl>
        ${a}
      </div>
    `)}function R(t=!1){return`
    <svg class="facility-map-svg" viewBox="0 0 720 470" role="img" aria-label="${t?"compact research facility map":"interactive research facility map"}">
      <defs>
        <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#24171E" flood-opacity="0.16" />
        </filter>
        <pattern id="map-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#24171E" stroke-opacity=".08" stroke-width="1" />
        </pattern>
      </defs>
      <rect x="18" y="18" width="684" height="434" rx="18" fill="#F7E8C9" />
      <rect x="34" y="34" width="652" height="402" rx="12" fill="url(#map-grid)" />

      <path class="route-line route-line--a" d="M90 328H215c36 0 36-54 72-54h151c54 0 54-84 108-84h86" />
      <path class="route-line route-line--b" d="M84 174h98c72 0 72 146 144 146h312" />
      <path class="route-line route-line--c" d="M126 388h160c48 0 48-48 96-48h240" />

      ${l.map((a,r)=>{const s=[{x:108,y:94,w:144,h:96},{x:290,y:74,w:116,h:138},{x:470,y:100,w:128,h:96},{x:168,y:262,w:138,h:92},{x:352,y:268,w:132,h:110},{x:520,y:282,w:90,h:72}][r];return`
          <g class="map-zone" data-map-zone data-zone="${a.id}" tabindex="0" role="button" aria-label="${a.id} ${a.title}">
            <rect x="${s.x}" y="${s.y}" width="${s.w}" height="${s.h}" rx="${r===5?999:10}" fill="${a.color}" filter="url(#soft-shadow)" />
            <rect x="${s.x+10}" y="${s.y+10}" width="${Math.max(40,s.w-20)}" height="${Math.max(24,s.h-20)}" rx="${r===5?999:4}" fill="#F7E8C9" opacity=".34" />
            <text x="${s.x+18}" y="${s.y+30}" class="map-zone__id">${a.id}</text>
            <text x="${s.x+18}" y="${s.y+s.h-20}" class="map-zone__name">${a.title.toUpperCase()}</text>
          </g>
        `}).join("")}

      <g class="you-are-here" transform="translate(572 354)">
        <circle r="18" />
        <path d="M-34 0H-8M8 0h34M0-34v26M0 8v34" />
        <text x="-66" y="-26">YOU ARE HERE</text>
      </g>

      <text x="54" y="62" class="map-label">DWR FACILITY INDEX / PUBLIC ACCESS</text>
      <text x="484" y="426" class="map-label">ZONE SYNC: ${g}</text>
    </svg>
  `}function x(t=document){d("[data-map-zone]",t).forEach(e=>{const a=()=>y(e.dataset.zone);e.addEventListener("mouseenter",a),e.addEventListener("focus",a),e.addEventListener("click",a),e.addEventListener("keydown",r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),a())})})}function L(){const t=i("#facility-map");t&&(t.innerHTML=R(!0),x(t))}function O(){const t=i("#node-grid");t&&(t.innerHTML=l.map(e=>`
    <article class="node-card reveal" data-zone="${e.id}" style="--node-color: ${e.color}">
      <div class="node-card__topline">
        <span>${e.id}</span>
        <span>${e.status}</span>
      </div>
      <h3>${e.title}</h3>
      <p>${e.summary}</p>
      <footer>
        <span>${e.accession}</span>
        <span>${e.coordinates}</span>
      </footer>
    </article>
  `).join(""),d(".node-card",t).forEach(e=>{const a=()=>y(e.dataset.zone);e.addEventListener("mouseenter",a),e.addEventListener("focusin",a)}))}function _(){const t=i("#instrument-panel");if(!t)return;const e=m(u),a=E.map(r=>`
    <div class="metric-row">
      <span>${r.label}</span>
      <strong>${r.value}${r.unit}</strong>
      <i style="--metric-value:${Math.min(r.value,100)}%"></i>
    </div>
  `).join("");t.innerHTML=`
    <div class="instrument-panel__topline">
      <span>INSTRUMENT / DWR-SIG-02</span>
      <span>LIVE SIMULATION</span>
    </div>
    <div class="scope">
      <svg viewBox="0 0 440 140" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="scanGlow" x1="0" x2="1">
            <stop offset="0%" stop-color="#81CBBE" stop-opacity="0" />
            <stop offset="45%" stop-color="#81CBBE" stop-opacity=".96" />
            <stop offset="100%" stop-color="#F2CD88" stop-opacity=".72" />
          </linearGradient>
        </defs>
        <path class="scope__grid" d="M0 35H440M0 70H440M0 105H440M55 0V140M110 0V140M165 0V140M220 0V140M275 0V140M330 0V140M385 0V140" />
        <path class="scope__trace" d="${e}" />
        <path class="scope__trace scope__trace--glow" d="${e}" />
      </svg>
    </div>
    <div class="metrics">${a}</div>
    <div class="sonar-readout" aria-hidden="true">
      <span></span><span></span><span></span>
    </div>
  `}function D(){const t=i("#report-grid");t&&(t.innerHTML=M.map((e,a)=>`
    <article class="report-card reveal">
      <div class="report-card__stamp">${e.stamp}</div>
      <p class="kicker">${e.code}</p>
      <h3>${e.title}</h3>
      <p>${e.excerpt}</p>
      <a href="#contact" aria-label="Open report ${e.title}">Open report</a>
      <span class="report-card__number" aria-hidden="true">${String(a+1).padStart(2,"0")}</span>
    </article>
  `).join(""))}function I(){const t=i("#model-board"),e=i("#model-stack");if(!t||!e)return;const a=m(u,520,196),r=m(u.map((s,n)=>s+(n%5===0?7:-2)),520,196),o=m(u.map((s,n)=>s+Math.sin(n/3)*5),520,196);t.innerHTML=`
    <div class="model-board__topline">
      <span>MODEL ROOM / DWR-03-241</span>
      <span>REVISION B</span>
    </div>
    <div class="model-board__scope">
      <svg viewBox="0 0 520 196" preserveAspectRatio="none" aria-hidden="true">
        <path class="model-board__grid" d="M0 39H520M0 98H520M0 157H520M65 0V196M130 0V196M195 0V196M260 0V196M325 0V196M390 0V196M455 0V196" />
        <path class="model-board__trace model-board__trace--base" d="${a}" />
        <path class="model-board__trace model-board__trace--offset" d="${r}" />
        <path class="model-board__trace model-board__trace--long" d="${o}" />
      </svg>
    </div>
    <div class="model-board__stats">
      <div><span>Live inputs</span><strong>14 feeds</strong></div>
      <div><span>Forecast horizon</span><strong>72 hours</strong></div>
      <div><span>Variance lock</span><strong>4.2%</strong></div>
    </div>
  `,e.innerHTML=$.map(s=>`
    <article class="model-window reveal">
      <p class="kicker">${s.code}</p>
      <h3>${s.title}</h3>
      <p>${s.summary}</p>
      <footer>
        <span>${s.status}</span>
        <strong>${s.readout}</strong>
      </footer>
    </article>
  `).join("")}function A(){const t=i("#archive-list"),e=i("#archive-preview");if(!t||!e)return;const a=r=>{const o=h[r]??h[0];d("#archive-list button").forEach((s,n)=>{const c=n===r;s.toggleAttribute("data-active",c),s.setAttribute("aria-pressed",String(c))}),e.innerHTML=`
      <div class="archive-preview__topline">
        <span>${o.code}</span>
        <span>${o.status}</span>
      </div>
      <h3>${o.title}</h3>
      <p>${o.summary}</p>
      <dl>
        <div><dt>Format</dt><dd>${o.format}</dd></div>
        <div><dt>Date</dt><dd>${o.year}</dd></div>
      </dl>
    `};t.innerHTML=h.map((r,o)=>`
    <button type="button" data-archive-index="${o}" aria-pressed="false">
      <span>${r.code} / ${r.title}</span>
      <span>OPEN</span>
    </button>
  `).join(""),d("#archive-list button").forEach(r=>{r.addEventListener("click",()=>a(Number(r.dataset.archiveIndex)))}),a(0)}function C(){const t=d(".reveal");if(!t.length)return;if(v){t.forEach(a=>a.dataset.visible="true");return}const e=new IntersectionObserver(a=>{a.forEach(r=>{r.isIntersecting&&(r.target.dataset.visible="true",e.unobserve(r.target))})},{threshold:.18});t.forEach(a=>e.observe(a))}function S(){const t=i("#active-location"),e=d(".section-observed");if(!t||!e.length)return;const a=new IntersectionObserver(r=>{const o=r.filter(n=>n.isIntersecting).sort((n,c)=>c.intersectionRatio-n.intersectionRatio)[0];if(!o)return;t.textContent=`YOU ARE HERE / ${o.target.dataset.location}`;const s=o.target.id;d(".site-nav a").forEach(n=>{n.toggleAttribute("aria-current",n.getAttribute("href")===`#${s}`)})},{rootMargin:"-28% 0px -58% 0px",threshold:[.08,.2,.45]});e.forEach(r=>a.observe(r))}function N(){const t=i(".site-header");if(!t)return;const e=()=>t.dataset.elevated=String(window.scrollY>18);e(),window.addEventListener("scroll",e,{passive:!0})}function T(){d('a[href^="#"]').forEach(t=>{t.addEventListener("click",e=>{const a=i(t.getAttribute("href"));if(!a)return;e.preventDefault();const r=()=>{a.scrollIntoView({behavior:v?"auto":"smooth",block:"start"}),history.replaceState(null,"",t.getAttribute("href"))};document.startViewTransition&&!v?document.startViewTransition(r):r()})})}function P(t){const e=t.trim().toLowerCase();return e?/(archive|lineage|manual|scan|restored)/.test(e)?"Archive":/(report|paper|publication|release|memo)/.test(e)?"Publications":/(field|buoy|telemetry|sensor|deployment|array)/.test(e)?"Field Systems":/(model|forecast|current|climate|drift|simulation)/.test(e)?"Current Models":"Signal Lab":"Reception desk"}function F(t){const e=t.trim().length;return e?e>180?"Long-form briefing":e>80?"Standard briefing":"Rapid triage":"Intake required"}function V(t,e){if(!e)return{route:"Reception desk",priority:"Intake required"};const a=new FormData(t),r=Object.fromEntries(a),o=P(String(r.message??"")),s=F(String(r.message??"")),n=String(r.email??"").includes("@")?String(r.email).split("@")[1].toUpperCase():"UNVERIFIED";return e.innerHTML=`
    <div class="contact-preview__topline">
      <span>ROUTING PREVIEW</span>
      <span>DEMO CHANNEL</span>
    </div>
    <div class="contact-preview__grid">
      <div><span>Destination</span><strong>${o}</strong></div>
      <div><span>Priority</span><strong>${s}</strong></div>
      <div><span>Origin</span><strong>${n}</strong></div>
    </div>
  `,{route:o,priority:s}}function k(){const t=i(".contact-form"),e=i("#contact-preview"),a=i("#contact-status"),r=i(".contact-form button");if(!t||!e||!a||!r)return;const o=()=>V(t,e);o(),t.addEventListener("input",o),t.addEventListener("submit",s=>{s.preventDefault();const{route:n,priority:c}=o(),f=r.textContent,p=`DWR-RX-${String(Date.now()).slice(-6)}`;a.textContent=`${p} queued / ${n.toUpperCase()} / ${c.toUpperCase()}`,r.textContent=`Queued ${p}`,r.disabled=!0,window.setTimeout(()=>{r.textContent=f,r.disabled=!1},1800)})}function H(){L(),O(),_(),I(),D(),A(),y(g),C(),S(),N(),T(),k()}H();
