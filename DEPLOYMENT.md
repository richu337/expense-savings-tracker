# 🚀 Deployment Guide - Render

This guide will help you deploy your Expense & Savings Tracker to Render.

## 📋 Prerequisites

1. ✅ GitHub repository (already done!)
2. ✅ Supabase database set up with tables
3. ✅ Render account ([Sign up here](https://render.com) - it's free!)

## 🎯 Step-by-Step Deployment

### Step 1: Create Render Account
1. Go to [Render.com](https://render.com)
2. Click **Get Started** or **Sign Up**
3. Sign up with your **GitHub account** (recommended for easy integration)

### Step 2: Deploy Static Site

#### Option A: Using Render Dashboard (Easiest)

1. **Log in to Render Dashboard**
   - Go to https://dashboard.render.com

2. **Create New Static Site**
   - Click **New +** button (top right)
   - Select **Static Site**

3. **Connect Your Repository**
   - Click **Connect a repository**
   - Authorize Render to access your GitHub
   - Find and select `expense-savings-tracker`

4. **Configure Your Site**
   - **Name**: `expense-savings-tracker` (or any name you prefer)
   - **Branch**: `main`
   - **Build Command**: Leave empty or use `echo "No build required"`
   - **Publish Directory**: `.` (current directory)

5. **Deploy**
   - Click **Create Static Site**
   - Render will automatically deploy your site
   - Wait 1-2 minutes for deployment to complete

6. **Access Your Site**
   - Your site will be live at: `https://expense-savings-tracker.onrender.com`
   - Or your custom name: `https://your-chosen-name.onrender.com`

#### Option B: Using render.yaml (Automatic)

1. **Go to Render Dashboard**
   - https://dashboard.render.com

2. **Create New Blueprint**
   - Click **New +** → **Blueprint**
   - Connect your GitHub repository
   - Select `expense-savings-tracker`

3. **Render will automatically detect `render.yaml`**
   - It will configure everything automatically
   - Click **Apply** to deploy

4. **Done!**
   - Your site will be deployed automatically

### Step 3: Verify Deployment

1. **Check Deployment Status**
   - Go to your Render dashboard
   - Click on your static site
   - Check the **Events** tab for deployment progress

2. **Test Your Site**
   - Click the URL at the top of the dashboard
   - Your Expense Tracker should load
   - Try adding an expense to test Supabase connection

## 🔧 Custom Domain (Optional)

### Add Your Own Domain

1. **In Render Dashboard**
   - Go to your static site
   - Click **Settings** tab
   - Scroll to **Custom Domains**

2. **Add Domain**
   - Click **Add Custom Domain**
   - Enter your domain (e.g., `expenses.yourdomain.com`)
   - Follow DNS configuration instructions

3. **Update DNS**
   - Add CNAME record pointing to Render
   - Wait for DNS propagation (5-30 minutes)

## 🔄 Automatic Deployments

Render automatically deploys when you push to GitHub:

1. **Make changes locally**
   ```bash
   git add .
   git commit -m "Update feature"
   git push origin main
   ```

2. **Render auto-deploys**
   - Render detects the push
   - Automatically redeploys your site
   - Takes 1-2 minutes

## 🐛 Troubleshooting

### Site Not Loading?
- Check Render dashboard for deployment errors
- Verify all files are committed to GitHub
- Check browser console for errors

### Supabase Not Working?
- Verify `config.js` has correct credentials
- Check Supabase dashboard for table creation
- Verify RLS policies are set correctly

### 404 Errors?
- Make sure `render.yaml` is in the root directory
- Check that `index.html` exists
- Verify publish directory is set to `.`

## 📊 Monitoring

### View Logs
1. Go to Render dashboard
2. Click on your static site
3. Click **Logs** tab
4. View real-time deployment and access logs

### Check Analytics
- Render provides basic analytics
- View bandwidth usage
- Monitor deployment frequency

## 💰 Pricing

**Free Tier Includes:**
- ✅ Unlimited static sites
- ✅ Automatic SSL certificates
- ✅ Global CDN
- ✅ Automatic deployments from GitHub
- ✅ 100 GB bandwidth/month

**Paid Plans:**
- More bandwidth
- Priority support
- Advanced features

## 🎉 You're Live!

Your Expense & Savings Tracker is now deployed on Render!

**Your Live URL**: `https://expense-savings-tracker.onrender.com`

### Next Steps:
1. ✅ Share your app with friends
2. ✅ Add it to your portfolio
3. ✅ Start tracking your expenses!

## 📚 Additional Resources

- [Render Documentation](https://render.com/docs)
- [Render Static Sites Guide](https://render.com/docs/static-sites)
- [Supabase Documentation](https://supabase.com/docs)

---

Need help? Check the troubleshooting section or open an issue on GitHub!