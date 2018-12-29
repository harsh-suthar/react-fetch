<?php 
    
 
    

 
    /* Create connection */
   $conn = mysqli_connect('localhost','000743543','19950515','000743543');
    $result_array = array();
    /* Check connection  */
    if ($conn->connect_error) {
         die("Connection to database failed: " . $conn->connect_error);
    }
    /* SQL query to get results from database */
    
    $sql = "SELECT id, first_name, last_name, email FROM users ";
    
    $result = $conn->query($sql);
    /* If there are results from database push to result array */
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            array_push($result_array, $row);
        }
    }
    /* send a JSON encded array to client */
    echo json_encode($result_array);
    
    $conn->close();