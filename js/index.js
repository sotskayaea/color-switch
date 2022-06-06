const colors = [
    '#000000',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

   const refs ={
    startBtn : document.querySelector("button[data-action='start']"),
    stopBtn : document.querySelector("button[data-action='stop']"),
    bodyStyle : document.querySelector('body'),
   }

   const INTERVAL = 1000;
   let timeoutId = null;

   refs.startBtn.addEventListener('click', onStartColorSwitch);
   refs.stopBtn.addEventListener('click',onStopColorSwitch);

   function onStartColorSwitch(){
       refs.startBtn.disabled = true;
       
       timeoutId= setInterval(()=>{
           onColorSwitch()
       }, INTERVAL)  
   }

   function onStopColorSwitch(){
       refs.startBtn.disabled = false;
       clearInterval(timeoutId)
   }


  function onColorSwitch() {
    const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };

    const randomColor = randomIntegerFromInterval(0, colors.length-1);

    refs.bodyStyle.style.backgroundColor = colors[randomColor];
    
  }

   

   

  

