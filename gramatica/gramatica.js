/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramatica = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[2,10],$V1=[10,30,31,46],$V2=[2,26],$V3=[1,9],$V4=[1,6],$V5=[1,7],$V6=[1,8],$V7=[1,14],$V8=[1,10,13,17,22,24,25,30,31,46],$V9=[1,26],$Va=[1,29],$Vb=[1,30],$Vc=[1,31],$Vd=[10,13,17,22,24,25,30,31,46],$Ve=[2,6],$Vf=[1,45],$Vg=[1,46],$Vh=[1,47],$Vi=[1,48],$Vj=[1,49],$Vk=[1,50],$Vl=[1,51],$Vm=[1,52],$Vn=[1,53],$Vo=[1,54],$Vp=[1,55],$Vq=[1,56],$Vr=[10,15,28,30,31,32,33,34,35,36,37,38,39,40,41,42,43,46],$Vs=[2,41],$Vt=[1,58],$Vu=[15,28],$Vv=[10,15,28,30,31,32,33,46],$Vw=[10,15,28,30,31,32,33,34,36,37,46];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"startproduction":3,"stmt":4,"parm_list":5,"id":6,",":7,"num":8,"line":9,"CR":10,"selection":11,"funcdef":12,"fun":13,"(":14,")":15,"{":16,"}":17,"for_loop":18,"enciclar":19,"expr":20,";":21,"siacaso":22,"siacasono":23,"hagalemientras":24,"do":25,"=":26,"[":27,"]":28,".":29,"presenta":30,"echapaca":31,"+":32,"-":33,"*":34,"**":35,"/":36,"%":37,"<":38,"<=":39,">":40,">=":41,"!=":42,"==":43,"len":44,"STRING":45,"IDENT":46,"NUMBER":47,"$accept":0,"$end":1},
terminals_: {2:"error",7:",",10:"CR",13:"fun",14:"(",15:")",16:"{",17:"}",19:"enciclar",21:";",22:"siacaso",23:"siacasono",24:"hagalemientras",25:"do",26:"=",27:"[",28:"]",29:".",30:"presenta",31:"echapaca",32:"+",33:"-",34:"*",35:"**",36:"/",37:"%",38:"<",39:"<=",40:">",41:">=",42:"!=",43:"==",44:"len",45:"STRING",46:"IDENT",47:"NUMBER"},
productions_: [0,[3,1],[5,1],[5,3],[5,1],[5,3],[5,0],[4,3],[4,3],[4,3],[4,0],[12,8],[18,11],[11,7],[11,11],[11,7],[11,8],[9,4],[9,7],[9,5],[9,7],[9,6],[9,7],[9,6],[9,3],[9,3],[9,0],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,2],[20,1],[20,1],[20,4],[20,4],[20,1],[6,1],[8,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 
		finalprogram = $$[$0];
		// Maybe remove all function branches?, then execute the one statement
	
break;
case 2:
	
		this.$ = [];
		this.$.push({name : $$[$0], value : null})
	
break;
case 3:

		$$[$0].push({name : $$[$0-2], value : null})
		this.$ = $$[$0];
	
break;
case 4:

		this.$ = [];
		this.$.push({name : null, value : $$[$0]})
	
break;
case 5:

		$$[$0].push({name : null, value : $$[$0-2]})
		this.$ = $$[$0];
	
break;
case 6:
 this.$ = []; 
break;
case 7: case 8:

		this.$ = new AstNode('Statement', {left : $$[$0-2], right :$$[$0-1]});
	
break;
case 9:

		this.$ = new AstNode('Statement', {left : $$[$0-2], right : new AstNode('no-op') });
	
break;
case 10: case 26:
 this.$ = new AstNode('no-op'); 
break;
case 11:
 
		// AST for function, add to function table
		var mainFunc = new AstNode('function', {left : $$[$0-1], name : $$[$0-6], parameters : $$[$0-4].reverse()});
		functions[$$[$0-6]] = mainFunc; 
	
break;
case 12:

		this.$ = new AstNode('for_loop', {
			initialization: $$[$0-8],
			condition: $$[$0-6],
			increment: $$[$0-4],
			body: $$[$0-1]
		});
	
break;
case 13:

		this.$ = new AstNode('siacaso', {left : $$[$0-4], right : $$[$0-1]});
	
break;
case 14:

		this.$ = new AstNode('ifelse', {left : $$[$0-8], middle: $$[$0-5],right: $$[$0-1]});		
	
break;
case 15:

		this.$ = new AstNode('hagalemientras', {left : $$[$0-4], right:$$[$0-1]});
	
break;
case 16:

  		this.$ = new AstNode('dowhile', {left: $$[$0-5], right: $$[$0-1]});
	
break;
case 17:

		// Identifier assigment	
		var lf= new AstNode('IDENT', {name : $$[$0-2]});	
		this.$ = new AstNode('=', {left : lf, right : $$[$0]});
	
break;
case 18:
 
		// Assignment of an array index
		var lf  = new AstNode('arrayindex', {name : $$[$0-5], index : $$[$0-3]}); 
		this.$ = new AstNode('=', {left : lf, right : $$[$0]});
	
break;
case 19:

		// Function call
		this.$ = new AstNode('FunctionCall', {name : $$[$0-3], parameters : $$[$0-1].reverse()});
	
break;
case 20:

		// Function call and assign
		var lf= new AstNode('IDENT', {name : $$[$0-5]});			
		var call = new AstNode('FunctionCall', {name : $$[$0-3], parameters : $$[$0-1].reverse()});
		this.$ = new AstNode('=', {left : lf, right : call});
	
break;
case 21:

		// Array creation and assignment
		var lf= new AstNode('IDENT', {name : $$[$0-4]});
		var arr = new AstNode('array', {value : $$[$0-1].reverse()});
		this.$ = new AstNode('=', {left :lf, right : arr});
	
break;
case 22:
 
		// Method dispatch, with single argument
		this.$ = new AstNode('method', { name : $$[$0-5], method : $$[$0-3], argument : $$[$0-1]});
	
break;
case 23:
 
		// No argument method dispatch
		this.$ = new AstNode('method', { name : $$[$0-4], method : $$[$0-2]});
	
break;
case 24:

		// Print statement
		this.$ = new AstNode('presenta', {left : $$[$0]});			
	
break;
case 25:

		// Return statement
		this.$ = new AstNode('echapaca', {left : $$[$0]});
	
break;
case 27:
 this.$ = new AstNode('+', {left : $$[$0-2], right : $$[$0]}); 
break;
case 28:
 this.$ = new AstNode('-', {left : $$[$0-2], right : $$[$0]});
break;
case 29:
 this.$ = new AstNode('*', {left : $$[$0-2], right : $$[$0]});
break;
case 30:
 this.$ = new AstNode('**', {left : $$[$0-2], right : $$[$0]});
break;
case 31:
 this.$ = new AstNode('/', {left : $$[$0-2], right : $$[$0]});
break;
case 32:
 this.$ = new AstNode('%', {left : $$[$0-2], right : $$[$0]});
break;
case 33:
 this.$ = new AstNode('<', {left : $$[$0-2], right : $$[$0]});
break;
case 34:
 this.$ = new AstNode('<=', {left : $$[$0-2], right : $$[$0]});
break;
case 35:
 this.$ = new AstNode('>', {left : $$[$0-2], right : $$[$0]});
break;
case 36:
 this.$ = new AstNode('>=', {left : $$[$0-2], right : $$[$0]});
break;
case 37:
 this.$ = new AstNode('!=', {left : $$[$0-2], right : $$[$0]});
break;
case 38:
 this.$ = new AstNode('==', {left : $$[$0-2], right : $$[$0]});
break;
case 39:
 this.$ = new AstNode('UMINUS', {left : $$[$0]}); 
break;
case 40:
 this.$ = new AstNode('NUMBER', {value : $$[$0]}); 
break;
case 41:
 this.$ = new AstNode('IDENT', {name : $$[$0]});	
break;
case 42:
 this.$ = new AstNode('arrayindex', {name : $$[$0-3], index : $$[$0-1]}); 
break;
case 43:
this.$ = new AstNode('len', {name : $$[$0-1]});
break;
case 44:
this.$ = new AstNode('STRING', {value: yytext}); 
break;
case 45:
this.$ = yytext;
break;
case 46:
this.$ = Number(yytext);
break;
}
},
table: [o([1,10,13,22,24,25,30,31,46],$V0,{3:1,4:2}),{1:[3]},o($V1,$V2,{9:3,11:4,12:5,1:[2,1],13:$V3,22:$V4,24:$V5,25:$V6}),{6:11,10:[1,10],30:[1,12],31:[1,13],46:$V7},{10:[1,15]},{10:[1,16]},{14:[1,17]},{14:[1,18]},{16:[1,19]},{6:20,46:$V7},o($V8,[2,7]),{14:[1,23],26:[1,21],27:[1,22],29:[1,24]},{6:28,8:27,20:25,33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},{6:28,8:27,20:32,33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},o([7,10,14,15,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,46],[2,45]),o($V8,[2,8]),o($V8,[2,9]),{6:28,8:27,20:33,33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},{6:28,8:27,20:34,33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},o($Vd,$V0,{4:35}),{14:[1,36]},{6:38,8:27,20:37,27:[1,39],33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},{6:28,8:27,20:40,33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},{5:41,6:42,8:43,15:$Ve,46:$V7,47:$Vc},{6:44,46:$V7},o($V1,[2,24],{32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq}),{6:28,8:27,20:57,33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},o($Vr,[2,40]),o($Vr,$Vs,{27:$Vt}),{14:[1,59]},o($Vr,[2,44]),o([7,10,15,28,30,31,32,33,34,35,36,37,38,39,40,41,42,43,46],[2,46]),o($V1,[2,25],{32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq}),{15:[1,60],32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq},{15:[1,61],32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq},o($V1,$V2,{9:3,11:4,12:5,13:$V3,17:[1,62],22:$V4,24:$V5,25:$V6}),{5:63,6:42,8:43,15:$Ve,46:$V7,47:$Vc},o($V1,[2,17],{32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq}),o([10,30,31,32,33,34,35,36,37,38,39,40,41,42,43,46],$Vs,{14:[1,64],27:$Vt}),{5:65,6:42,8:43,28:$Ve,46:$V7,47:$Vc},{28:[1,66],32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq},{15:[1,67]},o($Vu,[2,2],{7:[1,68]}),o($Vu,[2,4],{7:[1,69]}),{14:[1,70]},{6:28,8:27,20:71,33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},{6:28,8:27,20:72,33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},{6:28,8:27,20:73,33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},{6:28,8:27,20:74,33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},{6:28,8:27,20:75,33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},{6:28,8:27,20:76,33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},{6:28,8:27,20:77,33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},{6:28,8:27,20:78,33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},{6:28,8:27,20:79,33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},{6:28,8:27,20:80,33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},{6:28,8:27,20:81,33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},{6:28,8:27,20:82,33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},o($Vr,[2,39]),{6:28,8:27,20:83,33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},{6:84,46:$V7},{16:[1,85]},{16:[1,86]},{24:[1,87]},{15:[1,88]},{5:89,6:42,8:43,15:$Ve,46:$V7,47:$Vc},{28:[1,90]},{26:[1,91]},o($V1,[2,19]),o($Vu,$Ve,{6:42,8:43,5:92,46:$V7,47:$Vc}),o($Vu,$Ve,{6:42,8:43,5:93,46:$V7,47:$Vc}),{6:28,8:27,15:[1,95],20:94,33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},o($Vv,[2,27],{34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq}),o($Vv,[2,28],{34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq}),o($Vw,[2,29],{35:$Vi,38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq}),o($Vw,[2,30],{35:$Vi,38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq}),o($Vw,[2,31],{35:$Vi,38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq}),o($Vw,[2,32],{35:$Vi,38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq}),o($Vr,[2,33]),o($Vr,[2,34]),o($Vr,[2,35]),o($Vr,[2,36]),o($Vr,[2,37]),o($Vr,[2,38]),{28:[1,96],32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq},{15:[1,97]},o($Vd,$V0,{4:98}),o($Vd,$V0,{4:99}),{14:[1,100]},{16:[1,101]},{15:[1,102]},o($V1,[2,21]),{6:28,8:27,20:103,33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},o($Vu,[2,3]),o($Vu,[2,5]),{15:[1,104],32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq},o($V1,[2,23]),o($Vr,[2,42]),o($Vr,[2,43]),o($V1,$V2,{9:3,11:4,12:5,13:$V3,17:[1,105],22:$V4,24:$V5,25:$V6}),o($V1,$V2,{9:3,11:4,12:5,13:$V3,17:[1,106],22:$V4,24:$V5,25:$V6}),{6:28,8:27,20:107,33:$V9,44:$Va,45:$Vb,46:$V7,47:$Vc},o($Vd,$V0,{4:108}),o($V1,[2,20]),o($V1,[2,18],{32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq}),o($V1,[2,22]),{10:[2,13],23:[1,109]},{10:[2,15]},{15:[1,110],32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,39:$Vm,40:$Vn,41:$Vo,42:$Vp,43:$Vq},o($V1,$V2,{9:3,11:4,12:5,13:$V3,17:[1,111],22:$V4,24:$V5,25:$V6}),{16:[1,112]},{10:[2,16]},{10:[2,11]},o($Vd,$V0,{4:113}),o($V1,$V2,{9:3,11:4,12:5,13:$V3,17:[1,114],22:$V4,24:$V5,25:$V6}),{10:[2,14]}],
defaultActions: {106:[2,15],110:[2,16],111:[2,11],114:[2,14]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0: this.begin('COMMENT'); 
break;
case 1: this.begin('INITIAL'); 
break;
case 2: ; 
break;
case 3: ; 
break;
case 4: this.begin('OTHER_COMMENT'); 
break;
case 5: this.begin('INITIAL'); 
break;
case 6: ; 
break;
case 7:return 35;
break;
case 8:return 36;
break;
case 9:return 33;
break;
case 10:return 32;
break;
case 11:return 37;
break;
case 12:return 14;
break;
case 13:return 15;
break;
case 14:return 16;
break;
case 15:return 17;
break;
case 16:return 'PI';
break;
case 17:return 'E';
break;
case 18:return 34;
break;
case 19:return "!=";
break;
case 20:return 39;
break;
case 21:return 41;
break;
case 22:return 43;
break;
case 23:return 26;
break;
case 24:return ':';
break;
case 25:return 7;
break;
case 26:return 38;
break;
case 27:return 40;
break;
case 28:return 22;
break;
case 29:return 23;
break;
case 30:return 13;
break;
case 31:return 'pass';
break;
case 32:return 30;
break;
case 33:return 'end';
break;
case 34:return 31;
break;
case 35:return 27;
break;
case 36:return 28;
break;
case 37:return 29;
break;
case 38:return 44;
break;
case 39:return 24;
break;
case 40:return 19;
break;
case 41:return 25;
break;
case 42:return 'BOOLEAN';
break;
case 43:return 47;
break;
case 44: return 46;
break;
case 45: console.log(yy_.yytext); return 45;
break;
case 46: return 10;
break;
case 47: ; 
break;
}
},
rules: [/^(?:''')/,/^(?:''')/,/^(?:\n)/,/^(?:.)/,/^(?:\/\/)/,/^(?:\n)/,/^(?:.)/,/^(?:\*\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:%)/,/^(?:\()/,/^(?:\))/,/^(?:\{)/,/^(?:\})/,/^(?:PI\b)/,/^(?:E\b)/,/^(?:\*)/,/^(?:!=)/,/^(?:<=)/,/^(?:>=)/,/^(?:==)/,/^(?:=)/,/^(?::)/,/^(?:,)/,/^(?:<)/,/^(?:>)/,/^(?:siacaso\b)/,/^(?:siacasono\b)/,/^(?:fun\b)/,/^(?:yanosigas\b)/,/^(?:presenta\b)/,/^(?:seacabo\b)/,/^(?:echapaca\b)/,/^(?:\[)/,/^(?:\])/,/^(?:\.)/,/^(?:largo\b)/,/^(?:hagalemientras\b)/,/^(?:enciclar\b)/,/^(?:do\b)/,/^(?:booleano\b)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:[a-zA-Z]([a-zA-Z]|[0-9])*)/,/^(?:".*?")/,/^(?:\n)/,/^(?:.)/],
conditions: {"OTHER_COMMENT":{"rules":[0,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"inclusive":true},"COMMENT":{"rules":[1,2,3],"inclusive":false},"INITIAL":{"rules":[0,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramatica;
exports.Parser = gramatica.Parser;
exports.parse = function () { return gramatica.parse.apply(gramatica, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}