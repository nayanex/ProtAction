var app = angular.module('nikeStoreApp',['ui.bootstrap']);

app.controller('carouselController', function($scope, dataService) {
  $scope.myInterval = 0000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];  
  var currIndex = 0;
  
  var items = [
    {
      'image': "images/frame1.png",
    },
    {
      'image': "images/frame2.png",
    },
    {
      'image': "images/frame3.png",
    },
    {
      'image': "images/frame4.png",
    },
    {
      'image': "images/frame5.png",
    },
    {
      'image': "images/frame1.png",
    },
    {
      'image': "images/frame2.png",
    },
    {
      'image': "images/frame3.png",
    },
    {
      'image': "images/frame4.png",
    }
    ];

  $scope.addSlide = function(items) {
    console.log(items)
    console.log(i)

    slides.push({
      'image1': items[i].image,
      'image2': items[i + 1].image,
      'image3': items[i + 2].image,
      'image4': items[i + 3].image,
      'image5': items[i + 4].image,
      'id': currIndex++
    });
  };

  for (var i = 0; i < 5; i ++) {
    $scope.addSlide(items);
  }

});

app.service('dataService', ['$http', function($http) {
  
}]);

