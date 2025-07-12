# Google Analytics 4 Setup Guide

## Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring"
3. Sign in with your Google account
4. Follow the setup wizard

## Step 2: Create a Property

1. Click "Create Property"
2. **Property name**: `Sina Berk Golech - Academic Website`
3. **Reporting time zone**: `Europe/Berlin`
4. **Currency**: `Euro (€)`
5. Click "Next"

## Step 3: Configure Business Information

1. **Business size**: `Small business`
2. **How do you plan to use Google Analytics**: Select relevant options:
   - [x] Understand my users
   - [x] Improve my website
   - [x] Measure user engagement
3. Click "Next"

## Step 4: Create Data Stream

1. **Platform**: `Web`
2. **Website URL**: `https://sinaberkgolech.github.io`
3. **Stream name**: `Academic Website`
4. Click "Create stream"

## Step 5: Get Your Tracking ID

1. After creating the stream, you'll see your **Measurement ID**
2. It will look like: `G-XXXXXXXXXX`
3. Copy this ID

## Step 6: Update Your Website

1. Open `_config.yml` in your website repository
2. Find the analytics section:
   ```yaml
   analytics:
     provider: "google-analytics-4"
     google:
       tracking_id: "G-XXXXXXXXXX" # Replace with your actual ID
   ```
3. Replace `G-XXXXXXXXXX` with your actual Measurement ID
4. Save the file

## Step 7: Test Analytics

1. Deploy your website to GitHub Pages
2. Visit your website
3. Accept the cookie consent notice
4. Check Google Analytics Real-Time reports to see if data is being collected

## Step 8: Configure Academic Goals (Optional)

### Set up Custom Events
Google Analytics will automatically track:
- **Publication downloads** (PDF files, papers)
- **Project repository visits** (GitHub links)
- **CV downloads**
- **Theme toggle usage**
- **Academic profile clicks** (Google Scholar, ORCID, PubMed)
- **Research interest clicks**

### Create Custom Reports
1. Go to **Reports** → **Engagement** → **Events**
2. Look for custom events like:
   - `publication_download`
   - `project_visit`
   - `cv_download`
   - `research_interest`

## Step 9: Privacy Compliance

Your website is already configured with:
- **GDPR-compliant cookie consent**
- **Privacy policy page**
- **Opt-out mechanisms**
- **Data anonymization**

## Step 10: Monitor and Optimize

### Key Metrics to Track:
- **Most visited pages** (publications, projects, skills)
- **Research area interest** (metabolomics, AMPs, computer vision)
- **Geographic distribution** of visitors
- **Device types** (desktop vs mobile)
- **Referral sources** (Google Scholar, LinkedIn, etc.)

### Regular Reviews:
- Check analytics weekly/monthly
- Identify popular content
- Optimize based on user behavior
- Update privacy policy as needed

## Troubleshooting

### Analytics Not Working?
1. Check if tracking ID is correct
2. Verify cookie consent is accepted
3. Check browser console for errors
4. Ensure website is deployed with latest changes

### No Data in Reports?
1. Wait 24-48 hours for data to appear
2. Check if ad blockers are disabled
3. Verify Google Analytics is enabled in `_config.yml`
4. Test with Google Analytics Debugger extension

## Support

If you need help:
- [Google Analytics Help Center](https://support.google.com/analytics/)
- [Google Analytics Community](https://support.google.com/analytics/community)
- Contact: berk.golech@gmail.com

---

This setup provides comprehensive analytics for your academic website while maintaining GDPR compliance and user privacy. 