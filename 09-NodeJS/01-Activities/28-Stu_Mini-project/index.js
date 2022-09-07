const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'name',
    },
    {
      type: 'password',
      message: 'What is your location',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Github URL',
      name: 'github',
    },
    {
        type: 'input',
        message: 'Bio',
        name: 'bio',
      },
  ])
  .then((response) => {
    const bio = response.bio;
    const name = response.name;
    const location= response.location;
    const github = response.github;
    fs.writeFile(name +'html',
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini Project</title>
</head>
<body>
    <div>
        <h1>
            ${name}
        </h1>
    </div>
    <main>
        <h2>Bio</h2>
        <p>
        ${bio}
        </p>
    </main>
    <footer>
        <span>
            About me:
            ${Location} {Github}
        </span>
    </footer>
</body>
</html>`,(error) =>
error ? console.error(error) : console.logs('Success!') )
  }
  );
