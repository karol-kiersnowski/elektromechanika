<?php

function incrementPageView()
{
	increaseCounter(); // counter.txt
	increaseCounterWithoutAdminVisits(); // counter-noadmin.txt
	addVisitor(); // visitors.csv
}

function increaseCounter()
{
	if(file_exists("php/counter.txt"))
	{
		$file = fopen("php/counter.txt", "r");
		$counter = (int)fgets($file);
		fclose($file);
		$counter++;
	} 
	else
		$counter = 1;

	$file = fopen("php/counter.txt", "w");
	fwrite($file, $counter);
	fclose($file);
}

function increaseCounterWithoutAdminVisits()
{
	$adminIP = "91.244.219.226";
	
	if(file_exists("php/counter-noadmin.txt"))
	{ 
		$file = fopen("php/counter-noadmin.txt", "r");
		$counterNoAdmin = (int)fgets($file);
		fclose($file);
		if ($_SERVER['REMOTE_ADDR'] != $adminIP)
			$counterNoAdmin++;
	} 
	else {
		if ($_SERVER['REMOTE_ADDR'] != $adminIP)
			$counterNoAdmin = 1;
		else
			$counterNoAdmin = 0;
	}

	$file = fopen("php/counter-noadmin.txt", "w");
	fwrite($file, $counterNoAdmin);
	fclose($file);
}

function getCounter()
{
	$file = fopen("php/counter.txt", "r");
	$counter = (int)fgets($file);
	fclose($file);
	return $counter;
}

function getCounterWithoutAdminVisits()
{
	$file = fopen("php/counter-noadmin.txt", "r");
	$counterNoAdmin = (int)fgets($file);
	fclose($file);
	return $counterNoAdmin;
}

function addVisitor()
{
	if(!file_exists("php/visitors.csv"))
	{
		$visitor = array("id","date","time","ip");
		$file = fopen("php/visitors.csv","w");
		fputcsv($file, $visitor);
		fclose($file);
	}

	$file = file("php/visitors.csv");
	$id = count($file);
	$date = date("Y-m-d");
	$time = date("H:i:s");
	$ip = $_SERVER['REMOTE_ADDR'];
	$ipArray = explode(".", $ip);
	$ipAnonymized = $ipArray[0] . "." . $ipArray[1] . "." . $ipArray[2] . "." . "***";
	$visitor = array($id,$date,$time,$ipAnonymized);
	$file = fopen("php/visitors.csv","a");
	fputcsv($file, $visitor);
	fclose($file);
}

function displayCounter()
{
	$counter = getCounter();
	$integer = $counter;
	$string = strval($integer);
	$array = str_split($string);
	$leadingZeros = 5 - count($array);
	for ($i=0; $i<$leadingZeros; $i++)
		echo "<span class='digit'>0</span>";
	for ($i=0; $i<count($array); $i++)
		echo "<span class='digit'>$array[$i]</span>";
}

function displayCountingStartDate()
{
	if(file_exists("php/visitors.csv"))
	{
		$file = fopen("php/visitors.csv","r");
		fgetcsv($file);
		$firstDayOfCountingVisits = fgetcsv($file)[1];
		fclose($file);
		echo $firstDayOfCountingVisits;
	}
}

?>