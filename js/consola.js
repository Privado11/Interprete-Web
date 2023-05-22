let jqconsole = $('#console').jqconsole('', '>>>');
const iniciar = document.getElementById('runbtn');
iniciar.addEventListener("click", resultado);
const validarr = document.getElementById('valbtn');
validarr.addEventListener("click", validar);
const conso = document.getElementById('console');

let startPrompt = function () {
  jqconsole.Prompt(true, function (input) {
    jqconsole.Write(input + '\n', 'jqconsole-output');
    startPrompt();
  });
};


jqconsole.Write('>> ','jqconsole-output');

let editor = ace.edit("editor");
editor.setTheme("ace/theme/idle_fingers");
editor.getSession().setMode("ace/mode/python");




function resultado(){
    conso.style.display = "block";
    resetForRun();
	try {
		let output = gramatica.parse(editor.getValue()+'\n')
		if(output == true) {
			jqconsole.Write('Running program:\n', 'jqconsole-output');
			eval(finalprogram);
			jqconsole.Write('\n', 'jqconsole-output');
		} 
	} catch(exception) {
		jqconsole.Write(exception + '\n\n', 'jqconsole-output');
	}
	jqconsole.Write('>> ','jqconsole-output');

}

function validar(){
    conso.style.display = "block";
    resetForRun();
	try {
		let output = gramatica.parse(editor.getValue()+'\n')
		if(output == true) {
			jqconsole.Write('The program contains no errors.', 'jqconsole-output');
			jqconsole.Write('\n', 'jqconsole-output');
		} 
	} catch(exception) {
		jqconsole.Write(exception + '\n\n', 'jqconsole-output');
	}
	jqconsole.Write('>> ','jqconsole-output');

}

$( "#clearbtn" ).click(function() {
	jqconsole.Reset();
});

 