(function() {
var isLocalStorageSupported = typeof Storage !== "undefined";

if (!isLocalStorageSupported) {
  return;
}

ga("send", "event", "Scroll Max", localStorage.getItem("maxS")+"%", localStorage.getItem("maxD")+" px", {
  nonInteraction: 1,
  dimension31: localStorage.getItem("Page_URL"),
  dimension6: localStorage.getItem("cd6_SiteSection"),
  dimension7: localStorage.getItem("cd7_Topic"),
  dimension9: localStorage.getItem("cd9_TestExperience"),
  dimension29: localStorage.getItem("cd29_LUNAid"),
  dimension24:   localStorage.getItem("Login_State"),
  contentGroup1: localStorage.getItem("site_section"),
  contentGroup2: localStorage.getItem("page_type"),
  metric3: localStorage.getItem("maxT"),
  metric4: localStorage.getItem("maxD"),
});

var maxS = 0;
var maxD = 0;

// Put the objects into storage
localStorage.setItem("maxS", 0);
localStorage.setItem("maxD", 0);
localStorage.setItem("maxT", 0);
localStorage.setItem("Page_URL", {{Page URL}});
localStorage.setItem("cd6_SiteSection", {{cd6_SiteSection}});
localStorage.setItem("cd7_Topic", {{cd7_Topic}});
localStorage.setItem("cd9_TestExperience", {{cd9_TestExperience}});
localStorage.setItem("cd29_LUNAid", {{cd29_LUNAid}});
localStorage.setItem("Login_State", {{Login State}});
localStorage.setItem("site_section", {{site_section}});
localStorage.setItem("page_type", {{page_type}});

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

function amountscrolled() {
  var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight,
      docheight = getDocHeight(),
      scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop,
      trackLength = docheight - winheight,
      pctScrolled = (Math.round(Math.floor(scrollTop/trackLength * 100) / 10) * 10); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0,

  if (pctScrolled > maxS || docheight > maxD) {
    maxS = pctScrolled;
	  localStorage.setItem("maxS", pctScrolled);
    maxD = docheight;

    localStorage.setItem("maxD", docheight);
    localStorage.setItem("maxT", scrollTop);
  }

  // console.log("You have scrolled the page by: " + pctScrolled +"% | "+maxS+"% | doc: "+docheight);
}


$(window).scroll(function (event) {
  amountscrolled();
});

}());
