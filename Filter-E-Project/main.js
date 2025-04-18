var asiadiv = $('.asia')
var euro = $('.europe')
function showdivs()
{
    var search = $('.inp').val()

if(search.toLowerCase() == "asia")
{
    asiadiv.show();
    euro.hide();
    $('.errorpara').hide()
    
}
else if(search.toLowerCase() == "e")
    {
    euro.show();
    asiadiv.hide();
    $('.errorpara').hide()
}
else if(search.toLowerCase() == "europe")
{
  euro.show();
    asiadiv.hide();
    $('.errorpara').hide()
}
else if(search.toLowerCase() == '')
{
    euro.show()
    asiadiv.show();
    $('.errorpara').hide()
}
else
{
    $('.errorpara').show()
    asiadiv.hide()
    euro.hide()

}
}

//Fetch Location of User without API
 navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude
    var lon = position.coords.longitude
     
    console.log(lat, lon)
    // Fetch Weather data
    if((lat >= 10 && lat <= 81) && (lon >= 26 && lon <= 169))
    {
        //IF location is in asia show asia div
        if((lat >= 35 && lat <= 71) && (lon >= 26 && lon <= 65))
        {
            euro.show();
            asiadiv.hide();
           alert("Muskuraaye Ap Asia mein hain");
        }
        else
        {
            asiadiv.show();
        euro.hide();
        alert("Muskuraaye Ap Asia mein hain");
        }
    }
    else
    {
        //IF location is in Europe show Europe div
        euro.show();
        asiadiv.hide();
        console.log("Muskuraaye Ap Europe mein hain");
    }
 })
