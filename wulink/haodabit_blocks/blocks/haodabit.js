'use strict';

goog.provide('Blockly.Blocks.colour');
goog.require('Blockly.Blocks');
goog.require('Blockly.constants');

Blockly.FieldColour.COLOURS = ['#f00', '#e00', '#d00', '#c00', '#b00', '#a00',
                               '#800', '#600', '#400', '#000'];
Blockly.FieldColour.COLUMNS = 5;

Blockly.Blocks['haodabit_digitalinput'] = {
    init: function () {
        this.jsonInit({ "colour": 32, "args0": [{"name": "state", "options": [["S0", "16"], ["A0", "8"],["A1", "9"], ["A2", "14"]], "type": "field_dropdown"}], "output": ["Boolean","Number"], "helpUrl": "http://haohaodada.com", "tooltip": "管脚数字输入高低电平", "message0": "读数字口 %1 " });
    }
};

Blockly.Blocks['haodabit_analoginput'] = {
    init: function () {
        this.jsonInit({ "colour": 32, "args0": [{"name": "state", "options": [["A0", "0"],["A1", "1"], ["A2", "6"]], "type": "field_dropdown"}], "output": "Number", "helpUrl": "http://haohaodada.com", "tooltip": "管脚模拟输入0-1023", "message0": "读模拟口 %1 " });
    }
};

Blockly.Blocks['haodabit_analogoutput'] = {
    init: function () {
        this.jsonInit({ "inputsInline": true, "nextStatement": null, "previousStatement": null, "helpUrl": "http://www.haohaodada.com/", "colour": 32, "tooltip": "设置IO口输出模拟值。", "message0": "设置PWM口 %1 输出为（0-255） %2 ", "args0": [{"name": "state", "options": [["S0", "16"]], "type": "field_dropdown"},{ "check": "Number", "type": "input_value", "name": "value"}] });
    }
};

Blockly.Blocks['haodabit_digitaloutput'] = {
    init: function () {
        this.jsonInit({ "inputsInline": true, "nextStatement": null, "previousStatement": null, "helpUrl": "http://www.haohaodada.com/", "colour": 32, "tooltip": "设置IO口输出高低电平。", "message0": "设置数字口 %1 输出为 %2 ", "args0": [{"name": "state", "options": [["S0", "16"], ["A0", "8"],["A1", "9"], ["A2", "14"]], "type": "field_dropdown"},{ "name": "valueout", "options": [["低", "0"], ["高", "1"]], "type": "field_dropdown"}] });
    }
};
Blockly.Blocks['haodabit_DELAY'] = {
    init: function () {
        this.jsonInit({ "inputsInline": true, "nextStatement": null, "previousStatement": null, "helpUrl": "http://www.haohaodada.com/", "colour": 120, "tooltip": "延时一段时间。", "message0": "延时 %1 %2 ", "args0": [{ "check": "Number", "type": "input_value", "name": "ioinput"},{"name": "state", "options": [["毫秒", "delay"], ["微秒", "delayMicroseconds"]], "type": "field_dropdown"}] });
    }
};
Blockly.Blocks['haodabit_display11'] = {
    init: function () {
        this.jsonInit({ "inputsInline": true, "nextStatement": null, "previousStatement": null, "helpUrl": "http://www.haohaodada.com/", "colour": 32, "tooltip": "数码管显示", "message0": "数码管显示 %1 %2 ", "args0": [{"name": "state", "options": [["Num", "Num"], ["Float", "Float"]], "type": "field_dropdown"},{ "check": ["Number","Boolean"], "type": "input_value", "name": "ioinput"}] });
    }
};
Blockly.Blocks['haodabit_display12'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null, "helpUrl": "http://www.haohaodada.com/", "colour": 32, "tooltip": "数码管清除", "message0": "数码管清除 "});
    }
};
Blockly.Blocks['haodabit_button'] = {
    init: function () {
        this.jsonInit({ "helpUrl": "http://www.haohaodada.com/", "colour": 32, "tooltip": "读取板载按键状态。", "message0": "读板载 %1 按键", "args0": [{"name": "state", "options": [["A", "3"], ["B", "2"]], "type": "field_dropdown"}], "output": ["Boolean","Number"]});
    }
};
Blockly.Blocks['haodabit_DHT11_read'] = {
    init: function () {
        this.jsonInit({ "helpUrl": "http://www.haohaodada.com/", "colour": 32,  "output": "Number","tooltip": "读取DHT11的温湿度值在设置端口。", "message0": "读DHT11的 %1 在引脚 %2 ", "args0": [{"name": "state", "options": [["温度值", "temperature"], ["湿度值", "humidity"]], "type": "field_dropdown"},{"name": "IO", "options": [["S0", "16"], ["A0", "8"],["A1", "9"], ["A2", "14"]], "type": "field_dropdown"}]});
    }
};
Blockly.Blocks['haodabit_MMA7660'] = {
    init: function () {
        this.jsonInit({ "helpUrl": "http://www.haohaodada.com/", "colour": 32,  "output": "Number","tooltip": "读取板载加速度传感器值。", "message0": "读板载加速度计 %1 ", "args0": [{"name": "state", "options": [["X", "0"], ["Y", "1"], ["Z", "2"]], "type": "field_dropdown"}]});
    }
};
Blockly.Blocks['haodabit_MMA7660_shake'] = {
    init: function () {
        this.jsonInit({ "helpUrl": "http://www.haohaodada.com/", "colour": 32,  "output": "Number","tooltip": "读板子是否晃动，晃动输出1，静止输出0。", "message0": "检测到摇晃"});
    }
};
Blockly.Blocks['haodabit_MAG3110'] = {
    init: function () {
        this.jsonInit({ "helpUrl": "http://www.haohaodada.com/", "colour": 32,  "output": "Number","tooltip": "读取板载电子罗盘值。", "message0": "读板载指南针（°）"});
    }
};
Blockly.Blocks['haodabit_MAG3110_init'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null, "helpUrl": "http://www.haohaodada.com/", "colour": 32,  "tooltip": "校准板载电子罗盘。\n 保持wulink水平放置,以板子中心旋转5秒\n（5秒内旋转次数越多数据越准确）", "message0": "校准板载指南针"});
    }
};







Blockly.Blocks['haodabit_MP3_play'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "tooltip": "mp3模式设置。", "message0": "MP3 %1 在 %2 ", "args0": [{"name": "state", "options": [["播放", "play"], ["暂停", "pause"],["停止", "stop"], ["循环播放", "loop_play"],["随机播放", "random_play"], ["下一曲", "next_song"],["上一曲", "last_song"], ["音量加", "vol_up"],["音量减","vol_dn"]], "type": "field_dropdown"},{"name": "STATE", "options": [["S0", "16"], ["A0", "8"],["A1", "9"], ["A2", "14"]], "type": "field_dropdown"}], "inputsInline": true});
    }
};
Blockly.Blocks['haodabit_MP3_playnum'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "tooltip": "mp3播放曲目。", "message0": "MP3播放曲目 %1 在 %2 ", "args0": [{ "check": "Number", "type": "input_value", "name": "num"},{"name": "state", "options": [["S0", "16"], ["A0", "8"],["A1", "9"], ["A2", "14"]], "type": "field_dropdown"}], "inputsInline": true});
    }
};
Blockly.Blocks['haodabit_MP3_vol'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "tooltip": "mp3播放音量设置。", "message0": "MP3播放音量（0-100） %1 在 %2 ", "args0": [{ "check": "Number", "type": "input_value", "name": "num"},{"name": "state", "options": [["S0", "16"], ["A0", "8"],["A1", "9"], ["A2", "14"]], "type": "field_dropdown"}], "inputsInline": true});
    }
};
Blockly.Blocks['haodabit_OLED_setpixel'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{ "check": "Number", "type": "input_value", "name": "num"},{ "check": "Number", "type": "input_value", "name": "num1"}], "inputsInline": true,  "tooltip": "OLED显示点（x,y）", "message0": "OLED写入点在第 %1 行第 %2 列" });
    }
};
Blockly.Blocks['haodabit_OLED_clear'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32,"tooltip": "OLED液晶屏清除。", "message0": "OLED清除" });
    }
};
Blockly.Blocks['haodabit_OLED_display'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32,"tooltip": "OLED液晶屏显示。", "message0": "OLED显示" });
    }
};
Blockly.Blocks['haodabit_OLED_displaynum'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{"check": "Number", "type": "input_value", "name": "COW"},{"check": "Number", "type": "input_value", "name": "ROW"} ,{ "check": ["Number","Boolean"], "type": "input_value", "name": "num"}], "inputsInline": true,  "tooltip": "OLED在第 X 列和 Y 行显示数字", "message0": "OLED写入数 %3 在第 %1 行 第 %2 列" });
    }
};
Blockly.Blocks['haodabit_OLED_displaystring'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{"check": "Number", "type": "input_value", "name": "COW"},{"check": "Number", "type": "input_value", "name": "ROW"},{  "type": "input_value", "name": "string"}], "inputsInline": true,  "tooltip": "OLED在第 X 列和 Y 行显示文本", "message0": "OLED写入文本 %3 在第 %1 行 第 %2 列" });
    }
};
Blockly.Blocks['haodabit_NeoPixel_set'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{"name": "state", "options": [["S0", "16"], ["A0", "8"],["A1", "9"], ["A2", "14"]], "type": "field_dropdown"},{"check": "Number", "type": "input_value", "name": "num"}], "inputsInline": true,  "tooltip": "RGB复位", "message0": "初始化RGB共 %2 个在 %1" });
    }
};
Blockly.Blocks['haodabit_NeoPixel_display'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{"name": "state", "options": [["S0", "16"], ["A0", "8"],["A1", "9"], ["A2", "14"]], "type": "field_dropdown"},{"check": "Number", "type": "input_value", "name": "r"},{ "check": "Number", "type": "input_value", "name": "g"},{"check": "Number", "type": "input_value", "name": "b"},{"check": "Number", "type": "input_value", "name": "num"}], "inputsInline": true,  "tooltip": "第n个RGB显示R值G值B值", "message0": "第 %5 个RGB在 %1 显示R %2 G %3 B %4" });
    }
};
Blockly.Blocks['haodabit_Buzzer'] = {
    init: function () {
        this.jsonInit({"nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{"check": "Number", "type": "input_value", "name": "io"}], "inputsInline": true, "tooltip": "蜂鸣器输出声音强度", "message0": "设置板载蜂鸣器音量为（0-255）%1" });
    }
};
Blockly.Blocks['haodabit_Buzzer2'] = {
    init: function () {
        this.jsonInit({"nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{"check": "Number", "type": "input_value", "name": "io"}], "inputsInline": true, "tooltip": "蜂鸣器输出频率", "message0": "设置板载蜂鸣器频率为 %1 Hz" });
    }
};
Blockly.Blocks['haodabit_Buzzer1'] = {
    init: function () {
        this.jsonInit({"nextStatement": null, "previousStatement": null,"helpUrl": "https://haohaodada.com", "colour": 32, "args0": [{"name": "state", "options": [['低DO', "262"], ['低RE', "294"], ['低MI', "330"],
                       ['低FA', "349"], ['低SO', "392"], ['低LA', "440"],
                       ['低XI', "494"], ['中DO', "523"], ['中RE', "587"], 
                       ['中MI', "659"],['中FA', "698"], ['中SO', "784"], 
                       ['中LA', "880"],['中XI', "988"], ['高DO', "1046"], 
                       ['高RE', "1175"], ['高MI', "1318"],['高FA', "1397"], 
                       ['高SO', "1568"], ['高LA', "1760"],['高XI', "1967"]
                      ], "type": "field_dropdown"}], "inputsInline": true, "tooltip": "蜂鸣器输出频率", "message0": "设置板载蜂鸣器音调为 %1" });
    }
};
Blockly.Blocks['haodabit_IR_NEC'] = {
    init: function () {
        this.jsonInit({"nextStatement": null, "previousStatement": null,"helpUrl": "https://haohaodada.com", "colour": 32, "args0": [{"check": "Number", "type": "input_value", "name": "ADDR"},{"check": "Number", "type": "input_value", "name": "VALUE"}],"inputsInline": true,"tooltip": "红外发射数据", "message0": "板载红外发射 地址%1 数据 %2" });
    }
};
Blockly.Blocks['haodabit_IR'] = {
    init: function () {
        this.jsonInit({"nextStatement": null, "previousStatement": null,"helpUrl": "https://haohaodada.com", "colour": 32, "args0": [{ "name": "band", "options": [["格力", "1"], ["美的", "2"],["大金", "3"]], "type": "field_dropdown"},{"check": "Number", "type": "input_value", "name": "type"},{ "name": "power", "options": [["开", "0"], ["关", "1"]], "type": "field_dropdown"},{ "name": "mode", "options": [["自动", "0"], ["制冷", "1"],["除湿", "2"], ["通风", "3"], ["制热", "4"]], "type": "field_dropdown"},{"check": "Number", "type": "input_value", "name": "temp"},{ "name": "speed", "options": [["关", "0"], ["低", "1"],["中", "2"], ["高", "3"], ["自动", "4"]], "type": "field_dropdown"},{ "name": "dire", "options": [["自动", "0"], ["风向1", "1"],["风向2", "2"], ["风向3", "3"],["风向4", "4"]], "type": "field_dropdown"}],"inputsInline": true,"tooltip": "电机转速设置", "message0": "空调红外发射 品牌 %1 型号 %2 开关 %3 模式 %4 温度 %5 风速 %6 风向 %7" });
    }
};
Blockly.Blocks['haodabit_IRREC'] = {
    init: function () {
        this.jsonInit({"output":"Number","helpUrl": "http://www.haohaodada.com/", "colour": 32,  "inputsInline": true, "tooltip": "读取红外键值", "message0": "读板载红外接收值" });
    }
};

Blockly.Blocks['haodabit_IRREC_value'] = {
    init: function () {
        this.jsonInit({"output":"Number","helpUrl": "http://www.haohaodada.com/", "colour": 32,"args0": [{"name": "state", "options": [['0', "79"], ['1', "255"], ['2', "127"],
                       ['3', "191"], ['4', "223"], ['5', "95"],
                       ['6', "159"], ['7', "239"], ['8', "111"], 
                       ['9', "175"],['#', "143"], ['*', "207"], 
                       ['↑', "119"],['↓', "103"], ['←', "215"], 
                       ['→', "151"], ['OK', "87"]
                      ], "type": "field_dropdown"}]  ,"tooltip": "红外键值", "message0": "红外按键 %1 值" });
    }
};

Blockly.Blocks['haodabit_temp'] = {
    init: function () {
        this.jsonInit({"helpUrl": "http://www.haohaodada.com/", "colour": 32,  "inputsInline": true, "output":"Number", "tooltip": "读板载温度传感器", "message0": "读板载温度传感器（℃）" });
    }
};
Blockly.Blocks['haodabit_light'] = {
    init: function () {
        this.jsonInit({"helpUrl": "http://www.haohaodada.com/", "colour": 32,  "inputsInline": true, "output":"Number", "tooltip": "读板载光线传感器", "message0": "读板载亮度传感器" });
    }
};
Blockly.Blocks['haodabit_ultrasonic'] = {
    init: function () {
        this.jsonInit({"helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{"name": "state", "options": [["S0", "16"], ["A0", "8"],["A1", "9"], ["A2", "14"]], "type": "field_dropdown"}], "inputsInline": true, "output":"Number", "tooltip": "读超声波测距传感器", "message0": "读超声波传感器在 %1 " });
    }
};
Blockly.Blocks['haodabit_Servo'] = {
    init: function () {
        this.jsonInit({"nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{"name": "state", "options": [["S0", "16"], ["A0", "8"],["A1", "9"], ["A2", "14"]], "type": "field_dropdown"},{"check": "Number", "type": "input_value", "name": "io"}],"inputsInline": true, "tooltip": "舵机输出角度值", "message0": "设置舵机 %1 角度为（0-180）%2" });
    }
};
Blockly.Blocks['haodabit_LCD1602_CLEAR'] = {
    init: function () {
        this.jsonInit({"nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32,  "tooltip": "LCD1602清除屏幕", "message0": "LCD1602清除" });
    }
};
Blockly.Blocks['haodabit_LCD1602_setadr'] = {
    init: function () {
        this.jsonInit({"nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{"check": "Number", "type": "input_value", "name": "io"}],"inputsInline": true, "tooltip": "LCD1602地址设置", "message0": "初始化LCD1602地址（10进制）%1" });
    }
};
Blockly.Blocks['haodabit_LCD1602_displaynum'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{"name": "COW", "options": [["1", "1"],["2","2"]], "type": "field_dropdown"}, { "name": "ROW", "options": [["1", "1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["14","14"],["15","15"],["16","16"]], "type": "field_dropdown"},{ "check": "Number","type": "input_value", "name": "num"}], "inputsInline": true,  "tooltip": "LCD1602在第X行Y列显示数字", "message0": "LCD1602写入数 %3 在第 %2 行 第 %1 列" });
    }
};
Blockly.Blocks['haodabit_LCD1602_displaystring'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{"name": "COW", "options": [["1", "1"],["2","2"]], "type": "field_dropdown"}, { "name": "ROW", "options": [["1", "1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["14","14"],["15","15"],["16","16"]], "type": "field_dropdown"},{ "check": "String", "type": "input_value", "name": "string"}], "inputsInline": true,  "tooltip": "LCD1602在第X行Y列显示字符串", "message0": "LCD1602写入文本 %3 在第 %2 行 第 %1 列" });
    }
};
Blockly.FieldCheckbox.CHECK_CHAR="■";
Blockly.Blocks.LedArray = {
  init: function() {
    this.appendDummyInput("").appendField("点阵屏           滚动方式").appendTitle(new Blockly.FieldDropdown([["无", "0"],["↑", "1"],["↓", "2"],["←", "3"],["→", "4"]]), "dire").appendField("          滚动速度为(0-15)").appendField(new Blockly.FieldTextInput("10"), "num");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a00").appendField(new Blockly.FieldCheckbox("FALSE"), "a10").appendField(new Blockly.FieldCheckbox("TRUE"), "a20").appendField(new Blockly.FieldCheckbox("FALSE"), "a30").appendField(new Blockly.FieldCheckbox("TRUE"), "a40").appendField(new Blockly.FieldCheckbox("FALSE"), "a50").appendField(new Blockly.FieldCheckbox("FALSE"), "a60").appendField(new Blockly.FieldCheckbox("FALSE"), "a70").appendField(new Blockly.FieldCheckbox("TRUE"), "a80")
    .appendField(new Blockly.FieldCheckbox("TRUE"), "a90").appendField(new Blockly.FieldCheckbox("FALSE"), "a100").appendField(new Blockly.FieldCheckbox("FALSE"), "a110").appendField(new Blockly.FieldCheckbox("FALSE"), "a120").appendField(new Blockly.FieldCheckbox("TRUE"), "a130").appendField(new Blockly.FieldCheckbox("FALSE"), "a140").appendField(new Blockly.FieldCheckbox("TRUE"), "a150").appendField(new Blockly.FieldCheckbox("FALSE"), "a160").appendField(new Blockly.FieldCheckbox("FALSE"), "a170")
	.appendField(new Blockly.FieldCheckbox("FALSE"), "a180").appendField(new Blockly.FieldCheckbox("FALSE"), "a190").appendField(new Blockly.FieldCheckbox("FALSE"), "a200").appendField(new Blockly.FieldCheckbox("FALSE"), "a210").appendField(new Blockly.FieldCheckbox("FALSE"), "a220").appendField(new Blockly.FieldCheckbox("FALSE"), "a230");
	this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a01").appendField(new Blockly.FieldCheckbox("TRUE"), "a11").appendField(new Blockly.FieldCheckbox("TRUE"), "a21").appendField(new Blockly.FieldCheckbox("TRUE"), "a31").appendField(new Blockly.FieldCheckbox("TRUE"), "a41").appendField(new Blockly.FieldCheckbox("TRUE"), "a51").appendField(new Blockly.FieldCheckbox("FALSE"), "a61").appendField(new Blockly.FieldCheckbox("TRUE"), "a71").appendField(new Blockly.FieldCheckbox("FALSE"), "a81")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a91").appendField(new Blockly.FieldCheckbox("TRUE"), "a101").appendField(new Blockly.FieldCheckbox("FALSE"), "a111").appendField(new Blockly.FieldCheckbox("TRUE"), "a121").appendField(new Blockly.FieldCheckbox("TRUE"), "a131").appendField(new Blockly.FieldCheckbox("TRUE"), "a141").appendField(new Blockly.FieldCheckbox("TRUE"), "a151").appendField(new Blockly.FieldCheckbox("TRUE"), "a161").appendField(new Blockly.FieldCheckbox("TRUE"), "a171")
	.appendField(new Blockly.FieldCheckbox("TRUE"), "a181").appendField(new Blockly.FieldCheckbox("TRUE"), "a191").appendField(new Blockly.FieldCheckbox("TRUE"), "a201").appendField(new Blockly.FieldCheckbox("TRUE"), "a211").appendField(new Blockly.FieldCheckbox("TRUE"), "a221").appendField(new Blockly.FieldCheckbox("TRUE"), "a231");
	this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a02").appendField(new Blockly.FieldCheckbox("TRUE"), "a12").appendField(new Blockly.FieldCheckbox("TRUE"), "a22").appendField(new Blockly.FieldCheckbox("TRUE"), "a32").appendField(new Blockly.FieldCheckbox("TRUE"), "a42").appendField(new Blockly.FieldCheckbox("TRUE"), "a52").appendField(new Blockly.FieldCheckbox("FALSE"), "a62").appendField(new Blockly.FieldCheckbox("TRUE"), "a72").appendField(new Blockly.FieldCheckbox("TRUE"), "a82")
    .appendField(new Blockly.FieldCheckbox("TRUE"), "a92").appendField(new Blockly.FieldCheckbox("TRUE"), "a102").appendField(new Blockly.FieldCheckbox("FALSE"), "a112").appendField(new Blockly.FieldCheckbox("TRUE"), "a122").appendField(new Blockly.FieldCheckbox("TRUE"), "a132").appendField(new Blockly.FieldCheckbox("TRUE"), "a142").appendField(new Blockly.FieldCheckbox("TRUE"), "a152").appendField(new Blockly.FieldCheckbox("TRUE"), "a162").appendField(new Blockly.FieldCheckbox("TRUE"), "a172")
	.appendField(new Blockly.FieldCheckbox("TRUE"), "a182").appendField(new Blockly.FieldCheckbox("TRUE"), "a192").appendField(new Blockly.FieldCheckbox("TRUE"), "a202").appendField(new Blockly.FieldCheckbox("TRUE"), "a212").appendField(new Blockly.FieldCheckbox("TRUE"), "a222").appendField(new Blockly.FieldCheckbox("TRUE"), "a232");
	this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a03").appendField(new Blockly.FieldCheckbox("FALSE"), "a13").appendField(new Blockly.FieldCheckbox("TRUE"), "a23").appendField(new Blockly.FieldCheckbox("TRUE"), "a33").appendField(new Blockly.FieldCheckbox("TRUE"), "a43").appendField(new Blockly.FieldCheckbox("FALSE"), "a53").appendField(new Blockly.FieldCheckbox("FALSE"), "a63").appendField(new Blockly.FieldCheckbox("TRUE"), "a73").appendField(new Blockly.FieldCheckbox("FALSE"), "a83")
    .appendField(new Blockly.FieldCheckbox("FALSE"), "a93").appendField(new Blockly.FieldCheckbox("TRUE"), "a103").appendField(new Blockly.FieldCheckbox("FALSE"), "a113").appendField(new Blockly.FieldCheckbox("FALSE"), "a123").appendField(new Blockly.FieldCheckbox("TRUE"), "a133").appendField(new Blockly.FieldCheckbox("TRUE"), "a143").appendField(new Blockly.FieldCheckbox("TRUE"), "a153").appendField(new Blockly.FieldCheckbox("FALSE"), "a163").appendField(new Blockly.FieldCheckbox("TRUE"), "a173")
	.appendField(new Blockly.FieldCheckbox("TRUE"), "a183").appendField(new Blockly.FieldCheckbox("TRUE"), "a193").appendField(new Blockly.FieldCheckbox("TRUE"), "a203").appendField(new Blockly.FieldCheckbox("TRUE"), "a213").appendField(new Blockly.FieldCheckbox("TRUE"), "a223").appendField(new Blockly.FieldCheckbox("TRUE"), "a233");
	this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a04").appendField(new Blockly.FieldCheckbox("FALSE"), "a14").appendField(new Blockly.FieldCheckbox("FALSE"), "a24").appendField(new Blockly.FieldCheckbox("TRUE"), "a34").appendField(new Blockly.FieldCheckbox("FALSE"), "a44").appendField(new Blockly.FieldCheckbox("FALSE"), "a54").appendField(new Blockly.FieldCheckbox("FALSE"), "a64").appendField(new Blockly.FieldCheckbox("FALSE"), "a74").appendField(new Blockly.FieldCheckbox("TRUE"), "a84")
	.appendField(new Blockly.FieldCheckbox("TRUE"), "a94").appendField(new Blockly.FieldCheckbox("FALSE"), "a104").appendField(new Blockly.FieldCheckbox("FALSE"), "a114").appendField(new Blockly.FieldCheckbox("FALSE"), "a124").appendField(new Blockly.FieldCheckbox("FALSE"), "a134").appendField(new Blockly.FieldCheckbox("TRUE"), "a144").appendField(new Blockly.FieldCheckbox("FALSE"), "a154").appendField(new Blockly.FieldCheckbox("FALSE"), "a164").appendField(new Blockly.FieldCheckbox("TRUE"), "a174")
	.appendField(new Blockly.FieldCheckbox("TRUE"), "a184").appendField(new Blockly.FieldCheckbox("TRUE"), "a194").appendField(new Blockly.FieldCheckbox("TRUE"), "a204").appendField(new Blockly.FieldCheckbox("TRUE"), "a214").appendField(new Blockly.FieldCheckbox("TRUE"), "a224").appendField(new Blockly.FieldCheckbox("TRUE"), "a234");
	this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a05").appendField(new Blockly.FieldCheckbox("FALSE"), "a15").appendField(new Blockly.FieldCheckbox("FALSE"), "a25").appendField(new Blockly.FieldCheckbox("FALSE"), "a35").appendField(new Blockly.FieldCheckbox("FALSE"), "a45").appendField(new Blockly.FieldCheckbox("FALSE"), "a55").appendField(new Blockly.FieldCheckbox("FALSE"), "a65").appendField(new Blockly.FieldCheckbox("FALSE"), "a75").appendField(new Blockly.FieldCheckbox("FALSE"), "a85")
	.appendField(new Blockly.FieldCheckbox("FALSE"), "a95").appendField(new Blockly.FieldCheckbox("FALSE"), "a105").appendField(new Blockly.FieldCheckbox("FALSE"), "a115").appendField(new Blockly.FieldCheckbox("FALSE"), "a125").appendField(new Blockly.FieldCheckbox("FALSE"), "a135").appendField(new Blockly.FieldCheckbox("FALSE"), "a145").appendField(new Blockly.FieldCheckbox("FALSE"), "a155").appendField(new Blockly.FieldCheckbox("FALSE"), "a165").appendField(new Blockly.FieldCheckbox("FALSE"), "a175")
	.appendField(new Blockly.FieldCheckbox("TRUE"), "a185").appendField(new Blockly.FieldCheckbox("TRUE"), "a195").appendField(new Blockly.FieldCheckbox("TRUE"), "a205").appendField(new Blockly.FieldCheckbox("TRUE"), "a215").appendField(new Blockly.FieldCheckbox("TRUE"), "a225").appendField(new Blockly.FieldCheckbox("TRUE"), "a235");
	this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a06").appendField(new Blockly.FieldCheckbox("FALSE"), "a16").appendField(new Blockly.FieldCheckbox("FALSE"), "a26").appendField(new Blockly.FieldCheckbox("FALSE"), "a36").appendField(new Blockly.FieldCheckbox("FALSE"), "a46").appendField(new Blockly.FieldCheckbox("FALSE"), "a56").appendField(new Blockly.FieldCheckbox("FALSE"), "a66").appendField(new Blockly.FieldCheckbox("FALSE"), "a76").appendField(new Blockly.FieldCheckbox("FALSE"), "a86")
	.appendField(new Blockly.FieldCheckbox("FALSE"), "a96").appendField(new Blockly.FieldCheckbox("FALSE"), "a106").appendField(new Blockly.FieldCheckbox("FALSE"), "a116").appendField(new Blockly.FieldCheckbox("FALSE"), "a126").appendField(new Blockly.FieldCheckbox("FALSE"), "a136").appendField(new Blockly.FieldCheckbox("FALSE"), "a146").appendField(new Blockly.FieldCheckbox("FALSE"), "a156").appendField(new Blockly.FieldCheckbox("FALSE"), "a166").appendField(new Blockly.FieldCheckbox("FALSE"), "a176")
	.appendField(new Blockly.FieldCheckbox("TRUE"), "a186").appendField(new Blockly.FieldCheckbox("TRUE"), "a196").appendField(new Blockly.FieldCheckbox("TRUE"), "a206").appendField(new Blockly.FieldCheckbox("TRUE"), "a216").appendField(new Blockly.FieldCheckbox("TRUE"), "a226").appendField(new Blockly.FieldCheckbox("TRUE"), "a236");
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(32);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
// Blockly.Blocks['LedArray'] = {
    // init: function () {
        // this.jsonInit({"nextStatement": null, "previousStatement": null,"colour": 32, "args0": [{ "name": "dire", "options":[["无", "0"],["↑", "1"],["↓", "2"],["←", "3"],["→", "4"]], "type": "field_dropdown"},{ "checked": "Number","type": "input_value", "name": "num"},
		// { "checked": false, "type": "field_checkbox","name": "a00" }, { "checked": true, "type": "field_checkbox", "name": "a10" }, { "checked": true, "type": "field_checkbox", "name": "a20" }, { "checked": false, "type": "field_checkbox", "name": "a30" }, { "checked": false, "type": "field_checkbox", "name": "a40" }, { "checked": true, "type": "field_checkbox", "name": "a50" },{ "checked": true, "type": "field_checkbox", "name": "a60" },{ "checked": false, "type": "field_checkbox", "name": "a70" },{ "checked": false, "type": "field_checkbox", "name": "a80" },{ "checked": false, "type": "field_checkbox", "name": "a90" },{ "checked": false, "type": "field_checkbox", "name": "a100" },{ "checked": false, "type": "field_checkbox", "name": "a110" },{ "checked": false, "type": "field_checkbox", "name": "a120" },{ "checked": false, "type": "field_checkbox", "name": "a130" },{ "checked": false, "type": "field_checkbox", "name": "a140" },{ "checked": false, "type": "field_checkbox", "name": "a150" },{ "checked": false, "type": "field_checkbox", "name": "a160" },{ "checked": false, "type": "field_checkbox", "name": "a170" },{ "checked": false, "type": "field_checkbox", "name": "a180" },{ "checked": false, "type": "field_checkbox", "name": "a190" },{ "checked": false, "type": "field_checkbox", "name": "a200" },{ "checked": false, "type": "field_checkbox", "name": "a210" },{ "checked": false, "type": "field_checkbox", "name": "a220" },{ "checked": false, "type": "field_checkbox", "name": "a230" }, { "type": "input_dummy" },    
		// { "checked": false, "type": "field_checkbox","name": "a01" }, { "checked": true, "type": "field_checkbox", "name": "a11" }, { "checked": true, "type": "field_checkbox", "name": "a21" }, { "checked": false, "type": "field_checkbox", "name": "a31" }, { "checked": false, "type": "field_checkbox", "name": "a41" }, { "checked": true, "type": "field_checkbox", "name": "a51" },{ "checked": true, "type": "field_checkbox", "name": "a61" },{ "checked": false, "type": "field_checkbox", "name": "a71" },{ "checked": false, "type": "field_checkbox", "name": "a81" },{ "checked": false, "type": "field_checkbox", "name": "a91" },{ "checked": false, "type": "field_checkbox", "name": "a101" },{ "checked": false, "type": "field_checkbox", "name": "a111" },{ "checked": false, "type": "field_checkbox", "name": "a121" },{ "checked": false, "type": "field_checkbox", "name": "a131" },{ "checked": false, "type": "field_checkbox", "name": "a141" },{ "checked": false, "type": "field_checkbox", "name": "a151" },{ "checked": false, "type": "field_checkbox", "name": "a161" },{ "checked": false, "type": "field_checkbox", "name": "a171" },{ "checked": false, "type": "field_checkbox", "name": "a181" },{ "checked": false, "type": "field_checkbox", "name": "a191" },{ "checked": false, "type": "field_checkbox", "name": "a201" },{ "checked": false, "type": "field_checkbox", "name": "a211" },{ "checked": false, "type": "field_checkbox", "name": "a221" },{ "checked": false, "type": "field_checkbox", "name": "a231" }, { "type": "input_dummy" },
		// { "checked": false, "type": "field_checkbox","name": "a02" }, { "checked": true, "type": "field_checkbox", "name": "a12" }, { "checked": true, "type": "field_checkbox", "name": "a22" }, { "checked": false, "type": "field_checkbox", "name": "a32" }, { "checked": false, "type": "field_checkbox", "name": "a42" }, { "checked": true, "type": "field_checkbox", "name": "a52" },{ "checked": true, "type": "field_checkbox", "name": "a62" },{ "checked": false, "type": "field_checkbox", "name": "a72" },{ "checked": false, "type": "field_checkbox", "name": "a82" },{ "checked": false, "type": "field_checkbox", "name": "a92" },{ "checked": false, "type": "field_checkbox", "name": "a102" },{ "checked": false, "type": "field_checkbox", "name": "a112" },{ "checked": false, "type": "field_checkbox", "name": "a122" },{ "checked": false, "type": "field_checkbox", "name": "a132" },{ "checked": false, "type": "field_checkbox", "name": "a142" },{ "checked": false, "type": "field_checkbox", "name": "a152" },{ "checked": false, "type": "field_checkbox", "name": "a162" },{ "checked": false, "type": "field_checkbox", "name": "a172" },{ "checked": false, "type": "field_checkbox", "name": "a182" },{ "checked": false, "type": "field_checkbox", "name": "a192" },{ "checked": false, "type": "field_checkbox", "name": "a202" },{ "checked": false, "type": "field_checkbox", "name": "a212" },{ "checked": false, "type": "field_checkbox", "name": "a222" },{ "checked": false, "type": "field_checkbox", "name": "a232" }, { "type": "input_dummy" },
		// { "checked": false, "type": "field_checkbox","name": "a03" }, { "checked": true, "type": "field_checkbox", "name": "a13" }, { "checked": true, "type": "field_checkbox", "name": "a23" }, { "checked": false, "type": "field_checkbox", "name": "a33" }, { "checked": false, "type": "field_checkbox", "name": "a43" }, { "checked": true, "type": "field_checkbox", "name": "a53" },{ "checked": true, "type": "field_checkbox", "name": "a63" },{ "checked": false, "type": "field_checkbox", "name": "a73" },{ "checked": false, "type": "field_checkbox", "name": "a83" },{ "checked": false, "type": "field_checkbox", "name": "a93" },{ "checked": false, "type": "field_checkbox", "name": "a103" },{ "checked": false, "type": "field_checkbox", "name": "a113" },{ "checked": false, "type": "field_checkbox", "name": "a123" },{ "checked": false, "type": "field_checkbox", "name": "a133" },{ "checked": false, "type": "field_checkbox", "name": "a143" },{ "checked": false, "type": "field_checkbox", "name": "a153" },{ "checked": false, "type": "field_checkbox", "name": "a163" },{ "checked": false, "type": "field_checkbox", "name": "a173" },{ "checked": false, "type": "field_checkbox", "name": "a183" },{ "checked": false, "type": "field_checkbox", "name": "a193" },{ "checked": false, "type": "field_checkbox", "name": "a203" },{ "checked": false, "type": "field_checkbox", "name": "a213" },{ "checked": false, "type": "field_checkbox", "name": "a223" },{ "checked": false, "type": "field_checkbox", "name": "a233" }, { "type": "input_dummy" },
		// { "checked": false, "type": "field_checkbox","name": "a04" }, { "checked": true, "type": "field_checkbox", "name": "a14" }, { "checked": true, "type": "field_checkbox", "name": "a24" }, { "checked": false, "type": "field_checkbox", "name": "a34" }, { "checked": false, "type": "field_checkbox", "name": "a44" }, { "checked": true, "type": "field_checkbox", "name": "a54" },{ "checked": true, "type": "field_checkbox", "name": "a64" },{ "checked": false, "type": "field_checkbox", "name": "a74" },{ "checked": false, "type": "field_checkbox", "name": "a84" },{ "checked": false, "type": "field_checkbox", "name": "a94" },{ "checked": false, "type": "field_checkbox", "name": "a104" },{ "checked": false, "type": "field_checkbox", "name": "a114" },{ "checked": false, "type": "field_checkbox", "name": "a124" },{ "checked": false, "type": "field_checkbox", "name": "a134" },{ "checked": false, "type": "field_checkbox", "name": "a144" },{ "checked": false, "type": "field_checkbox", "name": "a154" },{ "checked": false, "type": "field_checkbox", "name": "a164" },{ "checked": false, "type": "field_checkbox", "name": "a174" },{ "checked": false, "type": "field_checkbox", "name": "a184" },{ "checked": false, "type": "field_checkbox", "name": "a194" },{ "checked": false, "type": "field_checkbox", "name": "a204" },{ "checked": false, "type": "field_checkbox", "name": "a214" },{ "checked": false, "type": "field_checkbox", "name": "a224" },{ "checked": false, "type": "field_checkbox", "name": "a234" }, { "type": "input_dummy" },
		// { "checked": false, "type": "field_checkbox","name": "a05" }, { "checked": true, "type": "field_checkbox", "name": "a15" }, { "checked": true, "type": "field_checkbox", "name": "a25" }, { "checked": false, "type": "field_checkbox", "name": "a35" }, { "checked": false, "type": "field_checkbox", "name": "a45" }, { "checked": true, "type": "field_checkbox", "name": "a55" },{ "checked": true, "type": "field_checkbox", "name": "a65" },{ "checked": false, "type": "field_checkbox", "name": "a75" },{ "checked": false, "type": "field_checkbox", "name": "a85" },{ "checked": false, "type": "field_checkbox", "name": "a95" },{ "checked": false, "type": "field_checkbox", "name": "a105" },{ "checked": false, "type": "field_checkbox", "name": "a115" },{ "checked": false, "type": "field_checkbox", "name": "a125" },{ "checked": false, "type": "field_checkbox", "name": "a135" },{ "checked": false, "type": "field_checkbox", "name": "a145" },{ "checked": false, "type": "field_checkbox", "name": "a155" },{ "checked": false, "type": "field_checkbox", "name": "a165" },{ "checked": false, "type": "field_checkbox", "name": "a175" },{ "checked": false, "type": "field_checkbox", "name": "a185" },{ "checked": false, "type": "field_checkbox", "name": "a195" },{ "checked": false, "type": "field_checkbox", "name": "a205" },{ "checked": false, "type": "field_checkbox", "name": "a215" },{ "checked": false, "type": "field_checkbox", "name": "a225" },{ "checked": false, "type": "field_checkbox", "name": "a235" }, { "type": "input_dummy" },
		// { "checked": false, "type": "field_checkbox","name": "a06" }, { "checked": true, "type": "field_checkbox", "name": "a16" }, { "checked": true, "type": "field_checkbox", "name": "a26" }, { "checked": false, "type": "field_checkbox", "name": "a36" }, { "checked": false, "type": "field_checkbox", "name": "a46" }, { "checked": true, "type": "field_checkbox", "name": "a56" },{ "checked": true, "type": "field_checkbox", "name": "a66" },{ "checked": false, "type": "field_checkbox", "name": "a76" },{ "checked": false, "type": "field_checkbox", "name": "a86" },{ "checked": false, "type": "field_checkbox", "name": "a96" },{ "checked": false, "type": "field_checkbox", "name": "a106" },{ "checked": false, "type": "field_checkbox", "name": "a116" },{ "checked": false, "type": "field_checkbox", "name": "a126" },{ "checked": false, "type": "field_checkbox", "name": "a136" },{ "checked": false, "type": "field_checkbox", "name": "a146" },{ "checked": false, "type": "field_checkbox", "name": "a156" },{ "checked": false, "type": "field_checkbox", "name": "a166" },{ "checked": false, "type": "field_checkbox", "name": "a176" },{ "checked": false, "type": "field_checkbox", "name": "a186" },{ "checked": false, "type": "field_checkbox", "name": "a196" },{ "checked": false, "type": "field_checkbox", "name": "a206" },{ "checked": false, "type": "field_checkbox", "name": "a216" },{ "checked": false, "type": "field_checkbox", "name": "a226" },{ "checked": false, "type": "field_checkbox", "name": "a236" }, { "type": "input_dummy" },
		// { "checked": false, "type": "field_checkbox","name": "a07" }, { "checked": true, "type": "field_checkbox", "name": "a17" }, { "checked": true, "type": "field_checkbox", "name": "a27" }, { "checked": false, "type": "field_checkbox", "name": "a37" }, { "checked": false, "type": "field_checkbox", "name": "a47" }, { "checked": true, "type": "field_checkbox", "name": "a57" },{ "checked": true, "type": "field_checkbox", "name": "a67" },{ "checked": false, "type": "field_checkbox", "name": "a77" },{ "checked": false, "type": "field_checkbox", "name": "a87" },{ "checked": false, "type": "field_checkbox", "name": "a97" },{ "checked": false, "type": "field_checkbox", "name": "a107" },{ "checked": false, "type": "field_checkbox", "name": "a117" },{ "checked": false, "type": "field_checkbox", "name": "a127" },{ "checked": false, "type": "field_checkbox", "name": "a137" },{ "checked": false, "type": "field_checkbox", "name": "a147" },{ "checked": false, "type": "field_checkbox", "name": "a157" },{ "checked": false, "type": "field_checkbox", "name": "a167" },{ "checked": false, "type": "field_checkbox", "name": "a177" },{ "checked": false, "type": "field_checkbox", "name": "a187" },{ "checked": false, "type": "field_checkbox", "name": "a197" },{ "checked": false, "type": "field_checkbox", "name": "a207" },{ "checked": false, "type": "field_checkbox", "name": "a217" },{ "checked": false, "type": "field_checkbox", "name": "a227" },{ "checked": false, "type": "field_checkbox", "name": "a237" }, { "type": "input_dummy" }],
  // "helpUrl": "http://www.haohaodada.com/","tooltip": "点阵显示图案", "message0": "点阵屏           滚动方式 %1         滚动速度（0-15） %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21 %22 %23 %24 %25 %26 %27 %28 %29 %30 %31 %32 %33 %34 %35 %36 %37 %38 %39 %40 %41 %42 %43 %44 %45 %46 %47 %48 %49 %50 %51 %52 %53 %54 %55 %56 %57 %58 %59 %60 %61 %62 %63 %64 %65 %66 %67 %68 %69 %70 %71 %72 %73 %74 %75 %76 %77 %78 %79 %80 %81 %82 %83 %84 %85 %86 %87 %88 %89 %90 %91 %92 %93 %94 %95 %96 %97 %98 %99 %100 %101 %102 %103 %104 %105 %106 %107 %108 %109 %110 %111 %112 %113 %114 %115 %116 %117 %118 %119 %120 %121 %122 %123 %124 %125 %126 %127 %128 %129 %130 %131 %132 %133 %134 %135 %136 %137 %138 %139 %140 %141 %142 %143 %144 %145 %146 %147 %148 %149 %150 %151 %152 %153 %154 %155 %156 %157 %158 %159 %160 %161 %162 %163 %164 %165 %166 %167 %168 %169 %170 %171 %172 %173 %174 %175 %176 %177 %178 %179 %180 %181 %182 %183 %184 %185 %186 %187 %188 %189 %190 %191 %192 %193 %194 %195 %196 %197 %198 %199 %200 %201 %202"});
	// }		
// };
Blockly.Blocks['haodabit_matrix'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{ "check": "Number", "type": "input_value", "name": "num"},{  "type": "input_value", "name": "string"}], "inputsInline": true,  "tooltip": "点阵屏显示字符", "message0": "点阵屏在第 %1 列显示 %2 " });
    }
};
Blockly.Blocks['haodabit_matrix_setpixel'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{ "check": "Number", "type": "input_value", "name": "num"},{ "check": "Number", "type": "input_value", "name": "num1"}], "inputsInline": true,  "tooltip": "点阵屏显示点（x,y）", "message0": "点阵屏写入点在第 %1 行第 %2 列" });
    }
};
Blockly.Blocks['haodabit_matrix_clrpixel'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{ "check": "Number", "type": "input_value", "name": "num"},{ "check": "Number", "type": "input_value", "name": "num1"}], "inputsInline": true,  "tooltip": "点阵屏清除点（x,y）", "message0": "点阵屏删除点在第 %1 行第 %2 列" });
    }
};
Blockly.Blocks['haodabit_matrix_display'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "inputsInline": true,  "tooltip": "点阵屏显示", "message0": "点阵屏显示点" });
    }
};
Blockly.Blocks['haodabit_matrix_clear'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "inputsInline": true,  "tooltip": "点阵屏清屏", "message0": "点阵屏清除" });
    }
};
Blockly.Blocks['haodabit_matrix_displaystr'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{ "check": "String", "type": "input_value", "name": "string"}], "inputsInline": true,  "tooltip": "点阵屏显示文本", "message0": "点阵屏显示文本 %1 " });
    }
};
Blockly.Blocks['haodabit_matrix_displaynum'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "inputsInline": true,"args0": [{  "check": "Number","type": "input_value", "name": "string"}],  "tooltip": "点阵屏显示数字", "message0": "点阵屏显示数 %1 " });
    }
};
Blockly.Blocks['haodabit_matrix_setBrightness'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "inputsInline": true,"args0": [{  "check": "Number","type": "input_value", "name": "string"}],  "tooltip": "点阵屏设置亮度", "message0": "点阵屏设置亮度为(0~63) %1 " });
    }
};



Blockly.Blocks['haodabit_serial_begin'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{ "check": "Number", "type": "input_value", "name": "num"}], "tooltip": "串口速率设置", "message0": "设置串口速率 %1 " });
    }
};
Blockly.Blocks['haodabit_serial_println'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{"type": "input_value", "name": "num"}], "tooltip": "串口输出并换行", "message0": "串口输出 %1 并换行" });
    }
};
Blockly.Blocks['haodabit_serial_write'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{"type": "input_value", "name": "num"}], "tooltip": "串口输出", "message0": "串口输出 %1 " });
    }
};
Blockly.Blocks['haodabit_serial_available'] = {
    init: function () {
        this.jsonInit({ "output": "Boolean","helpUrl": "http://www.haohaodada.com/", "colour": 32, "inputsInline": true,  "tooltip": "串口数据检测", "message0": "串口数据检测" });
    }
};
Blockly.Blocks['haodabit_serial_read'] = {
    init: function () {
        this.jsonInit({ "output": "String","helpUrl": "http://www.haohaodada.com/", "colour": 32, "inputsInline": true,  "tooltip": "串口数据读入", "message0": "串口数据读入" });
    }
};
Blockly.Blocks['haodabit_wifi_publish'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{"check":"String","type": "input_value", "name": "mac"},{"check":"String","type": "input_value", "name": "string"}],"inputsInline": true,  "tooltip": "物联网发送字符串到mac地址对应设备", "message0": "物联网-发送字符串 %2 到MAC地址 %1 " });
    }
};
Blockly.Blocks['haodabit_wifi_publish_number'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32,"args0": [{"check":"String","type": "input_value", "name": "mac"},{"check":"Number","type": "input_value", "name": "string"}] ,"inputsInline": true,  "tooltip": "物联网发送数字到mac地址对应设备", "message0": "物联网-发送数 %2 到MAC地址 %1  " });
    }
};
Blockly.Blocks['haodabit_wifi_publish_name'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32,"args0": [{"check":"String","type": "input_value", "name": "mac"},{"check":"String","type": "input_value", "name": "string"},{"check":"Number","type": "input_value", "name": "num"}] ,"inputsInline": true,  "tooltip": "物联网发送变量到mac地址对应设备", "message0": "物联网-发送变量 %2 = %3 到MAC地址 %1" });
    }
};
Blockly.Blocks['haodabit_wifi_upload'] = {
    init: function () {
        this.jsonInit({ "nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32,"args0": [{"check":"String","type": "input_value", "name": "string"}] ,"inputsInline": true,  "tooltip": "物联网上传消息到网站", "message0": "物联网-上传字符串 %1 " });
    }
};

Blockly.Blocks['haodabit_wifi_available'] = {
    init: function () {
        this.jsonInit({ "output": "Boolean","helpUrl": "http://www.haohaodada.com/", "colour": 32, "inputsInline": true,  "tooltip": "设备从物联网检测到消息", "message0": "物联网-检测到消息" });
    }
};
Blockly.Blocks['haodabit_wifi_reads'] = {
    init: function () {
        this.jsonInit({ "output": "String","helpUrl": "http://www.haohaodada.com/", "colour": 32, "inputsInline": true,  "tooltip": "设备从物联网读取消息", "message0": "物联网-读取消息" });
    }
};
Blockly.Blocks['haodabit_wifi_read_number'] = {
    init: function () {
        this.jsonInit({ "output": "Number","helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{"check":"String","type": "input_value", "name": "string"}],"inputsInline": true,  "tooltip": "从消息中截取数字", "message0": "物联网-从消息 %1 中读取数" });
    }
};
Blockly.Blocks['haodabit_wifi_read_name'] = {
    init: function () {
        this.jsonInit({ "output": "Number","helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{"check":"String","type": "input_value", "name": "string"},{"check":"String","type": "input_value", "name": "STR"}] ,"inputsInline": true,  "tooltip": "从消息中读取变量的值", "message0": "物联网-从消息 %2 中读取变量 %1 的值" });
    }
};
Blockly.Blocks['haodabit_wifi_read'] = {
    init: function () {
        this.jsonInit({ "output": "String","helpUrl": "https://haohaodada.com", "args0": [{"name": "state", "options": [["网络时间", "time"],["MAC地址","mac"],["版本","version"]], "type": "field_dropdown"}],"colour": 32, "inputsInline": true,  "tooltip": "设备从物联网读取需求信息", "message0": "物联网-读取%1" });
    }
};
Blockly.Blocks['haodabit_Motor'] = {
    init: function () {
        this.jsonInit({"nextStatement": null, "previousStatement": null,"helpUrl": "http://www.haohaodada.com/", "colour": 32, "args0": [{ "name": "ioinput", "options": [["MA", "0"], ["MB", "1"]], "type": "field_dropdown"},{"check": "Number", "type": "input_value", "name": "speed"}],"inputsInline": true, "tooltip": "电机转速设置", "message0": "电机 %1 输出为 %2" });
    }
};
Blockly.Blocks['haodabit_millis'] = {
    init: function () {
        this.jsonInit({"output": "Number","helpUrl": "http://www.haohaodada.com/", "colour": 32, "inputsInline": true, "tooltip": "计时器（毫秒）", "message0": "计时器(ms)" });
    }
};