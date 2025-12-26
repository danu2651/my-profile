import Image from "next/image";

export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        {/* HERO SECTION */}
        <section style={styles.hero}>
          <div style={styles.heroLeft}>
            <h1 style={styles.name}>Daniel nigussie.</h1>
            <div style={styles.statusBadge}>
              <span style={styles.dot}></span> Available for Projects
            </div>
          </div>
          <div style={styles.heroRight}>
            <p style={styles.role}>CS Student & Full Stack Developer</p>
            <p style={styles.bio}>
              Designing robust systems with
              <span style={{ color: "#fff" }}> vibrant clarity</span> and
              <span style={{ color: "#fff" }}> architectural logic.</span>
            </p>
          </div>
        </section>

        {/* SKILLS SECTION - New Aesthetic Pill Bar */}
        <section style={styles.skillsBar}>
          {[
            "Next.js",
            "PostgreSQL",
            "C++",
            "JavaScript",
            "HTML",
            "CSS",
            "React",
          ].map((skill) => (
            <span key={skill} style={styles.skillPill}>
              {skill}
            </span>
          ))}
        </section>

        {/* PROJECTS SECTION */}
        <section style={styles.projectsSection}>
          <h2 style={styles.sectionLabel}>/ Selected Portfolio</h2>

          <div style={styles.bentoGrid}>
            {/* Project 1: Clinical System */}
            <div style={{ ...styles.card, gridColumn: "span 2" }}>
              <div style={styles.imageWrapperWide}>
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
                  alt="Medical Technology"
                  style={styles.cardImage}
                />
              </div>
              <div style={styles.cardContent}>
                <div style={styles.cardHeader}>
                  <span style={styles.cardTag}>Medical System</span>
                </div>
                <h3 style={styles.cardTitle}>Student Clinical Management</h3>
                <p style={styles.cardDesc}>
                  A professional dashboard for managing hospital rotations and
                  clinical data.
                </p>
                <div style={styles.cardFooter}>C++ • PostgreSQL</div>
              </div>
            </div>

            {/* Project 2: House Rental */}
            <div style={styles.card}>
              <div style={styles.imageWrapperSmall}>
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600"
                  alt="Modern House"
                  style={styles.cardImage}
                />
              </div>
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>Rental Hub</h3>
                <p style={styles.cardDesc}>
                  Automated lease and rent tracking.
                </p>
                <div style={styles.cardFooter}>SQL • C++</div>
              </div>
            </div>

            {/* Project 3: Gym System */}
            <div style={styles.card}>
              <div style={styles.imageWrapperSmall}>
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=600"
                  alt="Gym Equipment"
                  style={styles.cardImage}
                />
              </div>
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>Gym Management</h3>
                <p style={styles.cardDesc}>
                  Member logic and tiered subscriptions.
                </p>
                <div style={styles.cardFooter}>C++ OOP</div>
              </div>
            </div>

            {/* Project 4: Flower Shop */}
            <div style={{ ...styles.card, gridColumn: "span 2" }}>
              <div style={styles.imageWrapperFlower}>
                <img
                  src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=1200"
                  alt="Vibrant Flower Bouquet"
                  style={styles.cardImage}
                />
              </div>
              <div style={styles.cardContent}>
                <div style={styles.cardHeader}>
                  <span style={styles.cardTag}>E-Commerce</span>
                </div>
                <h3 style={styles.cardTitle}>The Flower Shop</h3>
                <p style={styles.cardDesc}>
                  A minimalist floral storefront. Optimized for high-quality
                  visuals.
                </p>
                <div style={styles.cardFooter}>Next.js • React • Tailwind</div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={styles.footer}>
          <div style={styles.socialLinks}>
            <a href="https://github.com" style={styles.socialIcon}>
              GitHub
            </a>
            <a href="https://linkedin.com" style={styles.socialIcon}>
              LinkedIn
            </a>
          </div>
          <a href="mailto:danielnig1997@gmail.com" style={styles.emailLink}>
            danielnig1997@gmail.com
          </a>
          <p style={styles.copyright}>© 2025 DANI • BUILT WITH LOGIC</p>
        </footer>
      </div>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  main: {
    backgroundColor: "#000",
    color: "#a1a1aa",
    minHeight: "100vh",
    fontFamily: "'Inter', sans-serif",
    padding: "60px 20px",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    maxWidth: "800px",
    width: "100%",
  },
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "40px",
    flexWrap: "wrap",
    gap: "30px",
  },
  name: {
    fontSize: "clamp(2.5rem, 8vw, 4rem)",
    fontWeight: "900",
    color: "#fff",
    margin: 0,
    letterSpacing: "-0.05em",
  },
  statusBadge: {
    fontSize: "0.65rem",
    color: "#fff",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    marginTop: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    padding: "4px 10px",
    backgroundColor: "#111",
    borderRadius: "100px",
    border: "1px solid #222",
  },
  dot: {
    height: "6px",
    width: "6px",
    backgroundColor: "#22c55e",
    borderRadius: "50%",
    boxShadow: "0 0 10px #22c55e",
  },
  heroRight: {
    maxWidth: "380px",
  },
  role: {
    color: "#fff",
    fontWeight: "600",
    marginBottom: "8px",
    fontSize: "1rem",
  },
  bio: { fontSize: "1rem", lineHeight: "1.5" },

  // New Skills Bar Styling
  skillsBar: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "80px",
    borderBottom: "1px solid #111",
    paddingBottom: "30px",
  },
  skillPill: {
    fontSize: "0.75rem",
    color: "#71717a",
    padding: "6px 14px",
    backgroundColor: "#09090b",
    border: "1px solid #18181b",
    borderRadius: "100px",
    fontWeight: "500",
  },

  projectsSection: { marginBottom: "100px" },
  sectionLabel: {
    fontSize: "0.7rem",
    color: "#3f3f46",
    marginBottom: "30px",
    letterSpacing: "0.15em",
    fontWeight: "bold",
  },
  bentoGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  card: {
    backgroundColor: "#09090b",
    border: "1px solid #18181b",
    borderRadius: "24px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },
  imageWrapperWide: { height: "180px", width: "100%", overflow: "hidden" },
  imageWrapperFlower: { height: "220px", width: "100%", overflow: "hidden" },
  imageWrapperSmall: { height: "140px", width: "100%", overflow: "hidden" },
  cardImage: { width: "100%", height: "100%", objectFit: "cover" },
  cardContent: { padding: "24px" },
  cardTitle: {
    color: "#fff",
    fontSize: "1.3rem",
    margin: "0 0 8px 0",
    fontWeight: "700",
  },
  cardDesc: {
    fontSize: "0.95rem",
    color: "#71717a",
    marginBottom: "15px",
    lineHeight: "1.4",
  },
  cardTag: {
    fontSize: "0.6rem",
    color: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(4px)",
    padding: "4px 10px",
    borderRadius: "100px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  cardFooter: {
    fontSize: "0.75rem",
    fontFamily: "monospace",
    color: "#3f3f46",
  },
  footer: {
    textAlign: "center",
    borderTop: "1px solid #18181b",
    paddingTop: "60px",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  socialIcon: {
    fontSize: "0.8rem",
    color: "#3f3f46",
    textDecoration: "none",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },
  emailLink: {
    fontSize: "1.8rem",
    color: "#fff",
    fontWeight: "800",
    textDecoration: "none",
  },
  copyright: { fontSize: "0.75rem", marginTop: "15px", color: "#27272a" },
};
