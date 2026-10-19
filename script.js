const treeView=document.getElementById('treeView');
const letterView=document.getElementById('letterView');
const startDate=new Date('2026-07-12T18:01:00+08:00');
const message="Hello, mi babu ><\n\nI just wanted you to know how special you are to me. You make the simplest days feel warmer to me and I'm grateful that I get to share this little life with you.\n\nI hope I get to be your last love, not just by saying it but by choosing you, listening to you and growing with you. I want to keep showing you how much you mean to me, even in the smallest ways. I love you, mi babu ❤️";
function buildSky(){
 const stars=document.getElementById('stars');
 for(let i=0;i<95;i++){
  const s=document.createElement('span');s.className='star';
  const random=(a,b)=>a+Math.random()*(b-a);
  Object.entries({'--x':random(1,99)+'%','--y':random(1,70)+'%','--size':random(1,3.5)+'px','--duration':random(16,24)+'s','--delay':-random(0,24)+'s'}).forEach(([k,v])=>s.style.setProperty(k,v));
  stars.append(s);
 }
}
function updateTime(){let diff=Math.max(0,Date.now()-startDate.getTime());const days=Math.floor(diff/86400000);diff%=86400000;const hours=Math.floor(diff/3600000);diff%=3600000;const minutes=Math.floor(diff/60000);const seconds=Math.floor(diff%60000/1000);document.getElementById('time').innerHTML=`${days} <small>days</small> ${String(hours).padStart(2,'0')} <small>hours</small> ${String(minutes).padStart(2,'0')} <small>min</small> ${String(seconds).padStart(2,'0')} <small>sec</small>`}
let typingTimer;
function typeText(element,text,speed){clearTimeout(typingTimer);element.textContent='';element.classList.add('typing');let index=0;function step(){if(index<text.length){element.textContent+=text[index++];typingTimer=setTimeout(step,speed)}else{element.classList.remove('typing')}}step()}
function showTree(){document.body.classList.remove('showing-letter');treeView.classList.remove('hidden');letterView.classList.add('hidden');typeText(document.getElementById('treeTyping'),'our time together...',140);updateTime()}
function showLetter(){document.body.classList.add('showing-letter');treeView.classList.add('hidden');letterView.classList.remove('hidden');typeText(document.getElementById('typedLetter'),message,95)}
document.getElementById('readLetter').addEventListener('click',showLetter);
document.getElementById('openTree').addEventListener('click',showTree);
document.getElementById('sunToggle').addEventListener('click',()=>{document.body.dataset.theme='dark'});
document.getElementById('moonToggle').addEventListener('click',()=>{document.body.dataset.theme='light'});
buildSky();showTree();setInterval(updateTime,1000);

const music=document.getElementById('backgroundMusic');
const musicToggle=document.getElementById('musicToggle');
function syncMusicButton(){const playing=!music.paused;musicToggle.textContent=playing?'♫':'♫';musicToggle.classList.toggle('is-playing',playing);musicToggle.title=playing?'pause coming up roses':'play coming up roses';musicToggle.setAttribute('aria-pressed',String(playing));musicToggle.setAttribute('aria-label',playing?'pause music':'play music')}
musicToggle.addEventListener('click',async()=>{if(music.paused){try{await music.play()}catch(e){musicToggle.title='add coming-up-roses.mp3 to the folder';return}}else music.pause();syncMusicButton()});
music.addEventListener('play',syncMusicButton);music.addEventListener('pause',syncMusicButton);music.addEventListener('ended',()=>{music.currentTime=0;music.play().catch(()=>{})});
