---
slug: not-hot-dog-app
title: "Building a 'Not Hot Dog' App: A Fun Introduction to Image Classification"
authors: [ajay-dhangar]
tags: [ajay-dhangar, AI, machine-learning, image-classification, deep-learning, tutorial]
---

In this blog post, we’ll walk through the process of building a simple image classification app inspired by the "Not Hot Dog" app from the TV show *Silicon Valley*. This app will detect whether an image is a hot dog or not, using deep learning techniques and a pre-trained model.

<!-- truncate -->

## Overview

The "Not Hot Dog" app is a fun way to learn about image classification using machine learning. We’ll use TensorFlow and Keras to train a model that can classify images as either "Hot Dog" or "Not Hot Dog." This tutorial will guide you through:

- Setting up the development environment.
- Preparing the dataset.
- Building and training a neural network.
- Creating a simple web app to deploy the model.

## Prerequisites

Before we get started, make sure you have the following:

- **Basic Python knowledge**.
- **Familiarity with machine learning concepts** (helpful but not required).
- **Python and pip installed on your system**.

## Step 1: Setting Up the Environment

First, install the required libraries:

```bash
pip install tensorflow keras numpy pillow flask
```

We’ll use **TensorFlow** and **Keras** for building the model, **Pillow** for image processing, and **Flask** to create a simple web interface.

## Step 2: Preparing the Dataset

You’ll need a dataset of images containing hot dogs and non-hot dog items. You can find datasets online or create your own by collecting images from the web.

Organize the dataset into two folders:
- `data/hot_dog/`
- `data/not_hot_dog/`

## Step 3: Building the Model

Now, let’s build a simple convolutional neural network (CNN) to classify the images.

```python title="model.py"
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense

# Define the model
model = Sequential([
    Conv2D(32, (3, 3), activation='relu', input_shape=(64, 64, 3)),
    MaxPooling2D(pool_size=(2, 2)),
    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D(pool_size=(2, 2)),
    Flatten(),
    Dense(128, activation='relu'),
    Dense(1, activation='sigmoid')
])

# Compile the model
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Display the model summary
model.summary()
```

The model architecture consists of two convolutional layers followed by pooling, flattening, and two dense layers. The final output layer uses a sigmoid activation function for binary classification.

## Step 4: Training the Model

Let’s load the data and train the model.

```python title="train.py"
from tensorflow.keras.preprocessing.image import ImageDataGenerator

# Data augmentation and preprocessing
train_datagen = ImageDataGenerator(rescale=1./255, shear_range=0.2, zoom_range=0.2, horizontal_flip=True)
training_set = train_datagen.flow_from_directory('data', target_size=(64, 64), batch_size=32, class_mode='binary')

# Train the model
model.fit(training_set, epochs=10, steps_per_epoch=100)
```

This code uses data augmentation to improve the model’s performance by slightly modifying the training images.

## Step 5: Creating a Simple Web App

Now, we’ll create a basic web app using Flask to deploy the model.

```python title="app.py"
from flask import Flask, request, render_template
from tensorflow.keras.preprocessing import image
import numpy as np

app = Flask(__name__)

# Load the trained model
model.load_weights('model.h5')

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        file = request.files['file']
        img = image.load_img(file, target_size=(64, 64))
        img_array = image.img_to_array(img) / 255.0
        img_array = np.expand_dims(img_array, axis=0)
        prediction = model.predict(img_array)[0][0]
        result = "Hot Dog" if prediction > 0.5 else "Not Hot Dog"
        return render_template('index.html', result=result)
    return render_template('index.html', result=None)

if __name__ == '__main__':
    app.run(debug=True)
```

The above code sets up a basic Flask server that loads the model and predicts whether an uploaded image is a hot dog or not.

## Step 6: Testing the App

1. **Save the trained model**:

   ```python title="model.py"
   model.save('model.h5')
   ```

2. **Create a simple `index.html` file** in a `templates` folder:

   ```html title="templates/index.html"
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Not Hot Dog App</title>
   </head>
   <body>
       <h1>Not Hot Dog App</h1>
       <form action="/" method="post" enctype="multipart/form-data">
           <input type="file" name="file" accept="image/*" required>
           <button type="submit">Check</button>
       </form>
       <h2>{{ result }}</h2>
   </body>
   </html>
   ```

3. **Run the Flask app**:

   ```bash
   python app.py
   ```

4. **Open `http://localhost:5000/`** in your browser, upload an image, and see if it’s classified as a "Hot Dog" or "Not Hot Dog".

## Conclusion

Congratulations! You've built a basic "Not Hot Dog" app using image classification techniques. This project demonstrates how fun and accessible AI development can be. For further learning, consider adding features like using a more sophisticated model, deploying the app to a cloud platform, or expanding the app’s functionality.