import React from 'react';
import star from "../assets/star.svg";

const Work: React.FC = () => {
    return (
        <div className="work_main">
            <div className="work_left">
                <div className="card border-template">
                    <div className="card_image">
                        <img src="https://kitpapa.net/gridly/wp-content/uploads/2023/04/project4.jpeg" alt="" />
                    </div>
                    <div className="card_desc">
                        <div className="card_info">
                            <p className='card_role'>BACKEND DEVELOPER</p>
                            <div className="card_title">Dynamic</div>
                        </div>
                        <div className="card_icon">
                            <img src={star} alt="" />
                        </div>
                    </div>
                </div>
                <div className="card border-template">
                    <div className="card_image">
                        <img src="https://images.unsplash.com/photo-1740880250725-8b0d83ac9c23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="card_desc">
                        <div className="card_info">
                            <p className='card_role'>BACKEND DEVELOPER</p>
                            <div className="card_title">Dynamic</div>
                        </div>
                        <div className="card_icon">
                            <img src={star} alt="" />
                        </div>
                    </div>
                </div>
                <div className="card border-template">
                    <div className="card_image">
                        <img src="https://images.unsplash.com/photo-1738253145888-e8f1e20ab05b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="card_desc">
                        <div className="card_info">
                            <p className='card_role'>BACKEND DEVELOPER</p>
                            <div className="card_title">Dynamic</div>
                        </div>
                        <div className="card_icon">
                            <img src={star} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="work_right">
                <div className="summary_title">
                    <div className="summary_icon">
                        <img src="https://kitpapa.net/gridly/wp-content/uploads/2023/04/star-2.png" alt="" />
                    </div>
                    <div className='dev'>ALL PROJECTS</div>
                    <div className="summary_icon">
                        <img src="https://kitpapa.net/gridly/wp-content/uploads/2023/04/star-2.png" alt="" />
                    </div>
                </div>
                <div className="work_right_list">
                    <div className="card border-template">
                        <div className="card_image">
                            <img src="https://images.unsplash.com/photo-1740004731264-3cde5c198cc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Nnx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className="card_desc">
                            <div className="card_info">
                                <p className='card_role'>BACKEND DEVELOPER</p>
                                <div className="card_title">Dynamic</div>
                            </div>
                            <div className="card_icon">
                                <img src={star} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="card border-template">
                        <div className="card_image">
                            <img src="https://images.unsplash.com/photo-1735014637071-bc09221e6c87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4N3x8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                        <div className="card_desc">
                            <div className="card_info">
                                <p className='card_role'>BACKEND DEVELOPER</p>
                                <div className="card_title">Dynamic</div>
                            </div>
                            <div className="card_icon">
                                <img src={star} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="card border-template">
                        <div className="card_image">
                            <img src="https://images.unsplash.com/photo-1740501410249-bed15e937ca0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDZ8fHxlbnwwfHx8fHw%3D" alt="" />
                        </div>
                        <div className="card_desc">
                            <div className="card_info">
                                <p className='card_role'>BACKEND DEVELOPER</p>
                                <div className="card_title">Dynamic</div>
                            </div>
                            <div className="card_icon">
                                <img src={star} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="card border-template">
                        <div className="card_image">
                            <img src="https://plus.unsplash.com/premium_photo-1663946448065-967d72d58b4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDh8fHxlbnwwfHx8fHw%3D" alt="" />
                        </div>
                        <div className="card_desc">
                            <div className="card_info">
                                <p className='card_role'>BACKEND DEVELOPER</p>
                                <div className="card_title">Dynamic</div>
                            </div>
                            <div className="card_icon">
                                <img src={star} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;