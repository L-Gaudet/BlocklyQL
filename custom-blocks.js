Blockly.Blocks['SELECT-FROM'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('SQL Query');

        this.appendValueInput('SELECT')
            .setCheck('var')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('SELECT:');

        this.appendValueInput('FROM')
            .setCheck('var')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('FROM:');

        this.appendValueInput('FILTER')
            .setCheck('String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('optional filter:');

        this.setColour(160);
        this.setTooltip('Custom SQL Query Block');
        // this.setPreviousStatement(true, null);
        // this.setNextStatement(true, null);
        this.setOutput(true, "String");
    }
};

Blockly.Blocks['comparison'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Comparison Operator:')
            .appendField(new Blockly.FieldDropdown([
                ['>', '>'],
                ['<', '<'],
                ['=', '='],
                ['>=', '>='],
                ['<=', '<='],
                ['!=', '!=']
            ]), 'OPERATOR');

        this.setOutput(true, 'String'); // This block returns a String value
        this.setColour(80);
        this.setTooltip('Select a comparison operator');
    }
};

Blockly.Blocks['target'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Target:')
            .appendField(new Blockly.FieldTextInput('var'), 'VARIABLE_NAME');

        this.setOutput(true, 'var'); // This block returns a String value (variable name)
        this.setColour(120); // You can choose a different color for your block
        this.setTooltip('Select or enter a target variable');
    }
};

Blockly.Blocks['attribute'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Attribute:')
            .appendField(new Blockly.FieldDropdown([
                ['Attribute_1', 'attribute_1'],
                ['Attribute_2', 'attribute_2'],
                ['Attribute_3', 'attribute_3'],
                // Add more attributes as needed
            ]), 'ATTRIBUTE');

        this.setOutput(true, 'String'); // This block returns a String value (selected attribute)
        this.setColour(180); // You can choose a different color for your block
        this.setTooltip('Select an attribute');
    }
};

Blockly.Blocks['WHERE'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('WHERE');

        // Create and configure the first inner input
        this.appendValueInput('attribute')
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('Attribute:');

        // Create and configure the second inner input
        this.appendValueInput('comparison')
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('Comparison:');

        // Create and configure the third inner input
        this.appendValueInput('target')
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('Target:');

        // Configure the output type of this block
        // this.setOutput(true, 'Boolean'); // This block returns a Boolean value

        this.setColour(200);
        this.setTooltip('Custom WHERE Block');
        this.setOutput(true, 'String')
        // this.setPreviousStatement(true, null);
        // this.setNextStatement(true, null);
    }
};

Blockly.JavaScript['SELECT-FROM'] = function(block) {
    var values = Blockly.JavaScript.valueToCode(block, 'SELECT', Blockly.JavaScript.ORDER_NONE);
    var table = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_NONE);
    var filter = Blockly.JavaScript.valueToCode(block, 'FILTER', Blockly.JavaScript.ORDER_NONE);
    
    // Ensure that the generated code is properly formatted
    var code = 'console.log("SELECT ' + values + ' FROM ' + table;
    if (filter) {
        // If a filter is provided, add it to the SQL query
        code += ' WHERE ' + filter;
    }
    
    code = 'console.log("' + code + '")';
    return code;
};

Blockly.JavaScript.forBlock['target'] = function(block) {
    var values = block.getFieldValue('VARIABLE_NAME')
    var code = values
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['WHERE'] = function(block) {
    var attribute = Blockly.JavaScript.valueToCode(block, 'attribute', Blockly.JavaScript.ORDER_NONE);
    var comparison = Blockly.JavaScript.valueToCode(block, 'comparison', Blockly.JavaScript.ORDER_NONE);
    var target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_NONE);
    var code = attribute + ' ' + comparison + ' ' + target;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};