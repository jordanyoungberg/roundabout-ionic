angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
    
  $scope.fbLogin = function() {
      openFB.login(
      function(response) {
          if (response.status === 'connected') {
              console.log('Facebook login succeeded');
              $scope.closeLogin();
          } else {
              alert('Facebook login failed');
          }
      },
          {scope: 'email,publish_actions'});
  }
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
;