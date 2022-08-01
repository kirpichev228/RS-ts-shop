class cardCrt {


    constructor(
        public name:string, 
        public realese:number, 
        public popularity:boolean, 
        public cost:number, 
        public color:string, 
        public company:string,
        public path:string,
        public category:string,
        public base:number,
        public stock:number,
        public description:string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat deserunt, quidem accusamus a dolores ipsam."
        ) {  
        }
        getPath():string {
            return `../assets/cards/${this.path}`
        }
}

let field = document.querySelector('.products-cards')


let products = [
    new cardCrt('2B', 2017, true, 21.65, 'Black', 'Square Enix', '2b.jpeg', 'Games', 0, 2),
    new cardCrt('HP Universe', 2013, true, 8.26, 'Black', 'Warner Brothers', 'potter.jpg', 'Movies', 1, 6),
    new cardCrt('Cells', 2018, false, 18.32, 'Red', 'David Productions', 'cells.jpg', 'Anime', 2, 8),
    new cardCrt('Neptunia', 2014, false, 26.99, 'Blue', 'David Productions', 'nept.jpg', 'Anime', 3, 3),
    new cardCrt('Raiden', 2015, true, 99.99, 'Black', 'Square Enix', 'raiden.jpg', 'Games', 4, 15),
    new cardCrt('Joseph Joestar', 2012, true, 54.90, 'Green', 'David Productions', 'joseph.jpg', 'Anime', 5, 7),
    new cardCrt('Pennywise', 2017, true, 6.76, 'White', 'Warner Brothers', 'pennywhise.jpg', 'Movies', 6, 7),
    new cardCrt('Bayonetta', 2009, false,197.00, 'Black', 'Square Enix', 'bayonetta.jpg', 'Games', 7, 1),
    new cardCrt('Jason', 2009, false,11.40, 'Blue', 'Warner Brothers', 'jason.jpg', 'Movies',8, 13),
    new cardCrt('Kiryu', 2015, true, 16.99, 'Grey', 'Sega', 'kiryu.jpg', 'Games',  9, 24),
    new cardCrt('Sonic', 2014, true, 16.99, 'Blue', 'Sega', 'sonic.jpg', 'Games', 10, 12),    
    new cardCrt('ER Knight', 2021, true, 74.99, 'Grey', 'Bandai Namco', 'ring.jpg', 'Games', 11, 3),
    new cardCrt('Astora Knight',2011,false,14.99,'Grey','Bandai Namco','souls.png','Games',12,20),
    new cardCrt ('Super Sonic',2022,true,540.99,'Yellow','Sega','super-sonic.jpg','Games',13,1),
    new cardCrt('Nier', 2020, false, 49.99, 'Black', 'Square Enix', 'nier.jpg', 'Games', 14, 7),
    new cardCrt('Sephiroth', 2018, true, 49.99, 'White', 'Square Enix', 'sephiroth.jpg', 'Games', 15,  2),
    new cardCrt('Korone', 2019, true, 269.99, 'Yellow', 'Square Enix', 'korone.jpg', 'Anime', 16, 1),
    new cardCrt('Pac-Man', 2019, true, 79.99, 'Yellow', 'Bandai Namco', 'pac.jpg', 'Games', 17, 9)

]

    for (let i: number = 0; i<products.length; i++) {
        let crtDiv = document.createElement('div');
        crtDiv.classList.add(`field`)
        crtDiv.classList.add(`number${i}`)
        crtDiv.setAttribute('data-price', `${products[i].cost}`)
        crtDiv.setAttribute('data-name', `${products[i].name}`)
        crtDiv.setAttribute('data-color', `${products[i].color}`)
        crtDiv.setAttribute('data-category', `${products[i].category}`)
        crtDiv.setAttribute('data-company', `${products[i].company}`)
        crtDiv.setAttribute('data-popularity', `${products[i].popularity}`)
        crtDiv.setAttribute('data-base', `${products[i].base}`)
        crtDiv.setAttribute('data-stock', `${products[i].stock}`)
        crtDiv.setAttribute('data-realese', `${products[i].realese}`)
        field?.appendChild(crtDiv);
    }    
    
    let fields = document.querySelectorAll('.field')
    for (let i:number = 0; i<products.length; i++) {
        let cardDesc = document.createElement('div');
            cardDesc.classList.add('card-short')
        let cardImg = document.createElement('img')
            cardImg.src = products[i].getPath()
        let cardH = document.createElement('h4')
            cardH.innerText = products[i].name
        let cardCost = document.createElement('span')
            cardCost.innerText = `${products[i].cost} $`
    
        fields[i].append(cardImg)
        fields[i].append(cardDesc)
        cardDesc.append(cardH)
        cardDesc.append(cardCost)
    }

let dataFields = document.querySelectorAll('.field')

function btnFilt (attr: string | boolean, cat:string): void {
    for(let i =0; i<dataFields.length; i++) {
        let data = dataFields[i].getAttribute(`data-${cat}`)
        if (data !== attr) {
            dataFields[i].classList.add(`${cat}Invisible`)
        } else {
            dataFields[i].classList.remove(`${cat}Invisible`)
        }
    }
}

function categoryReset (category:string): void {
    dataFields.forEach((Elem) => {
        Elem.classList.remove(`${category}Invisible`)
    })
}

let categoryBtns = document.querySelectorAll('.cat-btn')
    for(let i = 0; i<categoryBtns.length; i++) {
        categoryBtns[i].setAttribute('data-category', `${categoryBtns[i].innerHTML}`)
        categoryBtns[i].addEventListener('click', ()=>{btnFilt(`${categoryBtns[i].getAttribute('data-category')}`, 'category')})
    }
categoryBtns[0].addEventListener('click', ()=>{categoryReset('category')})

let colors = document.querySelectorAll('.color')
    for(let i = 0; i<colors.length; i++) {
        colors[i].setAttribute('data-color', `${colors[i].innerHTML}`)
        colors[i].addEventListener('click', ()=>{btnFilt(`${colors[i].getAttribute('data-color')}`, 'color')})
    }
colors[0].addEventListener('click', ()=>{categoryReset('color')})

let checkbox = document.querySelector('.checkbox')
    checkbox?.addEventListener('click', ()=> {
        if ((checkbox as HTMLInputElement).checked == true) {
            btnFilt('true', 'popularity')
        } else if ((checkbox as HTMLInputElement).checked == false) {
            categoryReset('popularity')
            }
        }
    )

let company = document.querySelector('.company')
    company?.addEventListener('click', ()=>{
        if((company as HTMLInputElement).value == 'All') {
            categoryReset('company')
        } else {
            btnFilt(`${(company as HTMLInputElement).value}`, 'company')
        }
    })

   

let replaced: Element | undefined | null
function raiseSort (typeSort:string): void {
    for(let i=0; i<field.children.length; i++) {
        for (let j=i; j<field.children.length; j++) {
        if(Number(field?.children[i].getAttribute(typeSort)) > Number(field?.children[j].getAttribute(typeSort)))
            {replaced = field?.replaceChild(field.children[j], field.children[i])
            insert(replaced, field?.children[i])}
        }
    }
}

function decreaseSort (typeSort:string): void {
    for(let i=0; i<field.children.length; i++) {
        for (let j=i; j<field.children.length; j++) {
        if(Number(field?.children[i].getAttribute(typeSort)) < Number(field?.children[j].getAttribute(typeSort)))
            {replaced = field?.replaceChild(field.children[j], field.children[i])
            insert(replaced, field?.children[i])}
        }
    }
}

function insert (elem, refElem): void {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
}

let increase = document.querySelector('.increase');
    increase?.addEventListener('click', ()=>{
        if((increase as HTMLInputElement).value == 'up') {
            raiseSort('data-price')
        } else if ((increase as HTMLInputElement).value == 'down') {
            decreaseSort('data-price')
        } else if ((increase as HTMLInputElement).value == 'none') {
            raiseSort('data-base')
        } else if ((increase as HTMLInputElement).value == 'year-up') {
            raiseSort('data-realese')
        } else if ((increase as HTMLInputElement).value == 'year-down') {
            decreaseSort('data-realese')
        } else if ((increase as HTMLInputElement).value == 'amount-up') {
            raiseSort('data-stock')
        } else if ((increase as HTMLInputElement).value == 'amount-down') {
            decreaseSort('data-stock')
        }
    }
    )

let searchFld = document.querySelector('.search');
    (searchFld as HTMLInputElement).oninput = function () {
        let val = this.value.trim()
        if (val !='') {
            dataFields.forEach((elem)=>{
                if(elem.innerText.search(val) == -1) {
                    elem.classList.add('hide')
                } else (elem.classList.remove('hide'))
            })
        } else {
            dataFields.forEach((elem)=>{
                elem.classList.remove('hide')
            })
        }
    }

function fullReset (): void {
    for (let i =0; i<dataFields.length; i++) {
        dataFields[i].classList.remove(
            'categoryInvisible',
            'colorInvisible',
            'popularityInvisible',
            'companyInvisible',
            'hide',
            )
        searchFld.value = ''    
    }
}
document.querySelector('.btn-reset')?.addEventListener('click', fullReset)

class cartItem  {

    constructor(
        public img:string,
        public name: string,
        public cost: number,
        public amount: number
    ){}
}

let cart = []
let toCart = document.querySelector('.in-cart-button')


for(let i=0; i<dataFields.length; i++){
    let prodBas = products[Number(dataFields[i].getAttribute('data-base'))]
    dataFields[i].addEventListener('click', ()=>{
        
        document.querySelector('.personal-name').innerHTML = prodBas.name
        document.querySelector('.personal-realese')?.innerHTML = prodBas.realese
        document.querySelector('.personal-color')?.innerHTML = prodBas.color
        document.querySelector('.personal-company')?.innerHTML = prodBas.company
        document.querySelector('.personal-desc')?.innerHTML = prodBas.description
        document.querySelector('.personal-category')?.innerHTML = prodBas.category
        document.querySelector('.personal-stock')?.innerHTML = prodBas.stock
        document.querySelector('.personal-img')?.src = prodBas.getPath()
        document.querySelector('.personal-price')?.innerHTML = `${prodBas.cost} $`
        document.querySelector('.personal-card')?.classList.remove('personal-hidden')
        let minmaxButtons = document.querySelector('.minmax-btns')
            minmaxButtons?.innerHTML = ''
            let minBtn = document.createElement('button')
                minBtn.classList.add('min-btn')
                minBtn.innerText = '-'
            let plsBtn = document.createElement('button')
                plsBtn.classList.add('plus-btn')
                plsBtn.innerText = '+'
            let currentValue = document.createElement('div')
                currentValue.classList.add('current-value')
                let val:number = 0
                val = 0
                
            minmaxButtons?.append(minBtn)
            minmaxButtons?.append(currentValue)
            minmaxButtons?.append(plsBtn)
            plsBtn.addEventListener('click', valInc)
            minBtn.addEventListener('click', valDec)
            toCart?.addEventListener('click', cartAdding)
            function valInc () {
                if(val < prodBas.stock) {
                    val = val+1
                    currentValue?.innerText = val
                }
            }
            function valDec (): void {
                if (val > 0) {
                    val = val-1
                    currentValue?.innerText = val
                }
            }
            function cartAdding ():void { 
                cart.push(
                    {
                        'id': prodBas.base,
                        'amount': val
                    }
                )
                val = 0
                currentValue.innerText = 0
            } 
        }
    )
}

document.querySelector('.close')?.addEventListener('click', ()=>{
    document.querySelector('.personal-card')?.classList.add('personal-hidden')
})


toCart?.addEventListener('click', fuckshon)
let cartCont = document.querySelector('.cart-cont')
let total = document.querySelector('.total')
let totalbase:number = 0
total.innerText = `Total: ${totalbase}$`

let cartOpen = document.querySelector('.btn-cart')
function fuckshon () {
    for(let i=0; i<cart.length; i++) {
        if (cart[i]['amount'] !==0) {
            let cartCard = document.createElement('div');
            cartCard.classList.add('prod-container');
        let cartImg = document.createElement('img');
            cartImg.src = products[cart[i]['id']].getPath();
            cartImg.classList.add('cartImg')
        let cartH = document.createElement('h4');
            cartH.innerText = products[cart[i]['id']].name 
        let cartAm = document.createElement('span');
            cartAm.innerText = `amount: ${cart[i]['amount']}`
        
        cartCont?.append(cartCard);
        cartCard.append(cartImg);
        cartCard.append(cartH);
        cartCard.append(cartAm)
        
        totalbase = totalbase + cart[i]['amount']*products[cart[i]['id']].cost
        
        total.innerText = `Total: ${totalbase}`
        }
    }
    
}

let cartClear = document.querySelector('.cart-clear')
    cartClear?.addEventListener('click', cartClr)

function cartClr(){
    cart = [];
    totalbase = 0;
    total.innerText = `Total: ${totalbase} $`
    cartCont?.innerHTML = ''
}

let cartCls =  document.querySelector('.cart-cls')
    cartCls?.addEventListener('click', ()=>{
        document.querySelector('.cart')?.classList.add('cart-hidden')
    })
    cartOpen?.addEventListener('click',()=>{
        document.querySelector('.cart')?.classList.toggle('cart-hidden')
    })
