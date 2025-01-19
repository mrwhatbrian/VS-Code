<?php
  if ($_SERVER["REQUEST_METHOD"] === "GET") {

    // collect and sanitize input data
    $firstName = htmlspecialchars(trim($_GET["first-name"]));
    $lastName = htmlspecialchars(trim($_GET["last-name"]));
    $gender = htmlspecialchars(trim($_GET["gender"]));
    $date_of_birth = htmlspecialchars(trim($_GET["date-of-birth"]));
    $email = htmlspecialchars(trim($_GET["email"]));
    $phone_number = htmlspecialchars(trim($_GET["phone-number"]));
    $username = htmlspecialchars(trim($_GET["username"]));
    $password = $_GET["password"];

    // Display the collected data
    echo "<h2>Submitted Information</h2>";
    echo "<p>Name: $firstName $lastName</p>";
    echo "<p>Gender: $gender</p>";

    $formatted_dob = date("F j, Y", strtotime($date_of_birth));
    echo "<p>Date of Birth: $formatted_dob</p>";
    
    echo "<p>Email: $email</p>";
    echo "<p>Phone Number: $phone_number</p>";
    echo "<p>Username: $username</p>";
    echo "<p>Password: $password</p>";

  } else {

    // Redirect if accessed directly
    header("Location: index.html");
    exit();

  }
?>