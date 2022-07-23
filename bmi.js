
	var app = new Vue({
		el: '#app',
		data: {
			feets: '',
			inches: '',
			weight: '',
			bmi: ''
		},
		methods: {
			bmiCalculation: function() {
				var feets = parseInt(this.feets);
				var inches = parseInt(this.inches);
				var inches2 = parseInt(this.feets)*12;
				var height = inches+inches2;
				var weight = parseInt(this.weight);
				var total = ((weight/(height * height))*703).toFixed(1);
				this.bmi = total;
				if(total < 18.5) {
					$("#bmi").css("background-color","blue");
				}else if(total>=18.5 && total<24.9){
					$("#bmi").css("background-color","green");
				}else if(total>=25 && total<29.9){
					$("#bmi").css("background-color","yellow");

				}else{
					$("#bmi").css("background-color","red");


				}

			}
		}
	})
