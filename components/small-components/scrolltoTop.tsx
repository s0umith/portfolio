import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { div } from 'three/examples/jsm/nodes/Nodes.js';

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const  pathname  = usePathname();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return(
    <div className='hidden'>

    </div>
  )
}

export default ScrollToTop;