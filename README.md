## Test task for 2gis job

The job: https://novosibirsk.hh.ru/vacancy/19466627

## The problem

When you add markers to map they can run into each other:

![collapsed markers](tools/readme_assets/1.png)

You need to hide extra markers then they could be placed without collapse:

![hidden markers](tools/readme_assets/2.png)

But if you zoom in and it will be enough place for extra markers they should be shown:

![extra markers](tools/readme_assets/3.png)

## How to build

To build it you need Node.js 6+

```
npm install
npm run build
```

Then open `public/index.html`
