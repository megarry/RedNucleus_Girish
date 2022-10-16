import profile from './man.png';
import './Component.css';
import { useEffect, useState } from 'react';

function Component() {

	const [follow, setFollow] = useState(false);

	// $(document).ready(function() {
	// 	$("p").html((_, html) => {
	// 	  return html.replace(/(\#\w+)/g, '<span class="blue">$1</span>');
	// 	});
	//   });

const changeText = () =>{
	let str = document.getElementById("demo").innerHTML; 
	let res = str.replace(/(\#\w+)/g, '<span class="blue">$1</span>');
	document.getElementById("demo").innerHTML = res;
}

useEffect(()=> {
	changeText()
},[])

  return (
		<div className = "Card">
			<div className = "HeaderImg">
				<img className="Image" src = {profile} alt="Profile" />
			</div>
			<div className = "Text">
				<div className="Button">
					<button className={follow ? "btnFollow" : "btnUnfollow"} onClick = {() =>setFollow(!follow)} > {follow ? "Unfollow" : "Follow"} </button>
				</div>
				<div className = "Text-Title">
					Space Ship
				</div>
				<div className = "Text-Content">
					<p id='demo'>Translating Ideas to Reality - #React, #JAVASCRIPT, #CSS, and #UXDesign</p>
				<div className='Footer'>
					<p>North America & Europe &#x2022; hanservices.com &#x2022; Joined March 2009 </p>
				</div>
				</div>
			</div>
		</div>
  );
}

export default Component;
