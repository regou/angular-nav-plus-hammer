app.controller("headerCtrl",function($scope,$rootScope,$window){

    var headerCollapse=$("#my_headerCollapse");
    $rootScope.$on("$routeChangeStart",function(){
        try{headerCollapse.collapse('hide');}catch(e){}
    });

    $rootScope.$on("$routeChangeSuccess",function(angularEvent,current,previous){
        $scope.pageTitle=current.$$route['pageTitle'];
        if(previous){
            if(current.$$route['pageRole']=="main"){
                $scope.backTitle=null;
            }else{
                $scope.backTitle=previous.$$route['pageTitle'];
            }

        }
    });

    $scope.historyBack=function(){
        $window.history.back();
    }


})