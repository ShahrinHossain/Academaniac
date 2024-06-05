import subprocess

subprocess.run(["python", "combine.py"])
subprocess.run(["python", "csv_cleaner.py"])
subprocess.run(["python", "remove_fields.py"])
subprocess.run(["python", "rank_and_dept.py"])
