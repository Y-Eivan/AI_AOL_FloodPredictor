"""
Central Jakarta Flood Prediction API
Flask API for serving Random Forest model predictions
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend requests

# Load the trained model
try:
    model = joblib.load('central_jakarta_flood_model.pkl')
    print("✅ Model loaded successfully!")
except Exception as e:
    print(f"❌ Error loading model: {e}")
    model = None

# Feature names (must match training order)
FEATURE_NAMES = [
    'MonsoonIntensity', 'TopographyDrainage', 'RiverManagement', 
    'Deforestation', 'Urbanization', 'ClimateChange', 'DamsQuality', 
    'Siltation', 'AgriculturalPractices', 'Encroachments', 
    'IneffectiveDisasterPreparedness', 'DrainageSystems', 
    'CoastalVulnerability', 'Landslides', 'Watersheds', 
    'DeterioratingInfrastructure', 'PopulationScore', 'WetlandLoss', 
    'InadequatePlanning', 'PoliticalFactors'
]

def get_risk_level(probability):
    """Convert flood probability to risk level"""
    if probability >= 0.75:
        return 'CRITICAL', 'risk-critical', '😱'
    elif probability >= 0.50:
        return 'HIGH', 'risk-high', '😰'
    elif probability >= 0.25:
        return 'MEDIUM', 'risk-medium', '😐'
    else:
        return 'LOW', 'risk-low', '😊'

def calculate_derived_metrics(probability, district_data):
    """Calculate additional metrics based on flood probability"""
    # Base values (you can adjust these formulas)
    rainfall = 30 + (probability * 70)  # 30-100 mm/h range
    water_level = 1.5 + (probability * 3.5)  # 1.5-5.0 m range
    subsidence = 4 + (probability * 8)  # 4-12 cm/yr range
    active_alerts = int(5 + (probability * 20))  # 5-25 alerts
    population_at_risk = int(10000 + (probability * 30000))  # 10k-40k people
    
    return {
        'rainfall': round(rainfall, 1),
        'waterLevel': round(water_level, 1),
        'subsidence': round(subsidence, 1),
        'activeAlerts': active_alerts,
        'populationAtRisk': population_at_risk
    }

@app.route('/')
def home():
    """API home endpoint"""
    return jsonify({
        'message': 'Central Jakarta Flood Prediction API',
        'version': '1.0',
        'status': 'active',
        'endpoints': {
            '/predict': 'POST - Predict flood probability',
            '/health': 'GET - Check API health'
        }
    })

@app.route('/health')
def health():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'model_loaded': model is not None
    })

@app.route('/predict', methods=['POST'])
def predict():
    """
    Predict flood probability based on input parameters
    
    Expected JSON input:
    {
        "district": "Menteng",
        "MonsoonIntensity": 72,
        "TopographyDrainage": 62,
        ... (all 20 features)
    }
    """
    if model is None:
        return jsonify({'error': 'Model not loaded'}), 500
    
    try:
        data = request.json
        
        if not data:
            return jsonify({'error': 'No data provided'}), 400
        
        # Extract features in correct order
        features = []
        missing_features = []
        
        for feature in FEATURE_NAMES:
            if feature in data:
                features.append(float(data[feature]))
            else:
                missing_features.append(feature)
        
        if missing_features:
            return jsonify({
                'error': 'Missing required features',
                'missing_features': missing_features
            }), 400
        
        # Convert to numpy array for prediction
        features_array = np.array([features])
        
        # Make prediction
        flood_probability = model.predict(features_array)[0]
        
        # Get risk level
        risk_level, risk_color, emoji = get_risk_level(flood_probability)
        
        # Calculate derived metrics
        district_name = data.get('district', 'Unknown')
        derived_metrics = calculate_derived_metrics(flood_probability, data)
        
        # Prepare response
        response = {
            'district': district_name,
            'floodProbability': round(float(flood_probability), 4),
            'riskLevel': risk_level,
            'riskColor': risk_color,
            'emoji': emoji,
            'metrics': {
                'rainfall': derived_metrics['rainfall'],
                'waterLevel': derived_metrics['waterLevel'],
                'subsidence': derived_metrics['subsidence'],
                'activeAlerts': derived_metrics['activeAlerts'],
                'populationAtRisk': derived_metrics['populationAtRisk']
            },
            'inputFeatures': dict(zip(FEATURE_NAMES, features))
        }
        
        return jsonify(response), 200
        
    except Exception as e:
        return jsonify({
            'error': 'Prediction failed',
            'message': str(e)
        }), 500

@app.route('/predict-batch', methods=['POST'])
def predict_batch():
    """
    Predict flood probability for multiple districts
    
    Expected JSON input:
    {
        "districts": [
            {"district": "Menteng", "MonsoonIntensity": 72, ...},
            {"district": "Gambir", "MonsoonIntensity": 70, ...}
        ]
    }
    """
    if model is None:
        return jsonify({'error': 'Model not loaded'}), 500
    
    try:
        data = request.json
        districts_data = data.get('districts', [])
        
        if not districts_data:
            return jsonify({'error': 'No districts data provided'}), 400
        
        results = []
        
        for district_data in districts_data:
            # Extract features
            features = [float(district_data.get(f, 0)) for f in FEATURE_NAMES]
            features_array = np.array([features])
            
            # Make prediction
            flood_probability = model.predict(features_array)[0]
            risk_level, risk_color, emoji = get_risk_level(flood_probability)
            
            results.append({
                'district': district_data.get('district', 'Unknown'),
                'floodProbability': round(float(flood_probability), 4),
                'riskLevel': risk_level,
                'riskColor': risk_color,
                'emoji': emoji
            })
        
        return jsonify({'predictions': results}), 200
        
    except Exception as e:
        return jsonify({
            'error': 'Batch prediction failed',
            'message': str(e)
        }), 500

@app.route('/features', methods=['GET'])
def get_features():
    """Get list of required features"""
    return jsonify({
        'features': FEATURE_NAMES,
        'total': len(FEATURE_NAMES)
    })

if __name__ == '__main__':
    print("=" * 60)
    print("🌊 Central Jakarta Flood Prediction API")
    print("=" * 60)
    print("Starting server on http://localhost:5000")
    print("=" * 60)
    app.run(debug=True, host='0.0.0.0', port=5000)