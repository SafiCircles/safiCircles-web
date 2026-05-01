import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingLayout from './OnboardingLayout';
import { image } from '../../constants/images';
import { HiOutlineCalendar } from 'react-icons/hi2';
import { MdEdit } from 'react-icons/md';

const COUNTRY_CODES = [
  { code: '+250', flag: '🇷🇼' },
  { code: '+254', flag: '🇰🇪' },
  { code: '+255', flag: '🇹🇿' },
  { code: '+256', flag: '🇺🇬' },
  { code: '+1', flag: '🇺🇸' },
];

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const DatePicker = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [viewYear, setViewYear] = useState(value ? new Date(value).getFullYear() : 1995);
  const [viewMonth, setViewMonth] = useState(value ? new Date(value).getMonth() : 0);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const selected = value ? new Date(value) : null;
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const today = new Date();
  const maxYear = today.getFullYear() - 18;

  const handleDay = (day) => {
    const d = new Date(viewYear, viewMonth, day);
    onChange(d.toISOString().split('T')[0]);
    setOpen(false);
  };

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="onboarding-datepicker-wrap" ref={ref}>
      <div className="input-field date-trigger" onClick={() => setOpen(!open)}>
        {value ? value : <span style={{ opacity: 0.3 }}>Date of birth</span>}
        <HiOutlineCalendar className="field-icon-right" />
      </div>
      {open && (
        <div className="onboarding-calendar-dropdown">
          <div className="dp-header">
            <button className="dp-nav" onClick={() => viewMonth === 0 ? (setViewMonth(11), setViewYear(v => v - 1)) : setViewMonth(v => v - 1)}>‹</button>
            <div className="dp-month-year">
              <select value={viewMonth} onChange={e => setViewMonth(+e.target.value)} className="onboarding-dp-select">
                {MONTHS.map((m, i) => <option key={m} value={i}>{m}</option>)}
              </select>
              <select value={viewYear} onChange={e => setViewYear(+e.target.value)} className="onboarding-dp-select">
                {Array.from({ length: 80 }, (_, i) => maxYear - i).map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
            <button className="dp-nav" onClick={() => viewMonth === 11 ? (setViewMonth(0), setViewYear(v => v + 1)) : setViewMonth(v => v + 1)}>›</button>
          </div>
          <div className="dp-grid">
            {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <div key={d} className="dp-weekday">{d}</div>)}
            {cells.map((day, idx) => (
              <div
                key={idx}
                className={`dp-cell ${!day ? 'empty' : ''} ${day && selected && selected.getDate() === day && selected.getMonth() === viewMonth && selected.getFullYear() === viewYear ? 'selected' : ''}`}
                onClick={() => day && handleDay(day)}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const SignupStep1 = () => {
  const navigate = useNavigate();
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+250');
  const [showCodes, setShowCodes] = useState(false);
  const codesRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (codesRef.current && !codesRef.current.contains(e.target)) setShowCodes(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <OnboardingLayout>
      <div className="step-header">
        <img src={image.safiLogo} alt="Safi Logo" className="step-header-logo" />
        <div className="brand-text-container">
          <span className="brand-safi">Safi</span>
          <span className="brand-circles">Circles</span>
        </div>
      </div>

      <p className="step-title">Welcome! Let's get you signed up</p>

      <div className="onboarding-form">
        <div className="input-container">
          <input type="text" placeholder="Full Name" className="input-field" />
        </div>
        
        <div className="input-container">
          <input type="text" placeholder="National ID" className="input-field" />
        </div>

        <div className="input-container">
          <DatePicker value={dob} onChange={setDob} />
        </div>

        <div className="input-container phone-input-container" ref={codesRef}>
          <div className="country-code-selector" onClick={() => setShowCodes(!showCodes)}>
            <span>{COUNTRY_CODES.find(c => c.code === countryCode).flag}</span>
            <span>{countryCode}</span>
          </div>
          <input 
            type="tel" 
            placeholder="780 000 000" 
            className="input-field phone-field" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {showCodes && (
            <div className="country-codes-dropdown">
              {COUNTRY_CODES.map(c => (
                <div key={c.code} className="code-option" onClick={() => { setCountryCode(c.code); setShowCodes(false); }}>
                  <span>{c.flag}</span> {c.code}
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="btn-primary" onClick={() => {
          localStorage.setItem('userPhone', countryCode + phone);
          navigate('/signup/step2');
        }}>
          CONTINUE
        </button>
      </div>

      <div className="progress-footer onboarding-footer-spacer">
        <div className="progress-segment filled"></div>
        <div className="progress-segment"></div>
        <div className="progress-segment"></div>
      </div>
    </OnboardingLayout>
  );
};


export default SignupStep1;

