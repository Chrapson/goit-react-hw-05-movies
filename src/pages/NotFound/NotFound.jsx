import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);

  return (
    <>
      <button type="button" onClick={handleClick}>
        Go Back
      </button>
      <img
        src="https://media.licdn.com/dms/image/C5612AQEPYce5KpNLyg/article-cover_image-shrink_423_752/0/1551659701031?e=1694044800&v=beta&t=1Y1w8I2YViGAHrnRFWAkXcDoYoPSYyXmDF8fV0SQoXk"
        alt="not found"
      />
    </>
  );
};
export default NotFound;
