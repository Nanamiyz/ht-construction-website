# HT Construction Website

Professional construction company website for HT Construction Ltd, Auckland, New Zealand.

## 🏗️ About

This is a static website built for HT Construction Ltd, showcasing their construction services, projects, and company information.

## 🚀 Deployment on Vercel

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR-USERNAME/ht-construction-website)

### Manual Deployment Steps

1. **Install Vercel CLI** (if not already installed):
```bash
npm install -g vercel
```

2. **Deploy to Vercel**:
```bash
# In the project root directory
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (Select your account)
# - Link to existing project? N
# - Project name? ht-construction
# - Directory? ./
# - Override settings? N
```

3. **Custom Domain Setup**:
```bash
# Add custom domain
vercel domains add htltd.co.nz

# Or use Vercel Dashboard to add domain
```

## 📁 Project Structure

```
HT-Construction-Website/
├── index.html           # Main HTML file
├── vercel.json         # Vercel configuration
├── public/             # Static assets
│   ├── css/
│   │   └── style.css   # Styles
│   ├── js/
│   │   └── main.js     # JavaScript
│   └── images/
│       └── logo.png    # Company logo
└── README.md           # This file
```

## 🌐 Live Website

- **Production**: https://htltd.co.nz (after domain configuration)
- **Vercel URL**: https://ht-construction.vercel.app

## 📞 Contact Information

- **Address**: 4 Cheryl Place, Hillcrest, Auckland
- **Phone**: 021 0825 5118
- **Email**: pu@htltd.co.nz
- **Hours**: Monday - Friday: 7:00 AM - 6:00 PM

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- Vercel for hosting

## 📝 Domain Configuration

### DNS Settings (at domain registrar):

For Vercel hosting, add these DNS records:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 🔧 Local Development

1. Clone the repository:
```bash
git clone https://github.com/YOUR-USERNAME/ht-construction-website.git
cd ht-construction-website
```

2. Open `index.html` in a browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

3. Visit `http://localhost:8000`

## 📄 License

© 2024 HT Construction Ltd. All rights reserved.

## 👤 Developer

Developed for HT Construction Ltd by [Nanami Zhan]

---

**Note**: This is a static website optimized for Vercel deployment. No backend or database required.