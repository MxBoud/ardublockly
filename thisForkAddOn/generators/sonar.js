'use strict';

goog.provide('Blockly.Arduino.sonar');

goog.require('Blockly.Arduino');



Blockly.Arduino['sonar_config'] = function(block) {
  var sonarName = block.getFieldValue('SONAR_NAME');
  var triggerPin = block.getFieldValue('TRIG_PIN');
  var echoPin = block.getFieldValue('ECHO_PIN');

  Blockly.Arduino.addInclude('sonar','#include <NewPing.h>')

  Blockly.Arduino.addDeclaration(sonarName,'NewPing ' + sonarName +
    '('+triggerPin+','+echoPin+',200);');


  return '';

};

Blockly.Arduino['sonar_read'] = function(block) {

  var sonarName = block.getFieldValue('SONAR_NAME');
  var code = sonarName + '.ping() / US_ROUNDTRIP_CM';
  return [code, Blockly.Arduino.ORDER_ATOMIC];

};
