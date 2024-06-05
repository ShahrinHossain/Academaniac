import pandas as pd


def filter_csv_by_fourth_column_value(csv_file, output_file, desired_value="University of Alberta"):
    """
  Reads a CSV file, removes rows where the 4th column value doesn't match the
  desired value, and saves the filtered data to a new CSV file.

  Args:
      csv_file: Path to the CSV file.
      output_file: Path to save the filtered CSV file.
      desired_value: The value to match in the 4th column (default "masters").
  """

    # Read the CSV file into a DataFrame
    df = pd.read_csv(csv_file)

    # Filter rows based on the desired value in the 4th column
    # filtered_df = df[df.iloc[:, 3] == desired_value]
    filtered_df = df[df.iloc[:, 0] == desired_value]


    # Save the filtered data to a new CSV
    filtered_df.to_csv(output_file, index=False)

    print(f"Filtered data saved to: {output_file}")


# Example usage
csv_file = "work_files/combined_data.csv"
output_file = csv_file.split(".")[0] + "_filtered.csv"  # Create output with "_filtered" suffix
filter_csv_by_fourth_column_value(csv_file, output_file)
