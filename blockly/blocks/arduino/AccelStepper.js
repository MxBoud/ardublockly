/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino Stepper library.
 *     The Arduino Servo functions syntax can be found in the following URL:
 *     http://arduino.cc/en/Reference/Stepper
 *     Note that this block uses the Blockly.FieldInstance instead of
 *     Blockly.FieldDropdown which generates a unique instance per setup block
 *     in the workspace.
 */
'use strict';

goog.provide('Blockly.Blocks.AccelStepper');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.AccelStepper.HUE = 0;

Blockly.Blocks['AccelStepper_config'] = {
  /**
   * Block for for the stepper generator configuration including creating
   * an object instance and setting up the speed. Info in the setHelpUrl link.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/StepperConstructor');
    this.setColour(Blockly.Blocks.AccelStepper.HUE);
    this.appendDummyInput()
        .appendField("Setup stepper motor (4 wire AccelStepper)")
        .appendField(
            new Blockly.FieldInstance('Stepper',
                                      Blockly.Msg.ARD_STEPPER_DEFAULT_NAME,
                                      true, true, false),
            'STEPPER_NAME')
        .appendField(Blockly.Msg.ARD_STEPPER_MOTOR);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_STEPPER_PIN1)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'STEPPER_PIN1')
        .appendField(Blockly.Msg.ARD_STEPPER_PIN2)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'STEPPER_PIN2')
        .appendField("pin3#")
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'STEPPER_PIN3')
        .appendField("pin4#")
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'STEPPER_PIN4');
    //this.appendValueInput('STEPPER_STEPS')
        //.setCheck(Blockly.Types.NUMBER.checkList)
        //.setAlign(Blockly.ALIGN_RIGHT)
        //.appendField(Blockly.Msg.ARD_STEPPER_REVOLVS);
    this.appendValueInput('STEPPER_SPEED')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Set speed");
    this.appendValueInput('STEPPER_ACCEL')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Set acceleration");
    this.setTooltip(Blockly.Msg.ARD_STEPPER_SETUP_TIP);
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Boards.refreshBlockFieldDropdown(
        this, 'STEPPER_PIN1', 'digitalPins');
    Blockly.Boards.refreshBlockFieldDropdown(
        this, 'STEPPER_PIN2', 'digitalPins');
  }
};

Blockly.Blocks['AccelStepper_step'] = {
  /**
   * Block for for the stepper 'step()' function.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/StepperStep');
    this.setColour(Blockly.Blocks.AccelStepper.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_STEPPER_STEP)
        .appendField(
            new Blockly.FieldInstance('Stepper',
                                      Blockly.Msg.ARD_STEPPER_DEFAULT_NAME,
                                      false, true, false),
            'STEPPER_NAME');
    this.appendValueInput('STEPPER_STEPS')
        .setCheck(Blockly.Types.NUMBER.checkList);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_STEPPER_STEPS);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARD_STEPPER_STEP_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('STEPPER_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Stepper', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid stepper config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_STEPPER_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['AccelStepper_synchrostep'] = {
  /**
   * Block for for the stepper 'step()' function.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/StepperStep');
    this.setColour(Blockly.Blocks.AccelStepper.HUE);
    this.appendDummyInput()
        .appendField("move")
        .appendField(
            new Blockly.FieldInstance('Stepper',
                                      Blockly.Msg.ARD_STEPPER_DEFAULT_NAME,
                                      false, true, false),
            'STEPPER1_NAME')
        .appendField("# steps");
    this.appendValueInput('STEPPER1_STEPS')
        .setCheck(Blockly.Types.NUMBER.checkList);
    this.appendDummyInput()
        .appendField("and move")
        .appendField(
          new Blockly.FieldInstance('Stepper',
                                    Blockly.Msg.ARD_STEPPER_DEFAULT_NAME,
                                    false, true, false),
          'STEPPER2_NAME')
        .appendField("# steps");
    this.appendValueInput('STEPPER2_STEPS')
        .setCheck(Blockly.Types.NUMBER.checkList);
    this.setPreviousStatement(true);
    this.setNextStatement(true);

    // this.appendDummyInput()
    //     .appendField("move stepper2")
    //     .appendField(
    //         new Blockly.FieldInstance('Stepper2',
    //                                   Blockly.Msg.ARD_STEPPER_DEFAULT_NAME,
    //                                   false, true, false),
    //         'STEPPER1_NAME');
    // this.appendValueInput('STEPPER1_STEPS')
    //     .setCheck(Blockly.Types.NUMBER.checkList);
    // this.appendDummyInput()
    //     .appendField(Blockly.Msg.ARD_STEPPER_STEPS);
    // this.setPreviousStatement(true);
    // this.setNextStatement(true);


  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName1 = this.getFieldValue('STEPPER1_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName1, 'Stepper', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid stepper config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_STEPPER_COMPONENT).replace(
                '%2', instanceName1));
    }
    var instanceName2 = this.getFieldValue('STEPPER2_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName2, 'Stepper', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid stepper config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_STEPPER_COMPONENT).replace(
                '%2', instanceName2));
    }
  }
};
