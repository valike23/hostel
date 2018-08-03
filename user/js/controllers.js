/// <reference path="C:\Users\valike23\documents\visual studio 2015\Projects\Hostel_allocation\Hostel_allocation\Scripts/angular.js" />
angular.module("hostel.controller", []).controller('loginCtrl', function ($scope, $http, $state, $rootScope) {
    $scope.login = function () {
        var details = {
            matno: $scope.user,
            password: $scope.password
        };
        $http.post("http://localhost:5436/api/login", details).then(function (res) {
            alert(res.data);
            var data = res.data;
            var json = JSON.stringify(res.data);
            sessionStorage.setItem('user', json);
            
            $http.get("http://localhost:5436/api/reciepts/" + data.Id).then(function (rest) {
                var reciept = JSON.stringify(rest.data);
                sessionStorage.setItem('ticket', reciept);
                location.href = "http://localhost:5436/landingPage.html#/student/";
            })
            
            
        })
    }
}).
controller('userDash', function ($rootScope, $scope, $state) {
    $rootScope.title = "Homepage_UNIBEN_Hostel";
    $rootScope.user = JSON.parse(sessionStorage.getItem("user"));
    $rootScope.tickets = JSON.parse(sessionStorage.getItem("ticket"));
   // console.log($rootScope.user)
    $scope.navig = function (vna) {
        
        $state.go(vna)
    }

}).
controller("allocationCtrl", function ($rootScope, $scope, $http) {
    $http.post('http://localhost:5436/api/')
    $rootScope.title = "UNIBEN_Hostel_accommodation";
}).
controller("ticketCtrl", function ($scope, $rootScope, $state) {
    $scope.ticket = function (ticket) {
        if (ticket.Payment_state == "Paid      ") {
            ticket.test = false;
        }
        else {
            ticket.test = true;
        }
        $rootScope.tick = ticket;
        $state.go("student.paymentDetails")

    }
    
}).
controller("detailsCtrl", function ($scope, $rootScope, $state) {
    var test = $rootScope.tick;
    
    
}).
controller("allocationCtrl", function ($scope, $http, $state, $rootScope) {
    $scope.test = true;
    var user = $rootScope.user;
    $scope.close = function () {
        $scope.test = false;
    }
    $scope.allocate = function () {


        $http.put("http://localhost:5436/api/login/" + user.Id).then(function (res) {
            alert(res.data)
        })
    }
}).
controller("staff_home_ctrl", function ($scope) {

}).

controller("staff_allocate_ctrl", function ($scope) {

})