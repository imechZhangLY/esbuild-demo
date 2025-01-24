# Compare esbuild `dataurl` loader and webpack `url-loader`

## esbuild `dataurl` loader

esbuild dataurl loader will convert svg file to unicode string. The string is not escaped. if we use it directly as the parameter of the url() function in css, it will cause css syntax error.

## webpack url-loader

webpack url-loader will convert svg file to base64 string. It can be used as the parameter of the url() function in css.

## How to run the project

1. Run `npm install`.

2. Run `npm run esbuild` and then you can test the bundle of esbuild.

3. Run `npm run webpack` and then you can test the bundle of webpack.