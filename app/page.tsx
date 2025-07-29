import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>CMS Tools Tutorials</h1>
        <p className={styles.description}>Welcome to our comprehensive guide for CMS tools and tutorials</p>
      </header>

      <section className={styles.tutorialsSection}>
        <h2 className={styles.sectionTitle}>Available Tutorials</h2>
        <div className={styles.tutorialsGrid}>
          <div className={styles.tutorialCard}>
            <h3 className={styles.tutorialTitle}>Getting Started with CMS</h3>
            <p className={styles.tutorialDescription}>Learn the basics of content management systems</p>
          </div>
          <div className={styles.tutorialCard}>
            <h3 className={styles.tutorialTitle}>Advanced CMS Features</h3>
            <p className={styles.tutorialDescription}>Explore advanced functionality and customization</p>
          </div>
          <div className={styles.tutorialCard}>
            <h3 className={styles.tutorialTitle}>CMS Integration</h3>
            <p className={styles.tutorialDescription}>Integrate your CMS with other tools and services</p>
          </div>
        </div>
      </section>
    </main>
  )
}
