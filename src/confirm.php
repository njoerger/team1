<?php
    include "assets/util/functions.php";
    print_header("Confirmation");
?>
    <div id="tableFormat">
        <table>
            <tr>
                <col width="50%" />
                <col width="15%" />
                <col width="12%" />
                <th>Item in Cart</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
            <tr>
                <td>Item #1</td>
                <td>Price #1</td>
                <td>Quantity</td>
            </tr>
            <tr>
                <td>Item #2</td>
                <td>Price #2</td>
                <td>Quantity</td>
            </tr>
            <tr>
                <td>Item #3</td>
                <td>Price #3</td>
                <td>Quantity</td>
            </tr>
            <tr>
                <td>Item #4</td>
                <td>Price #4</td>
                <td>Quantity</td>
            </tr>
        </table>
        <a href="payment.php" class="delete"><p>Back</p></a>
        <a href="orderNum.php" class="add"><p>Confirm</p></a>
    </div>
   <?php print_footer() ?>
 