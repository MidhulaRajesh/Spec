import React, { useRef, useEffect, useState } from 'react';
import './VirtualTryOn.css';

const VirtualTryOn = ({ product, onClose }) => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const streamRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState('');

    useEffect(() => {
        let mounted = true;

        const startVideo = async () => {
            try {
                setIsLoading(true);
                setError('');

                // Use the exact same constraints as your friend's code
                const stream = await navigator.mediaDevices.getUserMedia({ 
                    video: { 
                        width: { ideal: 640 }, 
                        height: { ideal: 480 }, 
                        facingMode: "user" 
                    } 
                });

                if (!mounted) {
                    stream.getTracks().forEach(track => track.stop());
                    return;
                }

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    streamRef.current = stream;
                    
                    // Wait for video to be ready before hiding loading
                    videoRef.current.onloadeddata = () => {
                        if (mounted) {
                            setIsLoading(false);
                        }
                    };
                }
            } catch (error) {
                if (!mounted) return;
                console.error('Error accessing webcam:', error);
                setError('Unable to access camera. Please check permissions and close other apps using the camera.');
                setIsLoading(false);
            }
        };

        startVideo();

        return () => {
            mounted = false;
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    const stopCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
        }
    };

    const capturePhoto = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;

        if (canvas && video) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0);

            // Download the image
            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `virtual-tryon-${Date.now()}.png`;
                link.click();
                URL.revokeObjectURL(url);
            });
        }
    };

    const handleClose = () => {
        stopCamera();
        onClose();
    };

    return (
        <div className="virtual-tryon-overlay">
            <div className="virtual-tryon-container">
                <div className="virtual-tryon-header">
                    <h2>Virtual Try-On: {product.name}</h2>
                    <button onClick={handleClose} className="close-btn">×</button>
                </div>

                <div className="virtual-tryon-content">
                    {isLoading && (
                        <div className="loading-overlay">
                            <div className="spinner"></div>
                            <p>Starting camera...</p>
                        </div>
                    )}

                    {error && (
                        <div className="error-overlay">
                            <p>{error}</p>
                        </div>
                    )}

                    <div className="camera-container">
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            className="camera-feed"
                        />
                        
                        {/* Overlay for glasses - positioned on face */}
                        <div className="glasses-overlay">
                            <img 
                                src={product.image ? `http://localhost:5000${product.image}` : ''} 
                                alt="Glasses"
                                className="glasses-image"
                            />
                        </div>

                        {/* Face detection guide */}
                        <div className="face-guide">
                            <div className="guide-frame"></div>
                            <p className="guide-text">Position your face in the frame</p>
                        </div>
                    </div>

                    <canvas ref={canvasRef} style={{ display: 'none' }} />

                    <div className="controls">
                        <button onClick={capturePhoto} className="control-btn primary" disabled={isLoading || error}>
                            <span className="icon">📷</span>
                            Capture Photo
                        </button>
                    </div>

                    <div className="product-info-overlay">
                        <h3>{product.brand}</h3>
                        <p className="price">₹{product.price}</p>
                    </div>
                </div>

                <div className="instructions">
                    <p>📱 Position your face in the center of the frame</p>
                    <p>👓 The glasses will overlay on your face</p>
                    <p>📸 Capture a photo to save your try-on</p>
                </div>
            </div>
        </div>
    );
};

export default VirtualTryOn;
