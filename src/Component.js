import profile from './man.png';
import './Component.css';
import { useState } from 'react';

function Component() {

	const [follow, setFollow] = useState(false);

  return (
		<div className = "Card">
			<div className = "HeaderImg">
				<img className="Image" src = {profile} alt="Profile" />
			</div>
			<div className = "Text">
				<div className="Button">
					<button onClick = {() =>setFollow(!follow)} > {follow ? "Unfollow" : "Follow"} </button>
				</div>
				<div className = "Text-Title">
					Space Ship
				</div>
				<div className = "Text-Content">
					<p>Translating Ideas to Reality - #React, #JAVASCRIPT, #CSS, and #UXDesign</p>
					<p>North America & Europe &#x2022; hanservices.com &#x2022; Joined March 2009 </p>
					
				</div>
			
			</div>

		</div>
  );
}

export default Component;
