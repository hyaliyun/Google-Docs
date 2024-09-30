/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Section from '../components/Section';
import SectionTitle from '../components/SectionTitle';
import ThemeImage from '../components/ThemeImage';

import FoxFact from './FoxFact';
import styles from './styles.module.css';

function Platforms() {
  return (
    <Section>
      <SectionTitle
        title="Google Docs Online, collaborative documents"
        description="AI-powered documents to help you and your team create and collaborate on content. Easily create documents without having to write them from scratch. You can use templates and building blocks to create professional-grade documents."
      />
      <div className={styles.platformsContainer}>
        <div className={styles.featureContainer}>
          <div className={styles.codeEditor}>
            <div className={styles.codeEditorTitleContainer}>Word</div>
            <div className={styles.codeEditorContentContainer}>
              <pre>
              <span style={{color: 'var(--home-code-red)'}}></span>{' '}
                <span style={{color: 'var(--home-code-purple'}}>
                </span>
                       <br />
                       <br />
                <span
                  style={{color: 'var(--home-code-red)'}}></span>
                 <br />
                 <br />
                <span style={{color: 'var(--home-code-green)'}}></span>
                 <br />
                 <br />
                <span style={{color: 'var(--home-code-green)'}}></span>
                 Hello World 👋 🌍!
                <span style={{color: 'var(--home-code-green)'}}></span>
              
               
                <span style={{color: 'var(--home-code-green)'}}></span>
                 <br />
                 <br />
                
              </pre>
            </div>
          </div>
          <div className={styles.deviceContainer}>
            <ThemeImage
              lightSrc="/img/homepage/devices.png"
              darkSrc="/img/homepage/devices-dark.png"
              className={styles.devices}
              alt="Android device and iOS device"
            />
          </div>
        </div>
      </div>
      <div className={styles.foxFactContainer}>
        <FoxFact className={styles.fox} />
        <p>
          <strong>Learn why organizations use Docs</strong>{' '}
          Since written communication is an important foundation, we are also heavy users of Google Docs. For example, we create highly organized Docs for meetings, allowing everyone to collaborate and add notes instantly.
        </p>
      </div>
    </Section>
  );
}

export default Platforms;
