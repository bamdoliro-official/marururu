import { IconPropsType } from "./type";

const SearchIcon = ({ cursor, onClick }: IconPropsType) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      cursor={cursor}
    >
      <path
        d="M18.6343 19.759L14.5503 15.7018C14.0148 16.1481 13.3989 16.4962 12.7027 16.7461C12.0065 16.996 11.2924 17.121 10.5605 17.121C8.72177 17.121 7.16867 16.4872 5.9012 15.2198C4.63373 13.9523 4 12.3992 4 10.5605C4 8.73962 4.63373 7.19081 5.9012 5.91406C7.16867 4.63802 8.72177 4 10.5605 4C12.3814 4 13.9255 4.63373 15.193 5.9012C16.4605 7.16867 17.0942 8.72177 17.0942 10.5605C17.0942 11.3281 16.9692 12.06 16.7193 12.7562C16.4694 13.4525 16.1302 14.0594 15.7018 14.5771L19.7858 18.6611C19.9286 18.8039 20 18.9825 20 19.1967C20 19.4109 19.9197 19.5983 19.759 19.759C19.5983 19.9197 19.4066 20 19.1838 20C18.9603 20 18.7772 19.9197 18.6343 19.759ZM10.5605 15.5143C11.9351 15.5143 13.1001 15.0323 14.0555 14.0683C15.0102 13.1043 15.4875 11.9351 15.4875 10.5605C15.4875 9.18591 15.0102 8.01662 14.0555 7.05263C13.1001 6.08864 11.9351 5.60665 10.5605 5.60665C9.16806 5.60665 7.99449 6.08864 7.03978 7.05263C6.08436 8.01662 5.60665 9.18591 5.60665 10.5605C5.60665 11.9351 6.08436 13.1043 7.03978 14.0683C7.99449 15.0323 9.16806 15.5143 10.5605 15.5143Z"
        fill="#9497A0"
      />
    </svg>
  );
};

export default SearchIcon;
