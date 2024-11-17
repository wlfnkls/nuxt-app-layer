# Nuxt App + Nuxt Layer
This project is a base setup containing a npm monorepo including a nuxt app workspace consuming features from a nuxt layer workspace.

## Installation
1. Clone the repository:
```bash
 git clone https://github.com/wlfnkls/nuxt-app-layer.git
```

2. Install dependencies:
```bash
 npm install
 ```

 3. Prepare nuxt layer workspace (mainly on initial project setup):
 ```bash
 npm run dev:prepare --workspace nuxt-layer
 ```

 ## Usage
To run the project, use the following command:
 ```bash
 npm run dev --workspace nuxt-app
 ```

