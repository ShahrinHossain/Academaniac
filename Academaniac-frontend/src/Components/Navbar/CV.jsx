import React from "react";
import "./AboutUs.css"; // Ensure this CSS file is created and styled
import sampleResume from "../../assets/cv.png"; 

const CV = () => {
  return (
    <div className="about-us-container">
      <h2>Tips for Writing a Resume or CV for Studying Abroad</h2>
      <div className="youtube-video">
        
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XtRH5B40rTA?si=18MWWUl6JwdLsibl" 
          title="YouTube video player"
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>
      <p>
        Writing a resume or CV for studying abroad involves highlighting your academic achievements, skills, and experiences in a way that appeals to international universities. Here are some tips to help you create an effective resume or CV for studying abroad:
      </p>
      <ol>
        <li>
          <strong>Understand the Format</strong>
          <ul>
            <li>
              <strong>CV vs. Resume:</strong> Know the difference between a CV (Curriculum Vitae) and a resume. A CV is more detailed and longer, while a resume is concise and typically one to two pages.
            </li>
            <li>
              <strong>Country-Specific Formats:</strong> Different countries may have different expectations for resumes and CVs. Research the specific requirements of the country where you are applying.
            </li>
          </ul>
        </li>
        <li>
          <strong>Personal Information</strong>
          <ul>
            <li>
              <strong>Contact Details:</strong> Include your full name, address, email, and phone number. Ensure your email address is professional.
            </li>
            <li>
              <strong>Photo:</strong> Some countries (e.g., in Europe) may expect a photo on your CV, while others (e.g., the U.S.) do not. Check the guidelines.
            </li>
          </ul>
        </li>
        <li>
          <strong>Objective or Summary</strong>
          <ul>
            <li>
              <strong>Clear Objective:</strong> Write a brief objective or summary at the beginning, explaining your career goals and why you are applying to this particular program.
            </li>
          </ul>
        </li>
        <li>
          <strong>Education</strong>
          <ul>
            <li>
              <strong>Chronological Order:</strong> List your education in reverse chronological order, starting with the most recent.
            </li>
            <li>
              <strong>Details:</strong> Include the name of the institution, degree obtained, dates attended, and notable achievements or honors.
            </li>
          </ul>
        </li>
        <li>
          <strong>Academic Achievements</strong>
          <ul>
            <li>
              <strong>Honors and Awards:</strong> Highlight any academic honors, scholarships, or awards you have received.
            </li>
            <li>
              <strong>Projects and Research:</strong> Include significant academic projects, research, or publications.
            </li>
          </ul>
        </li>
        <li>
          <strong>Work Experience</strong>
          <ul>
            <li>
              <strong>Relevant Experience:</strong> Focus on work experience relevant to your field of study. Include internships, part-time jobs, or volunteer work.
            </li>
            <li>
              <strong>Achievements and Responsibilities:</strong> Clearly state your roles and achievements in each position.
            </li>
          </ul>
        </li>
        <li>
          <strong>Skills</strong>
          <ul>
            <li>
              <strong>Technical Skills:</strong> Highlight technical skills relevant to your field, such as software proficiency, laboratory techniques, or programming languages.
            </li>
            <li>
              <strong>Soft Skills:</strong> Include soft skills like communication, teamwork, problem-solving, and adaptability.
            </li>
          </ul>
        </li>
        <li>
          <strong>Extracurricular Activities</strong>
          <ul>
            <li>
              <strong>Leadership Roles:</strong> Mention any leadership roles or significant contributions in clubs, organizations, or sports teams.
            </li>
            <li>
              <strong>Community Service:</strong> Highlight any volunteer work or community service.
            </li>
          </ul>
        </li>
        <li>
          <strong>Certifications and Courses</strong>
          <ul>
            <li>
              <strong>Relevant Certifications:</strong> List any relevant certifications, online courses, or workshops you have completed.
            </li>
          </ul>
        </li>
        <li>
          <strong>Languages</strong>
          <ul>
            <li>
              <strong>Language Proficiency:</strong> Include languages you speak and your proficiency level in each.
            </li>
          </ul>
        </li>
        <li>
          <strong>Professional Affiliations</strong>
          <ul>
            <li>
              <strong>Memberships:</strong> List any memberships in professional organizations related to your field of study.
            </li>
          </ul>
        </li>
        <li>
          <strong>References</strong>
          <ul>
            <li>
              <strong>References Available Upon Request:</strong> It's common to include a line stating that references are available upon request. Ensure you have a list of potential references ready.
            </li>
          </ul>
        </li>
        <li>
          <strong>Formatting and Presentation</strong>
          <ul>
            <li>
              <strong>Clean Layout:</strong> Use a clean, professional layout with clear headings and bullet points.
            </li>
            <li>
              <strong>Consistent Font:</strong> Use a consistent font style and size throughout the document.
            </li>
            <li>
              <strong>Proofread:</strong> Ensure there are no grammatical or spelling errors. Consider having someone else review your CV or resume.
            </li>
          </ul>
        </li>
        <li>
          <strong>Tailor Each Application</strong>
          <ul>
            <li>
              <strong>Customization:</strong> Tailor your resume or CV to each application, highlighting the most relevant experiences and skills for each program.
            </li>
          </ul>
        </li>
        <li>
          <strong>Use Action Verbs</strong>
          <ul>
            <li>
              <strong>Active Language:</strong> Use action verbs to describe your experiences and achievements. For example, use words like "led," "developed," "managed," "created," and "implemented."
            </li>
          </ul>
        </li>
      </ol>
      <p>Here's a sample template for resume:</p>

      <div className="resume-image">
        <img src={sampleResume} alt="Sample Resume" />
      </div>

    </div>
  );
};

export default CV;
