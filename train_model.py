"""
Central Jakarta Flood Prediction - Random Forest Model Training
Dataset: 8 districts with 20 parameters
"""

#Install dependencies first
#pip install pandas numpy scikit-learn joblib flask flask-cors matplotlib seaborn

import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.ensemble import RandomForestClassifier, RandomForestRegressor
from sklearn.metrics import classification_report, confusion_matrix, mean_squared_error, r2_score
import joblib
import matplotlib.pyplot as plt
import seaborn as sns

# ============================================
# 1. LOAD AND EXPLORE DATA
# ============================================

print("=" * 60)
print("CENTRAL JAKARTA FLOOD PREDICTION MODEL TRAINING")
print("=" * 60)

# Load dataset
df = pd.read_csv('central_jakarta_flood_data.csv')

print("\n📊 Dataset Information:")
print(f"Total samples: {len(df)}")
print(f"Districts: {df['District'].unique()}")
print(f"\nDataset shape: {df.shape}")
print(f"\nFirst few rows:")
print(df.head())

print(f"\nDataset statistics:")
print(df.describe())

# Check for missing values
print(f"\nMissing values: {df.isnull().sum().sum()}")

# ============================================
# 2. PREPARE DATA
# ============================================

print("\n" + "=" * 60)
print("DATA PREPARATION")
print("=" * 60)

# Features (X) - All 20 parameters
feature_columns = [
    'MonsoonIntensity', 'TopographyDrainage', 'RiverManagement', 
    'Deforestation', 'Urbanization', 'ClimateChange', 'DamsQuality', 
    'Siltation', 'AgriculturalPractices', 'Encroachments', 
    'IneffectiveDisasterPreparedness', 'DrainageSystems', 
    'CoastalVulnerability', 'Landslides', 'Watersheds', 
    'DeterioratingInfrastructure', 'PopulationScore', 'WetlandLoss', 
    'InadequatePlanning', 'PoliticalFactors'
]

X = df[feature_columns]
y = df['FloodProbability']

print(f"\nFeatures (X) shape: {X.shape}")
print(f"Target (y) shape: {y.shape}")

# Split data (80% train, 20% test)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=None
)

print(f"\nTraining set size: {len(X_train)}")
print(f"Test set size: {len(X_test)}")

# ============================================
# 3. TRAIN RANDOM FOREST REGRESSOR
# ============================================

print("\n" + "=" * 60)
print("MODEL TRAINING - RANDOM FOREST REGRESSOR")
print("=" * 60)

# Initialize Random Forest Regressor
rf_regressor = RandomForestRegressor(
    n_estimators=100,           # Number of trees
    max_depth=10,               # Maximum depth of trees
    min_samples_split=5,        # Minimum samples to split a node
    min_samples_leaf=2,         # Minimum samples at leaf node
    random_state=42,
    n_jobs=-1                   # Use all CPU cores
)

# Train the model
print("\n🌲 Training Random Forest Regressor...")
rf_regressor.fit(X_train, y_train)
print("✅ Training completed!")

# Make predictions
y_pred = rf_regressor.predict(X_test)

# Evaluate the model
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, y_pred)

print("\n📈 Model Performance:")
print(f"Mean Squared Error (MSE): {mse:.4f}")
print(f"Root Mean Squared Error (RMSE): {rmse:.4f}")
print(f"R² Score: {r2:.4f}")

# Cross-validation
cv_scores = cross_val_score(rf_regressor, X, y, cv=5, scoring='r2')
print(f"\n🔄 Cross-Validation R² Scores: {cv_scores}")
print(f"Mean CV R² Score: {cv_scores.mean():.4f} (+/- {cv_scores.std() * 2:.4f})")

# ============================================
# 4. FEATURE IMPORTANCE ANALYSIS
# ============================================

print("\n" + "=" * 60)
print("FEATURE IMPORTANCE ANALYSIS")
print("=" * 60)

# Get feature importance
feature_importance = pd.DataFrame({
    'Feature': feature_columns,
    'Importance': rf_regressor.feature_importances_
}).sort_values('Importance', ascending=False)

print("\n🔝 Top 10 Most Important Features:")
print(feature_importance.head(10))

# ============================================
# 5. SAVE THE MODEL
# ============================================

print("\n" + "=" * 60)
print("SAVING MODEL")
print("=" * 60)

# Save the trained model
model_filename = 'central_jakarta_flood_model.pkl'
joblib.dump(rf_regressor, model_filename)
print(f"\n✅ Model saved as: {model_filename}")

# Save feature importance
feature_importance.to_csv('feature_importance.csv', index=False)
print(f"✅ Feature importance saved as: feature_importance.csv")

# ============================================
# 6. TEST PREDICTIONS FOR EACH DISTRICT
# ============================================

print("\n" + "=" * 60)
print("SAMPLE PREDICTIONS BY DISTRICT")
print("=" * 60)

# Get one sample from each district
districts = df['District'].unique()

for district in districts:
    district_data = df[df['District'] == district].iloc[0]
    X_sample = district_data[feature_columns].values.reshape(1, -1)
    prediction = rf_regressor.predict(X_sample)[0]
    actual = district_data['FloodProbability']
    
    # Determine risk level
    if prediction >= 0.75:
        risk_level = "CRITICAL"
    elif prediction >= 0.50:
        risk_level = "HIGH"
    elif prediction >= 0.25:
        risk_level = "MEDIUM"
    else:
        risk_level = "LOW"
    
    print(f"\n{district}:")
    print(f"  Predicted: {prediction:.2f} | Actual: {actual:.2f} | Risk: {risk_level}")

# ============================================
# 7. CREATE VISUALIZATION (OPTIONAL)
# ============================================

print("\n" + "=" * 60)
print("CREATING VISUALIZATIONS")
print("=" * 60)

# Feature Importance Plot
plt.figure(figsize=(12, 8))
plt.barh(feature_importance['Feature'].head(10), feature_importance['Importance'].head(10))
plt.xlabel('Importance')
plt.title('Top 10 Most Important Features for Flood Prediction')
plt.tight_layout()
plt.savefig('feature_importance_plot.png', dpi=300, bbox_inches='tight')
print("✅ Feature importance plot saved as: feature_importance_plot.png")

# Prediction vs Actual Plot
plt.figure(figsize=(10, 6))
plt.scatter(y_test, y_pred, alpha=0.6)
plt.plot([y_test.min(), y_test.max()], [y_test.min(), y_test.max()], 'r--', lw=2)
plt.xlabel('Actual Flood Probability')
plt.ylabel('Predicted Flood Probability')
plt.title('Random Forest: Predicted vs Actual Flood Probability')
plt.tight_layout()
plt.savefig('prediction_vs_actual.png', dpi=300, bbox_inches='tight')
print("✅ Prediction vs Actual plot saved as: prediction_vs_actual.png")

print("\n" + "=" * 60)
print("✅ MODEL TRAINING COMPLETE!")
print("=" * 60)
print("\nNext steps:")
print("1. Use 'central_jakarta_flood_model.pkl' in your Flask API")
print("2. Check 'feature_importance.csv' to see which factors matter most")
print("3. Review the plots to understand model performance")
print("=" * 60)