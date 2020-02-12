declare const test: {
	/**
	Measure the difference between two strings.

	@example
	```
	import leven = require('leven');

	leven('cat', 'cow');
	//=> 2
	```
	*/

	// TODO: Remove this for the next major release, refactor the whole definition to:
	// declare function leven(left: string, right: string): number;
	// export = leven;
	default: typeof test;
};

export = test;
