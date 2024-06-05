import csv


def modify_csv(rank, input_file, output_file):
    """
    Modifies a CSV file by setting the first attribute to 1 and mapping
    second attributes to numerical values based on a dictionary. It also
    replaces the last column with the average of the two GRE scores.

    Args:
        :param output_file:
        :param input_file:
        :param rank:
    """
    mapping = {
        "Computational And Mathematical Engineering": 1,
        "Statistics": 2,
        "Energy Science & Engineering": 3,
        "Materials Science And Engineering": 4,
        "Computer Science": 1,
        "East Asian Studies": 6,
        "Architecture": 7,
        "Masters In Transportation (MST)": 8,
        "Finance": 9,
        "Electrical Engineering And Computer Science (EECS)": 10,
        "Mechanical Engineering": 11,
        "Chemical Engineering": 12,
        "Industrial Engineering": 13,
        "Civil Engineering": 14,
        "Biomedical Engineering": 15,
        "Counselling Psychology (CRSE)": 16,
        "Graveyard Science": 17,
        "Bioengineering": 15,
        "Masters Of Translational Research And Applied Medicine": 16,
        "Translational Research And Medicine": 18,
        "Data Science": 19,
        "Electrical Engineering": 10,
        "Civil And Environmental Engineering": 14,
        "Symbolic Systems": 20,
        "East Asian Languages And Cultures": 21,
        "Biomedical Data Science": 22,
        "Material Science And Engineering": 4,
        "Com": 1,
        "Design": 23,
        "MSCS": 1,
        "Ford Dorsey Masters In International Policy": 24,
        "Aeronautics And Astronautics": 25,
        "Aerospace Engineering": 26,
        "International Comparative Education": 27,
        "Management Science And Engineering": 28,
        "Learning Design And Technology": 29,
        "Community Health And Prevention Research (CHPR)": 30,
        "Chinese": 31,
        "Translational Research And Applied Medicine": 32,
        "Energy Science And Engineering": 3,
        "Nuclear Engineering": 33,
        "Technology Policy Program (TPP)": 34,
        "Technology And Policy (TPP)": 34,
        "Media Arts And Sciences": 35,
        "Architecture SMarchS": 7,
        "Smarchs Architectural Design": 7,
        "Technology And Public Policy TPP": 34,
        "Architecture SMArchS A+D": 7,
        "Urban Planning": 7,
        "Computing Science": 1,
        "Philosophy": 35,
        "Liberty and Information Science": 36,
        "History": 37,
        "Chemistry": 38,
        "Urban And Regional Planning": 7,
        "Public Health": 39,
        "School And Clinical Child Psychology": 40,
        "SCCP": 40,
        "Civil And Environmental Engineering - Petroleum Engineering": 14,
        "Modelling, Data, And Predictions": 19,
        "Counseling Psychology": 40,
        "Global Health": 39,
        "Physics": 41,
        "Applied Mathematics": 42,
        "Electrical And Computer Eng.": 10,
        "Psychotherapy": 40,
        "Health Research Methodology": 39,
        "Computing And Software": 1,
        "Economics": 43,
        "English": 44,
        "Psychology": 40,
        "Medical Biophysics": 15,
        "Engineering Design": 23,
        "Ehealth": 39,
        "EHealth": 39,
        "Manufacturing Engineering": 13,
        "Clinical Psychology (Research And Clinical Training Stream)": 40,
        "Clinical Psychology": 40,
        "Health And Aging": 39,
        "Sociology": 45,
        "Economic Policy": 43,
        "Mathematics And Foundations Of Computer Science": 42,
        "Mathematical And Theoretical Physics": 41,
        "Mathematical Sciences": 42,
        "Social Data Science": 19,
        "Statistical Science": 2,
        "English 1550-1700": 44,
        "English MSt 1900-Present": 44,
        "International Relations": 24,
        "Diplomatic Studies Program": 24,
        "Master Of Science In Mathematical Sciences": 42,
        "English, University Of Illinois, Chicago (UIC)": 44,
        "Computer Science, University Of Illinois, Urbana-Champaign": 1,
        "Computer Science, University Of Illinois, Chicago (UIC)": 1,
        "Computer Science, University Of Illinois, Urbana-Champaign (UIUC)": 1,
        "Computer Science, University Of Illinois": 1,
        "Electrical And Computer Engineering, University Of Illinois Urbana - Champaign (UIUC)": 10,
        "Mechanical Engineering, University Of Illinois": 11,
        "Mechanical Engineering, University Of Illinois, Urbana-Champaign": 11,
        "Mechanical Engineering, University Of Illinois Urbana-Champaign (UIUC)": 11,
        "Aerospace Engineering, University Of Illinois": 26,
        "Architecture, University Of Illinois, Chicago (UIC)": 7,
        "Aerospace Engineering, University Of Illinois, Urbana-Champaign": 26,
        "Construction Engineering And Management, University Of Illinois": 14,
        "Civil Engineering, University Of Illinois Urbana-Champaign": 14,
        "Bioinformatics-Computer Science, University Of Illinois Urbana-Champaign": 15,
        "Statistics, University Of Illinois": 2,
        "Computer Science, University Of Illinois, Urbana Champaign": 1,
        "Computer Science, University Of Illinois Urbana-Champaign": 1,
        "Electrical And Computer Engineering, University Of Illinois": 10,
        "Mechanical Engineering, University Of Illinois Urbana Champaign": 11,
        "Economics, University Of Illinois, Chicago (UIC)": 43,
        "Civil And Environmental Engineering, University Of Illinois": 14,
        "Mechanical Engineering, University Of Illinois At Urbana Champaign": 11,
        "Materials Science And Engineering, University Of Illinois": 4,
        "Computer Science, University Of Toronto": 1,
        "Architecture, University Of Toronto": 7,
        "Economics, University Of Toronto": 43,
        "Chemical Engineering And Applied Chemistry, University Of Toronto": 12,
        "Urban Planning, University Of Toronto": 7,
        "Mathematics, University Of Toronto": 42,
        "Public Health, University Of Toronto": 39,
        "Biomedical Engineering MENG, University Of Toronto": 15,
        "Statistics, University Of Toronto": 2,
        "Philosophy, University Of Toronto": 35,
        "Biostatistics, University Of Toronto": 2,
        "Information, University Of Toronto": 1,
        "Master Of Urban Innovation, University Of Toronto": 7,
        "Political Science, University Of Toronto": 45,
        "Global Affairs, University Of Toronto": 24,
        "Physics, University Of Toronto": 41,
        "Electrical And Computer Engineering": 10,
        "Information Systems": 1,
        "Public Policy": 46,
        "Master Of Public Policy": 46,
        "Master Of Information Management And Systems": 1,
        "Information Management And Systems": 1,
        "EECS": 10,
        "City Planning": 7,
        "Artificial Intelligence": 1,
        "Energy And Resource": 3,
        "Mechanical And Aerospace Engineering": 11,
        "Architecture (MArch1)": 7,
        "Analytics (IEOR)": 2,
        "Advanced Architectural Design": 7,
        "Journalism": 47,
        "Electrical Engineering And Computer Science": 10,
        "Information Science": 19,
        "Applied Statistics": 2,
        "Industrial And Operations Engineering": 13,
        "International And Regional Studies: Russia, East Europe, Eurasia": 24,
        "Information (MSI)": 19,
        "Information": 19,
        "Applied Economics": 43,
        "Construction Engineering And Management": 14,
    }

    with open(input_file, "r", newline='') as infile, open(output_file, "w", newline='') as outfile:
        reader = csv.reader(infile)
        writer = csv.writer(outfile)

        # Write the header row (assuming it exists)
        header_row = next(reader)
        writer.writerow(header_row)

        # Modify data rows
        for row in reader:
            first_attribute = rank
            second_attribute = mapping.get(row[1], None)  # Get value from mapping or None

            if second_attribute is not None:
                gre_scores = row[4].split()  # Assuming format is '168V 168Q'
                if len(gre_scores) > 1:
                    gre_v = int(gre_scores[0][:-1])  # Remove the 'V' and convert to int
                    gre_q = int(gre_scores[1][:-1])  # Remove the 'Q' and convert to int
                    gre_sum = gre_v + gre_q
                else:
                    gre_sum = gre_scores[0]

                modified_row = [first_attribute, second_attribute, row[2], row[3], gre_sum]  # Replace GRE column with average
                writer.writerow(modified_row)  # Write row without trailing space
            else:
                print(f"Warning: Skipping row with unknown second attribute: {row[1]}")


# Example usage (replace with your file paths)
modify_csv(111, "work_files/fields_removed.csv", "work_files/final.csv")
