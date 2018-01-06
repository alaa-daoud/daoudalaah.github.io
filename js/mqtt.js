// Create a client instance
  client = new Paho.MQTT.Client("m23.cloudmqtt.com", Number(22037),"clientId_td"+new Date().getTime());
  //Example client = new Paho.MQTT.Client("m11.cloudmqtt.com", 32903, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
    useSSL: true,
    userName: "mqttFrontEndAccount",
    password: "M%1jHeu7h3",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);

  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("onConnect");
    client.subscribe("/philipshue/1");
    message = new Paho.MQTT.Message("connected from websocket");
    message.destinationName = "RPi/MqttAdapter/connexion";
    client.send(message);
  }

  function doFail(e){
    console.log(e);
	//client.connect(options);
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	location.reload(); 
  }
  