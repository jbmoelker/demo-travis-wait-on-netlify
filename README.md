# Demo Travis wait on Netlify

Experiment to run [Lighthousebot](https://github.com/GoogleChromeLabs/lighthousebot) after [Netlify deploys](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/) by [waiting for the deploy in Travis CI](.travis.yml).

While this experiment works, a cleaner solution is [triggering Lighthouse CI from a Netlify function on successful deploy](https://github.com/jbmoelker/demo-netlify-lighthouse-function).