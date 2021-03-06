var rawData = [];
var data = [];
var processedList = [];
var sunArr=[];
var monArr=[];
var tueArr=[];
var wedArr=[];
var thrArr=[];
var friArr=[];
var satArr=[];
var flag= true;
var errNode = document.getElementById("error");

function validateJson(){
    try{
        rawData = JSON.parse(document.getElementById("sourceData").value);
        data = rawData.map(function(obj){
            obj.birthday = new Date(obj.birthday);
            return obj;
        });
        document.getElementById("targetYear").disabled=false;
        errNode.textContent='';
    }
    catch (err){
        errNode.textContent='invalid json';
        document.getElementById("targetYear").disabled=true;
    }
}

function rendorCards(){
    if(flag === true){
        filterJson();
        fillCards();
        flag = false;   
    }
    else {
        clearAll();
        flag = true;
    }
    
}

function filterJson(){
    var yearInput = parseInt(document.getElementById("targetYear").value);
    processedList = data.filter(function(obj){
        if(obj.birthday.getFullYear() === yearInput) {
            return obj;
        }
    });
    fillDayArr();
}

function fillDayArr(){
    for(var i=0; i<processedList.length;i++){
        switch (processedList[i].birthday.getDay()) {
            case 0:
                sunArr.push(processedList[i]);
                break;
            case 1:
                monArr.push(processedList[i]);
                break;
            case 2:
                tueArr.push(processedList[i]);
                break;
            case 3:
                wedArr.push(processedList[i]);
                break;
            case 4:
                thrArr.push(processedList[i]);
                break;
            case 5:
                friArr.push(processedList[i]);
                break;
            case  6:
                satArr.push(processedList[i]);
        }
    }
    sortAllArrays();
}

function sortAllArrays () {
    sunArr.sort(function(a,b) {
        return (b.birthday)-(a.birthday);
    });
    monArr.sort(function(a,b) {
        return (b.birthday)-(a.birthday);
    });
    tueArr.sort(function(a,b) {
        return (b.birthday)-(a.birthday);
    });
    wedArr.sort(function(a,b) {
        return (b.birthday)-(a.birthday);
    });
    thrArr.sort(function(a,b) {
        return (b.birthday)-(a.birthday);
    });
    friArr.sort(function(a,b) {
        return (b.birthday)-(a.birthday);
    });
    satArr.sort(function(a,b) {
        return (b.birthday)-(a.birthday);
    });
}

function fillCards() {
    createCards(sunArr, 'sunday');
    createCards(monArr, 'monday');
    createCards(tueArr, 'tuesday');
    createCards(wedArr, 'wednesday');
    createCards(thrArr, 'thrusday');
    createCards(friArr, 'friday');
    createCards(satArr, 'saterday');
}

function createCards(srcArr, parentId){
    var noOfCardsInEachRow = Math.ceil(Math.sqrt(srcArr.length));
    var cardWidth = 175/noOfCardsInEachRow + 'px';
    var cardheight = 175/noOfCardsInEachRow + 'px';
    if(noOfCardsInEachRow > 0){
        removeSoothyFace(parentId);
    }
    srcArr.map(function(obj){
        var card = document.createElement("DIV");
        var cardColor = '#'+Math.random().toString(16).substr(2,6);
        var style = "background-color: "+cardColor+";width: "+cardWidth+";height: "+cardheight+"; display:inline-block;text-align: center;";
        card.setAttribute("style",style);
        card.textContent = obj.name;
        document.getElementById(parentId).appendChild(card);
    });
}

function removeSoothyFace(targetDiv){
    document.getElementById(targetDiv).setAttribute("style","background-image: url()");
}

function clearAll() {
    var sunNode = document.getElementById("sunday");
    while (sunNode.firstChild) {
        sunNode.removeChild(sunNode.firstChild);
    }
    var monNode = document.getElementById("monday");
    while (monNode.firstChild) {
        monNode.removeChild(monNode.firstChild);
    }
    var tueNode = document.getElementById("tuesday");
    while (tueNode.firstChild) {
        tueNode.removeChild(tueNode.firstChild);
    }
    var wedNode = document.getElementById("wednesday");
    while (wedNode.firstChild) {
        wedNode.removeChild(wedNode.firstChild);
    }
    var thrNode = document.getElementById("thrusday");
    while (thrNode.firstChild) {
        thrNode.removeChild(thrNode.firstChild);
    }
    var friNode = document.getElementById("friday");
    while (friNode.firstChild) {
        friNode.removeChild(friNode.firstChild);
    }
    var satNode = document.getElementById("saterday");
    while (satNode.firstChild) {
        satNode.removeChild(satNode.firstChild);
    }
    sunArr=[];
    monArr=[];
    tueArr=[];
    wedArr=[];
    thrArr=[];
    friArr=[];
    satArr=[];
    document.getElementById('sunday').setAttribute("style","background-image: url('https://cdn2.iconfinder.com/data/icons/smiley-emoticons-brush-outline/80/35-128.png');");
    document.getElementById('monday').setAttribute("style","background-image: url('https://cdn2.iconfinder.com/data/icons/smiley-emoticons-brush-outline/80/35-128.png');");
    document.getElementById('tuesday').setAttribute("style","background-image: url('https://cdn2.iconfinder.com/data/icons/smiley-emoticons-brush-outline/80/35-128.png');");
    document.getElementById('wednesday').setAttribute("style","background-image: url('https://cdn2.iconfinder.com/data/icons/smiley-emoticons-brush-outline/80/35-128.png');");
    document.getElementById('thrusday').setAttribute("style","background-image: url('https://cdn2.iconfinder.com/data/icons/smiley-emoticons-brush-outline/80/35-128.png');");
    document.getElementById('friday').setAttribute("style","background-image: url('https://cdn2.iconfinder.com/data/icons/smiley-emoticons-brush-outline/80/35-128.png');");
    document.getElementById('saterday').setAttribute("style","background-image: url('https://cdn2.iconfinder.com/data/icons/smiley-emoticons-brush-outline/80/35-128.png');");
}

function validateYear(){
    var regx = new RegExp(/^\d{1,4}$/);
    var yearInput = document.getElementById("targetYear").value;
    if(!yearInput.match(regx)){
        errNode.textContent='wrong yearInput';
    }
    else {
        clearAll();
        flag = true;
    }
}