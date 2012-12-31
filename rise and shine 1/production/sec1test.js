//ex2:
function testClock() {
    setEnvironment();
	featureTest();
	displayEnvironment();
	
	function featureTest() {
        console.log("NEW FEATURE(S)");
        console.log("displayCurrentTime()");
		displayCurrentTime();
        console.log("displayAlarmTime()");
		displayAlarmTime();
        console.log("-");
	}
	
	function setEnvironment() {
        console.log("ENVIRONMENT SETUP");
        console.log("currentTime=100");
		currentTime=100;
        console.log("alarmTime=830");
		alarmTime=830;
        console.log("-");
	}
	
	function displayEnvironment() {
        console.log("CURRENT ENVIRONMENT");
		console.log("The current time is: " + currentTime);
		console.log("The alarm is set for: " + alarmTime);
        console.log("-");
	}
}

	/*CONSOLE
	ENVIRONMENT SETUP
	currentTime=100
	alarmTime=830
	-
	NEW FEATURE(S)
	displayCurrentTime()
	The current time is: 100
	displayAlarmTime()
	The alarm is set for: 830
	-
	CURRENT ENVIRONMENT
	The current time is: 100
	The alarm is set for: 830
	-
	*/

//ex3:
function testClock() {
	setEnvironment();
	featureTest();
	displayEnvironment();

	function featureTest() {
		console.log("NEW FEATURE(S)");
		console.log("setCurrentTime(100)");
		setCurrentTime(100);
		console.log("setAlarmTime(830)");
		setAlarmTime(830);
		console.log("-");
	}
	
	function setEnvironment() {
        console.log("ENVIRONMENT SETUP");
        console.log("none");
		console.log("-");
	}
	
	function displayEnvironment() {
		console.log("CURRENT ENVIRONMENT");
		console.log("The current time is: " + currentTime);
		console.log("The alarm is set for: " + alarmTime);
		console.log("alarmSet value: " + alarmSet);
		console.log("-");
	}
}

	/*CONSOLE
	ENVIRONMENT SETUP
	none
	-
	CURRENT ENVIRONMENT
	The current time is: undefined
	The alarm is set for: undefined
	alarmSet value: undefined
	-
	NEW FEATURE(S)
	setCurrentTime(100)
	setAlarmTime(830)
	-
	CURRENT ENVIRONMENT
	The current time is: 100
	The alarm is set for: 830
	alarmSet value: true
	*/

//ex4
function testClock() {
	setEnvironment();
	helperCode();
	displayEnvironment();
	featureTest();
	displayEnvironment();
	
	function featureTest() {
		console.log("NEW FEATURE(S)");
		console.log("ringAlarm()");
		ringAlarm();
	}
	
	function helperCode() {
		console.log("HELPER CODE");
		console.log("while loop - simulates time passing until currentTime=alarmTime");
		while (currentTime != alarmTime) {
			currentTime += 10;
	        console.log(currentTime);
		}
	}
	
	function setEnvironment() {
        console.log("ENVIRONMENT SETUP");
        console.log("currentTime=100");
		currentTime=100;
        console.log("alarmTime=830");
		alarmTime=830;
		console.log("alarmSet=true");
		alarmSet=true;
        console.log("-");
	}
	
	function displayEnvironment() {
		console.log("CURRENT ENVIRONMENT");
		console.log("The current time is: " + currentTime);
		console.log("The alarm is set for: " + alarmTime);
		console.log("alarmSet value: " + alarmSet);
		console.log("-");
	}
}

	/*CONSOLE
	ENVIRONMENT SETUP
	currentTime=100
	alarmTime=830
	alarmSet=true
	-
	HELPER CODE
	while loop - simulates time passing until currentTime=alarmTime
	110
	120
	130
	...
	810
	820
	830
	-
	CURRENT ENVIRONMENT
	The current time is: 830
	The alarm is set for: 830
	alarmSet value: true
	-
	NEW FEATURE(S)
	ringAlarm()
	Beep beep beep beep!
	-
	CURRENT ENVIRONMENT
	The current time is: 830
	The alarm is set for: 830
	alarmSet value: true
	-
	*/


//ex5
function testClock() {
    setEnvironment();
    helperCode();
    displayEnvironment();
    featureTest();
	displayEnvironment();
	
	function featureTest() {
		console.log("NEW FEATURE(S)");
		console.log("hitSnooze()");
		hitSnooze();
        console.log("-");
	}
	
	function helperCode() {
		console.log("HELPER CODE");
		console.log("simulates time passing - sets currentTime=alarmTime");
		currentTime = alarmTime;
        console.log("if statement - calls ringAlarm() if currentTime=alarmTime");
        if(currentTime === alarmTime) {
            console.log("ringAlarm()");
		    ringAlarm();  
        }
        console.log("-");
	}
	
	function setEnvironment() {
        console.log("ENVIRONMENT SETUP");
        console.log("currentTime=100");
		currentTime=100;
        console.log("alarmTime=830");
		alarmTime=830;
        console.log("-");
	}
	
	function displayEnvironment() {
		console.log("CURRENT ENVIRONMENT");
		console.log("The current time is: " + currentTime);
		console.log("The alarm is set for: " + alarmTime);
		console.log("alarmSet value: " + alarmSet);
		console.log("snoozeActive value: " + snoozeActive);
		console.log("-");
	}
}

	/*CONSOLE
	ENVIRONMENT SETUP
	currentTime=100
	alarmTime=830
	-
	HELPER CODE
	simulates time passing - sets currentTime=alarmTime
	if statement - calls ringAlarm() if currentTime=alarmTime
	ringAlarm()
	Beep beep beep beep!
	-
	CURRENT ENVIRONMENT
	The current time is: 830
	The alarm is set for: 830
	alarmSet value: false
	snoozeActive value: false
	-
	NEW FEATURE(S)
	hitSnooze()
	SNOOZE!
	snoozeActive value: true
	The alarm will go off again at 840
	-
	CURRENT ENVIRONMENT
	The current time is: 830
	The alarm is set for: 840
	alarmSet value: false
	snoozeActive value: true
	*/

//ex6
function testClock() {
    var scenario1 = "between setAlarmTime() and ringAlarm()";
    var scenario2 = "between hitSnooze() and ringAlarm()";

	setEnvironment();
	console.log("SCENARIO: " + scenario1);
	featureTest();
	displayEnvironment();
	helperCode();
	displayEnvironment();
	console.log("SCENARIO: " + scenario2);
	featureTest();
	helperCode();
	displayEnvironment();

	
	function featureTest() {
		console.log("NEW FEATURE(S)");
		console.log("passTime()");
		passTime();
        console.log("-");
	}
	
	function helperCode() {
		console.log("HELPER CODE");
		console.log("hitSnooze()");
		hitSnooze();
        console.log("-");
	}
	
	function setEnvironment() {
        console.log("ENVIRONMENT SETUP");
        console.log("currentTime=100");
		currentTime=100;
        console.log("alarmTime=830");
		alarmTime=830;
		console.log("alarmSet=false");
		alarmSet=false;
        console.log("snoozeActive=false");
		snoozeActive=false;
        console.log("-");
	}
	
	function displayEnvironment() {
		console.log("CURRENT ENVIRONMENT");
		console.log("The current time is: " + currentTime);
		console.log("The alarm is set for: " + alarmTime);
		console.log("alarmSet value: " + alarmSet);
		console.log("snoozeActive value: " + snoozeActive);
		console.log("-");
	}
}
	/*CONSOLE
	ENVIRONMENT SETUP
	currentTime=100
	alarmTime=830
	alarmSet=false
	snoozeActive=false
	-
	SCENARIO: between setAlarmTime() and ringAlarm()
	NEW FEATURE(S)
	passTime()
	110
	120
	...
	810
	820
	830
	Beep beep beep beep!
	snoozeActive value: true
	SNOOZE!
	The alarm will go off again at 840
	-
	CURRENT ENVIRONMENT
	The current time is: 830
	The alarm is set for: 840
	alarmSet value: false
	snoozeActive value: true
	-
	HELPER CODE
	hitSnooze()
	SNOOZE!
	The alarm will go off again at 840
	-
	CURRENT ENVIRONMENT
	The current time is: 830
	The alarm is set for: 840
	alarmSet value: false
	snoozeActive value: true
	-
	SCENARIO: between hitSnooze() and ringAlarm()
	NEW FEATURE(S)
	passTime()
	840
	Beep beep beep beep!
	snoozeActive value: false
	Congrats! You woke up!
	-
	HELPER CODE
	hitSnooze()
	SNOOZE!
	The alarm will go off again at 850
	-
	CURRENT ENVIRONMENT
	The current time is: 840
	The alarm is set for: 850
	alarmSet value: false
	snoozeActive value: false
	-
	*/
	
//ex7
function testClock() {
    var scenarios = ["setAlarmTime() then ringAlarm()", "hitSnooze() then ringAlarm()", "second hitSnooze() and ringAlarm()"]; 

    setEnvironment();
    for (var i=0; i<scenarios.length; i++){
        console.log("SCENARIO: #"+ (i+1) +": " + scenarios[i]);
        featureTest(scenarios[i]);
        displayEnvironment();
    }
    
	function featureTest(scenario) {
		console.log("NEW FEATURE(S)");
		console.log("passTime()");
		passTime();
        console.log("-");
	}
	
	function setEnvironment() {
        console.log("ENVIRONMENT SETUP");
        console.log("currentTime=100");
		currentTime=100;
        console.log("alarmTime=830");
		alarmTime=830;
        console.log("-");
	}
	
	function displayEnvironment() {
		console.log("CURRENT ENVIRONMENT");
		console.log("The current time is: " + currentTime);
		console.log("The alarm is set for: " + alarmTime);
		console.log("alarmSet value: " + alarmSet);
		console.log("snoozeActive value: " + snoozeActive);
		console.log("-");
	}
}

	/*CONSOLE
	ENVIRONMENT SETUP
	currentTime=100
	alarmTime=830
	-
	SCENARIO: #1: setAlarmTime() then ringAlarm()
	NEW FEATURE(S)
	passTime()
	110
	120
	...
	810
	820
	830
	Beep beep beep beep!
	SNOOZE!
	-
	CURRENT ENVIRONMENT
	The current time is: 830
	The alarm is set for: 840
	alarmSet value: false
	snoozeActive value: true
	-
	SCENARIO: #2: hitSnooze() then ringAlarm()
	NEW FEATURE(S)
	passTime()
	840
	Beep beep beep beep!
	SNOOZE!
	-
	CURRENT ENVIRONMENT
	The current time is: 840
	The alarm is set for: 850
	alarmSet value: false
	snoozeActive value: true
	-
	SCENARIO: #3: second hitSnooze() and ringAlarm()
	NEW FEATURE(S)
	passTime()
	850
	Beep beep beep beep!
	Congrats! You woke up!
	-
	CURRENT ENVIRONMENT
	The current time is: 850
	The alarm is set for: 850
	alarmSet value: false
	snoozeActive value: false
	-
	*/




