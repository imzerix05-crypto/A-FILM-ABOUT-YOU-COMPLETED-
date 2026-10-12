const photos=['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg','09.png','10.jpg','11.png','12.png'];
const reasons=[
'When u irritate me🫩',
'Jab aap mujhse bhi zyada nakhre dikhate ho☺️',
'When u use tooti footi English😭',
'When u get jealous, ahhh ek no. Ka jalkukda fr😏',
'Ur dumb asf🫪',
'when u sing💘🌷',
'Ur gud at everything, while I\'m js lazy asf😮‍💨',
'Ur only clingy to me😚',
'When u use ur baby voice but act like ur tuff or smtg infront of others😭✋🏻',
'Kya maine kabhi bataya ki u look the cutest while yapping?🫠✋🏻',
'When u send me random vn\'s, without me asking for them🙂‍↔️🫶🏻',
'When u share ur probs wid me🫠💗',
'When your all bout hazel ye hazel vo hazel esa and bss hazel hazel🫪🫶🏻',
'Or kya hi bolu?, I adore everything bhyi, there\'s ntg I can\'t adore, ur js adorable the way u are🫪🫶🏻💗'
];
const gallery=document.getElementById('gallery'); photos.forEach((file,i)=>{const b=document.createElement('button');b.className='photo';b.setAttribute('aria-label',`Open memory ${i+1}`);const img=document.createElement('img');img.src=`assets/photos/${file}`;img.alt=`Memory ${i+1}`;img.loading='lazy';img.onerror=()=>{b.style.display='none'};b.appendChild(img);b.addEventListener('click',()=>{document.getElementById('lightboxImg').src=img.src;document.getElementById('lightbox').classList.add('open')});gallery.appendChild(b)});
const rl=document.getElementById('reasonsList');reasons.forEach((r,i)=>{const card=document.createElement('div');card.className='reason';const n=document.createElement('span');n.className='num';n.textContent=String(i+1).padStart(2,'0');const p=document.createElement('p');p.textContent=r;card.append(n,p);rl.appendChild(card)});
const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');reveal.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.photo,.reason').forEach(el=>reveal.observe(el));
const intro=document.getElementById('intro'),site=document.getElementById('site');document.getElementById('begin').addEventListener('click',()=>{intro.classList.add('hidden');site.classList.add('ready');setTimeout(()=>intro.remove(),900);document.getElementById('song').scrollIntoView({behavior:'smooth',block:'start'})});
const audio=document.getElementById('songAudio'),toggle=document.getElementById('musicToggle'),status=document.getElementById('musicStatus'),float=document.getElementById('floatingMusic');function paintMusic(){const playing=!audio.paused;toggle.textContent=playing?'Ⅱ':'▶';toggle.setAttribute('aria-label',playing?'Pause song':'Play song');float.classList.toggle('visible',playing);status.textContent=playing?'Now playing — enjoy your little soundtrack 🎶':'Tap play to start the music 🎶'}async function toggleMusic(){if(audio.paused){try{await audio.play();}catch(e){status.textContent='Could not play the song. Check that the audio file is included in the website folder.'}}else audio.pause();paintMusic()}toggle.addEventListener('click',toggleMusic);float.addEventListener('click',()=>document.getElementById('song').scrollIntoView({behavior:'smooth'}));audio.addEventListener('play',paintMusic);audio.addEventListener('pause',paintMusic);audio.addEventListener('ended',paintMusic);
const lb=document.getElementById('lightbox');document.getElementById('closeLightbox').addEventListener('click',()=>lb.classList.remove('open'));lb.addEventListener('click',e=>{if(e.target===lb)lb.classList.remove('open')});document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('open')});document.getElementById('backTop').addEventListener('click',()=>{window.scrollTo({top:0,behavior:'smooth'});intro.classList.remove('hidden');site.classList.remove('ready');document.getElementById('begin').focus()});
