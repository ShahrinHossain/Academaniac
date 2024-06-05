import pandas as pd
import joblib

# Load the saved model and scalers
logreg = joblib.load('prediction_package/saved_models/cgpa/logistic_regression_model.joblib')
scaler = joblib.load('prediction_package/saved_models/cgpa/scaler.joblib')
label_encoder = joblib.load('prediction_package/saved_models/cgpa/label_encoder.joblib')


def predict_admission(university_rank, department, undergrad_cgpa):
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
        'GPA': [undergrad_cgpa]
    })

    # Encode department
    input_data['Program'] = label_encoder.transform(input_data['Program'])

    # Scale input data using the same scaler
    input_data_scaled = scaler.transform(input_data)

    # Predict probability
    admission_prob = logreg.predict_proba(input_data_scaled)[:, 1]

    return admission_prob[0]


# Example usage:
university_rank = 500
department = 1
undergrad_cgpa = 3.98

admission_probability = predict_admission(university_rank, department, undergrad_cgpa)
print(f"Predicted probability of admission: {admission_probability}")
