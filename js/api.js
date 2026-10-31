/**
 * GitHub Pages → GAS API
 */
function apiCall(action, data) {
  data = data || {};
  data.action = action;
  if (!GAS_API_URL || GAS_API_URL.indexOf('YOUR_DEPLOYMENT_ID') !== -1) {
    return Promise.reject(new Error('js/config.js માં GAS_API_URL સેટ કરો'));
  }
  return fetch(GAS_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(data),
    redirect: 'follow'
  }).then(function(res){ return res.text(); }).then(function(text){
    try { return JSON.parse(text); }
    catch(e){ throw new Error('API જવાબ અમાન્ય. Deploy URL ચેક કરો.\n' + text.substring(0,180)); }
  });
}
function apiRegister(p){ return apiCall('register', p); }
function apiLogin(m,p){ return apiCall('login', {mobile:m, password:p}); }
function apiInfo(m){ return apiCall('info', {mobile:m}); }
function apiPing(){ return apiCall('ping', {}); }
function saveSession(d){
  try{
    sessionStorage.setItem('sr_mobile', d.mobile||'');
    sessionStorage.setItem('sr_school', d.schoolName||'');
    sessionStorage.setItem('sr_sheet', d.spreadsheetId||'');
  }catch(e){}
}
function clearSession(){
  try{ sessionStorage.clear(); }catch(e){}
}
function getSessionMobile(){
  try{ return sessionStorage.getItem('sr_mobile')||''; }catch(e){ return ''; }
}
