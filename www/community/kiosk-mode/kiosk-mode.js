"use strict";var t=document.querySelector("home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot,e=t.querySelector(
"partial-panel-resolver"),i=t.querySelector("app-drawer-layout");function c(){var e=t.querySelector("ha-panel-lovelace")
;return e&&e.lovelace.config.kiosk_mode?e.lovelace.config.kiosk_mode:{}}function d(e){var o=window.location.href;return e.some(function(e){
return o.includes(e)})}function l(e){return e&&!e.querySelector("#kiosk_mode")}function s(e,o){var n=document.createElement("style");n.setAttribute(
"id","kiosk_mode"),n.innerHTML=e,o.appendChild(n),window.dispatchEvent(new Event("resize"))}function u(e,o){window.localStorage.setItem(e,o)}
function h(e){return"true"==window.localStorage.getItem(e)}function o(){var e,o,n,a,r=window.location.href;r.includes("disable_km")||(n=h("kmHeader"
)||d(["kiosk","hide_header"]),a=h("kmSidebar")||d(["kiosk","hide_sidebar"]),o=c(),n=(e=a||n)?n:o.kiosk||o.hide_header,((a=e?a:o.kiosk||o.hide_sidebar
)||n)&&(o=(o=t.querySelector("ha-panel-lovelace"))?o.shadowRoot.querySelector("hui-root").shadowRoot:null,n&&l(o)&&(s(
"#view { min-height: 100vh !important } app-header { display: none }",o),r.includes("cache")&&u("kmHeader","true")),a&&l(i)&&(s(
":host { --app-drawer-width: 0 !important } #drawer { display: none }",i),r.includes("cache")&&u("kmSidebar","true"))))}function n(e){e.forEach(
function(e){e.addedNodes.forEach(function(e){"ha-panel-lovelace"==e.localName&&new MutationObserver(a).observe(e.shadowRoot,{childList:!0})})})}
function a(e){e.forEach(function(e){e.addedNodes.forEach(function(e){"hui-root"==e.localName&&new MutationObserver(r).observe(e.shadowRoot,{
childList:!0})})})}function r(e){e.forEach(function(e){e.addedNodes.forEach(function(e){"ha-app-layout"==e.localName&&o()})})}
window.location.href.includes("clear_km_cache")&&["kmHeader","kmSidebar"].forEach(function(e){return u(e,"false")}),o(),new MutationObserver(n
).observe(e,{childList:!0}),console.info("%c  KIOSK-MODE   \n%c Version 1.3.1 ","color: orange; font-weight: bold; background: black",
"color: white; font-weight: bold; background: dimgray");