const check = (url) => {
  try { 
    const data = UrlFetchApp.fetch(url).getResponseCode(); 
    if (data === 200) {
      return true;
     }
  }
  catch(e) {
    console.log(e);
    sendMail();
    return false;
  }
}

const sendMail = () => {
  const mail = 'gmail@gmail.com';
  const subject = 'OUT OF ORDER: robots.txt or sitemaps.xml'
  const message = 'Your robots.txt or sitemaps.xml are not responding with status code 200 and might not be working as intended';
  MailApp.sendEmail(mail, subject, message);
}

function runCheck() {
  check('https://www.google.dk/robots.txt');
  check('https://www.google.dk/sitemap.xml');
}
