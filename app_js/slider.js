const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

export class setSlider{
    changeImage(){
        const sliderImages = $$(".slider-image");
        const sliderButtons = $$(".slider-button");
        let i =1;
        function setImage(){
            if(i<=2 && i>0){
                sliderImages[i-1].classList.remove("selected");
                sliderImages[i].classList.add("selected");
                sliderButtons[i-1].classList.remove("selected");
                sliderButtons[i].classList.add("selected");
                i++;
            }
            else{
                sliderImages[i-1].classList.remove("selected");
                sliderButtons[i-1].classList.remove("selected");
                sliderImages[0].classList.add("selected");
                sliderButtons[0].classList.add("selected");
                i=1;
            }
        };
        (function clickButton(){
            const sliderButtons = $$(".slider-button");
            let a;
            [...sliderButtons].forEach(button => {
                button.onclick = ()=>{
                    a = [...sliderButtons].indexOf(button);
                    if(a!=0){
                        [...sliderImages].forEach((image)=>{
                            image.classList.remove("selected");
                        });
                        [...sliderButtons].forEach((button)=>{
                            button.classList.remove("selected");
                        })
                        i=a;
                    }
                    else {
                        [...sliderImages].forEach((image)=>{
                            image.classList.remove("selected");
                        });
                        [...sliderButtons].forEach((button)=>{
                            button.classList.remove("selected");
                        })
                        i=3;
                    };
                    setImage();
                };
            });
        })();
        setInterval(() => {
            setImage();
        }, 3000);
    }; 
};
