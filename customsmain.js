var myWindow;
function specialAlert(a) {
    var myWindow = window.open("", "", "width=200,height=100");
    myWindow.document.write("<script src='https://rawgit.com/amazinigmech2418/SuperSite/master/init.js'></script><script src='https://rawgit.com/amazinigmech2418/mobilescratch/master/supersitemain.js'></script><button onclick='window.close();'>Close</button><br/>"+a);
}
var htmlData = "<button onclick='bringItBack(); window.close();'>#BringItBack</button><br/><button onclick='consoleType(); window.close();'>JS Console</button><br/><button onclick='gmailMoji(); window.close();'>gmail -> emojis [broken]</button><br/><button onclick='phosphorus(); window.close();'>mobileScratch</button><br/>";
var scriptdata = "";
function setscripts() {
for(var i=0; i<customsURLs.length; i++) {
scriptdata+="<script src='"+customsURLs[i]+"'></script>";
}
}
setscripts();
specialAlert(scriptdata+customHTMLs);
