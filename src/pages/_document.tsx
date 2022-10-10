import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../styles/stitches.config';

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
          <meta name="viewport" content="initial-scale=1.0"/>
          <style>
          @import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@300;400;700&display=swap');
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