# Node.js Basics

## Introduction

Welcome to your journey of learning Node.js! Node.js is a powerful JavaScript runtime that allows you to execute JavaScript code outside of a browser. It's built on the V8 JavaScript engine, which is the same engine that powers Google Chrome. Node.js is commonly used for building fast, scalable, and lightweight server-side applications.

## Key Features of Node.js

- **Non-blocking I/O**: Node.js uses an event-driven, non-blocking I/O model, making it efficient and suitable for real-time applications.
- **Single-threaded**: Node.js operates on a single thread but is highly scalable through its event loop, which can handle multiple connections simultaneously.
- **NPM (Node Package Manager)**: Node.js comes with NPM, the largest ecosystem of open-source libraries, allowing you to easily integrate third-party modules into your project.
- **Cross-platform**: Node.js is cross-platform, meaning it can run on Windows, macOS, and Linux.

## Getting Started

### 1. Install Node.js

First, you need to install Node.js on your machine. You can download the latest version from the [official Node.js website](https://nodejs.org/).

### 2. Verify the Installation

After installing, open your terminal (Command Prompt, PowerShell, or your preferred terminal) and type the following commands to verify the installation:

```bash
node -v
npm -v
```

This will display the installed versions of Node.js and NPM.

### 3. Your First Node.js Application

Create a simple Node.js application to see how it works.

1. Create a new directory for your project:

   ```bash
   mkdir my-first-node-app
   cd my-first-node-app
   ```

2. Create a new JavaScript file named `app.js`:

   ```bash
   touch app.js
   ```

3. Open `app.js` in your text editor and add the following code:

   ```javascript
   // app.js
   console.log("Hello, Node.js!");
   ```

4. Run your application:

   ```bash
   node app.js
   ```

   You should see `Hello, Node.js!` printed in the terminal.

### 4. Understanding the Package.json File

The `package.json` file is the heart of your Node.js project. It contains metadata about your project and its dependencies. To create one, run:

```bash
npm init
```

Follow the prompts to set up your `package.json` file.

### 5. Installing and Using Packages

Node.js has a vast ecosystem of packages that you can use in your projects. To install a package, use the following command:

```bash
npm install <package-name>
```

For example, to install the popular `express` package, you would run:

```bash
npm install express
```

### 6. Creating a Simple Web Server

Let's create a simple web server using Node.js:

1. In your `app.js` file, add the following code:

   ```javascript
   const http = require('http');

   const server = http.createServer((req, res) => {
       res.statusCode = 200;
       res.setHeader('Content-Type', 'text/plain');
       res.end('Hello, World!\n');
   });

   const PORT = 3000;
   server.listen(PORT, () => {
       console.log(`Server running at http://localhost:${PORT}/`);
   });
   ```

2. Run the server:

   ```bash
   node app.js
   ```

3. Open your web browser and go to `http://localhost:3000/`. You should see `Hello, World!` displayed.

## Learning Resources

- **Official Documentation**: [Node.js Official Docs](https://nodejs.org/en/docs/)
- **NPM**: [NPM Documentation](https://docs.npmjs.com/)
- **FreeCodeCamp**: [Node.js and Express.js Tutorial](https://www.freecodecamp.org/learn/back-end-development-and-apis/#basic-node-and-express)

## Conclusion

Node.js is a versatile and powerful tool for building server-side applications using JavaScript. As you continue learning, you'll discover its many features and capabilities. Happy coding!
