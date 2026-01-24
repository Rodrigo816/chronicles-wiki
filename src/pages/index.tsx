import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from '@docusaurus/Link';
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


//import HomepageHeader from "../components/HomepageHeader"; // adjust path if yours differs
import styles from "./index.module.css";

type Modpack = {
  id: string;
  title: string;
  description: string;
  version: string;
  minecraft: string;
  loaders: string[]; // e.g. ["NeoForge", "Forge"]
  image: string;     // path inside /static, e.g. "/img/modpacks/endventure.png"
  href?: string;     // optional link to docs page
};

const MODPACKS: Modpack[] = [
  {
    id: "endventure",
    title: "Create Chronicles: Endventure",
    description:
      "Collect 12 Ender Eyes to unlock the End or just relax and build with style. A cozy Create modpack with light progression, easy automation and exploration",
    version: "v1.2.0",
    minecraft: "1.21.1",
    loaders: ["NeoForge"],
    image: "/img/modpacks/endventure1.png",
    href: "/docs/ccend-faq/",
  },
  {
    id: "bosses-and-beyond",
    title: "Create Chronicles: Bosses and Beyond",
    description:
      "Adventure & Automation Modpack blending Create with Exploration, Magic, and Epic Bosses. 800+ Quests | Progression | Custom Recipes",
    version: "v2.5.3",
    minecraft: "1.20.1",
    loaders: ["Forge"],
    image: "/img/modpacks/bb.png",
    href: "/docs/category/bosses-and-beyond/",
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return <span className={styles.tag}>{children}</span>;
}


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/performance-guide">
           Getting Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function ModpackCard({ pack }: { pack: Modpack }) {
  const imgUrl = useBaseUrl(pack.image);

  const CardInner = (
    <div className={styles.card}>
      <div className={styles.cardImageWrap}>
        <img className={styles.cardImage} src={imgUrl} alt={pack.title} loading="lazy" />
      </div>

      <div className={styles.cardBody}>
        <Heading as="h3" className={styles.cardTitle}>
          {pack.title}
        </Heading>

        <p className={styles.cardDescription}>{pack.description}</p>

        <div className={styles.metaRow}>
 {/*          <Tag>Version: {pack.version}</Tag> */}
          <Tag>MC: {pack.minecraft}</Tag>
          {pack.loaders.map((l) => (
            <Tag key={l}>{l}</Tag>
          ))}
        </div>
      </div>
    </div>
  );

  if (pack.href) {
    return (
      <a className={styles.cardLink} href={useBaseUrl(pack.href)}>
        {CardInner}
      </a>
    );
  }

  return CardInner;
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Home"
      description="Create Chronicles modpacks documentation"
    >
      <HomepageHeader />

      {/* ✅ New section below header */}
      <main>
        <section className={styles.modpacksSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" className={styles.sectionTitle}>
                Modpacks
              </Heading>
              <p className={styles.sectionSubtitle}>
                Pick your adventure — each pack has its own progression, quests, and balance.
              </p>
            </div>

            <div className={clsx("row", styles.grid)}>
              {MODPACKS.map((pack) => (
                <div key={pack.id} className={clsx("col col--6", styles.col)}>
                  <ModpackCard pack={pack} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* other homepage sections here */}
      </main>
    </Layout>
  );
}