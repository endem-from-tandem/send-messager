const PORT = process.env.PORT || 3000
const ch = require('chalk')

// M A I L G U N
const mailgun = require('mailgun-js')

const DOMAIN = 'YOUR_DOMAIN_NAME'
const mg = mailgun({
  apiKey: '80c72878c7f0e94862f8cac7acba1dde-b6d086a8-3340bd29',
  domain: 'sandboxb55111a13c734f6980b81361fc6fbc83.mailgun.org',
})
const data = {
  from: 'Excited User <pavelberro2021@gmail.com>',
  to: 'pavelbero2021@gmail.com',
  subject: 'Hello',
  html: `<!doctype html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><title></title><!--[if !mso]><!-- --><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style type="text/css">#outlook a { padding:0; }
  .ReadMsgBody { width:100%; }
  .ExternalClass { width:100%; }
  .ExternalClass * { line-height:100%; }
  body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }
  table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }
  img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }
  p { display:block;margin:13px 0; }</style><!--[if !mso]><!--><style type="text/css">@media only screen and (max-width:480px) {
    @-ms-viewport { width:320px; }
    @viewport { width:320px; }
  }</style><!--<![endif]--><!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
  <o:AllowPNG/>
  <o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if lte mso 11]>
<style type="text/css">
  .outlook-group-fix { width:100% !important; }
</style>
<![endif]--><!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css"><style type="text/css">@import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
@import url(https://fonts.googleapis.com/css?family=Nunito);</style><!--<![endif]--><style type="text/css">@media only screen and (min-width:480px) {
.mj-column-per-100 { width:100% !important; max-width: 100%; }
.mj-column-px-105 { width:105px !important; max-width: 105px; }
.mj-column-px-20 { width:20px !important; max-width: 20px; }
.mj-column-px-230 { width:230px !important; max-width: 230px; }
.mj-column-px-296 { width:296px !important; max-width: 296px; }
}</style><style type="text/css">@media only screen and (max-width:480px) {
table.full-width-mobile { width: 100% !important; }
td.full-width-mobile { width: auto !important; }
}</style><style type="text/css">.sponsors{ padding-bottom:15px; } @media only screen and (max-width:
480px){ .line * { display:none; } .logo { width:120px; height:120px; }
.description-container{ width:240px !important; } .description-head * {
padding-top:10px;} } @media only screen and (max-width: 652px){ .sponsors{
padding-top:30px; padding-bottom:30px; } }</style></head><body><div><!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:700px;" width="700" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:white;background-color:white;Margin:0px auto;max-width:700px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:700px;" ><![endif]--><div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%"><!-- M E S S A G E --><tr><td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;"><div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">Lasciate ogni speranza, voi ch’entrate Lasciate ogni speranza, voi ch’entrate Lasciate ogni speranza, voi ch’entrate Lasciate ogni speranza, voi ch’entrate Lasciate ogni speranza, voi ch’entrate Lasciate ogni speranza, voi ch’entrate Lasciate ogni speranza, voi ch’entrate Lasciate ogni speranza, voi ch’entrate Lasciate ogni speranza, voi ch’entrate</div></td></tr></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:700px;" width="700" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div style="background:white;background-color:white;Margin:0px auto;max-width:700px;"><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:white;background-color:white;width:100%;"><tbody><tr><td style="direction:ltr;font-size:0px;padding:10px 0px;text-align:center;vertical-align:top;"><!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><![endif]--><!-- L O G O --><!--[if mso | IE]><td class="" style="vertical-align:middle;width:105px;" ><![endif]--><div class="mj-column-px-105 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%"><tr><td align="center" class="logo" style="font-size:0px;padding:0;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:100px;"><img height="100" src="https://cdn1.savepice.ru/uploads/2021/4/4/046614390c1876dd48d39349835475e1-full.png" style="border:0;display:block;outline:none;text-decoration:none;height:100px;width:100%;" width="100"></td></tr></tbody></table></td></tr></table></div><!--[if mso | IE]></td><![endif]--><!-- L I N E --><!--[if mso | IE]><td class="line-outlook" style="vertical-align:middle;width:20px;" ><![endif]--><div class="mj-column-px-20 outlook-group-fix line" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%"><tr><td align="center" style="font-size:0px;padding:0;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:2px;"><img height="119" src="https://cdn1.savepice.ru/uploads/2021/4/4/74238e184a68c731e98301dfe8af49f9-full.png" style="border:0;display:block;outline:none;text-decoration:none;height:119px;width:100%;" width="2"></td></tr></tbody></table></td></tr></table></div><!--[if mso | IE]></td><![endif]--><!-- D E S C R I P T I O N --><!--[if mso | IE]><td class="description-container-outlook" style="vertical-align:middle;width:230px;" ><![endif]--><div class="mj-column-px-230 outlook-group-fix description-container" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%"><tr><td align="left" class="description-head" style="font-size:0px;padding:0px 0px 10px 0px;word-break:break-word;"><div style="font-family:Nunito, Arial;font-size:20px;font-weight:600;line-height:1;text-align:left;color:#2C2C51;">Stan Sakharchuk</div></td></tr><tr><td align="left" style="font-size:0px;padding:0px 0px 15px 0px;word-break:break-word;"><div style="font-family:Nunito, Arial;font-size:16px;font-weight:400;line-height:1;text-align:left;color:#563684;">Co-Founder & CEO, at Interexy</div></td></tr><!-- P H O N E --><tr><td align="left" style="font-size:0px;padding:5px 0px;word-break:break-word;"><table cellpadding="0" cellspacing="0" width="170" border="0" style="cellspacing:0;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:170px;"><tr><td style="padding-right: 10px"><img style="vertical-align: middle" width="20px" height="20px" alt="phone" src="https://cdn1.savepice.ru/uploads/2021/4/4/776b8cdde7efc10c21df649d24f1904d-full.png"></td><td style="padding-right: 10px"><img style="vertical-align: middle" width="20px" alt="flag" height="20px" src="https://cdn1.savepice.ru/uploads/2021/4/4/7d269da66781d05dea3293f83bd1b781-full.png"></td><td style="font-size: 16px;
        color: #2c2c51;
        font-family: Nunito, Arial;
        font-weight: 400;">239 719 2347</td></tr></table></td></tr><!-- H O M E   P A G E --><tr><td align="left" style="font-size:0px;padding:0;word-break:break-word;"><table cellpadding="0" cellspacing="0" width="170" border="0" style="cellspacing:0;color:#000000;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:22px;table-layout:auto;width:170px;"><tr><td style="padding-right: 10px"><img alt="home" style="vertical-align: middle" width="20px" height="20px" src="https://cdn1.savepice.ru/uploads/2021/4/4/7851b1350a02ce9bd5c4456ef7b718d9-full.png"></td><td style="font-size: 16px;
        color: #2c2c51;
        font-family: Nunito, Arial;
        font-weight: 400;">www.interexy.com</td></tr></table></td></tr></table></div><!--[if mso | IE]></td><![endif]--><!-- S P O N S O R S ? --><!--[if mso | IE]><td class="sponsors-outlook" style="vertical-align:middle;width:296px;" ><![endif]--><div class="mj-column-px-296 outlook-group-fix sponsors" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="vertical-align:middle;padding:0px 0px 0px 10px;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tr><td align="center" style="font-size:0px;padding:0;word-break:break-word;"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;"><tbody><tr><td style="width:266px;"><img alt=" sponsors" height="117" src="https://cdn1.savepice.ru/uploads/2021/4/4/c81940f78a6cb331e20456497c2e3635-full.png" style="border:0;display:block;outline:none;text-decoration:none;height:117px;width:100%;" width="266"></td></tr></tbody></table></td></tr></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></div></body></html>`,
  text: 'Testing some Mailgun awesomness!',
}

// E X P R E S S
const express = require('express')

const app = express()
app.listen(PORT, () => {
  console.log(ch.cyan('server is running...'))
  mg.messages().send(data),
    (err, body) => {
      if (err) {
        // can't send message on email
        console.log(err)
        res.status(505)
        res.send()
      }
      console.log(body)
    }
})
