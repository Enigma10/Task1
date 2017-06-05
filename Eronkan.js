	var fees={
			"Exam Fee": {
				"INDIAN": {
					"ALL_COURSES": {
						"ALL_LEVEL": {
							"amount": 400
						}
					}
				},
				"FOREIGN": {
					"ALL_COURSES": {
						"ALL_LEVEL": {
							"amount": 100
						}
					}
				},
				"NRI": {
					"ALL_COURSES": {
						"ALL_LEVEL": {
							"amount": 600
						}
					}
				},
				"SAARC": {
					"ALL_COURSES": {
						"ALL_LEVEL": {
							"amount": 600
						}
					}
				}
			},
			"Application Fee": {
				"INDIAN": {
					"ALL_COURSES": {
						"UG": {
							"amount": 200
						},
						"UG-DIPLOMA": {
							"amount": 300
						},
						"PG": {
							"amount": 500
						}
					}
				},
				"FOREIGN": {
					"ALL_COURSES": {
						"UG": {
							"amount": 400
						},
						"UG-DIPLOMA": {
							"amount": 400
						},
						"PG": {
							"amount": 700
						}
					}
				}
			}
		} ;


var fees_type_arr= Object.keys(fees).map(function(k) { return k });
var fees_arr =  Object.keys(fees).map(function(k) { return fees[k] });

var fees_type , nationality, course_arr , level_arr , amount;
course_arr=[ "Medical", "Dental", "Ayurveda"];
level_arr=["UG","UG-DIPLOMA","PG"];

// To get value of fees, user choose.
function getFee(){
		var e = document.getElementById("fees");
		fees_type = e.options[e.selectedIndex].text;
		fees_type=fees_type+' Fee';
		console.log(fees_type);
		secondList(fees_type)
		document.getElementById("nationality").classList.remove("hide");
		thirdList(nationality,fees_type)
		fourthList();


}

// To make LIST of : ALL Nationality
function secondList(fees_type){
		var index = fees_type_arr.indexOf(fees_type);
		var s= document.getElementById('nationality');
		//event.preventDefault();

		s.options.length=0;
		s.options[s.options.length]= new Option("Nationality", "Nationality");
		for(var val in fees_arr[index]) {
		s.options[s.options.length]= new Option(val, val);
		}
		
}

// To get value of nationality , user choose. 
function getNationality() {
		var s= document.getElementById('nationality');
		nationality=s.options[s.selectedIndex].text;
		console.log(s.options[s.selectedIndex].text);

		thirdList(nationality,fees_type)
		document.getElementById("course").classList.remove("hide");
		fourthList()
		


}

//To make LIST of :  ALL Courses 

function thirdList(){
		var s= document.getElementById('course');
		s.options.length=0;
		s.options[s.options.length]= new Option("Course", "Course");
		for(let val in course_arr) {
			s.options[s.options.length]= new Option(course_arr[val], course_arr[val]);
		}
		
}

// To get value of course , user choose. 
var course
function getCourse() {

		var s= document.getElementById('course');
		course=s.options[s.selectedIndex].text;
		console.log(s.options[s.selectedIndex].text);
		fourthList()
		document.getElementById("level").classList.remove("hide");
}



//To make LIST of :  Level of study 
function fourthList() 
{
		var s1= document.getElementById('level');
		s1.options.length=0;
		s1.options[s1.options.length]= new Option("Level", "Level");
		for(let val1 in level_arr) {
			s1.options[s1.options.length]= new Option(level_arr[val1], level_arr[val1]);
		}
}


// To get value of Level, user choose. 
var level
function getLevel() {
		var s= document.getElementById('level');
		level=s.options[s.selectedIndex].text;
		console.log(s.options[s.selectedIndex].text);
getAmount();
}





// retrieving amount for course and displaing it.  


 function getAmount() {
var index = fees_type_arr.indexOf(fees_type);
if(index==0)
{
    amount = fees_arr[index][nationality]["ALL_COURSES"]["ALL_LEVEL"].amount; 
} 
else {
    amount = fees_arr[index][nationality]["ALL_COURSES"][level].amount;
}

alert("Fees Amount  Is : "+ amount );
console.log(amount)
document.getElementsByClassName("result").value = amount;
}  




//console.log("hhhhhhh"+fees_arr[index][0]);
//console.log("helloams  viskd"+JSON.parse(fees));