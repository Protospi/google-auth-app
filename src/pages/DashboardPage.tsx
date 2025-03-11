import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const DashboardPage: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

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
        <h1 style={{ margin: 0 }}>Dashboard</h1>
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
            Logout
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
          <h2>Welcome to your Dashboard</h2>
          <p>This is a blank dashboard page. Content will be added later.</p>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;