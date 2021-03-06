angular.module('app').service('modalSer', function() {

    var body = document.getElementsByTagName('body')[0],
        curtain = document.getElementById('modal-curtain'),
        openModal;

    this.openModal = function(modalName, css) {
        openModal = document.getElementsByTagName(modalName)[0];
        for (var key in css) {
            openModal.style[key] = css[key];
        }
        body.style.overflow = 'hidden';
        openModal.style.visibility = 'visible';
        curtain.style.visibility = 'visible';
    };

    this.closeModal = function() {
        body.style.overflow = '';
        openModal.style.visibility = 'hidden';
        curtain.style.visibility = 'hidden';
    };

})