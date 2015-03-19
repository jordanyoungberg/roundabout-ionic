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
            firstName:"John",
            rank: [1,2,3,4,5],
            age: "25",
            dateStamp: "3-25-2015",
            timeStamp: "4:00pm",
            pointA: "Cedar City, UT",
            pointB: "Salt Lake City, UT",
            rideDescription: "I want to visit my long-distance girlfriend.",
            rideType: "Driver",
            price: "$5",
						img: "/img/profilepics/John.jpg"
        },
        {
            firstName:"Karl",
            rank: [1,2,3,4,5],
            age: "25",
            dateStamp: "3-27-2015",
            timeStamp: "4:00pm",
            pointA: "St George, UT",
            pointB: "Salt Lake City, UT",
            rideDescription: "I have friends at the U.",
            rideType: "Passenger",
            price: "$5",
						img: "/img/profilepics/Karl.jpg"
        }
    ];
    
    $scope.passengers = [
        {
            firstName:"Joan",
            rank: [1,2,3,4,5],
            age: "23",
            dateStamp: "3-27-2015",
            timeStamp: "3:00pm",
            pointA: "Salt Lake City, UT",
            pointB: "Cedar City, UT",
            rideDescription: "Surprising my long-distance boyfriend!",
            rideType: "Driver",
            price: "$5",
						img: "/img/profilepics/Joan.jpg"
        },
        {
            firstName:"Paul",
            rank: [1,2,3,4,5],
            age: "27",
            dateStamp: "3-27-2015",
            timeStamp: "3:15pm",
            pointA: "Cedar City, UT",
            pointB: "Tooele, UT",
            rideDescription: "I heard there's a Skrillix concert!",
            rideType: "Passenger",
            price: "$5",
						img: "/img/profilepics/Paul.jpg"
        },
        {
            firstName:"Doug",
            rank: [1,2,3,4,5],
            age: "21",
            dateStamp: "3-27-2015",
            timeStamp: "3:10pm",
            pointA: "Cedar City, UT",
            pointB: "Salt Lake City, UT",
            rideDescription: "Visiting family!",
            rideType: "Owner",
            price: "$5",
						img: "/img/profilepics/Doug.jpg"
        }
    ];
    
    $scope.myDrivers = [
        {
            firstName:"Me",
            rank: [1,2,3,4,5],
            age: "25",
            dateStamp: "3-27-2015",
            timeStamp: "3:00pm",
            pointA: "Cedar City, UT",
            pointB: "Orem, UT",
            rideDescription: "Visiting my UVU friends.",
            rideType: "Driver",
            price: "$5"
        }
    ];
    
        $scope.myPassengers = [
        {
            firstName:"Me",
            rank: [1,2,3,4,5],
            age: "25",
            dateStamp: "3-25-2015",
            timeStamp: "4:00pm",
            pointA: "Cedar City, UT",
            pointB: "Los Angeles, CA",
            rideDescription: "I want to visit my sister!",
            rideType: "Driver",
            price: "$5"
        }
        ];
	
			$scope.messageOne = [
				{
					firstName: "Paul",
					message: "I see you're going to Salt Lake.",
					timeStamp: "3:15pm",
					dateStamp: "3.7.15"
				},
				{
					firstName: "John",
					message: "That's the plan!",
					timeStamp: "3:23pm",
					dateStamp: "3.7.15"
				},
				{
					firstName: "Paul",
					message: "Cool. Mind if I tag along?",
					timeStamp: "3:30pm",
					dateStamp: "3.7.15"
				},
				{
					firstName: "John",
					message: "Sure. As long as we don't have to listen to Skrillex. Just hit the ride request, and I'll accept it.",
					timeStamp: "4:00pm",
					dateStamp: "3.7.15"
				}
			];
	
		$scope.messageTwo = [
			{
				firstName: "Doug",
				message: "Hi. You leaving Salt Lake at 3?",
					timeStamp: "1:15pm",
					dateStamp: "3.14.15"
			},
			{
				firstName: "John",
				message: "That's the plan. Gotta see the old lady.",
					timeStamp: "1:18pm",
					dateStamp: "3.14.15"
			},
			{
				firstName: "Doug",
				message: "Awesome. My girlfriend and I are wanting to go to draper to see the sharks",
					timeStamp: "1:30pm",
					dateStamp: "3.14.15"
			},
			{
				firstName: "John",
				message: "Sure, just have her request a ride, too.",
					timeStamp: "1:40pm",
					dateStamp: "3.14.15"
			},
			{
				firstName: "Doug",
				message: "Thanks, man!",
					timeStamp: "2:08pm",
					dateStamp: "3.14.15"
			},
			{
				firstName: "John",
				message: "Can you get to the University? We're all going to meet in the parking lot by the Library at 3pm.",
					timeStamp: "2:16pm",
					dateStamp: "3.14.15"
			},
			{
				firstName: "Doug",
				message: "Sure, see you then.",
					timeStamp: "2:30pm",
					dateStamp: "3.14.15"
			}
		];
	
		$scope.toggleMessage = function(msgNum) {
        if ($scope.isMessageShown(msgNum)) {
            $scope.shownMessage = null;
        } else {
            $scope.shownMessage = msgNum;
        }
    };
    $scope.isMessageShown = function(msgNum) {
        return $scope.shownMessage === msgNum;
    };
    
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