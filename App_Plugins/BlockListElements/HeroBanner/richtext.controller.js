(function () {
    "use strict";

    function richtextController($scope) {
        var vm = this;

        vm.richTextContent = $scope.block.data.heroText;

        //vm.settings = $scope.block?.settingsData;

        vm.backgroundColor = $scope.block?.settingsData?.backgroundColor?.value;

        $scope.$watch('block.settingsData', function () {
            vm.backgroundColor = $scope.block?.settingsData?.backgroundColor?.value;
        }, true);
    }

    angular.module("umbraco").controller("richtextController", richtextController)
})();