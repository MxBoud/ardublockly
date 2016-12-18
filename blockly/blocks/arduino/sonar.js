/* Code from :
//http://www.seeedstudio.com/wiki/GROVE_System
//http://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&search_in_description=1&keyword=grovefamily
//support starter bundle example http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b

/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating seeeduino grove blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';
 goog.provide('Blockly.Blocks.sonar');

 goog.require('Blockly.Blocks');
 goog.require('Blockly.Types');

Blockly.Blocks.sonar.HUE = 10;
Blockly.Blocks['sonar_config'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Setup Sonar")
        .appendField(
            new Blockly.FieldInstance('sonar',
                                      'MySonar',
                                      true, true, false),
            'SONAR_NAME');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('Trig Pin')
        .appendField(new Blockly.FieldDropdown(
          Blockly.Arduino.Boards.selected.digitalPins), 'TRIG_PIN')
        .appendField('Echo Pin')
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'ECHO_PIN');



  }
};
  Blockly.Blocks['sonar_read'] = {
    /**
     * Block for reading an angle value of a servo pin.
     * @this Blockly.Block
     */
    init: function() {

    this.appendDummyInput()
          .appendField("Read Sonar")
          .appendField(
                      new Blockly.FieldInstance('sonar',
                                    'MySonar',
                                    true, true, false),
                                      'SONAR_NAME');
    this.setOutput(true, Blockly.Types.NUMBER.output)


    },
    /** @return {string} The type of return value for the block, an integer. */
    getBlockType: function() {
      return Blockly.Types.NUMBER;
    },
    /**
     * Updates the content of the the pin related fields.
     * @this Blockly.Block
     */
    updateFields: function() {

    }
};
