import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from 'src/styles/stitches.config';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <title>Tower of Fantasy Clone</title>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
          <link rel="shortcut icon" href="/assets/images/general/tof_logo.png" />
          <meta name="description" content="A clone from tower of fantasy landing page improving in responsive, accessibility and best practices."/>
          <meta name="keywords" content="Tower of Fantasy, Clone, Learning, Best practices,TOF"/>
          <meta name="author" content="Johnny Brendow"/>
          <style>
          @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@200;400;500;600;700;800&display=swap');
          </style>
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}