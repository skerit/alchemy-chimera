/**
 * Date Chimera Field
 *
 * @constructor
 *
 * @author   Jelle De Loecker   <jelle@codedor.be>
 * @since    1.0.0
 * @version  1.0.0
 *
 * @param    {FieldType}
 */
var DateChimeraField = Function.inherits('ChimeraField', function DateChimeraField(fieldType, options) {

	this.constructor.super.call(this, fieldType, options);

	this.script_file = 'chimera/date_field';

	this.viewname = 'date';
	this.viewwrapper = 'date';
});