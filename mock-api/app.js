function myFunction() {
    document.getElementById('output').innerHTML = "Text";
    setTimeout(function(){         
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(json => {
            //alert(json.body);
            document.getElementById('output').innerHTML = json.body;
            //console.log(json);
        });
    },1750);
}