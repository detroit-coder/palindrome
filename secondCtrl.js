var app = angular.module("myApp");

app.controller('secondCtrl', function ($scope) {
   $scope.save = function(){ 

var removeChar = $scope.myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();


var checkPalindrome = removeChar.split('').reverse().join('');



if(removeChar === checkPalindrome){
  
    
 $scope.message = $scope.myString + "  is a palindrome";

}else{
  
$scope.message = $scope.myString + "  is NOT a palindrome";
}
       $scope.myString = '';
}

});
    

