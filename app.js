var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
    
$routeProvider
.when('/',{
controller: 'mainCtrl',
templateUrl: 'httpView.html'
})

    .when('/palindromeView',{
controller: 'secondCtrl',
templateUrl: 'palidromeView.html'
})
.otherwise({ 
    template: '<h1>Error</h1><img src= "https://assets.hongkiat.com/uploads/funny-creative-error-404/27-error-404-page.jpg"><style> img {width: 1000px}</style><style>img {height: 600px</style>'});

$locationProvider.hashPrefix('');
});