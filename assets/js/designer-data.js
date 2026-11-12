const WA_NUMBER="258849164926";
const EMAIL="nexusplaneft891@gmail.com";
function waLink(msg){return "https://wa.me/"+WA_NUMBER+"?text="+encodeURIComponent(msg);}
function mailLink(subj,body){return "mailto:"+EMAIL+"?subject="+encodeURIComponent(subj)+"&body="+encodeURIComponent(body||"");}
// Amostras: coloca as imagens em assets/amostras/ com estes nomes (ex.: cv-profissional-1.jpg). Se não existirem, aparece "Amostra em breve".
const SAMPLE_COUNT={"cartazes":4,"redes-sociais":2};
function sampleN(slug){return SAMPLE_COUNT[slug]||3;}
const SERVICES=[
{slug:"cv-profissional",name:"CV Profissional",price:"50 MT",short:"Currículo limpo e organizado, pronto a enviar para candidaturas.",
 long:"Um CV bem apresentado faz diferença na primeira impressão. Organizamos a tua experiência, formação e competências num layout claro e profissional.",
 includes:["Layout profissional e legível","Organização das tuas informações","Ficheiro em PDF pronto a enviar"],need:["Nome e contactos","Experiência e formação","Competências e idiomas","Foto (opcional)"]},
{slug:"cv-premium",name:"CV Premium",price:"≈ 100 MT",short:"Design mais cuidado para quem quer destacar-se dos outros candidatos.",
 long:"Para quem quer ir além do básico: design mais elaborado, hierarquia visual forte e destaque das tuas melhores qualidades.",
 includes:["Design exclusivo e mais elaborado","Destaque das tuas conquistas","Ficheiro em PDF"],need:["Nome e contactos","Experiência, formação e conquistas","Competências e idiomas","Foto (opcional)"]},
{slug:"cartao-digital",name:"Cartão Digital",price:"189 MT",short:"O teu cartão de visita em formato digital, fácil de partilhar no WhatsApp.",
 long:"Um cartão de visita moderno que envias com um toque: nome, serviços e contactos num só lugar, com a identidade do teu negócio.",
 includes:["Design com a identidade do teu negócio","Contactos e serviços organizados","Pronto para partilhar no WhatsApp e redes sociais"],need:["Nome do negócio ou pessoa","Contactos (WhatsApp, email, redes)","Logótipo, se tiveres","Serviços ou produtos"]},
{slug:"menu-digital",name:"Menu Digital",price:"249 MT",short:"Menu apresentável para restaurantes, pastelarias e lanchonetes.",
 long:"Mostra os teus produtos e preços de forma atraente. O cliente vê o menu no telemóvel e faz o pedido com facilidade.",
 includes:["Produtos e preços bem organizados","Design alinhado ao teu negócio","Fácil de partilhar com clientes"],need:["Lista de produtos e preços","Fotos dos produtos (se tiveres)","Nome e contactos do negócio","Logótipo, se tiveres"]},
{slug:"logotipos",name:"Logótipos",price:"Sob consulta",short:"Logótipo para o teu negócio ou projeto, incluindo versões animadas.",
 long:"Uma identidade simples e memorável para o teu negócio. Também fazemos logótipos animados para vídeos e redes sociais.",
 includes:["Logótipo conforme a tua ideia","Versão para fundo claro e escuro","Opção de logótipo animado"],need:["Nome do negócio","Área de atividade","Cores ou estilo preferidos","Exemplos que gostes"]},
{slug:"cartazes",name:"Cartazes Publicitários",price:"Sob consulta",short:"Cartazes para divulgar produtos, promoções e eventos.",
 long:"Cartazes chamativos para impressão ou redes sociais, com a informação certa no lugar certo.",
 includes:["Design chamativo e legível","Formato para impressão ou digital","Textos e fotos organizados"],need:["Texto e informações do cartaz","Fotos ou logótipo","Contactos","Formato desejado (A3, A4, redes)"]},
{slug:"convites",name:"Convites",price:"Sob consulta",short:"Convites digitais para aniversários, casamentos e eventos.",
 long:"Convites personalizados para partilhar no WhatsApp, com o estilo certo para a tua ocasião.",
 includes:["Design à medida da ocasião","Informações do evento bem apresentadas","Pronto a partilhar"],need:["Tipo de evento","Data, hora e local","Estilo e cores preferidos"]},
{slug:"identidade-visual",name:"Identidade Visual",price:"Sob consulta",short:"Cores, estilo e materiais que dão personalidade à tua marca.",
 long:"Um conjunto coerente de logótipo, cores e materiais para o teu negócio parecer profissional em todo o lado.",
 includes:["Logótipo e paleta de cores","Estilo visual coerente","Materiais base da marca"],need:["Nome e área do negócio","Público que queres alcançar","Referências que gostes"]},
{slug:"capas-ebook",name:"Capas de Ebook",price:"Sob consulta",short:"Capas profissionais para ebooks que vendem mais.",
 long:"Uma boa capa é o primeiro motivo para alguém abrir o teu ebook. Criamos capas limpas e legíveis, prontas para plataformas de venda e redes sociais.",
 includes:["Capa com título e autor bem destacados","Estilo adaptado ao tema do ebook","Imagem pronta para publicar"],need:["Título e subtítulo","Nome do autor","Tema e público do ebook","Cores ou estilo preferidos"]},
{slug:"redes-sociais",name:"Conteúdos para Redes Sociais",price:"Sob consulta",short:"Publicações, capas e artes para Facebook, Instagram e WhatsApp.",
 long:"Artes consistentes para o teu negócio aparecer com profissionalismo nas redes sociais.",
 includes:["Artes para publicações","Capas e destaques","Visual alinhado com a tua marca"],need:["Nome e logótipo","Mensagem ou promoção","Fotos dos produtos"]}
];
function svcCard(s){return `<article class="svc-card reveal"><a href="servico.html?id=${s.slug}" class="svc-thumb" aria-label="${s.name}"><img src="assets/amostras/${s.slug}-1.jpg" alt="Amostra de ${s.name}" onerror="this.remove()"><span>${s.name}</span></a><div class="svc-body"><h3>${s.name}</h3><p>${s.short}</p><span class="price">${s.price}</span><a class="btn btn-primary btn-block" href="servico.html?id=${s.slug}">Ver detalhes</a></div></article>`;}
