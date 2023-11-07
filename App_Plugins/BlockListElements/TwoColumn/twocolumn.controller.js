(function () {
    "use strict";

    function twoColumnController($scope) {
        var vm = this;

        vm.titleContent = $scope.block.data.title;
        vm.textContent = $scope.block.data.text;

        //vm.settings = $scope.block?.settingsData;

        vm.backgroundColor = $scope.block?.settingsData?.backgroundColor?.value;

        $scope.$watch('block.settingsData', function () {
            vm.backgroundColor = $scope.block?.settingsData?.backgroundColor?.value;
        }, true);
    }

    angular.module("umbraco").controller("twoColumnController", twoColumnController)
})();