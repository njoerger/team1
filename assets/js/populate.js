function populate() {
    
    var xmlhttp, xmlDoc, menu, menu_category, menu_item;
    var type, sizes, prices, unit;
    
    if (window.XMLHttpRequest) { xmlhttp = new XMLHttpRequest(); }
    else { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }
    
    //Retrieve XML doc
    xmlhttp.open("GET", "assets/util/orderables.xml", false); 
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML; 
    
    // Get the root tag from the XML doc.
    menu = xmlDoc.children[0]; 
    
    
    
    //THIS GETS A BIT ROUGH. Main parsing below.
    //FIRST TIME. DONT HURT ME! THIS GOES DEEEEEP
    //First we get the first direct child of the root
    for( var i = 0; i < menu.children.length; i++) { 
        var menu_category = menu.children[i];
        
        
        window.document.getElementById("all_orderables").innerHTML += "<div class = 'row'>\
                                                                            <div class = 'name'>" + menu_category.tagName + "</div>\
                                                                            <div class = 'price'>Price Per Unit</div>\
                                                                            <div class = 'quantity'>Quantity</div>\
                                                                        </div>";
        
        //If we are talking about drinks
        if (menu_category.tagName == "DRINKS"){ 
            
            //Get each individual drink...
            for (var j = 0; j < menu_category.children.length; j++){
                
                menu_item = menu_category.children[j]; //Each drink root object
                //console.log(menu_item);
                
                type = menu_item.getElementsByTagName("TYPE")[0].childNodes[0]; //Drink name
                sizes = menu_item.getElementsByTagName("SIZE"); //List of sizes
                prices = menu_item.getElementsByTagName("PRICE"); //List of prices
                
                //Add to the HTML...formmatted properly
                window.document.getElementById("all_orderables").innerHTML += "<div class = 'row'>\
                                                         <div class = 'header_data'><strong>" + type.data + " </strong></div></div>";
                
                for (var k = 0; k < sizes.length; k++){
                    window.document.getElementById("all_orderables").innerHTML += "<div class = 'row'>\
                                                    <div class = 'name'>" +  sizes[k].innerHTML + "</div>\
                                                    <div class = 'price'>" + prices[k].innerHTML + "</div>\
                                                    <div class = 'quantity'>\
														<input type='number' name='quantity' id='quantity' style = 'width:60px' max = "100" min ="0" step="1" required pattern="/\d+/">\
                                                    </div></div>";
                   
                }
                
            }
        }
        
        //If we talkin' bout candy. WIP.
        else if (menu_category.tagName == "CANDIES"){
            
            for (var j = 0; j < menu_category.children.length; j++){
                
                menu_item = menu_category.children[j]; //Each candy root object
                //console.log(menu_item);
                
                type = menu_item.getElementsByTagName("TYPE")[0].childNodes[0]; //type
                price = menu_item.getElementsByTagName("PRICE")[0].childNodes[0]; //price
                unit = menu_item.getElementsByTagName("UNIT")[0].childNodes[0]; //unit
                
                //If you are wondering, in this case, the formatting works much better if you have two innerhtml additions
                window.document.getElementById("all_orderables").innerHTML += "<div class = 'row'>\
                                                            <div class = 'header_data'><strong>" + type.data + "</strong></div></div>";
                
                window.document.getElementById("all_orderables").innerHTML += "<div class = 'row'>\
                                                        <div class 'price'>" + price.data + "</div>\
                                                         <div class 'quantity'>\
														<input type='number' name='quantity' id='quantity' style = 'width:60px' max = "100" min ="0" step="1" required pattern="/\d+/">\
                                                                per ." + unit.data + "\
                                                         </div></div>";
            }
        } 
        
        else if (menu_category.tagName == "SANDWICHES"){
            for (var j = 0; j < menu_category.children.length; j++){
                
                menu_item = menu_category.children[j]; //Each sandwich root object
                //console.log(menu_item);
                
                type = menu_item.getElementsByTagName("TYPE")[0].childNodes[0]; //type
                price = menu_item.getElementsByTagName("PRICE")[0].childNodes[0]; //price
                
                
                window.document.getElementById("all_orderables").innerHTML += "<div = 'row'>\
                                                            <div class = 'header_data'><strong>" + type.data + "</strong></div></div>";
                
                window.document.getElementById("all_orderables").innerHTML += "<div class = 'row'>\
                                                            <div class = 'price'>" + price.data + "</div>\
                                                            <div class = 'quantity'>\
																<input type='number' name='quantity' id='quantity' style = 'width:60px' max = "100" min ="0" step="1" required pattern="/\d+/">\
															</div></div>";
            }
        }   
    }
    
}

populate();


    
