Node.js Streams
- Streams are object that let you read data from a source
  or write data to a destination in continuous fashion in nodejs 

--> There are four Types of Streams
Streaming  means listening music or watching video in real time insted of downloading a file to your computer and watching it later 

-->Readable= stream which is used to read operation
-->Writable= Stream which is used for write operation
-->Duplex= Stream Which can be used for both read and write operation
-->Transform= A type of duplex stream where the output is computed based on input


-->Each time of stream is an EventEmitter instance and thorws several events at different instance 
   of times for example some of the commonly used events are
-->data- this event is fired when there is data available to read
-->end- this event is fired when there is no more data to Readable
-->error- this event is fired when there is any error receiving or writing data
-->finish- this event is fired when all the data has been flushed to underlying system 

//stream.pipe() the method used to take a readable stream and connect it to a writable stream  