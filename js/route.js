app.config(function($routeProvider) {
        $routeProvider
            .when("/one", {
                templateUrl: "content/page1.html",
                transition: "slide",
                reverse: false
            })
            .when("/two", {
                templateUrl: "content/page2.html",
                transition: "modal" //this is overwritten by the go() in home.html
            })
            .when("/popup", {
                templateUrl: "content/popup.html",
                transition: "modal"
            })
            .when("/monkey", {
                templateUrl: "content/monkey.html"
            })
            .when("/backwards", {
                templateUrl: "content/backwards.html",
                reverse: true
            }).when("/", {
                templateUrl: "content/home.html"

            })
            .otherwise({
                redirectTo: "/"
            });
    })

