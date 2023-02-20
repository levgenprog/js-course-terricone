//Находим номер по айдишке
let number = document.getElementById('phone');

//Цепляем слушатель событий
number.addEventListener('click', checkNumber);
number.addEventListener('input', checkNumber);

function checkNumber(){
    //Очищаем значения от лишних символов (НЕ ЦИФРЫ)
    const rawNumber = number.value.replace(/\D/g, '');
    console.log(rawNumber);
    //+7 (777) 777-7777 

    //Возвращаемая строка
    let formatedNumber = '+7 (7';

    //Проверяем на количество введенных символов
    //Начинаем отсчет с первых 2-х 7-ок, игнорируя не цифры
    if(rawNumber.length >= 1){
        formatedNumber += `${rawNumber.slice(2, 4)}`;
    }
    if(rawNumber.length > 4){
        formatedNumber += `) ${rawNumber.slice(4, 7)}`;
    }
    if(rawNumber > 7){
        formatedNumber += `-${rawNumber.slice(7, 11)}`;
    }

    //Изменяем значение у ввода
    number.value = formatedNumber;
}



// Ищем в документе кнопку по адишнику. Привязываем к ней событие клика. Вызываем функцию
// document.getElementById('searcs-btn').addEventListener('click', searchWord());
function searchWord()
{
    let searchWord = document.getElementById('search').value;
    let text = document.getElementById('txt').innerText;
    let pattern = new RegExp(searchWord, 'gi');

    let new_text = text.replace(pattern, 
        `<span style="background-color: yellow;">${searchWord}</span>`
    );

    document.getElementById('txt').innerHTML = new_text;
}













