const nav = [
  { label: '会員登録' },
  { label: '運営会社' },
  { label: '利用規約' },
  { label: '個人情報の取扱について' },
  { label: '特定商取引法に基づく表記' },
  { label: 'お問い合わせ' },
];

const Header = () => {
  return (
    <footer className='bg-dark-500'>
      <div className='container-lg min-h-[128px] flex items-center'>
        <div className='flex-1 flex items-center gap-10'>
          {nav.map((item, index) => (
            <span key={index} className='font-jp text-xs'>
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Header;
