const randomBtn = document.getElementById('random-btn');
const coinEL = document.querySelectorAll('.side');
const coinContainer = document.querySelector('.coin-container');


function randomChoice()
{
    const chices = ['Heads', 'Tails'];
    const result = chices[Math.floor(Math.random() * chices.length)];
    return result;

}


randomBtn.addEventListener('click', () => {
    animateCoin()
    
    
    const result  = randomChoice();

   coinEL.forEach( coin => {
        coin.addEventListener('animationend', () => {
            if (result === 'Heads')
            {
        
                 coin.style.display = coin.classList.contains('head') ? 'block' : 'none';
                 console.log('heads')
                 
            }else if (result === 'Tails') {
                 coin.style.display = coin.classList.contains('tails') ? 'block' : 'none';
                 console.log('tails');
                 
            }
        },{once: true});
   });
});

function animateCoin()
{
    coinEL.forEach((coin) => {
        const animClass = coin.classList.contains('head') ? 'spinHeads' : 'spinTails';
        coin.style.animation = 'none'
        void coin.offsetWidth;
       coin.style.animation = `${animClass} 2s ease-in-out`;
    })
     

}