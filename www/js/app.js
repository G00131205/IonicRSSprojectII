// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('FeedController', function($scope, $http) {
    // init a empty scope variable 
    $scope.posts = [];
    
    // set the feed url
    var url = "https://alerts.weather.gov/cap/al.php?x=1";
    // set the url to google, to convert the cml feed to json
    var google_converter = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=";

    // start the request
    var request = $http.jsonp(google_converter+ encodeURIComponent(url));
    // after the request is successful
    request.success(function(res){
      // pass the requested entries to the view
      $scope.posts = res.responseData.feed.entries;
    });
});
