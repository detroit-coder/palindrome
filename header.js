var app = angular.module('myApp');

app.directive('header', function(){
    return{
        restrict:"E",
        template:`<div class="header"><span>This | Is | Our | Awesome | Header </span></div><style>
        .header{
        border: 2px white solid;
        background-color: darkslategray;
        padding: 13px;
        margin: 0px 0px 40px 0px;
        text-align: center;
}</style>`,
        replace: false
    };
});