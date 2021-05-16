import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description, keywords } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'HOME | pewriebontal'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Human'} />
        <meta
          name="keywords"
          content={keywords || 'Pewrie Bontal, pewriebontal, Min Thu Khine, pewriebontal.ml'}
        />
      </Helmet>
      <App />
    </>
  );
};
