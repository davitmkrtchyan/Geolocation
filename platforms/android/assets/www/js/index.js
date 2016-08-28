var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    latlon = new google.maps.LatLng(lat, lon);
    function ranFunc(){
            ran = Math.floor((Math.random() * 1000) + 1);
            ran = ran / 1000000;
    }
    ranFunc();
    var myLatlng1 = new google.maps.LatLng(lat+(ran*4), lon+(ran*3));
    ranFunc();
    var myLatlng2 = new google.maps.LatLng(lat-ran, lon-ran);
    ranFunc();
    var myLatlng3 = new google.maps.LatLng(lat+(ran*2), lon+ran);
    ranFunc();
    var myLatlng4 = new google.maps.LatLng(lat+ran, lon+ran);
    ranFunc();
    var myLatlng5 = new google.maps.LatLng(lat+ran, lon+(ran*2));
    ranFunc();
    var myLatlng6 = new google.maps.LatLng(lat+(ran*3), lon+ran);

    mapholder = document.getElementById('mapholder')
    mapholder.style.height = '380px';
    mapholder.style.width = '100%';

    var myOptions = {
    center:latlon,zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    }
    
    var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
    var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
    var marker1 = new google.maps.Marker({position:myLatlng1,map:map,title:"You are here!"});
    var marker2 = new google.maps.Marker({position:myLatlng2,map:map,title:"You are here!"});
    var marker3 = new google.maps.Marker({position:myLatlng3,map:map,title:"You are here!"});
    var marker4 = new google.maps.Marker({position:myLatlng4,map:map,title:"You are here!"});
    var marker5 = new google.maps.Marker({position:myLatlng5,map:map,title:"You are here!"});
    var marker6 = new google.maps.Marker({position:myLatlng6,map:map,title:"You are here!"});
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

$(document).ready(function(){
    var settings = $("#settings");
    var status = 0;
    
    settings.click(function(){
         if(status == 0){
            $("#refresh").fadeIn("fast").animate({"bottom":"125px"}, 200, "linear");
            status++;
         }else{
            $("#refresh").animate({"bottom":"20px"}, 200, "linear").fadeOut("fast");
            status--;
         }
        
        $(this).toggleClass("down");
    });

$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

});

