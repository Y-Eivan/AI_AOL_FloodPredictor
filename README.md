# Jakarta Flood Risk Predictor

A web app that estimates flood risk for districts in Central Jakarta. A Random Forest model, trained on 20 environmental and infrastructure factors, is served through a Flask REST API. The front end is a landing page plus an interactive dashboard, designed in Figma and built in plain HTML, CSS and JavaScript.

Built as a team project for the Artificial Intelligence course at BINUS University.

[Figma design](https://www.figma.com/design/wrlBFwrCILeWqTT6ppkUfV/Untitled?node-id=0-1)

<img width="1920" height="2062" alt="Dashboard" src="https://github.com/user-attachments/assets/5f1b5235-1755-43ca-8f86-89557de59ee5" />


## Features

- **Landing page** with scroll animations and animated stat counters
- **Interactive district map**: an SVG map of 8 Central Jakarta districts, color-coded by risk level (Low, Medium, High, Critical). Click a district to load its details.
- **District search** with autocomplete suggestions and an error notice for unknown districts
- **Risk dashboard**: stat cards for risk level, rainfall, water level, land subsidence, active alerts and population at risk, plus tabs for weather, topography and infrastructure details
- **REST API** that returns a flood probability and risk level for one district or a batch of districts

## Tech stack

| Layer | Tools |
| --- | --- |
| Model | Python, scikit-learn (RandomForestRegressor), pandas, joblib |
| API | Flask, Flask-CORS |
| Front end | HTML, CSS, JavaScript (no framework) |
| Design | Figma |

## Model

- **Data:** Kaggle flood prediction dataset with 20 numeric features, such as MonsoonIntensity, DrainageSystems, Urbanization, Deforestation and ClimateChange. The target is `FloodProbability`.
- **Model:** `RandomForestRegressor` with 100 trees and a max depth of 10
- **Evaluation:** MSE, RMSE and R² on a 20% held-out test set, plus 5-fold cross-validated R²



## API

The API runs on `http://localhost:5000`.

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/` | API info and list of endpoints |
| GET | `/health` | Status and whether the model is loaded |
| GET | `/features` | The 20 feature names the model expects |
| POST | `/predict` | Flood probability and risk level for one district |
| POST | `/predict-batch` | Predictions for several districts at once |

Example request to `/predict` (all 20 features are required; the endpoint returns 400 and lists any that are missing):

```json
{
  "district": "Menteng",
  "MonsoonIntensity": 72,
  "TopographyDrainage": 62,
  "...": "the other 18 features"
}
```

The response includes `floodProbability`, `riskLevel` (LOW, MEDIUM, HIGH or CRITICAL) and a color for the UI.

## Running it locally

```bash
# 1. Install dependencies
pip install flask flask-cors scikit-learn pandas numpy joblib

# 2. Train the model (creates central_jakarta_flood_model.pkl)
python train_model.py

# 3. Start the API
python api.py

# 4. Open index.html in your browser
```

## Project structure

```
index.html, landing.css, landing.js     Landing page
dashboard.html, dashboard.css,
dashboard.js, component.css             Dashboard
api.py                                  Flask API
train_model.py                          Model training and evaluation
central_jakarta_flood_data.csv          Dataset
```

## Current limitations and next steps

- The dashboard currently displays sample data for each district. The next step is to connect it to the `/predict` endpoint so the cards and map show live model output.
- The features come from a general flood dataset rather than measured Jakarta data, so predictions are illustrative.

## Team

- **Yonathan Eivan Riyadi:** co-lead; chose the model, prepared the dataset, designed the UI in Figma and built the web app
- <!-- Teammate name: role -->
