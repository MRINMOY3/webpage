const http = require("http");

const server = http.createServer((req, res) => {
  //req-->> get post or some tothe r king rwquesrt
  // the type of request the client has made

  // thesponse obh=jects -->>> The data to eb sent to the user
  // The data to be sent  back t0 the user
  // 1 import the module http
  // 2 using the http module
  // 3 req and the respomnse comes loaded with the information

  console.log("request made");
  console.log(req.url);
  console.log(req.method);


  // res . hset header -->> what kind of the content will be displaywed to the user
  // Nowe we are displayong the plain text

  //Data that is needed to be written

  // 3rd step -->. It will set an end to the user'
  // The kaedt will will fuinally send thwe respnse ot the browser 
  
  res.setHeader("Content-Type", "text/plain");
  res.write("Hello World");
  res.end();

  // Ther request url is shown over here
});

// 2000-->> the post number //

// the second ar=g-->. the local host
// tghe third arguyment -->. the ->>
server.listen(3000, "localhost", () => {
  console.log("Listening for the request on the port ");
});
