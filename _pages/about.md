---
permalink: /about/
title: "About Sina Berk Golech"
author_profile: true
---

<div class="about-grid">
  <div class="about-left">
    <img src="/images/bio-photo.jpg" alt="Sina Berk Golech" class="about-photo" />
    <h2>Sina Berk Golech</h2>
    <p class="about-title">Bioinformatics M.Sc. Student<br>Saarland University</p>
    <p class="about-location"><i class="fas fa-map-marker-alt"></i> Saarbrücken, Germany</p>
    <div class="about-contact">
      <a href="mailto:berk.golech@gmail.com" class="btn btn--primary"><i class="fas fa-envelope"></i> Email</a>
      <a href="https://github.com/SinaBerkGolech" class="btn btn--primary" target="_blank"><i class="fab fa-github"></i> GitHub</a>
      <a href="https://linkedin.com/in/sinaberkgolech" class="btn btn--primary" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
      <a href="/SinaBerkGolech_CV.pdf" class="btn btn--outline" target="_blank"><i class="fas fa-file-pdf"></i> Download CV (PDF)</a>
    </div>
    <div class="about-links">
      <a href="https://orcid.org/0000-0003-1443-1103" target="_blank"><img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" alt="ORCID"> ORCID</a>
      <a href="https://scholar.google.com/citations?user=7d9OWBMAAAAJ&hl=en" target="_blank"><i class="ai ai-google-scholar"></i> Google Scholar</a>
    </div>
    <div class="about-skills">
      <h3>Technical Skills</h3>
      <div>
        {% for skill in site.skills.programming_languages %}<span class="label label--primary">{{ skill }}</span> {% endfor %}
      </div>
      <div>
        {% for skill in site.skills.frameworks_libraries %}<span class="label label--info">{{ skill }}</span> {% endfor %}
      </div>
      <div>
        {% for skill in site.skills.tools_platforms %}<span class="label label--success">{{ skill }}</span> {% endfor %}
      </div>
    </div>
  </div>
  <div class="about-right">
    <section>
      <h2>About</h2>
      <p>I am a graduate student in Bioinformatics at Saarland University, specializing in metabolomics, antimicrobial peptides, and computer vision. My research focuses on computational methods for biological data analysis, with a strong interest in machine learning and interdisciplinary collaboration.</p>
    </section>
    <section>
      <h2>Education</h2>
      <ul class="timeline">
        <li><strong>M.Sc. in Bioinformatics</strong>, Saarland University <span class="timeline-date">2023–2025 (expected)</span></li>
        <li><strong>B.S. in Genetics and Bioengineering</strong>, Istanbul Bilgi University <span class="timeline-date">2018–2023</span></li>
        <li><strong>B.S. in Computer Engineering</strong>, Istanbul Bilgi University <span class="timeline-date">2018–2023</span></li>
      </ul>
    </section>
    <section>
      <h2>Research Experience</h2>
      <ul class="timeline">
        <li>
          <strong>Undergraduate Research Assistant</strong>, Genetics and Bioengineering Dept., Istanbul Bilgi University <span class="timeline-date">Spring 2023</span>
          <ul>
            <li>Data analysis of adults with Philadelphia chromosome–like acute lymphoblastic leukaemia</li>
            <li>Transcriptomic and metabolic profiling using R and Python</li>
            <li>Supervisor: PhD Özlem Ulucan Açan</li>
          </ul>
        </li>
        <li>
          <strong>Undergraduate Research Assistant</strong>, Computer Engineering Dept., Istanbul Bilgi University <span class="timeline-date">Spring 2022</span>
          <ul>
            <li>Developed Turkish image caption dataset and deep learning models</li>
            <li>Led a team of 30, managed data and project tasks</li>
            <li>Supervisor: Assoc. Prof. Elena Battini Sönmez</li>
          </ul>
        </li>
      </ul>
    </section>
    <section>
      <h2>Languages</h2>
      <ul class="about-languages">
        <li><strong>English:</strong> Professional proficiency</li>
        <li><strong>Turkish:</strong> Native</li>
        <li><strong>German:</strong> Beginner</li>
      </ul>
    </section>
    <section>
      <h2>Publications</h2>
      <div class="about-publications">
        <ul>{% for post in site.publications reversed %}
          {% include archive-single-cv.html %}
        {% endfor %}</ul>
      </div>
    </section>
    <section>
      <h2>Talks</h2>
      <div class="about-talks">
        <ul>{% for post in site.talks reversed %}
          {% include archive-single-talk-cv.html  %}
        {% endfor %}</ul>
      </div>
    </section>
    <section>
      <h2>Teaching</h2>
      <div class="about-teaching">
        <ul>{% for post in site.teaching reversed %}
          {% include archive-single-cv.html %}
        {% endfor %}</ul>
      </div>
    </section>
  </div>
</div>

---

<style>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  align-items: flex-start;
  margin: 2rem 0;
}
.about-left {
  background: var(--bg-color);
  border-radius: 12px;
  padding: 2rem 1rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.about-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid var(--border-color);
}
.about-title {
  font-size: 1.1rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
}
.about-location {
  color: var(--masthead-link-color);
  margin-bottom: 1rem;
}
.about-contact .btn {
  margin: 0.25rem 0.25rem 0.5rem 0;
}
.about-links {
  margin-bottom: 1rem;
}
.about-links a {
  display: inline-block;
  margin: 0 0.5rem 0.5rem 0;
  color: var(--link-color);
  font-size: 0.95rem;
}
.about-skills {
  margin-top: 1.5rem;
}
.about-skills .label {
  margin: 0.15rem 0.25rem 0.15rem 0;
}
.about-right section {
  margin-bottom: 2rem;
}
.timeline {
  list-style: none;
  padding: 0;
  margin: 0;
}
.timeline li {
  margin-bottom: 1.25rem;
  position: relative;
  padding-left: 1.5rem;
}
.timeline-date {
  color: var(--masthead-link-color);
  font-size: 0.95em;
  margin-left: 0.5em;
}
.about-languages {
  list-style: none;
  padding: 0;
  margin: 0;
}
.about-languages li {
  margin-bottom: 0.5rem;
}
@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
  .about-left {
    margin-bottom: 2rem;
  }
}
</style>
