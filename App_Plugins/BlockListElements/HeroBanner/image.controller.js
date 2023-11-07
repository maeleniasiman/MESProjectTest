(function () {
    "use strict";

    function bleImageController($scope, mediaResource, imageUrlGeneratorResource) {
        var vm = this;
        vm.content = $scope.block.data;
        vm.imageUrl = "";

        cropImage();

        $scope.$watch('block.data', function () {
            vm.content = $scope.block.data;
            cropImage();
        }, true);
        function cropImage() {
            if (vm.content.heroImage && vm.content.heroImage.length > 0) {
                mediaResource.getById(vm.content.heroImage[0].mediaKey)
                    .then((media) => {
                        imageUrlGeneratorResource.getCropUrl(media.mediaLink, 200, 200).then(
                            (result) => {
                                vm.imageUrl = result;
                            })
                    })
            } else {
                vm.imageUrl = "";
            }
        }
    }


    angular.module("umbraco").controller("bleImageController", bleImageController)
})(); 