const http = require("http");
let blogs = [
  {
    id: 1,
    title: "My first blog",
    content: "My first blog"
  },
  {
    id: 2,
    title: "My second blog",
    content: "My second blog"
  },
  {
    id: 3,
    title: "My third blog",
    content: "My third blog"
  },
  {
    id: 4,
    title: "My fourth blog",
    content: "My fourth blog"
  }
];

let server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    let list = "";
    blogs.forEach(blog => {
      list += `<a href="/${blog.id}">${blog.title}</a><br>`;
    });
    res.writeHead(200);
    res.end(list);
  } else {
    let blog = blogs.find(blog => {
      return req.url.includes(blog.id);
    });
    if (blog) {
      let blogPage = `
        <h1>${blog.title}</h1>
        <p>${blog.content}</p>
      `;
      res.writeHead(200);
      res.end(blogPage);
    } else {
      res.writeHead(400);
      res.end();
    }
  }
});

server.listen("8000");
console.log("Server listening at 8000");
