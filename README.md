# This subproject is forked from the Ardublockly project
This version of Ardublockly is forked from the [Ardublockly][18]'s project.

## Extensions of this fork
I'm trying to customize Ardublockly for specific tasks related with robotics.

I'm still learning so I apologize in advance if my contribution is hard to follow! As seen in the screenshot, I implemented a new set of blocks using some features of the [AccelStepper][19] library. From theses blocks, the user is able to configure a 4 pins stepper motor and control its acceleration and maximum speed. I also added a block for the simultaneous control of two steppers.


![Add on from this version][newBlocksScreenShot]

## Requirement
### Libraries
Blocks for the stepper motor are using the [AccelStepper][19] library.

Blocks for the sonar are using the
 [NewPing][20] library.
### Stepper motors
The blocks have been developed and tested with some non-expensive 4 wire stepper motors. These [Kuman stepper motors][21] were bought as a kit of 5 motors and drive from Amazon for less than 20 CAD.  

### Sonar
[Ultrasonic sensors][22] where also bought from Amazon for less than 15 CAD.
### 3d printed K'Nex connectors
All the .stl file for the K'Nex and Arduino connectors are available [here][23] and on [Thingiverse][24].

![3D print global rendering][3dPrintsGlobalRendering]
### Location of the new code from this fork


# Ardublockly
Ardublockly is a visual programming editor for Arduino. It is based on Google's [Blockly][1], which has been forked to generate [Arduino][15] code.

The `ArdublocklyServer` Python package initialises a local server to be able to compile and load the Arduino code using the [Arduino IDE][2].

This is all packaged in a self contained executable desktop application for Windows, Mac OS X, and Linux.

![Ardublockly desktop program screenshot][desktop_screeshot]


## Features
* Generates Arduino code with visual drag-and-drop blocks
* Uploads the code to an Arduino Board
* Useful "code block warnings"
* Compatible with a wide range of official Arduino Boards
* Works on Windows / Linux / Mac OS X

Ardublockly is still under development and a few features are not yet implemented. A to-do list can be found in the [TODO.md][3] file.

Currently tested under Windows with Python 2.7 and 3.4 and in Linux and MacOS X with Python 2.7.


## Cloning the repository
Please note that there are submodules in the repository that need initialisation. So, to correctly clone the Ardublockly repository:

```
git clone https://github.com/carlosperate/ardublockly.git
cd ardublockly
git submodule update --init --recursive
```


## Installing
The desktop application is available for Windows/Mac/Linux and runs as a stand-alone executable that can be downloaded from the [Ardublockly repository releases page][4].

You will also need the [Arduino IDE version 1.6.x or higher][2].

#### Development builds
You can also test __UNSTABLE__ development builds automatically generated every time an update is added to the GitHub repository:

| Linux build         | Windows build       | Mac OS X build       |
|:-------------------:|:-------------------:|:--------------------:|
| [![Linux Build Status](https://circleci.com/gh/carlosperate/ardublockly/tree/master.svg?style=svg)](https://circleci.com/gh/carlosperate/ardublockly/tree/master) | [![Windows Build status](https://ci.appveyor.com/api/projects/status/t877g920hdiifc2i?svg=true)](https://ci.appveyor.com/project/carlosperate/ardublockly) | [![Mac Build Status](https://travis-ci.org/carlosperate/ardublockly.svg?branch=master)](https://travis-ci.org/carlosperate/ardublockly) |
| [Download Link][12] | [Download Link][13] | [Download Link][14]  |

#### "Core version" (Python server only)
If you prefer, the core software can be used by running only the Python server, which loads the web interface on your local browser (Chrome recommended).

Full installation instructions for this version can be found in [this Github repository Wiki][5].

The quick version: Clone this repository, initialise all submodules, and execute:

```
python start.py
```

This will work on Windows, Linux (including ARM) and Mac OS X, with Python >2.7 or >3.4


## Running
1. [Install Ardublockly][5].
2. Install the [Arduino IDE][2] version 1.6.x or higher (latest version is always recommended).
3. Run Ardublockly as defined in your installation method.
3. Configure Ardublockly to locate the Arduino IDE [following these instructions][6].


## Online Demos
A demo of the latest release of Ardublockly main interface can be found in the following two links (to load the code into an Arduino it requires the full Ardublockly application to be downloaded and run on your computer):

#### [Ardublockly][10]
![WebApp screenshot responsive design][web_screenshot_responsive]

#### [Ardublockly classic][11]
![WebApp screenshot][web_screenshot_classic]


## Documentation
The documentation, including installation instructions, configuration instructions, and developer information can be found in the [Ardublockly GitHub repository Wiki][7].

To download the documentation you can git clone the wiki data:

```
git clone https://github.com/carlosperate/ardublockly.wiki.git
```


## Credit
This project has been inspired by [BlocklyDuino][16].

Blockly original source is Copyright of Google Inc. [https://developers.google.com/blockly/][1]. A list of changes to the Blockly fork can be found in the [Blockly subdirectory README][17] file.


## License
Copyright (c) 2016 carlosperate https://github.com/carlosperate/

Unless stated otherwise, the source code of this projects is
licensed under the Apache License, Version 2.0 (the "License");
you may not use any of the licensed files within this project
except in compliance with the License.

The full document can be found in the [LICENSE][9] file.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


[1]: https://developers.google.com/blockly/
[2]: http://www.arduino.cc/en/main/software/
[3]: TODO.md
[4]: https://github.com/carlosperate/ardublockly/releases/
[5]: https://github.com/carlosperate/ardublockly/wiki/Installing-Ardublockly
[6]: https://github.com/carlosperate/ardublockly/wiki/Configure-Ardublockly
[7]: https://github.com/carlosperate/ardublockly/wiki
[8]: https://github.com/carlosperate/ardublockly/compare/blockly-original...master
[9]: https://github.com/carlosperate/ardublockly/blob/master/LICENSE
[10]: http://ardublockly.embeddedlog.com/demo/index.html
[11]: http://ardublockly.embeddedlog.com/demo/classic/index.html
[12]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=linux/
[13]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=windows/
[14]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=mac/
[15]: http://www.arduino.cc
[16]: https://github.com/BlocklyDuino/BlocklyDuino
[17]: blockly/README.md
[18]: https://github.com/carlosperate/ardublockly
[19]: http://www.airspayce.com/mikem/arduino/AccelStepper/
[20]: http://playground.arduino.cc/Code/NewPing
[21]: http://kumantech.com/kuman-5x-stepper-motor-for-arduino-28byj-48-uln2003-5v-stepper-motor-uln2003-driver-board-k67a_p0227.html
[22]: http://kumantech.com/kuman-5pcs-hc-sr04-ultrasonic-distance-measuring-sensor-module-kit-for-arduino-uno-mega-r3-mega2560-duemilanove-nano-raspberry-pi-brobot-k18_p0033.html
[23]: https://github.com/MxBoud/ardublockly/tree/master/thisForkAddOn/Ressources/stl
[24]: http://www.thingiverse.com/thing:2007475
[23]: https://github.com/MxBoud/ardublocklyForKNexRobot/tree/master/thisForkAddOn/Ressources/stl



[desktop_screeshot]: http://carlosperate.github.io/ardublockly/images/screenshot_desktop_1.png
[web_screenshot_responsive]: http://carlosperate.github.io/ardublockly/images/screenshot_material_all_small.jpg
[web_screenshot_classic]: http://carlosperate.github.io/ardublockly/images/screenshot_1.png
[newBlocksScreenShot]: /thisForkAddOn/Ressources/images/NewBlocks.png
[3dPrintsGlobalRendering]: /thisForkAddOn/Ressources/images/3dPrintsGlobalRendering.png
