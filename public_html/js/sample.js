/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var map;
var tokyo = new google.maps.LatLng(35.689614,139.691585);
var osaka = new google.maps.LatLng(34.686272,135.519649);

function initialize() {
    var opts = {
        zoom: 11,
        center: tokyo,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), opts);
    
    google.maps.event.addListener(map, 'drag', dispLating);
    
    var iw = new google.maps.InfoWindow({
        content: '自宅',
        position: tokyo
    });
    iw.open(map);
}

function setTokyo(){
    //map.setCenter(tokyo);
    map.panTo(new google.maps.LatLng(35.689614,139.691585));
}

function toShimbashi() {
  map.panTo(new google.maps.LatLng(35.666397,139.758153));
}

function setOsaka(){
    //map.setCenter(osaka);
    map.panTo(new google.maps.LatLng(34.686272,135.519649));
}

function toRightTop() {
  map.panBy(250, -150);
}

function toLeftBottom() {
  map.panBy(-1000, 600);
}

function setMarker1(){
    var m_latlng1 = new google.maps.LatLng(35.632605,139.88132);
    var marker1 = new google.maps.Marker({
        position: m_latlng1,
        map: map
    });
}

function setMarker2(){
    var m_latlng2 = new google.maps.LatLng(35.625663,139.884238);
    var marker2 = new google.maps.Marker({
        position: m_latlng2,
        map: map
    });
}

function dispLating(){
    var latlng = map.getCenter();
    var str = "[CENTER]=[" + latlng.lat() + "," + latlng.lng() + "]<br />";
    
    var latlngBounds = map.getBounds();
    var swLatlng = latlngBounds.getSouthWest();
    str = str + "[SouthWest]=[" + swLatlng.lat() + "," + swLatlng.lng() + "]<br />";
    
    var neLatlng = latlngBounds.getNorthEast();
    str = str + "[NorthEast]=[" + neLatlng.lat() + "," + neLatlng.lng() + "]<br />";
    
    document.getElementById("latlng").innerHTML = str;
}