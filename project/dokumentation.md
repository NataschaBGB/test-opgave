# Dokumentation

Navn: Natascha Bjerning  
Hold: WU14

Link to the project live (github pages, vercel, netlify, etc.)

<!-- Sæt billede ind i f.eks. docs mappen og vis her -->
Screenshot of the app
<!-- <img src="./docs/billede.jpg"> -->
<!-- ![Billede af Natascha Bjerning](./docs/billede.jpg) -->

## Sources
Refer to sources where code or documentation has been taken from. For example, StackOverflow, W3Schools, MDN Web Docs, Next.js documentation, NPM, icon libraries, etc.

## Karakter 02

### Tech-stack
#### <code style="color:green"><b>What technologies are used in the project?</b></code>
- Next.js
- JavaScript

### [Example](./app/page.js)
#### <code style="color:green"><b>A code example</b></code>
<!-- Et kodeeksempel -->
```javascript
const validPassword = (password) => password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
```

#### <code style="color:green"><b>Explanation of the code example</b></code>
This code snippet is a JavaScript function named `validPassword` that checks if a given password meets certain criteria.  
The function takes a single argument, `password`, and returns a boolean value indicating whether the password is valid based on the following conditions:
1. The password must be at least 8 characters long.
2. The password must contain at least one uppercase letter (A-Z).
3. The password must contain at least one digit (0-9).


## Katakter 7
<code style="color:red"><b>- Plus alt fra 02</b></code>

### Tech-stack
#### <code style="color:green"><b>What technologies are used in the project?</b></code>
- **Next.js**
    - <code style="color:green"><b>Explain what Next.js is</b></code>
    - Is a React framework that enables server-side rendering and static site generation for building fast and scalable web applications. It provides features like routing, API routes, and built-in support for CSS and JavaScript, making it easier to develop and deploy web applications.
- **JavaScript**
    - <code style="color:green"><b>Explain what JavaScript is</b></code>
    - Is a versatile programming language that is primarily used for web development. It allows developers to create interactive and dynamic web pages by manipulating the Document Object Model (DOM) and handling events. JavaScript can be used on both the client-side and server-side, making it a popular choice for building full-stack applications.

### Why I chose this tech-stack
#### <code style="color:green"><b>Defend my choices in choosing these technologies</b></code>
- **Next.js**: I have chosen Next.js because it provides a robust foundation for building scalable web applications with built-in features like routing, server-side rendering, and API routes. It gives me plenty of opportunity to split the application into smaller components and pages, making it easier to manage, maintain and reuse code, not only in the app itself but in future projects. Lastly, I chose Next.js because it is a popular framework is the framework I know best and I have experience with it, which will help me to build the application faster and more efficiently.
- **JavaScript**: I have chosen JavaScript because it is a versatile programming language that can be used for both front-end and back-end development. It is widely adopted in the web development community, which means there are plenty of resources and libraries available to help me build the application. Additionally, I have experience with JavaScript, which will help me to build the application faster and more efficiently.

## Karakter 12
<code style="color:red"><b>- Plus alt fra 02 og 7</b></code>

### Why Next.js and not something else?
#### <code style="color:green"><b>Why did I choose Next.js over other frameworks?</b></code>
- <code style="color:green"><b>Detailed comaprison between Next.js and other frameworks</b></code>

Another framework that is similar to Next.js could be Nuxt.js, which is based on Vue, but it provides me with almost the same capabilities as Next.js. Despite the fact that Nuxt.js's documentation looks easier to understand, I am more familiar with Next.js and Next.js is used more widely in the industry. [next.js](https://www.npmjs.com/package/react) has over 13 million weekly downloads on npm, while [nuxt.js](https://www.npmjs.com/package/nuxt) has only 1.5 million weekly downloads. This shows that Next.js is more widely used in the industry and has a larger community of developers, which means there are more resources and support available for Next.js.

### Why JavaScript and not something else?
#### <code style="color:green"><b>Why did I choose JavaScript over other programming languages? - Compare</b></code>
- <code style="color:green"><b>Detailed comaprison between JavaScript and other programming languages</b></code>

Another programming language that is similar to JavaScript could be TypeScript, which is based on JavaScript but provides me with the ability to write more structured and type-safe code. COMPARE MORE.  
However, I am more familiar with JavaScript and have experience with it, which will help me to build the application faster and more efficiently.

### How can my app be scaled in the future?

- Think about the price, both in terms of hosting, but also the price of the product. If we have a lot of users, we need to make sure that we can cover the costs of hosting and still make a profit.

- Caching, maybe redis, which can cache data, so we don't have to fetch data from the database every time a user makes a request. This will reduce the number of requests to the database and thus reduce costs.  
    - Next.js also has built-in caching, which can be used to cache data on the server, so we don't have to fetch data from the database every time a user makes a request.

- Good and clear file structure, so it is easy to navigate the code and add new features.  
- Naming conventions, so it is easy to understand what the different files and folders contain.  
- Documentation, so it is easy to understand how the code works and how to use it.  

In my app, I have done these 3 things, which makes it easier for others to further develop the app if I can no longer work on it one day.

---
Scaling in relation to if the app becomes larger and more users need to use it.

- More users = more requests = more data = more costs = lower income

- More users = more requests
    - If we use a provider like Vercel, the server has a limited number of requests it can handle. If we get more users, we either need to upgrade our server or use another provider that can handle more requests.
- More users = more data
    - If we get more users, we need to have a database that can handle more data. We either need to upgrade our database or use another database that can handle more data.