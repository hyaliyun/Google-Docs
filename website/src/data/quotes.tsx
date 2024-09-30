/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

const QUOTES = [
  {
    thumbnail: require('./quotes/pos.png'),
    name: 'Capture meeting notes with ease and speed',
    title: translate({
      id: 'homepage.quotes.christopher-chedeau.title',
      message: '',
      description: 'Title of quote of Christopher Chedeau on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.christopher-chedeau"
        description="Quote of Christopher Chedeau on the home page">
Draft polished, structured meeting notes with event details straight from a Google Calendar event using the meeting notes building block in Docs.
      </Translate>
    ),
  },
  {
    thumbnail: require('./quotes/shop.png'),
    name: 'Streamline your workflows with electronic signatures',
    title: translate({
      id: 'homepage.quotes.hector-ramos.title',
      message: '',
      description: 'Title of quote of Hector Ramos on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.hector-ramos"
        description="Quote of Hector Ramos on the home page">
Your data is encrypted by default, and an array of safety measures – like advanced client-side encryption, anti-abuse measures, and privacy controls
      </Translate>
    ),
  },
  {
    thumbnail: require('./quotes/wordpress.png'),
    name: 'Get more done with Gemini in Docs',
    title: translate({
      id: 'homepage.quotes.risky-vetter.title',
      message: '',
      description: 'Title of quote of Ricky Vetter on the home page',
    }),
    text: (
      <Translate
        id="homepage.quotes.risky-vetter"
        description="Quote of Ricky Vetter on the home page">
Create professional documents from a few simple prompts and get help refining your content. See the latest summary of your work and ask questions to improve
      </Translate>
    ),
  },
];

export default QUOTES;
