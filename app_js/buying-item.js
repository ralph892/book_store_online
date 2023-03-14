const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

export class setBuying{
    changeColorItem(){
        const items = $$(".buying button.heart");
        items.forEach(item => {
            item.onclick = ()=>{
                if(item.classList.contains("checked")){
                    item.classList.remove("checked");
                }
                else{
                    item.classList.add("checked");
                }
            }  
        });
    };
    addCart(){
        const buttons = $$(".buying button.add");
        const items = $$(".card");
        const cartAmount = $(".cart-amount");
        console.log(items);
        let cart = [];
        buttons.forEach(button =>{
            button.onclick = ()=>{
                let i = [...buttons].indexOf(button);
                let item = (`${items[i].classList}`);
                cart.push(item);
                cartAmount.innerText = cart.length;
            }
        });
        return cart;
    }
}