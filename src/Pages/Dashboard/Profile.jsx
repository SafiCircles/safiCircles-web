import React, { useState, useRef, useEffect } from 'react';
import {
  MdSearch, MdEdit, MdSave, MdClose, MdLock, MdVisibility,
  MdVisibilityOff, MdPerson, MdSecurity, MdCameraAlt
} from 'react-icons/md';
import {
  HiOutlineUser, HiOutlinePhone, HiOutlineEnvelope, HiOutlineCalendar,
  HiOutlineIdentification, HiOutlineMapPin, HiOutlineShieldCheck
} from 'react-icons/hi2';
import DashboardLayout from './DashboardLayout';
import { image } from '../../constants/images';
import './Dashboard.css';
import './Profile.css';

const COUNTRY_CODES = [
  { code: '+250', country: 'Rwanda', flag: '🇷🇼' },
  { code: '+254', country: 'Kenya', flag: '🇰🇪' },
  { code: '+255', country: 'Tanzania', flag: '🇹🇿' },
  { code: '+256', country: 'Uganda', flag: '🇺🇬' },
  { code: '+257', country: 'Burundi', flag: '🇧🇮' },
  { code: '+243', country: 'DR Congo', flag: '🇨🇩' },
  { code: '+1',   country: 'USA/Canada', flag: '🇺🇸' },
  { code: '+44',  country: 'UK', flag: '🇬🇧' },
  { code: '+33',  country: 'France', flag: '🇫🇷' },
  { code: '+49',  country: 'Germany', flag: '🇩🇪' },
  { code: '+27',  country: 'South Africa', flag: '🇿🇦' },
  { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
  { code: '+233', country: 'Ghana', flag: '🇬🇭' },
  { code: '+91',  country: 'India', flag: '🇮🇳' },
  { code: '+86',  country: 'China', flag: '🇨🇳' },
];

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function DatePicker({ value, onChange }) {
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

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const formatDisplay = () => {
    if (!selected) return 'Select date of birth';
    return `${MONTHS[selected.getMonth()]} ${selected.getDate()}, ${selected.getFullYear()}`;
  };

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="datepicker-wrapper" ref={ref}>
      <div className="datepicker-trigger" onClick={() => setOpen(o => !o)}>
        <HiOutlineCalendar className="field-icon" />
        <span className={selected ? 'datepicker-value' : 'datepicker-placeholder'}>{formatDisplay()}</span>
        <MdEdit className="edit-indicator" />
      </div>
      {open && (
        <div className="datepicker-dropdown">
          <div className="datepicker-header">
            <button className="dp-nav-btn" onClick={prevMonth}>‹</button>
            <div className="dp-month-year">
              <select value={viewMonth} onChange={e => setViewMonth(+e.target.value)} className="dp-select">
                {MONTHS.map((m, i) => <option key={m} value={i}>{m}</option>)}
              </select>
              <select value={viewYear} onChange={e => setViewYear(+e.target.value)} className="dp-select">
                {Array.from({ length: 80 }, (_, i) => maxYear - i).map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
            <button className="dp-nav-btn" onClick={nextMonth}>›</button>
          </div>
          <div className="datepicker-grid">
            {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
              <div key={d} className="dp-weekday">{d}</div>
            ))}
            {cells.map((day, idx) => (
              <div
                key={idx}
                className={`dp-cell ${!day ? 'dp-empty' : ''} ${day && selected && selected.getDate() === day && selected.getMonth() === viewMonth && selected.getFullYear() === viewYear ? 'dp-selected' : ''}`}
                onClick={() => day && handleDay(day)}
              >
                {day || ''}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function PhoneInput({ value, onChange, countryCode, onCountryCodeChange }) {
  const [dropOpen, setDropOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef();

  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setDropOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  const filtered = COUNTRY_CODES.filter(c =>
    c.country.toLowerCase().includes(search.toLowerCase()) || c.code.includes(search)
  );
  const selected = COUNTRY_CODES.find(c => c.code === countryCode) || COUNTRY_CODES[0];

  return (
    <div className="phone-input-wrapper" ref={ref}>
      <div className="country-code-btn" onClick={() => setDropOpen(o => !o)}>
        <span>{selected.flag}</span>
        <span>{selected.code}</span>
        <span style={{ fontSize: '0.65rem', opacity: 0.6 }}>▼</span>
      </div>
      <input
        type="tel"
        className="phone-number-input"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="780 000 000"
      />
      {dropOpen && (
        <div className="country-dropdown">
          <input
            className="country-search"
            placeholder="Search country..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            autoFocus
          />
          <div className="country-list">
            {filtered.map(c => (
              <div
                key={c.code + c.country}
                className={`country-option ${c.code === countryCode ? 'selected' : ''}`}
                onClick={() => { onCountryCodeChange(c.code); setDropOpen(false); setSearch(''); }}
              >
                <span>{c.flag}</span>
                <span>{c.country}</span>
                <span style={{ marginLeft: 'auto', color: '#888', fontSize: '0.85rem' }}>{c.code}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const Profile = () => {
  const [profileImage, setProfileImage] = useState(image.sandraProfile);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [activeTab, setActiveTab] = useState('personal');
  const [editMode, setEditMode] = useState(false);
  const [showOldPass, setShowOldPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const [form, setForm] = useState({
    fullName: 'Sandra KIMENYI',
    email: 'sandra.kimenyi@gmail.com',
    phone: '780 603 033',
    countryCode: '+250',
    nationalId: '1 2001 8 0123456 7 89',
    dob: '2001-03-15',
    address: 'Kigali, Rwanda',
  });

  const [security, setSecurity] = useState({ oldPassword: '', newPassword: '', confirmPassword: '' });

  const update = (field, val) => setForm(f => ({ ...f, [field]: val }));

  const tabs = [
    { key: 'personal', label: 'Personal Info', icon: <MdPerson /> },
    { key: 'security', label: 'Security', icon: <MdSecurity /> },
  ];

  return (
    <DashboardLayout>
      <main className="dashboard-main">
        <header className="top-bar">
          <div className="search-wrapper">
            <MdSearch className="search-icon" />
            <input type="text" placeholder="Search..." className="search-input" />
          </div>
        </header>

        {/* Profile Hero */}
        <div className="profile-hero">
          <div className="profile-avatar-wrap">
            <img src={profileImage} alt="Profile" className="profile-avatar-lg" />
            <button className="avatar-edit-btn" onClick={handleImageClick}>
              <MdCameraAlt />
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              style={{ display: 'none' }} 
              accept="image/*" 
              onChange={handleFileChange}
            />
          </div>
          <div className="profile-hero-info">
            <h1 className="profile-name">{form.fullName}</h1>
            <p className="profile-sub">{form.email}</p>
            <span className="premium-badge">⭐ Premium Member</span>
          </div>
        </div>


        {/* Tabs */}
        <div className="profile-tabs">
          {tabs.map(t => (
            <button
              key={t.key}
              className={`profile-tab ${activeTab === t.key ? 'active' : ''}`}
              onClick={() => setActiveTab(t.key)}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* Personal Info Tab */}
        {activeTab === 'personal' && (
          <div className="profile-card">
            <div className="profile-card-header">
              <h2>Personal Information</h2>
              {!editMode ? (
                <button className="btn-edit-profile" onClick={() => setEditMode(true)}>
                  <MdEdit /> Edit
                </button>
              ) : (
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button className="btn-save-profile" onClick={() => setEditMode(false)}>
                    <MdSave /> Save
                  </button>
                  <button className="btn-cancel-profile" onClick={() => setEditMode(false)}>
                    <MdClose /> Cancel
                  </button>
                </div>
              )}
            </div>

            <div className="profile-fields-grid">
              {/* Full Name */}
              <div className="profile-field">
                <label className="field-label"><HiOutlineUser /> Full Name</label>
                {editMode ? (
                  <input className="profile-input" value={form.fullName} onChange={e => update('fullName', e.target.value)} />
                ) : (
                  <p className="field-value">{form.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div className="profile-field">
                <label className="field-label"><HiOutlineEnvelope /> Email Address</label>
                {editMode ? (
                  <input className="profile-input" type="email" value={form.email} onChange={e => update('email', e.target.value)} />
                ) : (
                  <p className="field-value">{form.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="profile-field">
                <label className="field-label"><HiOutlinePhone /> Phone Number</label>
                {editMode ? (
                  <PhoneInput
                    value={form.phone}
                    onChange={v => update('phone', v)}
                    countryCode={form.countryCode}
                    onCountryCodeChange={v => update('countryCode', v)}
                  />
                ) : (
                  <p className="field-value">{form.countryCode} {form.phone}</p>
                )}
              </div>

              {/* Date of Birth */}
              <div className="profile-field">
                <label className="field-label"><HiOutlineCalendar /> Date of Birth</label>
                {editMode ? (
                  <DatePicker value={form.dob} onChange={v => update('dob', v)} />
                ) : (
                  <p className="field-value">
                    {form.dob ? new Date(form.dob + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '—'}
                  </p>
                )}
              </div>

              {/* National ID */}
              <div className="profile-field">
                <label className="field-label"><HiOutlineIdentification /> National ID</label>
                {editMode ? (
                  <input className="profile-input" value={form.nationalId} onChange={e => update('nationalId', e.target.value)} />
                ) : (
                  <p className="field-value">{form.nationalId}</p>
                )}
              </div>

              {/* Address */}
              <div className="profile-field">
                <label className="field-label"><HiOutlineMapPin /> Location</label>
                {editMode ? (
                  <input className="profile-input" value={form.address} onChange={e => update('address', e.target.value)} />
                ) : (
                  <p className="field-value">{form.address}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className="profile-card">
            <div className="profile-card-header">
              <h2>Security Settings</h2>
              <span className="security-badge"><HiOutlineShieldCheck /> Protected</span>
            </div>

            <div className="security-section">
              <h3 className="security-subtitle">Change Password</h3>

              <div className="profile-field">
                <label className="field-label"><MdLock /> Current Password</label>
                <div className="password-input-wrap">
                  <input
                    className="profile-input"
                    type={showOldPass ? 'text' : 'password'}
                    placeholder="Enter current password"
                    value={security.oldPassword}
                    onChange={e => setSecurity(s => ({ ...s, oldPassword: e.target.value }))}
                  />
                  <button className="pass-toggle" onClick={() => setShowOldPass(v => !v)}>
                    {showOldPass ? <MdVisibilityOff /> : <MdVisibility />}
                  </button>
                </div>
              </div>

              <div className="profile-field">
                <label className="field-label"><MdLock /> New Password</label>
                <div className="password-input-wrap">
                  <input
                    className="profile-input"
                    type={showNewPass ? 'text' : 'password'}
                    placeholder="Enter new password"
                    value={security.newPassword}
                    onChange={e => setSecurity(s => ({ ...s, newPassword: e.target.value }))}
                  />
                  <button className="pass-toggle" onClick={() => setShowNewPass(v => !v)}>
                    {showNewPass ? <MdVisibilityOff /> : <MdVisibility />}
                  </button>
                </div>
              </div>

              <div className="profile-field">
                <label className="field-label"><MdLock /> Confirm New Password</label>
                <div className="password-input-wrap">
                  <input
                    className="profile-input"
                    type={showConfirmPass ? 'text' : 'password'}
                    placeholder="Confirm new password"
                    value={security.confirmPassword}
                    onChange={e => setSecurity(s => ({ ...s, confirmPassword: e.target.value }))}
                  />
                  <button className="pass-toggle" onClick={() => setShowConfirmPass(v => !v)}>
                    {showConfirmPass ? <MdVisibilityOff /> : <MdVisibility />}
                  </button>
                </div>
              </div>

              <button className="btn-update-password">Update Password</button>
            </div>

            <div className="security-section" style={{ marginTop: '2rem' }}>
              <h3 className="security-subtitle">Two-Factor Authentication</h3>
              <div className="security-toggle-row">
                <div>
                  <p className="tfa-title">SMS Authentication</p>
                  <p className="tfa-desc">Receive a code via SMS when signing in</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>
        )}
      </main>
    </DashboardLayout>
  );
};

export default Profile;
