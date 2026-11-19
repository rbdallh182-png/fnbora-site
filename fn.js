(function(){
"use strict";
var D=document,R=D.documentElement,$=function(s,c){return (c||D).querySelector(s)},$$=function(s,c){return Array.prototype.slice.call((c||D).querySelectorAll(s))};
var URL_="https://qlmjcvpnjxdanzecwnsa.supabase.co",KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsbWpjdnBuanhkYW56ZWN3bnNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ5NjIzMjIsImV4cCI6MjExMDUzODMyMn0.A2kDNF49Ks3t1tJd6hzlZrwk5PjuQGCQWzs0oe2yRDU";
R.classList.add("js");
var EN={
"جاري الإرسال...":"Sending...","اكتب اسمك.":"Please enter your name.","اكتب اسمك بالكامل.":"Please enter your full name.","اكتب رقم موبايل صحيح، 11 رقم يبدأ بـ 01.":"Enter a valid mobile number: 11 digits starting with 01.","اكتب اسم المطعم أو الكافيه.":"Enter your restaurant or café name.","اختار الخدمة المطلوبة.":"Choose the service you need.","اختار المحافظة.":"Choose your governorate.","اكتب العنوان.":"Enter the address.","اختار الوظيفة المطلوبة.":"Choose the job you want.","اختار ملف السيرة الذاتية.":"Choose your CV file.","اكتب سنين الخبرة من 0 لـ 60.":"Enter years of experience from 0 to 60.",
"وصلنا طلبك. هنراجعه ونتواصل معاك قريب.":"We got your request. We'll review it and contact you soon.","وصلت بياناتك. هنرشّحك للشركات المناسبة ونتواصل معاك.":"We got your details. We'll recommend you to suitable companies and contact you.",
"رقم طلبك":"Your request number is","احتفظ به عشان تتابع طلبك من قسم «تابع طلبك».":"Keep it to follow your request in the “Track your request” section.",
"بعتّ طلبات كتير، جرّب بعد شوية.":"Too many requests, try again shortly.","حصلت مشكلة وإحنا بنبعت الطلب. جرّب تاني أو كلمنا على واتساب.":"Something went wrong while sending. Try again or message us on WhatsApp.","مفيش اتصال بالإنترنت. جرّب تاني.":"No internet connection. Try again.",
"نوع الملف غير مدعوم. استخدم PDF أو Word أو صورة.":"Unsupported file type. Use PDF, Word or an image.","الملف كبير، الحد الأقصى 5 ميجا.":"File is too large. Max 5 MB.","فشل رفع الملف. جرّب تاني.":"File upload failed. Try again.",
"اكتب رقم الطلب.":"Please enter the request number.","مفيش طلب بالبيانات دي. راجع الرقم والتليفون.":"No request found with these details. Check the number and phone.","طلب رقم":"Request no.",
"جديد":"New","قيد التواصل":"Contacting","مقبول":"Accepted","قيد التنفيذ":"In progress","مكتمل":"Completed","مرفوض":"Declined",
"وصل طلبك وهنراجعه قريب.":"We received your request and will review it soon.","فريقنا بيتواصل معاك دلوقتي.":"Our team is contacting you now.","تم قبول طلبك وجاري التجهيز للتنفيذ.":"Your request was accepted and is being prepared.","طلبك قيد التنفيذ.":"Your request is in progress.","تم تنفيذ طلبك. شكرًا لثقتك.":"Your request is done. Thank you.","للأسف مش هنقدر ننفذ الطلب ده. كلمنا على واتساب لو عايز تعرف التفاصيل.":"Unfortunately we can't carry out this request. Message us on WhatsApp for details.",
"اختار خدمة أو أكتر الأول.":"Pick a service first."
};
var has=function(o,k){return Object.prototype.hasOwnProperty.call(o,k)};
window.mzLang="ar";
window.tr=function(s){return window.mzLang==="en"&&has(EN,s)?EN[s]:s};
function arDigits(v){return String(v||"").replace(/[٠-٩]/g,function(d){return "٠١٢٣٤٥٦٧٨٩".indexOf(d)})}
function val(f,n){var e=f.elements[n];return e?String(e.value).trim():""}

/* ---------- header / menu ---------- */
var hd=$(".hd");
if(hd){var on=function(){hd.classList.toggle("sc",window.scrollY>30)};on();window.addEventListener("scroll",on,{passive:true})}
var wf=$(".wf");if(wf){var w2=function(){wf.classList.toggle("sh",window.scrollY>600)};w2();window.addEventListener("scroll",w2,{passive:true})}
var mn=$(".mn"),mb=$(".mb");
function menu(o){if(!mn)return;mn.classList.toggle("open",o);mb&&mb.setAttribute("aria-expanded",o?"true":"false");D.body.style.overflow=o?"hidden":"";if(o){var c=$(".mn-x",mn);c&&c.focus()}else mb&&mb.focus()}
if(mb){mb.addEventListener("click",function(){menu(true)});$$(".mn-x,.mn li a,.mn .b").forEach(function(a){a.addEventListener("click",function(){menu(false)})});D.addEventListener("keydown",function(e){if(e.key==="Escape"&&mn.classList.contains("open"))menu(false)})}

/* ---------- reveal ---------- */
if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});$$(".rv").forEach(function(e){io.observe(e)})}else $$(".rv").forEach(function(e){e.classList.add("in")});

/* ---------- accordion ---------- */
$$(".rw").forEach(function(b){b.addEventListener("click",function(){var o=b.getAttribute("aria-expanded")==="true";var grp=b.closest("[data-acc]");if(grp&&!o)$$(".rw",grp).forEach(function(x){x.setAttribute("aria-expanded","false")});b.setAttribute("aria-expanded",o?"false":"true")})});

/* ---------- language ---------- */
var lb=$(".lng");
if(lb&&R.hasAttribute("data-i18n")){
  R.classList.add("i18n");
  var items=$$("[data-en]");items.forEach(function(e){e.setAttribute("data-ar",e.tagName==="INPUT"?"":e.innerHTML)});
  var ph=$$("[data-en-ph]");ph.forEach(function(e){e.setAttribute("data-ar-ph",e.getAttribute("placeholder")||"")});
  var T0=D.title,mD=$('meta[name="description"]'),D0=mD?mD.getAttribute("content"):"";
  function setLang(l){var en=l==="en";window.mzLang=l;R.lang=en?"en":"ar";R.dir=en?"ltr":"rtl";
    items.forEach(function(e){e.innerHTML=en?e.getAttribute("data-en"):e.getAttribute("data-ar")});
    ph.forEach(function(e){e.setAttribute("placeholder",en?e.getAttribute("data-en-ph"):e.getAttribute("data-ar-ph"))});
    var te=R.getAttribute("data-title-en");if(te)D.title=en?te:T0;var de=R.getAttribute("data-desc-en");if(de&&mD)mD.setAttribute("content",en?de:D0);
    lb.textContent=en?"العربية":"EN";lb.setAttribute("aria-label",en?"التحويل للعربية":"Switch to English");
    $$(".msg").forEach(function(m){m.textContent="";m.className="msg"});var tr_=$("#track-res");if(tr_)tr_.hidden=true;
    try{localStorage.setItem("fn-lang",l)}catch(e){}}
  lb.addEventListener("click",function(){setLang(window.mzLang==="en"?"ar":"en")});
  var q=/[?&]lang=(en|ar)/.exec(location.search),sv=null;try{sv=localStorage.getItem("fn-lang")}catch(e){}
  var st=q?q[1]:(sv==="ar"?"ar":"en");if(st==="en")setLang("en");else lb.textContent="EN";
}

/* ---------- visit counter ---------- */
try{if(location.protocol.indexOf("http")===0&&!/^(localhost|127\.)/.test(location.hostname)){var pth=location.pathname.replace(/^\/fnbora-site/,"")||"/";fetch(URL_+"/rest/v1/rpc/track_visit",{method:"POST",keepalive:true,headers:{apikey:KEY,Authorization:"Bearer "+KEY,"Content-Type":"application/json"},body:JSON.stringify({p_path:pth})}).catch(function(){})}}catch(e){}

function rpc(fn,body){return fetch(URL_+"/rest/v1/rpc/"+fn,{method:"POST",headers:{apikey:KEY,Authorization:"Bearer "+KEY,"Content-Type":"application/json"},body:JSON.stringify(body)}).then(function(r){return r.json().catch(function(){return null}).then(function(j){return {ok:r.ok,j:j,s:r.status}})})}
function setMsg(m,cls,t){m.className="msg"+(cls?" "+cls:"");m.textContent=t||""}
function failText(x){var m=x.j&&x.j.message;return (m&&/[؀-ۿ]/.test(m)&&window.mzLang!=="en")?m:tr(x.s===429?"بعتّ طلبات كتير، جرّب بعد شوية.":"حصلت مشكلة وإحنا بنبعت الطلب. جرّب تاني أو كلمنا على واتساب.")}
var phoneOk=function(p){return /^01[0125][0-9]{8}$/.test(p)};
var PH_ERR="اكتب رقم موبايل صحيح، 11 رقم يبدأ بـ 01.";
function flag(f,n){var e=f.elements[n];if(e){e.classList.add("bad");try{e.focus()}catch(x){}}}

/* ---------- request wizard ---------- */
var rf=$("#f-req");
if(rf){
  var steps=$$(".step",rf),dots=$$(".stp i",rf),cur=0,msg=$(".msg",rf),sub=$("#req-send");
  var picked=$$(".chip",rf);
  var go=function(i){cur=i;steps.forEach(function(s,j){s.hidden=j!==i});dots.forEach(function(d,j){d.classList.toggle("on",j<=i)});setMsg(msg,"");var c=$(".card",R);if(i>0||rf.__started){var t=rf.closest(".card");if(t&&window.scrollY>t.offsetTop+400)t.scrollIntoView({block:"start"})}};
  var svcEl=rf.elements.service;
  picked.forEach(function(c){c.addEventListener("click",function(){picked.forEach(function(x){x.setAttribute("aria-pressed",x===c?"true":"false")});svcEl.value=c.getAttribute("data-v");setMsg(msg,"")})});
  window.fnPick=function(v){var c=picked.filter(function(x){return x.getAttribute("data-v")===v})[0];if(c){c.click()}};
  var check=function(i){
    $$(".bad",rf).forEach(function(e){e.classList.remove("bad")});
    if(i===0&&!val(rf,"service")){setMsg(msg,"err",tr("اختار الخدمة المطلوبة."));return false}
    if(i===1){if(!val(rf,"governorate")){flag(rf,"governorate");setMsg(msg,"err",tr("اختار المحافظة."));return false}
      if(!val(rf,"business_name")){flag(rf,"business_name");setMsg(msg,"err",tr("اكتب اسم المطعم أو الكافيه."));return false}
      if(!val(rf,"address")){flag(rf,"address");setMsg(msg,"err",tr("اكتب العنوان."));return false}}
    if(i===2){if(!val(rf,"customer_name")){flag(rf,"customer_name");setMsg(msg,"err",tr("اكتب اسمك."));return false}
      var p=arDigits(val(rf,"phone")).replace(/[\s-]/g,"");rf.elements.phone.value=p;if(!phoneOk(p)){flag(rf,"phone");setMsg(msg,"err",tr(PH_ERR));return false}}
    return true};
  $$(".nx",rf).forEach(function(b){b.addEventListener("click",function(){if(check(cur))go(cur+1)})});
  $$(".bk",rf).forEach(function(b){b.addEventListener("click",function(){go(cur-1)})});
  rf.addEventListener("keydown",function(e){if(e.key==="Enter"&&cur<2&&e.target.tagName!=="TEXTAREA"){e.preventDefault();if(check(cur))go(cur+1)}});
  rf.addEventListener("submit",function(ev){ev.preventDefault();
    for(var i=0;i<3;i++){if(!check(i)){go(i);check(i);return}}
    var p=arDigits(val(rf,"phone")).replace(/[\s-]/g,"");
    sub.disabled=true;var tn=sub.firstChild,old=tn.nodeValue;tn.nodeValue=tr("جاري الإرسال...");setMsg(msg,"");
    rpc("submit_public_request",{p_customer_name:val(rf,"customer_name"),p_phone:p,p_business_name:val(rf,"business_name"),p_service:val(rf,"service"),p_governorate:val(rf,"governorate"),p_address:val(rf,"address"),p_details:val(rf,"details"),p_hp:val(rf,"website")})
    .then(function(x){if(x.ok){rf.reset();picked.forEach(function(c){c.setAttribute("aria-pressed","false")});svcEl.value="";go(0);setMsg(msg,"ok",tr("وصلنا طلبك. هنراجعه ونتواصل معاك قريب.")+(typeof x.j==="number"&&x.j>0?" "+tr("رقم طلبك")+" #"+x.j+" — "+tr("احتفظ به عشان تتابع طلبك من قسم «تابع طلبك».") :""))}else setMsg(msg,"err",failText(x))})
    .catch(function(){setMsg(msg,"err",tr("مفيش اتصال بالإنترنت. جرّب تاني."))})
    .then(function(){sub.disabled=false;tn.nodeValue=old})});
  go(0);
  var qs=/[?&]s=(\d+)/.exec(location.search);if(qs){var cc=picked[parseInt(qs[1],10)];if(cc)cc.click()}
}
/* service "request" links */
$$("[data-svc]").forEach(function(a){a.addEventListener("click",function(){var v=a.getAttribute("data-svc");if(window.fnPick)window.fnPick(v)})});

/* ---------- tracking ---------- */
var STEPS=["جديد","قيد التواصل","مقبول","قيد التنفيذ","مكتمل"];
var TMSG={"جديد":"وصل طلبك وهنراجعه قريب.","قيد التواصل":"فريقنا بيتواصل معاك دلوقتي.","مقبول":"تم قبول طلبك وجاري التجهيز للتنفيذ.","قيد التنفيذ":"طلبك قيد التنفيذ.","مكتمل":"تم تنفيذ طلبك. شكرًا لثقتك.","مرفوض":"للأسف مش هنقدر ننفذ الطلب ده. كلمنا على واتساب لو عايز تعرف التفاصيل."};
var tf=$("#f-track"),tres=$("#track-res");
if(tf){var tm=$(".msg",tf);
  tf.addEventListener("submit",function(ev){ev.preventDefault();setMsg(tm,"");tres.hidden=true;
    var id=parseInt(arDigits(val(tf,"id")),10),p=arDigits(val(tf,"phone")).replace(/[\s-]/g,"");
    if(!(id>0)){setMsg(tm,"err",tr("اكتب رقم الطلب."));return}
    if(!phoneOk(p)){setMsg(tm,"err",tr(PH_ERR));return}
    var b=$(".b",tf);b.disabled=true;
    rpc("track_request",{p_id:id,p_phone:p}).then(function(x){if(!x.ok){var m=x.j&&x.j.message;setMsg(tm,"err",(m&&/[؀-ۿ]/.test(m)&&window.mzLang!=="en")?m:tr("مفيش طلب بالبيانات دي. راجع الرقم والتليفون."));return}show(x.j)})
    .catch(function(){setMsg(tm,"err",tr("مفيش اتصال بالإنترنت. جرّب تاني."))}).then(function(){b.disabled=false})});
  function show(d){tres.innerHTML="";var h=document.createElement("h3");h.textContent=tr("طلب رقم")+" #"+d.id;var s=document.createElement("p");s.className="sv-n";s.textContent=d.service;tres.appendChild(h);tres.appendChild(s);
    var ix=STEPS.indexOf(d.status);if(ix>=0){var ol=document.createElement("ol");ol.className="tl";STEPS.forEach(function(t,i){var li=document.createElement("li");li.textContent=tr(t);li.className=i<ix?"done":i===ix?"cur":"";ol.appendChild(li)});tres.appendChild(ol)}
    var m=document.createElement("p");m.className="tm"+(d.status==="مرفوض"?" bad":"");m.textContent=tr(TMSG[d.status]||"")+(d.status==="قيد التنفيذ"&&d.progress>0?" ("+d.progress+"%)":"");tres.appendChild(m);tres.hidden=false}
}

/* ---------- careers form ---------- */
var jf=$("#f-job");
if(jf){
  var jm=$(".msg",jf),jb=$("#job-send"),mode="form";
  var modeB=$$(".seg button",jf);
  modeB.forEach(function(b){b.addEventListener("click",function(){mode=b.getAttribute("data-m");modeB.forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false")});$$(".m-form",jf).forEach(function(e){e.hidden=mode==="cv"});$$(".m-cv",jf).forEach(function(e){e.hidden=mode!=="cv"});setMsg(jm,"")})});
  var upload=function(file){var ext=(file.name.split(".").pop()||"").toLowerCase(),MT={pdf:"application/pdf",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png"};
    if(!MT[ext])return Promise.reject({mz:"نوع الملف غير مدعوم. استخدم PDF أو Word أو صورة."});
    if(file.size>5*1024*1024)return Promise.reject({mz:"الملف كبير، الحد الأقصى 5 ميجا."});
    var id=(window.crypto&&crypto.randomUUID)?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-8xxx-xxxxxxxxxxxx".replace(/x/g,function(){return (Math.random()*16|0).toString(16)});
    var path=id+"/cv."+ext;
    return fetch(URL_+"/storage/v1/object/cvs/"+path,{method:"POST",headers:{apikey:KEY,Authorization:"Bearer "+KEY,"Content-Type":MT[ext],"x-upsert":"false"},body:file}).then(function(r){if(!r.ok)throw {mz:"فشل رفع الملف. جرّب تاني."};return path})};
  jf.addEventListener("submit",function(ev){ev.preventDefault();setMsg(jm,"");$$(".bad",jf).forEach(function(e){e.classList.remove("bad")});
    var cv=mode==="cv",p=arDigits(val(jf,"phone")).replace(/[\s-]/g,"");jf.elements.phone.value=p;
    var bad=function(n,m){flag(jf,n);setMsg(jm,"err",tr(m));return true};
    if(!val(jf,"full_name")&&bad("full_name","اكتب اسمك بالكامل."))return;
    if(!phoneOk(p)&&bad("phone",PH_ERR))return;
    if(cv){if(!(jf.elements.cv.files&&jf.elements.cv.files.length)&&bad("cv","اختار ملف السيرة الذاتية."))return}
    else{if(!val(jf,"governorate")&&bad("governorate","اختار المحافظة."))return;if(!val(jf,"desired_job")&&bad("desired_job","اختار الوظيفة المطلوبة."))return;var y=parseInt(arDigits(val(jf,"years")),10);if(!(y>=0&&y<=60)&&bad("years","اكتب سنين الخبرة من 0 لـ 60."))return}
    jb.disabled=true;var tn=jb.firstChild,old=tn.nodeValue;tn.nodeValue=tr("جاري الإرسال...");
    Promise.resolve(cv?upload(jf.elements.cv.files[0]).then(function(x){return {p_cv_path:x}}):null).then(function(ex){
      var bd={p_full_name:val(jf,"full_name"),p_phone:p,p_email:val(jf,"email"),p_governorate:val(jf,"governorate"),p_desired_job:val(jf,"desired_job"),p_years:cv?0:parseInt(arDigits(val(jf,"years")),10),p_last_workplace:cv?"":val(jf,"last_workplace"),p_details:cv?"":val(jf,"details"),p_hp:val(jf,"website")};
      if(ex)for(var k in ex)bd[k]=ex[k];return rpc("submit_job_application",bd)})
    .then(function(x){if(x.ok){jf.reset();setMsg(jm,"ok",tr("وصلت بياناتك. هنرشّحك للشركات المناسبة ونتواصل معاك."))}else setMsg(jm,"err",failText(x))})
    .catch(function(er){setMsg(jm,"err",tr(er&&er.mz?er.mz:"مفيش اتصال بالإنترنت. جرّب تاني."))})
    .then(function(){jb.disabled=false;tn.nodeValue=old})});
}
})();
