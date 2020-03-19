const check = (url) => {
  try { 
    const data = UrlFetchApp.fetch(url).getResponseCode(); 
    if (data === 200) {
      console.log(true);
      return true;
     }
  }
  catch(e) {
    console.log(e);
    console.log(false)
    sendMail();
    return false;
  }
}

const sendMail = () => {
  const mail = 'gmail@gmail.com';
  const subject = 'OUT OF ORDER: robots.txt or sitemaps.xml'
  const message = 'Your robots.txt or sitemaps.xml are not responsing with status code 200 and might not be working as intended';
  MailApp.sendEmail(mail, subject, message);
}


function runCheck() {
  check('https://www.google.dk/robots.txt');
  check('https://www.go.dk/sitemap.xml');
}
