var app = angular.module('myApp');

app.directive('footer', function(){
    return{
        restrict:"E",
        template:`<div class="footer"><span>This | Is | Our | Awesome | Footer </span></div><style>
        .footer{
        border: 2px white solid;
        background-color: darkslategray;
        padding: 13px;
        margin: 40px 0px 0px 0px;
        text-align: center;
}</style>`,
        replace: false
    };
});