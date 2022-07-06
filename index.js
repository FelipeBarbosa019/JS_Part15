const btn = document.querySelector("#cotar")

btn.addEventListener("click", function(){
    document.getElementById("cotar").style.cursor = "wait";

    //Date
    const dateI = document.querySelector("#dateIni").value.replace('-','')
    const dateE = document.querySelector("#dateEnd").value.replace('-','')
    
    const dateInit = dateI.replace('-','')
    const dateEnd = dateE.replace('-','')

    console.log(dateInit)
    console.log(dateEnd)

    //Coin
    const coin = document.querySelector ("#list").value
    console.log(coin)

    //url
    let url = `https://economia.awesomeapi.com.br/json/daily/${coin}/?start_date=${dateInit}&end_date=${dateEnd}`
    
    fetch(`${url}`)
    .then((resposta) => resposta.json()) 
    .then(data => {
        console.log(data)
        document.querySelector("#titleTable").innerHTML = coin
        document.querySelector("#lastQuote").innerHTML = data[0].ask
        document.querySelector("#date").innerHTML = data[0].create_date
        document.querySelector("#minMax").innerHTML = `${data[0].low} / ${data[0].high}`
        document.querySelector("#closure").innerHTML = data[0].bid
        document.getElementById("cotar").style.cursor = "default";
    });

})




