import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Faq({ className }) {
  const [showQues, setQues] = useState(1);
  const openQuestion = (value) => {
    setQues(value);
  };
  return (
    <>
      <section className={`appie-faq-area pb-95 ${className || ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-section-title text-center">
                <h3 className="appie-title">Frequently asked questions</h3>
                <p>คำถามที่พบบ่อย</p>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div
              className="faq-accordion wow fadeInRight mt-30"
              data-wow-duration="1500ms"
            >
              <div
                className="accrodion-grp animated fadeIn faq-accrodion wow"
                data-wow-duration="1500ms"
                data-grp-name="faq-accrodion"
              >
                <div //eslint-disable-line
                  onClick={() => openQuestion(1)} //eslint-disable-line
                  className={`accrodion ${showQues === 1 ? 'active' : ''}`}
                >
                  <div className="accrodion-inner">
                    <div className="accrodion-title">
                      <h4>หากคุณไม่ได้รับการแจ้งเตือน</h4>
                    </div>
                    <div
                      className="accrodion-content"
                      style={{
                        display: showQues === 1 ? 'block' : 'none',
                      }}
                    >
                      <div className="inner">
                        <p>
                          1. ลองตรวจสอบว่าอุปกรณ์ของคุณเปิดรับสัญญาณจาก Line Beacon, 
                          <br />เปิดใช้ตำแหน่งที่ตั้ง และ บลูทูธ <br />
                          2. หากยังไม่ได้รับแจ้งเตือน ลองตรวจสอบว่า Line Official Account 
                          <br />ของคุณเปิดรับการแจ้งเตือนหรือไม่ <br />
                          3. กรณีเปิดรับการแจ้งเตือนจาก 
                          Line Official Account แล้ว <br />ให้ลองใช้เมนู &apos;ตรวจสอบบัญชี&apos; 
                          เพื่อตรวขสอบสถานะบัญชี
                        </p> 
                      </div>
                    </div>
                  </div>
                  <script src={openQuestion} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div
              className="faq-accordion wow fadeInRight mt-30"
              data-wow-duration="1500ms"
            >
              <div
                className="accrodion-grp animated fadeIn faq-accrodion wow"
                data-wow-duration="1500ms"
                data-grp-name="faq-accrodion"
              >
                <div //eslint-disable-line
                  onClick={() => openQuestion(2)} //eslint-disable-line
                  className={`accrodion ${showQues === 2 ? 'active' : ''}`}
                >
                  <div className="accrodion-inner">
                    <div className="accrodion-title">
                      <h4>หากต้องการเข้าร่วมกับเรา</h4>
                    </div>
                    <div
                      className="accrodion-content"
                      style={{
                        display: showQues === 2 ? 'block' : 'none',
                      }}
                    >                
                      <div className="inner">
                        <p>
                          ติดต่อเราผ่าน <a href="mailto:demo@gmail.com">mailto:demo@gmail.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <script src={openQuestion} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="faq-text text-center pt-40">
            <p>ไม่พบคำตอบที่ต้องการ?{' '}<a href="mailto:demo@gmail.com">ติดต่อเรา</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

Faq.propTypes = {
  className: PropTypes.func.isRequired,
};

export default Faq;
