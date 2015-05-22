var BaseRes = require('./base_res')
  , _ = require('underscore')
  , util = require('util')
  , constants = require('../constants.json');

var SodOff = module.exports = BaseRes.extend({
  route: function (app) {
    app.get('/sod/:off/:from', _.bind(this.sodOff, this));
  },

  sodOff : function (req, res) {
    var fromName = req.params.from, toName = req.params.off;
    res.render('app/index.html',
    {
      body: {
        message :util.format(constants.templates.SodOff, toName),
        signature : fromName
      }
    });
  }
});
