---
title: "Research Projects"
permalink: /projects/
author_profile: true
---

## Featured Research Projects

Here you'll find an overview of my current and past research projects in bioinformatics, computer vision, and computational biology.

{% raw %}
{% assign projects = site.projects | sort: 'date' | reverse %}
{% for project in projects %}
  {% if project.featured %}
    {% include archive-single-project.html %}
  {% endif %}
{% endfor %}

## All Projects

{% for project in projects %}
  {% unless project.featured %}
    {% include archive-single-project.html %}
  {% endunless %}
{% endfor %}
{% endraw %}

## Research Areas

### Metabolomics & Bioinformatics
- Advanced metabolomics data analysis
- Statistical methods for biological data
- Computational biology workflows

### Antimicrobial Peptides & Microbiome
- AMP sequence analysis and properties
- Gut microbiome interactions
- Therapeutic applications research

### Computer Vision & NLP
- Multilingual image captioning
- Deep learning for Turkish language
- Transformer-based architectures

## Collaboration Opportunities

I'm always interested in collaborating on research projects in bioinformatics, computational biology, and machine learning. Feel free to reach out if you'd like to discuss potential collaborations.

[Contact Me](mailto:berk.golech@gmail.com){: .btn .btn--primary} 