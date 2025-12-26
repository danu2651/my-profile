import Image from "next/image";

export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        {/* HERO SECTION - Staggered Layout */}
        <section style={styles.hero}>
          <div style={styles.heroLeft}>
            <h2 style={styles.name}>Daniel nigussie</h2>
            <div style={styles.statusBadge}>
              <span style={styles.dot}></span> Available for Projects
            </div>
          </div>
          <div style={styles.heroRight}>
            <p style={styles.role}>CS Student & Full Stack Developer</p>
            <p style={styles.bio}>
              Building complex management systems with a focus on
              <span style={{ color: "#fff" }}> minimalist aesthetics</span> and
              <span style={{ color: "#fff" }}> high-performance code.</span>
            </p>
          </div>
        </section>

        {/* TECH STACK - Minimalist Scroller */}
        <div style={styles.techBar}>
          {[
            "C++",
            "PostgreSQL",
            "Next.js",
            "TypeScript",
            "React",
            "Tailwind",
          ].map((tech) => (
            <span key={tech} style={styles.techItem}>
              {tech}
            </span>
          ))}
        </div>

        {/* PROJECTS SECTION - Bento Grid Style */}
        <section style={styles.projectsSection}>
          <h2 style={styles.sectionLabel}>/ Selected Projects</h2>

          <div style={styles.bentoGrid}>
            {/* Project 1: Large Card */}
            <div style={{ ...styles.card, gridColumn: "span 2" }}>
              <div style={styles.cardHeader}>
                <span style={styles.cardTag}>Medical Tech</span>
                <span style={styles.cardYear}>2024</span>
              </div>
              <h3 style={styles.cardTitle}>Student Clinical Management</h3>
              <p style={styles.cardDesc}>
                A high-integrity system for tracking hospital rotations and
                patient data security.
              </p>
              <div style={styles.cardFooter}>C++ • PostgreSQL</div>
            </div>

            {/* Project 2: Small Card */}
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <span style={styles.cardTag}>Real Estate</span>
              </div>
              <h3 style={styles.cardTitle}>House Rental</h3>
              <p style={styles.cardDesc}>
                Automated lease and rent tracking system.
              </p>
              <div style={styles.cardFooter}>SQL • C++</div>
            </div>

            {/* Project 3: Small Card */}
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <span style={styles.cardTag}>Fitness</span>
              </div>
              <h3 style={styles.cardTitle}>Gym System</h3>
              <p style={styles.cardDesc}>
                Membership tiers and subscription logic.
              </p>
              <div style={styles.cardFooter}>C++ OOP</div>
            </div>

            {/* Project 4: Large Card (Web Focus) */}
            <div
              style={{
                ...styles.card,
                gridColumn: "span 2",
                background: "linear-gradient(145deg, #0a0a0a 0%, #111 100%)",
              }}
            >
              <div style={styles.cardHeader}>
                <span style={styles.cardTag}>E-Commerce</span>
                <span style={styles.cardYear}>2025</span>
              </div>
              <h3 style={styles.cardTitle}>The Flower Shop</h3>
              <p style={styles.cardDesc}>
                A modern boutique storefront focusing on fluid animations and
                responsive design.
              </p>
              <div style={styles.cardFooter}>
                Next.js • Tailwind CSS • Framer Motion
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER - Minimal & Bold */}
        <footer style={styles.footer}>
          <p style={styles.footerLabel}>Start a conversation</p>
          <a href="mailto:danielnig1997@gmail.com" style={styles.emailLink}>
            danielnig1997@gmail.com
          </a>
        </footer>
      </div>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    backgroundColor: "#000",
    color: "#888",
    minHeight: "100vh",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    padding: "100px 24px",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    maxWidth: "900px",
    width: "100%",
  },
  hero: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "80px",
    flexWrap: "wrap",
    gap: "40px",
  },
  heroLeft: {
    flex: "1",
  },
  name: {
    fontSize: "5rem",
    fontWeight: "800",
    color: "#fff",
    margin: 0,
    letterSpacing: "-0.05em",
  },
  statusBadge: {
    fontSize: "0.75rem",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },
  dot: {
    height: "6px",
    width: "6px",
    backgroundColor: "#22c55e",
    borderRadius: "50%",
    boxShadow: "0 0 10px #22c55e",
  },
  heroRight: {
    flex: "1",
    maxWidth: "400px",
  },
  role: {
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "600",
    marginBottom: "10px",
  },
  bio: {
    fontSize: "1.1rem",
    lineHeight: "1.5",
  },
  techBar: {
    display: "flex",
    gap: "20px",
    borderBottom: "1px solid #111",
    paddingBottom: "20px",
    marginBottom: "80px",
    overflowX: "auto",
  },
  techItem: {
    fontSize: "0.8rem",
    fontFamily: "monospace",
    whiteSpace: "nowrap",
  },
  projectsSection: {
    marginBottom: "100px",
  },
  sectionLabel: {
    fontSize: "0.9rem",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    marginBottom: "40px",
    color: "#444",
  },
  bentoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  },
  card: {
    backgroundColor: "#0a0a0a",
    border: "1px solid #1a1a1a",
    borderRadius: "16px",
    padding: "32px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "220px",
    transition: "border-color 0.4s",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  cardTag: {
    fontSize: "0.7rem",
    color: "#fff",
    backgroundColor: "#222",
    padding: "4px 10px",
    borderRadius: "4px",
    textTransform: "uppercase",
  },
  cardYear: {
    fontSize: "0.8rem",
    fontFamily: "monospace",
  },
  cardTitle: {
    fontSize: "1.5rem",
    color: "#fff",
    margin: "0 0 10px 0",
    fontWeight: "600",
  },
  cardDesc: {
    fontSize: "0.95rem",
    lineHeight: "1.5",
    marginBottom: "20px",
  },
  cardFooter: {
    fontSize: "0.75rem",
    fontFamily: "monospace",
    color: "#444",
  },
  footer: {
    paddingTop: "60px",
    borderTop: "1px solid #111",
  },
  footerLabel: {
    fontSize: "0.8rem",
    marginBottom: "10px",
  },
  emailLink: {
    fontSize: "2rem",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "700",
    wordBreak: "break-all",
  },
};
