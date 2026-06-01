/* exploration.jsx — 3 directions visuelles × 3 écrans (Accueil · Notifs · Séance) */

/* ───────── helpers ───────── */
function SB({color}){
  return (
    <div className="sb" style={{color}}>
      <span>9:41</span>
      <div className="dots">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="1"/><rect x="4.5" y="5" width="3" height="6" rx="1"/><rect x="9" y="2.5" width="3" height="8.5" rx="1"/><rect x="13.5" y="0" width="3" height="11" rx="1"/></svg>
        <svg width="22" height="11" viewBox="0 0 22 11" fill="none"><rect x="1" y="1" width="18" height="9" rx="2.5" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/><rect x="2.5" y="2.5" width="13" height="6" rx="1" fill="currentColor"/><rect x="20" y="3.5" width="1.6" height="4" rx="0.8" fill="currentColor" opacity="0.5"/></svg>
      </div>
    </div>
  );
}

/* feed data (commun, rendu différemment par direction) */
const FEED=[
  {ic:'💪',ac:'seance',  t:"C'est jour de séance",  b:"Full Body B t'attend · 40 min.",     time:'Il y a 12 min', unread:true},
  {ic:'🧘',ac:'mobilite',t:'Mobilité du jour',      b:"5 min d'étirements pour tes articulations.", time:'Ce matin', unread:true},
  {ic:'📋',ac:'bilan',   t:'Bilan de la semaine 6', b:'5/9 objectifs cochés. Fais le point.', time:'Hier · 19:00', unread:false},
  {ic:'🎯',ac:'test',    t:'Test la semaine prochaine', b:'Test mesurable en semaine 8. Prépare-toi.', time:'Hier', unread:false},
];

/* ════════════════════════════════════════════════════════════════
   DIRECTION A — BRUT
════════════════════════════════════════════════════════════════ */
function BrutHome({theme=''}){
  return (
    <div className={"scr b "+theme}>
      <SB color="var(--txt)"/>
      <div className="body">
        <div className="pad row" style={{justifyContent:'space-between',alignItems:'flex-start',paddingTop:6,paddingBottom:16}}>
          <div className="col" style={{gap:6}}>
            <span className="ey">SEMAINE 06 / 12</span>
            <span style={{fontSize:30,fontWeight:900,lineHeight:.92,letterSpacing:'-1px',textTransform:'uppercase'}}>Bonne<br/>séance</span>
          </div>
          <div className="col" style={{gap:8,alignItems:'flex-end'}}>
            <div className="b-bell"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 9a6 6 0 0 1 12 0c0 4.5 1.8 5.8 2 6H4c.2-.2 2-1.5 2-6Z" stroke="currentColor" strokeWidth="1.8"/><path d="M9.5 18.5a2.5 2.5 0 0 0 5 0" stroke="currentColor" strokeWidth="1.8"/></svg></div>
            <div className="b-streak">▲ 4</div>
          </div>
        </div>

        <div className="b-today">
          <div className="mono" style={{fontSize:9.5,fontWeight:700,marginBottom:10}}>MER · SÉANCE 02 / 03</div>
          <div className="t">Full<br/>Body B</div>
          <div className="chips" style={{marginTop:14}}>
            <span className="b-chip">40 MIN</span><span className="b-chip">RPE 6</span><span className="b-chip">6 EXOS</span>
          </div>
        </div>
        <button className="b-cta">COMMENCER ▸</button>

        <div className="pad" style={{marginTop:18}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:8}}>
            <div className="b-cell"><div className="n" style={{color:'var(--acc)'}}>04</div><div className="ey" style={{marginTop:6}}>SÉRIES</div></div>
            <div className="b-cell"><div className="n">2/3</div><div className="ey" style={{marginTop:6}}>SÉANCES</div></div>
            <div className="b-cell"><div className="n">14<span style={{fontSize:15}}>H</span></div><div className="ey" style={{marginTop:6}}>CUMUL</div></div>
          </div>
        </div>

        <div className="pad" style={{marginTop:14}}>
          <div className="row" style={{justifyContent:'space-between',marginBottom:8}}>
            <span className="ey">PROGRESSION · PHASE 2</span><span className="mono" style={{fontSize:10,color:'var(--acc)'}}>50%</span>
          </div>
          <div className="b-bar"><i style={{width:'50%'}}></i></div>
          <div className="mono" style={{fontSize:9,color:'var(--dim)',marginTop:8}}>PROGRESSION &amp; VOLUME</div>
        </div>
      </div>
      <div className="b-nav"><div className="on">ACCUEIL</div><div>PROG</div><div>SUIVI</div><div>PROFIL</div></div>
    </div>
  );
}
function BrutNotif({theme=''}){
  return (
    <div className={"scr b "+theme}>
      <SB color="var(--txt)"/>
      <div className="body">
        <div className="pad" style={{paddingTop:6}}>
          <div style={{fontSize:26,fontWeight:900,letterSpacing:'-1px',textTransform:'uppercase'}}>Notifs</div>
          <div className="row" style={{gap:0,marginTop:14,border:'1.5px solid var(--line)'}}>
            <div className="mono" style={{flex:1,textAlign:'center',padding:'10px 0',fontSize:10,background:'var(--acc)',color:'var(--onAcc)',fontWeight:700}}>BOÎTE</div>
            <div className="mono" style={{flex:1,textAlign:'center',padding:'10px 0',fontSize:10,color:'var(--dim)',fontWeight:700}}>RAPPELS</div>
          </div>
        </div>
        <div className="pad" style={{marginTop:12}}>
          <div style={{border:'1.5px solid var(--acc)',padding:14}}>
            <div className="mono" style={{fontSize:11,color:'var(--acc)',fontWeight:700}}>▸ ACTIVER LES NOTIFS</div>
            <div style={{fontSize:12,color:'var(--dim)',margin:'7px 0 11px',lineHeight:1.4}}>Reçois tes rappels sur ton appareil.</div>
            <button className="b-cta" style={{padding:'11px'}}>AUTORISER</button>
          </div>
        </div>
        <div className="pad" style={{marginTop:6}}>
          {FEED.map((n,i)=>(
            <div key={i} className="nf-item" style={{border:'1.5px solid var(--line)',borderTop:i?'none':'1.5px solid var(--line)',alignItems:'flex-start'}}>
              <div className="nf-ic" style={{background:n.unread?'var(--acc)':'var(--surf2)',color:n.unread?'var(--onAcc)':'var(--txt)',borderRadius:0}}>{n.ic}</div>
              <div className="grow">
                <div style={{fontWeight:800,fontSize:13.5}}>{n.t}</div>
                <div style={{fontSize:11.5,color:'var(--dim)',marginTop:2,lineHeight:1.35}}>{n.b}</div>
                <div className="mono" style={{fontSize:8.5,color:'var(--dim2)',marginTop:6}}>{n.time}</div>
              </div>
              {n.unread&&<div style={{width:8,height:8,background:'var(--acc)',flexShrink:0,marginTop:4}}></div>}
            </div>
          ))}
        </div>
      </div>
      <div className="b-nav"><div>ACCUEIL</div><div>PROG</div><div className="on">SUIVI</div><div>PROFIL</div></div>
    </div>
  );
}
function BrutSession({theme=''}){
  return (
    <div className={"scr b "+theme}>
      <SB color="var(--txt)"/>
      <div className="body">
        <div className="pad row" style={{paddingTop:6,gap:12}}>
          <div style={{border:'1.5px solid var(--line)',padding:'9px 11px',fontFamily:"'Space Mono',monospace",fontSize:12}}>←</div>
          <div className="grow"><div style={{fontWeight:900,fontSize:16,textTransform:'uppercase',letterSpacing:'-.5px'}}>Full Body B</div><div className="mono" style={{fontSize:8.5,color:'var(--dim)'}}>SEMAINE 6 · RPE 6</div></div>
        </div>
        <div style={{height:6,background:'var(--surf2)',margin:'12px 0 0'}}><div style={{height:'100%',width:'33%',background:'var(--acc)'}}></div></div>
        <div className="pad" style={{marginTop:16}}>
          <div className="ey" style={{marginBottom:8}}>ÉCHAUFFEMENT</div>
          <div className="mono" style={{fontSize:10,color:'var(--dim)',lineHeight:2}}>STEP JACKS 1MIN · ÉPAULES 10× · HANCHES 10×</div>
        </div>
        <div className="pad" style={{marginTop:14}}>
          <div className="ey" style={{marginBottom:8}}>EXERCICES</div>
          <div className="b-ex" style={{borderColor:'var(--acc)'}}>
            <div className="row" style={{gap:11}}>
              <div className="b-set on">01</div>
              <div className="grow"><div style={{fontWeight:800,fontSize:14}}>Pompes classiques</div><div className="mono" style={{fontSize:9,color:'var(--dim)',marginTop:3}}>4 SÉRIES × 12-15</div></div>
            </div>
            <div className="row" style={{gap:8,marginTop:13}}>
              {['1','2','3','4'].map((s,i)=><div key={i} className={'b-set'+(i<2?' on':'')}>{s}</div>)}
            </div>
            <div style={{background:'var(--surf)',borderLeft:'2px solid var(--acc)',padding:'9px 11px',marginTop:12,fontSize:11.5,color:'var(--txt2)',lineHeight:1.4}}>Descente 2 sec. Qualité &gt; quantité.</div>
          </div>
          <div className="b-ex" style={{marginTop:10}}>
            <div className="row" style={{gap:11}}>
              <div className="b-set">02</div>
              <div className="grow"><div style={{fontWeight:800,fontSize:14}}>No-bar back row</div><div className="mono" style={{fontSize:9,color:'var(--dim)',marginTop:3}}>4 SÉRIES × 12</div></div>
              <span style={{color:'var(--dim2)'}}>▸</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{display:'flex',gap:0,flexShrink:0}}>
        <button style={{flex:1,padding:16,background:'var(--surf)',color:'var(--txt)',border:'1.5px solid var(--line)',fontFamily:"'Space Mono',monospace",fontSize:11,letterSpacing:1,textTransform:'uppercase'}}>ANNULER</button>
        <button style={{flex:2,padding:16,background:'var(--acc)',color:'var(--onAcc)',border:'none',fontFamily:"'Space Mono',monospace",fontSize:11,letterSpacing:1,fontWeight:700,textTransform:'uppercase'}}>✓ TERMINER</button>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   DIRECTION B — EDITORIAL
════════════════════════════════════════════════════════════════ */
function EdHome(){
  return (
    <div className="scr e">
      <SB color="#2A241E"/>
      <div className="body" style={{overflowY:'hidden'}}>
        <div className="pad row" style={{justifyContent:'space-between',alignItems:'flex-start',paddingTop:8,paddingBottom:18}}>
          <div className="col" style={{gap:3}}>
            <span className="ey">mercredi 4 juin</span>
            <span className="serif" style={{fontSize:30,lineHeight:1.05}}>Bonjour,<br/>prêt&nbsp;?</span>
          </div>
          <div className="col" style={{gap:9,alignItems:'flex-end'}}>
            <div className="e-bell"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 9a6 6 0 0 1 12 0c0 4.5 1.8 5.8 2 6H4c.2-.2 2-1.5 2-6Z" stroke="#2A241E" strokeWidth="1.7"/><path d="M9.5 18.5a2.5 2.5 0 0 0 5 0" stroke="#2A241E" strokeWidth="1.7"/></svg></div>
            <div className="e-streak">✦ 4</div>
          </div>
        </div>

        <div className="pad">
          <div className="e-today">
            <div style={{fontFamily:"'Newsreader',serif",fontStyle:'italic',fontSize:14,color:'#E0A98C'}}>Séance du jour</div>
            <div className="t" style={{marginTop:6}}>Full Body B</div>
            <div style={{fontSize:12.5,opacity:.8,marginTop:5}}>Phase 2 · progression &amp; volume</div>
            <div className="chips" style={{marginTop:16}}>
              <span className="e-chip">⏱ 40 min</span><span className="e-chip">RPE 6</span><span className="e-chip">6 exercices</span>
            </div>
            <button className="e-cta" style={{marginTop:18}}>Commencer la séance</button>
          </div>
        </div>

        <div className="pad" style={{marginTop:14}}>
          <div className="e-card row" style={{padding:16,gap:15}}>
            <div className="e-ring">
              <div style={{position:'absolute',inset:-3,borderRadius:'50%',border:'3px solid transparent',borderTopColor:'#BD5B36',borderRightColor:'#BD5B36',transform:'rotate(45deg)'}}></div>
              <div className="col" style={{alignItems:'center'}}><span className="serif" style={{fontSize:20}}>6</span><span style={{fontSize:8,color:'#A89A86'}}>/ 12</span></div>
            </div>
            <div className="grow">
              <div className="serif" style={{fontSize:16}}>Phase 2 · Progression</div>
              <div style={{fontSize:12,color:'#8A7E6E',marginTop:3,lineHeight:1.4}}>+1 série sur les exercices principaux.</div>
            </div>
          </div>
        </div>

        <div className="pad row" style={{gap:8,marginTop:12}}>
          <span className="e-pill">🔥 4 semaines</span><span className="e-pill">2/3 cette semaine</span><span className="e-pill">14 h</span>
        </div>
      </div>
      <div className="e-nav">
        <div className="on"><i></i>Accueil</div><div><i></i>Programme</div><div><i></i>Suivi</div><div><i></i>Profil</div>
      </div>
    </div>
  );
}
function EdNotif(){
  return (
    <div className="scr e">
      <SB color="#2A241E"/>
      <div className="body">
        <div className="pad" style={{paddingTop:8}}>
          <div className="serif" style={{fontSize:28}}>Notifications</div>
          <div className="row" style={{gap:8,marginTop:14}}>
            <div style={{flex:1,textAlign:'center',padding:'10px 0',borderRadius:999,background:'#BD5B36',color:'#FBF8F2',fontSize:13,fontWeight:600}}>Boîte</div>
            <div style={{flex:1,textAlign:'center',padding:'10px 0',borderRadius:999,background:'#EDE4D4',color:'#7A6E5C',fontSize:13,fontWeight:600}}>Rappels</div>
          </div>
        </div>
        <div className="pad" style={{marginTop:14}}>
          <div className="e-card" style={{padding:15,background:'#F0E3D4',borderColor:'#E0CDB6'}}>
            <div className="serif" style={{fontSize:16,color:'#9C4724'}}>Recevoir tes rappels</div>
            <div style={{fontSize:12,color:'#8A7E6E',margin:'5px 0 12px',lineHeight:1.45}}>Active les notifications pour ne rien manquer.</div>
            <button className="e-cta" style={{padding:'11px'}}>Activer</button>
          </div>
        </div>
        <div className="pad" style={{marginTop:8,display:'flex',flexDirection:'column',gap:9}}>
          {FEED.map((n,i)=>(
            <div key={i} className="e-card nf-item" style={{alignItems:'flex-start',borderColor:n.unread?'#E0A98C':'#E6DDCD'}}>
              <div className="nf-ic" style={{borderRadius:'50%',background:n.unread?'#F4E2D4':'#EDE4D4'}}>{n.ic}</div>
              <div className="grow">
                <div className="serif" style={{fontSize:15}}>{n.t}</div>
                <div style={{fontSize:11.5,color:'#8A7E6E',marginTop:2,lineHeight:1.35}}>{n.b}</div>
                <div style={{fontSize:10.5,color:'#A89A86',marginTop:6,fontStyle:'italic',fontFamily:"'Newsreader',serif"}}>{n.time}</div>
              </div>
              {n.unread&&<div style={{width:7,height:7,borderRadius:'50%',background:'#BD5B36',flexShrink:0,marginTop:5}}></div>}
            </div>
          ))}
        </div>
      </div>
      <div className="e-nav"><div><i></i>Accueil</div><div><i></i>Programme</div><div className="on"><i></i>Suivi</div><div><i></i>Profil</div></div>
    </div>
  );
}
function EdSession(){
  return (
    <div className="scr e">
      <SB color="#2A241E"/>
      <div className="body">
        <div className="pad row" style={{paddingTop:8,gap:12}}>
          <div style={{width:38,height:38,borderRadius:'50%',background:'#FBF8F2',border:'1px solid #E6DDCD',display:'grid',placeItems:'center'}}>←</div>
          <div className="grow"><div className="serif" style={{fontSize:18}}>Full Body B</div><div style={{fontSize:11,color:'#8A7E6E'}}>Semaine 6 · RPE 6</div></div>
        </div>
        <div style={{height:5,background:'#E6DDCD',borderRadius:999,margin:'14px 18px 0'}}><div style={{height:'100%',width:'33%',background:'#BD5B36',borderRadius:999}}></div></div>
        <div className="pad" style={{marginTop:16}}>
          <div className="ey">Échauffement</div>
          <div style={{fontSize:13,color:'#8A7E6E',marginTop:6,lineHeight:1.7}}>Step jacks · rotations d'épaules · hanches · inchworm</div>
        </div>
        <div className="pad" style={{marginTop:14,display:'flex',flexDirection:'column',gap:10}}>
          <div className="e-ex" style={{borderColor:'#BD5B36',borderWidth:1.5}}>
            <div className="row" style={{gap:12}}>
              <div className="e-dot" style={{background:'#BD5B36',color:'#FBF8F2'}}>1</div>
              <div className="grow"><div className="serif" style={{fontSize:16}}>Pompes classiques</div><div style={{fontSize:11.5,color:'#8A7E6E',marginTop:2}}>4 séries × 12-15 · repos 60s</div></div>
            </div>
            <div className="row" style={{gap:8,marginTop:13}}>
              {[1,2,3,4].map((s,i)=><div key={i} style={{width:34,height:34,borderRadius:'50%',border:'1.5px solid '+(i<2?'#BD5B36':'#E6DDCD'),background:i<2?'#BD5B36':'transparent',color:i<2?'#FBF8F2':'#A89A86',display:'grid',placeItems:'center',fontSize:13,fontWeight:600}}>{s}</div>)}
            </div>
            <div style={{background:'#F4ECDF',borderRadius:12,padding:'10px 12px',marginTop:12,fontSize:12,color:'#7A6E5C',fontStyle:'italic',fontFamily:"'Newsreader',serif",lineHeight:1.4}}>Descente lente, 2 secondes. La qualité prime.</div>
          </div>
          <div className="e-ex">
            <div className="row" style={{gap:12}}>
              <div className="e-dot">2</div>
              <div className="grow"><div className="serif" style={{fontSize:16}}>No-bar back row</div><div style={{fontSize:11.5,color:'#8A7E6E',marginTop:2}}>4 séries × 12</div></div>
              <span style={{color:'#BD5B36'}}>›</span>
            </div>
          </div>
        </div>
      </div>
      <div className="pad row" style={{gap:10,padding:'12px 18px 18px',flexShrink:0}}>
        <button style={{flex:1,padding:14,borderRadius:999,background:'transparent',border:'1px solid #C9BBA6',color:'#8A7E6E',fontSize:13,fontWeight:600}}>Annuler</button>
        <button style={{flex:2,padding:14,borderRadius:999,background:'#6E7E60',border:'none',color:'#FBF8F2',fontSize:13,fontWeight:600}}>✦ Séance terminée</button>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   DIRECTION C — POP
════════════════════════════════════════════════════════════════ */
function PopHome(){
  return (
    <div className="scr p">
      <SB color="#15141A"/>
      <div className="body">
        <div className="pad row" style={{justifyContent:'space-between',alignItems:'flex-start',paddingTop:8,paddingBottom:16}}>
          <div className="col" style={{gap:4}}>
            <span className="ey" style={{color:'#8A8590'}}>MER. 4 JUIN</span>
            <span className="disp" style={{fontSize:30,lineHeight:1}}>Bonne<br/>séance.</span>
          </div>
          <div className="col" style={{gap:9,alignItems:'flex-end'}}>
            <div className="p-bell"><svg width="19" height="19" viewBox="0 0 24 24" fill="none"><path d="M6 9a6 6 0 0 1 12 0c0 4.5 1.8 5.8 2 6H4c.2-.2 2-1.5 2-6Z" stroke="#fff" strokeWidth="1.8"/><path d="M9.5 18.5a2.5 2.5 0 0 0 5 0" stroke="#fff" strokeWidth="1.8"/></svg></div>
            <div className="p-streak">🔥 4</div>
          </div>
        </div>

        <div className="pad">
          <div className="p-today">
            <div className="p-blob" style={{width:130,height:130,background:'rgba(255,255,255,.12)',top:-40,right:-30}}></div>
            <span className="p-chip">AUJOURD'HUI</span>
            <div className="t" style={{marginTop:12}}>Full Body B</div>
            <div style={{fontSize:12.5,opacity:.85,marginTop:4}}>Phase 2 · 6 exercices</div>
            <div className="chips" style={{marginTop:14}}>
              <span className="p-chip">⏱ 40 min</span><span className="p-chip">RPE 6</span>
            </div>
            <button className="p-cta" style={{marginTop:16}}>Commencer →</button>
          </div>
        </div>

        <div className="pad row" style={{gap:10,marginTop:12}}>
          <div className="p-card grow" style={{background:'#FF5A45',color:'#fff'}}>
            <div className="n">4</div><div style={{fontSize:11.5,fontWeight:600,marginTop:4,opacity:.95}}>semaines d'affilée</div>
          </div>
          <div className="p-card grow" style={{background:'#FFCB2E',color:'#15141A'}}>
            <div className="n">2/3</div><div style={{fontSize:11.5,fontWeight:600,marginTop:4}}>séances · sem.</div>
          </div>
        </div>

        <div className="pad" style={{marginTop:12}}>
          <div className="p-card" style={{background:'#fff',border:'2px solid #15141A'}}>
            <div className="row" style={{justifyContent:'space-between',marginBottom:9}}>
              <span className="ey">SEMAINE 6 / 12</span><span className="disp" style={{fontSize:14,color:'#2438E0'}}>50%</span>
            </div>
            <div className="p-bar"><i style={{width:'50%',background:'#2438E0'}}></i></div>
          </div>
        </div>
      </div>
      <div className="p-nav"><div className="on"><i></i>Accueil</div><div><i></i>Prog.</div><div><i></i>Suivi</div><div><i></i>Profil</div></div>
    </div>
  );
}
function PopNotif(){
  return (
    <div className="scr p">
      <SB color="#15141A"/>
      <div className="body">
        <div className="pad" style={{paddingTop:8}}>
          <div className="disp" style={{fontSize:28}}>Notifications</div>
          <div className="row" style={{gap:8,marginTop:14,background:'#EDE9DE',borderRadius:14,padding:4}}>
            <div style={{flex:1,textAlign:'center',padding:'9px 0',borderRadius:11,background:'#2438E0',color:'#fff',fontSize:13,fontWeight:700,fontFamily:"'Bricolage Grotesque',sans-serif"}}>Boîte</div>
            <div style={{flex:1,textAlign:'center',padding:'9px 0',borderRadius:11,color:'#8A8590',fontSize:13,fontWeight:700,fontFamily:"'Bricolage Grotesque',sans-serif"}}>Rappels</div>
          </div>
        </div>
        <div className="pad" style={{marginTop:14}}>
          <div className="p-card" style={{background:'#2438E0',color:'#fff',padding:16}}>
            <div className="disp" style={{fontSize:17}}>Active tes rappels 🔔</div>
            <div style={{fontSize:12,opacity:.9,margin:'5px 0 12px',lineHeight:1.4}}>Reçois-les sur ton appareil.</div>
            <button className="p-cta" style={{padding:'12px'}}>Autoriser</button>
          </div>
        </div>
        <div className="pad" style={{marginTop:10,display:'flex',flexDirection:'column',gap:10}}>
          {FEED.map((n,i)=>{const tone=n.ac==='seance'?'#2438E0':n.ac==='mobilite'?'#22A06B':n.ac==='bilan'?'#FF5A45':'#E0820A';return(
            <div key={i} className="nf-item" style={{borderRadius:16,padding:13,background:'#fff',border:'2px solid '+(n.unread?'#15141A':'#EDE9DE'),alignItems:'flex-start'}}>
              <div className="nf-ic" style={{borderRadius:12,background:tone,color:'#fff'}}>{n.ic}</div>
              <div className="grow">
                <div className="disp" style={{fontSize:14.5,fontWeight:700}}>{n.t}</div>
                <div style={{fontSize:11.5,color:'#6A6570',marginTop:2,lineHeight:1.35}}>{n.b}</div>
                <div style={{fontSize:10.5,color:'#A8A2B0',marginTop:6,fontWeight:600}}>{n.time}</div>
              </div>
              {n.unread&&<div style={{width:9,height:9,borderRadius:3,background:tone,flexShrink:0,marginTop:4}}></div>}
            </div>
          );})}
        </div>
      </div>
      <div className="p-nav"><div><i></i>Accueil</div><div><i></i>Prog.</div><div className="on"><i></i>Suivi</div><div><i></i>Profil</div></div>
    </div>
  );
}
function PopSession(){
  return (
    <div className="scr p">
      <SB color="#15141A"/>
      <div className="body">
        <div className="pad row" style={{paddingTop:8,gap:11}}>
          <div style={{width:38,height:38,borderRadius:12,background:'#15141A',color:'#fff',display:'grid',placeItems:'center'}}>←</div>
          <div className="grow"><div className="disp" style={{fontSize:18}}>Full Body B</div><div style={{fontSize:11,color:'#8A8590',fontWeight:600}}>Semaine 6 · RPE 6</div></div>
        </div>
        <div style={{height:8,background:'#EDE9DE',borderRadius:999,margin:'14px 18px 0'}}><div style={{height:'100%',width:'33%',background:'#2438E0',borderRadius:999}}></div></div>
        <div className="pad" style={{marginTop:16}}>
          <span className="ey" style={{color:'#8A8590'}}>ÉCHAUFFEMENT</span>
          <div style={{fontSize:13,color:'#6A6570',marginTop:6,lineHeight:1.7}}>Step jacks · épaules · hanches · inchworm</div>
        </div>
        <div className="pad" style={{marginTop:14,display:'flex',flexDirection:'column',gap:10}}>
          <div className="p-ex" style={{borderColor:'#2438E0'}}>
            <div className="row" style={{gap:11}}>
              <div className="p-set on" style={{background:'#2438E0',borderColor:'#2438E0'}}>1</div>
              <div className="grow"><div className="disp" style={{fontSize:15}}>Pompes classiques</div><div style={{fontSize:11.5,color:'#8A8590',marginTop:2,fontWeight:600}}>4 séries × 12-15</div></div>
            </div>
            <div className="row" style={{gap:8,marginTop:13}}>
              {[1,2,3,4].map((s,i)=><div key={i} className={'p-set'+(i<2?' on':'')}>{s}</div>)}
            </div>
            <div style={{background:'#EEF0FF',borderRadius:13,padding:'10px 12px',marginTop:12,fontSize:12,color:'#2438E0',fontWeight:500,lineHeight:1.4}}>💡 Descente 2 sec. Qualité avant quantité.</div>
          </div>
          <div className="p-ex">
            <div className="row" style={{gap:11}}>
              <div className="p-set">2</div>
              <div className="grow"><div className="disp" style={{fontSize:15}}>No-bar back row</div><div style={{fontSize:11.5,color:'#8A8590',marginTop:2,fontWeight:600}}>4 séries × 12</div></div>
              <span style={{color:'#A8A2B0',fontWeight:700}}>›</span>
            </div>
          </div>
        </div>
      </div>
      <div className="pad row" style={{gap:10,padding:'12px 18px 18px',flexShrink:0}}>
        <button style={{flex:1,padding:15,borderRadius:14,background:'#fff',border:'2px solid #15141A',color:'#15141A',fontSize:14,fontWeight:700,fontFamily:"'Bricolage Grotesque',sans-serif"}}>Annuler</button>
        <button style={{flex:2,padding:15,borderRadius:14,background:'#22A06B',border:'none',color:'#fff',fontSize:14,fontWeight:700,fontFamily:"'Bricolage Grotesque',sans-serif"}}>Terminé ✓</button>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   CANVAS
════════════════════════════════════════════════════════════════ */
function Exploration(){
  const AB={width:300,height:650};
  return (
    <DesignCanvas>
      <DCSection id="hybride" title="A × B — Hybride proposé" subtitle="Structure brutaliste de A · palette papier/terracotta/sauge de B">
        <DCArtboard id="x-home" label="Accueil" {...AB}><BrutHome theme="bx"/></DCArtboard>
        <DCArtboard id="x-notif" label="Notifications" {...AB}><BrutNotif theme="bx"/></DCArtboard>
        <DCArtboard id="x-sess" label="Séance" {...AB}><BrutSession theme="bx"/></DCArtboard>
      </DCSection>
      <DCSection id="accueil" title="Accueil — Dashboard" subtitle="La même app, 3 langages visuels">
        <DCArtboard id="b-home" label="A · BRUT — brutalist athlétique" {...AB}><BrutHome/></DCArtboard>
        <DCArtboard id="e-home" label="B · EDITORIAL — wellness premium" {...AB}><EdHome/></DCArtboard>
        <DCArtboard id="p-home" label="C · POP — énergique color-block" {...AB}><PopHome/></DCArtboard>
      </DCSection>
      <DCSection id="notif" title="Centre de notifications" subtitle="La nouvelle fonctionnalité, déclinée">
        <DCArtboard id="b-notif" label="A · BRUT" {...AB}><BrutNotif/></DCArtboard>
        <DCArtboard id="e-notif" label="B · EDITORIAL" {...AB}><EdNotif/></DCArtboard>
        <DCArtboard id="p-notif" label="C · POP" {...AB}><PopNotif/></DCArtboard>
      </DCSection>
      <DCSection id="session" title="Écran de séance" subtitle="En plein effort">
        <DCArtboard id="b-sess" label="A · BRUT" {...AB}><BrutSession/></DCArtboard>
        <DCArtboard id="e-sess" label="B · EDITORIAL" {...AB}><EdSession/></DCArtboard>
        <DCArtboard id="p-sess" label="C · POP" {...AB}><PopSession/></DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}
