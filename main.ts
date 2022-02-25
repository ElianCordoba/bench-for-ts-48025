import { readFileSync } from "fs";
import { scan as ts_scan } from "./scanners/ts/scanner";
import { scan as pr_scan } from "./scanners/pr/scanner";

const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;

// Increase the number of samples if you see too much variance
// Benchmark.options.minSamples = 500;

const file = readFileSync(`${__dirname}/../data/checker.ts`, { encoding: 'utf-8' })

// Assigning the scan function to a variable and manually freeing that memory is required so that the first run does not have performance implications for the second one,
// otherwise some memory will still be allocated. My tests show that without this the first run is always faster than the second one :S
suite
  .add('Main', function () {
    let scan = ts_scan(file);
    scan = undefined;
  })
  .add('Optimized', function () {
    let scan = pr_scan(file)
    scan = undefined;
  })
  .on('cycle', function (event: any) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    //@ts-ignore
    const tsMean = this[0].stats.mean;
    //@ts-ignore
    const prMean = this[1].stats.mean;

    const name = prMean < tsMean ? 'Optimized' : 'Main';
    const percentageDifference = Math.abs((tsMean / prMean) * 100 - 100);

    console.log(`Fastest is ${name} by ${percentageDifference}`);
  })
  .run();