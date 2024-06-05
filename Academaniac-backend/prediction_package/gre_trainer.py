import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler, LabelEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, precision_score, recall_score, roc_auc_score
import joblib

# Example data loading (replace with your actual data)
data = pd.read_csv('finalized_files/training_gre_shuffled.csv')

# data['GPA'] = 10 ** data['GPA']

# Encode categorical variables
label_encoder = LabelEncoder()
# data['Program'] = label_encoder.fit_transform(data['Program'])

# Encode target variable
data['Decision'] = data['Decision'].apply(lambda x: 0 if x == 'Rejected' else 1)

# Separate features and target
X = data[['University', 'GRE']]
# X = data[['University', 'Program', 'GRE']]
y = data['Decision']

# Split data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

# Scale features using MinMaxScaler
scaler = MinMaxScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Initialize and train the model
logreg = LogisticRegression()
logreg.fit(X_train_scaled, y_train)

# Save the model and scalers
joblib.dump(logreg, 'saved_models/gre/logistic_regression_model.joblib')
joblib.dump(scaler, 'saved_models/gre/scaler.joblib')
joblib.dump(label_encoder, 'saved_models/gre/label_encoder.joblib')

# Make predictions
y_train_pred = logreg.predict(X_train_scaled)
y_test_pred = logreg.predict(X_test_scaled)
y_test_prob = logreg.predict_proba(X_test_scaled)[:, 1]

# Calculate metrics
train_accuracy = accuracy_score(y_train, y_train_pred)
test_accuracy = accuracy_score(y_test, y_test_pred)
precision = precision_score(y_test, y_test_pred)
recall = recall_score(y_test, y_test_pred)
roc_auc = roc_auc_score(y_test, y_test_prob)

print(f"Training Accuracy: {train_accuracy}")
print(f"Test Accuracy: {test_accuracy}")
print(f"Precision: {precision}")
print(f"Recall: {recall}")
print(f"ROC-AUC: {roc_auc}")
