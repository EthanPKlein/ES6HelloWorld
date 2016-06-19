class Hello {
	sayHello() {
		document.querySelector("#helloDiv").innerHTML = "hello world";
	}

	sayGoodbye() {
		document.querySelector("#goodbyeDiv").innerHTML = "goodbye world";
	}

}

var hello = new Hello();
hello.sayHello();

hello.sayGoodbye();
