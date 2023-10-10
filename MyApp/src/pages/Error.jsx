import Wrapper from '../CSS/ErrorPage';
import { Link, useRouteError } from 'react-router-dom';
import notFound from '../images/Error404.svg';
const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
            <img src={notFound} alt='notfound'/>
          <p>We can't seem to find page you are looking for</p>
          <Link to='/'>back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>something went wrong </h3>
      </div>
    </Wrapper>
  );
};
export default Error;