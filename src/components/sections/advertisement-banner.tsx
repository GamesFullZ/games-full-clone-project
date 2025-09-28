import React from 'react';
import Image from 'next/image';

const MAFIA_BANNER_IMAGE_URL = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/mafia-1754521525949-1.jpg?";
const AD_LINK_URL = "https://click.picvenxs.com/XudwCFi5";

const AdvertisementBanner = () => {
  return (
    <section className="my-10 flex w-full justify-center px-5 lg:px-10">
      <a
        href={AD_LINK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Promotional banner for Mafia The Old Country"
        className="group relative hidden h-[70px] w-full max-w-[728px] overflow-hidden rounded-xl md:block lg:h-[90px]"
      >
        <Image
          src={MAFIA_BANNER_IMAGE_URL}
          alt="Mafia The Old Country advertisement with a price tag of $18.99"
          fill
          sizes="(min-width: 1024px) 728px, (min-width: 768px) 728px, 0px"
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </a>
    </section>
  );
};

export default AdvertisementBanner;