import csv


def clean_csv(input_file, output_file):
    """
  Cleans a CSV file by removing entries with missing GPA or GRE values.

  Args:
    input_file: Path to the CSV file to be cleaned.
    output_file: Path to write the cleaned CSV file.
  """
    with open(input_file, 'r') as infile, open(output_file, 'w', newline='') as outfile:
        reader = csv.reader(infile)
        writer = csv.writer(outfile)
        writer.writerow(next(reader))  # Copy header row
        for row in reader:
            if not any(val == 'null' or val == '' for val in (row[6], row[7])):  # Check GPA and GRE
                writer.writerow(row)


# Replace 'your_file.csv' with the actual path to your file
clean_csv('work_files/combined_data.csv', 'work_files/cleaned_file.csv')

print("Cleaning completed! Check 'cleaned_file.csv' for the processed data.")
