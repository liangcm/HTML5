var canvas=document.getElementById('canvas');
context=canvas.getContext('2d');
context.font='38pt Arial';
context.fillStyle='cornflowerblue';
context.strokeStyle='blue';
context.fillText('Hello World',canvas.width/2 - 150,
canvas.hegiht/2 + 15);
// how to drow & stroke text
context.strokeText('Hello World', canvas.width/2 - 150,
canvas.height/2 + 15);

// how to fill a rectangle.
context.fillStyle='#ff0000';
context.fillRect(0,0, 100, 100);

// how to strok a circle.
context.beginPath();
context.arc(canvas.width/2, canvas.height/2, 100, 0, Math.PI*2, true);
context.strokeStyle='red'
context.stroke();

// how to alert sth.
alert('Hello World!');
alert('another alert');
