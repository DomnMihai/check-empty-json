# Description
The package provides methods to check whether a JSON object or a JSON array is empty or not.
- The package considers an **object** empty when it is `null`, `undefined` or has no keys.
- The package considers an **array** empty when it is `null`, `undefined` or its length is 0.

# Typescript
The package already contains Typescript **\*.d.ts** definition files.

# How to use
## javascript
```js
const checkEmptyJson = require('check-empty-json');

const jsonStatus = checkEmptyJson.isJsonEmpty({}); // returns true
const arrayStatus = checkEmptyJson.isArrayEmpty(['element 1']); // returns false
```

## typescript
```ts
import { isJsonEmpty, isArrayEmpty } from 'check-empty-json';

const jsonStatus: boolean = isJsonEmpty({key1: 'one'}); // returns false
const arrayStatus: boolean = isArrayEmpty([1, 2]); // returns false
```


# **isJsonEmpty()** examples
Examples are provided in Typescript.
```ts
import { isJsonEmpty } from 'check-empty-json';

isJsonEmpty(null); // returns true
isJsonEmpty(undefined); // returns true
isJsonEmpty({}); // returns true

isJsonEmpty({
  key0: {},
  key1: 'key 1',
  key2: 123,
  key3: ['1', '2'],
}); // returns false
isJsonEmpty({
  key0: null
}); // returns false
isJsonEmpty({
  key0: undefined
}); // returns false
isJsonEmpty({key1: ''}); // returns false
```

# **isArrayEmpty()** examples
Examples are provided in Typescript.
```ts
import { isArrayEmpty } from 'check-empty-json';

isArrayEmpty(null); // returns true
isArrayEmpty(undefined); // returns true
isArrayEmpty([]); // returns true

isArrayEmpty([1, 30, 'text', {}]); // returns false
isArrayEmpty([null]); // returns false
isArrayEmpty([undefined]); // returns false
isArrayEmpty([{}]); // returns false
```
