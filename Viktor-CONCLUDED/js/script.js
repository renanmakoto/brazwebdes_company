function NewTab() {
    window.open("https://www.instagram.com/br.animation/?hl=pt-br", "_blank");
}
function NewTab1() {
    window.open("https://www.behance.net/viktordanko", "_blank");
}
function NewTab2() {
    window.open("https://www.instagram.com/viktordanko_filmmaking/", "_blank");
}
function NewTab3() {
    window.open("https://www.youtube.com/channel/UCciJXedsOzE6MrXdEJiEWrA", "_blank");
}
function NewTab4() {
    window.open("https://www.facebook.com/viktorfilmmaker", "_blank");
}
function NewTab5() {
    window.open("https://www.instagram.com/dankoviktor/", "_blank");
}
function NewTab6() {
    window.open("https://br.linkedin.com/in/viktor-danko-perkusich-novaes", "_blank");
}
$(function(){
    $('#linkdivin a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;
        $('html.body').animation({'scrollTop':offSetTop});
    })
}
)
//function resizeAdapt(mw) {
//    if (mw.matches) {
//        document.getElementsByClass("h1").innerHTML = "Viktor Danko Filmmaking";
//    }
//}
//var mw = window.matchMedia("(max-width: 1100px)")