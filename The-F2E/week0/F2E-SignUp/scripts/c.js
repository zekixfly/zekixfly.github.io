var buffer = 0,
				i=0;

// TestApi: https://cnodejs.org/api/v1/topics
for(i; i<=10000000; ++i) {
	buffer = i;
}
console.log('It\'s c.js Buffer: '+buffer+' MicroSeconds.\n');

