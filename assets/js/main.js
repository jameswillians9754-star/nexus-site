function catName(id){const c=CATEGORIES.find(c=>c.id===id);return c?c.name:"Outros";}
function coverHTML(book,extra){return `<div class="book-cover theme-${book.cover.theme} ${extra||""}" role="img" aria-label="Capa do ebook ${book.title}"><span class="brand">Nexus Ebooks</span><span class="title">${book.title}</span><span class="rule"></span></div>`;}
function cardHTML(b){return `<article class="card reveal"><a href="ebook.html?id=${b.slug}" aria-label="Ver detalhes de ${b.title}">${coverHTML(b)}</a><div class="card-body"><span class="tag">${catName(b.category)}</span><h3>${b.title}</h3><p class="desc">${b.shortDescription}</p><a class="btn btn-primary btn-block" href="${b.affiliateUrl}" target="_blank" rel="noopener noreferrer sponsored">Ver ebook</a><a class="btn btn-outline btn-block" href="ebook.html?id=${b.slug}">Ver detalhes</a></div></article>`;}
function initHeader(){
const page=document.body.dataset.page||"";
const D=document.body.dataset.brand==="designer";
const links=D?[["designer.html","Design","design"],["index.html","Ebooks","home"],["contacto.html","Contacto","contact"]]:[["index.html","Início","home"],["catalogo.html","Ebooks","catalog"],["designer.html","Design","design"],["contacto.html","Contacto","contact"]];
const LOGO=D?'<a class="logo" href="designer.html"><img src="assets/logo-symbol.png" alt="" width="30" height="30" style="display:inline-block;vertical-align:middle;margin-right:8px">NEXUS<span>DESIGNER</span></a>':'<a class="logo" href="index.html">NEXUS<span>EBOOKS</span></a>';
const desk=links.map(l=>`<a href="${l[0]}"${page===l[2]?' aria-current="page"':""}>${l[1]}</a>`).join("");
const mob=links.map(l=>`<a href="${l[0]}"${page===l[2]?' aria-current="page"':""}>${l[1]}</a>`).join("");
document.getElementById("site-header").innerHTML=`<div class="container header-inner">${LOGO}<nav class="nav-desktop" aria-label="Navegação principal">${desk}</nav><div class="header-actions"><a class="icon-btn" href="catalogo.html" aria-label="Ver ebooks"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg></a><button class="icon-btn menu-btn" id="menuBtn" aria-expanded="false" aria-controls="mobileNav" aria-label="Abrir menu"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button></div></div><nav class="mobile-nav" id="mobileNav" aria-label="Navegação móvel">${mob}</nav>`;
const btn=document.getElementById("menuBtn"),nav=document.getElementById("mobileNav");
btn.addEventListener("click",()=>{const o=nav.classList.toggle("open");btn.setAttribute("aria-expanded",o);});}
function initFooter(){
const D=document.body.dataset.brand==="designer";
document.getElementById("site-footer").innerHTML=`<div class="container"><div class="footer-grid"><div class="footer-brand"><a class="logo" href="index.html" style="color:#fff">NEXUS<span>EBOOKS</span></a><p>${D?"Design gráfico e serviços digitais para pessoas e pequenos negócios.":"Montra digital de ebooks sobre desenvolvimento pessoal, negócios, finanças, tecnologia e mais."}</p></div><div class="footer-col"><h3>Navegação</h3><a href="index.html">Início</a><a href="catalogo.html">Ebooks</a><a href="contacto.html">Contacto</a></div><div class="footer-col"><h3>Apoio</h3><a href="faq.html">Perguntas frequentes</a><a href="sobre.html">Sobre</a><a href="catalogo.html">Explorar ebooks</a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} ${D?"NEXUS DESIGNER":"NEXUS EBOOKS"}</span><span>${D?"WhatsApp: +258 84 916 4926":"As compras e entregas são processadas pelas plataformas de afiliados."}</span></div></div>`;}
function initReveal(){
const els=document.querySelectorAll(".reveal");
if(!("IntersectionObserver" in window)){els.forEach(e=>e.classList.add("visible"));return;}
const io=new IntersectionObserver(entries=>{entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add("visible");io.unobserve(en.target);}});},{threshold:.08});
els.forEach(e=>io.observe(e));}
document.addEventListener("DOMContentLoaded",()=>{initHeader();initFooter();initReveal();});

(function(){const f=document.getElementById("site-footer");if(!f||document.body.dataset.noPromo)return;
f.insertAdjacentHTML("beforebegin",'<section class="promo-wrap"><div class="container"><div class="promo"><div><h2>Queres ganhar divulgando?</h2><p>Estamos a abrir 10 vagas para divulgadores. Vê como funciona e regista o teu interesse.</p></div><a class="btn btn-primary" href="divulgar.html">Ver vagas</a></div></div></section>');})();
