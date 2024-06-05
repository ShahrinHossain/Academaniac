import pandas as pd
import os


def combine_csvs_from_folder(folder_path, output_file):
    """
  Combines all CSV files with the same format from a folder into a single CSV file.

  Args:
      folder_path: Path to the folder containing the CSV files.
      output_file: Path to write the combined CSV file.
  """

    all_files = []
    for filename in os.listdir(folder_path):
        if filename.endswith(".csv"):
            file_path = os.path.join(folder_path, filename)
            all_files.append(pd.read_csv(file_path))

    if not all_files:
        print(f"No CSV files found in directory: {folder_path}")
        return

    combined_df = pd.concat(all_files, ignore_index=True)  # Concatenate with reset index
    combined_df.to_csv(output_file, index=False)

    print(f"CSV files from '{folder_path}' combined successfully! Check '{output_file}'.")


# Example usage:
source_folder = "source_files"
combined_file = "work_files/combined_data.csv"
combine_csvs_from_folder(source_folder, combined_file)
