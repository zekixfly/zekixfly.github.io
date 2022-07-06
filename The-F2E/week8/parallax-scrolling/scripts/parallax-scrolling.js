
var questionList = questionList();
var total = 0;


for(var option in questionList) {
	var fieldset = makeTag('fieldset');
	fieldset.id = 'que-'+option;
	fieldset.innerHTML = `
			<div class="question-left">
				<h1 z-text="data.topic"></h1>
				<h2 z-text="data.title"></h2>
				<p  z-text="data.subTitle"></p>
				<button onclick="calculation(this,this.getAttr('z-data'),this.parentElement.parentElement.id)" z-data="data.select[0].score"><p z-text="data.select[0].option"></p></button>
				<button onclick="calculation(this,this.getAttr('z-data'),this.parentElement.parentElement.id)" z-data="data.select[1].score"><p z-text="data.select[1].option"></p></button>
				<button onclick="calculation(this,this.getAttr('z-data'),this.parentElement.parentElement.id)" z-data="data.select[2].score"><p z-text="data.select[2].option"></p></button>
			</div>
			<div class="animate-right">
				<div class="square-q${option}"></div>
				<div class="triangle-q${option}"></div>
				<div class="circle-q${option}"></div>
			</div>
	`;
	getId('question').addKid(fieldset);
	getId('que-'+option).dataBind({
		data: questionList[option]
	});


	//問題動畫
	var animateClass = '';
	getId('que-'+option).addEventListener('animationend',function(){
		switch (this.id) {
			case 'que-0':		
				
				this.getClasses('animate-right')[0].addClass('animate-right-open').addClass('bgc-blue');
				this.getClasses('animate-right-open')[0].addEventListener('transitionend', function() {
				 	this.getClasses('square-q0')[0].addClass('square-q0-up').addEventListener('transitionend', function() {
				 		this.addClass('rotateClockwise-loop');
				 	});

				 	this.getClasses('triangle-q0')[0].addClass('triangle-q0-up').addEventListener('transitionend', function() {
				 		this.addClass('rotateCounterclockwise-loop');
				 	});

				 	this.getClasses('circle-q0')[0].addClass('circle-q0-up').addEventListener('transitionend', function() {
				 		this.addClass('floating0-loop');
				 	});
				});
				break;
			case 'que-1':				
				if(this.getClasses('animate-left')[0]) {
					animateClass = 'animate-left';					
					this.addEventListener('animationend', function() {
		 				this.getClasses('animate-left')[0].addClass('animate-left-open');
						this.getClasses('animate-left-open')[0].addEventListener('transitionend', function() {
						 	this.getClasses('square-q1')[0].addClass('square-q1-up').addEventListener('transitionend', function() {
						 		this.addClass('rotateCounterclockwise-loop');
					 		});

						 	this.getClasses('triangle-q1')[0].addClass('triangle-q1-up').addEventListener('transitionend', function() {
						 		this.addClass('rotateClockwise-loop');
						 	});

						 	this.getClasses('circle-q1')[0].addClass('circle-q1-up').addEventListener('transitionend', function() {
						 		this.addClass('floating1-loop');
						 	});
						});
		 			});

				}
				break;
			case 'que-2':
				if(this.getClasses('animate-right')[0]) {
					animateClass = 'animate-right';					
					this.addEventListener('animationend', function() {
		 				this.getClasses('animate-right')[0].addClass('animate-right-open').addClass('openZeroSecond');
						this.getClasses('animate-right-open')[0].addEventListener('transitionend', function() {
						 	this.getClasses('square-q2')[0].addClass('square-q2-up').addEventListener('transitionend', function() {
						 		this.addClass('rotateCounterclockwise-loop');
					 		});

						 	this.getClasses('triangle-q2')[0].addClass('triangle-q2-up').addEventListener('transitionend', function() {
						 		this.addClass('rotateClockwise-loop');
						 	});

						 	this.getClasses('circle-q2')[0].addClass('circle-q2-up').addEventListener('transitionend', function() {
						 		this.addClass('floating2-loop');
						 	});
						});
		 			});

				}
				break;
			default:
				// statements_def
				break;
		}
		 	


	});

	// console.log(option);
	// console.log(questionList[option].topic);
	// console.log(questionList[option].title);
	// console.log(questionList[option].subTitle);
	// console.log(questionList[option].select[0].option);
	// console.log(questionList[option].select[1].option);
	// console.log(questionList[option].select[2].option);
}





function calculation(BtnThis,num,id) {	

 total += parseInt(num);

 switch (id) {
 	case 'que-0':
		 BtnThis.parentElement.addClass('fadeOut');
		 BtnThis.parentElement.nextElementSibling.children.addClass('fadeOut');
		 BtnThis.parentElement.nextElementSibling.addClass('full-screen');		 
		 BtnThis.parentElement.nextElementSibling.addEventListener('transitionend', function() {
		 	BtnThis.parentElement.parentElement.nextElementSibling.getClasses('question-left')[0].addClass('question-left-to-right');
		 	BtnThis.parentElement.parentElement.nextElementSibling.getClasses('animate-right')[0].delClass('animate-right').addClass('animate-left').addClass('bgc-pink');
		 	BtnThis.parentElement.parentElement.nextElementSibling.addClass('fadeIn');


		 });
 		break;
 	case 'que-1':
		 BtnThis.parentElement.addClass('fadeOut');
		 BtnThis.parentElement.nextElementSibling.children.addClass('fadeOut');
		 BtnThis.parentElement.nextElementSibling.addClass('full-screen');
		 BtnThis.parentElement.nextElementSibling.addEventListener('transitionend', function() {
		 	BtnThis.parentElement.parentElement.nextSibling.getClasses('question-left')[0].delClass('question-left-to-right');
		 	BtnThis.parentElement.parentElement.nextElementSibling.getClasses('animate-right')[0].addClass('bgc-lightBlue');
		 	getId('que-2').addClass('fadeIn');
		 });
 		break;
 	case 'que-2':
		 BtnThis.parentElement.addClass('fadeOut');
		 BtnThis.parentElement.nextElementSibling.children.addClass('fadeOut');
		 BtnThis.parentElement.nextElementSibling.addClass('full-screen');
		 BtnThis.parentElement.nextElementSibling.addEventListener('transitionend', function() {
		 	// BtnThis.parentElement.parentElement.nextSibling.getClasses('question-left')[0].delClass('question-left-to-right');
		 	// BtnThis.parentElement.parentElement.nextSibling.getClasses('animate-right')[0].delClass('animate-left').delClass('animate-left-open');
		 	// BtnThis.parentElement.parentElement.nextSibling.addClass('fadeIn');
		 	getId('finish').addClass('finish-fadeIn');
		 });
 		break;
 	default:
 		// statements_def
 		break;
 }


 // var left = BtnThis.parentElement.parentElement.getClasses('left')[0].childNodes[0];
 // var right = BtnThis.parentElement.parentElement.getClasses('right')[0].childNodes[0];
 // console.log(left, right);
// if (BtnThis.parentElement.parentElement.getClasses('left')[0].childNodes.length > 0) {
    // BtnThis.parentElement.parentElement.getClasses('left')[0].delClass('left').delClass('fadeOut').addClass('right').addKid(right);
    // BtnThis.parentElement.parentElement.getClasses('right')[0].delClass('right').addClass('left').addKid(left);
// }
 
 
 	

}



//開場
getId('opening').getClasses('square')[0].addEventListener('animationend',function(){
	this.addClass('square-full');
});

getId('opening').getClasses('circle')[0].addEventListener('animationend',function(){
	this.addClass('circle-full');
});


getId('opening').getClasses('star')[0].addEventListener('animationend',function(){
  	this.addClass('star-full');
  	getId('opening').getClasses('star-full')[0].addEventListener('animationend',function(){
		getId('opening').addClass('opening-fadeOut');
		getClasses('opening-fadeOut')[0].addEventListener('animationend',function(){		
			this.nextElementSibling.addClass('fadeIn');
		});
  	});
});





// getTags('loading')[0].addClass('fadeOut');

