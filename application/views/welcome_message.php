<?php
$v8 = new V8Js();

$props =
   array('data' => array(
     array(1, 2, 3),
     array(4, 5, 6),
     array(7, 8, 9)
   ));
$propsJson = json_encode($props);

$react = [
       file_get_contents(__DIR__.'/node_modules/react/dist/react.js'),
       file_get_contents(__DIR__.'/node_modules/react-dom/dist/react-dom.min.js'),
       file_get_contents(__DIR__.'/node_modules/react-dom/dist/react-dom-server.min.js'),
       file_get_contents(__DIR__.'/build/table.js'),
       'ReactDOMServer.renderToString(React.createElement(App, ' . $propsJson . '))'
];

try {
	$reactStr = $v8->executeString(implode(PHP_EOL, $react));
} catch (Exception $e) {
	echo '<h1>', $e->getMessage(), '</h1>';
	echo '<pre>', $e->getTraceAsString(), '</pre>';
	exit;
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>CodeIgniter + ReactJS views</title>

	<style type="text/css">

	::selection{ background-color: #E13300; color: white; }
	::moz-selection{ background-color: #E13300; color: white; }
	::webkit-selection{ background-color: #E13300; color: white; }

	body {
		background-color: #fff;
		margin: 40px;
		font: 13px/20px normal Helvetica, Arial, sans-serif;
		color: #4F5155;
	}

	a {
		color: #003399;
		background-color: transparent;
		font-weight: normal;
	}

	h1 {
		color: #444;
		background-color: transparent;
		border-bottom: 1px solid #D0D0D0;
		font-size: 19px;
		font-weight: normal;
		margin: 0 0 14px 0;
		padding: 14px 15px 10px 15px;
	}

	code {
		font-family: Consolas, Monaco, Courier New, Courier, monospace;
		font-size: 12px;
		background-color: #f9f9f9;
		border: 1px solid #D0D0D0;
		color: #002166;
		display: block;
		margin: 14px 0 14px 0;
		padding: 12px 10px 12px 10px;
	}

	#body{
		margin: 0 15px 0 15px;
	}

	p.footer{
		text-align: right;
		font-size: 11px;
		border-top: 1px solid #D0D0D0;
		line-height: 32px;
		padding: 0 10px 0 10px;
		margin: 20px 0 0 0;
	}

	#container{
		margin: 10px;
		border: 1px solid #D0D0D0;
		-webkit-box-shadow: 0 0 8px #D0D0D0;
	}
	</style>
</head>
<body>

<div id="container">
  <div class="container" style="margin-top: 20px; height:300px" id="app"><?= $reactStr; ?></div>
	<p class="footer">Page rendered in <strong>{elapsed_time}</strong> seconds</p>
</div>

</body>
</html>
