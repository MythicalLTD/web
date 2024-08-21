import React from 'react';
import clsx from 'clsx';

type SponsorItem = {
  sponsor: string;
  logo: string;
  url: string;
  desc: string
};

const SponsorList: SponsorItem[] = [
  {
    sponsor: 'AddSlice',
    logo: '/img/slice_logo.png',
    url: 'https://addslice.com/?crew=FgQTfkSz',
    desc: '',
  },
  {
    sponsor: "DeinServerHost",
    logo: '/img/dsh_logo.png',
    url: 'https://deinserverhost.de/store/aff.php?aff=5361',
    desc: '',
  },
  {
    sponsor: 'HT-Hosting',
    logo: '/img/ht_logo.png',
    url: 'https://ht-hosting.de/aff.php?aff=317',
    desc: '',
  }

];

function Sponsor({sponsor, logo, url, desc}: SponsorItem) {

  return (
      <div className={clsx('col col--4')}>
        <div className="text--center" style={{paddingBottom: '20px'}}>
          <a href={url}><img src={logo}/></a>
        </div>
        {desc}
      </div>
    );
  }

export default function HomepageSponsor(): JSX.Element {
  return (
    <section>
      <div className="container">
      <h1 style={{textAlign: 'center', fontSize: '250%'}}>Project Sponsors</h1>
      <p style={{textAlign: 'center' }}>Those are our top sponsors and we are very thankful to have them!</p>

        <div className="row items-center py-2">
          {SponsorList.map((props, idx) => (
            <Sponsor key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
