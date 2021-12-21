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
	if(file_exists("php/counter-noadmin.txt"))
	{ 
		$file = fopen("php/counter-noadmin.txt", "r");
		$counterNoAdmin = (int)fgets($file);
		fclose($file);
		if ($_SERVER['REMOTE_ADDR'] != "91.244.219.226")
			$counterNoAdmin++;
	} 
	else
		$counterNoAdmin = 1;

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

function drawCounter()
{
	$counter = getCounter();
	$integer = $counter;
	$string = strval($integer);
	$array = str_split($string);
	//echo $array[0] . $array[1];
	//echo count($array);
	$leadingZeros = 5 - count($array);
	for ($i=0; $i<$leadingZeros; $i++)
		echo "<span class='digit'>0</span>";
	for ($i=0; $i<count($array); $i++)
		echo "<span class='digit'>$array[$i]</span>";
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
	$ip = "91.244.219.261"; //$_SERVER['REMOTE_ADDR'];
	$ipArray = explode(".", $ip);
	$ipAnonymized = $ipArray[0] . "." . $ipArray[1] . "." . $ipArray[2] . "." . "XXX";
	$visitor = array($id,$date,$time,$ipAnonymized);
	$file = fopen("php/visitors.csv","a");
	fputcsv($file, $visitor);
	fclose($file);
}

?>