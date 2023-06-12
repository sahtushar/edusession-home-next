import React from 'react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Prerna Choudhary',
      subjects: ['Maths', 'Economics', 'Spoken English', 'IELTS'],
      imageSrc:"https://edusession.live/prernac.jpg"
    },
    {
      name: 'Prakash Kaushik',
      subjects: ['Maths (IIT-JEE)'],
      imageSrc:"https://edusession.live/prakash.jpg"
    },
    {
      name: 'Ishita Gawaskar',
      subjects: ['Botany', 'SSt', 'Hindi'],
      imageSrc:"https://edusession.live/ishita.jpg"
    },
    {
      name: 'Prerna Trivedi',
      subjects: ['Maths', 'Chemistry', 'Physics (NEET)', 'Zoology (NEET)'],
      imageSrc:"https://edusession.live/prernatrivedi.jpg"
    },
    // {
    //   name: 'Ananya Jain',
    //   subjects: [],
    // },
    {
      name: 'Paramjot Kaur',
      subjects: ['Spoken English', 'IELTS'],
      imageSrc:"https://edusession.live/paramjot.jpg"
    },
    {
      name: 'Alka Kumari',
      subjects: ['Maths', 'Science'],
      imageSrc:"https://edusession.live/alka.jpg"
    },
    // Add more team members as needed
  ];

  return (
    <div className="responsive-container-block outer-container">
      <div className="responsive-container-block inner-container">
        <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-4 wk-ipadp-4 headings-container">
          <p className="text-blk heading-text">
            Meet our dream team
          </p>
          <p className="text-blk sub-heading-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla et sagittis,
            vestibulum risus lacus sit.
          </p>
        </div>
        <div className="responsive-cell-block wk-desk-8 wk-ipadp-8 wk-tab-12 wk-mobile-12 team-members-container">
          {teamMembers.map((member, index) => (
            <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container" key={index}>
              <div className="card">
                <img className="card-img" src={member.imageSrc} alt="Team Member" /> 
                <p className="text-blk name">
                  {member.name}
                </p>
                {member.subjects.join(",")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
