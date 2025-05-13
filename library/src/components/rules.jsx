import React from 'react';

const Rules = () => {
  return (
    <div className="rules-containerr">
      <header className="rules-header">
        <h1 className="rules-title">Library – Rules</h1>
        <nav className="breadcrumb-nav">
          <a href="/" className="breadcrumb-link">Home</a>
          <span className="breadcrumb-separator"> &gt; </span>
          <span className="breadcrumb-current">Library – Rules</span>
        </nav>
      </header>
      <div className="rules-container">
        <section className="rules-content">
          <div className="image-placeholder">
            <div className="image-circle">
              <img src="/r1.jpg" alt="" className='imgg' />
            </div>
          </div>
          <div className="rules-list">
            <h2 className="rules-subtitle">Conduct of Library users</h2>
            <p className="rules-description">
              The Library is to be used for the purpose of academic study and research and for the consultation of subject and other related material. Everyone in the library shall respect the rights of other users.
            </p>
            <ul className="rules-items">
              <li className="rules-item">
                <span className="rules-icon">📖</span>
                Everyone must be strictly observed both by the users on request by any member of the library staff. Silence must be strictly observed both by the users and the library staff in user reading and reference zones of the library.
              </li>
              <li className="rules-item">
                <span className="rules-icon">📱</span>
                The use of cell phones within the library is forbidden. Users are not permitted to smoke, consume food or drink in the library.
              </li>
              <li className="rules-item">
                <span className="rules-icon">📚</span>
                No one shall reserve a working place in the library by leaving library material or personal property on a reading table.
              </li>
              <li className="rules-item">
                <span className="rules-icon">⚠️</span>
                The library is not responsible for any loss of any personal property brought into the library.
              </li>
            </ul>
          </div>
        </section>
        <section className="care-section">
          <div className="image-placeholder">
            <div className="image-circle">
              <img src="/r2.jpg" alt="" className='imgg' />

            </div>
          </div>
          <div className="care-list">
            <h2 className="care-subtitle">Care of Library Material</h2>
            <ul className="care-items">
              <li className="care-item">
                <span className="care-icon">📖</span>
                No one shall mutilate or deface or misplace any library material or piece of library equipment.
              </li>
              <li className="care-item">
                <span className="care-icon">📚</span>
                Anyone responsible for deliberate or careless mutilation or defacement or misplacing of library material, furniture, equipment may be required to pay the full cost of replacement of any article defaced, mutilated or lost in addition to any fines besides removal from membership.
              </li>
            </ul>
          </div>
        </section>
        <section className="entry-section">
          <div className="image-placeholder">
            <div className="image-circle">
              <img src="/r3.jpg" alt="" className='imgg' />

            </div>
          </div>
          <div className="entry-list">
            <h2 className="entry-subtitle">Entry to the Library</h2>
            <ul className="entry-items">
              <li className="entry-item">
                <span className="entry-icon">📖</span>
                Entry into the library is restricted to the registered users on production of proper identity card only. However, visitors may obtain permission to visit the library from the in-charge.
              </li>
              <li className="entry-item">
                <span className="entry-icon">📚</span>
                Registered users shall notify the library promptly in case of any change of name or address.
              </li>
              <li className="entry-item">
                <span className="entry-icon">👤</span>
                Users must get registered with the library for using library services.
              </li>
              <li className="entry-item">
                <span className="entry-icon">📜</span>
                Personal printed reading materials (including Xerox copy) are not allowed inside the library.
              </li>
            </ul>
          </div>
        </section>
        <section className="regulations-section">
          <div className="image-placeholder">
            <div className="image-circle">
              <img src="/r4.jpg" alt="" className='imgg' />

            </div>
          </div>
          <div className="regulations-list">
            <h2 className="regulations-subtitle">Rules & Regulations</h2>
            <ul className="regulations-items">
              <li className="regulations-item">
                <span className="regulations-icon">📖</span>
                Library material shall not be issued to anyone who does not hold a current library card. Material may be issued only to the borrower in person or to a person having the written authority of the borrower. Library user’s shall be held responsible for any material issued on the card.
              </li>
              <li className="regulations-item">
                <span className="regulations-icon">👤</span>
                The library has discretion to limit the period for any material borrowed by a person at any one time, and to grant special borrowing privileges to meet any particular circumstances.
              </li>
              <li className="regulations-item">
                <span className="regulations-icon">📚</span>
                Material marked ‘Not for Loan’ and ‘For reference only’, current and back volumes of periodicals shall not be issued on loan.
              </li>
              <li className="regulations-item">
                <span className="regulations-icon">📦</span>
                All borrowed material shall be returned to the Circulation Desk in the library.
              </li>
              <li className="regulations-item">
                <span className="regulations-icon">💸</span>
                Any borrower, who fails to renew or return borrowed material within the due date shall be liable to pay a fine calculated on the following scale.
              </li>
            </ul>
          </div>
        </section>
        <section className="hours-section">
          <div className="image-placeholder">
            <div className="image-circle">
              <img src="/r5.jpg" alt="" className='imgg' />

            </div>
          </div>
          <div className="hours-list">
            <h2 className="hours-subtitle">Library Working Hours</h2>
            <ul className="hours-items">
              <li className="hours-item">
                <span className="hours-icon">⏰</span>
                The library hours (9:00 A.M. to 8:00 P.M.) serve to students, academic and research community. Library will be closed on Monday and also on selected Public Holidays as per the library calendar.
              </li>
              <li className="hours-item">
                <span className="hours-icon">📅</span>
                The following schedule will be followed for celler: The open area to students from 7:00 A.M. to 8:00 P.M. on all working days except Monday.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Rules;