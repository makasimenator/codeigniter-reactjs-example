<?php
$v8 = new V8Js();

$props =
   array('data' => array(
     array('dummy data 1', 2, 3),
     array(4, 5, 'dummy data 6'),
     array(7, 11, 9),
     array('foo', 'bar', 'hello')
   ));
$propsJson = json_encode($props);

$react = [
       file_get_contents(__DIR__.'/node_modules/react/dist/react.js'),
       file_get_contents(__DIR__.'/node_modules/react-dom/dist/react-dom.min.js'),
       file_get_contents(__DIR__.'/node_modules/react-dom/dist/react-dom-server.min.js'),
       file_get_contents(__DIR__.'/build/Main.js'),
       'ReactDOMServer.renderToString(React.createElement(Main, ' . $propsJson . '))'
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
	<title>CodeIgniter + ReactJS views working together, yay</title>
</head>
<body>
  <div class="container" style="margin-top: 20px; height:300px" id="app"><?= $reactStr; ?></div>
</body>
</html>
