import profile from './man.png';
import './Component.css';
import { useState } from 'react';
import $ from 'jquery';

function Component() {

	const [follow, setFollow] = useState(false);

	$(document).ready(function() {
		$("p").html(function(_, html) {
		  return html.replace(/(\#\w+)/g, '<span class="blue">$1</span>');
		});
	  });

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
				<div className='Footer'>
					<p>North America & Europe &#x2022; hanservices.com &#x2022; Joined March 2009 </p>
				</div>
					
				</div>
			
			</div>

		</div>
  );
}

export default Component;
