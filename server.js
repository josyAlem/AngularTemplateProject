const http=require("http");
const app=require("./backend/app");

const server=http.createServer(app);
const port=process.port || "3000";
server.listen(port,()=>{
  console.log("listening on port "+port);
});
