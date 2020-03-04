function f2eSkillTreeList() {
 	return [{
				"title": "Basics",
				"level": "FRONT-END NOOB",
				"airframe": "./img/img-ship-noob.png",
				"icon": "./img/img-planet-basics.png",
				"description": "Welcome to aboard. Your mission is: <mark>Collect the resources and learn the skills to upgrade the ship.</mark> Good luck, captain!",
				"content": [
					{
						"subTitle": "BASIC<br />SKILLS",
						"components": "icon-category",
						"recommended": [
							{"skillName":"Learn HTML","learn":false},
							{"skillName":"Basics of CSS","learn":false},
							{"skillName":"Basics of JavaScript","learn":false}
						],
						"optional": [],
						"recPoint": 0,
						"optPoint": 0
					},
					{
						"subTitle": "BASIC<br />TOOLS",
						"components": "icon-build",
						"recommended": [
							{"skillName":"Git - Version Control","learn":false},
							{"skillName":"Basic Terminal Usage","learn":false},
							{"skillName":"Text Editor","learn":false},
							{"skillName":"A Heart of Reserching","learn":false}
						],						
						"optional": [],
						"recPoint": 0,
						"optPoint": 0
					}
				],

			},

			{
				"title": "CSS",
				"level": "FRONT-END BEGINNER",
				"airframe": "./img/img-ship-beginner.png",
				"icon": "./img/img-planet-css.png",
				"description": "Congradulations! You become the <mark>“Front-end Beginnner”.</mark> Keep searching the resources to upgrade to the next level.",
				"content": [
					{
						"subTitle": "CSS<br />FRAMEWORK",
						"components": "icon-flip_to_front",
						"recommended": [
							{"skillName":"Bootstrap","learn":false}
						],
						"optional": [
							{"skillName":"UIKit","learn":false},
							{"skillName":"Foundation","learn":false},
							{"skillName":"Semantic UI","learn":false}
						],
						"recPoint": 0,
						"optPoint": 0
					},
					{
						"subTitle": "CSS<br />PREPROCESSORS",
						"components": "icon-view_quilt",
						"recommended": [
							{"skillName":"Sass","learn":false},
							{"skillName":"PostCSS","learn":false}
						],
						"optional": [
							{"skillName":"Less","learn":false},
							{"skillName":"Stylus","learn":false}
						],
						"recPoint": 0,
						"optPoint": 0
					},
					{
						"subTitle": "CSS<br />ARCHITECHTURE",
						"components": "icon-developer_board",
						"recommended": [
							{"skillName":"OOCSS","learn":false}
						],
						"optional": [
							{"skillName":"SMACSS","learn":false},
							{"skillName":"BEM","learn":false}
						],
						"recPoint": 0,
						"optPoint": 0
					},
					{
						"subTitle": "CSS<br />SKILLS",
						"components": "icon-devices",
						"recommended": [
							{"skillName":"Responsive","learn":false},
							{"skillName":"Flexbox","learn":false}
						],
						"optional": [],
						"recPoint": 0,
						"optPoint": 0
					},
					{
						"subTitle": "CSS<br />MASTERY",
						"components": "icon-widgets",
						"recommended": [],
						"optional": [
							{"skillName":"Grid Layout","learn":false},
							{"skillName":"Animation","learn":false},
							{"skillName":"Transform 2D, 3D","learn":false}
						],
						"recPoint": 0,
						"optPoint": 0
					}
				],

			},
			{
				"title": "JAVASCRIPT",
				"level": "FRONT-END DEVELOPER",
				"airframe": "./img/img-ship-developer.png",
				"icon": "./img/img-planet-js.png",
				"description": "You’re doing well! Now you’re a <mark>“Front-end Developer”.</mark> It’s close to complete the upgrading program.<br /><br />Next level: Front-end Master.",
				"content": [
					{
						"subTitle": "BASIC<br />DOM",
						"components": "icon-hdr_strong",
						"recommended": [],
						"optional": [
							{"skillName":"jQuery","learn":false}
						],
						"recPoint": 0,
						"optPoint": 0
					},
					{
						"subTitle": "WEB<br />DRAWING",
						"components": "icon-gradient",
						"recommended": [],
						"optional": [
							{"skillName":"SVG","learn":false},
							{"skillName":"Canvas","learn":false},
							{"skillName":"D3.js","learn":false}
						],
						"recPoint": 0,
						"optPoint": 0
					},
					{
						"subTitle": "JAVASCRIPT<br />SKILLS",
						"components": "icon-format_quote",
						"recommended": [
							{"skillName":"ES6","learn":false}
						],
						"optional": [],
						"recPoint": 0,
						"optPoint": 0
					},
					{
						"subTitle": "JAVASCRIPT<br />FRAMEWORK",
						"components": "icon-developer_mode",
						"recommended": [
							{"skillName":"Vue.js","learn":false},
							{"skillName":"Angular.js","learn":false},
							{"skillName":"React.js","learn":false}
						],
						"optional": [],
						"recPoint": 0,
						"optPoint": 0
					},
					{
						"subTitle": "JAVASCRIPT<br />PREPROCESSORS",
						"components": "icon-nfc",
						"recommended": [],
						"optional": [
							{"skillName":"TypeScript","learn":false},
							{"skillName":"Babel","learn":false},
							{"skillName":"CoffeeScript","learn":false}
						],
						"recPoint": 0,
						"optPoint": 0
					}
				],

			},
			{
				"title": "MANAGERS",
				"level": "FRONT-END MASTER",
				"airframe": "./img/img-ship-master.png",
				"icon": "./img/img-planet-managers.png",
				"description": "Excellent! You’re a <mark>“Front-end Master”</mark> now. But a new galary was just detected by the system.<br /><br />Captain, make your choice.",
				"content": [
					{
						"subTitle": "PACKAGE<br />MANAGERS",
						"components": "icon-device_hub",
						"recommended": [
							{"skillName":"NPM","learn":false},
							{"skillName":"YARN","learn":false}
						],
						"optional": [
							{"skillName":"Bower","learn":false}
						],
						"recPoint": 0,
						"optPoint": 0
					},
					{
						"subTitle": "TASK<br />RUNNERS",
						"components": "icon-import_contacts",
						"recommended": [
							{"skillName":"npm scripts","learn":false},
							{"skillName":"gulp","learn":false}
						],
						"optional": [
							{"skillName":"grunt","learn":false}
						],
						"recPoint": 0,
						"optPoint": 0
					},
					{
						"subTitle": "BUILD<br />TOOLS",
						"components": "icon-table_chart",
						"recommended": [
							{"skillName":"Webpack","learn":false}
						],
						"optional": [
							{"skillName":"Parcel","learn":false}
						],
						"recPoint": 0,
						"optPoint": 0
					}
				],

			},
	];

}