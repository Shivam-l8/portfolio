# EmailJS Setup Instructions

To receive anonymous messages via email, you need to set up EmailJS (free service).

## Step 1: Sign Up for EmailJS
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. **Copy your Service ID** (you'll need this)

## Step 3: Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template:

**Subject:** Anonymous Message from Portfolio

**Content:**
```
You received an anonymous message from your portfolio:

{{message}}

---
Sent from: {{from_name}}
Reply to: {{reply_to}}
```

4. **Copy your Template ID** (you'll need this)

## Step 4: Get Your Public Key
1. Go to "Account" → "General" in EmailJS dashboard
2. Find "Public Key" section
3. **Copy your Public Key**

## Step 5: Update script.js
Replace these values in `script.js`:

1. Find `emailjs.init('YOUR_PUBLIC_KEY');`
   - Replace `YOUR_PUBLIC_KEY` with your actual public key

2. Find `emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', ...)`
   - Replace `YOUR_SERVICE_ID` with your Service ID
   - Replace `YOUR_TEMPLATE_ID` with your Template ID
   - Replace the last `'YOUR_PUBLIC_KEY'` with your Public Key

## Example:
```javascript
emailjs.init('abc123xyz'); // Your public key

emailjs.send(
    'service_abc123',      // Your service ID
    'template_xyz789',     // Your template ID
    {
        to_email: 'shivam73825@gmail.com',
        message: message,
        from_name: 'Anonymous',
        reply_to: 'anonymous@portfolio.com'
    },
    'abc123xyz'            // Your public key again
);
```

## Free Tier Limits
- 200 emails per month (free)
- Perfect for portfolio contact forms

## Alternative: Use Formspree
If you prefer, you can use Formspree instead:
1. Go to https://formspree.io/
2. Sign up and create a form
3. Get your form endpoint
4. Update the JavaScript to use fetch() to send to Formspree endpoint


