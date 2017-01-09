(function() {
    'use strict';

    BAC.GalleryView = Backbone.View.extend({
        /**
         * Define top-level view element
         */
        el: '#gallery',

        /**
         * Define events map
         * Syntax: '[Event] [Selector]' : '[Handler]'
         */
        events: {
            'click .frame > aside' : 'handleFrameInfoClick'
        },

        /**
         * Initialize view
         */
        initialize: function() {
            // setup pub/sub event listeners
            this.model.on('sync', this.handleModelLoadSuccess, this);
        },

        /**
         * Handler for frame info click
         * @param  {Object} e  JS Event object
         */
        handleFrameInfoClick: function(e) {
            this._setFrameData(e);
            this.model.load();
        },

        /**
         * Handler for model load success
         * @param  {Object} e  JS Event object
         */
        handleModelLoadSuccess: function(e) {
            this._trackFrameClickEvent();
        },

        /**
         * Set selected frame info
         * @param  {Object} e  JS Event object
         */
        _setFrameData: function(e) {
            var $frame = this.$el.find(e.currentTarget).closest('.frame'),
                frameNum = $frame.index() + 1,
                folderNum = this.model.formatTwoDigitNumber(frameNum),
                frameData = {
                    folderNum: folderNum,
                    height: $frame.outerHeight() +'px',
                    index: $frame.index(),
                    left: ($frame.offset().left - $(window).scrollLeft()) +'px',
                    top: ($frame.offset().top - $(window).scrollTop()) +'px',
                    width: $frame.outerWidth() +'px'
                };

            this.model.set('frame', frameData);
        },

        /**
         * Track G.A. Event for frame click
         * @param  {String} actionText  Action text (optional)
         */
        _trackFrameClickEvent: function(actionText) {
            var category = 'Gallery Wall | Frame Click',
                action = [],
                frameNum = parseInt(this.model.get('frame').folderNum, 10),
                frameTotal = $('#gallery .frame').length;

            // build action text
            action.push('client:'+ this.model.get('client'));
            action.push('project:'+ this.model.get('project'));
            action.push('position:'+ frameNum +'/'+ frameTotal);

            // fire event
            ga('send', 'event', category, action.join(' | '));
        }
    });

}());