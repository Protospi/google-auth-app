import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../contexts/AuthContext';

const DashboardPage: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    if (!currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const changeLanguage = () => {
    navigate('/language-selector');
  };

  return (
    <div style={{
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '40px',
        padding: '20px 0',
        borderBottom: '1px solid #eee'
      }}>
        <h1 style={{ margin: 0 }}>{t('dashboard.title')}</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {currentUser?.photoURL && (
            <img 
              src={currentUser.photoURL} 
              alt="Profile" 
              style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%',
                marginRight: '15px'
              }} 
            />
          )}
          <div style={{ marginRight: '20px' }}>
            <div style={{ fontWeight: 'bold' }}>{currentUser?.displayName}</div>
            <div style={{ fontSize: '14px', color: '#666' }}>{currentUser?.email}</div>
            <div style={{ 
              fontSize: '14px', 
              color: '#4285F4', 
              cursor: 'pointer', 
              textDecoration: 'underline',
              marginTop: '4px'
            }} onClick={changeLanguage}>
              {i18n.language.toUpperCase()}
            </div>
          </div>
          <button 
            onClick={handleLogout}
            style={{
              padding: '8px 16px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {t('dashboard.logout')}
          </button>
        </div>
      </header>

      <main>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '30px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          <h2>{t('dashboard.welcome')}</h2>
          <p>{t('dashboard.blankDashboard')}</p>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;