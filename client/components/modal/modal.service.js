'use strict';

angular.module('logistaApp')
  .factory('Modal', function ($rootScope, $modal, $translate) {
    /**
     * Opens a modal
     * @param  {Object} scope      - an object to be merged with modal's scope
     * @param  {String} modalClass - (optional) class(es) to be applied to the modal
     * @return {Object}            - the instance $modal.open() returns
     */
    function openModal(scope, modalClass) {
      var modalScope = $rootScope.$new();
      scope = scope || {};
      modalClass = modalClass || 'modal-default';

      angular.extend(modalScope, scope);

      return $modal.open({
        templateUrl: 'components/modal/modal.html',
        windowClass: modalClass,
        scope: modalScope
      });
    }

    // Public API here
    return {

      /* Confirmation modals */
      confirm: {

        /**
         * Create a function to open a delete confirmation modal (ex. ng-click='myModalFn(name, arg1, arg2...)')
         * @param  {Function} del - callback, ran when delete is confirmed
         * @return {Function}     - the function to open the modal (ex. myModalFn)
         */
        delete: function(del) {
          del = del || angular.noop;

          /**
           * Open a delete confirmation modal
           * @param  {String} name   - name or info to show on modal
           * @param  {All}           - any additional args are passed straight to del callback
           */
          return function() {
            var args = Array.prototype.slice.call(arguments),
                name = args.shift(),
                deleteModal;

            deleteModal = openModal({
              modal: {
                dismissable: true,
                title: 'Confirm Delete',
                html: '<p>Are you sure you want to delete <strong>' + name + '</strong> ?</p>',
                buttons: [{
                  classes: 'btn-danger',
                  text: 'Delete',
                  click: function(e) {
                    deleteModal.close(e);
                  }
                }, {
                  classes: 'btn-default',
                  text: 'Cancel',
                  click: function(e) {
                    deleteModal.dismiss(e);
                  }
                }]
              }
            }, 'modal-danger');

            deleteModal.result.then(function(event) {
              del.apply(event, args);
            });
          };
        },

        login: function(login) {
          login = login || angular.noop;

          /**
           * Open a delete confirmation modal
           * @param  {String} name   - name or info to show on modal
           * @param  {All}           - any additional args are passed straight to del callback
           */
          return function() {
            var args = Array.prototype.slice.call(arguments),
              name = args.shift(),
              loginModal;

            loginModal = openModal({
              modal: {
                dismissable: true,
                title: 'Palun logi sisse',
                html: '<form role="form">'+
                      '<div class="form-group">'+
                      '<label for="email">Email address</label>'+
                      '<input type="email" class="form-control" id="email" placeholder="Enter email" />'+
                      '</div>'+
                      '<div class="form-group">'+
                      '<label for="password">Password</label>'+
                      '<input type="password" class="form-control" id="password" placeholder="Password" />'+
                      '</form>',
                buttons: [{
                  classes: 'btn-primary',
                  text: 'Login',
                  click: function(e) {
                    loginModal.close(e);
                  }
                }, {
                  classes: 'btn-default',
                  text: 'Cancel',
                  click: function(e) {
                    loginModal.dismiss(e);
                  }
                }]
              }
            });

            loginModal.result.then(function(event) {
              login.apply(event, args);
            });
          };
        },


      askToLogin: function(cb) { //my new modal
        cb = cb || angular.noop;
        return function() {
          var args = Array.prototype.slice.call(arguments),
            name = args.shift(), theModal;
          theModal = openModal({ //openModal is a function the modal service defines.  It is just a wrapper for $Modal
            modal: {
              dismissable: true,
              title: 'Login',
              html: '<p><span translate>Modal_text_start</span><strong>' + name + '</strong><span translate>Modal_text_end</span></p>', //set the modal message here, name is the parameter we passed in
              //html: '<p>Kui soovite seda teha, siis on vaja logi sisse.</p>', //set the modal message here, name is the parameter we passed in
              buttons: [ {//this is where you define you buttons and their appearances
                classes: 'btn-warning',
                text: 'Cancel',
                click: function(event) {
                  theModal.dismiss(event);
                }
              },{
                classes: 'btn-primary',
                text: 'Login',
                click: function(event) {
                  theModal.close(event);
                }
              },]
            }
          }, 'modal-primary');
          theModal.result.then(function(event) {
            cb.apply(event, args); //this is where all callback is actually called
          });
        };
      }

      }
    };
  });
