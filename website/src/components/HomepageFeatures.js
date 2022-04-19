import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Learn About Golioth',
    Svg: require('../../static/img/logo.svg').default,
    description: (
      <>
        This guide is for Developers to understand the various features of Golioth and how we can assist IoT deployments.
        Along the way, Developers will learn skills for making resiliant IoT systems on both the embedded and Cloud side.
      </>
    ),
  },
  {
    title: 'Learn about Thread/OpenThread',
    Svg: require('../../static/img/thread.svg').default,
    description: (
      <>
        We are very interested in Thread at Golioth, not least of all because the Golioth Console and associated tools can be used to manage fleets of Thread devices (or any other devices that are IP enabled). We are showcasing how to build an entire system here, for Golioth developers to try things out.
      </>
    ),
  },
  {
    title: 'Zephyr based Thread devices',
    Svg: require('../../static/img/zephyr.svg').default,
    description: (
      <>
        Our users find that <a href="https://zephyrproject.org/">Zephyr RTOS</a> provides maximum hardware control and
        flexibility for their client or company projects. We use Zephyr + OpenThread to create devices (nodes) that can connect through a border router to Golioth.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
