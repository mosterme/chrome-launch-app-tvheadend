var i = document.getElementById("i");
var b = document.getElementById("b");

window.addEventListener("load", l);

function c() {
    chrome.tabs.update({ url: "g.html" });
}

function i18n(id, name) {
    document.getElementById(id).innerHTML = chrome.i18n.getMessage(name);
}

function l() {
    var u; try { u = localStorage.h; i.value = u } catch (d) {}
    if (b && i) {
        i18n("h1", "options");
        i18n("h4", "url");
        i18n("b", "save");
        i18n("d", "desc");
        i18n("g", "github");
        i18n("h", "tvhead");
        i18n("l", "link");
        i18n("s", "simply");
        document.title = chrome.i18n.getMessage("options");
        b.addEventListener("click", c);
        i.addEventListener("blur", s);
    } else {
        window.location = u ? u : "o.html";
    }
}

function s() {
    localStorage.h = i.value;
}