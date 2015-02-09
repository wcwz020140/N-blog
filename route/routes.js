var indexCon = require('../control/index.c.js');

var artical = require('../control/artical.c.js')

var articalRegExp = /artical\/(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/i

module.exports = function (router) {
	router.get('/', indexCon.index);

	router.get(articalRegExp, artical.artical);

	router.get('/index/page/N');

	router.get('/admin/login');
}