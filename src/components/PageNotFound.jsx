import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const PageNotFound = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/');
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                padding: '20px',
            }}
        >
            <DotLottieReact
                src="/gifs/not-found.json"
                loop
                autoplay
                style={{ width: '250px', height: '250px', marginBottom: '20px' }}
            />

            <div
                style={{
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                    maxWidth: '500px',
                    border: '1px solid #ddd',
                }}
            >
                <h1
                    style={{
                        fontSize: '3rem',
                        color: '#ff6b6b',
                        fontWeight: '600',
                        marginBottom: '10px',
                    }}
                >
                    Not Found
                </h1>
                <p
                    style={{
                        fontSize: '1.2rem',
                        color: '#6c757d',
                        marginBottom: '20px',
                        lineHeight: '1.6',
                    }}
                >
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleBackToHome}
                    style={{
                        fontSize: '1rem',
                        padding: '10px 20px',
                        borderRadius: '25px',
                        textTransform: 'none',
                        backgroundColor: '#007bff',
                        color: 'white',
                    }}
                >
                    Back to Home
                </Button>
            </div>
        </div>
    );
};

export default PageNotFound;
