import fs from 'fs';
const html = ['index.html', 'Nosotros.html', 'servicios.html', 'products.html'].map(f => fs.existsSync(f) ? fs.readFileSync(f,'utf8') : '').join(' ');
const js = ['js/script.js','js/products.js'].map(f => fs.existsSync(f) ? fs.readFileSync(f,'utf8') : '').join(' ');
const used = new Set();
(html.match(/class="([^"]+)"/g)||[]).forEach(m => { m.slice(7,-1).split(/\s+/).forEach(p => { if(p.trim()) used.add(p.trim()); }) });
(html.match(/id="([^"]+)"/g)||[]).forEach(m => { used.add(m.slice(4,-1).trim()); });
(js.match(/classList\.(add|remove|toggle)\(['"]([^'"]+)['"]\)/g)||[]).forEach(m => { const x=m.match(/classList\.(add|remove|toggle)\(['"]([^'"]+)['"]\)/); if(x) used.add(x[2]); });
const cssFiles = ['css/products.css','css/servicios.css','css/Nosotros.css'];
for (const f of cssFiles) {
  const css = fs.readFileSync(f,'utf8');
  const classes = css.match(/\.([a-zA-Z][\w-]+)/g)||[];
  const uniq = [...new Set(classes.map(x=>x.slice(1)))];
  const dead = uniq.filter(c=>!used.has(c));
  console.log(f, uniq.length, dead.length, dead.slice(0,20));
}
