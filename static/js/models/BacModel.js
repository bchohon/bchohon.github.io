(function() {
    'use strict';

    BAC.Model = Backbone.Model.extend({
        /**
         * Define constants
         */
        constants: {
            itemsPerPage: 5
        },

        /**
         * Format two-digit number
         * @param  {Number} n  Number
         * @return {String}    Two-digit string
         */
        formatTwoDigitNumber: function(n) {
            return (n < 10) ? '0'+n : ''+n;
        },

        /**
         * Load model data
         */
        load: function() {
            var that = this;

            this.fetch({
                cache: false,
                url: 'static/img/portfolio/'+ this.get('frame').folderNum +'/data.json'
            });
        },

        /**
         * Parse model data
         * @param  {Object} response  Raw response data
         * @return {Object}           Enriched data
         */
        parse: function(response) {
            var data = response,
                imgRoot = '/static/img/portfolio/'+ this.get('frame').folderNum +'/',
                imgPos;

            // enrich info objects data
            for (var i=0, l=data.info.length; i<l; i++) {
                // build thumbnail image url
                // dynamic so folder and/or image structure can be changed at any time
                imgPos = this.formatTwoDigitNumber(i+1);
                data.info[i].image = imgRoot +'image'+ imgPos +'.jpg';
                data.info[i].thumbnail = imgRoot +'thumb'+ imgPos +'.jpg';

                // assign index to maintain proper pagination
                data.info[i].index = i;

                // assign state flag to show first page thumbnail items
                if (i < this.constants.itemsPerPage) {
                    data.info[i].isVisible = true;
                }
            }

            // set pagination flag
            // note: determines whether or not to show the slideshow prev/next icons
            data.hasPagination = (data.info.length > this.constants.itemsPerPage);

            // set last page
            this.lastPage = Math.ceil(data.info.length / this.constants.itemsPerPage);

            // reset current page
            this.currPage = 1;

            return data;
        }
    });

}());