import logo from './nasa.jpg';
import './Component.css';

function Component() {
  return (
		<div className = "Card">
			<div className = "HeaderImg">
				<img className="Image" src={logo} alt="Space"/>
			</div>
			<div className = "Text">
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
