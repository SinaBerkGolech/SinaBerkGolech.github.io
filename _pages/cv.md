---
layout: single
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
---

<div class="cv-header">
  <h1>Sina Berk Golech</h1>
  <p>Bioinformatics M.Sc. Student, Saarland University</p>
  <a href="/SinaBerkGolech_CV.pdf" class="btn btn--primary" target="_blank"><i class="fas fa-file-pdf"></i> Download PDF</a>
</div>

<div class="cv-grid">
  <div class="cv-left">
    <h2>Contact</h2>
    <ul class="cv-contact">
      <li><i class="fas fa-envelope"></i> <a href="mailto:berk.golech@gmail.com">berk.golech@gmail.com</a></li>
      <li><i class="fab fa-github"></i> <a href="https://github.com/SinaBerkGolech" target="_blank">GitHub</a></li>
      <li><i class="fab fa-linkedin"></i> <a href="https://linkedin.com/in/sinaberkgolech" target="_blank">LinkedIn</a></li>
      <li><img src="https://orcid.org/sites/default/files/images/orcid_16x16.png" alt="ORCID"> <a href="https://orcid.org/0000-0003-1443-1103" target="_blank">ORCID</a></li>
    </ul>
    <h2>Skills</h2>
    <div class="cv-skills">
      <div>{% for skill in site.skills.programming_languages %}<span class="label label--primary">{{ skill }}</span> {% endfor %}</div>
      <div>{% for skill in site.skills.frameworks_libraries %}<span class="label label--info">{{ skill }}</span> {% endfor %}</div>
      <div>{% for skill in site.skills.tools_platforms %}<span class="label label--success">{{ skill }}</span> {% endfor %}</div>
    </div>
    <h2>Languages</h2>
    <ul class="cv-languages">
      <li><strong>English:</strong> Professional proficiency</li>
      <li><strong>Turkish:</strong> Native</li>
      <li><strong>German:</strong> Beginner</li>
    </ul>
  </div>
  <div class="cv-right">
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
      <h2>Publications</h2>
      <ul>{% for post in site.publications reversed %}
        {% include archive-single-cv.html %}
      {% endfor %}</ul>
    </section>
    <section>
      <h2>Talks</h2>
      <ul>{% for post in site.talks reversed %}
        {% include archive-single-talk-cv.html  %}
      {% endfor %}</ul>
    </section>
    <section>
      <h2>Teaching</h2>
      <ul>{% for post in site.teaching reversed %}
        {% include archive-single-cv.html %}
      {% endfor %}</ul>
    </section>
  </div>
</div>

---

<style>
.cv-header {
  text-align: center;
  margin-bottom: 2rem;
}
.cv-header .btn {
  margin-top: 1rem;
}
.cv-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  align-items: flex-start;
  margin: 2rem 0;
}
.cv-left {
  background: var(--bg-color);
  border-radius: 12px;
  padding: 2rem 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.cv-contact {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}
.cv-contact li {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}
.cv-skills .label {
  margin: 0.15rem 0.25rem 0.15rem 0;
}
.cv-languages {
  list-style: none;
  padding: 0;
  margin: 0;
}
.cv-languages li {
  margin-bottom: 0.5rem;
}
.cv-right section {
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
@media (max-width: 900px) {
  .cv-grid {
    grid-template-columns: 1fr;
  }
  .cv-left {
    margin-bottom: 2rem;
  }
}
</style>
