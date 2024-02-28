// script.js

function showAbout() {
    document.getElementById('dynamic-content').innerHTML = `
        <!-- Additional content -->
        <h2>About Me</h2>
        <br>

        <div class="about-content">
            <p>My life's journey has been a diverse one, starting in Essex, England, and taking me through my formative years in Ireland. It was during this time, particularly at the North Atlantic Basketball Academy in Dublin, that I cultivated valuable lessons in effective communication and unwavering commitment.</p>
            
            <p>Having recently started as a Software Engineer at <a href="https://scale.com/" target="_blank">Scale AI</a>, I am excited to expand my knowledge further in differing fields.</p>
            
            <p>I am also a Student Manager at the <a href="https://www.luther.edu/offices/its/help-desk">Technology Help Desk</a> at Luther College, where I lead a team of technicians to provide technical support and assistance to the college community.</p>
            
            <p>I am pursuing a Bachelor of Arts degree in Computer Science and Data Science at <a href="https://www.luther.edu/" target="_blank">Luther College</a>, with a specialization in Biology. I am passionate about learning and exploring the intersections and applications of these fields in various domains and contexts.</p>
            
            <p>In August 2023, I completed a Data Analysis and DE&I externship with Credera <a href="https://www.credera.com/en-us/" target="_blank">Credera</a> , achieving an Outstanding Completion status and gaining valuable insights and experience in data-driven decision-making and diversity, equity, and inclusion practices.</p>
        </div>
    `;
}  

function showResume() {
    document.getElementById('dynamic-content').innerHTML = `
        <!-- Additional content -->
        <h2>Resume</h2>
        <br>

        <div class="resume-entry">
            <h3>Credera - Through Paragon One - Remote</h3> <br>
            <h4>Data Analyst Remote Extern  June 19, 2023 — August 14, 2023</h4> <br>
            
            <p>Received an outstanding completion on DE&I Consulting & Data Analytics remote externship.</p>
            <p>Created Credera's Cultural Competency & Global Best Practices Guide by researching the customs, laws, beliefs, and workplace practices of a given region.</p>
            <p>Used Excel and Tableau to both analyze and display data.</p>
        </div>

        <br> <br> <br>

        <div class="resume-entry">
            <h3>Luther College Technology Help Desk - Decorah Iowa, USA</h3> <br>

            <h4>Student Manager 09/2023 - Present</h4> <br>
            <p>Provided employee training.</p>
            <p>Used critical thinking and leadership skills to help improve the work environment.</p>
            <p>Oversaw day-to-day operations.</p> <br> <br>
            
            <h4>Help Desk Technician   02/2022 - 09/2023</h4> <br>
            <p>Provided customer service.</p>
            <p>Level 1 and 2 support and problem-solving.</p>
            <p>Took leadership of team building in the workplace.</p>
            <p>Experience using LDAP, ADFS, and general desktop application support such as MFA.</p>
            <p>Carry out project work for business processes such as email migrations.</p>
            
        </div>
    `;
}



function showProjects() {
    document.getElementById('dynamic-content').innerHTML = `
        <!-- Additional content -->
        <h2>Projects</h2>
        <br>
        <div class="projects-content">
            <h3 class="project-title">PPO Ecosystem Simulator - In Progress</h3><br>
            <p>Using Proximal Policy Optimization (PPO) for behavior and statistical inheritance for physical traits, the simulation brings to life Bush, Deer, Wolves, and Bears.</p>
            <p>This project showcases my skills in game development, artificial intelligence, and genetic modeling, offering a visually striking and scientifically intriguing experience</p>
            <p> This project is still in production with the next step being to begin training the learning algorithm through runs.</p>
            <br>
            <p> You can find more information about my plan - <a href="https://docs.google.com/document/d/1ce3v2fygNq6533p6OIHKKmYzPSEoWx7SNMXCQaretes/edit?usp=sharing" target="_blank">Click Here</a></p>
            <p> You can find more information about my progress - <a href="https://docs.google.com/document/d/1eYpTyFt4KuzoSmvijDw6Yzi4jNtoSnYEpKIATypI4HQ/edit?usp=sharing" target="_blank">Click Here</a></p>
            <br><br><br>
            <h3 class="project-title">Organisational Board Website</h3><br>
            <p> For a final project, myself and another study decided to work on an organizational board website similar to Trello.</p>
            <p> I took on the tasks of:<br> Front End Visuals, Google Auth Login, Live Chat Functionality, Linking Data Base to Frontend, Table and Table Element movement Functionality, Add user to Board Fucntionality</p>
            <br>
            <p> You can find and use the website</p>
            <a href="https://grunet01.github.io/CS330Final/login.html" target="_blank">Here</a>
            <br><br><br>
            <h3 class="project-title">Data Analysis city office prospectives project</h3><br>
            <p> During my Data Analytics Externship with Credera, I was tasked with using analytical skills to determine if the German city ,Sturrgart was a viable place for the company to start an office space.</p>
            <p> During this experience I honed my skills in both Excel and Tableau</p>
            <p> Unfortunately due to this working being for Credera I am unable to provide more information on this project</p>
             <h3 class="project-title">Damselfish Territorial Behavior Marine Biology Research Paper</h3><br>
            <p> During January 2024, I along with a class of student travelled to Roatan, Honduras in order to collect and analyze data.</p>
            <p> This involved 2-3 dives a day for 2 weeks.</p>
            <p> My group sought to determine if the territorial behavior of <i>Stegastes adustus</i> changes depending on the depth that they are inhabiting, with consideration of algal growth levels at differing depths. </p>
            <p> If you would like to read more about this - <a href="https://docs.google.com/document/d/1BjhMcaZTAxmYXIHA7c45NvoD38YDB3sYOGCxeU5fkO0/edit?usp=sharing" target="_blank">Click Here</a></p>
        </div>
    `;

    const projectTitles = document.querySelectorAll('.projects-content .project-title');
    projectTitles.forEach(title => {
        title.style.color = '#79e4ff';
    });
}

function showContact() {
    document.getElementById('dynamic-content').innerHTML = `
        <!-- Additional content -->
        <h2>Contact</h2>
        <br>

        <div class="contact-content">
            
            <div class="contact-item">
                <h3>LinkedIn:</h3>
                <p><a href="https://www.linkedin.com/in/caseykellettwhitwham/" target="_blank">LinkedIn Profile</a></p>
            </div>

            <div class="contact-item">
                <h3>Email:</h3>
                <p><a href="ckellettwhitwham@gmail.com">ckellettwhitwham@gmail.com</a></p>
            </div>
        </div>
    `;
}

