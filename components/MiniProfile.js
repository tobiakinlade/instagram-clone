import { signOut, signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';

function MiniProfile() {
  const { data: session } = useSession();
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img
        src={session?.user?.image}
        alt='profile pic'
        className='rounded-full border w-16 h-16'
      />

      <div className='flex-1 mx-4'>
        <h2 className='font-bold'>{session?.user?.username}</h2>
        <h3 className='texr-sm text-gray-400'>Welcome to Instagram</h3>
      </div>

      <button onClick={signOut} className='text-blue-400 text-sm font-semibold'>
        Sign out
      </button>
    </div>
  );
}

export default MiniProfile;
