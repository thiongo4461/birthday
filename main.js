console.log("hello")
function generateAkan(){
    let gender= document.getElementById("gender").value;
    let birthday = document.getElementById("birthday").value;
    
    const maleDays = [  {key: 0, value: "kwasi"},
                        {key: 1, value: "kwadwo"},
                        {key: 2, value: "kwabena"},
                        {key: 3, value: "kwaku"},
                        {key: 4, value: "yaw"},
                        {key: 5, value: "kofi"},
                        {key: 6, value: "kawme"}
                    ]
    const femaleDays = [  {key: 0, value: "akosua"},
                    {key: 1, value: "adwoa"},
                    {key: 2, value: "abenaa"},
                    {key: 3, value: "akua"},
                    {key: 4, value: "yaa"},
                    {key: 5, value: "afua"},
                    {key: 6, value: "ama"}
                ]
    var date = new Date(birthday);
    var day = date.getDay()

    console.log(gender,maleDays[day]["value"])

    var akan = document.getElementById("akanNames");

    if (gender=='male'){
        akan.textContent = `Your Akan name would be ${maleDays[day]["value"]}`;
        
    }
    else{
        akan.textContent = `Your Akan name would be ${femaleDays[day]["value"]}`;

    }


}