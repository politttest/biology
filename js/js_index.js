function enter(){
    var input = document.getElementById("one_input").value
    var final = document.getElementById("final")
    var RNK = document.getElementById("RNK").checked;
    var DNK = document.getElementById("DNK").checked;
    console.log("До выбора")
    if(input != ""){
        final.innerHTML = ""
        if(DNK){
            console.log("Успешный ввод ДНК")
            switch(input){
                /*Первый блок*/
                case "ААА": 
                    final.innerHTML += "Фен";
                    break;
                case "АГА": 
                    final.innerHTML += "Сер";
                    break;
                case "АТА": 
                    final.innerHTML += "Тир"; 
                    break;
                case "АЦА": 
                    final.innerHTML += "Цис"; 
                    break;
                case "ААГ": 
                    final.innerHTML += "Фен"; 
                    break;
                case "АГГ": 
                    final.innerHTML += "Сер"; 
                    break;
                case "АТГ": 
                    final.innerHTML += "Тир"; 
                    break;
                case "АЦГ": 
                    final.innerHTML += "Цис"; 
                    break;
                case "ААТ": 
                    final.innerHTML += "Лей"; 
                    break;
                case "АГТ": 
                    final.innerHTML += "Сер"; 
                    break;
                case "АТТ": 
                    final.innerHTML += "Стоп"; 
                    break;
                case "АЦТ": 
                    final.innerHTML += "Стоп"; 
                    break;
                case "ААЦ": 
                    final.innerHTML += "Лей"; 
                    break;
                case "АГЦ": 
                    final.innerHTML += "Сер"; 
                    break;
                case "АТЦ": 
                    final.innerHTML += "Стоп"; 
                    break;
                case "АЦЦ": 
                    final.innerHTML += "Три"; 
                    break;
                /*Второй блок*/
                case "ГАА": 
                    final.innerHTML += "Лей";
                    break;
                case "ГГА": 
                    final.innerHTML += "Про";
                    break;
                case "ГТА": 
                    final.innerHTML += "Гіс"; 
                    break;
                case "ГЦА": 
                    final.innerHTML += "Арг"; 
                    break;
                case "ГАГ": 
                    final.innerHTML += "Лей";
                    break;
                case "ГГГ": 
                    final.innerHTML += "Про";
                    break;
                case "ГТГ": 
                    final.innerHTML += "Гіс"; 
                    break;
                case "ГЦГ": 
                    final.innerHTML += "Арг"; 
                    break;
                case "ГАТ": 
                    final.innerHTML += "Лей";
                    break;
                case "ГГТ": 
                    final.innerHTML += "Про";
                    break;
                case "ГТТ": 
                    final.innerHTML += "Глн"; 
                    break;
                case "ГЦТ": 
                    final.innerHTML += "Арг"; 
                    break;
                case "ГАЦ": 
                    final.innerHTML += "Лей";
                    break;
                case "ГГЦ": 
                    final.innerHTML += "Про";
                    break;
                case "ГТЦ": 
                    final.innerHTML += "Глн"; 
                    break;
                case "ГЦЦ": 
                    final.innerHTML += "Арг"; 
                    break;
                /*Третий блок*/
                case "ТАА": 
                    final.innerHTML += "Іле";
                    break;
                case "ТГА": 
                    final.innerHTML += "Тре";
                    break;
                case "ТТА": 
                    final.innerHTML += "Асн"; 
                    break;
                case "ТТА": 
                    final.innerHTML += "Сер"; 
                    break;
                case "ТАГ": 
                    final.innerHTML += "Іле";
                    break;
                case "ТГГ": 
                    final.innerHTML += "Тре";
                    break;
                case "ТТГ": 
                    final.innerHTML += "Асн"; 
                    break;
                case "ТЦГ": 
                    final.innerHTML += "Сер"; 
                    break;
                case "ТАТ": 
                    final.innerHTML += "Іле";
                    break;
                case "ТГТ": 
                    final.innerHTML += "Тре";
                    break;
                case "ТТТ": 
                    final.innerHTML += "Ліз"; 
                    break;
                case "ТЦТ": 
                    final.innerHTML += "Арг"; 
                    break;
                case "ТАЦ": 
                    final.innerHTML += "Мет";
                    break;
                case "ТГЦ": 
                    final.innerHTML += "Тре";
                    break;
                case "ТТЦ": 
                    final.innerHTML += "Ліз"; 
                    break;
                case "ТЦЦ": 
                    final.innerHTML += "Арг"; 
                    break;
                /*Четвертый блок*/
                case "ЦАА": 
                    final.innerHTML += "Вал";
                    break;
                case "ЦГА": 
                    final.innerHTML += "Ала";
                    break;
                case "ЦТА": 
                    final.innerHTML += "Асп"; 
                    break;
                case "ЦЦА": 
                    final.innerHTML += "Глі"; 
                    break;
                case "ЦАГ": 
                    final.innerHTML += "Вал";
                    break;
                case "ЦГГ": 
                    final.innerHTML += "Ала";
                    break;
                case "ЦТГ": 
                    final.innerHTML += "Асп"; 
                    break;
                case "ЦЦГ": 
                    final.innerHTML += "Глі"; 
                    break;
                case "ЦАТ": 
                    final.innerHTML += "Вал";
                    break;
                case "ЦГТ": 
                    final.innerHTML += "Ала";
                    break;
                case "ЦТТ": 
                    final.innerHTML += "Глу"; 
                    break;
                case "ЦЦТ": 
                    final.innerHTML += "Глі"; 
                    break;
                case "ЦАЦ": 
                    final.innerHTML += "Вал";
                    break;
                case "ЦГЦ": 
                    final.innerHTML += "Ала";
                    break;
                case "ЦТЦ": 
                    final.innerHTML += "Глу"; 
                    break;
                case "ЦЦЦ": 
                    final.innerHTML += "Глі"; 
                    break;
                default:
                    alert("Такої комбінації не існує, можливо, вам треба обрати 'РНК', замість 'ДНК'.")
            }
        }
        else if(RNK){
            console.log("Успешный ввод РНК")
            switch(input){
                /*Первый блок*/
                case "УУУ": 
                    final.innerHTML += "Фен";
                    break;
                case "УЦУ": 
                    final.innerHTML += "Сер";
                    break;
                case "УАУ": 
                    final.innerHTML += "Тир"; 
                    break;
                case "УГУ": 
                    final.innerHTML += "Цис"; 
                    break;
                case "УУЦ": 
                    final.innerHTML += "Фен"; 
                    break;
                case "УЦЦ": 
                    final.innerHTML += "Сер"; 
                    break;
                case "УАЦ": 
                    final.innerHTML += "Тир"; 
                    break;
                case "УГЦ": 
                    final.innerHTML += "Цис"; 
                    break;
                case "УУА": 
                    final.innerHTML += "Лей"; 
                    break;
                case "УЦА": 
                    final.innerHTML += "Сер"; 
                    break;
                case "УАА": 
                    final.innerHTML += "Стоп"; 
                    break;
                case "УГА": 
                    final.innerHTML += "Стоп"; 
                    break;
                case "УУГ": 
                    final.innerHTML += "Лей"; 
                    break;
                case "УЦГ": 
                    final.innerHTML += "Сер"; 
                    break;
                case "УАГ": 
                    final.innerHTML += "Стоп"; 
                    break;
                case "УГГ": 
                    final.innerHTML += "Три"; 
                    break;
                /*Второй блок*/
                case "ЦУУ": 
                    final.innerHTML += "Лей";
                    break;
                case "ЦЦУ": 
                    final.innerHTML += "Про";
                    break;
                case "ЦАУ": 
                    final.innerHTML += "Гіс"; 
                    break;
                case "ЦГУ": 
                    final.innerHTML += "Арг"; 
                    break;
                case "ЦУЦ": 
                    final.innerHTML += "Лей";
                    break;
                case "ЦЦЦ": 
                    final.innerHTML += "Про";
                    break;
                case "ЦАЦ": 
                    final.innerHTML += "Гіс"; 
                    break;
                case "ЦГЦ": 
                    final.innerHTML += "Арг"; 
                    break;
                case "ЦУА": 
                    final.innerHTML += "Лей";
                    break;
                case "ЦЦА": 
                    final.innerHTML += "Про";
                    break;
                case "ЦАА": 
                    final.innerHTML += "Глн"; 
                    break;
                case "ЦГА": 
                    final.innerHTML += "Арг"; 
                    break;
                case "ЦУГ": 
                    final.innerHTML += "Лей";
                    break;
                case "ЦЦГ": 
                    final.innerHTML += "Про";
                    break;
                case "ЦАГ": 
                    final.innerHTML += "Глн"; 
                    break;
                case "ЦГГ": 
                    final.innerHTML += "Арг"; 
                    break;
                    /*Второй блок*/
                case "ЦУУ": 
                    final.innerHTML += "Лей";
                    break;
                case "ЦЦУ": 
                    final.innerHTML += "Про";
                    break;
                case "ЦАУ": 
                    final.innerHTML += "Гіс"; 
                    break;
                case "ЦГУ": 
                    final.innerHTML += "Арг"; 
                    break;
                case "ЦУЦ": 
                    final.innerHTML += "Лей";
                    break;
                case "ЦЦЦ": 
                    final.innerHTML += "Про";
                    break;
                case "ЦАЦ": 
                    final.innerHTML += "Гіс"; 
                    break;
                case "ЦГЦ": 
                    final.innerHTML += "Арг"; 
                    break;
                case "ЦУА": 
                    final.innerHTML += "Лей";
                    break;
                case "ЦЦА": 
                    final.innerHTML += "Про";
                    break;
                case "ЦАА": 
                    final.innerHTML += "Глн"; 
                    break;
                case "ЦГА": 
                    final.innerHTML += "Арг"; 
                    break;
                case "ЦУГ": 
                    final.innerHTML += "Лей";
                    break;
                case "ЦЦГ": 
                    final.innerHTML += "Про";
                    break;
                case "ЦАГ": 
                    final.innerHTML += "Глн"; 
                    break;
                case "ЦГГ": 
                    final.innerHTML += "Арг"; 
                    break;
                /*Третий блок*/
                case "АУУ": 
                    final.innerHTML += "Іле";
                    break;
                case "АЦУ": 
                    final.innerHTML += "Тре";
                    break;
                case "ААУ": 
                    final.innerHTML += "Асн"; 
                    break;
                case "АГУ": 
                    final.innerHTML += "Сер"; 
                    break;
                case "АУЦ": 
                    final.innerHTML += "Іле";
                    break;
                case "АЦЦ": 
                    final.innerHTML += "Тре";
                    break;
                case "ААЦ": 
                    final.innerHTML += "Асн"; 
                    break;
                case "АГЦ": 
                    final.innerHTML += "Сер"; 
                    break;
                case "АУА": 
                    final.innerHTML += "Іле";
                    break;
                case "АЦА": 
                    final.innerHTML += "Тре";
                    break;
                case "ААА": 
                    final.innerHTML += "Ліз"; 
                    break;
                case "АГА": 
                    final.innerHTML += "Арг"; 
                    break;
                case "АУГ": 
                    final.innerHTML += "Мет";
                    break;
                case "АЦГ": 
                    final.innerHTML += "Тре";
                    break;
                case "ААГ": 
                    final.innerHTML += "Ліз"; 
                    break;
                case "АГГ": 
                    final.innerHTML += "Арг"; 
                    break;
                /*Четвертый блок*/
                case "ГУУ": 
                    final.innerHTML += "Вал";
                    break;
                case "ГЦУ": 
                    final.innerHTML += "Ала";
                    break;
                case "ГАУ": 
                    final.innerHTML += "Асп"; 
                    break;
                case "ГГУ": 
                    final.innerHTML += "Глі"; 
                    break;
                case "ГУЦ": 
                    final.innerHTML += "Вал";
                    break;
                case "ГЦЦ": 
                    final.innerHTML += "Ала";
                    break;
                case "ГАЦ": 
                    final.innerHTML += "Асп"; 
                    break;
                case "ГГЦ": 
                    final.innerHTML += "Глі"; 
                    break;
                case "ГУА": 
                    final.innerHTML += "Вал";
                    break;
                case "ГЦА": 
                    final.innerHTML += "Ала";
                    break;
                case "ГАА": 
                    final.innerHTML += "Глу"; 
                    break;
                case "ГГА": 
                    final.innerHTML += "Глі"; 
                    break;
                case "ГУГ": 
                    final.innerHTML += "Вал";
                    break;
                case "ГЦГ": 
                    final.innerHTML += "Ала";
                    break;
                case "ГАГ": 
                    final.innerHTML += "Глу"; 
                    break;
                case "ГГГ": 
                    final.innerHTML += "Глі"; 
                    break;
                default:
                    alert("Такої комбінації не існує, можливо, вам треба обрати 'ДНК', замість 'РНК'.")
            }
        }
        else{
            alert("Оберіть таблицю. 'РНК' чи 'ДНК'")
        }
        
    }
    else{
        console.log("После выбора2")
        if(input == ""){
            alert("Уведіть")
        }
    }
}

function input_DNK_AAA(){
    var x = document.getElementById("snackbar_DNK_AAA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_AUA(){
    var x = document.getElementById("snackbar_DNK_AUA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_ANA(){
    var x = document.getElementById("snackbar_DNK_ANA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_AWA(){
    var x = document.getElementById("snackbar_DNK_AWA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}


function input_DNK_AAU(){
    var x = document.getElementById("snackbar_DNK_AAU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_AUU(){
    var x = document.getElementById("snackbar_DNK_AUU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_ANU(){
    var x = document.getElementById("snackbar_DNK_ANU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_AWU(){
    var x = document.getElementById("snackbar_DNK_AWU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}


function input_DNK_AAN(){
    var x = document.getElementById("snackbar_DNK_AAN");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_AUN(){
    var x = document.getElementById("snackbar_DNK_AUN");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_ANN(){
    var x = document.getElementById("snackbar_DNK_ANN");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_AWN(){
    var x = document.getElementById("snackbar_DNK_AWN");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}


function input_DNK_AAW(){
    var x = document.getElementById("snackbar_DNK_AAW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_AUW(){
    var x = document.getElementById("snackbar_DNK_AUW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_ANW(){
    var x = document.getElementById("snackbar_DNK_ANW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_AWW(){
    var x = document.getElementById("snackbar_DNK_AWW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}









function input_DNK_UAA(){
    var x = document.getElementById("snackbar_DNK_UAA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_UUA(){
    var x = document.getElementById("snackbar_DNK_UUA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_UNA(){
    var x = document.getElementById("snackbar_DNK_UNA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_UWA(){
    var x = document.getElementById("snackbar_DNK_UWA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}


function input_DNK_UAU(){
    var x = document.getElementById("snackbar_DNK_UAU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_UUU(){
    var x = document.getElementById("snackbar_DNK_UUU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_UNU(){
    var x = document.getElementById("snackbar_DNK_UNU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_UWU(){
    var x = document.getElementById("snackbar_DNK_UWU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}


function input_DNK_UAN(){
    var x = document.getElementById("snackbar_DNK_UAN");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_UUN(){
    var x = document.getElementById("snackbar_DNK_UUN");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_UNN(){
    var x = document.getElementById("snackbar_DNK_UNN");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_UWN(){
    var x = document.getElementById("snackbar_DNK_UWN");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}


function input_DNK_UAW(){
    var x = document.getElementById("snackbar_DNK_UAW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_UUW(){
    var x = document.getElementById("snackbar_DNK_UUW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_UNW(){
    var x = document.getElementById("snackbar_DNK_UNW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_UWW(){
    var x = document.getElementById("snackbar_DNK_UWW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}









function input_DNK_NAA(){
    var x = document.getElementById("snackbar_DNK_NAA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_NUA(){
    var x = document.getElementById("snackbar_DNK_NUA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_NNA(){
    var x = document.getElementById("snackbar_DNK_NNA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_NWA(){
    var x = document.getElementById("snackbar_DNK_NWA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}


function input_DNK_NAU(){
    var x = document.getElementById("snackbar_DNK_NAU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_NUU(){
    var x = document.getElementById("snackbar_DNK_NUU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_NNU(){
    var x = document.getElementById("snackbar_DNK_NNU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_NWU(){
    var x = document.getElementById("snackbar_DNK_NWU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}


function input_DNK_NAN(){
    var x = document.getElementById("snackbar_DNK_NAN");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_NUN(){
    var x = document.getElementById("snackbar_DNK_NUN");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_NNN(){
    var x = document.getElementById("snackbar_DNK_NNN");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_NWN(){
    var x = document.getElementById("snackbar_DNK_NWN");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}


function input_DNK_NAW(){
    var x = document.getElementById("snackbar_DNK_NAW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_NUW(){
    var x = document.getElementById("snackbar_DNK_NUW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_NNW(){
    var x = document.getElementById("snackbar_DNK_NNW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_NWW(){
    var x = document.getElementById("snackbar_DNK_NWW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}









function input_DNK_WAA(){
    var x = document.getElementById("snackbar_DNK_WAA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_WUA(){
    var x = document.getElementById("snackbar_DNK_WUA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_WNA(){
    var x = document.getElementById("snackbar_DNK_WNA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_WWA(){
    var x = document.getElementById("snackbar_DNK_WWA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}


function input_DNK_WAU(){
    var x = document.getElementById("snackbar_DNK_UAU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_WUU(){
    var x = document.getElementById("snackbar_DNK_WUU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_WNU(){
    var x = document.getElementById("snackbar_DNK_WNU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_WWU(){
    var x = document.getElementById("snackbar_DNK_WWU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}


function input_DNK_WAN(){
    var x = document.getElementById("snackbar_DNK_WAN");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_WUN(){
    var x = document.getElementById("snackbar_DNK_WUN");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_WNN(){
    var x = document.getElementById("snackbar_DNK_WNN");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_WWN(){
    var x = document.getElementById("snackbar_DNK_WWN");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}


function input_DNK_WAW(){
    var x = document.getElementById("snackbar_DNK_WAW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_WUW(){
    var x = document.getElementById("snackbar_DNK_WUW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_WNW(){
    var x = document.getElementById("snackbar_DNK_WNW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_DNK_WWW(){
    var x = document.getElementById("snackbar_DNK_WWW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
































function input_RNK_EEE(){
    var x = document.getElementById("snackbar_RNK_EEE");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_EWE(){
    var x = document.getElementById("snackbar_RNK_EWE");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_EAE(){
    var x = document.getElementById("snackbar_RNK_EAE");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_EUE(){
    var x = document.getElementById("snackbar_RNK_EUE");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}



function input_RNK_EEW(){
    var x = document.getElementById("snackbar_RNK_EEW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_EWW(){
    var x = document.getElementById("snackbar_RNK_EWW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_EAW(){
    var x = document.getElementById("snackbar_RNK_EAW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_EUW(){
    var x = document.getElementById("snackbar_RNK_EUW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}



function input_RNK_EEA(){
    var x = document.getElementById("snackbar_RNK_EEA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_EWA(){
    var x = document.getElementById("snackbar_RNK_EWA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_EAA(){
    var x = document.getElementById("snackbar_RNK_EAA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_EUA(){
    var x = document.getElementById("snackbar_RNK_EUA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}



function input_RNK_EEU(){
    var x = document.getElementById("snackbar_RNK_EEU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_EWU(){
    var x = document.getElementById("snackbar_RNK_EWU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_EAU(){
    var x = document.getElementById("snackbar_RNK_EAU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_EUU(){
    var x = document.getElementById("snackbar_RNK_EUU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}













function input_RNK_WEE(){
    var x = document.getElementById("snackbar_RNK_WEE");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_WWE(){
    var x = document.getElementById("snackbar_RNK_WWE");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_WAE(){
    var x = document.getElementById("snackbar_RNK_WAE");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_WUE(){
    var x = document.getElementById("snackbar_RNK_WUE");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}



function input_RNK_WEW(){
    var x = document.getElementById("snackbar_RNK_WEW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_WWW(){
    var x = document.getElementById("snackbar_RNK_WWW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_WAW(){
    var x = document.getElementById("snackbar_RNK_WAW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_WUW(){
    var x = document.getElementById("snackbar_RNK_WUW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}



function input_RNK_WEA(){
    var x = document.getElementById("snackbar_RNK_WEA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_WWA(){
    var x = document.getElementById("snackbar_RNK_WWA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_WAA(){
    var x = document.getElementById("snackbar_RNK_WAA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_WUA(){
    var x = document.getElementById("snackbar_RNK_WUA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}



function input_RNK_WEU(){
    var x = document.getElementById("snackbar_RNK_WEU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_WWU(){
    var x = document.getElementById("snackbar_RNK_WWU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_WAU(){
    var x = document.getElementById("snackbar_RNK_WAU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_WUU(){
    var x = document.getElementById("snackbar_RNK_WUU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}












function input_RNK_AEE(){
    var x = document.getElementById("snackbar_RNK_AEE");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_AWE(){
    var x = document.getElementById("snackbar_RNK_AWE");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_AAE(){
    var x = document.getElementById("snackbar_RNK_AAE");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_AUE(){
    var x = document.getElementById("snackbar_RNK_AUE");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}



function input_RNK_AEW(){
    var x = document.getElementById("snackbar_RNK_AEW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_AWW(){
    var x = document.getElementById("snackbar_RNK_AWW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_AAW(){
    var x = document.getElementById("snackbar_RNK_AAW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_AUW(){
    var x = document.getElementById("snackbar_RNK_AUW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}



function input_RNK_AEA(){
    var x = document.getElementById("snackbar_RNK_AEA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_AWA(){
    var x = document.getElementById("snackbar_RNK_AWA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_AAA(){
    var x = document.getElementById("snackbar_RNK_AAA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_AUA(){
    var x = document.getElementById("snackbar_RNK_AUA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}



function input_RNK_AEU(){
    var x = document.getElementById("snackbar_RNK_AEU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_AWU(){
    var x = document.getElementById("snackbar_RNK_AWU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_AAU(){
    var x = document.getElementById("snackbar_RNK_AAU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_AUU(){
    var x = document.getElementById("snackbar_RNK_AUU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}











function input_RNK_UEE(){
    var x = document.getElementById("snackbar_RNK_UEE");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_UWE(){
    var x = document.getElementById("snackbar_RNK_UWE");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_UAE(){
    var x = document.getElementById("snackbar_RNK_UAE");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_UUE(){
    var x = document.getElementById("snackbar_RNK_UUE");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}



function input_RNK_UEW(){
    var x = document.getElementById("snackbar_RNK_UEW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_UWW(){
    var x = document.getElementById("snackbar_RNK_UWW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_UAW(){
    var x = document.getElementById("snackbar_RNK_UAW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_UUW(){
    var x = document.getElementById("snackbar_RNK_UUW");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}



function input_RNK_UEA(){
    var x = document.getElementById("snackbar_RNK_UEA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_UWA(){
    var x = document.getElementById("snackbar_RNK_UWA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_UAA(){
    var x = document.getElementById("snackbar_RNK_UAA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_UUA(){
    var x = document.getElementById("snackbar_RNK_UUA");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}



function input_RNK_UEU(){
    var x = document.getElementById("snackbar_RNK_UEU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_UWU(){
    var x = document.getElementById("snackbar_RNK_UWU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_UAU(){
    var x = document.getElementById("snackbar_RNK_UAU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}
function input_RNK_UUU(){
    var x = document.getElementById("snackbar_RNK_UUU");
    x.className = "show";
    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 3000);
}