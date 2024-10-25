---
id: setting-up-environment
title: Setting Up Your Development Environment
sidebar_label: Setup Environment
sidebar_position: 3
tags: [aibuddies, ai, setup, environment, beginners, python, installation, tools]
description: A step-by-step guide to setting up your development environment for AI projects, targeted at beginners.
keywords: [aibuddies, ai, environment, setup, python, tools, beginners, installation]
---

Before you can start building AI projects, you need to set up your development environment. If you’re new to programming or AI, don’t worry—we’ll walk you through each step. This guide is designed for beginners, so no prior setup experience is needed. Let’s get started!

## 1. Installing Python 🐍

Python is the most popular programming language for AI and machine learning. Here’s how to get it installed on your computer:

### Step 1: Download Python
1. Go to the [official Python website](https://www.python.org/downloads/).
2. Download the latest version of Python (preferably 3.x). The website should automatically suggest the right version for your operating system (Windows, macOS, or Linux).

### Step 2: Install Python
1. Open the downloaded installer file.
2. **Important:** Make sure to check the box that says "Add Python to PATH" before clicking "Install Now." This will allow you to use Python from the command line.
3. Follow the installation steps to complete the setup.

### Step 3: Verify the Installation
1. Open a terminal or command prompt.
2. Type `python --version` and press Enter. You should see the installed Python version displayed, confirming that Python is installed correctly.

---

## 2. Setting Up a Code Editor or IDE 🖥️

A code editor is a tool where you’ll write your Python code. While there are many options, here are some popular ones:

### Recommended Code Editors
- **[Visual Studio Code (VS Code)](https://code.visualstudio.com/)**: Free, beginner-friendly, and widely used. It has many extensions that make coding easier.
- **[Jupyter Notebook](https://jupyter.org/)**: Great for AI projects because it allows you to run code in chunks and see results immediately.
- **[PyCharm](https://www.jetbrains.com/pycharm/)**: A full-featured Integrated Development Environment (IDE) that is ideal for Python development.

### Setting Up VS Code (Recommended)
1. Download and install [Visual Studio Code](https://code.visualstudio.com/).
2. Open VS Code, and click on the "Extensions" icon on the left sidebar.
3. Search for and install the following extensions:
   - **Python**: Provides Python language support and debugging.
   - **Jupyter**: If you plan to use Jupyter Notebook within VS Code.
4. Restart VS Code after installing the extensions.

---

## 3. Installing Python Libraries 📦

Python libraries are pre-written code that you can use in your projects to save time. Here’s how to install some essential libraries for AI:

### Step 1: Open a Terminal or Command Prompt
- On Windows, you can use Command Prompt, PowerShell, or the terminal in VS Code.
- On macOS and Linux, open the Terminal application.

### Step 2: Install Libraries Using `pip`
`pip` is the package manager for Python. To install libraries, type the following commands and press Enter:

```bash
pip install numpy pandas matplotlib scikit-learn
```

This command installs the following libraries:
- **NumPy**: For numerical operations.
- **Pandas**: For data manipulation and analysis.
- **Matplotlib**: For data visualization.
- **Scikit-Learn**: For basic machine learning algorithms.

You may also want to install **Jupyter Notebook** if you’re planning to use it:

```bash
pip install jupyter
```

### Step 3: Verify the Installation
To ensure the libraries are installed correctly, open a Python shell by typing `python` in the terminal, and then try importing the libraries:

```python
import numpy
import pandas
import matplotlib
import sklearn
```

If no errors appear, you’re good to go!

---

## 4. Setting Up Jupyter Notebook 📓

Jupyter Notebook is great for learning AI because it allows you to write code and see results immediately.

### Step 1: Start Jupyter Notebook
1. Open a terminal or command prompt.
2. Type `jupyter notebook` and press Enter.
3. Your default web browser should open with Jupyter Notebook’s interface.

### Step 2: Create a New Notebook
1. Click "New" in the top right corner and select "Python 3".
2. Start writing code in the new notebook.

You can now use Jupyter to practice Python and experiment with AI algorithms.

---

## 5. Using Git and GitHub for Version Control 📝

As you start working on AI projects, it’s helpful to keep track of changes to your code. Git and GitHub make this easy.

### Step 1: Install Git
- Download and install Git from the [official website](https://git-scm.com/).
- Follow the installation instructions for your operating system.

### Step 2: Create a GitHub Account
- Sign up for a free account at [GitHub](https://github.com/).

### Step 3: Setting Up Git in VS Code
1. Open VS Code and click on the "Source Control" icon in the sidebar.
2. Click on "Initialize Repository" to start tracking your code with Git.

We’ll cover more about using Git and GitHub in future sections.

---

## 6. Configuring Your Python Environment in VS Code 🛠️

To make sure VS Code is set up to work with Python:
1. Open VS Code and create a new `.py` file (e.g., `test.py`).
2. VS Code should prompt you to select a Python interpreter. Choose the version you installed earlier.
3. You can now start writing and running Python code directly in VS Code.

---

## 7. Setting Up a Virtual Environment (Optional but Recommended) 🌐

A virtual environment keeps your project’s dependencies separate from other projects. Here’s how to create one:

1. Open a terminal and navigate to your project folder.
2. Run the following commands to create and activate a virtual environment:

   - On Windows:
     ```bash
     python -m venv myenv
     myenv\Scripts\activate
     ```

   - On macOS/Linux:
     ```bash
     python3 -m venv myenv
     source myenv/bin/activate
     ```

3. Install any required libraries inside this virtual environment.

---

## What’s Next?

Congratulations! You’ve successfully set up your development environment for AI. In the next section, we’ll cover some essential tools and libraries you’ll need to start building AI projects.

Move on to [Tools and Libraries](tools-and-libraries) to continue your AI journey.

---

With these steps, you’re now ready to start coding and experimenting with AI! Remember, the best way to learn is by doing, so don’t hesitate to try out different things and explore.