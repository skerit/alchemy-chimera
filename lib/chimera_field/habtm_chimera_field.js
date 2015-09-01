/**
 * HasAndBelongstoMany Chimera Field
 *
 * @constructor
 *
 * @author   Jelle De Loecker   <jelle@codedor.be>
 * @since    1.0.0
 * @version  1.0.0
 *
 * @param    {FieldType}
 */
var HABTM = Function.inherits('ChimeraField', function HasAndBelongsToManyChimeraField(fieldType, options) {

	HasAndBelongsToManyChimeraField.super.call(this, fieldType, options);

	this.script_file = 'chimera/assoc_field';

	this.viewname = 'habtm';
	this.viewwrapper = 'default';
});

/**
 * Respond with related data values for this field
 *
 * @author   Jelle De Loecker   <jelle@codedor.be>
 * @since    1.0.0
 * @version  1.0.0
 *
 * @param    {Conduit}   conduit
 */
HABTM.setMethod(function sendRelatedData(conduit) {

	var fieldType = this.fieldType,
	    model = Model.get(fieldType.options.modelName),
	    options;

	options = {
		fields: ['_id', 'title', 'name'].concat(model.displayField),
		document: false
	};

	model.find('all', options, function gotData(err, results) {

		var response;

		if (err) {
			return conduit.error(err);
		}

		response = {
			items: results,
			displayField: model.displayField
		};

		conduit.end(response);
	});
});