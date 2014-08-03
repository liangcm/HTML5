var canvas=document.getElementById('canvas');
context=canvas.getContext('2d');
context.font='38pt Arial';
context.fillStyle='cornflowerblue';
context.strokeStyle='blue';
context.fillText('Hello World',canvas.width/2 - 150,
canvas.hegiht/2 + 15);
context.strokeText('Hello World', canvas.width/2 - 150,
canvas.height/2 + 15);
