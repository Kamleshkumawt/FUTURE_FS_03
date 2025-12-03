# FreshSip Deployment Guide

## Quick Start on Vercel

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial FreshSip commit"
   git remote add origin <your-github-repo>
   git push -u origin main
   \`\`\`

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js configuration
   - Click "Deploy"

3. **Your site is live!**
   - Vercel assigns a URL automatically
   - Custom domain can be added in project settings

### Option 2: Vercel CLI

\`\`\`bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project directory
vercel

# Follow the interactive prompts
# Select "Next.js" when asked about framework
\`\`\`

## Post-Deployment

### Custom Domain

1. Go to Vercel Project Settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records (instructions provided by Vercel)

### Environment Variables

If you add backend services later:

1. Go to Settings → Environment Variables
2. Add variables (e.g., API URLs, keys)
3. Redeploy (automatic on git push)

### Analytics

Enable in project settings to track:
- Page views
- Core Web Vitals
- Real User Monitoring (RUM)

### Performance Optimization

Vercel automatically provides:
- Global CDN for fast asset delivery
- Automatic image optimization
- Edge caching
- Zero-config scalability

## Monitoring

### Check Deployment Status

- View all deployments in "Deployments" tab
- Rollback to previous version if needed
- Check build logs for errors

### Enable Analytics

\`\`\`tsx
// In app/layout.tsx, add:
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
\`\`\`

Then install: `npm install @vercel/analytics`

## Troubleshooting

### Build Errors

1. Check `next.config.mjs` for issues
2. Review build logs in Vercel dashboard
3. Ensure all imports are correct
4. Clear `.next` folder locally and rebuild

### Performance Issues

- Use Vercel Analytics to identify bottlenecks
- Check image sizes and formats
- Review Core Web Vitals
- Optimize database queries (if applicable)

### Environment-Specific Issues

- Development: Use `npm run dev`
- Preview: Check preview deployment logs
- Production: Check production deployment logs

## Scaling

Vercel automatically scales your application:
- No manual server management
- Auto-scales to handle traffic spikes
- Pay-as-you-go pricing
- Automatic SSL certificates

## Backup & Security

- Enable "Protected Branches" in GitHub
- Require reviews before merging
- Use secrets for sensitive data
- Enable 2FA on GitHub and Vercel
- Regular database backups (if using database)

## Next Steps

1. **Add Payment Processing** (Stripe, Razorpay)
2. **Implement Authentication** (Supabase, Auth0)
3. **Add Database** (Neon, Supabase)
4. **Email Integration** (SendGrid, Resend)
5. **Monitoring** (Sentry, LogRocket)

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Community: https://github.com/vercel/next.js/discussions
