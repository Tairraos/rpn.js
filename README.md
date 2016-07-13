## <ruby>逆波兰表达式工具<rt>Reverse Polish Notation tools</rt></ruby>

### 1. 介绍
  
Translate infix expression to reverse polish notation (postfix expression).  
Calculate reverse polish notation.  
support + - * / ^ % ! √ ( ) —   



----

### 2. 接口
#### 2.1 计算普通算式表达式：
``` rpn.calc(expression)``` 或 ``` rpn.calculate(expression) ```
##### 范例
```
rpn.calc('1+2+3');
6
rpn.calc('8!');
40320
rpn.calc('√81');
9
rpn.calc('√√81!');
6
rpn.calc('1+2+3+4+5+√√81!');
21
rpn.calc('1+2*3+4/5');
7.8
rpn.calc('1+2^3');
9
rpn.calc('1%+2^3');
8.01
rpn.calc('15%+2^3');
8.15
```

#### 2.2 转换普通算式表达式为逆波兰表达式：
``` rpn.infix2rpn(expression) ```
#### 范例
```
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

#### 2.3 计算逆波兰表达式：
``` rpn.rpnCalculate(expression) ```
#### 范例
```
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
````
----

### 3. 调试及测试
- ``` mocha ``` 
如果本机已经全局安装过 mocha 测试工具，那直接用 mocha 命令就可以运行所有的测试
- ``` npm install ``` 命令会安装本工具单元测试所需要的 mocha 以及生所测试报告的工具 mochawesome
- ``` npm test ``` 会调用 test.sh 脚本启动测试，并在测试完成后在浏览器里打开测试报告


Reverse Polish Notation tools.   
Translate infix expression to reverse polish notation (postfix expression).  
Calculate reverse polish notation.  
support + - * / ^ % ! √ ( ) —   

