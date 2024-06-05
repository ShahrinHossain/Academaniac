import csv
import random


def randomize_csv(csv_file, output_file):
    """
  Reads a CSV file, randomizes the order of the rows, and saves them to a new CSV file.

  Args:
      csv_file: Path to the CSV file to randomize.
      output_file: Path to save the randomized CSV file.
  """

    # Read the CSV file into a list of rows
    with open(csv_file, 'r') as f:
        reader = csv.reader(f)
        rows = list(reader)

    # Randomly shuffle the rows
    random.shuffle(rows)

    # Write the randomized rows to a new CSV file
    with open(output_file, 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerows(rows)

    print(f"CSV file randomized and saved to: {output_file}")


# Example usage
# csv_file = "finalized_files/training_cgpa.csv"
csv_file = "finalized_files/training_gre.csv"
output_file = csv_file.split(".")[0] + "_shuffled.csv"  # Create output with "_shuffled" suffix
randomize_csv(csv_file, output_file)
