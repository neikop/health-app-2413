import { merge } from 'utils/merge';

const HexagonButton = (
  props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
) => {
  return (
    <button
      {...props}
      className={merge('bg-primary-linear text-white text-[20px] hover:brightness-110', props.className)}
      style={{
        clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
        width: 134,
        height: 134,
        ...props.style,
      }}
    />
  );
};

export default HexagonButton;
