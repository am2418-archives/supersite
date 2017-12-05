function consoleType() {
var consoleLatest = eval(prompt("Input your code here."));
if(confirm("Do you want a return function of your code?")) {
alert(consoleLatest);
}
}

function bringItBack() {
if(location.hostname === "scratch.mit.edu") {
document.getElementsByTagName("a")[3].innerHTML = "Discuss";
document.getElementsByTagName("a")[3].href = "/discuss";
}
}

function gmailMoji() {
if(location.hostname === "mail.google.com") {
var divs = document.getElementsByTagName("div");
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
