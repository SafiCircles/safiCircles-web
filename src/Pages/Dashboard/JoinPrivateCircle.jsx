import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdSearch, MdArrowBack, MdLockOutline } from 'react-icons/md';
import { HiOutlineCheckCircle } from 'react-icons/hi2';
import DashboardLayout from './DashboardLayout';
import './Dashboard.css';
import './JoinPrivateCircle.css';

const JoinPrivateCircle = () => {
  const navigate = useNavigate();
  const [inviteCode, setInviteCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleJoin = (e) => {
    e.preventDefault();
    if (!inviteCode.trim()) {
      setError('Please enter an invitation code');
      return;
    }

    setLoading(true);
    setError('');

    // Mock API call
    setTimeout(() => {
      setLoading(false);
      // Simulate a valid code
      if (inviteCode.toUpperCase().replace('-', '') === 'ABCD1234') {
        setSuccess(true);
        setTimeout(() => {
          navigate('/circles/1'); // Navigate to the circle details
        }, 2000);
      } else {
        setError('Invalid invitation code. Please check and try again.');
      }
    }, 1500);
  };

  return (
    <DashboardLayout>
      <main className="dashboard-main">

        <button className="back-btn" onClick={() => navigate('/circles')}>
          <MdArrowBack /> Back to Circles
        </button>

        <div className="join-private-container">
          <div className="join-card">
            <div className="join-header">
              <div className="lock-icon-wrap">
                <MdLockOutline />
              </div>
              <h1>Join Private Circle</h1>
              <p>Enter the invitation code provided by the circle creator</p>
            </div>

            {success ? (
              <div className="join-success">
                <HiOutlineCheckCircle className="success-icon" />
                <h2>Successfully Joined!</h2>
                <p>Redirecting you to the circle details...</p>
              </div>
            ) : (
              <form className="join-form" onSubmit={handleJoin}>
                <div className="code-input-group">
                  <label htmlFor="invite-code">Invitation Code</label>
                  <input
                    id="invite-code"
                    type="text"
                    placeholder="XXXX-XXXX"
                    value={inviteCode}
                    onChange={(e) => {
                      setInviteCode(e.target.value.toUpperCase());
                      setError('');
                    }}
                    className={error ? 'error' : ''}
                    disabled={loading}
                    autoFocus
                  />
                  {error && <p className="error-message">{error}</p>}
                </div>

                <div className="join-info-box">
                  <p>
                    Private circles are by invitation only. If you don't have a code, 
                    please contact the circle administrator.
                  </p>
                </div>

                <button 
                  type="submit" 
                  className={`btn-join-private ${loading ? 'loading' : ''}`}
                  disabled={loading || !inviteCode.trim()}
                >
                  {loading ? 'Verifying...' : 'Join Circle'}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default JoinPrivateCircle;
