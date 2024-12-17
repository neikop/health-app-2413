import { merge } from 'utils/merge';

const Button = (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={merge('min-h-[56px] bg-primary-linear rounded text-white hover:brightness-110', props.className)}
    />
  );
};

export default Button;
