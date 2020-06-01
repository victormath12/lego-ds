import React, { useState } from 'react';
import SEO from '@antv/gatsby-theme-antv/site/components/Seo';
import Banner from '@antv/gatsby-theme-antv/site/components/Banner';
import Features from '@antv/gatsby-theme-antv/site/components/Features';

import BannerIcon from "../images/banner-home.svg";

import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t, i18n } = useTranslation();

  const features = [
    {
      index: 0,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png',
      title: t('Angular'),
      description: t(
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dapibus enim. 
        Pellentesque cursus, velit eu lacinia facilisis, elit odio ullamcorper justo, 
        vel auctor est nisl sit amet dui.`,
      ),
    },
    {
      index: 1,
      icon:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      title: t('React'),
      description: t(
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dapibus enim. 
        Pellentesque cursus, velit eu lacinia facilisis, elit odio ullamcorper justo, 
        vel auctor est nisl sit amet dui.`,
      ),
    },
    {
      index: 2,
      icon:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
      title: t('Vue'),
      description: t(
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dapibus enim. 
        Pellentesque cursus, velit eu lacinia facilisis, elit odio ullamcorper justo, 
        vel auctor est nisl sit amet dui.`,
      ),
    },
  ];

  const bannerButtons = [
    {
      text: t('Getting Started'),
      link: '#products',
      type: 'primary',
    },
  ];

  const notifications = [
    {
      type: t('1.0.0'),
      title: t('Latest Version'),
      date: '21/05/2020',
      link: 'https://github.com/victormath12/lego-ds',
    },
  ];

  return (
    <>
      <SEO
        title={t('Lego.ds')}
        titleSuffix={t('Documentation')}
        description={t(
          `Lego.ds is an open-source Design System project based on building blocks to 
          create an amazing cross-platform digital experiences.`,
        )}
        lang="en"
      />
      <Banner
        className="banner"
        coverImage={<BannerIcon style={{ marginTop: 120 }} />}
        title={t('Have fun creating web-apps')}
        description={t(
          `Lego.ds is an open-source Design System project based on building blocks to 
          create an amazing cross-platform digital experiences.`,
        )}
        showGithubStars={true}
        buttons={bannerButtons}
        notifications={notifications}
      />
      <Features title={t('Create amazing experiences in any frameworks')} features={features} />
    </>
  );
};

export default Index;
