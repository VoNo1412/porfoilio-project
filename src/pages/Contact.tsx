import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="contact_main">
        <div className="contact_left">
            <h3>CONTACT INFO</h3>
            <div className="contact_detail">
                <div className="contact_li">
                    <div className="contact_info_icon">
                        <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aWNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>
                    <div className="contact_info_text">
                        <h3>MAIL US</h3>
                        <p>vuxuanhuy2k1@gmail.com</p>
                    </div>
                </div>
                <div className="contact_li">
                    <div className="contact_info_icon">
                        <img src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aWNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>
                    <div className="contact_info_text">
                        <h3>CONTACT PHONE</h3>
                        <p>0962108985</p>
                    </div>
                </div>
                <div className="contact_li">
                    <div className="contact_info_icon">
                        <img src="https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aWNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>
                    <div className="contact_info_text">
                        <h3>LOCATION</h3>
                        <p>HA NOI</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="contact_right">
            <div className="contact_form border-template">
                <div className="contact_title">
                    <h1>Let's work together.</h1>
                    <div className="contact_icon">
                        <img src="https://kitpapa.net/gridly/wp-content/uploads/2023/04/icon3.png" alt="" />
                    </div>
                </div>
                <input type="text" required className="input-template" placeholder="Your Name *" />
                <input type="email" required className="input-template-large" placeholder="Your Email *" />
                <input type="text" required className="input-template-small" placeholder="Subject *" />
                <textarea  className="input-template-message" placeholder="Message" />
                <button>Send Message</button>
            </div>
        </div>
    </div>
  );
};

export default Contact;