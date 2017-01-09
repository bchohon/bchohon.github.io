(function() {
    'use strict';

    BAC.OverlayView = Backbone.View.extend({
        /**
         * Define top-level view element
         */
        el: 'body',

        /**
         * Define events map
         * Syntax: '[Event] [Selector]' : '[Handler]'
         */
        events: {
            'click #frame-overlay > aside' : 'handleOverlayClose',
            'click #frame-overlay .close' : 'handleOverlayClose',
            'click #img-thumbs li' : 'handleThumbnailSelection',
            'click #img-thumbs #prev.enabled' : 'handleThumbnailPrevPage',
            'click #img-thumbs #next.enabled' : 'handleThumbnailNextPage'
        },

        /**
         * Initialize view
         */
        initialize: function() {
            // setup pub/sub event listeners
            this.model.on('sync', this.handleOverlayRender, this);
        },

        /**
         * Handler for overlay close
         * @param  {Object} e  JS Event object
         */
        handleOverlayClose: function(e) {
            this.$el.find('#frame-overlay, #frame-clone').remove();
            this.$el.find('.frame.invisible').removeClass('invisible');
        },

        /**
         * Handler for frame overlay render
         * @param  {Object} e  JS Event object
         */
        handleOverlayRender: function(e) {
            var templateData = this.model.attributes,
                templateFunc = Handlebars.templates['frame-overlay'],
                templateHtml = templateFunc(templateData);

            $('body').append(templateHtml);
            this._animateOverlay();
        },

        /**
         * Handler for displaying next page of thumbnails
         * @param  {Object} e  JS Event object
         */
        handleThumbnailNextPage: function(e) {
            var $thumbs = this.$el.find('#img-thumbs');

            // update thumbnails page
            this.model.currPage++;
            this._changeThumbnailPage();

            // if prev button disabled, then enable it
            if (!$thumbs.find('#prev').hasClass('enabled')) {
                $thumbs.find('#prev').addClass('enabled');
            }

            // if last page, disable next button
            if (this.model.currPage === this.model.lastPage) {
                $thumbs.find('#next').removeClass('enabled');
            }
        },

        /**
         * Handler for displaying previous page of thumbnails
         * @param  {Object} e  JS Event object
         */
        handleThumbnailPrevPage: function(e) {
            var $thumbs = this.$el.find('#img-thumbs');

            // update thumbnails page
            this.model.currPage--;
            this._changeThumbnailPage();

            // if next button disabled, then enable it
            if (!$thumbs.find('#next').hasClass('enabled')) {
                $thumbs.find('#next').addClass('enabled');
            }

            // if first page, disable next button
            if (this.model.currPage === 1) {
                $thumbs.find('#prev').removeClass('enabled');
            }
        },

        /**
         * Handler for image thumbnail selection
         * @param  {Object} e  JS Event object
         */
        handleThumbnailSelection: function(e) {
            this._updateImageSelection(e);
            this._updateThumbnailSelection(e);
            this._updateTextSelection(e);
            this._trackThumbnailClickEvent();
        },

        /**
         * Animate frame overlay opening sequence
         */
        _animateOverlay: function() {
            var that = this,
                $frameOverlay = $('#frame-overlay'),
                frameNum = this.model.get('frame').index;

            this.$el.find('.frame').eq(frameNum).addClass('invisible');
            window.setTimeout(function() {
                $frameOverlay.find('> main').removeAttr('style');
                $frameOverlay.removeClass('animate');
                $('#frame-clone').remove();
            }, 1750);
        },

        /**
         * Show new page of thumbnails
         */
        _changeThumbnailPage: function() {
            var $thumbs = this.$el.find('#img-thumbs');

            // calculate page start/end items
            this.model.pageStart = ((this.model.currPage - 1) * this.model.constants.itemsPerPage);
            this.model.pageEnd = (this.model.currPage * this.model.constants.itemsPerPage);

            // toggle hide/show prev-next page
            $thumbs.find('li').removeClass('show');
            $thumbs.find('li').slice(this.model.pageStart, this.model.pageEnd).addClass('show');
        },

        /**
         * Get template data
         * @return {Object}  Template data
         */
        _getTemplateData: function() {
            var data = this.model.attributes;

            data.hasPagination = (this.model.get('images') > 5);

            return data;
        },

        /**
         * Track G.A. Event for Image Click
         * @param  {Object} e  JS Event object
         */
        _trackThumbnailClickEvent: function(e) {
            var category = 'Frame Overlay | Thumbnail Click',
                action = [],
                picIndex = $('#img-thumbs .selected').index(),
                picPosition = picIndex + 1,
                picTotal = this.model.get('info').length;

            // build action text
            action.push('client:'+ this.model.get('client'));
            action.push('project:'+ this.model.get('project'));
            action.push('image:'+ this.model.get('info')[picIndex].title);
            action.push('position:'+ picPosition +'/'+ picTotal);

            // fire event
            ga('send', 'event', category, action.join(' | '));
        },

        /**
         * Update image selection
         * @param  {Object} e  JS Event object
         */
        _updateImageSelection: function(e) {
            var index = this.$el.find(e.currentTarget).data('index'),
                newUrl = this.model.get('info')[index].image,
                newAlt = this.model.get('info')[index].title;

            this.$el.find('#img-main img').attr({src:newUrl, alt:newAlt});
        },

        /**
         * Update text selection
         * @param  {Object} e  JS Event object
         */
        _updateTextSelection: function(e) {
            var index = this.$el.find(e.currentTarget).data('index');

            this.$el.find('#img-text li').removeClass('selected');
            this.$el.find('#img-text li').eq(index).addClass('selected');
        },

        /**
         * Update thumbnail selection
         * @param  {Object} e  JS Event object
         */
        _updateThumbnailSelection: function(e) {
            this.$el.find('#img-thumbs li.selected').removeClass('selected');
            this.$el.find(e.currentTarget).addClass('selected');
        }
    });

}());