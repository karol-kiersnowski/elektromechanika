<?php include 'php/script.php'; ?>
<!DOCTYPE html>
<html lang="pl-PL">
<head>
	<meta charset="utf-8"/>
</head>
<body>
	<h1>elektromechanika.net.pl</h1>
	<h2>statystyki (dane od 2021-12-21)</h2>

	<p>
		Wyświetlenia: <?php echo getCounter(); ?>
	</p>
	<p>
		Wyświetlenia (nie licząc administratora): <?php echo getCounterWithoutAdminVisits(); ?>
	</p>

	<?php
		$file = file('php/visitors.csv');
		$csv = array();

		foreach ($file as $line)
			$csv[] = str_getcsv($line);
	?>

	<table>
		<tr>
		<?php foreach (array_shift($csv) as $title) : ?>
			<th style="padding: 0 10px;"><?=$title?></th>
		<?php endforeach; ?>
		</tr>
		<?php foreach ($csv as $record) : ?>
		    <tr>
		    <?php foreach ($record as $data) : ?>
		        <td style="padding: 0 10px;"><?=$data?></td>
		    <?php endforeach; ?>
		    </tr>
		<?php endforeach; ?>
		</tbody>
	</table>
</body>
</html>