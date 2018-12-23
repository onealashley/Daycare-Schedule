var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('MMM Do, h:mm:ss a'));
};

var weatherUpdate = function() {
    var APIKey = "GP3P0deAjGZK4NUi1B9Ba4TrlI5Xo96J"
    var queryUrl = "https://dataservice.accuweather.com/currentconditions/v1/331252?apikey=" + APIKey;

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        var iconUrl = "images/" + response[0].WeatherIcon + ".GIF";
        $(".weather").html("<img src=" + iconUrl + ">")
        $(".weather").append(" " + response[0].Temperature.Imperial.Value + "° F");
    });

}


var config = {
    apiKey: "AIzaSyC4A6FILCRXa2x6G-_8HxW7ItT7ImH08_8",
    authDomain: "daycare-room1.firebaseapp.com",
    databaseURL: "https://daycare-room1.firebaseio.com",
    projectId: "daycare-room1",
    storageBucket: "daycare-room1.appspot.com",
    messagingSenderId: "923749156376"
  };
  firebase.initializeApp(config);

  var room1Data = firebase.database();

  $("#submit").on("click", function () {
    var sDate = $("#date").val().trim();
    var sName = $("#name").val().trim();
    var sShift = $("#shift").val().trim();
    var sTime = $("#time").val().trim();

    var newSchedule = {
        date: sDate,
        name: sName,
        shift: sShift,
        time: sTime
    };

    room1Data.ref().push(newSchedule);

    console.log(newSchedule.date);
    console.log(newSchedule.name);
    console.log(newSchedule.shift);
    console.log(newSchedule.time);

    $("#date").val("");
    $("#name").val("");
    $("#shift").val("");
    $("#time").val("");

    $("#date2").val("");
    $("#name2").val("");
    $("#shift2").val("");
    $("#time2").val("");


    return false;
  });

  $("#submit2").on("click", function () {
    var sDate2 = $("#date2").val().trim();
    var sName2 = $("#name2").val().trim();
    var sShift2 = $("#shift2").val().trim();
    var sTime2 = $("#time2").val().trim();

    var newSchedule = {
        date2: sDate2,
        name2: sName2,
        shift2: sShift2,
        time2: sTime2
    };

    room1Data.ref().push(newSchedule);

    console.log(newSchedule.date);
    console.log(newSchedule.name);
    console.log(newSchedule.shift);
    console.log(newSchedule.time);

    return false;
  }); 

  room1Data.ref().on("child_added", function (childSnapshot, prevChildKey) {
      console.log(childSnapshot.val());

      var scheduleDate = childSnapshot.val().date
      var scheduleName = childSnapshot.val().name
      var scheduleShift = childSnapshot.val().shift
      var scheduleTime = childSnapshot.val().time
      
      var scheduleDate2 = childSnapshot.val().date2
      var scheduleName2 = childSnapshot.val().name2
      var scheduleShift2 = childSnapshot.val().shift2
      var scheduleTime2 = childSnapshot.val().time2
      
      

      if (scheduleShift == "A"){
        $("#table1").append("<tr style=background-color:red><td>" + scheduleDate + "</td><td>" + scheduleName + "</td><td>" + scheduleShift + "</td><td>" + scheduleTime + "</td></tr>")
    } else if (scheduleShift == "B"){
        $("#table1").append("<tr style=background-color:blue><td>" + scheduleDate + "</td><td>" + scheduleName + "</td><td>" + scheduleShift + "</td><td>" + scheduleTime + "</td></tr>");
    }

    if (scheduleShift2 == "A"){
        $("#table2").append("<tr style=background-color:red><td>" + scheduleDate2 + "</td><td>" + scheduleName2 + "</td><td>" + scheduleShift2 + "</td><td>" + scheduleTime2 + "</td></tr>")
    } else if (scheduleShift2 == "B"){
        $("#table2").append("<tr style=background-color:blue><td>" + scheduleDate2 + "</td><td>" + scheduleName2 + "</td><td>" + scheduleShift2 + "</td><td>" + scheduleTime2 + "</td></tr>");   
    } else if (scheduleShift2 == "C"){
        $("#table2").append("<tr style=background-color:yellow><td>" + scheduleDate2 + "</td><td>" + scheduleName2 + "</td><td>" + scheduleShift2 + "</td><td>" + scheduleTime2 + "</td></tr>"); 
    } else if (scheduleShift2 == "D"){
        $("#table2").append("<tr style=background-color:green><td>" + scheduleDate2 + "</td><td>" + scheduleName2 + "</td><td>" + scheduleShift2 + "</td><td>" + scheduleTime2 + "</td></tr>");
    }   
});    
        

$(document).ready(function(){
    datetime = $('.timeanddate');
    update();
    weatherUpdate();
    setInterval(weatherUpdate, 3600000);
    setInterval(update, 1000);
});