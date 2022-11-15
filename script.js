
// let circle = document.querySelector('#circle');

// window.addEventListener('mousemove', function(details){
//     let xValue = details.pageX;
//     let yValue = details.pageY;

//    this.setTimeout(function() {
//     circle.style.top = yValue + 'px';
//     circle.style.left = xValue + 'px';
//    } ,100)

   

// })

// let circle = document.querySelector('#circle');

// window.addEventListener('mousemove' , function(details){

//     let xValue  = details.pageX;
//     let yValue =details.pageY;

//     this.setTimeout(function(){
//         circle.style.top = yValue + 'px';
//         circle.style.left = xValue + 'px';
//          } ,100)    
// })

let circle = document.querySelector('#circle');

window.addEventListener('mousemove' , function(details){

    let xValue = details.pageX;
    let yValue = details.pageY;

    this.setTimeout(function(){

        circle.style.top = yValue + 'px';
        circle.style.left = xValue + 'px';

    } ,100)
})

