app.config(function($routeProvider) {
        $routeProvider
            .when("/one", {
                templateUrl: "content/page1.html",
                pageTitle:"Page1",
                transition: "slide",
                reverse: false
            })
            .when("/two", {
                templateUrl: "content/page2.html",
                pageTitle:"Page2",
                transition: "modal" //this is overwritten by the go() in home.html
            })
            .when("/popup", {
                templateUrl: "content/popup.html",
                pageTitle:"Popup",
                transition: "modal"
            })
            .when("/monkey", {
                templateUrl: "content/monkey.html"
            })
            .when("/backwards", {
                templateUrl: "content/backwards.html",
                pageTitle:"backwards",
                reverse: true
            })
            .when("/", {
                templateUrl: "content/home.html",
                pageRole:"main",
                pageTitle:"MainPage"

            })
            .otherwise({
                redirectTo: "/"
            });
    })

