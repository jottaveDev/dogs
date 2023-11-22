import React from 'react';

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changeMatch();
    window.addEventListener('resize', changeMatch);

    // remover efeito quando o componente for desmontado
    return () => {
      window.addEventListener('resize', changeMatch);
    };
  }, [media]);

  return match;
};

export default useMedia;
