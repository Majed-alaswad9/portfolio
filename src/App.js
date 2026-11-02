import React, {useState} from "react";
import {
  FiArrowUpRight,
  FiArrowDown,
  FiGithub,
  FiLinkedin,
  FiMessageCircle,
  FiCode,
  FiLayers,
  FiSmartphone
} from "react-icons/fi";
import {SiFlutter} from "react-icons/si";
import {
  greeting,
  socialMediaLinks,
  bigProjects,
  workExperiences,
  educationInfo,
  contactInfo,
  isHireable,
  toolkit,
  mobileCapabilities
} from "./portfolio";
import ThemeToggle from "./components/ThemeToggle";
import "./App.scss";

const projectDetails = {
  Humy: {category: "Commerce", type: "Food delivery", color: "peach"},
  "Butterfly Flight": {
    category: "Education",
    type: "Education & assessment",
    color: "lavender"
  },
  "Restaurant FID": {
    category: "Commerce",
    type: "Restaurant experience",
    color: "mint"
  },
  "Golden Tag": {
    category: "Commerce",
    type: "Jewelry store management",
    color: "sand"
  },
  "Kaiali App": {
    category: "Gaming",
    type: "Digital credit & gaming",
    color: "lavender"
  },
  "SW Games": {
    category: "Gaming",
    type: "Digital gaming services",
    color: "blue"
  },
  "Afak Elibdae": {
    category: "Education",
    type: "School management",
    color: "mint"
  }
};
const categories = ["All projects", "Commerce", "Education", "Gaming"];
const expertise = [
  {
    icon: FiSmartphone,
    title: "Mobile experiences",
    description:
      "Responsive Flutter applications with thoughtful interfaces, custom animations, and a focus on performance.",
    tags: ["Flutter", "Dart", "Adaptive UI"]
  },
  {
    icon: FiLayers,
    title: "Built to scale",
    description:
      "Clear architecture and predictable state. Maintainable foundations that grow with the product.",
    tags: ["Clean Architecture", "BLoC", "Riverpod"]
  },
  {
    icon: FiCode,
    title: "Connected systems",
    description:
      "From REST APIs to real-time updates. Connecting mobile products to the services that power them.",
    tags: ["Firebase", "WebSockets", "NestJS", "PostgreSQL"]
  }
];

function ExternalLink({href, children, className, ...props}) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}

function HeroArtwork() {
  return (
    <div
      className="hero-art"
      aria-label="Illustration of a mobile app interface and Flutter development"
    >
      <div className="art-grid" aria-hidden="true" />
      <span className="art-caption">IDEAS → INTERFACES → IMPACT</span>
      <div className="orbit orbit-one" aria-hidden="true" />
      <div className="orbit orbit-two" aria-hidden="true" />
      <div className="floating-tag flutter-tag">
        <SiFlutter aria-hidden="true" /> Flutter
      </div>
      <div className="phone" aria-hidden="true">
        <div className="phone-top">
          <span>9:41</span>
          <span>••• ▰</span>
        </div>
        <div className="phone-island" />
        <div className="phone-content">
          <span className="phone-eyebrow">
            A LITTLE IDEA. A BIG POSSIBILITY.
          </span>
          <h3>
            Make
            <br />
            something
            <br />
            <em>matter.</em>
          </h3>
          <div className="phone-visual">
            <div className="sculpture sculpture-one" />
            <div className="sculpture sculpture-two" />
            <div className="sculpture sculpture-three" />
          </div>
          <div className="phone-bottom">
            <span>Made with purpose</span>
            <FiArrowUpRight />
          </div>
        </div>
      </div>
      <div className="code-note">
        <div className="code-dots">
          <i />
          <i />
          <i />
          <span>the way I build</span>
        </div>
        <code>
          <span>class</span> GreatExperience {"{"}
          <br />
          &nbsp; final craft = <b>'thoughtful'</b>;<br />
          &nbsp; final performance = <b>'fast'</b>;<br />
          &nbsp; final possibilities = <b>∞</b>;<br />
          {"}"}
        </code>
      </div>
      <div className="floating-tag detail-tag">
        <span className="blue-dot" /> Small details. Big difference.
      </div>
      <span className="art-index">FIG. 01 / CRAFTED IN FLUTTER</span>
    </div>
  );
}

function ProjectGallery() {
  const [category, selectCategory] = useState("All projects");
  const projects = bigProjects.projects.filter(
    project =>
      category === "All projects" ||
      projectDetails[project.projectName].category === category
  );
  return (
    <section id="work" className="section work-section">
      <div className="section-label">
        <span>01 / SELECTED WORK</span>
        <span>FROM CONCEPT TO THE APP STORE</span>
      </div>
      <div className="section-heading">
        <h2>
          Real products.
          <br />
          <span>Real purpose.</span>
        </h2>
        <p>
          Different challenges. The same care.
          <br />A selection of mobile products I’ve helped bring to life.
        </p>
      </div>
      <div className="project-filters" aria-label="Filter projects">
        {categories.map(item => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => selectCategory(item)}
          >
            {item}
            {item === "All projects" && (
              <span>
                {bigProjects.projects.length.toString().padStart(2, "0")}
              </span>
            )}
          </button>
        ))}
      </div>
      <div className="project-grid" aria-live="polite">
        {projects.map(project => {
          const details = projectDetails[project.projectName];
          return (
            <article className="project-card" key={project.projectName}>
              <ExternalLink
                className={`project-image ${details.color}`}
                href={project.footerLink[0].url}
                aria-label={`View ${project.projectName} on Google Play`}
              >
                <span className="project-platform">
                  <SiFlutter aria-hidden="true" /> FLUTTER APPLICATION
                </span>
                <div className="project-logo">
                  <img src={project.image} alt="" loading="lazy" />
                </div>
                <span className="project-image-label">{details.type}</span>
                <span className="project-open">
                  <FiArrowUpRight aria-hidden="true" />
                </span>
              </ExternalLink>
              <div className="project-title">
                <h3>{project.projectName}</h3>
                <span>{details.category}</span>
              </div>
              <p dir="auto">{project.projectDesc}</p>
            </article>
          );
        })}
      </div>
      <ExternalLink
        className="text-link github-link"
        href={socialMediaLinks.github}
      >
        <FiGithub aria-hidden="true" /> More of my code on GitHub{" "}
        <FiArrowUpRight aria-hidden="true" />
      </ExternalLink>
    </section>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Majed Alaswad home">
          ma<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a className="header-contact" href="#contact">
            Let’s talk <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </header>
      <main id="main">
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              {isHireable ? "OPEN FOR OPPORTUNITIES" : "FLUTTER DEVELOPER"}
            </div>
            <p className="hero-intro">Hi, I’m {greeting.username}.</p>
            <h1>
              I turn ideas
              <br />
              into apps
              <br />
              <span>people love.</span>
              <span className="hero-asterisk" aria-hidden="true">
                ✳
              </span>
            </h1>
            <p className="hero-description">
              Flutter developer with a feel for design.
              <br />
              Building thoughtful mobile experiences with clean code, smooth
              interactions, and purpose.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#work">
                Explore my work <FiArrowUpRight aria-hidden="true" />
              </a>
              <ExternalLink className="text-link" href={greeting.resumeLink}>
                View résumé <FiArrowUpRight aria-hidden="true" />
              </ExternalLink>
            </div>
            <div className="hero-meta">
              <span>
                <strong>3+</strong> years of experience
              </span>
              <span>
                <strong>
                  {bigProjects.projects.length.toString().padStart(2, "0")}
                </strong>{" "}
                published apps
              </span>
              <a href="#about" aria-label="Discover more about me">
                <FiArrowDown aria-hidden="true" />
              </a>
            </div>
          </div>
          <HeroArtwork />
        </section>
        <section className="toolkit-section" aria-labelledby="toolkit-title">
          <div className="section toolkit-inner">
            <div className="toolkit-heading">
              <h2 id="toolkit-title">My everyday toolkit</h2>
              <p>The technologies, practices, and tools behind the work.</p>
            </div>
            <div className="toolkit-grid">
              {toolkit.map(group => (
                <div className="toolkit-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <ProjectGallery />
        <section id="about" className="about-section">
          <div className="section">
            <div className="section-label">
              <span>02 / THE WAY I THINK</span>
              <span>A DEVELOPER, WITH A PRODUCT MINDSET</span>
            </div>
            <div className="about-intro">
              <h2>
                Good apps feel simple.
                <br />
                <span>That takes care.</span>
              </h2>
              <div>
                <p>{greeting.subTitle}</p>
                <ExternalLink className="text-link" href={greeting.resumeLink}>
                  A closer look at my résumé{" "}
                  <FiArrowUpRight aria-hidden="true" />
                </ExternalLink>
              </div>
            </div>
            <div className="expertise-grid">
              {expertise.map(
                ({icon: Icon, title, description, tags}, index) => (
                  <article className="expertise-card" key={title}>
                    <div className="expertise-top">
                      <Icon aria-hidden="true" />
                      <span>0{index + 1}</span>
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="tags">
                      {tags.map(tag => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                )
              )}
            </div>
            <div className="mobile-capabilities">
              <div>
                <span className="small-label">FLUTTER CAPABILITIES</span>
                <h3>What I can bring to your app.</h3>
                <p>Practical features, built around the product’s needs.</p>
              </div>
              <ul>
                {mobileCapabilities.map(capability => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section id="experience" className="section experience-section">
          <div className="section-label">
            <span>03 / THE JOURNEY</span>
            <span>ALWAYS BUILDING. ALWAYS LEARNING.</span>
          </div>
          <div className="experience-layout">
            <div>
              <h2>
                Experience
                <br />
                <span>that adds up.</span>
              </h2>
              <p className="experience-summary">
                Working with teams to turn complex requirements into dependable
                mobile products.
              </p>
              <div className="education">
                <span className="small-label">THE FOUNDATION</span>
                {educationInfo.schools.map(school => (
                  <div key={school.schoolName}>
                    <h3>{school.schoolName}</h3>
                    <p>
                      {school.subHeader} · {school.duration}
                    </p>
                    <p>
                      {school.desc.replace("Graduated form", "Graduated from")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="experience-list">
              {[...workExperiences.experience].reverse().map(job => (
                <article className="experience-row" key={job.company}>
                  <img src={job.companyLogo} alt="" loading="lazy" />
                  <div>
                    <span className="job-date">
                      {job.date.replace("->", "—")}
                    </span>
                    <h3>
                      <ExternalLink href={job.link}>
                        {job.company} <FiArrowUpRight aria-hidden="true" />
                      </ExternalLink>
                    </h3>
                    <p>{job.role}</p>
                    <p className="job-description" dir="auto">
                      {job.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="section">
            <div className="section-label">
              <span>04 / YOUR NEXT IDEA</span>
              <span>LET’S MAKE IT HAPPEN</span>
            </div>
            <div className="contact-heading">
              <h2>
                Have something
                <br />
                in mind<span>?</span>
              </h2>
              <a
                href={`mailto:${contactInfo.email_address}`}
                className="contact-circle"
                aria-label="Email Majed"
              >
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <div className="contact-bottom">
              <div>
                <p>I’d love to hear about it.</p>
                <a
                  className="email-link"
                  href={`mailto:${contactInfo.email_address}`}
                >
                  {contactInfo.email_address}
                </a>
              </div>
              <div className="social-links">
                <ExternalLink href={socialMediaLinks.github}>
                  <FiGithub aria-hidden="true" /> GitHub
                </ExternalLink>
                <ExternalLink href={socialMediaLinks.linkedin}>
                  <FiLinkedin aria-hidden="true" /> LinkedIn
                </ExternalLink>
                <ExternalLink href={socialMediaLinks.whatsapp}>
                  <FiMessageCircle aria-hidden="true" /> WhatsApp
                </ExternalLink>
                <a href={`tel:${contactInfo.number}`}>
                  Call me <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a className="wordmark" href="#home">
          ma<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} {greeting.username}. Built with care.
        </p>
        <a href="#home">
          Back to top <FiArrowUpRight aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}
export default App;
