(function() {
    'use strict';

    BAC.Router = Backbone.Router.extend({
        /**
         * Define routes hash map
         * Syntax: '[Route/:param(/:optional)]' : '[Handler]'
         */
        routes: {
            '*default' : 'handleDefaultRoute'
        },

        /**
         * Initialize router
         */
        initialize: function() {
            // instantiate models/views
            this.bacModel = new BAC.Model();
            this.bacGalleryView = new BAC.GalleryView({model:this.bacModel});
            this.bacOverlayView = new BAC.OverlayView({model:this.bacModel});
        },

        /**
         * Handler for default route
         */
        handleDefaultRoute: function() {
            this._trackPageView();
        },

        /**
         * Track G.A. Page View
         */
        _trackPageView: function() {
            ga('send', 'pageview');
        }
    });

}());


/**
 * Instantiate app on DOM ready
 */
$(function() {
    window.bacRouter = new BAC.Router();
    Backbone.history.start({pushState:true});
});
