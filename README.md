# Decision Matrix Helper (decisionmatrixhelper)

## Synopsis
This tool will support you in the process of creating a decision matrix. It provides features, alternatives and the matrix of those two, known as decision matrix. With this tool you will be able to create features and alternatives. Furthermore you will rate the importance of features and the priority of that particular feature against all alternatives.

Having done that you can rely on the implemented algorithm to provide you the best alternative out of any given number of alternatives. 

The tool provides a wizard that will guide you throughout the process of creating, evaluating and comparing your alternatives. Besides that your progress will be automatically saved and restored in case of a browser crash and you are able to save and load your progress at any time by using the utilities in the top right corner of the tool.

## Step-by-Step Guide for beginners
### Without the wizard
1. Create as many alternatives as you need
2. Leave a name and a description for each alternative
3. Create as many features as you need
4. Leave a name, a description and an importance rating for each feature (beware: you can have more than one exclusive feature, exclusive features are the top most rated features you can discuss)
5. Use the decision matrix by iterating over each feature per alternative - you choose which direction you prefer (alternatives first vs. features first)
6. Use justifacations as a reference for each rating you give each feature per alternative
7. After you completed every assessment of each feature for each alternative you can press the result button and get a numerical summarization of your assessment - note that the first alternative in the table is the best option.
### With the wizard
1. Launch the wizard
2. You can start by creating features or you skip to the alternatives and come back to the features after that
3. See the guide above.

### Usefull notes

Use the landing page and the info icons of the tool features to get a better understanding of each feature.

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```


### Format the files
```bash
yarn format
# or
npm run format
```



### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
