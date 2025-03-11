# CLAUDE.md - AI Assistant Guidelines

## Build & Test Commands
- Start dev server: `npm start`
- Build for production: `npm run build`
- Test all: `npm test`
- Test single: `npm test -- -t 'test name'`
- Lint: `npm run lint`
- Type check: `npm run typecheck`

## Firebase Configuration
- Update Firebase config in `src/firebase.ts` with actual credentials before use
- Authentication uses Google Sign-in method

## Internationalization (i18n)
- Uses i18next, react-i18next, and i18next-http-backend for translations
- Translations are located in `/src/locales/[language-code]/translation.json`
- Supported languages: English (en), Spanish (es), Brazilian Portuguese (pt-BR)
- Use the `useTranslation` hook and `t('namespace.key')` function to translate content
- Language preferences are stored in localStorage

## Code Style Guidelines
- **Imports**: Group imports (1. external, 2. internal, 3. types)
- **Formatting**: Use Prettier with 2 space indentation
- **Types**: Prefer explicit TypeScript types; avoid `any`
- **Naming**: camelCase for variables/functions, PascalCase for classes/interfaces/types
- **Error Handling**: Use try/catch for async operations; propagate errors with context
- **Components**: Functional components with hooks, explicit prop types
- **React Patterns**: Context API for global state, route-based code splitting
- **Documentation**: JSDoc for public APIs and complex functions

## Application Technical Requirements
- **Login**: 
    The user can login with Google account (implemented)
- **Language Selection**:
    After login, user selects preferred language (implemented)
- **Dashboard**: 
    Blank page with internationalized content (implemented)
- **Register**: 
    Not required - using Google Authentication
- **Chat**: 
    To be implemented
- **Voice**: 
    To be implemented
- **Image**: 
    To be implemented
- **Code**: 
    To be implemented
- **File**: 
    To be implemented
- **Settings**: 
    To be implemented
