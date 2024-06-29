
// emoji move effect js code

let emojiContainer = document.querySelector('.images-popups-container');
let emoji = document.querySelector('.emoji');
let emojiFace = document.querySelector('.emoji-face');
let emojiMouth = document.querySelector('.mouth');

function moveEmoji(target)
{
    let getwrapper = emojiContainer.getBoundingClientRect();
    let getX = target.clientX - (getwrapper.left + getwrapper.width / 2); //getting the position and width of emoji container
    let getY = target.clientY - (getwrapper.top + getwrapper.height / 2); //getting the position and height of emoji container

    let emojiMaxMovement = 130;
    let emojiFaceMovement = 150;
    let emojiMouthMovement = 150;

    let emojiMaxMovementX = (getX / getwrapper.width) * emojiMaxMovement;
    let emojiMaxMovementY = (getY / getwrapper.height) * emojiMaxMovement;

    let emojiFaceMovementX = (getX / getwrapper.width) * emojiFaceMovement;
    let emojiFaceMovementY = (getY / getwrapper.height) * emojiFaceMovement;

    let emojiMouthMovementX = (getX / getwrapper.width) * emojiMouthMovement;
    let emojiMouthMovementY = (getY / getwrapper.height) * emojiMouthMovement;


    emoji.style.transform = `translate(${emojiMaxMovementX}px, ${emojiMaxMovementY}px)`;
    emojiFace.style.transform = `translate(${emojiFaceMovementX}px, ${emojiFaceMovementY}px)`;
    emojiMouth.style.transform = `translate(${emojiMouthMovementX}px, ${emojiMouthMovementY}px)`;

}

emojiContainer.addEventListener('mousemove',(targetelem)=>{
    moveEmoji(targetelem);
})

emojiContainer.addEventListener('mouseleave',(targetelem)=>{
    emoji.style.transform = ``;
    emojiFace.style.transform = ``;
    emojiMouth.style.transform = ``;
})


let getallImages = document.querySelectorAll('.images');

getallImages.forEach((targetImg)=>{
    targetImg.addEventListener('click',()=>{
        // Save the original background image
        let originalBgImage = targetImg.style.backgroundImage;
        let innerTextGet = targetImg.innerHTML;
        targetImg.innerHTML = "";
        // Set GIF image
        targetImg.style.backgroundImage = "url('./images/burst.gif')";
        targetImg.style.backgroundSize = "contain";
        targetImg.style.backgroundRepeat = "no-repeat";
        targetImg.style.pointerEvents = "none";
        setTimeout(()=>{
            targetImg.style.visibility = "hidden";
           
        },400);
      
        targetImg.style.border = "none";

        setTimeout(()=>{
            // Restore the original background image
            targetImg.style.backgroundImage = originalBgImage;

            // Restart animation
            targetImg.style.animation = "imageAnim 5s var(--animDelay) linear infinite";
            targetImg.style.visibility = "visible";
            targetImg.style.backgroundSize = "cover";
            targetImg.style.backgroundRepeat = "repeat";
            targetImg.innerHTML = innerTextGet;
            targetImg.style.pointerEvents = "all";
        }, 3000); // Wait for 3 second before restoring the original image
    })
})

$('.abouts').tilt({
    glare: true,
    maxGlare: .5
})

// js code for main container section 
let mainContainer = document.querySelector('.main-container');
if(mainContainer)
    {
        gsap.to(mainContainer,{
            rotate: "180deg",
            duration:2,
            scrollTrigger : {
                trigger : mainContainer,
                scroller : "body",
                // markers : true,
                start : "top -10%",
                end :  "top -200%",
                scrub : 1,
            }
        })
    }

// js code for image trail 
let imageTrail = document.querySelector('.image-trail');

let imagesStore = [
    './images/krrish.jpg',
     './images/profile-pic.jpg',
      './images/hover-5.jpg',
       './images/hover-8.jpg',
        './images/img-2.jpg'
];
console.log(imagesStore);


let getIndex = 0;
function moveTrail(xVal, yVal)
{   
  
    window.addEventListener('mousemove',(e)=>{
        let storeArrayImages = imagesStore[getIndex];
        xVal = e.pageX;
        yVal = e.pageY;
        let createBox = document.createElement('img');
        createBox.setAttribute('class','trailImage');
        createBox.src = storeArrayImages;
        createBox.style.left = xVal + 'px';
        createBox.style.top = yVal + 'px';
        imageTrail.appendChild(createBox);
        getIndex = (getIndex + 1) % imagesStore.length;

        setTimeout(()=>{
            createBox.style.opacity = "0";
        },100);

        createBox.addEventListener('transitionend', () => {
            imageTrail.removeChild(createBox);
        });
    })
    
}
moveTrail();


// gsap code for scrolling the our works section to X-direction
let ourRealStorySection = document.querySelector('.our-real-time-works');
let ourRightSectionSlides = document.querySelector('.our-real-time-works-right-data');
let t1 = gsap.timeline();

t1.to(ourRightSectionSlides,{
    transform:'translateX(-200%)',
    duration:1.5,
    delay:1,
    scrollTrigger: {
        trigger: ourRealStorySection,
        scroller : "body",
        // markers: true,
        start : "top 0%",
        end : "top -100%",
        scrub: 2,
        pin: true,
    }

})

let realTimeLeftSpans = document.querySelector('.our-real-time-works-left');
    gsap.from(realTimeLeftSpans,{
        x : -100,
        opacity : 0,
        duration: 1,
        scrollTrigger : {
            trigger : realTimeLeftSpans,
            scroller : "body",
            // markers: true,
            start : "top 50%",
            end : "top 0%",
            stagger : 0.5,
            scrub:1,
        }
    })

    gsap.from(".flower-img",{
        x : 400,
        rotate: 180,
        opacity : 0,
        duration: 1,
        scrollTrigger : {
            trigger : ".flower-img",
            scroller : "body",
            // markers: true,
            start : "top 120%",
            end : "top 0%",
            stagger : 0.5,
            scrub:2,
        }
    })


// js code for animating the circle
let SomeAestheticsSection = document.querySelector('.some-aesthetics-center');
let centerText = document.querySelector('.some-aesthetics-center i');
let circleText = document.querySelector('.circle-text');
if(SomeAestheticsSection && centerText && circleText)
    {
        SomeAestheticsSection.addEventListener('mousemove',(trgt)=>{
            let gettingContainer = SomeAestheticsSection.getBoundingClientRect();
            let getXValue = trgt.clientX - (gettingContainer.left + gettingContainer.width / 2);
            let getYValue = trgt.clientY - (gettingContainer.top + gettingContainer.height / 2);

            let centerTextAnim = 50;
            let circleTextAnim = 80;

            let centerTextValueX = (getXValue / gettingContainer.width) * centerTextAnim;
            let centerTextValueY = (getYValue / gettingContainer.height) * centerTextAnim;

            let circleTextValueX = (getXValue / gettingContainer.width) * circleTextAnim;
            let circleTextValueY = (getYValue / gettingContainer.height) * circleTextAnim;

            centerText.style.transform = `translate(${centerTextValueX}px, ${centerTextValueY}px)`;
            circleText.style.transform = `translate(${circleTextValueX}px, ${circleTextValueY}px) rotate(180deg)`;
        })

        SomeAestheticsSection.addEventListener('mouseleave',()=>{
            centerText.style.transform = ``;
            circleText.style.transform = ``;
        })
    }

function SomeAesthetics()
{
    let aestheticsText = document.querySelector('.some-aesthetics');
    let aestheticsTextH1 = document.querySelector('.some-aesthetics-text h1');
    let a1 = gsap.timeline();
    a1.to(aestheticsTextH1,{
        opacity:1,
        transform : `translateX(-100%)`,
        duration:1.5,
        // height:200,
        paddingTop:15,
        paddingBottom:15,
        scrollTrigger : 
        {
            trigger : aestheticsText,
            scroller : "body",
            // markers:true,
            start: "top 0",
            end: "top -100%",
            scrub: 3,
            pin:true,
        }
    })
    gsap.from('.some-aesthetics-center',{
        width:0,
        scrollTrigger: {
            trigger : '.some-aesthetics-center',
            scroller : 'body',
            // markers: true,
            start: "top 40%",
            end : "top -20%",
            scrub : 2,
        }
    })
    
    gsap.from('.scroll-cool',{
        y:-1000,
        opacity:0,
        duration:2,
        scale:1,
        scrollTrigger:{
            trigger:".circle-text",
            scroller:"body",
            start: "top 50%",
            end: "top 20%",
            // markers:true,
        }
    })    
}
if(SomeAesthetics())
    {
        SomeAesthetics();
    }

function hoversandMore()
{
    // js code for awesome hovers
let hoverTextArray = [
    {
        indexNum:"01",
        text:"Landing Page Designs",
        bgColor:"./images/special-1.jpg",
        txtColor:"#3940CB",
    },
    {
        indexNum:"02",
        text:"Completely Responsive",
        bgColor:"./images/special-2.jpg",
        txtColor:"white",
    },
    {
        indexNum:"03",
        text:"Scrolling Dynamics",
        bgColor: "./images/special-3.avif",
        txtColor:"#FBBEBB",
    },
    {
        indexNum:"04",
        text:"User Interactions",
        bgColor:"./images/special-4.avif",
        txtColor:"#3940CB",
    },
    {
        indexNum:"05",
        text:"Cost Friendly",
        bgColor:"./images/special-5.jpg",
        txtColor:"white",
    },
]
let hoverIndex = 0;
window.addEventListener('load',()=>{
    createTiles();
})

let hoverTextTilesContainer = document.querySelector('.hovers-section-contents');

function createTiles()
{
    for(let i = 0; i < hoverTextArray.length; i++)
        {
            let createHoverText = `<div class="hovers-section-contents-tiles">
                                        <div class="hover-data">
                                            <h3 class="h3Effect">0${i+1}</h3>
                                            <h3 class="h3Effect">0${i+1}</h3>
                                        </div>
                                        <div class="hover-data">
                                            <h3 class="h3Text">${hoverTextArray[i].text}</h3>
                                            <h3 class="h3Text">${hoverTextArray[i].text}</h3>
                                        </div>
                                        <div class="hover-cards" style = "background:url('${hoverTextArray[i].bgColor}'); background-size:cover; background-position:center;">
                                            <div class="hover-cards-insides">
                                                <h2 style = "color:${hoverTextArray[i].txtColor}">${hoverTextArray[i].text}</h2>
                                                <h1 style = "color:${hoverTextArray[i].txtColor}">0${i+1}</h1>
                                            </div>
                                        </div>
                                    </div>`

                hoverTextTilesContainer.insertAdjacentHTML('beforeend',createHoverText);
               
        }
        
        hoverCardMove();
}

    function hoverCardMove()
    {   
            hoverTextTilesContainer.querySelectorAll('.hovers-section-contents-tiles').forEach((targetCardHovers)=>{
                targetCardHovers.addEventListener('mousemove',(targetCard)=>{
                    let getTilesBoundings = document.querySelector('.hovers-section-contents-tiles').getBoundingClientRect();
                    let valueX = targetCard.clientX - (getTilesBoundings.left + getTilesBoundings.width / 2);
                    let valueY = targetCard.clientY - (getTilesBoundings.top + getTilesBoundings.height / 2);

                    let moveMaxValue = 500;

                    let getDiffX = (valueX / getTilesBoundings.width) * moveMaxValue;
                    let getDiffY = (valueY / getTilesBoundings.height) * moveMaxValue;

                    document.querySelectorAll('.hover-cards').forEach((styleCard)=>{
                        styleCard.style.transform = `translate(${getDiffX}px, 0)`;
                    })
                })
            })
        
    }

}

if(hoversandMore())
    {
        hoversandMore();
    }


document.addEventListener('DOMContentLoaded', function() {
    let scrollTopBtn = document.querySelector('.scrollTopBtn');
        gsap.from(scrollTopBtn, {
            x:120,
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: scrollTopBtn,
                scroller: "body",
                // markers: true,
                start: "top 0%",
                scrub : 2  // Corrected pin property
            }
        });
});


function scrollToTop()
{
    window.scrollTo(0,0);
}
if(scrollToTop())
    {
        scrollToTop();
    }


// to add matter js physics effect on your canvas
function addMatters() {

    let imgArray = [
        './images/pills/1.png',
        './images/pills/2.png',
        './images/pills/3.png',
        './images/pills/4.png',
        './images/pills/5.png',
        './images/pills/6.png',
        './images/pills/7.png',
        './images/pills/8.png',
        './images/pills/9.png',
        './images/pills/10.png',
        './images/pills/11.png',
        './images/pills/12.png',
        
    ]

        var Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Composites = Matter.Composites,
            Common = Matter.Common,
            MouseConstraint = Matter.MouseConstraint,
            Mouse = Matter.Mouse,
            Composite = Matter.Composite,
            Bodies = Matter.Bodies;
    
        // create engine
        var engine = Engine.create(),
            world = engine.world;
    
        // create renderer
        var canvas = document.getElementById('canvasPills');
        var render = Render.create({
            canvas: canvas,
            engine: engine,
            options: {
                background: "none",
                wireframes: false,
            }
        });
    
        function updateCanvasSize() {
            render.options.width = window.innerWidth;
            render.options.height = window.innerHeight;
            render.canvas.width = window.innerWidth;
            render.canvas.height = window.innerHeight;
        }
    
        updateCanvasSize();
        Render.run(render);
    
        // create runner
        var runner = Runner.create();
        Runner.run(runner, engine);
    
        // Now creating circle shapes to animate
        for (let c = 0; c < imgArray.length; c++) {
            let createPills = Bodies.circle(window.innerWidth / 2, 100 + c * 50, 70, {
                restitution: 1, // High restitution for bouncy effect
                render: {
                    sprite: {
                        texture: imgArray[c],
                        xScale: 0.7,
                        yScale: 0.6,
                    }
                }
            });
            Composite.add(world, createPills);
        }

        // add mouse control
        var mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.9,
                    render: {
                        visible: false
                    }
                }
            });
    
        Composite.add(world, mouseConstraint);
    
        var boundaries = [
            Bodies.rectangle(window.innerWidth / 2, -5, window.innerWidth, 10, { 
                isStatic: true,
                render: {
                    fillStyle: 'grey',
                }
            }),
            Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 5, window.innerWidth, 10, { 
                isStatic: true,
                render: {
                    fillStyle: 'grey',
                }
            }),
            Bodies.rectangle(window.innerWidth + 5, window.innerHeight / 2, 10, window.innerHeight, { 
                isStatic: true,
                render: {
                    fillStyle: 'grey',
                }
            }),
            Bodies.rectangle(-5, window.innerHeight / 2, 10, window.innerHeight, { 
                isStatic: true,
                render: {
                    fillStyle: 'grey',
                }
            })
        ];
    
        Composite.add(world, boundaries);
    
        // keep the mouse in sync with rendering
        render.mouse = mouse;
    
        // fit the render viewport to the scene
        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: window.innerWidth, y: window.innerHeight }
        });
    
        // Update canvas size and boundaries on window resize
        window.addEventListener('resize', function() {
            updateCanvasSize();
    
            Composite.remove(world, boundaries);
            boundaries = [
                Bodies.rectangle(window.innerWidth / 2, -5, window.innerWidth, 10, { 
                    isStatic: true,
                    render: {
                        fillStyle: 'grey',
                    }
                }),
                Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 5, window.innerWidth, 10, { 
                    isStatic: true,
                    render: {
                        fillStyle: 'grey',
                    }
                }),
                Bodies.rectangle(window.innerWidth + 5, window.innerHeight / 2, 10, window.innerHeight, { 
                    isStatic: true,
                    render: {
                        fillStyle: 'grey',
                    }
                }),
                Bodies.rectangle(-5, window.innerHeight / 2, 10, window.innerHeight, { 
                    isStatic: true,
                    render: {
                        fillStyle: 'grey',
                    }
                })
            ];
            Composite.add(world, boundaries);
    
            // Fit the render viewport to the scene
            Render.lookAt(render, {
                min: { x: 0, y: 0 },
                max: { x: window.innerWidth, y: window.innerHeight }
            });
        });

         // Capture scroll events on the canvas and scroll the page
         canvas.addEventListener('wheel', function(event) {
            event.preventDefault(); // Prevent the default scroll behavior
            window.scrollBy(0, event.deltaY); // Manually scroll the page
        });
    }
    
    
function addTimingMatterGsap()
{
    let addMattersCalled = false;
    gsap.to('#canvasPills', {
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
            trigger: '#canvasPills',
            scroller: 'body',
            // markers: true,
            start: 'top 0%',
            end: 'top 80%',
            onEnter: () => {
                if (!addMattersCalled) {
                    addMatters();
                    addMattersCalled = true;
                }
             }
        }
    });
}

if(addTimingMatterGsap())
    {
        addTimingMatterGsap();
    }


// add gsap animations to canvas container contents
function addGSAPAnimations()
{
    gsap.timeline({
        scrollTrigger: {
          trigger: ".animate-tags",
          scroller: "body",
        //   markers: true,
          start: "top 60%",
          end: "top 0%",
          scrub: 1,
        }
      }).from('.animate-tags', {
        x: -200,
        duration: 1,
        opacity: 0,
        stagger: 0.5
      }); 
}
if(addGSAPAnimations())
    {
        addGSAPAnimations();
    }
    
    


    
function popupsScroll()
{
    let scrollPopupCards = gsap.timeline();
    scrollPopupCards.from('.some-popups .awesome-popups',{
        y : "1000px",
        scale : 0.2,
        rotateY : "120deg",
        rotate : 45,
        // opacity : 0,
        duration: 1,
        stagger : 0.5,
        
        scrollTrigger : {
            trigger : ".some-popups",
            scroller : "body",
            // markers : true,
            start: "top 0%",
            end : "top -300%",
            scrub : 2,
            pin : true,
        }
    })

        let scrollPopup = gsap.timeline();

    scrollPopup.to('.some-popups .some-popups-texts',{
        x : " -40%",
        background:"black",
        duration : 1,
        color:"#B3EB16",
        
        scrollTrigger: {
            trigger : ".some-popups .some-popups-texts",
            scroller : "body",
            // markers: true,
            start: "top 0%",
            end : "top -500%",
            scrub : 1,
            pin : true,
        }
    })
}

if(popupsScroll())
    {
        popupsScroll();
    }

// js code for play button popup 3d gallery 
function openslides()
{
    let threeDSlides = document.querySelector('.threeD-slides');
    let audioSrc = document.querySelector('.bgMusic');
    let playBtn = document.querySelector('#playBtn');
    if(threeDSlides && playBtn)
        {
            playBtn.addEventListener('click',()=>{
                threeDSlides.classList.add('active');
                if(audioSrc.paused)
                    {
                        audioSrc.play();
                    }
                    else
                    {
                        audioSrc.pause();
                    }
            })
        }
    
    let cutPopup = document.querySelector('#cutPopup');
    if(cutPopup)
        {
            cutPopup.addEventListener('click',()=>{
                threeDSlides.classList.remove('active');
                audioSrc.pause();
            })
        }
    
}

if(openslides())
    {
        openslides();
    }

// js code for active the preloader number digits 
let digitOne = document.querySelectorAll('#firstdigit span');
let digitTwo = document.querySelectorAll('#sedonddigit span');
let digitThree = document.querySelectorAll('#thirddigit span');

if(digitOne && digitTwo && digitThree)
    {
            gsap.to(digitOne,{
                y : "-30px",
                duration: 4,
                delay:1.8,
            })
            gsap.from(digitTwo,{
                y : "-300px",
                duration: 4,
                delay:1.5,
            })
            gsap.from(digitThree,{
                y : "-300px",
                duration: 4,
                delay:1,
            })

    }

let preloaderText = document.querySelectorAll('.preoloader-tiles-texts');
let preloaderTextH1 = document.querySelectorAll('.preoloader-tiles-texts h1');
let preloaderMain = document.querySelector('.preloader');
if(preloaderText && preloaderTextH1 && preloaderMain)
    {
        gsap.from(preloaderText,{
            // rotateX : 360,
            scale : 0,
            y:"-1000px",
            // x: "500px",
            duration: 1,
            ease: "bounce.out",
            stagger : 0.2,
        })

        gsap.to(preloaderTextH1,{
            transform: "scaleY(1.4) scaleX(1.2)",
            duration: 1,
            delay: 3,
            ease: "bounce.out",
        })

        gsap.to(preloaderMain,{
            y: "-100%",
            // scale: 0,
            duration: 2,
            delay: 5,
            // ease: "bounce.out",
        })

    }

