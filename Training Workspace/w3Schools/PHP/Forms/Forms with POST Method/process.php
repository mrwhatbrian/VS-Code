<?php
    session_start();

    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    $errors = [];

    // Function to safely get input
    function getInput($key) {
        return isset($_POST[$key]) ? $_POST[$key] : null;
    }

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $firstName = sanitizeInput(getInput("first-name"));
        $lastName = sanitizeInput(getInput("last-name"));
        $gender = sanitizeInput(getInput("gender"));
        $month = isset($_POST['month']) ? sanitizeInput($_POST['month']) : null;
        $day = isset($_POST['day']) ? sanitizeInput($_POST['day']) : null;
        $year = isset($_POST['year']) ? sanitizeInput($_POST['year']) : null;
        $email = sanitizeInput(filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL));
        $phoneNumber = sanitizeInput(getInput("phone-number"));
        $streetName = sanitizeInput(getInput("street-name"));
        $city = sanitizeInput(getInput("city"));
        $province = sanitizeInput(getInput("province"));
        $postalCode = sanitizeInput(getInput("postal-code"));
        $username = sanitizeInput(getInput("username"));
        $password = getInput("password");
        $confirmPassword = getInput("confirm-password");

        // Validate inputs
        if (empty($firstName) || !preg_match("/[A-Za-z]+/", $firstName)) {
            $errors[] = "First name is required and must contain only letters.";
        }
        if (empty($lastName) || !preg_match("/[A-Za-z]+/", $lastName)) {
            $errors[] = "Last name is required and must contain only letters.";
        }
        if (empty($gender)) {
            $errors[] = "Gender is required.";
        }
        if (empty($month) || empty($day) || empty($year)) {
            $errors[] = "Date of birth is required.";
        }
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors[] = "Invalid email format.";
        }
        if (!preg_match("/\([0-9]{3}\) [0-9]{3}-[0-9]{4}/", $phoneNumber)) {
            $errors[] = "Phone number format is invalid.";
        }
        if (empty($streetName)) {
            $errors[] = "Street name is required.";
        }
        if (empty($city)) {
            $errors[] = "City is required.";
        }
        if (empty($province)) {
            $errors[] = "Province is required.";
        }
        if (empty($postalCode)) {
            $errors[] = "Postal code is required.";
        }
        if (empty($username)) {
            $errors[] = "Username is required.";
        }
        if (empty($password) || strlen($password) < 8 || strlen($password) > 20) {
            $errors[] = "Password must be between 8 and 20 characters long.";
        }
        if ($password !== $confirmPassword) {
            $errors[] = "Passwords do not match.";
        }

        // If there are no errors, process the data
        if (empty($errors)) {
            // Hash the password
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

            // Output the validated data (for testing)
            echo "<h1>Form Submission Successful</h1>";
            echo "<p>First Name: $firstName</p>";
            echo "<p>Last Name: $lastName</p>";
            echo "<p>Gender: $gender</p>";
            echo "<p>Date of Birth: $month/$day/$year</p>";
            echo "<p>Email: $email</p>";
            echo "<p>Phone Number: $phoneNumber</p>";
            echo "<p>Street Name: $streetName</p>";
            echo "<p>City: $city</p>";
            echo "<p>Province: $province</p>";
            echo "<p>Postal Code: $postalCode</p>";
            echo "<p>Username: $username</p>";
        } else {
            // Display validation errors
            echo "<h1>Validation Errors</h1>";
            foreach ($errors as $error) {
                echo "<p style='color: red;'>$error</p>";
            }
        }
    }

    function sanitizeInput($data) {
        return htmlspecialchars(trim($data ?? ''));
    }
?>