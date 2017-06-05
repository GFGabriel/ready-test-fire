/**
 * Created by georgeflauta on 6/4/17.
 */

(function() {
    angular.module('app')
        .component('prompt', {
            controller: function() {
                console.log('prompt controller is working')
            },
            template: `
                        <h1>PROMPT:</h1>
                        <h4> Language: JavaScript </h4>
                        <p>Write a function that takes in an array and returns all of the even nummbers.</p>`
        })
})()