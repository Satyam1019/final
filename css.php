<?php
session_start();

if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] != true) {
  header("location: login.php");
  exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
<?php require 'partials/_nav.php' ?>
    <div class="main-div">
        <div class="inner">
            <h4 class="que">Question</h4>
            <ul>
                <li>
                    <input type="radio" name="answer" id="ans1" class="answer">
                    <label for="ans1" id="option1">Option</label>
                </li>
                <li>
                    <input type="radio" name="answer" id="ans2" class="answer">
                    <label for="ans2" id="option2">Option</label>
                </li>
                <li>
                    <input type="radio" name="answer" id="ans3" class="answer">
                    <label for="ans3" id="option3">Option</label>
                </li>
                <li>
                    <input type="radio" name="answer" id="ans4" class="answer">
                    <label for="ans4" id="option4">Option</label>
                </li>
            </ul>
            <button id="submit">Submit</button>
            <div id="score" class="scoredisplay"></div>
        </div>
    </div>
    <script src="script1.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>