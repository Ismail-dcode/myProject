
let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "shaikh",
    "email": "ismail@shaikh.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "ismail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}



submitBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("Clicked!")
    Resultcont.innerHTML = `<img width="37" src="loading1.svg" alt="">`
    let key = "ema_live_SJdGjS6RCSSNQS93amqvNmApxZXC3An3kzEyfOln"
    let email = document.getElementById("username").value 
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key]!== " "){ 
            str = str + `<div>${key}: ${result[key]}</div>`
        }
    }
    Resultcont.innerHTML = str
    console.log(str);
   
})
