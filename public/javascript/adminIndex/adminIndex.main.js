require.config({
	paths: {
		'jquery' : '../jquery-2.1.1',
	}
});

require(['jquery'], function ($) {
	alert('!')
})