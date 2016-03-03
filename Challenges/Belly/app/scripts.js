// console.log('Custom JS');

// console.log('jquery');



// https://api.foursquare.com/v2/venues/search?client_id=30LBYWKRZMLGNLGBWLSCZQEAOYEZGXEM5PPNHNFIT5YQTQAO&client_secret=KPWQJHS40HC0GZFDXFOEH55JS1DL4CJ1VWHMOAPXBAFFJTHG&v=20130815%20&near=Washington,DC

// get device location
// ajax request to foursquare
// render the response
  // title of business
  // image
  // distance from device --> write function
  // category
  // category icon/
  // open/closed
  var app = {
    fourSquareUrl: "https://api.foursquare.com/v2/venues/search?client_id=30LBYWKRZMLGNLGBWLSCZQEAOYEZGXEM5PPNHNFIT5YQTQAO&client_secret=KPWQJHS40HC0GZFDXFOEH55JS1DL4CJ1VWHMOAPXBAFFJTHG&v=20130815%20&ll=",
    deviceLat: "",
    deviceLon: "",
    queryUrl: "",
    venueArray: [],
    getQueryUrl: function(){
      navigator.geolocation.getCurrentPosition(app.locatorSuccess, app.locatorError);
    },
    locatorSuccess: function(pos){
      var crd = pos.coords;
      app.deviceLat = crd.latitude;
      app.deviceLon = crd.longitude;
      app.queryUrl = app.fourSquareUrl + app.deviceLat + "," + app.deviceLon;
      app.getNearbyPlaces()
    },
    locatorError: function(){
      console.warn('ERROR(' + err.code + '): ' + err.message);
    },
    getNearbyPlaces: function(){
      $.ajax({url: app.queryUrl, success: function(result){
           var venues = result.response.venues;
           var size = "110x110"
           for(var i=0; i < venues.length; i++){
             var venue = {};
             venue.title = venues[i].name;
            //  venue.image = venues[i].specials.items.page.photo.prefix + size + venues[i].specials.items.page.photo.suffix;
            //  venue.distance =
            venue.category = venues[i].categories[0] ? venues[i].categories[0].name : "none"
             ;
            //  venue.category_icon = venues[i].categories.icon.prefix
             venue.currently_here = venues[i].hereNow.count;
             app.venueArray.push(venue)
           }
           console.log(app.venueArray);

         }
      });
    }

 };
 app.getQueryUrl();

//# sourceMappingURL=scripts.js.map
