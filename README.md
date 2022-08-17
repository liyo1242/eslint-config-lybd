# This is a still experimental Eslint and Prettier setup
This is based on my work experience, there are still many good rules waiting for me to discover

I want to be able to use this pkg to manage most of my personal mini-projects 🐵 🐵 🐵

## Installing 🚀
1. It is recommended that you install eslint in your local project beforehand

    ```bash
    npm install eslint --save-dev
    ```

2. And then install config setting pkg, after success you will see that in ```package.json``` devDependencies

    ```bash
    npx install-peerdeps --dev eslint-config-lybd
    ```

3. Create a ```.eslintrc``` file and add the following content

    ```json
    {
      "extends": [ "lybd" ]
    }
    ```

    For React projects, use ```lybd/react``` instead of just ```lybd```.

    ```json
    {
      "extends": [ "lybd/react" ]
    }
    ```

    For Next.js projects, use ```lybd/next``` instead of just ```lybd```.

    ```json
    {
      "extends": [ "lybd/next" ]
    }
    ```

## Some points to note 🌛
1. You will need to delete all existing ```.prettierrc``` files, otherwise there may be a conflict

## File structure 🌝
1. ```.eslintrc.js``` is contain rule about ```javaScript``` and ```typeScript```
2. ```vue.js``` is add ```vue 3``` rule based on ```.eslintrc.js``` (Still in experimental phase)
3. ```react.js``` is add ```react``` rule based on ```.eslintrc.js```
4. ```next.js``` is add ```next.js``` rule based on ```react.js```
