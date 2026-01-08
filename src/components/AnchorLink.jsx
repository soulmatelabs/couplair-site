import { useLocation, useNavigate } from 'react-router-dom';

export default function AnchorLink({ to, children, className, ...props }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const targetId = to.replace('/#', '').replace('#', '');
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={to} onClick={handleClick} className={`cursor-pointer ${className}`} {...props}>
      {children}
    </a>
  );
}
