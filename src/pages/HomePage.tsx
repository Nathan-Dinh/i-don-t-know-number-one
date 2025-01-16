import type { ReactElement } from 'react';

const Login = (): ReactElement => {
  return (
    <div className={'flex flex-col'}>
      <div className={'flex flex-col justify-center items-center h-[60dvh]'}>
        <h1 className={'text-spotifyGreen text-[2.5rem] font-black'}>
          I Don't Know Project One 😎
        </h1>
        <p className={'text-spotifyWhite text-[1.5rem]'}>
          A project that Im too lazy💤 to write about{' '}
        </p>
      </div>
      <div className={'bg-white w-full h-[40dvh]'}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo asperiores
        temporibus sit fuga reiciendis. Adipisci nemo sed delectus nobis, aut
        facilis obcaecati nihil rem velit reiciendis dolorum, harum quos
        inventore?
      </div>
    </div>
  );
};

export default Login;
