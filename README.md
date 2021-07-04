# @squer-react-native-common/ui

Current Version: 0.0.3

### Installation
`$ npm install @squer-react-native-common/ui --save`

## Peer Dependencies
- "@squer-react-native-common/redux": "1.0.4",
- "prop-types": "15.7.2"
- "react-redux": "7.2.4"
- "redux": "4.1.0"
- "redux-thunk": "2.3.0"
- "reselect": "4.0.0"

## Dependencies
- "antd": "4.2.0"
- ""

### Usage example
```
  import {LoadingSpinner} from '@squer-react-native-common/ui';

  <LoadingSpinner/>
```

## Components

|   | Components | props |
|---|---|---|
| [x] | Loading Spinner |   |


## Add and verify new UI components
1. Start project with iOS simulator:
```shell
npm install
cd ios && pod update && pod install && cd ..
npx react-native run-ios
```
2. Add new component to `src/components` _(follow `LoadingSpinner` as template to create new component)_
3. To verify, place new component on `example/ExampleComponent.js` and check simulator if it's showing!
