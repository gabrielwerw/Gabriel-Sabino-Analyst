
const themes=[{color:'#ff2e63'},{color:'#00adb5'},{color:'#24e07b'},{color:'#ffc400'}];
let cur=0;
document.getElementById('themeBtn').onclick=()=>{
  cur=(cur+1)%themes.length;
  document.documentElement.style.setProperty('--accent',themes[cur].color);
};

const text='Analista de Dados';
const el=document.getElementById('typing');
let i=0,fwd=true;
function loop(){
  el.textContent=text.slice(0,i);
  if(fwd){
    i++;
    if(i>text.length){fwd=false;setTimeout(loop,1200);return;}
  }else{
    i--;
    if(i<0){fwd=true;}
  }
  setTimeout(loop,fwd?140:60);
}
loop();

document.getElementById("darkModeBtn").onclick = () => {
  document.body.classList.toggle("light-mode");
};

// CORREÇÃO: não interceptar links externos
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    const isExternal = this.getAttribute('target') === '_blank' || href.startsWith('http');
    if (isExternal) return;

    e.preventDefault();
    const targetId = href.replace('#', '');
    const section = document.getElementById(targetId);
    if (section) {
      document.querySelectorAll('.page-section').forEach(s => s.style.display = 'none');
      section.style.display = 'flex';
      window.scrollTo(0, 0);
    }
  });
});


// Atualização: fecha o menu ao clicar em um link interno
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    const isExternal = this.getAttribute('target') === '_blank' || href.startsWith('http');
    if (isExternal) return;

    e.preventDefault();
    const targetId = href.replace('#', '');
    showSectionById(targetId);

    // Fecha o menu lateral
    document.querySelector('.sidebar').classList.remove('open');
  });
});
