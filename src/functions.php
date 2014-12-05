<?php
    
    //Header generator
    function print_header($title){
        echo 
            "<!DOCTYPE html>\n
                <html lang='en' xmlns='http://www.w3.org/1999/xhtml'>\n
                <head>\n
                    <meta charset='utf-8' />\n
                    <title>Project Feed - $title</title>\n
                        <!-- Phone -->
    				<link href="stylesheetSP.css" rel="stylesheet" type="text/css" media="only screen and (max-width:500px)">
    				<!-- Tablet -->
    				<link href="stylesheetTB.css" rel="stylesheet" type="text/css" media="only screen and (min-width:501px) and (max-width:768px)">
    				<!-- Desktop -->
   					<link href="stylesheet.css" rel="stylesheet" type="text/css" media="only screen and (min-width:769px)">

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