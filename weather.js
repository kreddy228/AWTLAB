function fetchweather(){
    var city=document.getElementById("temp").value
    console.log(city);
    var request=new XMLHttpRequest();
    var apikey='58cbed7136723d3dcaccc9cf30b85912';
    var url='http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=58cbed7136723d3dcaccc9cf30b85912'
    request.open('GET',url,true);
    request.onload=function()
    {
        var result=JSON.parse(this.response);
        //console.log(result.main.temp);
        console.log(result);
    }
    request.send();
    console.log("Fetching");
  }