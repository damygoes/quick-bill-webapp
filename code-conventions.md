# Code Conventions

[TOC]

Code conventions are a set of guidelines and best practices designed to enhance the readability, understandability, and maintainability of our codebase. By adhering to these conventions, we ensure that all team members, especially new members, can onboard quickly and contribute effectively.

## Naming Conventions

Establishing consistent naming conventions for variables, functions, classes, and other identifiers improves code readability and maintainability. It helps convey the purpose of each element at a glance.

- **PascalCase**: Use this convention for components, classes, type aliases, and interfaces. This makes it clear that these identifiers represent types or components within the system.

  ```tsx
  class ExampleClass {
    // Class implementation
  }

  function ExampleComponent() {
    // Function implementation
  }

  type ExampleType = {
    // Type definition
  };

  interface ExampleInterface {
    // Interface definition
  }
  ```

- **camelCase**: Use this convention for JavaScript data types, such as variables, objects, functions, and arrays. This indicates that these identifiers are standard variables and functions.
  ```tsx
  const someVariable = 'foo'; // A variable holding a string
  function doSomething() {
    // Function implementation
  }
  ```

## File Structure

Structuring your project files and directories in a consistent and logical manner helps developers navigate and maintain the codebase more efficiently. Below is a suggested structure:

```
├── ...
├── src                           # Main source code directory
│   ├── assets                    # Static assets (images, fonts, etc.)
│   ├── features                  # Feature-specific code organized by domain
│   │   ├── feature-example       # Example feature directory
│   │   │   ├── components        # Components specific to this feature
│   │   │   ├── utils             # Utility functions for this feature
│   │   │   ├── hooks             # Hooks specific to this feature
│   │   │   ├── views             # Views or pages related to this feature
│   │   │   ├── constants.ts      # Feature-specific constants
│   │   │   ├── requests.ts       # API calls for this feature
│   │   │   ├── store.ts          # State management store (e.g., Zustand)
│   │   │   └── types.ts          # Types used throughout the feature
│   ├── locales                   # Internationalization (i18n) translation files
│   ├── pages                     # Folder for all navigable pages in the app
│   ├── services                  # Third-party libraries (e.g., Mapbox)
│   ├── shared                    # Shared items (used throughout the app)
│   │   ├── components            # Reusable components (e.g., List renderers, User cards, Customer item etc)
|   |   |   └── ui                # Base unit components from shadcn (e.g., Buttons, Inputs) that will be used for the design system and storybook
│   │   ├── constants             # Shared constants
│   │   ├── context               # Shared contexts
│   │   ├── hooks                 # Global hooks for shared functionality
│   │   ├── lib                   # Global files shared across the project
│   │   └── utils.ts              # Utility functions shared across the project
│   ├── tests                     # Testing files
│   │   ├── unit                  # Unit tests
│   │   ├── component             # Component tests
│   │   └── e2e                   # End-to-end tests
│   ├── app.tsx                   # Application entry point
└── ...
```

### Folder Naming Guidelines

- **Short kebab-case**: Use kebab-case (lowercase letters with hyphens) for folder names. This improves readability and consistency.
- **PascalCase for components**: Use PascalCase for filenames of components to distinguish them as significant parts of the code.

## Features

Organizing code into small, consistent features aligned with our domain scopes makes it easy to locate and understand specific parts of the system. Each feature should adhere to the following principles:

- **Independence**: Each feature is designed to be independent of others, allowing developers to work on one feature without affecting others. This reduces the risk of introducing bugs and makes targeted refactoring easier.

- **Encapsulation**: All related components, utilities, and types for a feature should reside within its directory, promoting encapsulation and reducing the chances of name collisions.

- **Clarity**: By maintaining a clear structure for features, we enhance the overall clarity of the codebase, making it easier for developers to navigate and understand the system's architecture.

By following these conventions, we create a more cohesive and maintainable codebase that fosters collaboration and efficiency within our development team.
