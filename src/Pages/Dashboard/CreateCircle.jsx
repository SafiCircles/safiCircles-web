import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdSearch, MdArrowBack, MdCheck, MdRefresh, MdContentCopy } from 'react-icons/md';
import {
  HiOutlineUsers, HiOutlineLockClosed, HiOutlineGlobeAlt,
  HiOutlineCurrencyDollar, HiOutlineCalendar, HiOutlineInformationCircle,
  HiOutlineShieldCheck
} from 'react-icons/hi2';
import DashboardLayout from './DashboardLayout';
import './Dashboard.css';
import './CreateCircle.css';

const generateInviteCode = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 8; i++) {
    if (i === 4) code += '-';
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
};

const CreateCircle = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: '',
    description: '',
    type: 'public',
    frequency: 'monthly',
    contribution: '',
    maxMembers: '',
    startDate: '',
    currency: 'RWF',
    inviteCode: generateInviteCode(),
    agreedToLateFee: false,
    agreedToConsensus: false,
    agreedToRotation: false,
    agreedToWithdrawal: false,
    agreedToTerms: false,
  });

  const update = (field, val) => setForm(f => ({ ...f, [field]: val }));

  const copyCode = () => {
    navigator.clipboard.writeText(form.inviteCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <DashboardLayout>
      <main className="dashboard-main">
        <header className="top-bar">
          <div className="search-wrapper">
            <MdSearch className="search-icon" />
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
        </header>

        <button className="back-btn" onClick={() => step > 1 ? prevStep() : navigate('/circles')}>
          <MdArrowBack /> {step > 1 ? 'Previous Step' : 'Back to Circles'}
        </button>

        <div className="create-circle-container">
          <div className="creation-progress">
            {[1, 2, 3, 4].map(s => (
              <div key={s} className={`progress-step ${step >= s ? 'active' : ''}`}>
                <div className="step-num">{step > s ? <MdCheck /> : s}</div>
                <span className="step-label">
                  {s === 1 && 'Basic Info'}
                  {s === 2 && 'Settings'}
                  {s === 3 && 'Review'}
                  {s === 4 && 'Policies'}
                </span>
              </div>
            ))}
          </div>

          <div className="creation-card">
            {step === 1 && (
              <div className="step-content">
                <h2>Circle Basics</h2>
                <p>Give your circle a name and description that clearly states its purpose.</p>
                <div className="form-group">
                  <label>Circle Name *</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Kigali Techies Savings" 
                    className="form-input"
                    value={form.name}
                    onChange={e => update('name', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea 
                    placeholder="What is this circle for? Who can join?"
                    className="form-input form-textarea"
                    value={form.description}
                    onChange={e => update('description', e.target.value)}
                    rows={3}
                  />
                </div>
                
                <div className="form-group">
                  <label>Circle Privacy</label>
                  <div className="type-cards">
                    <div className={`type-card ${form.type === 'public' ? 'selected' : ''}`} onClick={() => update('type', 'public')}>
                      <div className="type-icon public"><HiOutlineGlobeAlt /></div>
                      <div>
                        <p className="type-title">Public</p>
                        <p className="type-desc">Anyone can discover and request to join</p>
                      </div>
                    </div>
                    <div className={`type-card ${form.type === 'private' ? 'selected' : ''}`} onClick={() => update('type', 'private')}>
                      <div className="type-icon private"><HiOutlineLockClosed /></div>
                      <div>
                        <p className="type-title">Private</p>
                        <p className="type-desc">Only members with invite code can join</p>
                      </div>
                    </div>
                  </div>
                </div>

                {form.type === 'private' && (
                  <div className="invite-code-box">
                    <div className="invite-code-header">
                      <HiOutlineLockClosed />
                      <span>Invite Code</span>
                    </div>
                    <div className="invite-code-display">
                      <span className="invite-code-text">{form.inviteCode}</span>
                      <button className="code-action-btn" onClick={() => update('inviteCode', generateInviteCode())}><MdRefresh /></button>
                      <button className="code-action-btn copy" onClick={copyCode}>
                        {copied ? <MdCheck style={{ color: '#16a34a' }} /> : <MdContentCopy />}
                      </button>
                    </div>
                  </div>
                )}

                <button className="btn-continue" onClick={nextStep} disabled={!form.name.trim()}>Continue</button>
              </div>
            )}

            {step === 2 && (
              <div className="step-content">
                <h2>Circle Settings</h2>
                <p>Set the financial and participation rules.</p>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Contribution Amount *</label>
                    <div className="amount-input-wrap">
                      <span className="currency-prefix">{form.currency}</span>
                      <input className="form-input" type="number" value={form.contribution} onChange={e => update('contribution', e.target.value)} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Currency</label>
                    <select className="form-input form-select" value={form.currency} onChange={e => update('currency', e.target.value)}>
                      <option value="RWF">RWF – Rwandan Franc</option>
                      <option value="USD">USD – US Dollar</option>
                      <option value="KES">KES – Kenyan Shilling</option>
                      <option value="UGX">UGX – Ugandan Shilling</option>
                      <option value="TZS">TZS – Tanzanian Shilling</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Frequency</label>
                    <select className="form-input form-select" value={form.frequency} onChange={e => update('frequency', e.target.value)}>
                      <option value="weekly">Weekly</option>
                      <option value="biweekly">Bi-weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Max Members</label>
                    <input className="form-input" type="number" value={form.maxMembers} onChange={e => update('maxMembers', e.target.value)} />
                  </div>
                </div>

                <button className="btn-continue" onClick={nextStep} disabled={!form.contribution}>Continue</button>
              </div>
            )}

            {step === 3 && (
              <div className="step-content">
                <h2>Review Circle</h2>
                <p>Confirm your circle details before setting policies.</p>
                <div className="review-card">
                  <div className="review-row"><span>Name</span><span>{form.name}</span></div>
                  <div className="review-row"><span>Type</span><span style={{ textTransform: 'capitalize' }}>{form.type}</span></div>
                  <div className="review-row"><span>Amount</span><span>{Number(form.contribution).toLocaleString()} {form.currency}</span></div>
                  <div className="review-row"><span>Frequency</span><span style={{ textTransform: 'capitalize' }}>{form.frequency}</span></div>
                </div>
                <button className="btn-continue" onClick={nextStep}>Final Step: Policies</button>
              </div>
            )}

            {step === 4 && (
              <div className="step-content">
                <h2>Circle Policies</h2>
                <p>Define the governance of your trust network. All members must agree to these before joining.</p>
                
                <div className="policy-list">
                  <div className="policy-item">
                    <input type="checkbox" id="p1" checked={form.agreedToLateFee} onChange={e => update('agreedToLateFee', e.target.checked)} />
                    <label htmlFor="p1">
                      <strong>Late Payment Penalty:</strong> A 2% fee will be charged for any payment delayed by more than 48 hours.
                    </label>
                  </div>
                  <div className="policy-item">
                    <input type="checkbox" id="p2" checked={form.agreedToConsensus} onChange={e => update('agreedToConsensus', e.target.checked)} />
                    <label htmlFor="p2">
                      <strong>Consensus Rule:</strong> Major circle changes (frequency, amount) require 75% member approval.
                    </label>
                  </div>
                  <div className="policy-item">
                    <input type="checkbox" id="p-rotation" checked={form.agreedToRotation} onChange={e => update('agreedToRotation', e.target.checked)} />
                    <label htmlFor="p-rotation">
                      <strong>Rotation Order:</strong> Payout order is determined by join date (First-In, First-Out).
                    </label>
                  </div>
                  <div className="policy-item">
                    <input type="checkbox" id="p-withdrawal" checked={form.agreedToWithdrawal} onChange={e => update('agreedToWithdrawal', e.target.checked)} />
                    <label htmlFor="p-withdrawal">
                      <strong>Withdrawal Policy:</strong> Members can only leave at the end of a full rotation cycle.
                    </label>
                  </div>
                  <div className="policy-item">
                    <input type="checkbox" id="p3" checked={form.agreedToTerms} onChange={e => update('agreedToTerms', e.target.checked)} />
                    <label htmlFor="p3">
                      <strong>Terms of Service:</strong> I confirm these rules and agree to the SafiCircles Terms.
                    </label>
                  </div>
                </div>

                <button 
                  className="btn-create-final" 
                  onClick={() => navigate('/circles/1')}
                  disabled={!form.agreedToTerms || !form.agreedToLateFee || !form.agreedToConsensus || !form.agreedToRotation || !form.agreedToWithdrawal}
                >
                  Confirm & Create Circle
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default CreateCircle;
