# Sovchilar.com - Multilingual Matchmaking Platform

A modern matchmaking platform built with Next.js that supports English, Russian, and Uzbek languages. This application includes a wizard-style form with conditional logic, multilingual support, passwordless authentication, and integration with a database.

## Features

- **Multilingual Support**: Full support for English, Russian, and Uzbek with language selection via flag icons.
- **Wizard-Style Form**: Multi-step registration form with smooth navigation between steps.
- **Conditional Logic**: Dynamic form fields based on user selections:
  - Children details shown only when "Yes" is selected for having children.
  - Application fee ($5) shown only for male users who are not U.S. citizens or Green Card holders.
- **Passwordless Authentication**: Secure sign-in via email or phone number verification codes.
- **Database Integration**: Uses Prisma ORM with PostgreSQL to store user data.
- **Modern UI**: Responsive design with Tailwind CSS.

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Form Handling**: React Hook Form
- **Internationalization**: next-i18next
- **Authentication**: Clerk (passwordless authentication)
- **Database**: PostgreSQL with Prisma ORM
- **Payments**: Stripe integration
- **File Upload**: React Dropzone

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sovchilar.git
   cd sovchilar
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your database URL and other required API keys

4. Set up the database:
   ```bash
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
sovchilar/
├── prisma/               # Database schema and migrations
├── public/               # Static files
│   ├── images/
│   │   └── flags/        # Language flag icons
│   └── ...
├── src/
│   ├── components/       # React components
│   │   ├── form/         # Form components
│   │   │   └── steps/    # Wizard form steps
│   │   ├── layout/       # Layout components
│   │   ├── language/     # Language selector
│   │   └── ui/           # UI components
│   ├── i18n/             # Internationalization
│   │   └── messages/     # Translation files
│   ├── lib/              # Utility functions
│   ├── pages/            # Next.js pages
│   └── styles/           # Global styles
├── .env                  # Environment variables
└── ...
```

## Wizard Form Steps

1. **Personal Information**: Basic personal details
2. **Physical Details**: Height and weight
3. **Language & Citizenship**: Languages, nationality, citizenship
4. **Education & Profession**: Education level, profession, religious views
5. **About You**: Bio and desired qualities in a spouse
6. **Photos & Verification**: Photo upload and email verification
7. **Review & Submit**: Review all information and submit

## Deployment

This project can be deployed to Vercel, Netlify, or any other Next.js-compatible hosting service.

```bash
# For Vercel
vercel

# For Netlify
netlify deploy
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Prisma](https://www.prisma.io/)
- [Clerk](https://clerk.dev/)
- [Stripe](https://stripe.com/)
