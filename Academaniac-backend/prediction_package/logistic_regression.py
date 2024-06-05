import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, precision_score, recall_score, roc_auc_score


# Example data loading (replace with your actual data)
data = pd.read_csv('finalized_files/training.csv')

# Encode categorical variables
label_encoder = LabelEncoder()
data['Program'] = label_encoder.fit_transform(data['Program'])

# Encode target variable
data['Decision'] = data['Decision'].apply(lambda x: 1 if x == 'Accepted' else 0)

# Separate features and target
X = data[['University', 'Program', 'GPA', 'GRE']]
y = data['Decision']

# Split data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)


# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Initialize and train the model
logreg = LogisticRegression()
logreg.fit(X_train_scaled, y_train)


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


def predict_admission(university_rank, department, undergrad_cgpa, gre_score):
    """
    Predict the probability of admission for a student.
    
    Parameters:
    university_rank (int): Rank of the applied university.
    department (str): Department applied.
    undergrad_cgpa (float): Student's undergraduate CGPA.
    gre_score (float): Student's GRE score.
    
    Returns:
    float: Predicted probability of admission.
    """
    input_data = pd.DataFrame({
        'University': [university_rank],
        'Program': [department],
        'GPA': [undergrad_cgpa],
        'GRE': [gre_score]
    })
    
    # Encode department
    input_data['Program'] = label_encoder.transform(input_data['Program'])
    
    # Scale input data
    input_data_scaled = scaler.transform(input_data)
    
    # Predict probability
    admission_prob = logreg.predict_proba(input_data_scaled)[:, 1]
    
    return admission_prob[0]

# Example usage:
university_rank = 500
department = 1
undergrad_cgpa = 3.99
gre_score = 320

admission_probability = predict_admission(university_rank, department, undergrad_cgpa, gre_score)
print(f"Predicted probability of admission: {admission_probability}")



