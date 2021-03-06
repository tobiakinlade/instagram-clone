import { getProviders, signIn } from 'next-auth/react';
import Header from '../../components/Header';

export default function SignIn({ providers }) {
  return (
    <>
      <Header />
      <div className='flex items-center flex-col justify-center py-2 -mt-56 px-14 text-center'>
        <img className='w-80' src='https://links.papareact.com/ocw' alt='' />
        <p className='font-xs italic'>
          This is not the Real app, it's just for educational purposes only.
        </p>
        <div className='mt-40'>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className='p-3 bg-blue-500 rounded-lg text-white'
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

SignIn.getInitialProps = async () => {
  return {
    providers: await getProviders(),
  };
};
