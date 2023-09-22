// Create a custom block definition
// Blockly.Blocks['SELECT-FROM'] = {
//     init: function() {
//         this.appendValueInput('SELECT')
//             .appendField(new Blockly.InternalValueInput())
//             .setCheck('String')
//             .appendField('SELECT')
//             .appendField(new Blockly.FieldTextInput('attributes'), 'FIELDNAME');
//         this.appendValueInput('FROM')
//             .setCheck('String')
//             .appendField('FROM');
//         this.setColour(160);
//     }
// };

Blockly.Blocks['SELECT-FROM'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('SQL Query');

        this.appendValueInput('SELECT')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('SELECT:');

        this.appendValueInput('FROM')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('FROM:');

        this.setColour(160);
        this.setTooltip('Custom SQL Query Block');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};
