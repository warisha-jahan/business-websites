//  V"']]]]bgsap.registerPlugin(ScrollTrigger);
gsap.to(".main-bottle", {
    scrollTrigger: {
        trigger: ".features",
        start: "top 80%",
        end: "end 30%",
        scrub: 3,
    },
    y: 750,
    x: -300,
    scale: 0.8
});


const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power2.out"
    });
});



const bottle = document.querySelector('.feature-bottle');

bottle.addEventListener('mousemove', (e) => {
    const rect = bottle.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    gsap.to(bottle, {
        rotationX: -rotateX,
        rotationY: rotateY,
        duration: 0.3,
        transformPerspective: 500,
        ease: "power2.out"
    });
});

bottle.addEventListener('mouseleave', () => {
    gsap.to(bottle, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: "power2.out"
    });
});






const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");

    }
    else {
        header.classList.remove("scrolled");

    }
})

window.addEventListener("load", () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('show');
})


window.addEventListener('load', () => {

    const logo = document.querySelector('.logo');
    const links = document.querySelectorAll('.nav-links li');
    const btn = document.querySelector('.btn');


    setTimeout(() => {
        logo.classList.add('show-logo');
    }, 200);



    setTimeout(() => {
        btn.classList.add('show-btn');
    }, 600);

});


// window.addEventListener('load', () => {
//     const links = document.querySelectorAll('.nav-links li');

//     links.forEach((link, index) => {
//         setTimeout(() => {
//             link.style.opacity = "1";
//             link.style.transform = "translateY(0)";
//         }, index * 200);
//     });
// });









window.addEventListener("load", () => {
    const links = document.querySelectorAll(".nav-links li ");
    links.forEach((link, index) => {
        setTimeout(() => {
            link.style.opacity = "1";
            link.style.transform = "translateY(0px)";
        }, index * 200)
    });
});


window.addEventListener("scroll", () => {
    const featureBox = document.querySelectorAll(".feature-box");

    featureBox.forEach((boxex, index) => {
        const featuredTop = boxex.getBoundingClientRect().top;
        console.log(featuredTop)

        setTimeout(() => {
            if (featuredTop < windowHeight * 0.9) {
                boxex.classList.add("active");

            }

            else {
                boxex.classList.remove("active")
            }
        }, index * 200)




    })


})


window.addEventListener("scroll", () => {

    const portfolio = document.querySelectorAll(".item");
    // console.log(portfolio)

    portfolio.forEach((images, index) => {
        const galleryTop = images.getBoundingClientRect().top;
        setTimeout(() => {
            if (galleryTop < windowHeight * 0.8) {
                images.classList.add("active");
            }
            else {
                images.classList.remove("active")
            }
        }, index * 150)
    })


})




const windowHeight = window.innerHeight;

window.addEventListener('scroll', () => {

    const headings = document.querySelectorAll('.animated-heading');
    const windowHeight = window.innerHeight;

    headings.forEach((heading) => {

        const sectionTop = heading.getBoundingClientRect().top;

        if (sectionTop < windowHeight * 0.8) {
            heading.classList.add('active');
        } else {
            heading.classList.remove('active');
        }

    });

});




let index = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.review').length;



function slideReviews() {
    index++;
    if (index >= totalSlides) {
        index = 0;

    }

    slides.style.transform = `translateX(-${index * 100}%)`
}

setInterval(slideReviews, 5000)


const select = document.getElementById("quantity");
const product_bottle = document.getElementById("Product-bottle");
let price = document.querySelector(".Price");


select.addEventListener("change", function () {

    product_bottle.style.opacity = "0";
    price.style.opacity = "0";

    setTimeout(() => {

        if (select.value === "750ML") {
            product_bottle.src = "images/maib-bottle.png";
            price.innerHTML = "Rs 399/-";
        } 
        else if (select.value === "250ML") {
            product_bottle.src = "images/small.png";
            price.innerHTML = "Rs 250/-";
        }

        product_bottle.style.opacity = "1";
        price.style.opacity = "1";

    }, 300);
});




const openBtns = document.querySelectorAll(".btn, .menu-btn");
const popup = document.getElementById("popup");
const purchaseBtn = document.querySelector(".purchase-btn");


openBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        popup.classList.add("active");
    });
});


popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.classList.remove("active");
    }
});
purchaseBtn.addEventListener("click", () => {
    const selected = select.value;

    const message = `Hello, I want to order Lemon Fresh ${selected}`;
    const phone = "923440398917"; 

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
});












// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

// OPEN
hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

// CLOSE BUTTON
closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

// CLOSE ON OUTSIDE CLICK
window.addEventListener("click", (e) => {
    if (e.target === mobileMenu) {
        mobileMenu.classList.remove("active");
    }
});

// CLOSE ON LINK CLICK
document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});