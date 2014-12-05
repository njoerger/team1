<?php
    include "assets/util/functions.php";
    print_header("Orderables");
?>
    <script src = "assets/js/validate_buy.js"></script>
    <div id="tableFormat">
        <form  id = "orderable_form"
                method = "post"
                action = "order.php"
                onsubmit = "init_cart();">
        <a href="index.php" class="back"><p>Back Home</p></a>
        <input type = "submit" class = "forward" value = "Cart">
            
        <table id = "all_orderables"></table>
        <script src = "assets/js/populate.js"></script>
        </form>
    </div>
   <?php print_footer() ?>
