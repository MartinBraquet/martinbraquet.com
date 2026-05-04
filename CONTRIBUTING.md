# Contributing

Thank you for your interest in contributing to martinbraquet.com! This document provides comprehensive guidelines for contributing
to this open-source project.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Environment](#development-environment)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Making Changes](#making-changes)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Documentation](#documentation)
- [Questions and Support](#questions-and-support)


## Getting Started

### Prerequisites

Before contributing, ensure you have the following installed:

- **Node.js** 20.x or later
- **Yarn** 1.x (classic)
- **Git**
- **Docker** (optional, for isolated development)

### Fork and Clone

1. Fork the [repository](https://github.com/MartinBraquet/martinbraquet.com) on GitHub
2. Clone your fork:
   ```bash
   git clone https://github.com/<your-username>/martinbraquet.com.git
   cd martinbraquet.com
   ```
3. Add the upstream remote:
   ```bash
   git remote add upstream https://github.com/MartinBraquet/martinbraquet.com.git
   ```

### Install Dependencies

```bash
yarn install --frozen-lockfile
```

## Development Environment

### Running the Development Server

```bash
yarn dev
```

Visit http://localhost:3000 to see the application.


### Linting and Type Checking

```bash
# Lint all packages
yarn lint

# Fix linting issues
yarn lint-fix

# Type check all packages
yarn typecheck
```

## Project Structure

```
   ├── components/         # React components
   ├── hooks/              # Custom React hooks
   ├── lib/                # Utilities and services
   ├── pages/              # Next.js pages
   └── messages/           # Internationalization files
```

### Key Technologies

| Layer    | Technology                       |
| -------- | -------------------------------- |
| Frontend | Next.js 16, React 19, TypeScript |
| Styling  | Tailwind CSS                     |

## Coding Standards

### TypeScript

- Use strict TypeScript typing
- Avoid `any` type; use `unknown` when necessary
- Prefer interfaces over types for object shapes
- Use `const` assertions where appropriate

### React Components

- Use functional components with hooks
- Name components after their file name
- Export primary component at the top of the file
- Use composition over inheritance
- Keep components small and focused

Example component structure:

```tsx
import clsx from 'clsx'
import {useState} from 'react'

interface ProfileCardProps {
  name: string
  age: number
  onSelect?: (id: string) => void
  className?: string
}

export function ProfileCard({name, age, onSelect, className}: ProfileCardProps) {
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    setSelected(!selected)
    onSelect?.(name)
  }

  return (
    <div className={clsx('card', selected && 'selected', className)}>
      <h3>
        {name}, {age}
      </h3>
      <button onClick={handleClick}>Select</button>
    </div>
  )
}
```

### Naming Conventions

- **Files**: kebab-case (`profile-card.tsx`)
- **Components**: PascalCase (`ProfileCard`)
- **Hooks**: camelCase with `use` prefix (`useUserProfile`)
- **Constants**: SCREAMING_SNAKE_CASE
- **Types/Interfaces**: PascalCase

### Import Order

Run `yarn lint-fix` to automatically sort imports:

1. External libraries (React, Next.js, etc.)
2. Internal packages (`web/`)
3. Relative imports (`../`, `./`)
4. Type imports

### Error Handling

- Use try-catch for async operations
- Create custom error types for API errors
- Implement error boundaries for React components
- Log errors with appropriate context

Example:

```typescript
import {APIError} from './errors'

try {
  const result = await api('endpoint', params)
  return result
} catch (err) {
  if (err instanceof APIError) {
    logger.error('API error', {status: err.status, message: err.message})
  } else {
    logger.error('Unexpected error', err)
  }
  throw err
}
```

### Accessibility

- Use semantic HTML elements
- Include ARIA labels where appropriate
- Ensure keyboard navigation works
- Use the `SkipLink` component for main content
- Announce dynamic content changes with `useLiveRegion`

```tsx
import {useLiveRegion} from 'web/components/live-region'

function MyComponent() {
  const {announce} = useLiveRegion()

  const handleAction = () => {
    // Action completed
    announce('Action successful', 'polite')
  }
}
```

## Making Changes

### Creating a Branch

Never work directly on `main`. Create a new branch:

```bash
git checkout -b type/short-description
```

Branch types:

- `feat/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation
- `refactor/` - Code refactoring
- `test/` - Adding/updating tests
- `chore/` - Maintenance tasks

### Making Commits

Keep commits atomic and descriptive:

```bash
git add .
git commit -m "feat(profiles): add compatibility score display

- Added compatibility score calculation
- Display score on profile cards
- Added tests for scoring algorithm"
```

See [Commit Message Guidelines](#commit-message-guidelines) for details.

### Keeping Your Fork Updated

```bash
# Fetch latest from upstream
git fetch upstream

# Update main branch
git checkout main
git merge upstream/main

# Rebase your feature branch
git checkout feat/your-feature
git rebase main
```

## Pull Request Guidelines

### Before Submitting

1. **Run linter**: `yarn lint`
2. **Run type check**: `yarn typecheck`
3. **Update documentation** if needed
4. **Rebase on main** if necessary

### Pull Request Format

**Title**: Clear, descriptive title

**Description**:

```markdown
## Summary

Brief description of changes

## Changes

- Added compatibility score to profile cards
- Updated search algorithm for better results


## Screenshots (if UI changes)
```

### PR Checklist

- [ ] Code follows style guidelines
- [ ] Documentation updated
- [ ] No console.log statements (except debugging)
- [ ] No debug code left behind

### Review Process

1. Maintainers review within 48 hours
2. Address feedback promptly
3. Do not open new PRs for changes - update existing one
4. Squash commits before merging

## Commit Message Guidelines

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Tests
- `chore`: Maintenance

### Examples

```text
feat(profiles): add compatibility scoring algorithm
fix(api): handle rate limiting gracefully
docs(readme): update installation instructions
refactor(auth): simplify token refresh logic
test(profiles): add unit tests for scoring
```

## Documentation

### Updating Documentation

- Update relevant README files
- Add JSDoc comments to complex functions
- Update the `/docs` folder for architectural changes

## Questions and Support

- **GitHub Issues**: For bug reports and feature requests
