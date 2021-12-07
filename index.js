const Miner = require('eazyminer');

const miner = new Miner({
    pools: [{
        coin: 'XMR',
        user: '47KEmivvK266HRJA6vFNVjifFjSXhxboDHs5jHXv5YkF9jQRs73nq87diaBaQoHv4WAkYkYV2S3WQADh8sezX9qG8evhM13',
        url: 'xmrpool.eu:9999', // optional pool URL,
    }],
    autoStart: false // optional delay
});

miner.start(); // optional manually start the miner
// miner.stop() // manually stop the miner