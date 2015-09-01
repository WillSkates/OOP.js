var OOP;

OOP = {};

//Credit to author of http://coffeescript.org/#classes
OOP.__hasProp = {}.hasOwnProperty;
OOP.__extends = function(child, parent) {

	for (var key in parent) {
		if (OOP.__hasProp.call(parent, key)) child[key] = parent[key];
	}

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
	for(key in trait.prototype) {
		child.prototype[key] = trait.prototype[key];
	}

}

module.exports = OOP;