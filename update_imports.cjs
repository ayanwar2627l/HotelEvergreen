const fs = require('fs');
const path = require('path');

function replaceExtensionsInFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const updated = content
        .replace(/\.tsx(["'\`])/g, '.jsx$1')
        .replace(/\.ts(["'\`])/g, '.js$1');
    if (content !== updated) {
        fs.writeFileSync(filePath, updated, 'utf8');
        console.log(`Updated imports in ${filePath}`);
    }
}

function traverseDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverseDir(fullPath);
        } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
            replaceExtensionsInFile(fullPath);
        }
    }
}

traverseDir(path.join(__dirname, 'src'));
