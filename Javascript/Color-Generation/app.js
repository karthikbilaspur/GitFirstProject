/*Filename: app.js */
let darkVar = false; 
function genColorFn() { 
	const rColor = getRandomColor(); 
	disFn(rColor); 
} 

function getRandomColor() { 
	const l = '0123456789ABCDEF'; 
	let col = '#'; 
	for (let i = 0; i < 6; i++) { 
		col += l[Math.floor(Math.random() * 16)]; 
	} 
	return col; 
} 

function disFn(col) { 
	const colDis = document.getElementById('colorDisplay'); 
	const hex = document.getElementById('colorHex'); 
	const rgb = document.getElementById('colorRgb'); 

	colDis.style.backgroundColor = col; 
	hex.textContent = col; 
	rgb.textContent = hexToRgb(col); 
} 

function hexToRgb(hex) { 
	const temp = parseInt(hex.substring(1), 16); 
	const r = (temp >> 16) & 255; 
	const g = (temp >> 8) & 255; 
	const b = temp & 255; 
	return `RGB(${r}, ${g}, ${b})`; 
} 

function cpyFn(elementId) { 
	const ele = document.getElementById(elementId); 
	const ta = document.createElement('textarea'); 
	ta.value = ele.textContent; 
	document.body.appendChild(ta); 
	ta.select(); 
	document.execCommand('copy'); 
	document.body.removeChild(ta); 
	msgFn('Color code copied to clipboard!'); 
} 

function msgFn(msg) { 
	const cpyMsg = document.getElementById('copyMessage'); 
	cpyMsg.textContent = msg; 
	cpyMsg.classList.add('animate__fadeIn'); 
	setTimeout(() => { 
		cpyMsg.textContent = ''; 
		cpyMsg.classList.remove('animate__fadeIn'); 
	}, 2000); 
} 

function darkFn() { 
	darkVar = !darkVar; 
	themeFn(); 
} 

function themeFn() { 
	const body = document.body; 
	body.style.background = darkVar ? '#333' : 
		'linear-gradient(to right, #3494E6, #EC6EAD)'; 
	body.style.color = darkVar ? '#fff' : '#333'; 
	const container = document.querySelector('.container'); 
	container.style.background = 
		darkVar ? 'rgba(0, 0, 0, 0.9)' : 
		'rgba(255, 255, 255, 0.9)'; 
}
