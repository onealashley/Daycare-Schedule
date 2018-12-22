var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('MMM Do, h:mm:ss a'));
};

var weatherUpdate = function() {
    var APIKey = "GP3P0deAjGZK4NUi1B9Ba4TrlI5Xo96J"
    var queryUrl = "http://dataservice.accuweather.com/currentconditions/v1/331252?apikey=" + APIKey;

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        console.log(response[0].WeatherIcon);
        var iconUrl = "images/0" + response[0].WeatherIcon + ".GIF";
        $(".weather").append("<img src=" + iconUrl + ">")
        $(".weather").append(" " + response[0].Temperature.Imperial.Value + "° F");
    });

}

$(document).ready(function(){
    datetime = $('.timeanddate');
    update();
    weatherUpdate();
    setInterval(update, 1000);
});