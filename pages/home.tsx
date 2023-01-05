import { loginInteractor } from '../lib/auth/loginInteractor';
import { getUrlContainerList } from '../lib/container/get/getUrlContainerList';
import { InformativeError } from '../lib/errors/InformativeError';
import { User } from '../lib/user/User';

export default function Home() {
  async function test() {
    console.log('linteee');

    const loginRes: User | InformativeError = await loginInteractor({
      username: 'joejoe',
      password: 'Password1234',
    });

    console.log(loginRes);

    const containers = await getUrlContainerList();

    console.log(containers);
  }

  return (
    <>
      <button onClick={() => test()}>depotaaa</button>
    </>
  );
}
