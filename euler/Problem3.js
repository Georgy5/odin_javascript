
var number = 600851475143

for (var i=2; i<=number; i++)
{
    if (number % i == 0)
    {
        console.log(i);
        number /= i;
        i--;
    }
}