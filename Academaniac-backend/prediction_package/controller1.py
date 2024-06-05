import pandas as pd


def filter_csv_by_second_column_count(csv_file, min_count=10):
    """
  Reads a CSV file, removes rows where the second column value has fewer than
  the specified minimum occurrences, and saves the filtered data to a new CSV.

  Args:
      csv_file: Path to the CSV file.
      min_count: Minimum number of occurrences required for a value in the second column.
  """

    # Read the CSV file
    df = pd.read_csv(csv_file)

    # Count occurrences of each value in the second column
    value_counts = df.iloc[:, 1].value_counts()

    # Filter rows based on value counts
    filtered_df = df[df.iloc[:, 1].isin(value_counts[value_counts >= min_count].index)]

    # Create a new filename with "_filtered" appended
    filtered_csv_file = csv_file.split(".")[0] + "_filtered.csv"

    # Save the filtered data to the new CSV
    filtered_df.to_csv(filtered_csv_file, index=False)

    print(f"Filtered data saved to: {filtered_csv_file}")


# Example usage with min_count=5 (you can adjust this value)
csv_file = "finalized_files/training_cgpa.csv"
filter_csv_by_second_column_count(csv_file)
