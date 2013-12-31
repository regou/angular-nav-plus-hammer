/*启动angular*/
var app=angular.module('regou.anph', ['ajoslin.mobile-navigate','hmTouchEvents','regou.ajaxNormalizer']);


app.config(['$httpProvider',function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

app.controller('MainCtrl',['$scope', '$navigate',function($scope, $navigate) {
    $scope.$navigate = $navigate;
}]);

/*导航动画
* 用法：添加"nav-to"属性 "ani"属性（动画）ani属性值前加符号为反向
* */
app.directive("navTo",['$navigate', function($navigate){
    return {
        restrict: 'A',
        link: function (scope,element,attrs) {
            Hammer(element[0]).on("tap",function(){
                var path=attrs['navTo'];
                var animate=attrs.ani;
                if(path=='back'){
                    scope.$apply(function(){$navigate.back()});
                }else{
                    if(animate && animate.substr(0, 1) == "-"){
                        animate=animate.substr(1);
                        scope.$apply(function(){$navigate.go(path,animate,true)});
                    }else{
                        scope.$apply(function(){$navigate.go(path,animate)});
                    }

                }

            })
        }
    }
}]);


