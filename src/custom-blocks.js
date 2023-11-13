Blockly.Blocks['execute'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Execute');

        this.appendValueInput('Query')
                .setCheck('string')
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField('Query:');

        this.setColour(300);
        this.setTooltip('Custom SQL Query Block');
        this.setOutput(false, null)
    }
}

Blockly.Blocks['SELECT-FROM'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('SQL Query');

        this.appendValueInput('SELECT')
            .setCheck('attribute')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField('SELECT:');

        this.appendValueInput('FROM')
            .setCheck('table')
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
        this.setOutput(true, "string");
    }
};


Blockly.Blocks['table'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Table:')
            .appendField(new Blockly.FieldDropdown([
                ['astronaut', 'astronaut']
                // Add more attributes as needed
            ]), 'TABLE');

        this.setOutput(true, 'table'); // This block returns a String value (selected attribute)
        this.setColour(220); // You can choose a different color for your block
        this.setTooltip('Select an attribute');
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
                ['astronautID', 'astronautID'],
                ['name', 'name'],
                ['age', 'age'],
                ['All', '*']
                // Add more attributes as needed
            ]), 'ATTRIBUTE');

        this.setOutput(true, 'attribute'); // This block returns a String value (selected attribute)
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

Blockly.JavaScript['execute'] = function(block) {
    var values = Blockly.JavaScript.valueToCode(block, 'Query:', Blockly.JavaScript.ORDER_ATOMIC);
    var values = Blockly.JavaScript.valueToCode(block, 'Query', Blockly.JavaScript.ORDER_ATOMIC); // Corrected field name
    // var values = block.getFieldValue('Query')  
    console.log(values)
    
    // Ensure that the generated code is properly formatted
    var code = `
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "db4free.net",
        port: "3306",
        user: "blocklyqluser",
        password: "dapWum-cesqyj-pomfo9",
        database: "blocklyql"
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "` + values + `"
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            con.destroy()
            console.log('connection ended')
        });
    });
    `
    return code;
};

Blockly.JavaScript['SELECT-FROM'] = function(block) {
    var values = Blockly.JavaScript.valueToCode(block, 'SELECT', Blockly.JavaScript.ORDER_NONE);
    var table = Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_NONE);
    var filter = Blockly.JavaScript.valueToCode(block, 'FILTER', Blockly.JavaScript.ORDER_NONE);
    
    // Ensure that the generated code is properly formatted
    var code = 'SELECT ' + values + ' FROM ' + table + filter +';'
    
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['table'] = function(block) {
    var attribute = block.getFieldValue('TABLE');
    var code = attribute;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript.forBlock['target'] = function(block) {
    var values = block.getFieldValue('VARIABLE_NAME')
    var code = values
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['attribute'] = function(block) {
    var attribute = block.getFieldValue('ATTRIBUTE');
    var code = attribute;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['comparison'] = function(block) {
    var operator = block.getFieldValue('OPERATOR');
    var code = operator;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['WHERE'] = function(block) {
    var attribute = Blockly.JavaScript.valueToCode(block, 'attribute', Blockly.JavaScript.ORDER_NONE);
    var comparison = Blockly.JavaScript.valueToCode(block, 'comparison', Blockly.JavaScript.ORDER_NONE);
    var target = Blockly.JavaScript.valueToCode(block, 'target', Blockly.JavaScript.ORDER_NONE);
    var code = ' WHERE ' + attribute + ' ' + comparison + ' ' + target;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['AGGREGATE'] = {
        init: function() {
        this.appendValueInput('AGGREGATE')
            .appendField('AGG')
            .appendField(new Blockly.FieldDropdown([
                ['\u0020',''],
                ['MIN', 'MIN'],
                ['MAX', 'MAX'],
                ['AVG', 'AVG'],
                ['COUNT', 'COUNT'],
                ['SUM', 'SUM']]), 'AGG')
            .setCheck(['Number', 'var', 'exp']);
        this.setInputsInline(true);
        this.setOutput(true, 'var');
        this.setColour('#A0C4FF');
        this.setTooltip('Pick an Aggregate');
        }
    };