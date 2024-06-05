const data = {
    america: [
      {
        university: "Fulbright Scholarships USA",
        level: "Masters / PhD",
        benefits: "Full tuition fee, living stipend, full accommodation fee, airfare, and health insurance",
        link: "https://foreign.fulbrightonline.org/apply"
      },
      {
        university: "Stanford University Scholarships",
        level: "Masters / PhD",
        benefits: "Full tuition fees, traveling allowance, living allowance, academic expenses",
        link: "https://scholarshiproar.com/stanford-university-scholarships/"
      },
      {
        university: "Yale University Scholarships USA",
        level: "Undergraduate / Masters / PhD",
        benefits: "Varies from a few hundred dollars to over $70,000 per year",
        link: "https://finaid.yale.edu/costs-affordability/types-aid/scholarships-and-grants"
      },
      {
        university: "University of New Haven Scholarship",
        level: "Masters",
        benefits: "75% tuition assistance, experiential learning and work opportunity, hourly wage",
        link: "https://www.newhaven.edu/admissions/graduate/graduate-assistantships-scholarships/index.php"
      },
      {
        university: "University of Memphis Scholarships",
        level: "Undergraduate / Masters",
        benefits: "Covers the difference in cost of international and domestic non-Tennessee resident tuition rates",
        link: "https://www.memphis.edu/scholarships/opportunities.php"
      },
      {
        university: "University of Minnesota Fellowship",
        level: "Masters",
        benefits: "Full tuition cost, living expenses, travel, and health insurance",
        link: "https://scholarshiproar.com/university-of-minnesota-fellowship/"
      },
      {
        university: "AAUW International Fellowship Program",
        level: "Masters / PhD / Postdoctoral",
        benefits: "$18,000 to $30,000 per year",
        link: "https://scholarshiproar.com/aauw-international-fellowship-program/"
      },
      {
        university: "ACI Foundation Scholarship",
        level: "Undergraduate / Masters / PhD / Postdoctoral",
        benefits: "$10,000 – $15,000 educational stipend for tuition, residence, books, and materials",
        link: "https://scholarshiproar.com/aci-foundation-fellowships-usa/"
      },
      {
        university: "Onsi Sawiris Scholarship",
        level: "Undergraduate / Masters",
        benefits: "Full tuition, living allowance, travel, and health insurance",
        link: "http://www.onsisawirisscholarship.org/graduate-scholarship/"
      },
      {
        university: "Rotary Peace Fellowship Program",
        level: "Masters / Certificate Studies",
        benefits: "Tuition and fees, room and board, round-trip transportation, internship and field-study expenses",
        link: "https://www.rotary.org/en/our-programs/peace-fellowships-masters-degree-programs"
      },
      {
        university: "George Washington University Global Leaders Fellowship",
        level: "Masters/PhD",
        benefits: "Full tuition fees, living stipend, travel allowance",
        link: "https://www.scholars4dev.com/3364/george-washington-university-global-leaders-fellowship/"
    },
    {
        university: "Obama Foundation Scholars Program",
        level: "Masters",
        benefits: "Full funding including tuition, travel, and living expenses",
        link: "https://www.scholars4dev.com/3365/obama-foundation-scholars-program/"
    },
    {
        university: "Stanford Africa MBA Fellowship",
        level: "MBA",
        benefits: "Full tuition, room, board, travel expenses",
        link: "https://www.scholars4dev.com/3366/stanford-africa-mba-fellowship/"
    },
    {
        university: "Harvard Fellowships in Sustainability Science",
        level: "Doctoral/Postdoctoral",
        benefits: "Full funding including tuition, travel, and living expenses",
        link: "https://www.scholars4dev.com/3367/harvard-fellowships-in-sustainability-science/"
    },
    {
        university: "Microsoft Research Women’s Fellowship Program",
        level: "PhD",
        benefits: "Full funding including tuition, travel, and living expenses",
        link: "https://www.scholars4dev.com/3368/microsoft-research-womens-fellowship-program/"
    },
    {
        university: "MasterCard Foundation Scholarship Program for Africans",
        level: "Bachelors/Masters/PhD",
        benefits: "Full funding including tuition, travel, and living expenses",
        link: "https://www.scholars4dev.com/3369/mastercard-foundation-scholarship-program-for-africans/"
    },
    {
        university: "Emerging Economy Fellowships at Wharton Business School",
        level: "MBA",
        benefits: "Full funding including tuition, travel, and living expenses",
        link: "https://www.scholars4dev.com/3370/emerging-economy-fellowships-at-wharton-business-school/"
    },
    {
        university: "EWC Graduate Degree Scholarships for Asia and the Pacific",
        level: "Masters/PhD",
        benefits: "Full funding including tuition, travel, and living expenses",
        link: "https://www.scholars4dev.com/3371/ewc-graduate-degree-scholarships-for-asia-and-the-pacific/"
    },
    {
        university: "NYU Wagner Public Service Fellowships for African Women",
        level: "Masters",
        benefits: "Full funding including tuition, travel, and living expenses",
        link: "https://www.scholars4dev.com/3372/nyu-wagner-public-service-fellowships-for-african-women/"
    },
    {
        university: "Fairleigh Dickinson Scholarships for International Students",
        level: "Bachelors Degree",
        benefits: "Varies",
        link: "https://www.scholars4dev.com/3364/fairleigh-dickinson-scholarships-for-international-students/"
    },
    {
        university: "Fulbright Foreign Student Program in USA",
        level: "Masters/PhD",
        benefits: "Full funding including tuition, travel, and living expenses",
        link: "https://www.scholars4dev.com/3365/fulbright-foreign-student-program-in-usa/"
    },
    {
        university: "Fully-Funded Rotary Peace Fellowships",
        level: "Masters/Certificate",
        benefits: "Tuition, fees, room and board, round-trip transportation, internship/field-study expenses",
        link: "https://www.scholars4dev.com/3366/fully-funded-rotary-peace-fellowships/"
    },
    {
        university: "Illinois Wesleyan University International Students Scholarships",
        level: "Bachelors Degree",
        benefits: "Merit-based scholarships ranging from $16,000 to $30,000 per year",
        link: "https://www.scholars4dev.com/3367/illinois-wesleyan-university-international-students-scholarships/"
    },
    {
        university: "ADB-Japan Scholarship Program for Developing Countries in Asia and Pacific",
        level: "Masters Degree",
        benefits: "Tuition fees, subsistence allowance, book allowance, travel expenses",
        link: "https://www.scholars4dev.com/3368/adb-japan-scholarship-program-for-developing-countries-in-asia-and-pacific/"
    },
    {
        university: "ICSP Scholarships at University of Oregon USA",
        level: "Bachelors Degree",
        benefits: "Tuition-waiver scholarship ranging from $7,500 to $30,000 per year",
        link: "https://www.scholars4dev.com/3369/icsp-scholarships-at-university-of-oregon-usa/"
    },
    {
        university: "Global Undergraduate Exchange Program (Global UGRAD)",
        level: "Exchange Program",
        benefits: "Fully funded including tuition, travel, and living expenses",
        link: "https://www.scholars4dev.com/3370/global-undergraduate-exchange-program-global-ugrad/"
    },
    {
        university: "American University Emerging Global Leader Scholarship",
        level: "Bachelors Degree",
        benefits: "Full scholarship covering tuition, room, and board",
        link: "https://www.scholars4dev.com/3371/american-university-emerging-global-leader-scholarship/"
    },
    {
        university: "Berea College Scholarships for International Students",
        level: "Bachelors Degree",
        benefits: "Financial aid package that covers 100% of tuition costs",
        link: "https://www.scholars4dev.com/3372/berea-college-scholarships-for-international-students/"
    },
    {
        university: "AAUW International Fellowships in USA for Women",
        level: "Masters/PhD/Postdoctoral",
        benefits: "$18,000 to $30,000 per year",
        link: "https://www.scholars4dev.com/3373/aauw-international-fellowships-in-usa-for-women/"
    },
    {
        university: "Knight-Hennessy Scholars at Stanford University",
        level: "Masters/PhD",
        benefits: "Full funding including tuition, travel, and living expenses",
        link: "https://www.scholars4dev.com/3374/knight-hennessy-scholars-at-stanford-university/"
    },
    {
        university: "Hubert Humphrey Fellowships in USA for International Students",
        level: "Non-degree",
        benefits: "Full funding including tuition, travel, and living expenses",
        link: "https://www.scholars4dev.com/3364/hubert-humphrey-fellowships-in-usa-for-international-students/"
    },
    {
        university: "PEO International Peace Scholarships for Women",
        level: "Masters/PhD",
        benefits: "Up to $12,500 per year",
        link: "https://www.scholars4dev.com/3365/peo-international-peace-scholarships-for-women/"
    },
    {
        university: "Boston University Presidential Scholarship",
        level: "Bachelors Degree",
        benefits: "$25,000 per year",
        link: "https://www.scholars4dev.com/3366/boston-university-presidential-scholarship-for-international-students/"
    },
    {
        university: "Clark Global Scholarship Program",
        level: "Bachelors Degree",
        benefits: "$15,000 to $25,000 per year",
        link: "https://www.scholars4dev.com/3367/clark-global-scholarship-program/"
    },
    {
        university: "Emory University Scholar Programs",
        level: "Bachelors Degree",
        benefits: "Full or partial merit-based scholarships",
        link: "https://www.scholars4dev.com/3368/emory-university-scholar-programs/"
    },
    {
        university: "American University Online Program Scholarships",
        level: "Masters Degree",
        benefits: "Varies by program",
        link: "https://www.scholars4dev.com/3369/american-university-online-program-scholarships/"
    },
    {
        university: "Fitzduff Family Social Policy and Coexistence Fellowship at Brandeis University",
        level: "Masters/PhD",
        benefits: "Full or partial scholarships",
        link: "https://www.scholars4dev.com/3370/fitzduff-family-social-policy-and-coexistence-fellowship-at-brandeis-university/"
    },
    {
        university: "Humanitarian Health Scholarships at Johns Hopkins University",
        level: "Masters Degree (Online)",
        benefits: "Full tuition coverage",
        link: "https://www.scholars4dev.com/3371/humanitarian-health-scholarships-at-johns-hopkins-university/"
    },
    {
        university: "Sidney Topol Fellowship in Nonviolence Practice at Brandeis University",
        level: "Masters Degree",
        benefits: "Full or partial scholarships",
        link: "https://www.scholars4dev.com/3372/sidney-topol-fellowship-in-nonviolence-practice-at-brandeis-university/"
    },
    {
        university: "2020 Fortis Fellowship",
        level: "Training/Fellowship",
        benefits: "Full funding",
        link: "https://www.scholars4dev.com/3373/2020-fortis-fellowship/"
    },
    {
        university: "Civil Society Leadership Awards",
        level: "Masters Degree",
        benefits: "Full funding",
        link: "https://www.scholars4dev.com/3374/civil-society-leadership-awards/"
    }
    ],
    australia: [
      {
        university: "Australia Awards Scholarships",
        level: "Bachelors / Masters / PhD",
        benefits: "Full tuition, return air travel, establishment allowance, contribution to living expenses",
        link: "https://www.dfat.gov.au/people-to-people/australia-awards/australia-awards-scholarships"
      },
      {
        university: "Griffith Vice Chancellor’s International Scholarship",
        level: "Bachelors / Masters",
        benefits: "50% of tuition fees for the duration of the program",
        link: "https://www.griffith.edu.au/international/scholarships-finance/scholarships/vice-chancellors-international-scholarship"
      },
      {
        university: "University of Sydney International Scholarship",
        level: "Masters by Research / PhD",
        benefits: "Tuition fees, living allowance for up to 3 years",
        link: "https://www.sydney.edu.au/scholarships/e/university-sydney-international-scholarship.html"
      },
      {
        university: "Macquarie University International Scholarships",
        level: "Undergraduate / Postgraduate",
        benefits: "Partial tuition fee up to AUD 10,000",
        link: "https://www.mq.edu.au/study/admissions-and-entry/scholarships/international/macquarie-university-5-000-regional-scholarship"
      },
      {
        university: "University of Melbourne Graduate Research Scholarships",
        level: "Masters / PhD",
        benefits: "Full fee offset, living allowance, relocation grant, health cover",
        link: "https://scholarships.unimelb.edu.au/awards/graduate-research-scholarships"
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
        link: "https://international.adelaide.edu.au/admissions/scholarships/global-academic-excellence-scholarship"
      },
      {
        university: "University of New South Wales International Scholarships",
        level: "Undergraduate / Postgraduate",
        benefits: "Full or partial tuition fee payment, stipend",
        link: "https://www.unsw.edu.au/study/how-to-apply/scholarships"
      },
      {
        university: "Australian Awards Leadership Program",
        level: "Masters / PhD",
        benefits: "Leadership development, networking opportunities",
        link: "https://www.dfat.gov.au/people-to-people/australia-awards"
      },
      {
        university: "Global Excellence Scholarship at University of Western Australia",
        level: "Bachelors / Postgraduate",
        benefits: "Up to AUD 48,000 over 4 years",
        link: "https://www.uwa.edu.au/study/-/media/uwafs/docs/global-excellence-scholarship/international-qualification-conversions/singapore.pdf"
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
    ],
    germany: [
      {
        university: "DAAD Scholarships for Postgraduate Studies in Architecture",
        level: "Masters, Complementary courses",
        benefits: "Full tuition fees, living expenses, travel allowance, health insurance",
        link: "https://www.scholars4dev.com/3365/daad-scholarships-for-postgraduate-studies-in-architecture/"
      },
      {
        university: "Study a Masters in Europe Scholarships",
        level: "Masters",
        benefits: "Not specified",
        link: "https://www.scholars4dev.com/3366/study-a-masters-in-europe-scholarships/"
      },
      {
        university: "Haniel Stipend Program for the Master of Public Policy",
        level: "Masters",
        benefits: "Full tuition fees, living expenses",
        link: "https://www.scholars4dev.com/3367/haniel-stipend-program-for-the-master-of-public-policy/"
      },
      {
        university: "International Master of Science in Rural Development (IMRD) Scholarships",
        level: "Masters",
        benefits: "Full tuition fees, living expenses, travel allowance, health insurance",
        link: "https://www.scholars4dev.com/3368/international-master-of-science-in-rural-development-imrd-scholarships/"
      },
      {
        university: "Erasmus+ Scholarships for the Master in Education Policies for Global Development (GLOBED)",
        level: "Masters",
        benefits: "Full tuition fees, living expenses, travel allowance, health insurance",
        link: "https://www.scholars4dev.com/3369/erasmus-scholarships-for-the-master-in-education-policies-for-global-development-globed/"
      },
      {
        university: "Goethe Goes Global – Master Scholarships",
        level: "Masters (MS)",
        benefits: "Full tuition fees, living expenses",
        link: "https://www.scholars4dev.com/3370/goethe-goes-global-master-scholarships/"
      },
      {
        university: "Civil Society Leadership Awards",
        level: "Masters",
        benefits: "Full tuition fees, living expenses, travel allowance, health insurance",
        link: "https://www.scholars4dev.com/3371/civil-society-leadership-awards/"
      },
      {
        university: "Bremen International Graduate School of Social Sciences (BIGSSS) Scholarships",
        level: "PhD",
        benefits: "Full tuition fees, living expenses",
        link: "https://www.scholars4dev.com/3373/bremen-international-graduate-school-of-social-sciences-bigsss-scholarships/"
      },
      {
        university: "DAAD Scholarship",
        level: "Masters/PhD",
        benefits: "Full tuition, living expenses, travel allowance",
        link: "https://www.daad.de/en/"
      },
      {
        university: "Heinrich Boll Scholarships",
        level: "Bachelors/Masters/PhD",
        benefits: "Monthly stipend, travel allowance",
        link: "https://www.boell.de/en/foundation/scholarships"
      },
      {
        university: "Konrad-Adenauer-Stiftung (KAS) Scholarships",
        level: "Masters/PhD",
        benefits: "Full tuition, living expenses",
        link: "https://www.kas.de/en/web/begabtenfoerderung-und-kultur/stipendiatenprogramm"
      },
      {
        university: "Erasmus+",
        level: "Masters",
        benefits: "Tuition, travel expenses, monthly stipend",
        link: "https://erasmus-plus.ec.europa.eu/"
      },
      {
        university: "The Deutschlandstipendium",
        level: "Bachelors/Masters",
        benefits: "Monthly stipend",
        link: "https://www.deutschlandstipendium.de/deutschlandstipendium/de/home/home_node.html"
      },
      {
        university: "Friedrich Ebert Stiftung",
        level: "Bachelors/Masters/PhD",
        benefits: "Monthly stipend, health insurance, books",
        link: "https://www.fes.de/studienfoerderung/"
      },
      {
        university: "RWTH Aachen University Scholarships",
        level: "Various",
        benefits: "Partial tuition waivers",
        link: "https://www.rwth-aachen.de/go/id/bse/"
      },
      {
        university: "Hamburg University of Applied Sciences Scholarships",
        level: "Various",
        benefits: "Monthly stipend",
        link: "https://www.haw-hamburg.de/en/international/international-students/haw-hamburg-scholarships/"
      },
      {
        university: "Humboldt University International Research Fellowship",
        level: "PhD/Postdoctoral",
        benefits: "Full funding including tuition, travel, and living expenses",
        link: "https://www.humboldt-foundation.de/web/humboldt-fellowship-postdoc.html"
      },
      {
        university: "Frankfurt School of Finance & Management Scholarships",
        level: "Various",
        benefits: "Partial tuition waivers",
        link: "https://www.frankfurt-school.de/en/home/programmes/financing/scholarships.html"
      }

    ],
    canada: [
      {
        university: "University of Waterloo Scholarships",
        level: "Undergraduate/Masters/PhD",
        benefits: "Up to $10,000",
        link: "https://uwaterloo.ca/future-students/financing/international-scholarships"
      },
      {
        university: "Université de Montréal Scholarships",
        level: "Undergraduate/Masters/PhD",
        benefits: "Up to $27,300 per year",
        link: "https://scholarshiproar.com/universite-de-montreal-scholarships/"
      },
      {
        university: "Douglas College International Student Scholarships",
        level: "Undergraduate",
        benefits: "Up to CAD 7000",
        link: "https://scholarshiproar.com/douglas-college-international-student-scholarship/"
      },
      {
          university: "University of Winnipeg Scholarships",
          level: "Undergraduate/Masters/Diploma",
          benefits: "$3,500 to $5,000",
          link: "https://www.uwinnipeg.ca/graduate-studies/funding/presidents-scholarship-for-world-leaders-international.html"
        },
        {
          university: "Humber International Entrance Scholarships",
          level: "Undergraduate/Masters",
          benefits: "Full tuition, $5,000, $3,000 scholarships",
          link: "https://humber.ca/admissions/student-fees-financial-resources/scholarships-bursaries.html"
        },
        {
          university: "KILLAM Postdoctoral Research Fellowship",
          level: "Postdoctoral",
          benefits: "$60,000 annually for two years, $4,000 travel allowance",
          link: "https://scholarshiproar.com/killam-postdoctoral-research-fellowship-canada/"
        },
        {
          university: "UBC Four Years Doctoral Fellowship Program (4YF)",
          level: "PhD",
          benefits: "$18,200 stipend, full tuition coverage for four years",
          link: "https://aseanop.com/four-year-doctoral-fellowship-4yf-2023-24-university-of-british-columbia-canada/#:~:text=The%20Four%20Year%20Doctoral%20Fellowship,years%20of%20their%20doctoral%20studies."
        },
        {
          university: "York University Scholarships",
          level: "Undergraduate",
          benefits: "$35,000 per year, total value $140,000",
          link: "https://futurestudents.yorku.ca/financing-your-degree/scholarships-bursaries"
        },
        {
          university: "Pierre Elliott Trudeau Foundation Doctoral Scholarships",
          level: "PhD",
          benefits: "Up to $60,000 per year for three years",
          link: "https://www.trudeaufoundation.ca/scholarship"
        },
        {
          university: "Banting Postdoctoral Fellowship Programs",
          level: "Postdoctoral",
          benefits: "$70,000 per year for two years",
          link: "https://www.postdocs.ubc.ca/award/banting-postdoctoral-fellowships-program"
        },
        {
          university: "Joint Japan World Bank Graduate Scholarship Program",
          level: "Masters",
          benefits: "Full tuition, accommodation, air travel, monthly stipend",
          link: "https://www.worldbank.org/en/programs/scholarships/jj-wbgsp"
        },
        {
          university: "Robert S. McNamara Fellowships Program",
          level: "PhD",
          benefits: "Up to $42,750 net per fellow for an 8-month fellowship",
          link: "https://www.worldbank.org/en/programs/scholarships/brief/robert-s-mcnamara-fellowships-program"
        },
        {
          university: "IMU Breakout Graduate Fellowship Program",
          level: "PhD",
          benefits: "Up to USD 10,000 per year",
          link: "https://scholarshiproar.com/imu-breakout-graduate-fellowship-program/"
        },
        {
          university: "Schlumberger Foundation Faculty for the Future Fellowships",
          level: "PhD/Postdoctoral",
          benefits: "Up to USD 50,000 per year for PhD, USD 40,000 per year for Post-doc",
          link: "https://www.fftf.slb.com/"
        },
        {
          university: "Human Frontier Science Program Postdoctoral Fellowships",
          level: "Postdoctoral",
          benefits: "Living allowance, research and travel allowance, child allowance, parental leave allowance, relocation allowance",
          link: "https://www.hfsp.org/funding/hfsp-funding/postdoctoral-fellowships"
        },
        {
          university: "Aga Khan Foundation Scholarships",
          level: "Masters/PhD",
          benefits: "Tuition fees, living expenses, travel allowance, health insurance",
          link: "https://the.akdn/en/what-we-do/developing-human-capacity/education/international-scholarships"
        },
        {
          university: "IIE-SRF Fellowship",
          level: "PhD",
          benefits: "Up to US$25,000, health insurance for one year",
          link: "https://www.scholarrescuefund.org/applicants/eligibility-criteria/"
        }
    ],
    japan: [
        {
            university: "MEXT Scholarship",
            level: "Undergraduate / Masters / PhD",
            benefits: "Tuition, travel expenses, monthly stipend",
            link: "https://www.mext.go.jp/en/policy/education/highered/title02/detail02/sdetail02/1373897.htm"
        },
        {
            university: "JASSO Scholarship",
            level: "Undergraduate / Masters / PhD",
            benefits: "Tuition, living expenses",
            link: "https://www.jasso.go.jp/en/ryugaku/scholarship_j/ukeire.html"
        },
        {
            university: "Rotary Yoneyama Scholarship",
            level: "Undergraduate / Masters / PhD",
            benefits: "Tuition, living expenses, travel expenses",
            link: "https://www.rotary-yoneyama.or.jp/english/overseas"
        },
        {
            university: "Monbukagakusho Honors Scholarship",
            level: "Undergraduate / Masters / PhD",
            benefits: "Tuition, monthly stipend",
            link: "https://www.jasso.go.jp/en/ryugaku/scholarship_j/shoreihi/index.html"
        },
        {
            university: "ADB-Japan Scholarship Program",
            level: "Masters",
            benefits: "Tuition, travel expenses, monthly stipend",
            link: "https://www.adb.org/what-we-do/funds/japan-scholarship-program-jsp"
        },
        {
            university: "Hitachi Scholarship",
            level: "Masters / PhD",
            benefits: "Tuition, living expenses",
            link: "https://www.itb.ac.id/files/43/20110704/2012%20GUIDE%20(SCHOLARSHIP).pdf"
        },
        {
            university: "Mitsubishi Corporation International Scholarship",
            level: "Undergraduate / Masters / PhD",
            benefits: "Tuition, living expenses",
            link: "https://www.jpss.jp/en/scholarship/687/"
        },
        {
            university: "Kurita Water and Environment Foundation Scholarship",
            level: "Masters / PhD",
            benefits: "Research expenses",
            link: "https://www.kwef.org/orgp/orgp_info.html"
        },
        {
            university: "Toyota Foundation Research Grant",
            level: "Research",
            benefits: "Research expenses",
            link: "https://www.toyotafound.or.jp/english/grant/research/"
        },
        {
            university: "Nitori International Scholarship Foundation",
            level: "Undergraduate / Masters / PhD",
            benefits: "Tuition, living expenses",
            link: "https://ignite.tut.ac.jp/cir/english/students/scholarship/nitori.html"
        },
        {
            university: "Honjo International Scholarship Foundation",
            level: "Masters / PhD",
            benefits: "Monthly allowance, accommodation charges, travel expenses",
            link: "https://scholarshiproar.com/japan-scholarships-for-international-students/#20"
          },
          {
            university: "NIG Postdoctoral Fellowship",
            level: "Postdoctoral",
            benefits: "Annual salary approx. 4,100,000 JPY, health insurance, commuting allowance, compensation insurance",
            link: "https://scholarshiproar.com/japan-scholarships-for-international-students/#21"
          },
          {
            university: "MEXT University Recommendation Scholarship",
            level: "Masters / PhD",
            benefits: "Tuition, living expenses (144,000 JPY per month), economy class air travel",
            link: "https://scholarshiproar.com/japan-scholarships-for-international-students/#22"
          },
          {
            university: "Joint Japan World Bank Graduate Scholarship Program",
            level: "Masters",
            benefits: "Tuition fee, accommodation, air travel, monthly living stipend",
            link: "https://scholarshiproar.com/japan-scholarships-for-international-students/#23"
          },
          {
            university: "Robert S. McNamara Fellowships Program",
            level: "PhD",
            benefits: "Up to $42,750 net per fellow for an 8-month fellowship",
            link: "https://scholarshiproar.com/japan-scholarships-for-international-students/#24"
          },
          {
            university: "IMU Breakout Graduate Fellowship Program",
            level: "PhD",
            benefits: "Up to USD 10,000 per year, covers tuition fee, accommodation, travel expenses, living expenses",
            link: "https://scholarshiproar.com/japan-scholarships-for-international-students/#25"
          },
          {
            university: "Schlumberger Foundation Faculty for the Future Fellowships",
            level: "PhD / Postdoctoral",
            benefits: "Up to USD 50,000 per year for PhD, USD 40,000 per year for Post-doc",
            link: "https://scholarshiproar.com/japan-scholarships-for-international-students/#26"
          },
          {
            university: "Rotary Peace Fellowships",
            level: "Masters",
            benefits: "Tuition, fees, room and board, round-trip transportation, internship/field-study expenses",
            link: "https://scholarshiproar.com/japan-scholarships-for-international-students/#27"
          },
          {
            university: "Human Frontier Science Program Postdoctoral Fellowships",
            level: "Postdoctoral",
            benefits: "Living allowance, research and travel allowance, child allowance, parental leave allowance, relocation allowance",
            link: "https://scholarshiproar.com/japan-scholarships-for-international-students/#28"
          },
          {
            university: "Aga Khan Foundation Scholarships",
            level: "Masters / PhD",
            benefits: "Tuition fees, living expenses, travel allowance, health insurance",
            link: "https://scholarshiproar.com/japan-scholarships-for-international-students/#29"
          },
          {
            university: "IIE-SRF Fellowship",
            level: "PhD",
            benefits: "Up to US$25,000, health insurance for one year",
            link: "https://scholarshiproar.com/japan-scholarships-for-international-students/#30"
          },
          {
            university: "Facebook PhD Fellowship",
            level: "PhD",
            benefits: "Two years of study and fees, annual stipend, conference travel aid",
            link: "https://scholarshiproar.com/japan-scholarships-for-international-students/#31"
          }
    ]
  };

  export default data;