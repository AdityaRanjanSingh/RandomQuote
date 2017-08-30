var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var clear = ["800"];

function getNewQuote(){
  console.log("ready");
   $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        console.log(response);
        $("#text").text(response.quoteText);
        $("#Author").text(response.quoteAuthor);
       var color = Math.floor(Math.random() * colors.length);
        $("body").animate({
        backgroundColor:colors[color],
        color:colors[color]},1000);
        $("#quoteContainer").animate({
        backgroundColor:colors[color],
        color:colors[color]},1000);
         $(".navigationButtons").animate({
        backgroundColor:colors[color],
        color:"white"},1000);
         $("#newQuoteButton").animate({
        backgroundColor:colors[color],
        color:"white"},1000);
        var twitterLink = "https://twitter.com/intent/tweet?text="+response.quoteText;
        $("#twitterButton").attr("href",twitterLink);
      }
  });
}

getNewQuote();
  $("#newQuoteButton").on("click",getNewQuote);