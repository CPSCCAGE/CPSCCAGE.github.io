//setup connection
var client = new Client("cage", 'http://581.cpsc.ucalgary.ca', 8000);

var val="";
document.getElementById("circle1").style.display = "none";
document.getElementById("circle2").style.display = "none";	
document.getElementById("circle3").style.display = "none";
document.getElementById("circle4").style.display = "none";
document.getElementById("circle5").style.display = "none";
document.getElementById("circle6").style.display = "none";	
		
		
client.addMessageListener(function(msg)
{
	/*
	AMERICA 1  
		2   EUROPE --> 
		3   SOUTH AMERICA --> 
		4    AFRICA --> 
		5    ASIA --> 
		6  OCEANIA --> */
		
		
	console.log(JSON.stringify(msg));
	val = ""+msg.fields[0].value
	console.log(val);  //gets the value of the things sent
		if ( val.indexOf("1") > -1 )  {
		console.log("CONTAINNNSSS  AAA    1"); 	
		document.getElementById("text").style.display = "";		
		document.getElementById("circle1").style.background = "green";
		document.getElementById("f1").style.display = "";
		
	} else{
		document.getElementById("text").style.display = "none";
		document.getElementById("f1").style.display = "none";
		document.getElementById("circle1").style.background = "red";
	}
	
	if ( val.indexOf("2") > -1 )  {
		console.log("CONTAINNNSSS  AAA    2");  
		document.getElementById("text2").style.display = "";
		document.getElementById("circle2").style.background = "green";
		document.getElementById("f2").style.display = "";
	} else{
		document.getElementById("text2").style.display = "none";
		document.getElementById("f2").style.display = "none";
		document.getElementById("circle2").style.background = "red";
	}		
	
	
	if ( val.indexOf("3") > -1 )  {
		console.log("CONTAINNNSSS  AAA    3");   
		document.getElementById("text3").style.display = "";
		document.getElementById("circle3").style.background = "green";
		document.getElementById("f3").style.display = "";
	} else{
		document.getElementById("text3").style.display = "none";
		document.getElementById("f3").style.display = "none";
		document.getElementById("circle3").style.background = "red";
	}	
	
	
	
	
	
	if ( val.indexOf("4") > -1 )  {
		console.log("CONTAINNNSSS  AAA    4");   
		document.getElementById("text4").style.display = "";		
		document.getElementById("circle4").style.background = "green";
		document.getElementById("f4").style.display = "";
	} else{
		document.getElementById("text4").style.display = "none";
		document.getElementById("f4").style.display = "none";
		document.getElementById("circle4").style.background = "red";
	}	
	
	
	
	if ( val.indexOf("5") > -1 )  {
		console.log("CONTAINNNSSS  AAA    5");   
		document.getElementById("text5").style.display = "";
		document.getElementById("circle5").style.background = "green";
		document.getElementById("f5").style.display = "";
	} else{
		document.getElementById("text5").style.display = "none";
		document.getElementById("f5").style.display = "none";
		document.getElementById("circle5").style.background = "red";
	}
	if ( val.indexOf("6") > -1 )  {
		console.log("CONTAINNNSSS  AAA    6");   
		document.getElementById("text6").style.display = "";
		document.getElementById("circle6").style.background = "green";
		document.getElementById("f6").style.display = "";
	} else{
		document.getElementById("text6").style.display = "none";
		document.getElementById("f6").style.display = "none";
		document.getElementById("circle6").style.background = "red";
	}
	
});
var regex = /(pizza)/g // Insert whatever phrase or character you want to find


client.addConnectListener(function(args)
{
	//TODO Your code here!
	//connection established
	console.log('Client Connected.');
	document.getElementById("status").innerHTML = 'Connected to Server.';
	document.getElementById("status_img").src = 'images/green_circle.png';
});

client.addDisconnectListener(function(args)
{
	//TODO Your code here!
	//Disconnected event
	console.log('Client Disconnected.');
	document.getElementById("status").innerHTML = 'Disconnected.';
	document.getElementById("status_img").src = 'images/red_circle.png';
});

client.addErrorListener(function(err)
{
	//TODO Your code here!
	//Error recieved
	console.log('Error!' + err);
});




//TODO Your code here!

//send a message demo
var message = new Message("hello");
message.addField('num1', 9);
var p = ""+message.fields[0].value;
console.log(p);

message.addField('num2', 450);
message.deliverToSelf = true;
client.sendMessage(message);
if ( p.indexOf("5") > -1 )  { console.log("HHHHHHHHHHH");   } 





