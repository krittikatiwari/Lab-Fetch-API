//Complete the Weather API Backend part using openweathermap api

const main = document.getElementById("main");

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.
fetch(`https://api.openweathermap.org/data/2.5/weather?q=jalandhar&appid=25d51990a685273ecde84953d30cd6ad`).then((res)=>
  res.json()
).then((data)=>{
  let article = data;

    let arrange= document.createElement('div');
    let add=document.createElement('div');
    add.innerText=article.name;
    add.setAttribute('class','name');
    let city = document.createElement('div');
    city.innerText=article.name +','+ article.sys.country;
    city.setAttribute('class','set');
    let date=document.createElement('div');
    date.innerText= new Date();
    let temp=document.createElement('div');
    temp.innerText=Math.floor(article.main.temp-273)+"°C";
    temp.setAttribute('class','temp');
    let status=document.createElement('div');
    status.innerText=article.weather[0].main;
    status.setAttribute('class','state');
    let max_min=document.createElement('div');
    max_min.innerText=Math.floor(article.main.temp_max-273)+"°C"+ '/' +Math.floor(article.main.temp_min-273)+"°C"
    max_min.setAttribute('class','last')
    console.log(article);

  arrange.append(add);
    arrange.append(city);
    arrange.append(date);
    arrange.append(temp);
    arrange.append(status);
    arrange.append(max_min);
    main.append(arrange);
   

})

