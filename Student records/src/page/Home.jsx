import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient'; 
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showModal, setShowModal] = useState(false);

  // Check if we were redirected back with an error
  useEffect(() => {
    if (searchParams.get('error') === 'not_edu') {
      setShowModal(true);
      setSearchParams({}); // Clean up the URL so it doesn't stay there
    }
  }, [searchParams, setSearchParams]);

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:5173/form', 
        // This forces Google to always show the account selection screen:
        queryParams: {
          prompt: 'select_account', 
        }
      },
    });

    if (error) {
      console.error('Error logging in:', error.message);
      alert('Failed to log in with Google.'); 
    }
  };

  return (
    <div className="login-container">
      {/* ERROR MODAL */}
      {showModal && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full text-center flex flex-col items-center">
            <div className="bg-red-100 text-red-600 rounded-full p-3 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Access Denied</h2>
            <p className="text-gray-600 mb-6">Please use your Institutional Email to log in.</p>
            <button 
              onClick={() => setShowModal(false)}
              className="w-full bg-black text-white font-semibold py-2 rounded-full hover:bg-gray-800 transition"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      <div className="glow-background"></div>
      <main className="main-content">
        <div className="title-container">
          <h1 className="brand-title">STUDENT</h1>
          <h1 className="brand-title highlight">PORTAL</h1>
        </div>

        <div className="auth-buttons">
          <button className="btn btn-google" onClick={handleGoogleLogin}>
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
        </div>

        <p className="disclaimer">
          By clicking Continue to join or sign in, you agree to<br/>
          our <a href="#" className="terms-link">Terms and Conditions</a>.
        </p>
      </main>
    </div>
  );
}

export default Home;