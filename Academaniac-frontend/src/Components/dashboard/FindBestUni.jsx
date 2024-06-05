import React from 'react';

// Define the CSV data as an array of objects
const csvData1 = [
  {
    university: "Australia Awards Scholarships",
    level: "Bachelors / Masters / PhD",
    benefits: "Full tuition, return air travel, establishment allowance, contribution to living expenses",
    link: "https://scholarshiproar.com/fully-funded-masters-scholarships-in-usa/#19"
  },
  {
    university: "Griffith Vice Chancellor’s International Scholarship",
    level: "Bachelors / Masters",
    benefits: "50% of tuition fees for the duration of the program",
    link: "https://scholarshiproar.com/fully-funded-masters-scholarships-in-usa/#20"
  },
  {
    university: "University of Sydney International Scholarship",
    level: "Masters by Research / PhD",
    benefits: "Tuition fees, living allowance for up to 3 years",
    link: "https://scholarshiproar.com/fully-funded-masters-scholarships-in-usa/#21"
  },
  {
    university: "Macquarie University International Scholarships",
    level: "Undergraduate / Postgraduate",
    benefits: "Partial tuition fee up to AUD 10,000",
    link: "https://scholarshiproar.com/fully-funded-masters-scholarships-in-usa/#22"
  },
  {
    university: "University of Melbourne Graduate Research Scholarships",
    level: "Masters / PhD",
    benefits: "Full fee offset, living allowance, relocation grant, health cover",
    link: "https://scholarshiproar.com/fully-funded-masters-scholarships-in-usa/#23"
  },
  {
    university: "Melbourne International Undergraduate Scholarships",
    level: "Bachelors",
    benefits: "Up to AUD 56,000 over 3 years",
    link: "https://scholarshiproar.com/fully-funded-masters-scholarships-in-usa/#24"
  },
  {
    university: "Adelaide Global Academic Excellence Scholarships",
    level: "Undergraduate / Postgraduate",
    benefits: "50% of tuition fees",
    link: "https://scholarshiproar.com/fully-funded-masters-scholarships-in-usa/#25"
  },
  {
    university: "University of New South Wales International Scholarships",
    level: "Undergraduate / Postgraduate",
    benefits: "Full or partial tuition fee payment, stipend",
    link: "https://scholarshiproar.com/fully-funded-masters-scholarships-in-usa/#26"
  },
  {
    university: "Australian Awards Leadership Program",
    level: "Masters / PhD",
    benefits: "Leadership development, networking opportunities",
    link: "https://scholarshiproar.com/fully-funded-masters-scholarships-in-usa/#28"
  },
  {
    university: "Global Excellence Scholarship at University of Western Australia",
    level: "Bachelors / Postgraduate",
    benefits: "Up to AUD 48,000 over 4 years",
    link: "https://scholarshiproar.com/fully-funded-masters-scholarships-in-usa/#29"
  },
  {
    university: "Macquarie University International Scholarships",
    level: "Undergraduate / Postgraduate",
    benefits: "Partial tuition fee up to AUD 10,000",
    link: "https://www.scholars4dev.com/2306/macquarie-university-scholarships/"
  },
  {
    university: "University of Sydney International Scholarship",
    level: "Masters by Research / PhD",
    benefits: "Tuition fees, living allowance for up to 3 years",
    link: "https://www.scholars4dev.com/2325/university-of-sydney-scholarships/"
  },
  {
    university: "Melbourne International Undergraduate Scholarships",
    level: "Bachelors",
    benefits: "Up to AUD 56,000 over 3 years",
    link: "https://www.scholars4dev.com/2326/melbourne-undergraduate-scholarships/"
  },
  {
    university: "Adelaide Global Academic Excellence Scholarships",
    level: "Undergraduate / Postgraduate",
    benefits: "50% of tuition fees",
    link: "https://www.scholars4dev.com/2330/adelaide-global-academic-excellence-scholarships/"
  },
  {
    university: "University of New South Wales International Scholarships",
    level: "Undergraduate / Postgraduate",
    benefits: "Full or partial tuition fee payment, stipend",
    link: "https://www.scholars4dev.com/2340/unsw-international-scholarships/"
  },
  {
    university: "University of Melbourne Graduate Research Scholarships",
    level: "Masters / PhD",
    benefits: "Full fee offset, living allowance, relocation grant, health cover",
    link: "https://www.scholars4dev.com/2350/melbourne-graduate-research-scholarships/"
  },
  {
    university: "Charles Darwin University Vice-Chancellor’s International High Achievers Scholarships",
    level: "Undergraduate / Postgraduate",
    benefits: "25-50% tuition fee",
    link: "https://www.scholars4dev.com/2360/cdu-vice-chancellor-international-scholarships/"
  },
  {
    university: "Flinders International Postgraduate Scholarships",
    level: "Masters / PhD",
    benefits: "Tuition fees, living allowance, establishment allowance, relocation costs, airfares",
    link: "https://www.scholars4dev.com/2370/flinders-international-postgraduate-scholarships/"
  },
  {
    university: "University of Western Australia Global Excellence Scholarship",
    level: "Bachelors / Postgraduate",
    benefits: "Up to AUD 48,000 over 4 years",
    link: "https://www.scholars4dev.com/2380/uwa-global-excellence-scholarships/"
  },
  {
    university: "CMU Australia Scholarships for International Students",
    level: "Masters",
    benefits: "Varies",
    link: "https://www.scholars4dev.com/2390/cmu-australia-scholarships/"
  }
];


const FindBestUni = () => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>University / Program</th>
          <th>Level of Study</th>
          <th>Benefits</th>
          <th>Details Link</th>
        </tr>
      </thead>
      <tbody>
        {csvData1.map((item, index) => (
          <tr key={index}>
            <td>{item.university}</td>
            <td>{item.level}</td>
            <td>{item.benefits}</td>
            <td><a href={item.link} target="_blank" rel="noopener noreferrer">Link</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FindBestUni;
