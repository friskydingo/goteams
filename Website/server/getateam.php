<?php
    session_start();
    
    $dbcnx = @mysql_connect("localhost", "root", "root");
    mysql_select_db("lagvarvet", $dbcnx);
    mysql_query ('SET NAMES UTF8;');
    mysql_query ('SET COLLATION_CONNECTION=utf8_general_ci;');
    mysql_client_encoding($dbcnx);
    
    $enteredTeam = $_POST['team'];
    $_SESSION['team'] = $enteredTeam;
    
    $qDesc = mysql_query("SELECT teaminfo FROM team WHERE '$enteredTeam' = title;");
    $description = mysql_result($qDesc, 0);
    
    $str = '{ "description": "'.$description.'",';
 
    // Query the squad of a team.
    $qTeamMembers = mysql_query("SELECT firstname,lastname FROM teamsquad INNER JOIN runner ON teamsquad.runnerpnr=runner.pnr WHERE '$enteredTeam' = teamtitle;");
    
    $str .= '"members": [';
    // Retrieve first and lastname of all members of the team.
    while($row = mysql_fetch_array($qTeamMembers)) {
        $firstname = $row["firstname"];
        $lastname = $row["lastname"];
        $str .= '"'.$firstname.' '.$lastname.'",';
    }
    $str = substr($str,0,strlen($str)-1);
    
    echo $str.']}';       
?>