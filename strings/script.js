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
function searchWord(attr)
{
    let text = document.getElementById('txt').innerText;
    
    let new_text = ''
    if(attr === 0){
        let searchWord = document.getElementById('search').value;
        let pattern = new RegExp(searchWord, 'gi');
        new_text = text.replace(pattern, 
        `<span style="background-color: yellow;">${searchWord}</span>`);
    }else if(attr === 1){
        let searchWord = document.getElementById('old').value;
        let pattern = new RegExp(searchWord, 'gi');
        let newWord = document.getElementById('new').value;
        new_text = text.replace(pattern, newWord);
    }

    document.getElementById('txt').innerHTML = new_text;
}


//вызываем функцию когда пользователь перестал нажимать клавишу
document.getElementById('searchInput').addEventListener('keyup', event => {
   findLinks(event.target.value);
});

function findLinks(searchVal){
    searchVal = searchVal.toLowerCase();

    if (searchVal.length === 0){
        return;
    }
    //Ищем все ссылки внутри классе текст
    let links = document.querySelectorAll('.text a');
 
    let results = [];

    //Проходимся по элементам и добавляем их в результат
    links.forEach(link => {
        if(link.innerText.includes(searchVal)){
            results.push(`<li><a href="#">${highlight(link.innerText, searchVal) }</a></li>`);
        }
    })

    drawLinks(results);
}
// worldisthebestplacetolive   dis == 4
function highlight(linkTxt, word){
    // Находим индекс подстроки
    let index = linkTxt.toLowerCase().indexOf(word);

    let result = [
        //Вставляем строку до индекса 
        linkTxt.slice(0, index),
        //Вставляем подстроку в массив и даем ей класс
        '<span class="highligh">',
        linkTxt.slice(index, index + word.length),
        '</span>',
        //Вставляем остаток первоначальной строки
        linkTxt.slice(index + word.length)
    ].join('')// Обращает массив в строку, с пустым разделителем
    return result;
}

function drawLinks(toDraw) {
    let container = document.getElementById('searchResult');
    
    //Делаем строку из HTML тегов, куда вставляем все элементы массива
    let result = `<ul>${toDraw}</ul>`
    result += `<div class="foud-elements">Найдено ${toDraw.length} элементов</div>`
    
    container.innerHTML = result;
    if(toDraw.length > 0){
        container.style.display = 'block';
    }else{
        container.style.display = 'none';
    }
}


let dog = {
    spice: "Toyterier",
    name: "Kesha",
    age: 3
}

dog['color'] = "yellow";
dog.name = 'Dog'

console.log('house' in dog);













