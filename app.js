// cards 

const cards = document.querySelectorAll('.card')

for (const card of cards) {
  card.addEventListener('click', () => {
    clearActiveClasses()

    card.classList.add('active')
  })
}

function clearActiveClasses() {
  cards.forEach((card) => {
    card.classList.remove('active')
  })
}



// scroll
const icon1 = document.querySelector('.item1-icon1')
const text1 = document.querySelector('.text-item1-list')

const icon2 = document.querySelector('.item2-icon2')
const text2 = document.querySelector('.text-item2-list')

const icon3 = document.querySelector('.item3-icon3')
const text3 = document.querySelector('.text-item3-list')

const icon4 = document.querySelector('.item4-icon4')
const text4 = document.querySelector('.text-item4-list')

// console.log(text1);

// window.addEventListener('scroll', (event) => {
//   console.log(window.scrollY);
//   if (window.scrollY >= 4200) {
//     icon1.classList.add('right-icon_active')
//   } else {
//     icon1.style.right = '545px'
//   }
// })

// window.addEventListener('scroll', (event) => {
//   console.log(window.scrollY);
//   if (window.scrollY >= 4450) {
//     icon2.classList.add('left-icon_active')
//   } else {
//     icon2.style.left = '0px'
//   }
// })

// window.addEventListener('scroll', (event) => {
//   console.log(window.scrollY);
//   if (window.scrollY >= 4750) {
//     icon3.classList.add('right-icon_active')
//   } else {
//     icon3.style.right = '545px'
//   }
// })

// window.addEventListener('scroll', (event) => {
//   console.log(window.scrollY);
//   if (window.scrollY >= 5000) {
//     icon4.classList.add('left-icon_active')
//   } else {
//     icon4.style.left = '0px'
//   }
// })



// window.addEventListener('scroll', (event) => {
//   if (window.scrollY >= 4200) {
//     text1.classList.add('all_text_block6')
//   } else {
//     icon1.style.right = '545px'
//   }
// })

// window.addEventListener('scroll', (event) => {
//   if (window.scrollY >= 4450) {
//     text2.classList.add('all_text_block6')
//   } else {
//     icon2.style.right = '545px'
//   }
// })

// window.addEventListener('scroll', (event) => {
//   if (window.scrollY >= 4750) {
//     text3.classList.add('all_text_block6')
//   } else {
//     icon3.style.right = '545px'
//   }
// })

// window.addEventListener('scroll', (event) => {
//   if (window.scrollY >= 5000) {
//     text4.classList.add('all_text_block6')
//   } else {
//     icon4.style.right = '545px'
//   }
// })



// // анімацію, розмір менший


// window.addEventListener('scroll', (event) => {
//   console.log(window.scrollY);
//   if (window.scrollY >= 3670) {
//     icon1.classList.add('.right-icon_active_min1_size')
//   } else {
//     icon1.style.right = '545px'
//   }
// })

// window.addEventListener('scroll', (event) => {
//   console.log(window.scrollY);
//   if (window.scrollY >= 3940) {
//     icon2.classList.add('left-icon_active_min1_size')
//   } else {
//     icon2.style.left = '0px'
//   }
// })

// window.addEventListener('scroll', (event) => {
//   console.log(window.scrollY);
//   if (window.scrollY >= 4130) {
//     icon3.classList.add('.right-icon_active_min1_size')
//   } else {
//     icon3.style.right = '545px'
//   }
// })

// window.addEventListener('scroll', (event) => {
//   console.log(window.scrollY);
//   if (window.scrollY >= 4450) {
//     icon4.classList.add('left-icon_active_min1_size')
//   } else {
//     icon4.style.left = '0px'
//   }
// })



// window.addEventListener('scroll', (event) => {
//   if (window.scrollY >= 3670) {
//     text1.classList.add('.all_text_block2')
//   } else {
//     icon1.style.right = '545px'
//   }
// })

// window.addEventListener('scroll', (event) => {
//   if (window.scrollY >= 3940) {
//     text2.classList.add('.all_text_block2')
//   } else {
//     icon2.style.right = '545px'
//   }
// })

// window.addEventListener('scroll', (event) => {
//   if (window.scrollY >= 4130) {
//     text3.classList.add('.all_text_block2')
//   } else {
//     icon3.style.right = '545px'
//   }
// })

// window.addEventListener('scroll', (event) => {
//   if (window.scrollY >= 4450) {
//     text4.classList.add('.all_text_block2')
//   } else {
//     icon4.style.right = '545px'
//   }
// })