const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (input) => {
	calculatorScreen.value = input
}


let evalString = '';


const numbers = document.querySelectorAll(".number,.decimal,.operator,.percentage")
const inputString = (input) => {
		evalString += input
}

numbers.forEach((number) => {
	number.addEventListener(("click"),(event)=> {
		console.log(`${event.target.value} clicked`)
		inputString(event.target.value)
		updateScreen(evalString)
	})
})	



const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click',(event) => {
	console.log('== clicked')
	try{
		let result = eval(evalString)
		updateScreen(result)
	}
	catch(err){
		updateScreen(err.toString().slice(12))
		console.log(err.toString().slice(14))
		evalString="";
	}
	
})

const clear = document.querySelector('.all-clear').addEventListener('click', (event)=>{
	console.log("SCREEN CLEARED")
	evalString="";
	updateScreen("");
})
