const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt'); 
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('animated-bg');
const animated_bgs_text = document.querySelectorAll('animated-bg-text');

setTimeout(getData, 2500)

function getData(){
    header.innerHTML = '<img src="https://drive.google.com/uc?id=1vsxDygRqj8Ct_Ij3kBW0OanSz60JeTC7" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, fugit!'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">'
    name.innerHTML = 'John Doe'
    date.innerHTML = 'Feb 17, 2022'
}

animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
animated_bgs_text.forEach(bg => bg.classList.remove('animated-bg-text'));
