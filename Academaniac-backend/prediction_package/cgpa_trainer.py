import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler, LabelEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, precision_score, recall_score, roc_auc_score
import joblib

# File paths
existing_data_path = 'finalized_files/training_cgpa_shuffled.csv'
new_data_path = 'finalized_files/new_data_cgpa.csv'
model_path = 'saved_models/cgpa/logistic_regression_model.joblib'
scaler_path = 'saved_models/cgpa/scaler.joblib'
label_encoder_path = 'saved_models/cgpa/label_encoder.joblib'

# Load existing data
existing_data = pd.read_csv(existing_data_path)

# Load new data
new_data = pd.read_csv(new_data_path)

# Combine datasets
data = pd.concat([existing_data, new_data], ignore_index=True)

# Shuffle the combined dataset
data = data.sample(frac=1, random_state=42).reset_index(drop=True)

print(data)

# Encode categorical variables
label_encoder = LabelEncoder()
data['Program'] = label_encoder.fit_transform(data['Program'])

# Encode target variable
data['Decision'] = data['Decision'].apply(lambda x: 0 if x == 'Rejected' else 1)

# Separate features and target
X = data[['University', 'Program', 'GPA']]
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
joblib.dump(logreg, model_path)
joblib.dump(scaler, scaler_path)
joblib.dump(label_encoder, label_encoder_path)

# Decode the decision column back to 'Rejected' and 'Accepted'
data['Decision'] = data['Decision'].apply(lambda x: 'Rejected' if x == 0 else 'Accepted')

# Save the combined and shuffled data back to the original file
data.to_csv(existing_data_path, index=False)

# Empty the new data file while retaining headers
empty_new_data = pd.DataFrame(columns=new_data.columns)
empty_new_data.to_csv(new_data_path, index=False)

# Calculate metrics
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
