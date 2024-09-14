Overview

- This project is a machine learning model designed to predict house prices based on various features such as location, size, and other relevant factors. It involves data preprocessing, feature engineering, model training using multiple algorithms, and model evaluation. The project also includes a simple web application to provide a user interface for predicting house prices.

- The project demonstrates the full cycle of building a machine learning model, from exploratory data analysis (EDA) to model deployment.

Key Features:

- Data Preprocessing: Handles missing values, outlier detection, and feature scaling.
- Exploratory Data Analysis (EDA): Visualizes key relationships and insights within the dataset.
- Feature Engineering: Creates new features that improve model performance.
- Model Training: Implements and trains multiple models such as XGBoost.
- Model Evaluation: Uses RMSE and R-Squared to evaluate the accuracy of the model.
- Web API: A simple Flask-based API to serve predictions based on user input.

Technologies Used:

Programming Language: Python
Libraries:
Pandas, NumPy: For data manipulation and analysis
Matplotlib, Seaborn: For data visualization
Scikit-learn, XGBoost: For building machine learning models
Flask: For deploying the model as a web API
Data Source: Kaggle House Prices Dataset

Installation

To run this project on your local machine:

Clone the repository:
- git clone https://github.com/vguerriero/house-price-prediction.git
- cd house-price-prediction

Install required dependencies:
- pip install -r requirements.txt

Run the API server: Navigate to the app/ folder and run the Flask app:
- python app/routes.py
This will start the server at http://localhost:5000 and allow for predictions via API.
Use the Scripts: Run any of the scripts in the scripts/ folder for tasks like data cleaning or model training:
- python scripts/data_cleaning.py

Usage: 

Data Cleaning:
- The data_cleaning.py script processes the raw data in the data/raw/ folder and outputs cleaned data to data/cleaned/.
Exploratory Data Analysis (EDA):
- Use the exploratory_data_analysis.py script to visualize data distributions and relationships.
Feature Engineering:
- feature_engineering.py adds new features such as polynomial features or interaction terms to improve the model’s accuracy.
Model Training:
- Train the house price prediction model using the train_xgboost_model.py script. The model will be saved in the models/ folder as a .pkl file for later use.
Model Deployment:
- The Flask API can be used to predict house prices by sending POST requests with house features.

License

This project is licensed under the MIT License. See the LICENSE file for more details.
