<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="">
		<meta name="author" content="">

		<title>KåK admin</title>

		<!-- Bootstrap Core CSS -->
		<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">

		<!-- Custom Fonts -->
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="css/font-awesome.min.css" type="text/css">

		<!-- Plugin CSS -->
		<link rel="stylesheet" href="css/animate.min.css" type="text/css">

		<!-- Custom CSS -->
		<link rel="stylesheet" href="css/kak.css" type="text/css">
		<link rel="stylesheet" href="css/cms-admin.css" type="text/css">

		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
		    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
		    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->

	</head>
	<body>
	<!--<?php echo '<p>Hello World</p>'; ?>-->

	<div class="row text-center">
		<h1>KåK adminsida</h1>
		<div class="container">
			<div id="new-post-wrapper" class="col-md-8 col-md-offset-2 text-center">
				<h3>Nytt inlägg</h3>

				<form>
					<input class="form-input" type="text" placeholder="Rubrik" name="title"></input>
					<textarea class="form-textarea" type="text" placeholder="Innehåll" name="content"></textarea>
					<button class="form-button bg-chs-blue">Posta</button>
				</form>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="container text-center">
			<h3>Tidigare inlägg</h3>
			<div id="prev-posts-wrapper" class="col-md-8 col-md-offset-2">
				<p>These are not the posts you are looking for..</p>
			</div>
		</div>
	</div>

	<script src="js/jquery.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/cms-admin.js"></script>
	</body>
</html>