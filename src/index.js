const WebSocket = require('ws');

const ws = new WebSocket('wss://live.lightningmaps.org');

exports.listen = (callback) => {

  ws.on('open', () => {

    ws.send(JSON.stringify({"v":17,"i":{},"s":false,"x":0,"w":0,"tx":0,"tw":1,"a":4,"z":1.9961817795973358,"b":true,"h":"","l":1,"t":1,"p":[87.7,271.9,-67.6,-254],"r":"A"}));

    ws.on('message', (data) => {
      data = JSON.parse(data);
      if(data.strokes) {
        for(let i = 0; i < data.strokes.length; i++) {
          callback(data.strokes[i]);
        }
      }
    });

  });

}
