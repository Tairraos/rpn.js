## <ruby>逆波兰表达式工具<rt>Reverse Polish Notation tool</rt></ruby>

### 1. <ruby>介绍<rt>Intro</rt></ruby>
<ruby>逆波兰表达式工具<rt>Reverse polish notation tool, </rt></ruby>，<ruby>普通表达式 和 逆波兰表达式 互相转换 <rt>translate between infix expression and reverse polish notation, </rt></ruby>，<ruby>计算 普通表达式 和 逆波兰表达式<rt>calculate infix expression and reverse polish notation, </rt></ruby>，<ruby>支持 + - * / ^ % ! √ ( )<rt>support + - * / ^ % ! √ ( ).</rt></ruby>。

<ruby>可以在浏览器里使用，也可以当作Node的模块使用<rt>the tool is both can work in browser and work as a node module.</rt></ruby>。

----
### 2. <ruby>用法<rt>Usage</rt></ruby>
#### 2.1 Node
```javascript
$npm install jsrpn
$node
> let rpn = require('jsrpn');
> console.log(rpn.calculate('1+2+3+4+5+√√81!'));
21
```

#### 2.2 Browser
```HTML
<script src='./rpn.js'></script>
 <script>console.log(rpn.calculate('1+2+3+4+5+√√81!')); //21 </script> 
```

### 3. <ruby>接口<rt>Interface</rt></ruby>
#### 3.1 <ruby>计算算式表达式<rt>Calculate infix expression</rt></ruby>
``` rpn.calculate(expression) ```
##### <ruby>范例<rt>Example</rt></ruby>
```javascript
rpn.calculate('1+2+3');
6
rpn.calculate('8!');
40320
rpn.calculate('√81');
9
rpn.calculate('√√81!');
6
rpn.calculate('1+2+3+4+5+√√81!');
21
rpn.calculate('1+2*3+4/5');
7.8
rpn.calculate('1+2^3');
9
rpn.calculate('1%+2^3');
8.01
rpn.calculate('15%+2^3');
8.15
```

#### 3.2 <ruby>转换算式表达式为逆波兰表达式<rt>Translate infix expression to reverse polish notation</rt></ruby>
``` rpn.infix2rpn(expression) ```
#### <ruby>范例<rt>Example</rt></ruby>
```javascript
rpn.infix2rpn('1+2+3');
"1 2 + 3 +"
rpn.infix2rpn('8!');
"8 !"
rpn.infix2rpn('√81');
"81 √"
rpn.infix2rpn('√√81!');
"81 √ √ !"
rpn.infix2rpn('1+2+3+4+5+√√81!');
"1 2 + 3 + 4 + 5 + 81 √ √ ! +"
rpn.infix2rpn('1+2*3+4/5');
"1 2 3 * + 4 5 / +"
rpn.infix2rpn('1+2^3');
"1 2 3 ^ +"
rpn.infix2rpn('1%+2^3');
"1 % 2 3 ^ +"
rpn.infix2rpn('15%+2^3');
"15 % 2 3 ^ +"
```

#### 3.3 <ruby>计算逆波兰表达式<rt>Calculate reverse polish notation</rt></ruby>
``` rpn.rpnCalculate(expression) ```
#### <ruby>范例<rt>Example</rt></ruby>
```javascript
rpn.rpnCalculate('1 2 + 3 +');
6
rpn.rpnCalculate('8 !');
40320
rpn.rpnCalculate('81 √');
9
rpn.rpnCalculate('81 √ √ !');
6
rpn.rpnCalculate('1 2 + 3 + 4 + 5 + 81 √ √ ! +');
21
rpn.rpnCalculate('1 2 3 * + 4 5 / +');
7.8
rpn.rpnCalculate('1 2 3 ^ +');
9
rpn.rpnCalculate('1 % 2 3 ^ +');
8.01
rpn.rpnCalculate('15 % 2 3 ^ +');
8.15
```

#### 3.4 <ruby>转换逆波兰表达式为算式表达式<rt>Translate reverse polish notation to infix expression</rt></ruby>
``` rpn.rpn2infix(expression) ```
#### <ruby>范例<rt>Example</rt></ruby>
```javascript
rpn.rpn2infix('1 2 + 3 +');
"1 + 2 + 3"
rpn.rpn2infix('8 !');
"8!"
rpn.rpn2infix('81 √');
"√81"
rpn.rpn2infix('81 √ √ !');
"√√81!"
rpn.rpn2infix('1 2 + 3 + 4 + 5 + 81 √ √ ! +');
"1 + 2 + 3 + 4 + 5 + √√81!"
rpn.rpn2infix('1 2 3 * + 4 5 / +');
"1 + 2 * 3 + 4 / 5"
rpn.rpn2infix('1 2 3 ^ +');
"1 + 2 ^ 3"
rpn.rpn2infix('1 % 2 3 ^ +');
"1% + 2 ^ 3"
rpn.rpn2infix('15 % 2 3 ^ +');
"15% + 2 ^ 3"
```

----

### 4. <ruby>调试及测试<rt>Debug and testing</rt></ruby>
- ``` mocha ```
- <ruby>如果有全局安装 'mocha' 工具，用命令直接启动测试<rt>If 'mocha' already installed as a global tool, use command to start testing</rt></ruby>
- ``` npm install ```
- <ruby>安装测试工具 mocha 和 测试报告工具 mochawesome<rt>Use this command to install test tool 'mocha' and test report tool 'mochawesome'</rt></ruby>
- ``` npm test ```
- <ruby>用命令会启动测试，完成后测试报告会显示在浏览器里<rt>Use this command to start testing, and the test report will open in browser after test finish.</rt></ruby>

