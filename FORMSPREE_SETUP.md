# Formspree Setup - Quick Guide

Formspree is easier to set up than EmailJS and works immediately!

## Step 1: Sign Up
1. Go to https://formspree.io/
2. Click "Get Started" (it's free)
3. Sign up with your email (shivam73825@gmail.com)
4. Verify your email address

## Step 2: Create a Form
1. After logging in, click "New Form"
2. Give it a name like "Portfolio Anonymous Messages"
3. Set the email to receive messages: **shivam73825@gmail.com**
4. Click "Create Form"

## Step 3: Get Your Form Endpoint
1. After creating the form, you'll see a form endpoint URL
2. It looks like: `https://formspree.io/f/YOUR_FORM_ID`
3. **Copy this entire URL**

## Step 4: Update script.js
1. Open `script.js` in your editor
2. Find this line (around line 104):
   ```javascript
   const formspreeEndpoint = 'YOUR_FORMSPREE_ENDPOINT';
   ```
3. Replace `'YOUR_FORMSPREE_ENDPOINT'` with your actual Formspree URL
4. Example:
   ```javascript
   const formspreeEndpoint = 'https://formspree.io/f/xjvqkzpn';
   ```

## Step 5: Test It!
1. Save the file
2. Open your portfolio in a browser
3. Go to the Contact section
4. Try sending an anonymous message
5. Check your email (shivam73825@gmail.com) - you should receive it!

## Free Tier
- 50 form submissions per month (free)
- Perfect for portfolio contact forms
- No credit card required

## That's It!
Your anonymous message form should now work! Messages will be sent directly to your email.

