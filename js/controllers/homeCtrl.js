app.controller("homeCtrl",function($scope){

    $scope.dtaped=function(){
        $scope.act="You double Taped ME!";
    }
    $scope.swiped=function(){
        $scope.act="You Swiped ME!";
    }
})