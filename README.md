# 📎 SVG-logo-maker
This is the Challenge 10 related to OOP

[![MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This project involves creating a Node.js command-line application that interacts with the user to generate a custom logo. The user is prompted to provide specific details such as the color and shape for the logo, as well as any text they want to include. Based on the user's input, the application generates an SVG (Scalable Vector Graphics) representation of the logo. SVG is an XML-based vector image format for two-dimensional graphics. Once the logo is generated, the application saves it as an SVG file. This allows the user to have a custom logo that they can use for various purposes, and because it's in SVG format, it can be scaled to any size without loss of quality. 

This is a great tool for developers looking to save time and money on logo design. By using this application, developers can generate their own logos without needing to hire a graphic designer, making it a cost-effective solution for personal and professional projects.

This is the link to the video walkthrough:  
🔗[Video Walkthrough]()

## Table of Contents
- [📎 SVG-logo-maker](#-svg-logo-maker)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Your Task](#your-task)
    - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Mock-Up](#mock-up)
  - [Additional Requirements](#additional-requirements)
  - [Helpful SVG Resources](#helpful-svg-resources)
  - [Grading Requirements](#grading-requirements)
    - [Deliverables: 15%](#deliverables-15)
    - [Walkthrough Video: 32%](#walkthrough-video-32)
    - [Technical Acceptance Criteria: 40%](#technical-acceptance-criteria-40)
    - [Repository Quality: 13%](#repository-quality-13)
  - [Review](#review)

## Installation

To use this repository, follow these steps:

1. Clone this repository to your local machine.
2. Follow the `Usage` steps described below.
  
## Usage

The usage of this application is to automate the creation of a README file for a project. A README file is a document that introduces, explains, or provides key information about a project. It's often the first document people read when they encounter a project on platforms like GitHub.

This is a step-by-step guide on how to use this application:
1. **Install the application:** Clone or download the application to your local machine. Then, navigate to the application directory in your terminal and run npm install to install the necessary dependencies (inquirer).

2. **Run the application:** In the terminal, run the command node index.js to start the application.

3. **Answer the prompts:** The application will prompt you with a series of questions about your project. Answer each question as accurately as possible. The questions cover the project's title, description, installation instructions, usage information, credits, license, features, contribution guidelines, test instructions, GitHub username, and email address.

4. **Generate the README:** After you've answered all the questions, the application will generate a README file (README.md) based on your responses. The README will be saved in the same directory as the application.

5. **Use the README:** You can now use the generated README file for your project. You might need to make some minor edits or additions, but the bulk of the work has been done for you.

## Credits

Some material and concepts used in this challenge were learned from the [University of Denver Bootcamp](https://bootcamp.du.edu/coding/).


## License

Copyright (c) Silvia Reyes. All rights reserved.

+ Licensed under the [MIT License.](https://opensource.org/licenses/MIT) : Expat License.


## Features

+ **Interactive prompts:** The application uses the inquirer package to prompt the user with a series of questions about their project. The questions cover the project's title, description, installation instructions, usage information, credits, license, features, contribution guidelines, test instructions, GitHub username, and email address.
+ **License badge generation:** The application includes a function (renderLicenseBadge) that generates a license badge based on the license selected by the user. The badge is a clickable image that links to the license's page on opensource.org.
+ **Markdown generation:** The application includes a function (generateMarkdown) that takes the user's responses and generates a Markdown-formatted README. The README includes a title, description, table of contents, installation instructions, usage information, credits, license information (including a badge), features, contribution guidelines, test instructions, and contact information.
+ **File writing:** The application writes the generated Markdown to a README.md file. This is done using the fs (file system) module's writeFile function.
+ **Error handling:** The application includes basic error handling. If there's an error when writing the file, it's logged to the console. Otherwise, a success message is logged.

## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature`)
3. Commit your Changes (`git commit -m 'Add some feature'`)
4. Push to the Branch (`git push origin feature`)
5. Open a Pull Request

## Tests

This application currently does not include any tests. As the application evolves, tests will be added. Check back for updates.

## Questions
If you have any questions, feedback, or suggestions, feel free to reach out! You can contact me through my GitHub profile or via email.

GitHub Profile 💻: [NathaliaReyes](https://github.com/NathaliaReyes)
Email 📧: silvianathaliareyes96@gmail.com

I'm always open to discussions and eager to help. Don't hesitate to get in touch!



**_Thanks for stopping!_**

## Your Task

Your task is to build a Node.js command-line application that takes in user input to generate a logo and save it as an [SVG file](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.

Because this application won’t be deployed, you’ll need to provide a link to a walkthrough video that demonstrates its functionality and passes all of the tests. You’ll need to submit a link to the video **and** add it to the README of your project.

Refer to the [Video Submission Guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) on the Full-Stack Blog for additional guidance on creating a video.

> **Note**: There is no starter code for this assignment.
### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Mock-Up

The following image shows a mock-up of the generated SVG given the following input entered by the user: `SVG` for the text, `white` for the text color, `circle` from the list of shapes, and `green` for the shape color. Note that this is just an image of the output SVG and not the SVG file itself:

![Image showing a green circle with white text that reads "SVG.".](./Images/10-oop-homework-demo.png)

## Additional Requirements

This Challenge combines many of the skills covered so far. In addition to the User Story and Acceptance Criteria, we’ve provided some guidelines to help you get started.

Because this Challenge requires a video submission, refer to the [Full-Stack Blog video submission guide](https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide) for guidance on creating and sharing a video.

Your application should use [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) for collecting input from the user. The application will be invoked by using the following command:

```bash
node index.js
```

It is recommended that you start with a directory structure that looks like the following example:

```md
.  
├── examples/           // Example svg file(s) created with the app
├── lib/                // Folder for classes or functions
    ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
    ├── shapes.test.js  // Jest tests for shapes
    └── more...         // Additional files and tests
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, link to video, setup and usage instructions           
```

> **Important**: Make sure that you remove `dist` from the `.gitignore` file so that Git will track this folder and include it when you push up to your application's repository.
The application must include `Triangle`, `Circle`, and `Square` classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the `Triangle`, `Circle`, and `Square` classes in a parent `Shape` class and use inheritance to reuse the code in the child classes.

Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.

The following example test should pass:

```js
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
```

You may need to add additional files in the `lib` folder for handling user input, writing to a file, etc. Writing tests for these additional files is **optional**.

## Helpful SVG Resources

* [Example SVG](https://static.fullstack-bootcamp.com/fullstack-ground/module-10/circle.svg)

* [Scalable Vector Graphics (SVG)](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)

* [SVG tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)

* [Basic SVG shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)

* [Text in SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts)

* [SVG VS Code extension](https://marketplace.visualstudio.com/items?itemName=jock.svg)

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code
This Challenge is graded based on the following criteria:

### Deliverables: 15%

* At least one sample SVG file generated using the application must be submitted.

* Your GitHub repository containing your application code.

### Walkthrough Video: 32%

* A walkthrough video that demonstrates the functionality of the SVG logo maker and passing tests must be submitted.

* The `README.md` file must include a link to the walkthrough video.

* The walkthrough video must show all tests passing from the command line.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

* The walkthrough video must demonstrate a generated SVG file, showing the file being opened in the browser. The image in the browser must reflect the choices made by the user (text, shape, and colors).

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  * Uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

  * Uses the [Jest package](https://www.npmjs.com/package/jest) for a suite of unit tests.

  * The application must have `Triangle`, `Square`, and `Circle` classes.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains a high-quality readme with description and a link to a walkthrough video.

## Review

You are required to submit the following for review:

* A walkthrough video that demonstrates the functionality of the application and passing tests.

* At least one sample SVG file generated using your application.

* The URL of the GitHub repository, with a unique name and a README describing the project.

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
