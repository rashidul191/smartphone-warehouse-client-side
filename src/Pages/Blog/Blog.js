import React from "react";

const Blog = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center text-info">Blogs</h2>
      <div>
        <h4>Question-1: Difference between javascript and nodejs</h4>
        <p>
          Ans: JavaScript is a programming language that runs on any browser
          through the JavaScript engine. Node, on the other hand, JS is an
          interpreter or environment for JavaScript programming language.
          JavaScript is typically used for any client-side activity for a web
          application whereas Node JS is primarily used to access or run any
          operating system for non-blocking operations. JavaScript runs on
          Spider Monkey, JavaScript Core, V8, etc. engines where Node JS only
          supports the V8 engine. javascript is mainly used on the client-side.
          Where node JS is mostly used server-side. JavaScript is used for
          frontend development whereas node JS is used for server-side
          development.
        </p>
      </div>
      <div>
        <h4>
          Question-2: When should you use nodejs and when should you use mongodb
        </h4>
        <p>
          Ans: MongoDB and NodeJS are two different technologies. MongoDB is a
          database system that allows us to store documents in a database and
          perform activities such as data updates or searching for documents by
          certain criteria. NodeJS is primarily responsible for running the
          application. NodeJS is a JavaScript runtime environment. This actually
          helps JavaScript to run outside of the server. It is used in
          server-side development. MongoDB is a NoSQL database that is
          document-oriented. It presents data as a JSON document. It is used for
          storing data Summary MongoDB is a database where we can store data and
          NodeJS helps our client site to connect to the database through its
          server site. When we create an application, we have to save data, in
          that case, Use a database like MongoDB and to connect to MongoDB we
          need a connector called Node JS. It connects the client-side to the
          database
        </p>
      </div>
      <div>
        <h4>Question-3: Differences between sql and nosql databases.</h4>
        <p>
          Ans: A SQL database is called a relational database whereas a NoSql
          database is called a non-relational database. The SQL database uses
          structured query language and contains a predefined schema that
          contains NoSQL's dynamic schema and unstructured data. The SQL
          database is scalable and there is no other method based on the table.
          Horizontally scalable, document type and key-value pair structure. SQL
          is good for multi-row transactions and no SQL is good for unstructured
          data like JSON.
        </p>
      </div>
    </div>
  );
};

export default Blog;
