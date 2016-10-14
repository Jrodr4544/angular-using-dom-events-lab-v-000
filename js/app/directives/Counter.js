function Counter() {
	return {
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ some.count }}</div>',
			'</div>'
		].join(''),
		require: 'counter',
		controller: function () {
			this.count = 0;
		},
		controllerAs: 'some',
		link: function(scope, elem, attrs, ctrl) {

			elem.on('click', function() {
				ctrl.count++;
				scope.$apply();
			})

			scope.$on('$destroy', function() {
				elem.off();
			})
		}
	}
}

angular
	.module('app')
	.directive('counter', Counter);