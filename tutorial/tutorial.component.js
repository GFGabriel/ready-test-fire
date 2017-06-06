/**
 * Created by georgeflauta on 6/4/17.
 */

(function() {
    angular.module('app')
        .component('tutorial', {
            controller: function() {
                console.log('tutorial controller is working')
            },
            template: `<p>Hello! Welcome to Ready, Test, Fire! Here you will write code in order to receive a reward or punish your rivals! Follow these easy steps for world domination! 
                       <br> 1. Follow the instructions in the prompt window. Be sure to use the language given. 
                       <br> 2. Click the submit button to test your code.
                       <br> 3. LAUNCH!!!</p>`
        })
})()