import React, { useEffect } from 'react'

function PageTitle(props) {
  useEffect(() => {
    document.title = `${props.title} | Nicole Lambon`;
    window.scrollTo(0, 0);
  }, [props.title]);

  return <>{props.children}</>;
}

export default PageTitle;
