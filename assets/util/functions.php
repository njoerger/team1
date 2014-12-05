<?php
    
    //Header generator
    function print_header($title){
        echo 
            "<!DOCTYPE html>\n
                <html lang='en' xmlns='http://www.w3.org/1999/xhtml'>\n
                <head>\n
                    <meta charset='utf-8' />\n
                    <title>Project Feed - $title</title>\n
                    <link href='assets/css/stylesheet.css' rel='stylesheet' type='text/css'>
                </head>\n
                <body>\n
                    <div id='topF'>\n
                        <div id='topL'>\n
                            <img src='assets/images/rit.png' alt='RIT logo' />\n
                            <img src ='assets/images/cart_icon.png' alt='Your Cart'/>\n 
                        </div>\n
                        
                        
                    </div>\n";
    }
    
    //Footer generator
    function print_footer(){
        echo
            "       <div id='bottom'>\n
                        <p>Copyright</p>\n
                    </div>\n
                </body>\n
                </html>\n";
    }

    function login_validation(){
    
    }

    function buy_validation(){}
?>