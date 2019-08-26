import React from "react";
// import SyntaxHighlighter from 'react-syntax-highlighter'

export default props => {
  return (
    <div>
      <h1>HTML Intro</h1>

      <p>
        Html stands for Hyper Text Markup Language. It is used for formatting
        and structuring a webpage.
      </p>

      <h3>How to use HTML:</h3>

      <h4>Step 1</h4>
      <p>Download a text editor</p>

      <h4>Step 2</h4>
      <p>
        Create a folder and name it anything you want (example: HTML PRACTICE)
      </p>

      <h4>Step 3</h4>
      <p>
        Open the text editor you downloaded and save it to the folder you
        created as: index.html
      </p>

      <h4>Step 4</h4>
      <p>Start Coding</p>

      <h3> HTML Fundamentals: </h3>

      <ul>
        <li>Syntax</li>
        <li>Comments</li>
        <li>Elements</li>
        <li>Headings</li>
        <li>Paragraphs</li>
        <li>Attributes</li>
        <li>Formatting</li>
        <li>Links</li>
        <li>Lists</li>
        <li>Tables</li>
        <li>Block and Inline</li>
        <li>Classes and Id's</li>
      </ul>

      <h2>Syntax</h2>

      <p> This is how a basic syntax set up for html is displayed: </p>

      <pre>&lt;DOCTYPE html></pre>
      <pre>&lt;html></pre>
      <pre>&lt;body></pre>
      <pre>&lt;/body></pre>
      <pre>&lt;/html></pre>

      <p>
        {" "}
        All HTML documents must start with a <i>
          document type declaration:
        </i>{" "}
        <pre>&lt;!DOCTYPE html></pre>
      </p>

      <p>
        {" "}
        The HTML document itself begins with an <i>opening html tag:</i>{" "}
        <pre>&lt;html></pre> and ends with a <i>closing html tag:</i>{" "}
        <pre>&lt;/html></pre>{" "}
      </p>

      <p>
        The visible part of the HTML document is between the{" "}
        <i>opening body tag:</i> <pre>&lt;body></pre> and{" "}
        <i>closing body tag:</i> <pre>&lt;/body></pre>{" "}
      </p>

      <h2>Comments</h2>

      <p>With comment tags you can write comments in your html</p>

      <p>This is how you would display a comment in a comment tag:</p>

      <p>
        <pre>&lt;!-- This is a comment --></pre>
      </p>

      <h2>Elements</h2>

      <p>
        An HTML element consists of a start tag and an end tag with the content
        inserted in between like so:
      </p>

      <h2>Headings</h2>
    </div>
  );
};
