<?php
define('ROOT_PATH',dirname(__FILE__)."/../");
include(ROOT_PATH."/inc/db_sql.php");

     $shouji="";
    $ua = $_SERVER['HTTP_USER_AGENT'];//这里只进行IOS和Android两个操作系统的判断，其他操作系统原理一样  
    if (strpos($ua, 'Android') !== false) {//strpos()定位出第一次出现字符串的位置，这里定位为0  
       $shouji="ok";
    } elseif (strpos($ua, 'iPhone') !== false) {  
 	$shouji="ok";
    } elseif (strpos($ua, 'iPad') !== false) {  

    } else{$shouji="pc";} 
   


$id=isset($_GET['id'])?$_GET['id']:1;
if(!is_numeric($id))$id=1;
    $sql = "SELECT * FROM pyzuoping WHERE  `id` ='{$id}' ";
	$query=mysql_query($sql);
	$rs=mysql_fetch_array($query);
    $name=$rs['title'];
    if(empty($name)){
		$name="wulink";
	}

	$sessionid=$_COOKIE['sessionid'];

    $sql = "SELECT * FROM loginlog WHERE  `sessionid` ='{$sessionid}'";
	$query=mysql_query($sql);
	$rs=mysql_fetch_array($query);
    $username=$rs['username'];


if(empty($username)){
}else{
    $maclist="";
	$sql = "SELECT * FROM hardnum  WHERE  `username` ='{$username}' ORDER BY chuchang DESC ";
	$query=mysql_query($sql);

	while($rs=mysql_fetch_array($query))
    {
		$mac=$rs['mac'];
		$maclist=$maclist."<option value=\"".$mac."\">".$mac."</option>";
    }

}

mysql_close();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
   
    <head>
        <meta charset="utf-8">
        <title>WULink</title>
        <link rel="stylesheet" type="text/css" href="static/css/style.css" />
        <link rel="stylesheet" type="text/css" href="static/css/vex.css" />
        <link rel="stylesheet" type="text/css" href="static/css/vex-theme-wireframe.css" />
        <link rel="stylesheet" type="text/css" href="static/css/font-awesome.min.css">
<div ><input type="text" id="shouji" value="<?php echo $shouji ?>" style="display: none;" />" </div>
		
    </head>
    <body>

        <script type="application/javascript">
        <!-- VERSION INFORMATION -->
        VERSION = "1.0.0";
        </script>
        <script id="load-template" type="x-tmpl-mustache">
            <h2><i class="fa fa-upload"></i> <strong>{{ title }}</strong></h2>
            <div class="load-drag-target" id="load-drag-target">
                <p>{{ instructions }}</p>
            </div>
            <div class="load-form">
                <form id="load-form-form" style="font-size:12.74px;">
                    <input type="file" name="load-form-file-upload"/><br/>
                    <input type="submit" value="{{ submit }}"/>
                </form>
            </div>
            <div id="load-alt">
                <p><a href="#" class="load-form load-toggle">{{ toggle-drop }}</a></p>
                <p><a href="#" class="load-drag-target load-toggle">{{ toggle-file }}</a></p>
            </div>
        </script>
        <script id="snippet-template" type="x-tmpl-mustache">
            <h2><i class="fa fa-cogs"></i> <strong>{{ title }}</strong></h2>
            <p>{{ description }}</p>
            <p>{{ instructions }}</p>

            <table class="snippet-table">
                <tr>
                    <th>trigger</th>
                    <th>description</th>
                </tr>
                {{#snippets}}
                <tr class="snippet-selection">
                    <td>{{trigger}}<span class="snippet-name">{{name}}</span></td>
                    <td>{{#describe}}{{name}}{{/describe}}</td>
                </tr>
                {{/snippets}}
            </table>

        </script>
        <script id="share-template" type="x-tmpl-mustache">
            <h2><i class="fa fa-share-alt"></i> <strong>{{ title }}</strong></h2>
            <div id="make-link" style="font-size:12.74px;">
                <p>{{ instructions }}</p>
                <p><label for="passphrase" class="share-label">{{ passphrase }}</label> <input id="passphrase" type="password"/></p>
                <p><label for="hint" class="share-label">{{ hint }}</label> <input id="hint"/></p>
                <p><button id="button-create-link">{{ button }}</button></p>
            </div>
            <div id="share-link">
                <p>{{ description }}</p>
                <textarea id="direct-link" readonly style="width:100%; height:200px;border:0;"></textarea>
                <p id="shortener" style="display: none;">{{ shortener }} <a href="#" id="short-link"></a></p>
            </div>
        </script>
        <script id="decrypt-template" type="x-tmpl-mustache">
            <h2><i class="fa fa-unlock-alt"></i> <strong>{{ title }}</strong></h2>
            <p>{{ instructions }}</p>
            <p><label for="passphrase" class="share-label">{{ passphrase }}</label> <input id="passphrase" type="password"/></p>
            <p>{{ hint }}</p>
            <p><button id="button-decrypt-link">{{ button }}</button></p>
        </script>
        <script id="addnew-template" type="x-tmpl-mustache">
            <h2><i class="fa fa-unlock-alt"></i> <strong>{{ title }}</strong></h2>
            <p>{{ instructions }}</p>
            <p><label for="hint" class="share-label">{{ mac }}</label> <input id="hint"/></p>
            <p><button id="button-decrypt-link">{{ button }}</button></p>
        </script>
        <script id="messagebar-template" type="x-tmpl-mustache">
            <i class="fa fa-warning"></i> <strong>{{ title }}</strong>
            <a href="#" id="messagebar-link">{{ link }}</a> {{ instructions }}
            <a href="#" id="messagebar-close">{{ close }}</a>
        </script>
        <div id="main" class="vbox">
          <div id="messagebar" class="hbox"></div>
          <div id="toolbox" class="hbox">
                <div class="vbox" id="script-box" style="width:200px ">
                       <a href="http://www.haohaodada.com/"><img src="static/img/logo.png" style="padding-top:15px" /></span></a>
                </div>

              <table width="350px" height="100px" border="0"><tr><td>
               <div id="commands1" class="hbox" style="height:40px">
                 <div style="vertical-align: middle;display:inline-block;padding:5px 10px;color:#fff;text-decoration:none;font-size:14px;font-weight:bold">作品名称</div>
                 <div style="vertical-align: middle;" >
					<input tpye='text' id="filename" style="width:125px; background-color:#ECECEC" value=<?php echo $name ?> /></div>
					<a href="#" class="roundbutton" id="tuxing-couldsave"
                        tabindex="4"
                        title="保存程序" style="display:none">

                </a>

					<a href="#" class="roundbutton2" id="command-couldsave"
                        tabindex="4"
                        title="保存"> <div style="color:#fff;text-decoration:none;font-size:14px;font-weight:bold">保存</div></a>
<a href="#" class="roundbutton2" id="command-couldnew"
                        tabindex="4"
                        title="新建"> <div style="color:#fff;text-decoration:none;font-size:14px;font-weight:bold">新建</div></a>
				</div>
                </td></tr><tr><td>
                 <div id="commands1" class="hbox" style="height:40px">
                 <div style="vertical-align: middle;display:inline-block;padding:5px 10px;color:#fff;text-decoration:none;font-size:14px;font-weight:bold">设备列表</div>
                  <div style="vertical-align: middle;" >
					<select style="width:130px;height:27px; background-color:#ECECEC" id="mac">
                      <?php echo $maclist ?>
					</select></div><a href="#" class="roundbutton2" id="command-addnew"
                        tabindex="3"
                        title="新增设备"> <div style="color:#fff;text-decoration:none;font-size:14px;font-weight:bold">添加</div></a>
<a href="#"  class="roundbutton2" id="command-del"
                        tabindex="3"
                        title="删除设备"> <div style="color:#fff;text-decoration:none;font-size:14px;font-weight:bold">删除</div></a>
				</div>
               </td></tr></table>
			   
			   

			   
			   
			   
                <div id="commands" class="hbox" style="width:80%;">
    
	
	                <a href="#" class="roundbutton" id="command-download"
                    tabindex="4"
                    title="下载到设备">
                    <div class="roundsymbol">
                     <img src="static/img/xzdsb.png" height="40px" />
                    </div>
                    <div class="roundlabel">下载到设备</div>
                </a>
	            
				 
                <a href="#" class="roundbutton hidden" id="command-blockly"
                    tabindex="4"
                    title="进入可视化编辑器">
                    <div class="roundsymbol">
                      <svg class="svg svg-icon-touchdevelop" viewBox="-20 0 500 550" xmlns="http://www.w3.org/2000/svg" role="presentation" aria-label="touchdevelop,white">
                        <path style="fill:currentColor" d="m 387.2,237.3 c -6.6,0 -12.8,1.3 -18.7,3.4 l 0,-97.2 -97.2,0 c 2.1,-5.9 3.4,-12.1 3.4,-18.8 0,-31.1 -25.2,-56.2 -56.2,-56.2 -31,0 -56.2,25.2 -56.2,56.2 0,6.6 1.4,12.9 3.4,18.8 l -97.1,0 0,300 97.2,0 c -2.1,-5.9 -3.4,-12.1 -3.4,-18.8 0,-31.1 25.2,-56.2 56.2,-56.2 31,0 56.2,25.2 56.2,56.2 0,6.6 -1.3,12.9 -3.4,18.8 l 97.2,0 0,-97.2 c 5.9,2.1 12.1,3.4 18.7,3.4 31.1,0 56.2,-25.2 56.2,-56.2 -0.1,-31.1 -25.2,-56.2 -56.3,-56.2 z"/>
                      </svg>
                    </div>
                    <div class="roundlabel" id="tuxingwen">字符编程</div>
                </a>

                <a href="../Arduino.php" target="_blank" class="roundbutton" id=""
                        tabindex="3"
                        title="项目">
                    <div class="roundsymbol">
<img src="static/img/wjj.png" height="40px" />
                    </div>
                  <div class="roundlabel">最新项目</div>
                </a>


                <a href="../MyArduino.php" target="_blank" class="roundbutton" id=""
                        tabindex="3"
                        title="项目">
                    <div class="roundsymbol">
<img src="static/img/wjj.png" height="40px" />
                    </div>
                  <div class="roundlabel">我的项目</div>
                </a>





                <a href="../Arduinoexa.php" target="_blank" class="roundbutton" id=""
                        tabindex="3"
                        title="项目">
                    <div class="roundsymbol">
<img src="static/img/wjj.png" height="40px" />
                    </div>
                  <div class="roundlabel">例程</div>
                </a>

 			<a href="#" class="roundbutton" id="command-localsave"
                    tabindex="4"
                    title="积木图形程序文件保存到本地">
                    <div class="roundsymbol">
                     <img src="static/img/bcdbe.png" height="40px" />
                    </div>
                    <div class="roundlabel">保存到本地</div>
                </a>
					
								
                <a href="#" class="roundbutton" id="tuxing-upload"
                        tabindex="3"
                        title="打开积木图形程序文件">
                    <div class="roundsymbol">
                     <img src="static/img/cbddk.png" height="40px" />
                    </div>
                  <div class="roundlabel">从本地打开</div>
                </a>
              



            </div>

          </div>
		  
          <div class="hbox flex1">
            <div id="blockly"></div>
            <div id="editor" class="flex3" tabindex="-1"></div>
          </div>
          <!--bottom-->

          <!--bottom end-->
		
        </div>
		  <div ><input type="file" id="load" style="display: none;"/> </div>

        <script src="ace/ace.js" type="application/javascript"
            charset="utf-8"></script>
        <script src="ace/ext-language_tools.js" type="application/javascript"
            charset="utf-8"></script>
        <script src="static/js/jquery-2.1.4.min.js"
            type="application/javascript"></script>
        <script src="static/js/forge.min.js" type="application/javascript"></script>
        <script src="static/js/FileSaver.min.js" type="application/javascript"></script>
        <script src="static/js/vex.combined.min.js"
            type="application/javascript"></script>
        <script src="static/js/encoding.js" type="application/javascript"></script>
        <script src="static/js/mustache.min.js"
            type="application/javascript"></script>
        <script src="blockly/blockly_compressed.js"></script>
        <script src="blockly/blocks_compressed.js"></script>
        <script src="blockly/Arduino_compressed.js"></script>
        <script src="haodabit_blocks/blocks/haodabit.js"></script>
        <script src="haodabit_blocks/generators/buttons.js"></script>
        <script src="haodabit_blocks/generators/Arduino.js"></script>
        <script src="blockly/msg/js/zh-hans.js"></script>
	    <script src="haodabit_blocks/messages/en/messages.js"></script>
        <script src="static/js/ResizeSensor.js"></script>
        <script src="static/js/ElementQueries.js"></script>
        <script src="Arduino-main.js"
            type="application/javascript"></script>
        <script>vex.defaultOptions.className = 'vex-theme-wireframe';</script>
        <script>
// Call the web_editor function to start the editor running.
web_editor({
    'translate': {
      'code_snippets': {
        'title': '代码片段',
        'description': "代码片段是在自己的程序中重用的一小段代码。是微小的python程序中最为常用的小段代码。",
        'instructions': "选择下面的代码片段，或者输入代码片段的触发器，然后点击TAB键。",
        'trigger_heading': '名称',
        'description_heading': '描述',
        'docs': '创建注释来描述代码',
        'wh': '需要创建循环代码',
        'with': '使用想要使用的对象来执行一些操作。',
        'cl': '创建一个新类，可以定义新对象以及其属性。',
        'def': '定义一个函数，可设置需要的参数，并可选地添加一个描述。',
        'if': '判定某些条件是真的，那就执行代码。',
        'ei': '判定其他条件是真的，那就执行代码。',
        'el': '如果是其他的情况，那就执行这里的代码。',
        'for': '遍历所有的内容，当然可以对相应的内容做些操作。',
        'try': '尝试执行代码，并捕获代码发生的异常或错误。'
      },
      'share': {
        'title': '分享代码',
        'instructions': '使用密码和可选提示(帮助您记住密码)，以安全地创建一个链接，以便与他人共享代码。',
        'passphrase': '密码: ',
        'hint': '密码提示: ',
        'button': '创建链接',
        'description': '这个URL指向您的代码:',
        'shortener': '这是您的短链接:'
      },
      'decrypt': {
        'title': '解密源代码',
        'instructions': '输入密码来解密源代码。',
        'passphrase': '密码: ',
        'button': '解密'
      },
      'addnew': {
        'title': '添加新设备',
        'instructions': '序列号在产品标签上格式如：60:01:94:5B:1C:C8',
        'mac': '序列号: ',
        'button': '添加'
      },
      'alerts': {
        'download': '建议使用使用Firefox或Chrome，Safari中将被下载为一个未命名的文件。请将其重命名为以.hex结尾的文件',
        'save': '建议使用使用Firefox或Chrome，Safari中将被下载为一个未命名的文件。请将其重命名为以.py结尾的文件',
        'length': '代码长度过长，已超过内存限制',
        'snippets': '当启用了"可视化编辑"时，"代码片段"就会被禁用'
      },
      'confirms': {
        'quit': "有未保存的代码，确定要退出？",
        'blocks': "有未保存的代码，使用“可视化编辑”会改变代码，可能会造成代码丢失。你想继续吗？"
      },
      'code': {
        'start': "# 在这里添加Python代码\n" +
                 "from microbit import *\n\n\n" +
                 "while True:\n" +
                 "    display.scroll('Hello, haohaodada!')\n" +
                 "    display.show(Image.HEART)\n" +
                 "    sleep(2000)\n\n"+
                 "Image.HEART"
      },
      'drop': {
        'python': '从Python文件中提取',
        'hex': '从hex文件中提取'
      },
      'messagebar': {
        'title': '这个编辑器已经过时',
        'link': '点击这里',

        'instructions': '打开最新版本',
        'close': '关闭'
      },
      'load': {
        'title': '加载脚本或hex文件',
        'instructions': '拖拽并打开hex文件或py文件',
        'submit': '加载',
        'toggle-drop': '或拖拽一个文件',
        'toggle-file': '或选择一个文件'
      }
    },
    'flags': {
      'blocks': true,
      'snippets': true,
      'share': true
    },
});

        </script>
<xml id="blockly-toolbox" style="display: none">
<category ename="Function" name="基础功能" colour="128">
    
		<block type="haodabit_digitalinput"></block>
		<block type="haodabit_digitaloutput"></block>
		<block type="haodabit_analoginput"></block>
		
		<block type="haodabit_analogoutput">
		<value name="value">
		  <shadow type="math_number">
		    <field name="NUM">100</field>
		  </shadow>
		</value>
		</block>
		
  </category>
  <sep></sep>
	<category ename="Loops" name="控制" colour="120">
		<block type="setup"></block>
		<block type="controls_repeat1"></block>
	      <block type="controls_repeat_ext">
		<value name="TIMES">
		  <shadow type="math_number">
		    <field name="NUM">10</field>
		  </shadow>
		</value>
	      </block>
		  <block type="controls_if"></block>
	      <block type="controls_whileUntil"></block>
	      <block type="controls_flow_statements"></block>
		  <block type="haodabit_DELAY">
	<value name="ioinput">
		  <shadow type="math_number">
		    <field name="NUM">1000</field>
		  </shadow>
		</value></block>
	    </category>
		<sep></sep>
		<category ename="Logic" name="数学与逻辑" colour="210">
	      <block type="math_number" gap="32"></block>
	      <block type="math_arithmetic">
		<value name="A">
		  <shadow type="math_number">
		    <field name="NUM">1</field>
		  </shadow>
		</value>
		<value name="B">
		  <shadow type="math_number">
		    <field name="NUM">1</field>
		  </shadow>
		</value>
	      </block>
	      <block type="logic_compare"></block>
	      <block type="logic_operation"></block>
	      <block type="logic_negate"></block>
		  <block type="math_random_int">
		<value name="FROM">
		  <shadow type="math_number">
		    <field name="NUM">1</field>
		  </shadow>
		</value>
		<value name="TO">
		  <shadow type="math_number">
		    <field name="NUM">100</field>
		  </shadow>
		</value>
	      </block>
		  <block type="math_modulo">
		<value name="DIVIDEND">
		  <shadow type="math_number">
		    <field name="NUM">64</field>
		  </shadow>
		</value>
		<value name="DIVISOR">
		  <shadow type="math_number">
		    <field name="NUM">10</field>
		  </shadow>
		</value>
	      </block>
		  <block type="math_round">
		<value name="NUM">
		  <shadow type="math_number">
		    <field name="NUM">3.1</field>
		  </shadow>
		</value>
	      </block>
	      <block type="math_single">
		<value name="NUM">
		  <shadow type="math_number">
		    <field name="NUM">9</field>
		  </shadow>
		</value>
	      </block>
		  <block type="math_map" gap="32">
			  <value name="min1">
				<shadow type="math_number">
					<field name="NUM">1</field>
				</shadow>
			  </value>
			  <value name="min2">
				<shadow type="math_number">
					<field name="NUM">100</field>
				</shadow>
			  </value>
			  <value name="max1">
				<shadow type="math_number">
					<field name="NUM">1</field>
				</shadow>
			  </value>
			  <value name="max2">
				<shadow type="math_number">
					<field name="NUM">1000</field>
				</shadow>
			  </value>
		  </block>
	    </category>
		<sep></sep>
	    <!-- <category ename="Text" name="文本" colour="160"> -->
	      <!-- <block type="text"></block> -->
	      <!-- <block type="text_join"></block> -->
	      <!-- <block type="text_length"> -->
		<!-- <value name="VALUE"> -->
		  <!-- <shadow type="text"> -->
		    <!-- <field name="TEXT">abc</field> -->
		  <!-- </shadow> -->
		<!-- </value> -->
	      <!-- </block> -->
		  <!-- <block type="text_isEmpty"></block> -->
		  
	    <!-- </category> -->
		<!-- <sep></sep> -->
	    <category ename="Lists" name="文本与数组" colour="260">
		<block type="text"></block>
		<block type="text_char"></block>
	      <block type="text_join"></block>
	      <block type="text_length">
		<value name="VALUE">
		  <shadow type="text">
		    <field name="TEXT">abc</field>
		  </shadow>
		</value>
	      </block>
		  
		  
		  <block type="text_toint"></block>
		  <block type="text_indexOf"></block>
		  <block type="text_substring"></block>
		  <block type="text_isEmpty"></block>
	      <block type="lists_create_with"></block>
	      <block type="lists_length"></block>
	      <block type="lists_create_num"></block>
	      <block type="lists_getIndex">
		<value name="VALUE">
		  <block type="variables_get">
		    <field name="VAR">list</field>
		  </block>
		</value>
	      </block>
	      <block type="lists_setIndex">
		<value name="LIST">
		  <block type="variables_get">
		    <field name="VAR">list</field>
		  </block>
		</value>
	      </block>
	    </category>
		<sep></sep>
		<category ename="Variables" name="变量" colour="330" custom="VARIABLE"></category>
		<sep></sep>
		<category ename="procedures" name="函数" colour="380" custom="PROCEDURE"></category>
		<sep></sep>
  <!-- <category ename="Sensor" name="动作及声音" colour="32"> -->
	
  <!-- </category> -->
  <!-- <sep></sep> -->
  <!-- <category ename="Executor" name="声音" colour="64"> -->
    
  <!-- </category> -->
  <!-- <sep></sep> -->
  <category ename="Display" name="点阵屏" colour="96">
		<block type="haodabit_matrix_clear">
		</block>
		<block type="haodabit_matrix_setBrightness">
		<value name="string">
			<shadow type="math_number">
		    <field name="NUM">30</field>
		  </shadow>
		</value>
		</block>
		<block type="haodabit_matrix_displaynum">
		<value name="string">
			<shadow type="math_number">
		    <field name="NUM">123</field>
		  </shadow>
		</value>
		</block>
		<block type="haodabit_matrix_displaystr">
		<value name="string">
			<shadow type="text">
		    <field name="TEXT">YES</field>
		  </shadow>
		</value>
		</block>
		<block type="haodabit_matrix">
		<value name="num">
			<shadow type="math_number">
		    <field name="NUM">0</field>
		  </shadow>
		</value>
		<value name="string">
		  <shadow type="text_char">
		  <field name="TEXT">A</field>
		  </shadow>
		</value>
		</block>
		<block type="haodabit_matrix_setpixel">
		<value name="num">
			<shadow type="math_number">
		    <field name="NUM">0</field>
		  </shadow>
		</value>
		<value name="num1">
		  <shadow type="math_number">
		  <field name="NUM">0</field>
		  </shadow>
		</value>
		</block>
		<block type="haodabit_matrix_clrpixel">
		<value name="num">
			<shadow type="math_number">
		    <field name="NUM">0</field>
		  </shadow>
		</value>
		<value name="num1">
		  <shadow type="math_number">
		  <field name="NUM">0</field>
		  </shadow>
		</value>
		</block>
		<block type="haodabit_matrix_display">
		</block>
		<block type="LedArray">
		</block>
  </category>
  <sep></sep>
  
  <!-- <sep></sep> -->
  <category ename="Communication" name="物联网" colour="160">
    	<block type="haodabit_wifi_available"></block>

		<block type="haodabit_wifi_reads"></block>
		<block type="haodabit_wifi_read_number"></block>
		<block type="haodabit_wifi_read_name">
		<value name="string">
		  <shadow type="text">
		  <field name="TEXT">name</field>
		  </shadow>
		</value>
		</block>
		<block type="haodabit_wifi_upload">
		<value name="string">
		  <shadow type="text">
		  <field name="TEXT">haohaodada</field>
		  </shadow>
		</value></block>
		<block type="haodabit_wifi_publish">
		<value name="mac">
		  <shadow type="text">
		  <field name="TEXT">5C:CF:7F:62:04:B8</field>
		  </shadow>
		</value>
		<value name="string">
		  <shadow type="text">
		  <field name="TEXT">haohaodada</field>
		  </shadow>
		</value></block>
		<block type="haodabit_wifi_publish_number">
		<value name="mac">
		<shadow type="text">
		  <field name="TEXT">5C:CF:7F:62:04:B8</field>
		  </shadow>
		</value>
		 
		</value>
		<value name="string">
		   <shadow type="math_number">
		    <field name="NUM">4</field>
		  </shadow>
		</value></block>
		<block type="haodabit_wifi_publish_name">
		<value name="mac">
		  <shadow type="text">
		  <field name="TEXT">5C:CF:7F:62:04:B8</field>
		  </shadow>
		</value>
		<value name="string">
		  <shadow type="text">
		  <field name="TEXT">name</field>
		  </shadow>
		</value>
		<value name="num">
		  <shadow type="math_number">
		    <field name="NUM">0</field>
		  </shadow>
		</value></block>
		
		<block type="haodabit_wifi_read"></block>
  </category>
	<sep></sep>    
	    
	   <category ename="Base" name="板载" colour="0">
	
	
		<block type="haodabit_button"></block>
		<block type="haodabit_light"></block>
		<block type="haodabit_temp"></block>
		<block type="haodabit_MMA7660"></block>
		<block type="haodabit_MMA7660_shake"></block>
		<block type="haodabit_Buzzer2">
		<value name="io">
		  <shadow type="math_number">
		    <field name="NUM">523</field>
		  </shadow>
		</value>
		</block>
		<block type="haodabit_Buzzer1"></block>
		<block type="haodabit_Buzzer">
		<value name="io">
		  <shadow type="math_number">
		    <field name="NUM">10</field>
		  </shadow>
		</value>
		</block>
		<block type="haodabit_IRREC"></block>
		<block type="haodabit_IRREC_value"></block>
		<block type="haodabit_IR_NEC">
		<value name="ADDR">
		  <shadow type="math_number">
		    <field name="NUM">10</field>
		  </shadow>
		</value>
		<value name="VALUE">
		  <shadow type="math_number">
		    <field name="NUM">87</field>
		  </shadow>
		</value>
		</block>
		<block type="haodabit_IR">
		<value name="temp">
		  <shadow type="math_number">
		    <field name="NUM">25</field>
		  </shadow>
		</value>
		<value name="type">
		  <shadow type="math_number">
		    <field name="NUM">1</field>
		  </shadow>
		</value>
		</block>
		<block type="haodabit_MAG3110_init"></block>
		<block type="haodabit_MAG3110"></block>
		
	<!-- </category> -->
  </category> 
  <sep></sep>    
  <category ename="Extend" name="扩展" colour="0">
  <block type="haodabit_display12"></block>
	<block type="haodabit_display11">
		<value name="ioinput">
		  <shadow type="math_number">
		    <field name="NUM">1234</field>
		  </shadow>
		</value>
	</block>
	<block type="haodabit_NeoPixel_set">
	<value name="num">
		  <shadow type="math_number">
		    <field name="NUM">4</field>
		  </shadow>
		</value>
	</block>
		<block type="haodabit_NeoPixel_display">
		<value name="num">
		  <shadow type="math_number">
		    <field name="NUM">1</field>
		  </shadow>
		</value>
		<value name="r">
		  <shadow type="math_number">
		    <field name="NUM">20</field>
		  </shadow>
		</value>
		<value name="g">
		  <shadow type="math_number">
		    <field name="NUM">20</field>
		  </shadow>
		</value>
		<value name="b">
		  <shadow type="math_number">
		    <field name="NUM">20</field>
		  </shadow>
		</value></block>
		<block type="haodabit_OLED_clear"></block>
		<block type="haodabit_OLED_setpixel">
		<value name="num">
			<shadow type="math_number">
		    <field name="NUM">0</field>
		  </shadow>
		</value>
		<value name="num1">
		  <shadow type="math_number">
		  <field name="NUM">0</field>
		  </shadow>
		</value>
		</block>
		<block type="haodabit_OLED_displaynum">
		<value name="ROW">
			<shadow type="math_number">
		    <field name="NUM">0</field>
		  </shadow>
		</value>
		<value name="COW">
			<shadow type="math_number">
		    <field name="NUM">0</field>
		  </shadow>
		</value>
		<value name="num">
		  <shadow type="math_number">
		    <field name="NUM">4</field>
		  </shadow>
		</value>
		</block>
		<block type="haodabit_OLED_displaystring">
		<value name="ROW">
			<shadow type="math_number">
		    <field name="NUM">0</field>
		  </shadow>
		</value>
		<value name="COW">
			<shadow type="math_number">
		    <field name="NUM">0</field>
		  </shadow>
		</value>
		<value name="string">
		  <shadow type="text">
		  <field name="TEXT">haohaodada</field>
		  </shadow>
		</value>
		</block>
		<block type="haodabit_OLED_display">
		</block>
		<block type="haodabit_LCD1602_setadr">
		<value name="io">
		  <shadow type="math_number">
		    <field name="NUM">20</field>
		  </shadow>
		</value>
		</block>
		<block type="haodabit_LCD1602_CLEAR"></block>
		<block type="haodabit_LCD1602_displaynum">
		<value name="num">
		  <shadow type="math_number">
		    <field name="NUM">20</field>
		  </shadow>
		</value>
		</block>
		<block type="haodabit_LCD1602_displaystring">
		<value name="string">
		  <shadow type="text">
		  <field name="TEXT">haohaodada</field>
		  </shadow>
		</value>
		</block>
		<block type="haodabit_ultrasonic"></block>
		<block type="haodabit_DHT11_read"></block>
		<block type="haodabit_Servo">
		<value name="io">
		  <shadow type="math_number">
		    <field name="NUM">90</field>
		  </shadow>
		</value>
		</block>
		<block type="haodabit_Motor">
		<value name="speed">
		  <shadow type="math_number">
		    <field name="NUM">50</field>
		  </shadow>
		</value>
		</block>
		<block type="haodabit_MP3_play">
		<value name="ioinput">
		  <shadow type="math_number">
		    <field name="NUM">4</field>
		  </shadow>
		</value></block>
		<block type="haodabit_MP3_playnum">
		<value name="ioinput">
		  <shadow type="math_number">
		    <field name="NUM">4</field>
		  </shadow>
		</value>
		<value name="num">
		  <shadow type="math_number">
		    <field name="NUM">1</field>
		  </shadow>
		</value></block>
		<block type="haodabit_MP3_vol"> 
		<value name="ioinput">
		  <shadow type="math_number"> 
		    <field name="NUM">4</field>
		  </shadow>
		</value>
		<value name="num">
		  <shadow type="math_number">
		    <field name="NUM">1</field>
		  </shadow>
		</value></block>
		<block type="haodabit_serial_begin"></block>
		<block type="haodabit_serial_write"></block>
		<block type="haodabit_serial_println"></block>
		<block type="haodabit_serial_available"></block>
		<block type="haodabit_serial_read"></block>
		<block type="haodabit_millis"></block>
  </category> 
	  </xml>

        <div id="firmware" style="display: none;">:020000040000FA
:1000000000400020ED530100295401002B54010051


:::::::::::::::::::::::::::::::::::::::::::
:04000005000153EDB6
:00000001FF
</div>

<script>

    $(function () {
        //$("#command-blockly").click();
        //var blockly = $('#blockly');

        $("#blockly").height($("#blockly").parent().height());
        //$("#blockly").width("20%");
		//$("#command-blockly").click();
        $("#tuxing-couldsave").click();

    });
</script>
    </body>
</html>
