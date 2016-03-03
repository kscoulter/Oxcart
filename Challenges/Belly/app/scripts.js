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

  var FourSquareUrl = "https://api.foursquare.com/v2/venues/search?client_id=30LBYWKRZMLGNLGBWLSCZQEAOYEZGXEM5PPNHNFIT5YQTQAO&client_secret=KPWQJHS40HC0GZFDXFOEH55JS1DL4CJ1VWHMOAPXBAFFJTHG&v=20130815%20&near=Washington,DC"
  $.ajax({url: FourSquareUrl, success: function(result){
       var venues = result.response.venues;
       var venueArray = [];
       var size = "110x110"
       for(var i=0; i < venues.length; i++){
         var venue = {};
         venue.title = venues[i].name;
        //  venue.image = venues[i].specials.items.page.photo.prefix + size + venues[i].specials.items.page.photo.suffix;
        //  venue.distance =
         venue.category = venues[i].categories[0].name;
        //  venue.category_icon = venues[i].categories.icon.prefix
         venue.currently_here = venues[i].hereNow.count;
         venueArray.push(venue)
       }

   }});

//# sourceMappingURL=scripts.js.map
