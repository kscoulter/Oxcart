// STARTER CODE
var apiKey = 'cq2aqk86k8jsdfafqjkaa7d4';
var stations = 'https://api.wmata.com/Rail.svc/json/jStations?api_key='+apiKey;
 // populate the select

//when a user selects a station get the station prediections.
	//var status = 'https://api.wmata.com/StationPrediction.svc/json/GetPrediction/'+station+'?api_key='+apiKey;



// // ANSWER
//
// var apiKey = 'cq2aqk86k8jsdfafqjkaa7d4';
// var stations = 'https://api.wmata.com/Rail.svc/json/jStations?api_key=' + apiKey;
//
// $(function () {
//     $('.form-control').change(lookupStatus);
//     // request json file
//     $.ajax({
//         url: stations,
//     }).done(function (data) {
//         var html = $('.form-control').html();
//         for (var i = 0; i < data.Stations.length; i++) {
//             html += "<option value='" + data.Stations[i].Code + "'>" + data.Stations[i].Name + "</option>";
//         }
//
//         $('.form-control').html(html)
//         console.log(data);
//     });
//
//
//     // populate the select
// });
//
// function lookupStatus() {
//     console.log('lookup', $('.form-control').val());
//     var station = $('.form-control').val();
//     var status = 'https://api.wmata.com/StationPrediction.svc/json/GetPrediction/' + station + '?api_key=' + apiKey;
//     $.ajax({
//         url: status,
//     }).done(function (data) {
//         var html = "<tr><th>Destination</th><th>Min</th><th>Cars</th></tr>";
//         for (var i = 0; i < data.Trains.length; i++) {
//             var destination = data.Trains[i].DestinationName;
//             var min = data.Trains[i].Min;
//             var cars = data.Trains[i].Car;
//             html += "<tr><td>" + destination + "</td><td>" + min + "</td><td>" + cars + "</td></tr>";
//             console.log(data.Trains[i].LocationName);
//         }
//         $('.table').html(html);
//     });
//
// }
