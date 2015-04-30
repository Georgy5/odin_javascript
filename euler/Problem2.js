var a = 0;
var b = 1
var sum = 0;
var even = 0;

while (sum<4000000)
{
	sum = a + b;
	a=b;
	b=sum
	if (sum%2===0)
	{
	    even+=sum;
	}
};
console.log(even);