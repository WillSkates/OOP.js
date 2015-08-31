var OOP;

OOP = {};

//Credit to author of http://coffeescript.org/#classes
OOP.__hasProp = {}.hasOwnProperty;
OOP.__extends = function(child, parent) {

	OOP.__useTrait(child, parent);

	function ctor() { this.constructor = child; }

	ctor.prototype = parent.prototype;
	child.prototype = new ctor();

	child.__super__ = parent.prototype;

	return child;

};
OOP.__useTrait = function(child, trait) {

	/**
	 * We just do the copy here to paste the methods from the trait into our object.
	 */
	for (var key in trait) {
		if (OOP.__hasProp.call(trait, key)) child[key] = trait[key];
	}

}

module.exports = OOP;