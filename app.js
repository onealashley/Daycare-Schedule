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
        var iconUrl = "images/" + response[0].WeatherIcon + ".GIF";
        $(".weather").append("<img src=" + iconUrl + ">")
        $(".weather").append(" " + response[0].Temperature.Imperial.Value + "° F");
    });

}

var room1 = [
    {
        date: "12/17",
        name: "Tony",
        shift: "A",
        time: "7-5:30"
    },
    {
        date: "12/18",
        name: "Jane",
        shift: "B",
        time: "7-530"
    }
]

var room2 = [
    {
        date: "12/17",
        name: "Joey",
        shift: "A",
        time: "7-12"
    },
    {
        date: "12/17",
        name: "Cindy",
        shift: "B",
        time: "12-5:30"
    },
    {
        date: "12/18",
        name: "Carol",
        shift: "C",
        time: "7-12"
    },
    {
        date: "12/18",
        name: "Ingrid",
        shift: "D",
        time: "12-5:30"
    }
]


function tableLoop2(){
    for (i = 0; i < room2.length; i++) {
        if (room2[i].shift == "A"){
            $("#table2").append("<tr style=color:red><td>" + room2[i].date + "</td><td>" + room2[i].name + "</td><td>" + room2[i].shift + "</td><td>" + room2[i].time + "</td></tr>")
        } else if (room2[i].shift == "B"){
            $("#table2").append("<tr style=color:blue><td>" + room2[i].date + "</td><td>" + room2[i].name + "</td><td>" + room2[i].shift + "</td><td>" + room2[i].time + "</td></tr>")
        } else if (room2[i].shift == "C"){
            $("#table2").append("<tr style=color:yellow><td>" + room2[i].date + "</td><td>" + room2[i].name + "</td><td>" + room2[i].shift + "</td><td>" + room2[i].time + "</td></tr>")
        } else if (room2[i].shift == "D"){
            $("#table2").append("<tr style=color:green><td>" + room2[i].date + "</td><td>" + room2[i].name + "</td><td>" + room2[i].shift + "</td><td>" + room2[i].time + "</td></tr>")
        }
        
        
    }
}

function tableLoop(){
    for (i = 0; i < room1.length; i++) {
        if (room1[i].shift == "A"){
            $("#table1").append("<tr style=color:red><td>" + room1[i].date + "</td><td>" + room1[i].name + "</td><td>" + room1[i].shift + "</td><td>" + room1[i].time + "</td></tr>")
        } else if (room1[i].shift == "B"){
            $("#table1").append("<tr style=color:blue><td>" + room1[i].date + "</td><td>" + room1[i].name + "</td><td>" + room1[i].shift + "</td><td>" + room1[i].time + "</td></tr>")
        }
        
    }
}


$(document).ready(function(){
    datetime = $('.timeanddate');
    update();
    weatherUpdate();
    tableLoop();
    tableLoop2();
    setInterval(update, 1000);
    setInterval(weatherUpdate, 600000);
});