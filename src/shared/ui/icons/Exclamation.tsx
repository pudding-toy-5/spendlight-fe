import IconProps from './types';

const Exclamation: React.FC<IconProps> = ({ size }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      style={{ width: size, height: size }}
      viewBox='0 0 16 16'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.3333 8.00004C13.3333 10.9456 10.9455 13.3334 7.99998 13.3334C5.05446 13.3334 2.66665 10.9456 2.66665 8.00004C2.66665 5.05452 5.05446 2.66671 7.99998 2.66671C10.9455 2.66671 13.3333 5.05452 13.3333 8.00004ZM14.6666 8.00004C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 8.00004C1.33331 4.31814 4.31808 1.33337 7.99998 1.33337C11.6819 1.33337 14.6666 4.31814 14.6666 8.00004ZM7.33331 9.33337V4.00004H8.66665V9.33337H7.33331ZM8.66665 11.3334C8.66665 11.7016 8.36817 12 7.99998 12C7.63179 12 7.33331 11.7016 7.33331 11.3334C7.33331 10.9652 7.63179 10.6667 7.99998 10.6667C8.36817 10.6667 8.66665 10.9652 8.66665 11.3334Z'
        fill='black'
      />
    </svg>
  );
};

export default Exclamation;
