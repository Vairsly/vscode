'use strict';

goog.provide('Blockly.Arduino.Base');
goog.require('Blockly.Arduino');

Blockly.Arduino.addReservedWords('haodabit');

Blockly.Arduino['haodabit_digitalinput'] = function(block) {
  var dropdown_io = block.getFieldValue('state');
  Blockly.Arduino.setups_['haodabit_digitalio'+dropdown_io] = 'pinMode('+dropdown_io+',INPUT);\n';
  var code = 'digitalRead('+dropdown_io+')';
  return [code, Blockly.Arduino.ORDER_MEMBER];
};

Blockly.Arduino['haodabit_analoginput'] = function(block) {
  var dropdown_io = block.getFieldValue('state');
  //Blockly.Arduino.setups_['haodabit_analogio'+dropdown_io] = 'pinMode(A'+dropdown_io+',INPUT);\n';
  var code = 'analogRead('+dropdown_io+')';
  return [code, Blockly.Arduino.ORDER_MEMBER];
};

Blockly.Arduino['haodabit_analogoutput'] = function(block) {
  var dropdown_io = block.getFieldValue('state');
  Blockly.Arduino.setups_['haodabit_analogoutput'+dropdown_io] = 'pinMode('+dropdown_io+',OUTPUT);\n';
  var value_value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'analogWrite('+dropdown_io+','+value_value+');\n';
  return code;
};

Blockly.Arduino['haodabit_digitaloutput'] = function(block) {
  var dropdown_io = block.getFieldValue('state');
  Blockly.Arduino.setups_['haodabit_digitaloutput'+dropdown_io] = 'pinMode('+dropdown_io+',OUTPUT);\n';
  var value_value = block.getFieldValue('valueout');
  var code = 'digitalWrite('+dropdown_io+','+value_value+');\n';
  return code;
};

Blockly.Arduino['haodabit_DELAY'] = function(block) {
  var dropdown_io = Blockly.Arduino.valueToCode(block, 'ioinput', Blockly.Arduino.ORDER_ATOMIC);
  var state = block.getFieldValue('state');
  
  var code = state+'('+dropdown_io+');\n';
  return code;
};
Blockly.Arduino['haodabit_display11'] = function(block) {
  Blockly.Arduino.definitions_['haodabit_display'] = '#include <Nova_4DigitDisplay.h>';
  Blockly.Arduino.definitions_['haodabit_display1'] = 'DigitDisplay dis_C0=DigitDisplay(25);';
  //Blockly.Arduino.setups_['haodabit_display11'] = 'Wire.begin();\n	tm_4display.init();\n';
  var STATE = block.getFieldValue('state');
  var dropdown_io = Blockly.Arduino.valueToCode(block, 'ioinput', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'dis_C0.display'+STATE+'('+dropdown_io+');\n';
  return code;
};
Blockly.Arduino['haodabit_display12'] = function(block) {
  Blockly.Arduino.definitions_['haodabit_display'] = '#include <Nova_4DigitDisplay.h>';
  Blockly.Arduino.definitions_['haodabit_display1'] = 'DigitDisplay dis_C0=DigitDisplay(25);';
  var code = 'dis_C0.clear();\n';
  return code;
};
Blockly.Arduino['haodabit_button'] = function(block) {
  var STATE = block.getFieldValue('state');
  Blockly.Arduino.setups_['haodabit_button'+STATE] = 'pinMode('+STATE+',INPUT);';
  var code = 'digitalRead('+STATE+')';
  return [code, Blockly.Arduino.ORDER_MEMBER];
};
Blockly.Arduino['haodabit_DHT11_read'] = function(block) {
  Blockly.Arduino.definitions_['haodabit_DHT11'] = '#include "dht11.h"';
  Blockly.Arduino.definitions_['haodabit_DHT11_init'] = 'dht11 DHT11;';
  var dropdown_state = block.getFieldValue('state');
  var code = 'DHT11.'+dropdown_state;
  return [code, Blockly.Arduino.ORDER_MEMBER];
};
Blockly.Arduino['haodabit_MMA7660'] = function(block) {
  Blockly.Arduino.definitions_['haodabit_MMA7660'] = '#include "MMA7660.h"';
  Blockly.Arduino.setups_['haodabit_MMA7660'] = 'MMA7660_Init();\n';
  var dropdown_state = block.getFieldValue('state');
  var code = 'MMA7660_ReadAxis('+dropdown_state+')';
  return [code, Blockly.Arduino.ORDER_MEMBER];
};

Blockly.Arduino['haodabit_MMA7660_shake'] = function(block) {
  Blockly.Arduino.definitions_['haodabit_MMA7660'] = '#include "MMA7660.h"';
  Blockly.Arduino.setups_['haodabit_MMA7660'] = 'MMA7660_Init();\n';
  //var dropdown_state = block.getFieldValue('state');
  var code = 'MMA7660_IsShake()';
  return [code, Blockly.Arduino.ORDER_MEMBER];
};
Blockly.Arduino['haodabit_MAG3110'] = function(block) {
  Blockly.Arduino.definitions_['haodabit_MAG3110'] = '#include "MAG3110.h"';
  Blockly.Arduino.setups_['haodabit_MAG3110'] = 'MAG3110_Initialize();\n';
  //var dropdown_state = block.getFieldValue('state');
  var code = 'GetCompassHeading()';
  return [code, Blockly.Arduino.ORDER_MEMBER];
};
Blockly.Arduino['haodabit_MAG3110_init'] = function(block) {
  Blockly.Arduino.definitions_['haodabit_MAG3110'] = '#include "MAG3110.h"';
  Blockly.Arduino.setups_['haodabit_MAG3110'] = 'MAG3110_Initialize();\n';
  //var dropdown_state = block.getFieldValue('state');
  var code = 'CalibrateCompass();\n';
  return code;
};

Blockly.Arduino['haodabit_MP3_play'] = function(block) {
  Blockly.Arduino.definitions_['haodabit_mp3'] = '#include <Nova_MP3.h>';
  var dropdown_io = block.getFieldValue('STATE');
  Blockly.Arduino.definitions_['haodabit_mp3_init'+dropdown_io] = 'MP3 mp3_'+dropdown_io+'('+dropdown_io+');\n';
  var dropdown_state = block.getFieldValue('state');
  var code = ' __disable_irq();\nmp3_'+dropdown_io+'.'+dropdown_state+'();\n__enable_irq();\n';
  return code;
};
Blockly.Arduino['haodabit_MP3_playnum'] = function(block) {
  Blockly.Arduino.definitions_['haodabit_mp3'] = '#include <Nova_MP3.h>';
  var dropdown_io = block.getFieldValue('state');
  Blockly.Arduino.definitions_['haodabit_mp3_init'+dropdown_io] = 'MP3 mp3_'+dropdown_io+'('+dropdown_io+');\n';
  var dropdown_state = Blockly.Arduino.valueToCode(block, 'num', Blockly.Arduino.ORDER_ATOMIC);
  var code = '__disable_irq();\nmp3_'+dropdown_io+'.play('+dropdown_state+');\n__enable_irq();\n';
  return code;
};
Blockly.Arduino['haodabit_MP3_vol'] = function(block) {
  Blockly.Arduino.definitions_['haodabit_mp3'] = '#include <Nova_MP3.h>';
  var dropdown_io = block.getFieldValue('state');
  Blockly.Arduino.definitions_['haodabit_mp3_init'+dropdown_io] = 'MP3 mp3_'+dropdown_io+'('+dropdown_io+');\n';
  var dropdown_state = Blockly.Arduino.valueToCode(block, 'num', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'mp3_'+dropdown_io+'.volume('+dropdown_state+');\n';
  return code;
};

Blockly.Arduino['haodabit_OLED_setpixel'] = function(block) {
  Blockly.Arduino.definitions_['haodabit_OLED'] = '#include <SSD1306.h>';
  Blockly.Arduino.definitions_['haodabit_OLED1'] = 'SSD1306 ssd_C0=SSD1306(25);\n';
  Blockly.Arduino.setups_['haodabit_OLED1'] = 'ssd_C0.begin(0x3c);\n';
  var num = Blockly.Arduino.valueToCode(block, 'num', Blockly.Arduino.ORDER_ATOMIC);
  var num1 = Blockly.Arduino.valueToCode(block, 'num1', Blockly.Arduino.ORDER_ATOMIC);
  var code = ' ssd_C0.set_pixel('+num+','+num1+',1);\n';
   //code += 'writeScreen();\n';
  return code;
};

Blockly.Arduino['haodabit_OLED_clear'] = function(block) {
  Blockly.Arduino.definitions_['haodabit_OLED'] = '#include <SSD1306.h>';
  Blockly.Arduino.definitions_['haodabit_OLED1'] = 'SSD1306 ssd_C0=SSD1306(25);\n';
  Blockly.Arduino.setups_['haodabit_OLED1'] = 'ssd_C0.begin(0x3c);\n';
  var code = 'ssd_C0.clear();\n';
  return code;
};
Blockly.Arduino['haodabit_OLED_display'] = function(block) {
  Blockly.Arduino.definitions_['haodabit_OLED'] = '#include <SSD1306.h>';
  Blockly.Arduino.definitions_['haodabit_OLED1'] = 'SSD1306 ssd_C0=SSD1306(25);\n';
  Blockly.Arduino.setups_['haodabit_OLED1'] = 'ssd_C0.begin(0x3c);\n';
  var code = 'ssd_C0.display();\n';
  return code;
};
Blockly.Arduino['haodabit_OLED_displaynum'] = function(block) {
  Blockly.Arduino.definitions_['haodabit_OLED'] = '#include <SSD1306.h>';
  Blockly.Arduino.definitions_['haodabit_OLED1'] = 'SSD1306 ssd_C0=SSD1306(25);\n';
  Blockly.Arduino.setups_['haodabit_OLED1'] = 'ssd_C0.begin(0x3c);\n';
  var x = Blockly.Arduino.valueToCode(block, 'COW', Blockly.Arduino.ORDER_ATOMIC);
  var y = Blockly.Arduino.valueToCode(block, 'ROW', Blockly.Arduino.ORDER_ATOMIC);
  var num = Blockly.Arduino.valueToCode(block, 'num', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'ssd_C0.draw_num('+x+','+y+','+num+');\n';
  return code;
};
Blockly.Arduino['haodabit_OLED_displaystring'] = function(block) {
  Blockly.Arduino.definitions_['haodabit_OLED'] = '#include <SSD1306.h>';
  Blockly.Arduino.definitions_['haodabit_OLED1'] = 'SSD1306 ssd_C0=SSD1306(25);\n';
  Blockly.Arduino.setups_['haodabit_OLED1'] = 'ssd_C0.begin(0x3c);\n';
  var x = Blockly.Arduino.valueToCode(block, 'COW', Blockly.Arduino.ORDER_ATOMIC);
  var y = Blockly.Arduino.valueToCode(block, 'ROW', Blockly.Arduino.ORDER_ATOMIC);
  var string = Blockly.Arduino.valueToCode(block, 'string', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
  var code = 'ssd_C0.draw_string('+x+','+y+','+string+');\n';
  return code;
};
Blockly.Arduino['haodabit_NeoPixel_set'] = function(block) {
  Blockly.Arduino.definitions_['haodabit_NeoPixel'] = '#include <ws2812.h>';
  var num = Blockly.Arduino.valueToCode(block, 'num', Blockly.Arduino.ORDER_ATOMIC);
  var io = block.getFieldValue('state');
  var code = 'rstRGB('+io+','+num+');\n';
  return code;
};
Blockly.Arduino['haodabit_NeoPixel_display'] = function(block) {
  Blockly.Arduino.definitions_['haodabit_NeoPixel'] = '#include <ws2812.h>';
  var io = block.getFieldValue('state');
  var num = Blockly.Arduino.valueToCode(block, 'num', Blockly.Arduino.ORDER_ATOMIC);
  var r1 = Blockly.Arduino.valueToCode(block, 'r', Blockly.Arduino.ORDER_ATOMIC);
  var g1 = Blockly.Arduino.valueToCode(block, 'g', Blockly.Arduino.ORDER_ATOMIC);
  var b1 = Blockly.Arduino.valueToCode(block, 'b', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'sendRGB('+io+','+num+','+r1+','+g1+','+b1+');\n';
  return code;
};
Blockly.Arduino['haodabit_Buzzer'] = function(block) {
  var n = Blockly.Arduino.valueToCode(block, 'io', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['haodabit_Buzzer'] = 'pinMode(18,OUTPUT);\n';
  var code = 'analogWrite(18,'+n+');\n';
  return code;
};
Blockly.Arduino['haodabit_Buzzer2'] = function(block) {
  var n = Blockly.Arduino.valueToCode(block, 'io', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['haodabit_Buzzer'] = 'pinMode(18,OUTPUT);\n';
  var code = 'Set_PWM(18,'+n+');\n';
  return code;
};

Blockly.Arduino['haodabit_Buzzer1'] = function(block) {
  var n = block.getFieldValue('state');
  Blockly.Arduino.setups_['haodabit_Buzzer'] = 'pinMode(18,OUTPUT);\n';
  var code = 'Set_PWM(18,'+n+');\n';
  return code;
};

Blockly.Arduino['haodabit_IR_NEC'] = function(block) {
  //var n = block.getFieldValue('state');
  Blockly.Arduino.definitions_['haodabit_IR_NEC'] = '#include "SmartIR.h"';
  var addr = Blockly.Arduino.valueToCode(block, 'ADDR', Blockly.Arduino.ORDER_ATOMIC);
  var value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'IR_Send_NEC('+addr+','+value+');\n';
  return code;
};


Blockly.Arduino['haodabit_IR'] = function(block) {
  Blockly.Arduino.definitions_['haodabit_IR_NEC'] = '#include "SmartIR.h"';
  Blockly.Arduino.setups_['haodabit_wifi'] = 'Serial1.begin(115200);\n';
  var band = block.getFieldValue('band');
  var type = Blockly.Arduino.valueToCode(block, 'type', Blockly.Arduino.ORDER_ATOMIC);
  var power = block.getFieldValue('power');
  var mode = block.getFieldValue('mode');
  var temp = Blockly.Arduino.valueToCode(block, 'temp', Blockly.Arduino.ORDER_ATOMIC);
  var speed = block.getFieldValue('speed');
  var dire = block.getFieldValue('dire');
  var code = 'IR_Send_AC('+band+','+type+','+power+','+mode+','+temp+','+speed+','+dire+');\n';
  return code;
};
Blockly.Arduino['haodabit_IRREC'] = function(block) {
  //var n = block.getFieldValue('state');
  Blockly.Arduino.definitions_['haodabit_IRREC'] = '#include <Nova_IRSendRev.h>\n';
  Blockly.Arduino.definitions_['haodabit_IRREC1'] = 'IRSendRev IR;\nint  ReadIR(){\n   if(IR.available()){\n         return  IR.recv();\n   }\n   return 0;\n}\n';
  Blockly.Arduino.setups_['haodabit_IRREC'] = 'IR.begin(5);\n';
  var code = 'ReadIR()';
  return [code, Blockly.Arduino.ORDER_MEMBER];
};

Blockly.Arduino['haodabit_IRREC_value'] = function(block) {
  var n = block.getFieldValue('state');
  //Blockly.Arduino.setups_['haodabit_Buzzer'] = 'pinMode(18,OUTPUT);\n';
  var code = n;
  return [code, Blockly.Arduino.ORDER_MEMBER];
};
Blockly.Arduino['haodabit_temp'] = function(block) {
  Blockly.Arduino.definitions_['haodabit_light'] = '#include <ntc.h>\n';
 // var n = block.getFieldValue('state');
  //Blockly.Arduino.setups_['haodabit_temp'] = 'pinMode(A3,INPUT);\n';
  var code = 'getTemp()';
    return [code, Blockly.Arduino.ORDER_MEMBER];
};
Blockly.Arduino['haodabit_light'] = function(block) {
  var code = '(analogRead(2))';
    return [code, Blockly.Arduino.ORDER_MEMBER];
};
Blockly.Arduino['haodabit_ultrasonic'] = function(block) {
  var n = block.getFieldValue('state');
  Blockly.Arduino.definitions_['haodabit_ultrasonic'] = 'float getDistance(int a){\npinMode(a,OUTPUT);\ndigitalWrite(a,LOW);\ndelayMicroseconds(2);\ndigitalWrite(a,HIGH);\ndelayMicroseconds(10);\ndigitalWrite(a,LOW);\npinMode(a, INPUT);\nreturn pulseIn(a,HIGH)/58.0;\n}\n';
  var code = 'getDistance('+n+')';
    return [code, Blockly.Arduino.ORDER_MEMBER];
};
Blockly.Arduino['haodabit_Servo'] = function(block) {
  var io = block.getFieldValue('state');
  var n = Blockly.Arduino.valueToCode(block, 'io', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['haodabit_Servo'+io] = 'Servo servo_'+io+';\n';
  Blockly.Arduino.setups_['haodabit_Servo'+io] = 'servo_'+io+'.attach('+io+');\n';
  var code = 'servo_'+io+'.write('+n+');\n';
  return code;
};
Blockly.Arduino['haodabit_LCD1602_CLEAR'] = function(block) {
  Blockly.Arduino.definitions_['haodabit_LCD1602'] = '#include <LiquidCrystal_I2C.h>';
  var code = 'i2clcd.clear();\n';
  return code;
};
Blockly.Arduino['haodabit_LCD1602_setadr'] = function(block) {
  var n = Blockly.Arduino.valueToCode(block, 'io', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['haodabit_LCD1602'] = '#include <LiquidCrystal_I2C.h>';
  Blockly.Arduino.definitions_['haodabit_LCD1602'+n] = 'LiquidCrystal_I2C i2clcd('+n+',16,2);\n';
  Blockly.Arduino.setups_['haodabit_LCD1602'] = 'i2clcd.init();\ni2clcd.backlight();\n';
  return '';
};
// Blockly.Arduino['haodabit_LCD1602_setcow'] = function(block) {
  // var n = Blockly.Arduino.valueToCode(block, 'io', Blockly.Arduino.ORDER_ATOMIC);
  // var c = Blockly.Arduino.valueToCode(block, 'cow', Blockly.Arduino.ORDER_ATOMIC);
  // var code = 'i2clcd.setCursor('+n+'-1,'+c+'-1);\n';
  // return code;
// };
Blockly.Arduino['haodabit_LCD1602_displaystring'] = function(block) {
	Blockly.Arduino.definitions_['haodabit_LCD1602'] = '#include <LiquidCrystal_I2C.h>';
  //Blockly.Arduino.definitions_['haodabit_LCD16021'] = 'LiquidCrystal_I2C i2clcd(0x3b,16,2);\n';
  Blockly.Arduino.setups_['haodabit_LCD1602'] = 'i2clcd.init();\ni2clcd.backlight();\n';
	var x = block.getFieldValue('COW');
  var y = block.getFieldValue('ROW');
  var string = Blockly.Arduino.valueToCode(block, 'string', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'i2clcd.setCursor('+y+'-1,'+x+'-1);\n';
   code += 'i2clcd.print('+string+');\n';
  return code;
};
Blockly.Arduino['haodabit_LCD1602_displaynum'] = function(block) {
	Blockly.Arduino.definitions_['haodabit_LCD1602'] = '#include <LiquidCrystal_I2C.h>';
  //Blockly.Arduino.definitions_['haodabit_LCD16021'] = 'LiquidCrystal_I2C i2clcd(0x3b,16,2);\n';
  Blockly.Arduino.setups_['haodabit_LCD1602'] = 'i2clcd.init();\ni2clcd.backlight();\n';
	var x = block.getFieldValue('COW');
  var y = block.getFieldValue('ROW');
  var string = Blockly.Arduino.valueToCode(block, 'num', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'i2clcd.setCursor('+y+'-1,'+x+'-1);\n';
   code += 'i2clcd.print('+string+');\n';
  return code;
};

Blockly.Arduino.LedArray = function() {
	Blockly.Arduino.definitions_['haodabit_matrix'] = '#include <HT1635DA.h>';
	  Blockly.Arduino.setups_['haodabit_matrix'] = 'HT16D35A_Init();\n	clearScreen();\n';
  var varName = this.getFieldValue('num');
  var dire = this.getFieldValue('dire');
  var a = new Array();
  for (var i = 0; i < 24; i++) {
    a[i] = new Array();
    for (var j = 0; j < 8; j++) {
      a[i][j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
    }
  }
  var code = '';
  for (var j = 0; j < 24; j++) {
    var tmp = ""
    for (var i = 0; i < 8; i++) {
      tmp += a[j][i];
	  
    }
    tmp = (parseInt(tmp, 2)).toString(16)
    if (tmp.length == 1) tmp = "0" + tmp;
	code += 'matrix['+j+'] = 0x' + tmp + ';';
	if(j%2) code+='\n';
  }
  code += 'writeScreen();\n';
  code += 'setScrollmode('+dire+','+varName+');\n';
  return code;
};
Blockly.Arduino['haodabit_matrix'] = function(block) {
	Blockly.Arduino.definitions_['haodabit_matrix'] = '#include <HT1635DA.h>';
  //Blockly.Arduino.definitions_['haodabit_LCD16021'] = 'LiquidCrystal_I2C i2clcd(0x3b,16,2);\n';
  Blockly.Arduino.setups_['haodabit_matrix'] = 'HT16D35A_Init();\n	clearScreen();\n';
	//var x = block.getFieldValue('COW');
  //var y = block.getFieldValue('ROW');
  var num = Blockly.Arduino.valueToCode(block, 'num', Blockly.Arduino.ORDER_ATOMIC);
  var string = Blockly.Arduino.valueToCode(block, 'string', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'disPlayTextAtX('+string+','+num+');\n';
   code += 'writeScreen();\n';
  return code;
};

Blockly.Arduino['haodabit_matrix_setpixel'] = function(block) {
	Blockly.Arduino.definitions_['haodabit_matrix'] = '#include <HT1635DA.h>';
  //Blockly.Arduino.definitions_['haodabit_LCD16021'] = 'LiquidCrystal_I2C i2clcd(0x3b,16,2);\n';
  Blockly.Arduino.setups_['haodabit_matrix'] = 'HT16D35A_Init();\n	clearScreen();\n';
	//var x = block.getFieldValue('COW');
  //var y = block.getFieldValue('ROW');
  var num = Blockly.Arduino.valueToCode(block, 'num', Blockly.Arduino.ORDER_ATOMIC);
  var num1 = Blockly.Arduino.valueToCode(block, 'num1', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'setPixel('+num1+','+num+');\n';
   //code += 'writeScreen();\n';
  return code;
};
Blockly.Arduino['haodabit_matrix_clrpixel'] = function(block) {
	Blockly.Arduino.definitions_['haodabit_matrix'] = '#include <HT1635DA.h>';
  //Blockly.Arduino.definitions_['haodabit_LCD16021'] = 'LiquidCrystal_I2C i2clcd(0x3b,16,2);\n';
  Blockly.Arduino.setups_['haodabit_matrix'] = 'HT16D35A_Init();\n	clearScreen();\n';
	//var x = block.getFieldValue('COW');
  //var y = block.getFieldValue('ROW');
  var num = Blockly.Arduino.valueToCode(block, 'num', Blockly.Arduino.ORDER_ATOMIC);
  var num1 = Blockly.Arduino.valueToCode(block, 'num1', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'clrPixel('+num1+','+num+');\n';
   //code += 'writeScreen();\n';
  return code;
};

Blockly.Arduino['haodabit_matrix_display'] = function(block) {
	Blockly.Arduino.definitions_['haodabit_matrix'] = '#include <HT1635DA.h>';
  //Blockly.Arduino.definitions_['haodabit_LCD16021'] = 'LiquidCrystal_I2C i2clcd(0x3b,16,2);\n';
  Blockly.Arduino.setups_['haodabit_matrix'] = 'HT16D35A_Init();\n	clearScreen();\n';
	//var x = block.getFieldValue('COW');
  //var y = block.getFieldValue('ROW');
  //var string = Blockly.Arduino.valueToCode(block, 'num', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'writeScreen();\n';
   //code += 'i2clcd.print('+string+');\n';
  return code;
};
Blockly.Arduino['haodabit_matrix_clear'] = function(block) {
	Blockly.Arduino.definitions_['haodabit_matrix'] = '#include <HT1635DA.h>';
  //Blockly.Arduino.definitions_['haodabit_LCD16021'] = 'LiquidCrystal_I2C i2clcd(0x3b,16,2);\n';
  Blockly.Arduino.setups_['haodabit_matrix'] = 'HT16D35A_Init();\n	clearScreen();\n';
	//var x = block.getFieldValue('COW');
  //var y = block.getFieldValue('ROW');
  //var string = Blockly.Arduino.valueToCode(block, 'num', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'clearScreen();\n';
   //code += 'i2clcd.print('+string+');\n';
  return code;
};

Blockly.Arduino['haodabit_matrix_displaystr'] = function(block) {
	Blockly.Arduino.definitions_['haodabit_matrix'] = '#include <HT1635DA.h>';
  //Blockly.Arduino.definitions_['haodabit_LCD16021'] = 'LiquidCrystal_I2C i2clcd(0x3b,16,2);\n';
  Blockly.Arduino.setups_['haodabit_matrix'] = 'HT16D35A_Init();\n	clearScreen();\n';
	//var x = block.getFieldValue('COW');
  //var y = block.getFieldValue('ROW');
  //var num = Blockly.Arduino.valueToCode(block, 'num', Blockly.Arduino.ORDER_ATOMIC);
  var string = Blockly.Arduino.valueToCode(block, 'string', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'printText('+string+');\n';
   //code += 'writeScreen();\n';
  return code;
};
Blockly.Arduino['haodabit_matrix_displaynum'] = function(block) {
	Blockly.Arduino.definitions_['haodabit_matrix'] = '#include <HT1635DA.h>';
  //Blockly.Arduino.definitions_['haodabit_LCD16021'] = 'LiquidCrystal_I2C i2clcd(0x3b,16,2);\n';
  Blockly.Arduino.setups_['haodabit_matrix'] = 'HT16D35A_Init();\n	clearScreen();\n';
	//var x = block.getFieldValue('COW');
  //var y = block.getFieldValue('ROW');
  //var num = Blockly.Arduino.valueToCode(block, 'num', Blockly.Arduino.ORDER_ATOMIC);
  var string = Blockly.Arduino.valueToCode(block, 'string', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'printNumber('+string+');\n';
   //code += 'writeScreen();\n';
  return code;
};

Blockly.Arduino['haodabit_matrix_setBrightness'] = function(block) {
	Blockly.Arduino.definitions_['haodabit_matrix'] = '#include <HT1635DA.h>';
  //Blockly.Arduino.definitions_['haodabit_LCD16021'] = 'LiquidCrystal_I2C i2clcd(0x3b,16,2);\n';
  Blockly.Arduino.setups_['haodabit_matrix'] = 'HT16D35A_Init();\n	clearScreen();\n';
	//var x = block.getFieldValue('COW');
  //var y = block.getFieldValue('ROW');
  //var num = Blockly.Arduino.valueToCode(block, 'num', Blockly.Arduino.ORDER_ATOMIC);
  var string = Blockly.Arduino.valueToCode(block, 'string', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'setBrightness('+string+');\n';
   //code += 'writeScreen();\n';
  return code;
};
Blockly.Arduino['haodabit_serial_begin'] = function(block) {
  var string = Blockly.Arduino.valueToCode(block, 'num', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['haodabit_serial_begin'] = 'Serial.begin('+string+');\n';
  return '';
};
Blockly.Arduino['haodabit_serial_println'] = function() {
  var string = Blockly.Arduino.valueToCode(this, 'num', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Serial.println('+string+');\n';
  return code;
};
Blockly.Arduino['haodabit_serial_write'] = function() {
  var string = Blockly.Arduino.valueToCode(this, 'num', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Serial.print('+string+');\n';
  return code;
};
Blockly.Arduino['haodabit_serial_available'] = function() {
  var code = 'Serial.available()';
  return [code, Blockly.Arduino.ORDER_MEMBER];
};
Blockly.Arduino['haodabit_serial_read'] = function() {
  var code = 'Serial.read()';
  return [code, Blockly.Arduino.ORDER_MEMBER];
};
Blockly.Arduino['haodabit_wifi_publish'] = function(block) {
	Blockly.Arduino.definitions_['haodabit_wifi'] = '#include <iot.h>';
  Blockly.Arduino.setups_['haodabit_wifi'] = 'Serial1.begin(115200);\n';
  var string = Blockly.Arduino.valueToCode(block, 'string', Blockly.Arduino.ORDER_ATOMIC);
  var mac = Blockly.Arduino.valueToCode(block, 'mac', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'publish_str('+mac+','+string+');\n';
   //code += 'i2clcd.print('+string+');\n';
  return code;
};
Blockly.Arduino['haodabit_wifi_publish_number'] = function(block) {
	Blockly.Arduino.definitions_['haodabit_wifi'] = '#include <iot.h>';
  Blockly.Arduino.setups_['haodabit_wifi'] = 'Serial1.begin(115200);\n';
  var string = Blockly.Arduino.valueToCode(block, 'string', Blockly.Arduino.ORDER_ATOMIC);
  var mac = Blockly.Arduino.valueToCode(block, 'mac', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'publish_num('+mac+','+string+');\n';
   //code += 'i2clcd.print('+string+');\n';
  return code;
};
Blockly.Arduino['haodabit_wifi_publish_name'] = function(block) {
	Blockly.Arduino.definitions_['haodabit_wifi'] = '#include <iot.h>';
  Blockly.Arduino.setups_['haodabit_wifi'] = 'Serial1.begin(115200);\n';
  var string = Blockly.Arduino.valueToCode(block, 'string', Blockly.Arduino.ORDER_ATOMIC);
  var mac = Blockly.Arduino.valueToCode(block, 'mac', Blockly.Arduino.ORDER_ATOMIC);
  var num = Blockly.Arduino.valueToCode(block, 'num', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'publish_name('+mac+','+string+','+num+');\n';
   //code += 'i2clcd.print('+string+');\n';
  return code;
};
Blockly.Arduino['haodabit_wifi_upload'] = function(block) {
	Blockly.Arduino.definitions_['haodabit_wifi'] = '#include <iot.h>';
  Blockly.Arduino.setups_['haodabit_wifi'] = 'Serial1.begin(115200);\n';
  var string = Blockly.Arduino.valueToCode(block, 'string', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'upload('+string+');\n';
   //code += 'i2clcd.print('+string+');\n';
  return code;
};

Blockly.Arduino['haodabit_wifi_available'] = function() {
  var code = 'Serial1.available()';
  return [code, Blockly.Arduino.ORDER_MEMBER];
};
Blockly.Arduino['haodabit_wifi_reads'] = function(block) {
	Blockly.Arduino.definitions_['haodabit_wifi'] = '#include <iot.h>';
  Blockly.Arduino.setups_['haodabit_wifi'] = 'Serial1.begin(115200);\n';
  var code = 'read_str()';
   //code += 'i2clcd.print('+string+');\n';
  return [code, Blockly.Arduino.ORDER_MEMBER];
};
Blockly.Arduino['haodabit_wifi_read_number'] = function(block) {
	Blockly.Arduino.definitions_['haodabit_wifi'] = '#include <iot.h>';
  Blockly.Arduino.setups_['haodabit_wifi'] = 'Serial1.begin(115200);\n';
  var string = Blockly.Arduino.valueToCode(block, 'string', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'read_num('+string+')';
   //code += 'i2clcd.print('+string+');\n';
  return [code, Blockly.Arduino.ORDER_MEMBER];
};
Blockly.Arduino['haodabit_wifi_read_name'] = function(block) {
	Blockly.Arduino.definitions_['haodabit_wifi'] = '#include <iot.h>';
  Blockly.Arduino.setups_['haodabit_wifi'] = 'Serial1.begin(115200);\n';
  var string = Blockly.Arduino.valueToCode(block, 'string', Blockly.Arduino.ORDER_ATOMIC);
  var STR = Blockly.Arduino.valueToCode(block, 'STR', Blockly.Arduino.ORDER_ATOMIC);
  var code = 'read_name('+STR+','+string+')';
   //code += 'i2clcd.print('+string+');\n';
  return [code, Blockly.Arduino.ORDER_MEMBER];
};
Blockly.Arduino['haodabit_wifi_read'] = function(block) {
	Blockly.Arduino.definitions_['haodabit_wifi'] = '#include <iot.h>';
  Blockly.Arduino.setups_['haodabit_wifi'] = 'Serial1.begin(115200);\n';
  var io = block.getFieldValue('state');
  var code = 'get'+io+'()';
   //code += 'i2clcd.print('+string+');\n';
  return [code, Blockly.Arduino.ORDER_MEMBER];
};
Blockly.Arduino['haodabit_Motor'] = function(block) {
  var io = block.getFieldValue('ioinput');
  var n = Blockly.Arduino.valueToCode(block, 'speed', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['haodabit_motor'] = 'void Motor_s(int dianji,int speed){\n	if(dianji==0){\n		pinMode(4,1);\n		if(speed>0){\n			analogWrite(20,speed);\n			digitalWrite(4,0);\n		}else{\n			analogWrite(20,0-speed);\n			digitalWrite(4,1);\n		}\n	}else{\n		pinMode(6,1);\n		if(speed>0){\n			analogWrite(21,speed);\n			digitalWrite(6,0);\n		}else{\n			analogWrite(21,0-speed);\n			digitalWrite(6,1);\n		}\n	}\n}';
  Blockly.Arduino.setups_['haodabit_motor'] = '	pinMode(4,OUTPUT);\n	pinMode(6,OUTPUT);\n';
  var code = 'Motor_s('+io+','+n+');\n';
  return code;
};
Blockly.Arduino['haodabit_millis'] = function(block) {
	//Blockly.Arduino.definitions_['haodabit_wifi'] = '#include <iot.h>';
  //Blockly.Arduino.setups_['haodabit_wifi'] = 'Serial1.begin(115200);\n';
  //var io = block.getFieldValue('state');
  var code = 'millis()';
   //code += 'i2clcd.print('+string+');\n';
  return [code, Blockly.Arduino.ORDER_MEMBER];
};