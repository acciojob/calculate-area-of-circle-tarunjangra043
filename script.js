 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
	 let areaCircle = (Math.PI * radius * radius).toFixed(2);
	 alert(`The area of the circle with radius 4 is ${areaCircle}`);
	 
           
}
calculateArea();