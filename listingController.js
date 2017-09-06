angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      var listing = {
        code : $scope.buildCode.toUpperCase(),
        name : $scope.buildName,
        coordinates : {
          latitude : $scope.buildLat,
          longitude : $scope.buildLong
        },
        address : $scope.buildAdd
      }

      $scope.listings.push(listing);
      $scope.listings.sort(function(a,b){
        return $scope.compareStrings(a.code, b.code);
      });
      document.getElementsByName('newListingForm')[0].reset();
      $scope.resetForm();
    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
    };

    $scope.showDetails = function(index) {
      document.getElementById('detBuildCode').innerText = $scope.listings[index].code;
      document.getElementById('detBuildName').innerText = $scope.listings[index].name;
      if($scope.listings[index].coordinates != null){
        document.getElementById('detBuildCoord').innerText = $scope.listings[index].coordinates.latitude + ", " + $scope.listings[index].coordinates.longitude;
      }else{
        document.getElementById('detBuildCoord').innerText = "";
      }
      if($scope.listings[index].address != null){
        document.getElementById('detBuildAdd').innerText = $scope.listings[index].address;
      }else{
        document.getElementById('detBuildAdd').innerText = "";
      }
      console.log($scope.listings[index]);
    };

    $scope.compareStrings = function(a,b){
      return (a < b)? -1 : (a > b)? 1 : 0;
    };

    $scope.resetForm = function() {
      $scope.buildCode = '';
      $scope.buildName = '';
      $scope.buildLat = '';
      $scope.buildLong = '';
      $scope.buildAdd = '';
    }
  }
]);