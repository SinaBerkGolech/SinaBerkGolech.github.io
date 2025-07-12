# Google Analytics Test Guide

## Google Analytics Configuration

Your Google Analytics 4 tracking ID: **G-98N87FR04K**

## Testing Your Analytics

### 1. Deploy to GitHub Pages
```bash
git add .
git commit -m "Add Google Analytics 4 tracking"
git push origin main
```

### 2. Test on Live Site
1. Visit your website: `https://sinaberkgolech.github.io`
2. You should see a **cookie consent notice** at the bottom
3. Click **"Accept"** to enable analytics
4. Navigate through different pages

### 3. Verify in Google Analytics
1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property: `Sina Berk Golech - Academic Website`
3. Check **Real-Time** → **Reports** → **Overview**
4. You should see your visit in real-time

### 4. Test Academic Tracking
Visit these pages to test custom events:

#### Publications
- Go to `/publications/`
- Click on any PDF download link
- Check GA4 Events for `publication_download`

#### Projects
- Go to `/projects/`
- Click on any GitHub repository link
- Check GA4 Events for `project_visit`

#### CV Download
- Click on your CV download link
- Check GA4 Events for `cv_download`

#### Theme Toggle
- Click the dark/light theme toggle
- Check GA4 Events for `theme_toggle`

### 5. Expected Events in GA4

After testing, you should see these events in **Reports** → **Engagement** → **Events**:

| Event Name | Category | Description |
|------------|----------|-------------|
| `page_view` | Default | Every page visit |
| `download` | publication | PDF/paper downloads |
| `click` | project | GitHub repository visits |
| `download` | cv | CV downloads |
| `theme_toggle` | ui | Dark/light theme switches |
| `click` | academic_profile | Scholar/ORCID clicks |
| `click` | research_interest | Research area clicks |

## Debugging

### If Analytics Not Working:

1. **Check Console Errors**
   - Open browser DevTools (F12)
   - Look for JavaScript errors
   - Ensure no ad blockers are active

2. **Verify Tracking ID**
   - Confirm `G-98N87FR04K` is in `_config.yml`
   - Check the script loads in page source

3. **Test Cookie Consent**
   - Clear browser cookies
   - Reload page
   - Accept analytics consent
   - Check if events fire

4. **Check GA4 Property**
   - Verify property is active in Google Analytics
   - Check data stream is configured correctly

## What You'll See

### Real-Time Data
- **Active users** on your site
- **Page views** as you navigate
- **Events** as you interact with content

### Reports (24-48 hours)
- **Audience**: Geographic location, device types
- **Acquisition**: How visitors find your site
- **Engagement**: Most popular pages and content
- **Events**: Academic interactions and downloads

## Academic Insights

Your analytics will help you understand:

- **Research Interest**: Which areas get most attention
- **Publication Impact**: Which papers are downloaded most
- **Project Engagement**: Which repositories get most visits
- **Geographic Reach**: Where your research is being viewed
- **Referral Sources**: How people discover your work

## Privacy Compliance

**GDPR Compliant**: Cookie consent required
**Data Minimization**: Only necessary data collected
**User Control**: Easy opt-out available
**Transparency**: Clear privacy policy

---

Deploy your site to start collecting insights about your academic impact. 