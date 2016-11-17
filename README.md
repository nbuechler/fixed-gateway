# fixed-gateway
With the idea of bridging the front-end and back-end apps of _Logro_, this project aims to provide interfaces so that every app is modular. It works in tandem with the project called 'hungry-interceptor' which provides similar functionality, but only for back-end apps.

# History
The controllers directory, written with express.js, includes code from two main areas:
1. 'activity.js', 'experience.js', and 'log.js' are the main centers of business logic which originated in the project called 'evgroio' - these methods were refactored to work with this application
2. Interceptors are the key to acting as middleware between front-end apps and the 'hungry-interceptor' project interfaces that provide statistical and processed information of logs/experiences/activities

The file 'app.js' which is at the root of the project was originated from the hackathon-starter project: https://github.com/sahat/hackathon-starter

# Future goals
* Keep authentication/authorization logic in this project, and separate business logic into a new project
* Then, in this project, use JWT tokens.
* The main goal is to break this microservice into smaller component service parts
* Should this go well, it is prudent to consider dockerizing the auth project

# Deploy instructions, for node 4.0+ running on AWS
I had to create the directory for the node-sass binding
1. fixed-gateway/node_modules/node-sass-middleware/node_modules/node-sass/vendor
2. Add this file, this one is for node 4.0.0.... https://github.com/sass/node-sass-binaries/blob/master/darwin-x64-46_binding.node

For more references see these links:
* General issue page: https://github.com/sass/node-sass/issues/1162
* This one is for node 0.12: https://github.com/sass/node-sass-binaries/blob/master/darwin-x64-14_binding.node
* This one is for node 4.0.0: https://github.com/sass/node-sass-binaries/blob/master/darwin-x64-46_binding.node

# After installing packages

From the root directory:
```
cd fixed-gateway/scripts
```

Run this command to start a cluster of node servers:
```
$ node ../cluster_app.js
```

# Credits
Hackathon Starter can be found here: https://github.com/sahat/hackathon-starter

The MIT License (MIT)

Copyright (c) 2014-2015 Sahat Yalkabov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# License
fixed-gateway is licensed as follows:
GPLv3
