function consoleType() {
var consoleLatest = window.opener.eval(prompt("Input your code here."));
if(window.opener.confirm("Do you want a return function of your code?")) {
window.opener.alert(consoleLatest);
}
}

function bringItBack() {
if(window.opener.location.hostname === "scratch.mit.edu") {
window.opener.document.getElementsByTagName("a")[3].innerHTML = "Discuss";
window.opener.document.getElementsByTagName("a")[3].href = "/discuss";
}
}

function gmailMoji() {
if(window.opener.location.hostname === "mail.google.com") {
var divs = window.opener.document.getElementsByTagName("div");
for(i=0;i<divs.length;i++){
divs[i].innerHTML = "10110101001010";
}
}
}

var scratch = {
love: function(project) {$.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/lovers/"+project+"/add/",data: {usernames: Scratch.INIT_DATA.LOGGED_IN_USER.model.username}})},
fave: function(project) {$.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/favoriters/"+project+"/add/",data: {usernames: Scratch.INIT_DATA.LOGGED_IN_USER.model.username}})},
followUser: function(user) {$.ajax({type: "PUT",url: "https://scratch.mit.edu/site-api/users/followers/"+user+"/add/",data: {usernames: Scratch.INIT_DATA.LOGGED_IN_USER.model.username}})}
};
