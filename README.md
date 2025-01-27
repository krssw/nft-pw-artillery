# NFT-PW-ARTILLERY
This is an example framework created to join Playwright (UI/API automation) with Artillery.io (performance), in order to make a robust framework. Ensure you use own valid url, that can handle performance testing, prior to executing tests. 

## Getting Started
Prior to launching any code, ensure all dependencies are installed. 
### Prerequisites 
Install Dependencies 

- NPM
```
npm install npm@latest -g
```

- Playwright
```
npm init playwright@latest -g
```

- Artillery
```
npm install artillery@latest -g
```

Installation
1. Clone the repo
```
git clone https://github.com/krssw/nft-pw-artillery.git
```

2. Setup environment name (environment variable)
```
ENV=<your_env_name>
```

## Running tests examples

### Run all tests

To run all tests in the 'test' environment
```
npm run test:test
```

or

```
ENV=test npx playwright test --project=chromium
```

### Run single test file by filename
```
npx playwright test ./tests/File_name.spec.ts  --project=chromium
```

### Run performance test by file name 
```
npx artillery run /./tests/artillery/navigation.ts
```


## Test reports

Playwright tests reports are in the folder testResults/htmlReport. 
HTML report is automatically open after any test failure.
You can display last report by command:

```
npx playwright show-report testResults/htmlReport 
```
Report, created for every single page, is in the folder: testResults/accessibility. 
