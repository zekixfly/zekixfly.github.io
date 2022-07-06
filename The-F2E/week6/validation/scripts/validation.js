//step1
for(var i= 0; i < getTags('fieldset').length; i++) {

	if(i < getClasses('previous').length) {
		getClasses('previous')[i].onclick = function() {
			var filedIdx = getTags('fieldset').indexOf(this.parentElement.parentElement);			
			if(filedIdx !== -1) {
				getId('progressbar').getTags('li')[filedIdx].delClass('active').delClass('checked');
				if(filedIdx < getClasses('previous').length) {
					getId('progressbar').getTags('li')[filedIdx-1].delClass('checked');
				}
			}
			this.parentElement.parentElement.addClass('none-style').previousElementSibling.delClass('none-style').addClass('block-style')
		}		
	}
	if(i < getClasses('next').length) {

		getClasses('next')[i].onclick = function() {

			if(getNames('account')[0].checkValidity() && getNames('password')[0].checkValidity() && getNames('comfirm-password')[0].checkValidity()) {
				if(getNames('comfirm-password')[0].value == getNames('password')[0].value) {
					getNames('comfirm-password')[0].addClass('confirm-password-valid');
					getNames('comfirm-password')[0].parentElement.getClasses('tip')[0].addClass('tip-valid');
				var filedIdx = getTags('fieldset').indexOf(this.parentElement.parentElement);
				if(filedIdx !== -1) {
					getId('progressbar').getTags('li')[filedIdx].addClass('active').addClass('checked');
					if(filedIdx < getClasses('next').length - 1) {
						getId('progressbar').getTags('li')[filedIdx+1].addClass('active');	
					}				
				}
				this.parentElement.parentElement.addClass('none-style');
				this.parentElement.parentElement.nextElementSibling.delClass('none-style').addClass('block-style');				
				}
				else {
					getNames('comfirm-password')[0].delClass('confirm-password-valid').addClass('confirm-password-invalid');
					getNames('comfirm-password')[0].parentElement.getClasses('tip')[0].delClass('tip-valid').addClass('tip-invalid');
				}

			}

		}
	}

}

getNames('comfirm-password')[0].addEventListener('keyup', function() {
	// console.log(this.value, getNames('password')[0].value, this.value == getNames('password')[0].value)
	if(this.value == getNames('password')[0].value) {
		this.delClass('confirm-password-invalid').addClass('confirm-password-valid');
		this.parentElement.getClasses('tip')[0].delClass('tip-invalid').addClass('tip-valid');
	}
	else {
		this.delClass('confirm-password-valid');
		this.parentElement.getClasses('tip')[0].delClass('tip-valid');
	}
});

getTags('loading')[0].addClass('none-style');

//step2
ajax({
	tyep:'get',
	url:'./json/taiwan-data.json',
	ok: function(response) {
		// console.log(response);
		var cityOption = '';
		var distOption = '';
		for(var i = 0; i < response.counties[1].length; i++) {
			cityOption = makeTag('option');
			cityOption.setAttr('value',response.counties[1][i]);			
			cityOption.textContent = response.counties[0][i];			
			getId('city').addKid(cityOption)
		}
		getId('city').onchange = function () {
			getId('dist').innerHTML = '';
			distOption = makeTag('option');
			distOption.name = 'dist';
			distOption.setAttr('value','');
			distOption.setAttr('disabled','');
			distOption.setAttr('selected','');
			distOption.setAttr('style','display: none;');
			distOption.textContent = 'Dist';
			getId('dist').addKid(distOption);
			// console.log(this.selectedIndex-1);
			for(var i = 0; i < response.districts[this.selectedIndex-1][1].length; i++) {
				// console.log(response.districts[this.selectedIndex-1][1][i]);
				// console.log(response.districts[this.selectedIndex-1][0][i]);
				distOption = makeTag('option');
				distOption.setAttr('value', response.districts[this.selectedIndex-1][1][i]);
				distOption.textContent = response.districts[this.selectedIndex-1][0][i];
				getId('dist').addKid(distOption);
			}
		}
	}
});