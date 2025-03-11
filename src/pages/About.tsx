import React from 'react';

const About: React.FC = () => {
    return (
        <div className='about_main'>
            <div className="row_about">
                <div className="avatar border-template">
                    <img src="https://images.unsplash.com/photo-1741334632363-58022899ce91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
                </div>
                <div className="summary">
                    <div className="summary_title">
                        <div className="summary_icon">
                            <img src="https://kitpapa.net/gridly/wp-content/uploads/2023/04/star-2.png" alt="" />
                        </div>
                        <div className='dev'>SELF-SUMMARY</div>
                        <div className="summary_icon">
                            <img src="https://kitpapa.net/gridly/wp-content/uploads/2023/04/star-2.png" alt="" />
                        </div>
                    </div>
                    <div className="summary_info border-template">
                        <div className="summary_icon">
                            <img src="https://kitpapa.net/gridly/wp-content/uploads/2023/04/icon2.png" alt="" />
                        </div>
                        <div className="summary_name">
                            <h1>VoNo</h1>
                        </div>
                        <p>
                            I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row_about section_2_height">
                <div className="left_column border-template">
                    <h4>EXPERIENCE</h4>
                    <div>
                        <h4 className='time'>9/2022 - 3/2024</h4>
                        <h4 className='role'>Internship Front-End Developer</h4>
                    </div>
                    <div>
                        <h4 className='time'>4/2023 - 4/2024</h4>
                        <h4 className='role'>Backend Developer</h4>
                    </div>
                </div>
                <div className="right_column border-template">
                    <h4>EDUCATION</h4>
                    <div>
                        <h4 className='time'>2019 - 2025</h4>
                        <h4 className='role'>Bachelor Degree Computer Science in Thuy Loi</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;