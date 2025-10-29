import VirtualTryOn from "./VirtualTryOn";
import glasses1 from "./assets/glasses1.png";
import { useLocation } from 'react-router-dom';

function TryOnPage() {
  const location = useLocation();
  const passedImg = location?.state?.glassesImg || null;
  const glassesImg = passedImg || glasses1;

  return (
    <div style={{ 
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <h2 style={{
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>Virtual Try-On 👓</h2>
      <div style={{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '15px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '800px'
      }}>
        <VirtualTryOn glassesImg={glassesImg} />
      </div>
    </div>
  );
}

export default TryOnPage;
