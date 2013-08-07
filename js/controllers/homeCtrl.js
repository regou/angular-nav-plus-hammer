app.controller("homeCtrl",function($scope){
    console.log("aaa");
    $scope.angular="说明:";
    $scope.dtaped=function(){
        $scope.act="You double Taped ME!";
    }
    $scope.swiped=function(){
        $scope.act="You Swiped ME!";
    }
})