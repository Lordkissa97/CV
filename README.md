# CV Project

A modern, responsive CV/Resume built with React, TypeScript, and Vite.

## 🚀 Features

- **Modern Stack**: Built with React 19, TypeScript, and Vite
- **Type Safety**: Full TypeScript support with strict configuration
- **Responsive Design**: Mobile-first responsive layout
- **Print Optimized**: Clean printing styles for PDF generation
- **Code Quality**: ESLint and Prettier configured
- **Path Aliases**: Clean imports with `@/` aliases
- **Fast Development**: Hot reload with Vite

## 📁 Project Structure

```
src/
├── components/     # Reusable React components
├── data/          # CV data and content
├── types/         # TypeScript type definitions
├── styles/        # CSS stylesheets
├── App.tsx        # Main application component
└── main.tsx       # Application entry point
```

## 🛠️ Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

   Opens at `http://localhost:3000`

3. **Build for production**
   ```bash
   npm run build
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Check TypeScript types
- `npm run lint` - Lint code with ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 📝 Customization

### Updating Your Information

Edit the data in `src/data/cv-data.ts` to customize:

- Personal information
- Skills
- Work experience
- Education
- Contact details

### Styling

- Main styles: `src/styles/App.css`
- Component-specific styles can be added in `src/styles/components/`

### Adding Sections

1. Update the `Profile` interface in `src/types/Profile.ts`
2. Add data to `src/data/cv-data.ts`
3. Create components in `src/components/`
4. Import and use in `src/App.tsx`

## 🎨 Design System

- **Colors**: Professional blue (#0077b5) with neutral grays
- **Typography**: Inter font family for modern look
- **Spacing**: Consistent rem-based spacing system
- **Shadows**: Subtle shadows for depth

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet/Desktop**: ≥ 768px
- **Print**: Optimized print styles

## 🔧 Configuration Files

- **TypeScript**: `tsconfig.json`, `tsconfig.node.json`
- **Vite**: `vite.config.ts`
- **ESLint**: `.eslintrc.cjs`
- **Prettier**: `.prettierrc`
- **VS Code**: `.vscode/settings.json`

## 📦 Deployment

The project builds to static files and can be deployed to:

- Vercel (already configured)
- Netlify
- GitHub Pages
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details
