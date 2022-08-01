var _a, _b;
var cardCrt = /** @class */ (function () {
    function cardCrt(name, realese, popularity, cost, color, company, path, category, base, stock, description) {
        if (description === void 0) { description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat deserunt, quidem accusamus a dolores ipsam."; }
        this.name = name;
        this.realese = realese;
        this.popularity = popularity;
        this.cost = cost;
        this.color = color;
        this.company = company;
        this.path = path;
        this.category = category;
        this.base = base;
        this.stock = stock;
        this.description = description;
    }
    cardCrt.prototype.getPath = function () {
        return "../assets/cards/".concat(this.path);
    };
    return cardCrt;
}());
var field = document.querySelector('.products-cards');
var products = [
    new cardCrt('2B', 2017, true, 21.65, 'Black', 'Square Enix', '2b.jpeg', 'Games', 0, 2),
    new cardCrt('HP Universe', 2013, true, 8.26, 'Black', 'Warner Brothers', 'potter.jpg', 'Movies', 1, 6),
    new cardCrt('Cells', 2018, false, 18.32, 'Red', 'David Productions', 'cells.jpg', 'Anime', 2, 8),
    new cardCrt('Neptunia', 2014, false, 26.99, 'Blue', 'David Productions', 'nept.jpg', 'Anime', 3, 3),
    new cardCrt('Raiden', 2015, true, 99.99, 'Black', 'Square Enix', 'raiden.jpg', 'Games', 4, 15),
    new cardCrt('Joseph Joestar', 2012, true, 54.90, 'Green', 'David Productions', 'joseph.jpg', 'Anime', 5, 7),
    new cardCrt('Pennywise', 2017, true, 6.76, 'White', 'Warner Brothers', 'pennywhise.jpg', 'Movies', 6, 7),
    new cardCrt('Bayonetta', 2009, false, 197.00, 'Black', 'Square Enix', 'bayonetta.jpg', 'Games', 7, 1),
    new cardCrt('Jason', 2009, false, 11.40, 'Blue', 'Warner Brothers', 'jason.jpg', 'Movies', 8, 13),
    new cardCrt('Kiryu', 2015, true, 16.99, 'Grey', 'Sega', 'kiryu.jpg', 'Games', 9, 24),
    new cardCrt('Sonic', 2014, true, 16.99, 'Blue', 'Sega', 'sonic.jpg', 'Games', 10, 12),
    new cardCrt('ER Knight', 2021, true, 74.99, 'Grey', 'Bandai Namco', 'ring.jpg', 'Games', 11, 3),
    new cardCrt('Astora Knight', 2011, false, 14.99, 'Grey', 'Bandai Namco', 'souls.png', 'Games', 12, 20),
    new cardCrt('Super Sonic', 2022, true, 540.99, 'Yellow', 'Sega', 'super-sonic.jpg', 'Games', 13, 1),
    new cardCrt('Nier', 2020, false, 49.99, 'Black', 'Square Enix', 'nier.jpg', 'Games', 14, 7),
    new cardCrt('Sephiroth', 2018, true, 49.99, 'White', 'Square Enix', 'sephiroth.jpg', 'Games', 15, 2),
    new cardCrt('Korone', 2019, true, 269.99, 'Yellow', 'Square Enix', 'korone.jpg', 'Anime', 16, 1),
    new cardCrt('Pac-Man', 2019, true, 79.99, 'Yellow', 'Bandai Namco', 'pac.jpg', 'Games', 17, 9)
];
for (var i = 0; i < products.length; i++) {
    var crtDiv = document.createElement('div');
    crtDiv.classList.add("field");
    crtDiv.classList.add("number".concat(i));
    crtDiv.setAttribute('data-price', "".concat(products[i].cost));
    crtDiv.setAttribute('data-name', "".concat(products[i].name));
    crtDiv.setAttribute('data-color', "".concat(products[i].color));
    crtDiv.setAttribute('data-category', "".concat(products[i].category));
    crtDiv.setAttribute('data-company', "".concat(products[i].company));
    crtDiv.setAttribute('data-popularity', "".concat(products[i].popularity));
    crtDiv.setAttribute('data-base', "".concat(products[i].base));
    crtDiv.setAttribute('data-stock', "".concat(products[i].stock));
    crtDiv.setAttribute('data-realese', "".concat(products[i].realese));
    field === null || field === void 0 ? void 0 : field.appendChild(crtDiv);
}
var fields = document.querySelectorAll('.field');
for (var i = 0; i < products.length; i++) {
    var cardDesc = document.createElement('div');
    cardDesc.classList.add('card-short');
    var cardImg = document.createElement('img');
    cardImg.src = products[i].getPath();
    var cardH = document.createElement('h4');
    cardH.innerText = products[i].name;
    var cardCost = document.createElement('span');
    cardCost.innerText = "".concat(products[i].cost, " $");
    fields[i].append(cardImg);
    fields[i].append(cardDesc);
    cardDesc.append(cardH);
    cardDesc.append(cardCost);
}
var dataFields = document.querySelectorAll('.field');
function btnFilt(attr, cat) {
    for (var i = 0; i < dataFields.length; i++) {
        var data = dataFields[i].getAttribute("data-".concat(cat));
        if (data !== attr) {
            dataFields[i].classList.add("".concat(cat, "Invisible"));
        }
        else {
            dataFields[i].classList.remove("".concat(cat, "Invisible"));
        }
    }
}
function categoryReset(category) {
    dataFields.forEach(function (Elem) {
        Elem.classList.remove("".concat(category, "Invisible"));
    });
}
var categoryBtns = document.querySelectorAll('.cat-btn');
var _loop_1 = function (i) {
    categoryBtns[i].setAttribute('data-category', "".concat(categoryBtns[i].innerHTML));
    categoryBtns[i].addEventListener('click', function () { btnFilt("".concat(categoryBtns[i].getAttribute('data-category')), 'category'); });
};
for (var i = 0; i < categoryBtns.length; i++) {
    _loop_1(i);
}
categoryBtns[0].addEventListener('click', function () { categoryReset('category'); });
var colors = document.querySelectorAll('.color');
var _loop_2 = function (i) {
    colors[i].setAttribute('data-color', "".concat(colors[i].innerHTML));
    colors[i].addEventListener('click', function () { btnFilt("".concat(colors[i].getAttribute('data-color')), 'color'); });
};
for (var i = 0; i < colors.length; i++) {
    _loop_2(i);
}
colors[0].addEventListener('click', function () { categoryReset('color'); });
var checkbox = document.querySelector('.checkbox');
checkbox === null || checkbox === void 0 ? void 0 : checkbox.addEventListener('click', function () {
    if (checkbox.checked == true) {
        btnFilt('true', 'popularity');
    }
    else if (checkbox.checked == false) {
        categoryReset('popularity');
    }
});
var company = document.querySelector('.company');
company === null || company === void 0 ? void 0 : company.addEventListener('click', function () {
    if (company.value == 'All') {
        categoryReset('company');
    }
    else {
        btnFilt("".concat(company.value), 'company');
    }
});
var replaced;
function raiseSort(typeSort) {
    for (var i = 0; i < field.children.length; i++) {
        for (var j = i; j < field.children.length; j++) {
            if (Number(field === null || field === void 0 ? void 0 : field.children[i].getAttribute(typeSort)) > Number(field === null || field === void 0 ? void 0 : field.children[j].getAttribute(typeSort))) {
                replaced = field === null || field === void 0 ? void 0 : field.replaceChild(field.children[j], field.children[i]);
                insert(replaced, field === null || field === void 0 ? void 0 : field.children[i]);
            }
        }
    }
}
function decreaseSort(typeSort) {
    for (var i = 0; i < field.children.length; i++) {
        for (var j = i; j < field.children.length; j++) {
            if (Number(field === null || field === void 0 ? void 0 : field.children[i].getAttribute(typeSort)) < Number(field === null || field === void 0 ? void 0 : field.children[j].getAttribute(typeSort))) {
                replaced = field === null || field === void 0 ? void 0 : field.replaceChild(field.children[j], field.children[i]);
                insert(replaced, field === null || field === void 0 ? void 0 : field.children[i]);
            }
        }
    }
}
function insert(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
var increase = document.querySelector('.increase');
increase === null || increase === void 0 ? void 0 : increase.addEventListener('click', function () {
    if (increase.value == 'up') {
        raiseSort('data-price');
    }
    else if (increase.value == 'down') {
        decreaseSort('data-price');
    }
    else if (increase.value == 'none') {
        raiseSort('data-base');
    }
    else if (increase.value == 'year-up') {
        raiseSort('data-realese');
    }
    else if (increase.value == 'year-down') {
        decreaseSort('data-realese');
    }
    else if (increase.value == 'amount-up') {
        raiseSort('data-stock');
    }
    else if (increase.value == 'amount-down') {
        decreaseSort('data-stock');
    }
});
var searchFld = document.querySelector('.search');
searchFld.oninput = function () {
    var val = this.value.trim();
    if (val != '') {
        dataFields.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
            }
            else
                (elem.classList.remove('hide'));
        });
    }
    else {
        dataFields.forEach(function (elem) {
            elem.classList.remove('hide');
        });
    }
};
function fullReset() {
    for (var i = 0; i < dataFields.length; i++) {
        dataFields[i].classList.remove('categoryInvisible', 'colorInvisible', 'popularityInvisible', 'companyInvisible', 'hide');
        searchFld.value = '';
    }
}
(_a = document.querySelector('.btn-reset')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', fullReset);
var cartItem = /** @class */ (function () {
    function cartItem(img, name, cost, amount) {
        this.img = img;
        this.name = name;
        this.cost = cost;
        this.amount = amount;
    }
    return cartItem;
}());
var cart = [];
var toCart = document.querySelector('.in-cart-button');
var _loop_3 = function (i) {
    var prodBas = products[Number(dataFields[i].getAttribute('data-base'))];
    dataFields[i].addEventListener('click', function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        document.querySelector('.personal-name').innerHTML = prodBas.name;
        (_a = document.querySelector('.personal-realese')) === null || _a === void 0 ? void 0 : _a.innerHTML = prodBas.realese;
        (_b = document.querySelector('.personal-color')) === null || _b === void 0 ? void 0 : _b.innerHTML = prodBas.color;
        (_c = document.querySelector('.personal-company')) === null || _c === void 0 ? void 0 : _c.innerHTML = prodBas.company;
        (_d = document.querySelector('.personal-desc')) === null || _d === void 0 ? void 0 : _d.innerHTML = prodBas.description;
        (_e = document.querySelector('.personal-category')) === null || _e === void 0 ? void 0 : _e.innerHTML = prodBas.category;
        (_f = document.querySelector('.personal-stock')) === null || _f === void 0 ? void 0 : _f.innerHTML = prodBas.stock;
        (_g = document.querySelector('.personal-img')) === null || _g === void 0 ? void 0 : _g.src = prodBas.getPath();
        (_h = document.querySelector('.personal-price')) === null || _h === void 0 ? void 0 : _h.innerHTML = "".concat(prodBas.cost, " $");
        (_j = document.querySelector('.personal-card')) === null || _j === void 0 ? void 0 : _j.classList.remove('personal-hidden');
        var minmaxButtons = document.querySelector('.minmax-btns');
        minmaxButtons === null || minmaxButtons === void 0 ? void 0 : minmaxButtons.innerHTML = '';
        var minBtn = document.createElement('button');
        minBtn.classList.add('min-btn');
        minBtn.innerText = '-';
        var plsBtn = document.createElement('button');
        plsBtn.classList.add('plus-btn');
        plsBtn.innerText = '+';
        var currentValue = document.createElement('div');
        currentValue.classList.add('current-value');
        var val = 0;
        val = 0;
        minmaxButtons === null || minmaxButtons === void 0 ? void 0 : minmaxButtons.append(minBtn);
        minmaxButtons === null || minmaxButtons === void 0 ? void 0 : minmaxButtons.append(currentValue);
        minmaxButtons === null || minmaxButtons === void 0 ? void 0 : minmaxButtons.append(plsBtn);
        plsBtn.addEventListener('click', valInc);
        minBtn.addEventListener('click', valDec);
        toCart === null || toCart === void 0 ? void 0 : toCart.addEventListener('click', cartAdding);
        function valInc() {
            if (val < prodBas.stock) {
                val = val + 1;
                currentValue === null || currentValue === void 0 ? void 0 : currentValue.innerText = val;
            }
        }
        function valDec() {
            if (val > 0) {
                val = val - 1;
                currentValue === null || currentValue === void 0 ? void 0 : currentValue.innerText = val;
            }
        }
        function cartAdding() {
            cart.push({
                'id': prodBas.base,
                'amount': val
            });
            val = 0;
            currentValue.innerText = 0;
        }
    });
};
for (var i = 0; i < dataFields.length; i++) {
    _loop_3(i);
}
(_b = document.querySelector('.close')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var _a;
    (_a = document.querySelector('.personal-card')) === null || _a === void 0 ? void 0 : _a.classList.add('personal-hidden');
});
toCart === null || toCart === void 0 ? void 0 : toCart.addEventListener('click', fuckshon);
var cartCont = document.querySelector('.cart-cont');
var total = document.querySelector('.total');
var totalbase = 0;
total.innerText = "Total: ".concat(totalbase, "$");
var cartOpen = document.querySelector('.btn-cart');
function fuckshon() {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i]['amount'] !== 0) {
            var cartCard = document.createElement('div');
            cartCard.classList.add('prod-container');
            var cartImg = document.createElement('img');
            cartImg.src = products[cart[i]['id']].getPath();
            cartImg.classList.add('cartImg');
            var cartH = document.createElement('h4');
            cartH.innerText = products[cart[i]['id']].name;
            var cartAm = document.createElement('span');
            cartAm.innerText = "amount: ".concat(cart[i]['amount']);
            cartCont === null || cartCont === void 0 ? void 0 : cartCont.append(cartCard);
            cartCard.append(cartImg);
            cartCard.append(cartH);
            cartCard.append(cartAm);
            totalbase = totalbase + cart[i]['amount'] * products[cart[i]['id']].cost;
            total.innerText = "Total: ".concat(totalbase);
        }
    }
}
var cartClear = document.querySelector('.cart-clear');
cartClear === null || cartClear === void 0 ? void 0 : cartClear.addEventListener('click', cartClr);
function cartClr() {
    cart = [];
    totalbase = 0;
    total.innerText = "Total: ".concat(totalbase, " $");
    cartCont === null || cartCont === void 0 ? void 0 : cartCont.innerHTML = '';
}
var cartCls = document.querySelector('.cart-cls');
cartCls === null || cartCls === void 0 ? void 0 : cartCls.addEventListener('click', function () {
    var _a;
    (_a = document.querySelector('.cart')) === null || _a === void 0 ? void 0 : _a.classList.add('cart-hidden');
});
cartOpen === null || cartOpen === void 0 ? void 0 : cartOpen.addEventListener('click', function () {
    var _a;
    (_a = document.querySelector('.cart')) === null || _a === void 0 ? void 0 : _a.classList.toggle('cart-hidden');
});
