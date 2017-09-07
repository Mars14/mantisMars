angular.module('app').controller('app_issuereport', app_issuereport);
function app_issuereport($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.submitReport = function() {
        //app.action('issuereport', 'submit', this)
        //$scope.data.submit = 'hello'; 
        app.call('issuereport.submitReportCall', $scope.data);
    }
}