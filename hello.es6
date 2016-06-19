class Hello {
	sayHello() {
		document.querySelector("#helloDiv").innerHTML = "hello world";
	}
}

var hello = new Hello();
hello.sayHello();