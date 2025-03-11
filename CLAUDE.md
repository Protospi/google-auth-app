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
- **Dashboard**: 
    Blank page after login (implemented)
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
