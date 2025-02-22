import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTitle = (pageTitle) => {
  const location = useLocation();
  const baseTitle = 'Essenza';

  useEffect(() => {
    document.title = `${baseTitle} - ${pageTitle}`;
  }, [pageTitle, location, baseTitle]);
};

export default usePageTitle;
