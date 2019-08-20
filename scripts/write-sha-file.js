#!/usr/bin/env node
const fs = require('fs')
const sha = process.env.COMMIT_REF

fs.writeFile(`dist/client/${sha}.txt`, sha, () => {
    console.log(`created dist/client/${sha}.txt`)
})