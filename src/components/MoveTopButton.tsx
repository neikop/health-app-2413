const MoveTopButton = () => {
  const handleClickMoveTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className='fixed rounded-full hover:bg-black/10'
      style={{ left: 'calc(50% + 520px)', bottom: '20%' }}
      onClick={handleClickMoveTop}
    >
      <img src={require('assets/icons/component_scroll.svg').default} />
    </button>
  );
};

export default MoveTopButton;
