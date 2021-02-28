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
