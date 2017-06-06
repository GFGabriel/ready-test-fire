/**
 * Created by georgeflauta on 6/5/17.
 */
(function() {
    angular.module('app')
        .controller('codingBlockController', codingBlockController)

    function codingBlockController() {
        console.log('codingBlock controller is working')
        const vm = this

        const code = $('.codemirror-textarea')[0]
        const editor = CodeMirror.fromTextArea(code, {
            theme: 'solarized',
            mode: 'javascript',
            lineNumbers: true,
            matchBrackets: true
        })

        vm.submitCode = function() {
            console.log('here is the code', vm.code)
            console.log(editor.getValue())
        }

        vm.testCode = editor.getValue()

        
    }
})()