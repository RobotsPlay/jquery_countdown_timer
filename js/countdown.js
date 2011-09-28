/**********************************************************
* Author: John Graham (http://www.johnegraham2.com)
* Copyright: © 2011
* License: GPLv3 (http://www.gnu.org/copyleft/gpl.html)
* Description: A countdown timer using jQuery.  Set target
* time and date on line 10.  The funtion endCountdown is 
* fired once upon timer completion.
**********************************************************/

var target_time = new Date("April 1, 2012 00:00:00");  /* <=====Target Date */
	
var current_time =  0;
var time_left = 0;
var days = 0;
var hours = 0;
var minutes = 0;
var seconds = 0;
	
var interval_timer = 0;
	
$(document).ready(function(){
	onTimer();
	interval_timer = setInterval(onTimer, 1000);
});
	
function endCountdown(){
	clearInterval(interval_timer);
	alert("OK, we're done!");
}
	
function onTimer(){
	getCurrentTime();
	if(time_left > 0){
		parseTime();
		updateCounters();
	} 
	else {
		endCountdown();
	}
}

function getCurrentTime(){
	current_time = new Date();
	time_left = target_time.getTime() - current_time.getTime();
	time_left = new Date(time_left);
}
	
function parseTime(){
	var mill_left = time_left.getTime();
	//get days 86400000
	days = Math.floor(mill_left / 86400000);
	mill_left = mill_left - (days * 86400000) //remove days from time left
	//get hours
	hours = Math.floor(mill_left / 3600000);
	mill_left = mill_left - (hours * 3600000) //remove hours from time left
	//get minutes
	minutes = Math.floor(mill_left / 60000);
	mill_left = mill_left - (minutes * 60000) //remove minutes from time left
	//get seconds
	seconds = Math.floor(mill_left / 1000);
	}
	
function updateCounters(){
	var days_ten_val = (Math.floor(days/10)).toString();
	$('#days_tens').html(days_ten_val.toString());
		
	var days_one_val = (days%10).toString();
	$('#days_ones').html(days_one_val);
		
	var hours_ten_val = (Math.floor(hours/10)).toString();
	$('#hours_tens').html(hours_ten_val);
		
	var hours_one_val = (hours%10).toString();
	$('#hours_ones').html(hours_one_val);
		
	var mins_ten_val = (Math.floor(minutes/10)).toString();
	$('#minutes_tens').html(mins_ten_val);
		
	var mins_one_val = (minutes%10).toString();
	$('#minutes_ones').html(mins_one_val);
		
	var secs_ten_val = (Math.floor(seconds/10)).toString();
	$('#seconds_tens').html(secs_ten_val);
		
	var secs_one_val = (seconds%10).toString();
	$('#seconds_ones').html(secs_one_val);
}