let gridContainer = document.querySelector('.grid_container');
let popularMovies = document.querySelector('#popular_movies');
let leftIcon = document.querySelector(".left_icon")
let rightIcon = document.querySelector(".right_icon")
let bestComedies = document.querySelector('#best_comedies')
let leftIcon1 = document.querySelector('.left_icon1')
let rightIcon1 = document.querySelector('.right_icon1')
let actionAdventure=document.querySelector('#actionAdventure')
let leftIcon2 = document.querySelector('.left_icon2')
let rightIcon2 = document.querySelector('.right_icon2')
let myList = document.querySelector('#my_list')
let rightIcon3=document.querySelector('.right_icon3')
let leftIcon3 =document.querySelector('.left_icon3')
let video1_2=document.querySelector('.video1_2')
let video2_1=document.querySelector('.video2_1')



fetch("./db/videos.json")

    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        data.forEach(video => {
            gridContainer.innerHTML += `
        <div class="grid_card">
                    <video  src="${video.video}" controls></video>
                    <p>${video.tittle}</p>
                </div>
        `
        })
    })


fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8')

    .then(resp => resp.json())
    .then(data => {
        console.log(data);

        data.results.forEach(slide => {
            popularMovies.innerHTML += `
        <div class="grid_card2">
                        <img src="https://image.tmdb.org/t/p/w500/${slide.poster_path}" alt="">
                        <p class="about_text">${slide.title}</p>
                    </div>
        
        `
        })

        let count = 0

        function slider() {
            for (let i = 0; i < popularMovies.children.length; i++) {
                popularMovies.children[i].style.transform = `translateX(${-230 * count}px)`
            }
        }

        setInterval(() => {
            if (count < popularMovies.children.length - 4) {
                count++
                slider()
            } else {
                count = 0
                slider()
            }
        }, 4000)

        leftIcon.addEventListener('click', () => {
            if (count > 0) {
                count--
                slider()
            } else {
                count = 0
                slider()
            }
        })

        rightIcon.addEventListener('click', () => {
            if (count < popularMovies.children.length - 4) {
                count++
                slider()
            } else {
                count = 0
                slider()
            }
        })
    })

fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8')

    .then(resp1 => resp1.json())
    .then(data1 => {
        console.log(data1);

        data1.results.forEach(slide1 => {
            bestComedies.innerHTML += `
        <div class="grid_card2">
                        <img src="https://image.tmdb.org/t/p/w500/${slide1.poster_path}" alt="">
                        <p class="about_text">${slide1.title}</p>
                    </div>
        
        `
        })

        let count1 = 0

        function slider1() {
            for (let i = 0; i < bestComedies.children.length; i++) {
                bestComedies.children[i].style.transform = `translateX(${-230 * count1}px)`
            }
        }

        setInterval(() => {
            if (count1 < bestComedies.children.length - 4) {
                count1++
                slider1()
            } else {
                count1 = 0
                slider1()
            }
        }, 4000)

        leftIcon1.addEventListener('click', () => {
            if (count1 > 0) {
                count1--
                slider1()
            } else {
                count1 = 0
                slider1()
            }
        })

        rightIcon1.addEventListener('click', () => {
            if (count1 < bestComedies.children.length - 4) {
                count1++
                slider1()
            } else {
                count1 = 0
                slider1()
            }
        })


    })

    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8')

    .then(resp2 => resp2.json())
    .then(data2 => {
        console.log(data2);

        data2.results.forEach(slide2 => {
            actionAdventure.innerHTML += `
        <div class="grid_card2">
                        <img src="https://image.tmdb.org/t/p/w500/${slide2.poster_path}" alt="">
                        <p class="about_text">${slide2.title}</p>
                    </div>
        
        `
        })

        let count2 = 0

        function slider2() {
            for (let i = 0; i < actionAdventure.children.length; i++) {
                actionAdventure.children[i].style.transform = `translateX(${-230 * count2}px)`
            }
        }

        setInterval(() => {
            if (count2 < actionAdventure.children.length - 4) {
                count2++
                slider2()
            } else {
                count2 = 0
                slider2()
            }
        }, 4000)

        leftIcon2.addEventListener('click', () => {
            if (count2 > 0) {
                count2--
                slider2()
            } else {
                count2 = 0
                slider2()
            }
        })

        rightIcon2.addEventListener('click', () => {
            if (count2 < actionAdventure.children.length - 4) {
                count2++
                slider2()
            } else {
                count2 = 0
                slider2()
            }
        })
    })

    
fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8')

.then(resp3 => resp3.json())
.then(data3 => {
    console.log(data3);

    data3.results.forEach(slide3 => {
        myList.innerHTML += `
    <div class="grid_card2">
                    <img src="https://image.tmdb.org/t/p/w500/${slide3.poster_path}" alt="">
                    <p class="about_text">${slide3.title}</p>
                </div>
    
    `
    })

    let count3 = 0

    function slider3() {
        for (let i = 0; i < myList.children.length; i++) {
            myList.children[i].style.transform = `translateX(${-230 * count3}px)`
        }
    }

    setInterval(() => {
        if (count3 < myList.children.length - 4) {
            count3++
            slider3()
        } else {
            count3 = 0
            slider3()
        }
    }, 4000)

    leftIcon3.addEventListener('click', () => {
        if (count3 > 0) {
            count3--
            slider3()
        } else {
            count3 = 0
            slider3()
        }
    })

    rightIcon3.addEventListener('click', () => {
        if (count3 < myList.children.length - 4) {
            count3++
            slider3()
        } else {
            count3 = 0
            slider3()
        }
    })
})


fetch("./db/videos2.json")

    .then(resp5 => resp5.json())
    .then(data5 => {
        console.log(data5);
        data5.forEach(video => {
            video1_2.innerHTML += `
        <div class="grid_card7">
                    <video  src="${video.video}" controls></video>
                    <p>${video.tittle}</p>
                </div>
        `
        })
    })

    fetch("./db/videos3.json")

    .then(resp6 => resp6.json())
    .then(data6 => {
        console.log(data6);
        data6.forEach(video => {
            video2_1.innerHTML += `
        <div class="grid_card7">
                    <video  src="${video.video}" controls></video>
                    <p>${video.tittle}</p>
                </div>
        `
        })
    })