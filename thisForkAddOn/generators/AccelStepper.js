/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Stepper library blocks.
 *     The Arduino Stepper library docs: http://arduino.cc/en/Reference/Stepper
 */
'use strict';

goog.provide('Blockly.Arduino.AccelStepper');

goog.require('Blockly.Arduino');


/**
 * Code generator for the stepper generator configuration. Nothing is added
 * to the 'loop()' function. Sets the pins (X and Y), steps per revolution (Z),
 * speed(A) and instance name (B).
 * Arduino code: #include <Stepper.h>
 *               Stepper B(Z, X, Y);
 *               setup() { B.setSpeed(A); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Empty string as no code goes into 'loop()'.
 */
Blockly.Arduino['AccelStepper_config'] = function(block) {
  var pin1 = block.getFieldValue('STEPPER_PIN1');
  var pin2 = block.getFieldValue('STEPPER_PIN2');
  var pin3 = block.getFieldValue('STEPPER_PIN3');
  var pin4 = block.getFieldValue('STEPPER_PIN4');
  var pinType = Blockly.Arduino.PinTypes.STEPPER;
  var stepperName = block.getFieldValue('STEPPER_NAME');
  //var stepperSteps = Blockly.Arduino.valueToCode(block, 'STEPPER_STEPS',
      //Blockly.Arduino.ORDER_ATOMIC) || '360';
  var stepperSpeed = Blockly.Arduino.valueToCode(block, 'STEPPER_SPEED',
      Blockly.Arduino.ORDER_ATOMIC) || '90';
  var stepperAccel = Blockly.Arduino.valueToCode(block, 'STEPPER_ACCEL',
      Blockly.Arduino.ORDER_ATOMIC) || '90';

  //stepper is a variable containing the used pins
  Blockly.Arduino.addVariable(stepperName,
      'int ' + stepperName + '[4] = {' + pin1 + ', ' + pin3 +', '+ pin2+ ', ' + pin4 + ' };', true);
  stepperName = 'stepper_' + stepperName;

  Blockly.Arduino.reservePin(block, pin1, pinType, 'Stepper');
  Blockly.Arduino.reservePin(block, pin2, pinType, 'Stepper');
  Blockly.Arduino.reservePin(block, pin3, pinType, 'Stepper');
  Blockly.Arduino.reservePin(block, pin4, pinType, 'Stepper');

  Blockly.Arduino.addInclude('stepper', '#include <AccelStepper.h>');

  //Declaration of the stepper motor
  var globalCode = 'AccelStepper ' + stepperName + '(4' + ', ' +
      pin1 + ', ' + pin3 + ', ' + pin2 + ', ' + pin4+ ' );';
  Blockly.Arduino.addDeclaration(stepperName, globalCode);


  var setupCode1 = stepperName + '.setMaxSpeed(' + stepperSpeed + ');';
  var setupCode2 = '  ' + stepperName + '.setAcceleration(' + stepperAccel + ');';
  Blockly.Arduino.addSetup(stepperName, setupCode1+'\n' + setupCode2, true);

  return '';
};

/**
 * Code generator for moving the stepper instance (X) a number of steps (Y).
 * Library info in the setHelpUrl link.
 * This block requires the stepper_config block to be present.
 * Arduino code: loop { X.steps(Y) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['AccelStepper_step'] = function(block) {
  var stepperInstanceName = 'stepper_' + block.getFieldValue('STEPPER_NAME');
  var stepperSteps = Blockly.Arduino.valueToCode(block, 'STEPPER_STEPS',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = stepperInstanceName + '.runToNewPosition('+stepperInstanceName +
  '.currentPosition() + '
   + stepperSteps + ');\n';
  return code;
};

Blockly.Arduino['AccelStepper_synchrostep'] = function(block) {
  var stepper1InstanceName = 'stepper_' + block.getFieldValue('STEPPER1_NAME');
  var stepper2InstanceName = 'stepper_' + block.getFieldValue('STEPPER2_NAME');
  var stepper1Steps = Blockly.Arduino.valueToCode(block, 'STEPPER1_STEPS',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var stepper2Steps = Blockly.Arduino.valueToCode(block, 'STEPPER2_STEPS',
      Blockly.Arduino.ORDER_ATOMIC) || '0';

  //Declaration of the synchronous stepper function
  var code = 'void moveBothStepper(int step1, int step2) {\n';
  var code += '  int pos1 = '+ stepper1InstanceName + '.currentPosition()+step1;\n';
  var code += '  int pos2 = '+ stepper2InstanceName + '.currentPosition()+step2;\n';
  var code += '  ' + stepper1InstanceName +
    '.moveTo(pos1); //Assign position for motor1\n';
  var code += '  ' + stepper2InstanceName +
    '.moveTo(pos2); //Assign position for motor2\n';
  var code += '  int flag1 = 0; \n  int flag2 = 0; \n';
  var code += '  while ((flag1 == 0) || (flag2 == 0)) { //Run both motors synchronously\n';
  var code += '    if ('+stepper1InstanceName+'.currentPosition() != pos1) {\n';
  var code += '      ' + stepper1InstanceName +'.run();}\n';
  var code += '    else {flag1 = 1;}\n';
  var code += '    if ('+stepper2InstanceName+'.currentPosition() != pos2) {\n';
  var code += '      ' + stepper2InstanceName +'.run();}\n';
  var code += '    else {flag2 = 1;}\n';
  var code += '  }\n}';

  Blockly.Arduino.addDeclaration("globalSynchro",code); // Add the function "moveBothStepper if not existing"

  var code = 'moveBothStepper('+stepper1Steps+','+stepper1Steps+');\n';
  return code;
};
