class Hello {
	sayHello() {
		document.querySelector("#helloDiv").innerHTML = "hello world";
	}

	sayGoodbye() {
		document.querySelector("#goodbyeDiv").innerHTML = "goodbye world";
	}

	sayTheTime() {
		document.querySelector("#timeDiv").innerHTML = "It is currently " + Date.now() + "!!!";
	}

}

var hello = new Hello();
hello.sayHello();

hello.sayGoodbye();

hello.sayTheTime();
