const wrapper = document.getElementById("wrapper");

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const uniqueRand = (min, max, prev) => {
  let next = prev;
  
  while(prev === next) next = rand(min, max);
  
  return next;
}

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 }
];

let prev = 0;

setInterval(() => {
  const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];
  
  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;
  
  prev = index;
}, 3000);
//const dimensions = [
//	[50,50,0,0],
//	[50,50,50,0],
//	[50,50,0,33],
//	[50,50,50,33],
//	[50,50,0,66],
//	[50,50,50,66],
//	[100,100,0,0]
//];
const dimensions = [
	[100,100,0,0],
	[100,100,0,0],
	[100,100,0,0],
	[100,100,0,0],
	[100,100,0,0],
	[100,100,0,0],
	[100,100,0,0]
];
for(let i=1;i<=7;i++){
	document.querySelector(`.test${i}`).addEventListener('mouseover',()=>{
		document.getElementById('menu-background-pattern').style.backgroundSize=`${12+i}vmin ${12+i}vmin`;
		document.getElementById('menu-background-pattern').style.width=`${dimensions[i-1][0]}vw`;
		document.getElementById('menu-background-pattern').style.height=`${dimensions[i-1][1]}vh`;
		document.getElementById('menu-background-pattern').style.top=`${dimensions[i-1][2]}vh`;
		document.getElementById('menu-background-pattern').style.left=`${dimensions[i-1][3]}vw`;
	});
	//document.querySelector(`.test${i}`).addEventListener('mouseleave',()=>{
	//	document.getElementById('menu-background-pattern').style.backgroundSize="12vmin 12vmin"
	//	document.getElementById('menu-background-pattern').style.width="100vw"
	//	document.getElementById('menu-background-pattern').style.width=`100vw`
	//	document.getElementById('menu-background-pattern').style.height=`100vh`
	//	document.getElementById('menu-background-pattern').style.top=`0vh`;
	//	document.getElementById('menu-background-pattern').style.left=`0vw`;
	//});
}
