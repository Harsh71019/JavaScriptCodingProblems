//using normal loop
function fib(n) {
	var a =0;
	var b =1 ;
	var f= 1 ;

	for(i=2 ; i<=n ; i++) {
		f=a+b;
		a=b;
		b=f;
	}
	return f;

}
fib(1477)


//using recursive function

function fib(n) {
	if(n<=2) {
		return 1;
	} else {
		return this.fib(n-1) + this.fib(n-2);
	}
}

fib(2)