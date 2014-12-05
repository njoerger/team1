<?php
    include "assets/util/functions.php";
    print_header("Login for Payment");
?>
    <div id="loginFormat">
        
        <form id = "login_submit"
              method = "post"
              action = "orderNum.php"
              >
            
        <a href="cart.php" class="backC"><p>Back to Cart</p></a>
        <div id="forms">
            <span>RIT Username:</span>
            <input type="text" id="username" name="username" max-length="7" size="20" required="required" />
            <br/>
            <span>Password:</span>
            <input type="password" id="pwd" name="pwd" required="required" />
            <br/>
            <input type = "hidden" is = "hid">
        </div>
        
        <input type = "submit" class="proceed" value = "Proceed">
    </div></form>
    <?php print_footer() ?>
