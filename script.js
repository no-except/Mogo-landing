window.addEventListener('DOMContentLoaded',()=>{
    const burger = document.querySelector('.burger');
    const burgerpage = document.querySelector('.burgerpage');
    burger.addEventListener('click',()=>{
        burger.classList.toggle('active');
        burgerpage.classList.toggle('_active');
        document.body.classList.toggle('_active');
    });
    const numbers = document.querySelectorAll('.number__1');
    let a = [];
    numbers.forEach((item)=>{
        a.push(Number.parseInt(item.textContent));
        item.textContent = '0';
    });
    numbers.forEach((item,index)=>{
        setInterval(()=>{
            if (Number.parseInt(item.textContent)<a[index]){
                item.textContent = `${Number.parseInt(item.textContent)+1}`;
            }
        },2000/a[index]);
    });
    let tabs = document.querySelectorAll('.body__item__text');
    let arrows = document.querySelectorAll('.arrow img');
    let subflex = document.querySelectorAll('.item__subflex');
    tabs.forEach(item=>{
        item.style.display = 'none';
    });
    subflex.forEach(item=>{
        item.style.border = 'none';
    })
    arrows.forEach(item=>{
        item.src = "img/bottom.png";
    });
    arrows.forEach((item,index)=>{
        if (index == 0){
            if (item.src.slice(item.src.length-5,item.src.length) == "m.png"){
                item.src = "img/top.png";
                tabs[index].style.display = 'block';
                subflex[index].style.borderBottom = '2px solid #b1b1b1';
            }
            else {
                item.src = "img/bottom.png";
                tabs[index].style.display = 'none';
                subflex[index].style.border = 'none';
            }
        }
    });
    arrows.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            if (item.src.slice(item.src.length-5,item.src.length) == "m.png"){
                item.src = "img/top.png";
                tabs[index].style.display = 'block';
                subflex[index].style.borderBottom = '2px solid #b1b1b1';
            }
            else {
                item.src = "img/bottom.png";
                tabs[index].style.display = 'none';
                subflex[index].style.border = 'none';
            }
        });
    });
    let slider = document.querySelector('.slider__inner');
    let leftarrow = document.querySelector('.arrow__left');
    let rightarrow = document.querySelector('.arrow__right');
    let slides = document.querySelectorAll('.slide');
    let sliderIndex = 1;
    let width = Number.parseInt(window.getComputedStyle(slides[0],null).getPropertyValue("width"));
    let slider1 = document.querySelector('.slider__inner1');
    let leftarrow1 = document.querySelector('.arrow__left1');
    let rightarrow1 = document.querySelector('.arrow__right1');
    let slides1 = document.querySelectorAll('.slide1');
    let sliderIndex1 = 1;
    let width1 = Number.parseInt(window.getComputedStyle(slides1[0],null).getPropertyValue("width"));
    function showSlide(n){
        slider.style.transform = `translateX(-${(sliderIndex-1)*width}px)`;
    }
    function showSlide1(n){
        slider1.style.transform = `translateX(-${(sliderIndex1-1)*width1}px)`;
    }

    leftarrow.addEventListener('click',()=>{
        sliderIndex--;
        if (sliderIndex == 0){
            sliderIndex = slides.length;
        }
        showSlide(sliderIndex);
    });
    rightarrow.addEventListener('click',()=>{
        sliderIndex++;
        if (sliderIndex == slides.length+1){
            sliderIndex = 1;
        }
        showSlide(sliderIndex);
    });

    leftarrow1.addEventListener('click',()=>{
        sliderIndex1--;
        if (sliderIndex1 == 0){
            sliderIndex1 = slides1.length;
        }
        showSlide1(sliderIndex1);
    });
    rightarrow1.addEventListener('click',()=>{
        sliderIndex1++;
        if (sliderIndex1 == slides1.length+1){
            sliderIndex1 = 1;
        }
        showSlide1(sliderIndex1);
    });


    const images = document.querySelectorAll('.img1');
    const links = document.querySelectorAll('.links1');
    images.forEach((item,index)=>{
        item.addEventListener('mouseenter',()=>{
            links[index].style.opacity = 1;
        });
        item.addEventListener('mouseleave',()=>{
            links[index].style.opacity = 0;
        });
    });
    links.forEach((item,index)=>{
        item.addEventListener('mouseenter',()=>{
            links[index].style.opacity = 1;
        });
        item.addEventListener('mouseleave',()=>{
            links[index].style.opacity = 0;
        });
    });
    const btn = document.querySelector('.body__btn');
    const element = document.querySelector('.about__us')
    btn.addEventListener('click',()=>{
       element.scrollIntoView({
        behavior: 'smooth'
       });
    })
});