import githubScreenShot from "@/resources/images/devhacks/github/github-ss.png";
import githubRepo from "@/resources/images/devhacks/github/github-repo.png";
import gitScmScreenShot from "@/resources/images/devhacks/github/git-scm.png";
import gitVersionCheckScreenShot from "@/resources/images/devhacks/github/git-version-check.png";
import gitNotRecognizedScreenShot from "@/resources/images/devhacks/github/git-not-recognized.png";
import gitBashScreenShot from "@/resources/images/devhacks/github/git-bash-screenshot.png";

import { Code } from "@/components/UI";

export const windowsInstructions = [
  {
    title: "Understanding Git and Github",
    desc: [
      {
        text: () => (
          <>
            <strong>Git:</strong> Git is a distributed version control system
            that tracks changes in source code during software development.
          </>
        ),
        img: "",
      },
      {
        text: () => (
          <>
            <strong>GitHub:</strong> GitHub is a web-based platform that
            provides hosting for software development, utilizing Git for version
            control.
          </>
        ),
        img: "",
      },
    ],
  },
  {
    title: "Download and Install git:",
    desc: [
      {
        text: () => (
          <>
            <p>
              Git sometimes comes preinstalled with some systems. To check
              whether or not your system contains Git, type the following in
              your terminal:
            </p>
            <Code text="git --version" />

            <img src={gitVersionCheckScreenShot} alt="screenshot" />
            <p>
              Download and install Git from{" "}
              <a href="https://git-scm.com" target="_blank" rel="noreferrer">
                git-scm.com
              </a>
              .
            </p>
          </>
        ),
        img: gitScmScreenShot,
      },
      {
        text: () => (
          <>
            <p>
              If you don’t see a similar response and instead get something like
              this:{" "}
            </p>
            <img src={gitNotRecognizedScreenShot} alt="screenshot" />
            <p>
              Then download and install Git from{" "}
              <a href="https://git-scm.com" target="_blank" rel="noreferrer">
                git-scm.com
              </a>
              . Follow the necessary installer guide until installation is
              complete. Then open your terminal and follow the previous step to
              verify that Git was installed successfully.{" "}
              <strong>
                NOTE: Git bash should also be installed automatically when you
                install git.
              </strong>
              <img src={gitBashScreenShot} alt="screenshot" />
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Setting up a GitHub Account:",
    desc: [
      {
        text: () => (
          <>
            Create a GitHub account at{" "}
            <a href="https://github.com" target="_blank" rel="noreferrer">
              github.com
            </a>
            .
          </>
        ),
        img: githubScreenShot,
      },
      {
        text: () => <></>,
        img: "",
      },
    ],
  },
  {
    title: "Setting up username and email:",
    desc: [
      {
        text: () => (
          <>
            Open up a terminal. You can do this by hitting the spotlight key
            combination (COMMAND + SPACE)
          </>
        ),
        img: "",
      },
      {
        text: () => (
          <>
            <p>Set your username:</p>
            <div className="code">
              <code>git config --global user.name "Your Name"</code>
            </div>
          </>
        ),
        img: "",
      },
      {
        text: () => (
          <>
            <p>
              Set your email (Note: Set it exactly as your github email
              address):
            </p>
            <div className="code">
              <code>
                git config --global user.email "your.githubemail@example.com"
              </code>
            </div>
          </>
        ),
        img: "",
      },
    ],
  },
  {
    title: "Connecting GitHub Account to Local Git:",
    desc: [
      {
        text: () => (
          <>
            <p>
              After creating your GitHub account, authenticate your local Git
              with GitHub:
            </p>
            <div className="code">
              <code>git config --global credential.helper cache</code>
            </div>
          </>
        ),
        img: "",
      },
    ],
  },
  {
    title: "Creating a Repository:",
    desc: [
      {
        text: () => (
          <>
            On GitHub, click on the "+" sign in the top right corner and select
            "New repository."
          </>
        ),
        img: githubRepo,
      },
      {
        text: () => <>Follow the prompts to create a new repository.</>,
        img: "",
      },
    ],
  },
  {
    title: "Connecting Repository to Local Folder:",
    desc: [
      {
        text: () => (
          <>
            In your terminal, navigate to the local folder where you want to
            initialize Git.
          </>
        ),
        img: "",
      },
      {
        text: () => (
          <>
            <p>Run the following commands:</p>
            <div className="code">
              <code>git remote add origin &lt;repository_url&gt;</code>
            </div>
          </>
        ),
        img: "",
      },
    ],
  },
  {
    title: "Basic Git Commands:",
    desc: [
      {
        text: () => (
          <>
            <p>Add Changes:</p>
            <div className="code">
              <code>git add .</code>
            </div>
          </>
        ),
        img: "",
      },
      {
        text: () => (
          <>
            <p>Commit Changes:</p>
            <div className="code">
              <code>git commit -m "Your commit message"</code>
            </div>
          </>
        ),
        img: "",
      },
      {
        text: () => (
          <>
            <p>Push Changes to Github:</p>
            <div className="code">
              <code>git push -u origin master</code>
            </div>
          </>
        ),
        img: "",
      },
    ],
  },
];
