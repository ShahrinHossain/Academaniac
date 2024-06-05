import pandas as pd

# Read the CSV file into a DataFrame
df = pd.read_csv("work_files/cleaned_file.csv")

# Specify the columns to remove (by name or index)
columns_to_remove = ["Date", "Season", "Nationality", "Comments"]  # By name
# OR
# columns_to_remove = [3, 4, 5]  # By index (starting from 0)

# Drop the unwanted columns
df = df.drop(columns_to_remove, axis=1)

# Save the modified DataFrame to a new CSV file
df.to_csv("work_files/fields_removed.csv", index=False)
