/// <reference path="C:\Users\valike23\documents\visual studio 2015\Projects\Hostel_allocation\Hostel_allocation\Scripts/angular.js" />
var app = angular.module("hostel", ["hostel.controller", "ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state("student", {
        url: "/student",
        templateUrl: './templates/student/student.htm',
        abstract: true
    }).
state("student.reciept", {
        url: "/reciept",
        templateUrl: './templates/student/reciept.htm',
    controller:"ticketCtrl"
}).
    state("student.dash", {
        url: "/",
        templateUrl: './templates/student/dash.htm',
        controller: "userDash"
    }).
     state("student.accommodation", {
         url: "/allocation",
         templateUrl: './templates/student/allocation.htm',
         controller: "allocationCtrl"
     }).
     state("student.addPayment", {
         url: "/add_payment",
         templateUrl: './templates/student/add_payment.htm',
         controller: "addPaymentCtrl"
     }).
    state("student.paymentDetails", {
        url: "/payment_details",
        templateUrl: './templates/student/payment_details.htm',
        controller: "detailsCtrl"
    }).
     state("staff", {
         url: "/staff",
         templateUrl: './templates/staff/staff.htm',
         abstract: true
     }).
     state("staff.home", {
         url: "/home",
         templateUrl: './templates/staff/home.htm',
         controller: "staff_home_ctrl"
     }).
     
    state("staff.allocate", {
        url: "/allocate",
        templateUrl: './templates/staff/allocate.htm',
        controller: "staff_allocate_ctrl"
    })

})