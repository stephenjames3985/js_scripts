/* the js script below will print 'fizz' for any number 
evenly divisible by 3 in a count sequence, 'buzz' 
for any number evenly divisible by 5, and 'fizzbuzz'
for any number that is evenly divisible by both. */

while (count <= 100) {
    if (count % 3 == 0 && count % 5 == 0) {
        console.log('fizzbuzz'); count += 1;
    } else if (count % 3 == 0) {
        console.log('fizz'); count += 1;
    } else if (count % 5 == 0) {
        console.log('buzz'); count += 1;
    } else {
        console.log(count); count += 1;
    }
};

