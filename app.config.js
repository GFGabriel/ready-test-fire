/**
 * Created by georgeflauta on 6/4/17.
 */
(function() {
    'use strict';

    angular.module('app').config(config)

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

    function config($stateProvider, $urlRouterProvider, $locationProvider){

        $locationProvider.html5Mode(true)

        $stateProvider
            .state('intro', {
                url: '/',
                component: 'signedInFrame',
            })
            .state('add', {
                url: '/new',
                component: 'addPost'
            })
        // etc...
    }
}());