window.addEventListener("load", start, false)

//Initializes an array of image sources
imageArr = ["a.jpg", "b.jpg", "c.jpg", "d.jpg", "e.jpeg", "f.jpeg", "g.jpeg", "h.jpeg", "i.jpg", "j.jpg", "k.jpeg", "l.jpeg", "m.jpeg", "n.jpg", "o.jpg", "p.png"]


function start()
{
	/*
	Function called when window loads
	*/
	
	//Gets a random number from 0-15
	randomIndex = Math.floor(Math.random() * 16)
	
	//Updates src and alt attribute of image
	document.getElementById("image").src = imageArr[randomIndex];
	document.getElementById("image").alt = imageArr[randomIndex]; 
}


x = 0
function changeImage()
{	
	/*
	Function called to change image randomnly
	*/
	
	//Gets the image object
	var image = document.getElementById('image')
	
	//Declares 2 transition styles for the image change then calls the start() function
	if (x%2 ==0)
	{
		image.style.height = "0"
		image.style.opacity =  "0.3"
		setTimeout(function(){image.style.height = "45vw" ;image.style.opacity = "1"; start()}, 1500)
	}
	else
	{
		image.style.width = "0"
		image.style.opacity = '0.3'
		setTimeout(function(){image.style.width = "90vw"; image.style.opacity= "1"; start()}, 1500)
	}
	
	++x
}

function changeTheme(x)
	{
		/*
		A functiom called to change background color of the body 
		*/
		if(x.innerHTML == "<p>To Dark Mode</p>")
		{
			document.getElementById('body').style.backgroundColor = 'black';
			x.innerHTML = "<p>To Light Mode</p>"
		}
		else
		{
			document.getElementById('body').style.backgroundColor = 'white';
			x.innerHTML = "<p>To Dark Mode</p>"
		}
	}