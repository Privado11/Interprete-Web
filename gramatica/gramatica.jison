2/* lexical grammar */
%lex
%x COMMENT
%s OTHER_COMMENT

%%

"'''"                { this.begin('COMMENT'); }
<COMMENT>"'''"       { this.begin('INITIAL'); }
<COMMENT>\n       { ; }
<COMMENT>.          { ; }

"//"                		  	{ this.begin('OTHER_COMMENT'); }
<OTHER_COMMENT>\n       	{ this.begin('INITIAL'); }
<OTHER_COMMENT>.          	{ ; }


"**"                   	return '**';
"/"                   	return '/';
"-"                   	return '-';
"+"                   	return '+';
"%"                   	return '%';
"("                   	return '(';
")"						return ')';
"{"                   	return '{';
"}"						return '}';
"PI"					return 'PI';
"E"						return 'E';
"*"						return '*';
"!="					return "!=";
"<="					return '<=';
">="					return '>=';
"=="					return '==';
"="						return '=';
":"						return ':';
","						return ',';
"<"						return '<';
">"						return '>';
"siacaso"				return 'siacaso';
"siacasono"				return 'siacasono';
"fun"					return 'fun';
"yanosigas"				return 'pass';
"presenta"				return 'presenta';
"seacabo"				return 'end';
"echapaca"				return 'echapaca';
"["						return '[';
"]"						return ']';
"."						return '.';
"largo"					return 'len';
"hagalemientras"		return 'hagalemientras';
"enciclar"				return 'enciclar';
"hacer"					return 'hacer';
"in"					return 'in';

[0-9]+("."[0-9]+)?\b  	{return 'NUMBER';}
[a-zA-Z]([a-zA-Z]|[0-9])* { return 'IDENT';}
'"'.*?'"'			{ console.log(yytext); return 'STRING';}
\n						{ return 'CR';}
.                     	{ ; }

/lex

/* operator associations and precedence */

%left  '+' '-'
%left  '*' '/' '%' 
%right  '**'
%left  '<' '<=' '>' '>=' '==' '!='
%left UMINUS

%nonassoc IF_WITHOUT_ELSE
%nonassoc ELSE

%start startproduction

%% /* language grammar */

startproduction   
	: stmt { 
		finalprogram = $1;
		// Maybe remove all function branches?, then execute the one statement
	}
;

parm_list 
	: id 	{	
		$$ = [];
		$$.push({name : $1, value : null})
	}
	| id ',' parm_list {
		$3.push({name : $1, value : null})
		$$ = $3;
	}
	| num {
		$$ = [];
		$$.push({name : null, value : $1})
	}
	| num ',' parm_list {
		$3.push({name : null, value : $1})
		$$ = $3;
	}
	| { $$ = []; }
;

stmt    
	: stmt line 'CR'	{
		$$ = new AstNode('Statement', {left : $1, right :$2});
	}
	| stmt selection 'CR'	{
		$$ = new AstNode('Statement', {left : $1, right :$2});
	}
	| stmt funcdef 'CR'	{
		$$ = new AstNode('Statement', {left : $1, right : new AstNode('no-op') });
	}
	| { $$ = new AstNode('no-op'); } // No-op
;

funcdef 
	: 'fun' id '(' parm_list ')' '{' stmt '}' { 
		// AST for function, add to function table
		var mainFunc = new AstNode('function', {left : $7, name : $2, parameters : $4.reverse()});
		functions[$2] = mainFunc; 
	}
;

selection 
	: 'siacaso' '(' expr ')' '{' stmt  '}'	{
		$$ = new AstNode('siacaso', {left : $3, right : $6});
	}
	| 'siacaso' '(' expr ')' '{' stmt '}' 'siacasono' '{' stmt '}'	{
		$$ = new AstNode('ifelse', {left : $3, middle: $6,right: $10});		
	}
	
	| 'hagalemientras' '(' expr ')' '{' stmt '}' {
		$$ = new AstNode('hagalemientras', {left : $3, right:$6});
	}

	| 'hacer' '{' stmt '}' 'hagalemientras' '(' expr ')' {
  		$$ = new AstNode('dowhile', {left: $3, right: $7});
	}

	| 'enciclar' '(' line ',' expr ',' line ')' '{' stmt '}' {
		$$ = new AstNode('enciclar', {left : $3, right:$5, incremento:$7, body:$10});
	}
	; 

	line  
		: line id '=' expr	{
			// Identifier assigment	
			var lf= new AstNode('IDENT', {name : $2});	
			$$ = new AstNode('=', {left : lf, right : $4});
		}

	| line id '[' expr ']' '=' expr { 
		// Assignment of an array index
		var lf  = new AstNode('arrayindex', {name : $2, index : $4}); 
		$$ = new AstNode('=', {left : lf, right : $7});
	}

	| line id '(' parm_list ')' {
		// Function call
		$$ = new AstNode('FunctionCall', {name : $2, parameters : $4.reverse()});
	}

	| line id '=' id '(' parm_list ')' {
		// Function call and assign
		var lf= new AstNode('IDENT', {name : $2});			
		var call = new AstNode('FunctionCall', {name : $4, parameters : $6.reverse()});
		$$ = new AstNode('=', {left : lf, right : call});
	}
	
	| line id '=' '[' parm_list ']' {
		// Array creation and assignment
		var lf= new AstNode('IDENT', {name : $2});
		var arr = new AstNode('array', {value : $5.reverse()});
		$$ = new AstNode('=', {left :lf, right : arr});
	}
	
	| line id '.' id '(' expr ')' { 
		// Method dispatch, with single argument
		$$ = new AstNode('method', { name : $2, method : $4, argument : $6});
	}
	
	| line id '.' id '(' ')' { 
		// No argument method dispatch
		$$ = new AstNode('method', { name : $2, method : $4});
	}
	
	| line 'presenta' expr {
		// Print statement
		$$ = new AstNode('presenta', {left : $3});			
	}

	| line 'echapaca' expr {
		// Return statement
		$$ = new AstNode('echapaca', {left : $3});
	}
	
	| { $$ = new AstNode('no-op'); } // No-op
;

expr    
	: expr '+' expr 	{ $$ = new AstNode('+', {left : $1, right : $3}); }
	| expr '-' expr 	{ $$ = new AstNode('-', {left : $1, right : $3});}
	| expr '*' expr 	{ $$ = new AstNode('*', {left : $1, right : $3});}
	| expr '**' expr		{ $$ = new AstNode('**', {left : $1, right : $3});}
	| expr '/' expr		{ $$ = new AstNode('/', {left : $1, right : $3});}
	| expr '%' expr		{ $$ = new AstNode('%', {left : $1, right : $3});}
	| expr '<' expr	{ $$ = new AstNode('<', {left : $1, right : $3});}
	| expr '<=' expr	{ $$ = new AstNode('<=', {left : $1, right : $3});}
	| expr '>' expr	{ $$ = new AstNode('>', {left : $1, right : $3});}
	| expr '>=' expr	{ $$ = new AstNode('>=', {left : $1, right : $3});}
	| expr '!=' expr	{ $$ = new AstNode('!=', {left : $1, right : $3});}
	| expr '==' expr		{ $$ = new AstNode('==', {left : $1, right : $3});}
	| '-' expr %prec UMINUS	{ $$ = new AstNode('UMINUS', {left : $2}); }
	| num	{ $$ = new AstNode('NUMBER', {value : $1}); }
	| id		{ $$ = new AstNode('IDENT', {name : $1});	}
	| id '[' expr ']' { $$ = new AstNode('arrayindex', {name : $1, index : $3}); }
	| 'len' '(' id ')' {$$ = new AstNode('len', {name : $3});}
	| 'STRING' {$$ = new AstNode('STRING', {value: yytext}); }
	;

id 
	: 'IDENT' {$$ = yytext;}
	;
num 
	: 'NUMBER' {$$ = Number(yytext);}
	;
