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
        <meta name="description" content={description || `pewriebontal's landing page`} />
        <meta
          name="keywords"
          content={keywords || 'Pewrie Bontal, pewriebontal, Min Thu Khine, pewriebontal.ml'}
        />
        <meta property="og:title" content="HOME | pewriebontal" />
        <meta property="og:description" content="pewriebontal's landing page" />
        <meta property="og:image" content="https://pewriebontal.ml/img/logo.png" />
        <meta property="og:url" content="https://pewriebontal.ml" />
        <meta name="twitter:title" content="HOME | pewriebontal " />
        <meta name="twitter:description" content=" pewriebontal's landing page" />
        <meta name="twitter:image" content=" https://pewriebontal.ml/img/logo.png" />
        <meta name="twitter:card" content="summary_large_image" /> */
      </Helmet>
      <App />
    </>
  );
};
