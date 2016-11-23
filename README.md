# meze-banquet-example
An example of using Meze and Banquet to build a simple API endpoint

> git clone git@github.com:gmmorris/meze-banquet-example.git
> cd ./meze-banquet-example
> npm i
> npm start

Then open another terminal and curl your new endpoint
> curl http://localhost:8080/hello/world

You should see a response:
>  "hello World, we're speaking via composition"

You can then curl an additional endpoint which makes an async call to an external API returning a random name
> curl http://localhost:8080/hello

You should see a response:
>  "hello Bernie, we're speaking via composition"

Bernie is ofcourse random, you'll probably get some other name. :)