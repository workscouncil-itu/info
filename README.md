# IT:U Works Council Website

Official website for the IT:U Works Council, built with Next.js and TypeScript.

## Features

- **Who We Are/Contact**: Information about the Works Council and contact details
- **Media & Events**: Blog section showcasing events, meetings, and media coverage
- **Announcements**: Important updates and announcements from the Works Council
- **Reports**: Blog section with meeting minutes, annual reports, and documentation
- **Surveys**: Active and past surveys for employee feedback

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first, works on all devices

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd WC_Site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The static files will be generated in the `out` directory, ready for deployment.

## Deployment

### GitHub Pages

This project is configured for static export, making it easy to deploy to GitHub Pages:

1. Push your code to GitHub
2. Go to your repository Settings → Pages
3. Select the source branch (e.g., `main`) and `/out` folder
4. Your site will be available at `https://<username>.github.io/<repo-name>`

### Alternative Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `out` folder or connect via Git
- **Any static hosting**: Upload the `out` folder contents

## Project Structure

```
WC_Site/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── who-we-are/        # Who We Are/Contact page
│   ├── media-events/      # Media & Events blog
│   ├── announcements/     # Announcements page
│   ├── reports/           # Reports blog
│   ├── surveys/           # Surveys page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   └── Navigation.tsx     # Navigation component
├── public/               # Static assets
└── ...config files       # Configuration files
```

## Customization

- **Colors**: Edit `tailwind.config.ts` to change the color scheme
- **Content**: Update the content in each page file under `app/`
- **Styling**: Modify Tailwind classes or add custom CSS in `app/globals.css`

## Contributing

1. Create a feature branch
2. Make your changes
3. Test locally
4. Submit a pull request

## License

This project is for the IT:U Works Council.

