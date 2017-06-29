(function() {
    window.App = {
        Models: {},
        Collections: {},
        Views: {},
        Router: {}
    };

    App.Router = Backbone.Router.extend({
        routes: {
            '': 'index',
            'show/:id': 'show',
            'download/*random': 'download',
            'search/:query': 'search',
            '*other': 'default'
        },

        index: function() {
            $(document.body).append("Index <br>");
        },

        show: function(id) {
            $(document.body).append("Show,id=" + id + "<br>");
        },

        download: function(random) {
            $(document.body).append("Download,random=" + random + "<br>");
        },

        search: function(query) {
            $(document.body).append("Search,query=" + query + "<br>");
        },

        default: function(other) {
            $(document.body).append("Other <br>");
        }
    });

    new App.Router();
    Backbone.history.start();
})();