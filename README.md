# 📎 SVG-logo-maker
This is the Challenge 10 related to OOP

[![MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This project involves creating a Node.js command-line application that interacts with the user to generate a custom logo. The user is prompted to provide specific details such as the color and shape for the logo, as well as any text they want to include. Based on the user's input, the application generates an SVG (Scalable Vector Graphics) representation of the logo. SVG is an XML-based vector image format for two-dimensional graphics. Once the logo is generated, the application saves it as an SVG file. This allows the user to have a custom logo that they can use for various purposes, and because it's in SVG format, it can be scaled to any size without loss of quality. 

This is a great tool for developers looking to save time and money on logo design. By using this application, developers can generate their own logos without needing to hire a graphic designer, making it a cost-effective solution for personal and professional projects.

This is the link to the video walkthrough:  
🔗[Video Walkthrough](https://drive.google.com/file/d/1Fd6tfTjpa1cjc4CcwKTcEsbB9k7LhC1P/view?usp=sharing)

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

## Installation

To use this repository, follow these steps:

1. Clone this repository to your local machine.
2. Follow the `Usage` steps described below.
  
## Usage

The usage of this application is to automate the creation of a SVG logo file for a project. A README file is a document that introduces, explains, or provides key information about a project. It's often the first document people read when they encounter a project on platforms like GitHub.

This is a step-by-step guide on how to use this application:
1. **Install the application:** Clone or download the application to your local machine. Then, navigate to the application directory in your terminal and run npm i to install the necessary dependencies (inquirer version: 8.2.4 recommended). You may also install the *jest DevDependency* for testing purposes if interested
  > npm install -g inquirer@8.2.4
  > npm install -g jest

2. **Run the application:** In the terminal, run the command node index.js to start the application.

2. **Answer the prompts:** The application will prompt you with a series of questions about specific details for the logo, such as the color, shape, and any text they want to include.

3. **Generate the logo:** After you've answered all the questions, the application will generate a **svg** file (logo.svg) based on your responses. The logo will be saved in the folder examples.

4. **Use the logo:** You can now use the generated logo for various purposes. Because the logo is in SVG format, it can be scaled to any size without loss of quality.

## Credits

Some material and concepts used in this challenge were learned from the [University of Denver Bootcamp](https://bootcamp.du.edu/coding/).

[Toptal](https://www.toptal.com/developers/gitignore) Used to create .gitignore file.


## License

Copyright (c) Silvia Reyes. All rights reserved.

+ Licensed under the [MIT License.](https://opensource.org/licenses/MIT) : Expat License.


## Features

+ **Interactive prompts:** The application uses the inquirer package to prompt the user with a series of questions about their requirements for the logo. The questions cover the color, shape, and any text they want to include in it.
+ **Customizable Shapes:** The application could allow users to choose from a variety of shapes for their logo, such as circles, squares, triangles, or even more complex shapes.
+ **Text Options:** Users could have the ability to customize the font, size, and placement of the text in their logo.
+ **Color Picker:** Instead of manually entering color values, the application could provide a color picker for users to choose their desired colors.
+ **Scalability:** The SVG logos generated by the application can be scaled to any size without loss of quality, making them suitable for a wide range of uses.
+ **Ease of Use:** The application's command-line interface is user-friendly, making it easy for anyone to create a custom logo.

## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature`)
3. Commit your Changes (`git commit -m 'Add some feature'`)
4. Push to the Branch (`git push origin feature`)
5. Open a Pull Request

## Tests

The tests in this project verify the functionality of the SVG logo generator for different shapes: Triangle, Circle, and Square. Each shape has a corresponding test suite that checks the `render` method of the shape's class.

In each test suite, an instance of the shape class is created with specific parameters for text, text color, shape color, and border color. The `render` method is then called on this instance to generate an SVG string.

The tests check that the generated SVG string contains the correct elements and attributes for the specific shape, with the correct colors and text as provided in the parameters. This ensures that the `render` method is correctly generating the SVG for each shape based on the user's input.

These tests help ensure that the SVG logo generator is working as expected and producing the correct output for each shape.

## Questions
If you have any questions, feedback, or suggestions, feel free to reach out! You can contact me through my GitHub profile or via email.

GitHub Profile 💻: [NathaliaReyes](https://github.com/NathaliaReyes)
Email 📧: silvianathaliareyes96@gmail.com
LinkedIn 🚀: [SilviaReyes](https://www.linkedin.com/in/silvia-reyes-2b907123b/)

I'm always open to discussions and eager to help. Don't hesitate to get in touch!



***Thanks for stopping!***
