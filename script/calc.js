/* Базовая цена ремонта. От нее идут все расчеты,
можно корректировать, и изменится везде */

const basicPaintingPrice = 10000;  // Базовая цена покраски
const basicRepairPrice = 1500;  // Базовая цена ремонта

/*  Массив из деталей и их параметров для расчета и выдачи результата
Структура: 
0 - кнопка на схеме 
1 - строка в списке 
2 - цена в списке
3 - галочка на схеме (рисунок)
4 - чекбокс "добавить ремонт" 
5 - коэффициент цены
6 - покраска множитель 
7 - ремонт множитель (множитель = аналог boolean, 0 или 1) */ 

// let FBumper = ["f-bumper", "f-bumper-li", "f-bumper-price", "f-bumper-check", "f-bumper-addRepair-check",1.1, 0, 0];
// let Hood = ["hood", "hood-li", "hood-price", "hood-check",  "hood-addRepair-check",1.3, 0, 0];
// let RFFender = ["rf-fender", "rf-fender-li", "rf-fender-price", "rf-fender-check", "rf-fender-addRepair-check", .9, 0, 0];
// let RFDoor = ["rf-door", "rf-door-li", "rf-door-price", "rf-door-check", "rf-door-addRepair-check", .95, 0, 0];
// let RRDoor = ["rr-door", "rr-door-li", "rr-door-price", "rr-door-check", "rr-door-addRepair-check", .9, 0, 0];
// let RRFender = ["rr-fender", "rr-fender-li", "rr-fender-price", "rr-fender-check", "rr-fender-addRepair-check", .9, 0, 0];
// let RThreshold = ["r-threshold", "r-threshold-li", "r-threshold-price", "r-threshold-check", "r-threshold-addRepair-check", .9, 0, 0];
// let RBumper = ["r-bumper", "r-bumper-li", "r-bumper-price", "r-bumper-check", "r-bumper-addRepair-check", 1.1, 0, 0];
// let Trunk = ["trunk", "trunk-li", "trunk-price", "trunk-check", "trunk-addRepair-check", .95, 0, 0];
// let LFFender = ["lf-fender", "lf-fender-li", "lf-fender-price", "lf-fender-check", "lf-fender-addRepair-check", .9, 0, 0];
// let LFDoor = ["lf-door", "lf-door-li", "lf-door-price", "lf-door-check", "lf-door-addRepair-check", .95, 0, 0];
// let LRDoor = ["lr-door", "lr-door-li", "lr-door-price", "lr-door-check", "lr-door-addRepair-check", .9, 0, 0];
// let LRFender = ["lr-fender", "lr-fender-li", "lr-fender-price", "lr-fender-check", "lr-fender-addRepair-check", .9, 0, 0];
// let LThreshold = ["l-threshold", "l-threshold-li", "l-threshold-price", "l-threshold-check", "l-threshold-addRepair-check", .9, 0, 0];
// let Roof = ["roof", "roof-li", "roof-price", "roof-check", "roof-addRepair-check", 1.75, 0, 0];



// динамический массив деталей под покраску / ремонт
let myArray = [];
// let MyArrayReserve = [];

//разные переменные
let myDetail;
let myDetailPrice = 0;
let myCheck;
let checkArr;
let btnId;
let priceField = document.getElementById('full-price');
let wordEnding1;
let wordEnding2;
let allChecked = false;
let checkedCount = 0;
let fullRepair = document.getElementById('full-body-addRepair-check');
let fullRepairLabel = document.getElementById('full-price-label');

let fullPriceLabel = document.getElementById('full-price');
// console.log(fullPriceLabel);



let myInstructionParagraph = null;
let myElement;
const instruction = document.getElementById('calc-instruction');
// const onHoverColor = '#7ddb82'
const onHoverColor = '#66bb6a'


/*  Массив из деталей и их параметров для расчета и выдачи результата
Структура: 
0 - ID 
1 - название детали 
2 - коэффициент цены
3 - ремонт множитель (множитель = аналог boolean, 0 или 1) */ 

const FBumper = ["f-bumper", "Бампер передний", 1.1, 0];
const Hood = ["hood", "Капот", 1.3, 0, 0];
const RFFender = ["rf-fender", "Крыло переднее правое", .9, 0];
const RFDoor = ["rf-door", "Дверь передняя правая", .95, 0];
const RRDoor = ["rr-door", "Дверь задняя правая", .9, 0];
const RRFender = ["rr-fender", "Крыло заднее правое", .9, 0];
const RThreshold = ["r-threshold", "Порог правый", .9, 0];
const RBumper = ["r-bumper", "Бампер задний", 1.1, 0];
const Trunk = ["trunk", "Крышка багажника", .95, 0];
const LFFender = ["lf-fender", "Крыло переднее левое", .9, 0];
const LFDoor = ["lf-door", "Дверь левая передняя", .95, 0];
const LRDoor = ["lr-door", "Дверь левая задняя", .9, 0];
const LRFender = ["lr-fender", "Крыло заднее левое", .9, 0];
const LThreshold = ["l-threshold", "Порог левый", .9, 0];
const Roof = ["roof", "Крыша",  1.75, 0];


// массив = весь кузов
const details = [FBumper, Hood, RFFender, RFDoor, RRDoor, RRFender, RThreshold, 
    RBumper, Trunk, LFFender, LFDoor, LRDoor, LRFender, LThreshold, Roof];


















//новая машинка svg
let bumperProectionL;
let bumperProectionF;
let bumperProectionR;

// let carBody = ["f-bumper-l", "f-bumper-f", "f-bumper-r", "hood", "rf-fender", "rf-door", "rr-door", 
// "rr-fender", "r-threshold", "r-bumper-l", "r-bumper-f", "r-bumper-r", "trunk", "lf-fender", 
// "lf-door", "lr-door","lr-fender", "l-threshold","roof"]

let carBody = ["f-bumper", "hood", "rf-fender", "rf-door", "rr-door", 
"rr-fender", "r-threshold", "r-bumper","trunk", "lf-fender", 
"lf-door", "lr-door","lr-fender", "l-threshold","roof"]

let itemList = document.getElementById('calc-item')
let itemItem;
let textItem;
let itemPriceList = document.getElementById('calc-item-price');
let itemPrice;
let textPrice;
let itemCheckBox;
let itemCheckBoxLabel;
let itemSlider;
let myLabel;
let mySpan;

// let FBumper = ["f-bumper", "f-bumper-li", "f-bumper-price", "f-bumper-check", "f-bumper-addRepair-check",1.1, 0, 0];
// let Hood = ["hood", "hood-li", "hood-price", "hood-check",  "hood-addRepair-check",1.3, 0, 0];
// let RFFender = ["rf-fender", "rf-fender-li", "rf-fender-price", "rf-fender-check", "rf-fender-addRepair-check", .9, 0, 0];
// let RFDoor = ["rf-door", "rf-door-li", "rf-door-price", "rf-door-check", "rf-door-addRepair-check", .95, 0, 0];
// let RRDoor = ["rr-door", "rr-door-li", "rr-door-price", "rr-door-check", "rr-door-addRepair-check", .9, 0, 0];
// let RRFender = ["rr-fender", "rr-fender-li", "rr-fender-price", "rr-fender-check", "rr-fender-addRepair-check", .9, 0, 0];
// let RThreshold = ["r-threshold", "r-threshold-li", "r-threshold-price", "r-threshold-check", "r-threshold-addRepair-check", .9, 0, 0];
// let RBumper = ["r-bumper", "r-bumper-li", "r-bumper-price", "r-bumper-check", "r-bumper-addRepair-check", 1.1, 0, 0];
// let Trunk = ["trunk", "trunk-li", "trunk-price", "trunk-check", "trunk-addRepair-check", .95, 0, 0];
// let LFFender = ["lf-fender", "lf-fender-li", "lf-fender-price", "lf-fender-check", "lf-fender-addRepair-check", .9, 0, 0];
// let LFDoor = ["lf-door", "lf-door-li", "lf-door-price", "lf-door-check", "lf-door-addRepair-check", .95, 0, 0];
// let LRDoor = ["lr-door", "lr-door-li", "lr-door-price", "lr-door-check", "lr-door-addRepair-check", .9, 0, 0];
// let LRFender = ["lr-fender", "lr-fender-li", "lr-fender-price", "lr-fender-check", "lr-fender-addRepair-check", .9, 0, 0];
// let LThreshold = ["l-threshold", "l-threshold-li", "l-threshold-price", "l-threshold-check", "l-threshold-addRepair-check", .9, 0, 0];
// let Roof = ["roof", "roof-li", "roof-price", "roof-check", "roof-addRepair-check", 1.75, 0, 0];


// Раскрашиваем деталь машинки
document.addEventListener('click', function(event){
    myDetail = event.target;
    if (event.target.classList.contains('calc-detail')) {
        myDetail = event.target;
        if (myDetail.id.substr(2, 6) == 'bumper') {
            if (!myDetail.classList.contains('selected')) {
                bumperProectionL = document.getElementById(myDetail.id.substr(0, 9)+'l');
                bumperProectionF = document.getElementById(myDetail.id.substr(0, 9)+'f');
                bumperProectionR = document.getElementById(myDetail.id.substr(0, 9)+'r');
                bumperProectionL.classList.add('selected');
                bumperProectionF.classList.add('selected');
                bumperProectionR.classList.add('selected');
            } else {
                bumperProectionL.classList.remove('selected');
                bumperProectionF.classList.remove('selected');
                bumperProectionR.classList.remove('selected');
            }
        } else {
            if (!myDetail.classList.contains('selected')) {
                myDetail.classList.add('selected')
            } else {
                myDetail.classList.remove('selected')
            }
        }

        addRemoveItem(myDetail);
        countFullPrice(myArray);
        checkFullRepair(myArray);
        fullRepairActive(myArray);
    }
})

function addRemoveItem(myDetail) {
    if (myDetail.classList.contains('selected')) {
        if (myDetail.id.substr(2, 6) == 'bumper') {
            textItem = myDetail.id.substr(0, 8)
        } else {
            textItem = myDetail.id;
        }
            // if (myArray.length === 0) {
                // setTimeout("addItem(myDetail)", 350)
            // } else {
                addItem(myDetail);
            // }
            myArray.push(textItem);
            return
    } else {
        removeItem(myDetail)
        myArray.splice(myArray.indexOf(textItem), 1);
        return
    }
}


function addItem(myDetail) {
    //Создаем строку в списке деталей 
    if (myDetail.id.substr(2, 6) == 'bumper') {
        textItem = myDetail.id.substr(0, 8)
    } else {
        textItem = myDetail.id;
    }
    itemItem = document.createElement('li');
    itemCheckBox = document.createElement('input');
    itemCheckBox.type ='checkbox';
    itemCheckBox.id = textItem + '-check';
    itemCheckBox.setAttribute('add-repair', 'add-repair');
    myLabel = document.createElement('label');
    itemCheckBoxLabel = document.createElement('label');
    itemCheckBoxLabel.setAttribute('for', `${textItem}-check`)
    itemCheckBoxLabel.id='switch';
    itemCheckBoxLabel.classList.add('switch');
    itemItem.textContent = findDetail(textItem);
    itemItem.id = textItem + '-li';
    itemSlider = document.createElement('div');
    mySpan = document.createElement('span');
    mySpan.textContent = ' + ремонт'
    itemSlider.classList.add('slider');
    itemSlider.classList.add('round');
    itemCheckBoxLabel.append(itemCheckBox);
    itemCheckBoxLabel.append(itemSlider);
    myLabel.append(itemCheckBoxLabel);
    myLabel.append(mySpan);
    itemList.append(itemItem);
    itemItem.append(myLabel);
    itemItem.setAttribute('item-list', 'item-list')

    //выставляем чекбокс, если был выбран ранее    
    for (i = 0; i < details.length; i++) {
        if (details[i][0] === textItem) {
            itemCheckBox.checked = details[i][3]
            break
        }
    }

    //Добавляем строку в списке цен 
    itemPrice = document.createElement('li');
    itemPrice.textContent = `${getPaintingPrice(textItem).toLocaleString('ru')} ₽`;
    itemPrice.id = textItem + '-price';
    itemPriceList.append(itemPrice);
}

function removeItem(myDetail) {

    if (myDetail.id.substr(2, 6) == 'bumper') {
        textItem = myDetail.id.substr(0, 8)
    } else {
        textItem = myDetail.id;
    }
    itemItem = document.getElementById(textItem +'-li');
    itemPrice = document.getElementById(textItem +'-price');
    itemItem.textContent = '';
    itemItem.remove();
    itemPrice.textContent = '';
    itemPrice.remove();
}



//Подсвечиваем все проекции бампера при наведении
document.addEventListener('mouseover', function(event){
    myDetail = [];
    if (event.target.classList.contains('calc-detail')) {
        myDetail = event.target;
        if (myDetail.id.substr(2, 6) == 'bumper') {
            bumperProectionL = document.getElementById(myDetail.id.substr(0, 9)+'l');
            bumperProectionF = document.getElementById(myDetail.id.substr(0, 9)+'f');
            bumperProectionR = document.getElementById(myDetail.id.substr(0, 9)+'r');
            if (myDetail.classList.contains('selected')){
                bumperProectionL.classList.add('selected-hover');
                bumperProectionF.classList.add('selected-hover');
                bumperProectionR.classList.add('selected-hover');
            } else {
            bumperProectionL.classList.add('calc-detail-hover');
            bumperProectionF.classList.add('calc-detail-hover');
            bumperProectionR.classList.add('calc-detail-hover');
        }
    }
    }
})

/*Снимаем подсветку со всех проекций бампера при наведении
bumperProectionХ не переназначаем, т.к. они уже присвоены при наведении*/
document.addEventListener('mouseout', function(event){
    myDetail = [];
    if (event.target.classList.contains('calc-detail')) {
        myDetail = event.target;
        if (myDetail.id.substr(2, 6) == 'bumper') {
            bumperProectionL.classList.remove('calc-detail-hover');
            bumperProectionF.classList.remove('calc-detail-hover');
            bumperProectionR.classList.remove('calc-detail-hover');
            bumperProectionL.classList.remove('selected-hover');
            bumperProectionF.classList.remove('selected-hover');
            bumperProectionR.classList.remove('selected-hover');
        }
    }
})


//выбрать весь кузов
document.addEventListener('click', function(event) {
    if (event.target.id == 'CheckAllDetailsBtn1') {
        carBody.forEach(function(elem) {
            if (elem == 'f-bumper'|| elem == 'r-bumper') {
                myDetail=document.getElementById(elem + '-f');
                if (!myDetail.classList.contains('selected'))   {
                    document.getElementById(elem + '-l').classList.add('selected');
                    document.getElementById(elem + '-f').classList.add('selected');
                    document.getElementById(elem + '-r').classList.add('selected');
                    addRemoveItem(myDetail);
                }    
            } else {
                myDetail = document.getElementById(elem);
            if (!myDetail.classList.contains('selected'))   {
                myDetail.classList.add('selected');
                addRemoveItem(myDetail);
            } 
            }
        }) 
        countFullPrice(myArray);
        fullRepairActive(myArray);
        checkFullRepair(myArray)
    }
})

//очистить весь кузов
document.addEventListener('click', function(event) {
    if (event.target.id === 'ClearAllDetailsBtn1') {
        myArray.forEach(function(elem) {
            if (elem.substr(2, 6) == 'bumper') {
                myDetail = document.getElementById(elem+'-f');
                document.getElementById(elem + '-l').classList.remove('selected');
                document.getElementById(elem + '-f').classList.remove('selected');
                document.getElementById(elem + '-r').classList.remove('selected');
            } else {
                myDetail = document.getElementById(elem);
                myDetail.classList.remove('selected');
            }
            details.forEach(function(elem){
                if (elem[3] == 1) {
                    elem[3] = 0
                }
            })
            removeItem(myDetail);
        }) 
        myArray = []
        countFullPrice(myArray);
        fullRepairActive(myArray);
    }
})



// Подсветка списка при наведении на машинку
document.addEventListener('mouseover', function(event){
    if (!event.target.classList.contains('calc-detail')) {
        return 
    }
    myDetail = event.target;
    if (!myDetail.classList.contains('selected')) {
        myDetail = '';
        return
    }
    if (myDetail.id.substr(2, 6) != 'bumper') {
        document.getElementById(myDetail.id + '-li').style.color = onHoverColor;
        document.getElementById(myDetail.id + '-price').style.color = onHoverColor;
        return
    }
    document.getElementById(myDetail.id.substr(0, 8) + '-li').style.color = onHoverColor;
    document.getElementById(myDetail.id.substr(0, 8) + '-price').style.color = onHoverColor;
}
)


// Убрать подсветку при наведении на машинку (отвели курсор)
document.addEventListener('mouseout', function(event) {
    if (!event.target.classList.contains('calc-detail')) {
        return 
    }
    if (!myDetail.classList.contains('selected')) {
        return
    }
    if (myDetail.id.substr(2, 6) != 'bumper') {
        document.getElementById(myDetail.id + '-li').style.color = '';
        document.getElementById(myDetail.id + '-price').style.color = '';
        return
    }
    document.getElementById(myDetail.id.substr(0, 8) + '-li').style.color = '';
    document.getElementById(myDetail.id.substr(0, 8) + '-price').style.color = '';
})


// Подсветка машинки при наведении на список
// document.addEventListener('mouseover', function(event){
//     if (!event.target.hasAttribute('item-list')) {
//         return 
//     }

//     myDetail = event.target.id.slice(0, -3);

//     if (myDetail != 'r-bumper' && myDetail != 'f-bumper') {
//         document.getElementById(myDetail).classList.add('selected-hover');
//         return
//     }

//     document.getElementById(myDetail + '-l').classList.add('selected-hover');
//     document.getElementById(myDetail + '-f').classList.add('selected-hover');
//     document.getElementById(myDetail + '-r').classList.add('selected-hover');
// }
// )

// Убрать подсветку машинки при наведении на список (отвели курсор)
// document.addEventListener('mouseout', function(event){
//     if (!event.target.hasAttribute('item-list')) {
//         return 
//     }

//     myDetail = event.target.id.slice(0, -3);

//     if (myDetail != 'r-bumper' && myDetail != 'f-bumper') {
//         document.getElementById(myDetail).classList.remove('selected-hover');
//         return
//     }

//     document.getElementById(myDetail + '-l').classList.remove('selected-hover');
//     document.getElementById(myDetail + '-f').classList.remove('selected-hover');
//     document.getElementById(myDetail + '-r').classList.remove('selected-hover');
// }
// )


// Найти деталь в массиве
let a = null 
let b = null
let i = null

function findDetail(myDetail) {
    
    for (i = 0; i < details.length; i++) {
        if (details[i][0] === myDetail) {
            a = details[i][1];
            break
        }
    }
    return a;
}

// Цена покраски детали
function getPaintingPrice(myDetail) {
    for (i = 0; i < details.length; i++) {
        if (details[i][0] === myDetail) {
            a = details[i][2]
            b = details[i][3]
            break
        }
    }
    
    return basicPaintingPrice * a + basicRepairPrice * b
}

//Галочка "+ремонт" в списке деталей
document.addEventListener('change', function (event) {
    if (!event.target.hasAttribute('add-repair')) {
        return
    }

    if (event.target != fullRepair){
    for (i = 0; i < details.length; i++) {
        if (details[i][0] === event.target.id.slice(0, -6)) {
            details[i][3] = event.target.checked;
            document.getElementById(details[i][0] + '-price').textContent = `${getPaintingPrice(event.target.id.slice(0, -6)).toLocaleString('ru')} ₽`;
            break
        }
    }
    checkFullRepair(myArray);
    countFullPrice(myArray);
    return
    }

    if (event.target === fullRepair){
        myArray.forEach(function(elem){
            for (i = 0; i < details.length; i++) {
                if (details[i][0] === elem) {
                    details[i][3] = Number(fullRepair.checked);
                    document.getElementById(elem + '-check').checked = fullRepair.checked;
                    document.getElementById(elem + '-price').textContent = `${getPaintingPrice(elem).toLocaleString('ru')} ₽`;
                }
            }
        }) 
    countFullPrice(myArray);
    }
})







//Пересчет общей цены ремонта
function countFullPrice(myArray) {
    let res = 0;
    myArray.forEach(function(elem){
        res = res + getPaintingPrice(elem);
    })
    // console.log(fullRepair);
    fullPriceLabel.textContent = `${res.toLocaleString('ru')} ₽`
}













//Проверка на пустой массив
function isEmptyArr(myArray) {
    return (myArray.length == 0) ? true : false;
}





//Активация || деактивация чекбокса "+ ремонт" в общей сумме ремонта (функция "выбрать все") 
function fullRepairActive(myArray) {


    //Если массив выбранных деталей пустой, то чекбокс неактивен, и наоборот
    fullRepair.disabled = isEmptyArr(myArray);

    //Если массив пустой || непустой, правим стили чекбокса
    if (isEmptyArr(myArray)) {
        fullRepair.checked = false;
        fullRepairLabel.style.color = '#eee';
        fullRepairLabel.style.cursor = 'auto';
        instruction.style.left = '0'
        // instruction.style.height = 'auto'

    } else {
        fullRepairLabel.style.color = '#ccc'
        fullRepairLabel.style.cursor = 'pointer'
        instruction.style.left = '2000px'
        // instruction.style.height = '0px'

    }
}


//проверяем галочку общий "+ ремонт" full-repair
function checkFullRepair(myArray) {
    checkedCount = 0;
    myArray.forEach(function(elem){
        for (i = 0; i < details.length; i++) {
            if (details[i][0] === elem) {
                checkedCount += details[i][3];
                break
            }
        }
    })  
    fullRepair.checked = (myArray.length == checkedCount)  
}

// document.addEventListener ('change', function(event){
//     if (event.target != fullRepair) {
//         return
//     }

    // console.log(event.target.checked);
// })


document.addEventListener ('mouseover', function(event){
    if (event.target.id === 'scheme-instruction-detail' || event.target.id === 'scheme-instruction-detail-img') {
        document.getElementById('rf-fender').style.fill = '#ddd654';
        document.getElementById('rf-fender').style.filter = 'drop-shadow(0px 0px 16px #ddd654)';
        document.getElementById('scheme-instruction-detail').style.color = '#ddd654';
        return
    }
    if (event.target.id === 'scheme-instruction-add-repair' || event.target.id === 'scheme-instruction-add-repair-img') {
        document.getElementById('full-price-label').style.color = '#ddd654';
        document.getElementById('slider round').style.backgroundColor = '#ddd654';        
        document.getElementById('full-price-label').style.filter = 'drop-shadow(0px 0px 16px #ddd654)';
        document.getElementById('scheme-instruction-add-repair').style.color = '#ddd654';
        return
    }
    if (event.target.id === 'scheme-instruction-choose-all' || event.target.id === 'scheme-instruction-choose-all-img') {
        document.getElementById('CheckAllDetailsBtn1').style.color = '#ddd654';    
        document.getElementById('CheckAllDetailsBtn1').style.borderWidth = '2px';    
        document.getElementById('CheckAllDetailsBtn1').style.borderColor = '#ddd654';    
        document.getElementById('CheckAllDetailsBtn1').style.filter = 'drop-shadow(0px 0px 16px #ddd654)';
        document.getElementById('scheme-instruction-choose-all').style.color = '#ddd654';
        return
    }
    if (event.target.id === 'scheme-instruction-clear-all' || event.target.id === 'scheme-instruction-clear-all-img') {
        document.getElementById('ClearAllDetailsBtn1').style.color = '#ddd654';   
        document.getElementById('ClearAllDetailsBtn1').style.borderWidth = '2px';     
        document.getElementById('ClearAllDetailsBtn1').style.borderColor = '#ddd654';     
        document.getElementById('ClearAllDetailsBtn1').style.filter = 'drop-shadow(0px 0px 16px #ddd654)';
        document.getElementById('scheme-instruction-clear-all').style.color = '#ddd654';
        return
    }
})


document.addEventListener ('mouseout', function(event){
    if (event.target.id === 'scheme-instruction-detail' || event.target.id === 'scheme-instruction-detail-img') {
        document.getElementById('rf-fender').style.fill = '';
        document.getElementById('rf-fender').style.filter = '';
        document.getElementById('scheme-instruction-detail').style.color = '';
        return
    }
    if (event.target.id === 'scheme-instruction-add-repair' || event.target.id === 'scheme-instruction-add-repair-img') {
        document.getElementById('full-price-label').style.color = '';
        document.getElementById('slider round').style.backgroundColor = '';        
        document.getElementById('full-price-label').style.filter = '';
        document.getElementById('scheme-instruction-add-repair').style.color = '';
        return
    }
    if (event.target.id === 'scheme-instruction-choose-all' || event.target.id === 'scheme-instruction-choose-all-img') {
        document.getElementById('CheckAllDetailsBtn1').style.color = '';   
        document.getElementById('CheckAllDetailsBtn1').style.borderColor = '';   
        document.getElementById('CheckAllDetailsBtn1').style.borderWidth = '';    
        document.getElementById('CheckAllDetailsBtn1').style.filter = '';
        document.getElementById('scheme-instruction-choose-all').style.color = '';
        return
    }
    if (event.target.id === 'scheme-instruction-clear-all' || event.target.id === 'scheme-instruction-clear-all-img') {
        document.getElementById('ClearAllDetailsBtn1').style.color = '';    
        document.getElementById('ClearAllDetailsBtn1').style.borderColor = '';    
        document.getElementById('ClearAllDetailsBtn1').style.borderWidth = '';    
        document.getElementById('ClearAllDetailsBtn1').style.filter = '';
        document.getElementById('scheme-instruction-clear-all').style.color = '';
        return
    }
})