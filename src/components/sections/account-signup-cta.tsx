import React from 'react';

const AccountSignupCta = () => {
  return (
    <section className="relative mx-auto my-10 hidden w-full max-w-7xl rounded-lg bg-[#0D9488] p-6 md:block lg:p-10">
      <div className="text-center text-white">
        <span className="text-2xl font-semibold">
          🚀 Crea una cuenta en{' '}
          <span className="font-bold text-primary">GamesFull. 🚀</span>
        </span>
        <span className="mt-2 block">
          Puedes valorar y dejar una reseña en tus juegos favoritos 🤩
        </span>
        <button className="mt-5 animate-pulse text-2xl font-bold text-primary transition-transform hover:scale-105">
          CLICK AQUI
        </button>
      </div>
    </section>
  );
};

export default AccountSignupCta;