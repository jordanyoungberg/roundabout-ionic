angular.module('starter.controllers', ['ionic'])



.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
    
  $ionicModal.fromTemplateUrl('templates/go.html', {
      scope: $scope
  }).then(function(modal) {
      $scope.goModal = modal;
  });
    
	$ionicModal.fromTemplateUrl('templates/rate.html', {
      scope: $scope
  }).then(function(modal) {
      $scope.rateModal = modal;
  });
  $ionicModal.fromTemplateUrl('templates/car_setup.html', {
      scope: $scope
  }).then(function(modal) {
      $scope.carModal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
	
	$scope.closeRate = function() {
    $scope.rateModal.hide();
  };

  $scope.closeGo = function() {
      $scope.goModal.hide();
  };
  
  $scope.closeCar = function() {
      $scope.carModal.hide();
  };
  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
	
	$scope.rate = function() {
    $scope.rateModal.show();
  };
    
  $scope.go = function() {
      $scope.goModal.show();
  };
  
  $scope.car = function() {
      $scope.carModal.show();
  };
	
	$scope.badNews = false;
	
	$scope.toggleBadNews = function () {
		if ($scope.badNews===false) {
			$scope.badNews = true;
		} else {
			$scope.badNews = false;
		}
	};
    
  $scope.map = { center: { latitude: 45, longitude: - 73 }, zoom: 8 };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.goDrive = function() {
      console.log('Go drive clicked!');
          $timeout(function() {
        $scope.closeGo();
    }, 100);
  }
  
  $scope.goRide = function() {
      console.log('Go drive clicked!');
          $timeout(function() {
        $scope.closeGo();
    }, 100);
  }
    
  $scope.fbLogin = function() {
      openFB.login('email',
                function() {
                    alert('Facebook login succeeded');
                },
                function(error) {
                    alert('Facebook login failed: ' + error.error_description);
                });
    }
})



.controller('UserProfile', function($scope) {
    $scope.userProfile = [
        {
        firstName: "John",
        lastName: "Doe",
        pic: "img/userImage.jpg",
        carMake: "Make",
        carModel: "Model",
        carYear: "Year",
        carMPG: "MPG",
        carPic: "src"
    }
    ];
})


.controller('TripSettings', function($scope) {
    $scope.tripInfo = {
        seatsAvailable: "# of Available Seats",
        startingLocation: "Starting Location",
        endingLocation: "Destination",
        cargoCapacity: "Suitcases?",
        departureTime: "Start Date",
        arrivalTime: "Estimated TOA",
        pricePerSeat: "Money!",
        returnTrip: "One way?",
        returnStart: "Coming back on MM/DD/YYYY",
        returnArrival: "Should be back DATE"
    }
})

/*
.controller('MapCtrl', function($scope, $ionicLoading, $compile) {

    $scope.init = function() {
        var myLatlng = new google.maps.LatLng(43.07493,-89.381388);

        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);

        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.map = map;
    };

    // google.maps.event.addDomListener(window, 'load', initialize);

    $scope.centerOnMe = function() {
        if(!$scope.map) {
            return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
    };

    $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
    };
})
*/

.controller('MapCtrl', function($scope, $ionicLoading) {
  $scope.mapCreated = function(map) {
    $scope.map = map;
  };

  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };
})

.controller('RideboardCtrl', function($scope, $timeout, $ionicScrollDelegate) {
    $scope.rides = [
        {
            firstName:"Richard",
            rank: [1,2,3,4,5],
            age: "25",
            dateStamp: "3-25-2015",
            timeStamp: "4:00pm",
            pointA: "Cedar City, UT",
            pointB: "Salt Lake City, UT",
            rideDescription: "I heard there's a Lynyrd Skynyrd concert!",
            rideType: "Driver",
            price: "$5"            
        },
        {
            firstName:"Sara",
            rank: [1,2,3,4,5],
            age: "25",
            dateStamp: "3-25-2015",
            timeStamp: "4:00pm",
            pointA: "Cedar City, UT",
            pointB: "Salt Lake City, UT",
            rideDescription: "I heard there's a Lynyrd Skynyrd concert!",
            rideType: "Passenger",
            price: "$5"
        },
        {
            firstName:"John",
            rank: [1,2,3,4,5],
            age: "25",
            dateStamp: "3-25-2015",
            timeStamp: "4:00pm",
            pointA: "Cedar City, UT",
            pointB: "Salt Lake City, UT",
            rideDescription: "I heard there's a Lynyrd Skynyrd concert!",
            rideType: "Owner",
            price: "$5"
        }
    ];
    
    $scope.passengers = [
        {
            firstName:"Richard",
            rank: [1,2,3,4,5],
            age: "25",
            dateStamp: "3-25-2015",
            timeStamp: "4:00pm",
            pointA: "Cedar City, UT",
            pointB: "Salt Lake City, UT",
            rideDescription: "I heard there's a Lynyrd Skynyrd concert!",
            rideType: "Driver",
            price: "$5"            
        },
        {
            firstName:"Sara",
            rank: [1,2,3,4,5],
            age: "25",
            dateStamp: "3-25-2015",
            timeStamp: "4:00pm",
            pointA: "Cedar City, UT",
            pointB: "Salt Lake City, UT",
            rideDescription: "I heard there's a Lynyrd Skynyrd concert!",
            rideType: "Passenger",
            price: "$5"
        }
    ];
    
    $scope.myDrivers = [
        {
            firstName:"Richard",
            rank: [1,2,3,4,5],
            age: "25",
            dateStamp: "3-25-2015",
            timeStamp: "4:00pm",
            pointA: "Cedar City, UT",
            pointB: "Salt Lake City, UT",
            rideDescription: "I heard there's a Lynyrd Skynyrd concert!",
            rideType: "Driver",
            price: "$5"
        },
        {
            firstName:"Sara",
            rank: [1,2,3,4,5],
            age: "25",
            dateStamp: "3-25-2015",
            timeStamp: "4:00pm",
            pointA: "Cedar City, UT",
            pointB: "Salt Lake City, UT",
            rideDescription: "I heard there's a Lynyrd Skynyrd concert!",
            rideType: "Passenger",
            price: "$5"
        },
        {
            firstName:"John",
            rank: [1,2,3,4,5],
            age: "25",
            dateStamp: "3-25-2015",
            timeStamp: "4:00pm",
            pointA: "Cedar City, UT",
            pointB: "Salt Lake City, UT",
            rideDescription: "I heard there's a Lynyrd Skynyrd concert!",
            rideType: "Owner",
            price: "$5"
        }
    ];
    
        $scope.myPassengers = [
        {
            firstName:"Richard",
            rank: [1,2,3,4,5],
            age: "25",
            dateStamp: "3-25-2015",
            timeStamp: "4:00pm",
            pointA: "Cedar City, UT",
            pointB: "Ontario, CA",
            rideDescription: "I need to see some cold weather",
            rideType: "Driver",
            price: "$5"
        }
        ];
    
    $scope.toggleRide = function(ride) {
        if ($scope.isRideShown(ride)) {
            $scope.shownRide = null;
        } else {
            $scope.shownRide = ride;
        }
    };
    $scope.isRideShown = function(ride) {
        return $scope.shownRide === ride;
    };
})

.controller('ProfileCtrl', function($scope) {
    openFB.api({
        path: '/me',
        params: {fields: 'id,name'},
        success: function(user) {
            $scope.$apply(function() {
                $scope.user = user;
            });
        },
        error: function(error) {
            alert('Facebook error: ' + error.error_description);
        }
    });
});
;