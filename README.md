#### Library that emits lightning locations in real time from [lightningmaps.org](https://www.lightningmaps.org)


```javascript
const lightningmap = require('@sindres/lightningmap')

lightningmap.listen((lightning) => {
  console.log(lightning);
})
```
