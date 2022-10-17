import profile from "./man.png";
import "./Component.css";
import { useEffect, useState } from "react";

function Component() {

	//useState hook to access the follow status
	const [follow, setFollow] = useState(false);

	// function used to change the color of hashtags
	const changeText = () => {
		let str = document.getElementById("paraContent").innerHTML;
		let res = str.replace(/(\#\w+)/g, '<span class="blue">$1</span>');
		document.getElementById("paraContent").innerHTML = res;
	};

	// called the function for changing color of hashtags
	useEffect(() => {
		changeText();
	}, []);

	return (
		<div className="card">
			<div className="headerImg">
				<img className="image" src={profile} alt="Profile" />
			</div>
			<div className="text">
				<div className="button">
					<button
						className={follow ? "btnFollow" : "btnUnfollow"}
						onClick={() => setFollow(!follow)}
					>
						
						{follow ? "Unfollow" : "Follow"}
					</button>
				</div>
				<div className="textTitle">Space Ship</div>
				<div className="textContent">
					<p id="paraContent">
						Translating Ideas to Reality - #React, #JAVASCRIPT,
						#CSS and #UXDesign
					</p>
					<div className="footer">
						<p>
							North America & Europe &#x2022; hanservices.com
							&#x2022; Joined March 2009
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Component;
