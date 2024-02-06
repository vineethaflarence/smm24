
function show() {
	   document.getElementById('extraText').className='visiblediv'; 
	   document.getElementById('p1').className='hiddendiv';
	   document.getElementById('p2').className='visiblediv'; 

	}
	function hide() {
	   document.getElementById('extraText').className='hiddendiv'; 
	   document.getElementById('p1').className='visiblediv'; 
	   document.getElementById('p2').className='hiddendiv';

	}

	var p1 = document.getElementById("p1");
	p1.onclick = show;
	var p2 = document.getElementById("p2");
	p2.onclick = hide;
	
	function show1() {
		   document.getElementById('extraText1').className='visiblediv'; 
		   document.getElementById('p3').className='hiddendiv';
		   document.getElementById('p4').className='visiblediv'; 

		}
		function hide1() {
		   document.getElementById('extraText1').className='hiddendiv'; 
		   document.getElementById('p3').className='visiblediv'; 
		   document.getElementById('p4').className='hiddendiv';

		}

		var p1 = document.getElementById("p3");
		p1.onclick = show1;
		var p2 = document.getElementById("p4");
		p2.onclick = hide1;
