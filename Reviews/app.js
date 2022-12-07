const reviews = [
    {
      id: 0,
      name: "luna lovegood",
      job: "web developer",
      img:
        "./person-1.jpeg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 1,
      name: "hermione granger",
      job: "web designer",
      img:
        "./hermione.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 2,
      name: "harry potter",
      job: "intern",
      img:
        "./harry.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    }
]
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
 
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randBtn = document.querySelector('.random-btn');

let currentItem = 0;

function profile(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

}

window.addEventListener('DOMContentLoaded',profile);
prevBtn.addEventListener('click',function(){
    if (currentItem != 0){
        currentItem --;
        profile();
    }else{
        currentItem == 0;
        profile();
    }
})

nextBtn.addEventListener('click',function(){
    if (currentItem != 2){
        currentItem ++;
        profile();
    }else{
        currentItem == 2;
        profile();
    }
})
randBtn.addEventListener('click',function(){
    currentItem = Math.floor(Math.random() * 3);
    profile()
});