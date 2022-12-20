
const pt= require('puppeteer');
require('dotenv').config();

async function confirmAlert(){
  
  const browser = await pt.launch({ headless: false });
  const page = await browser.newPage();

  page.on('dialog', async dialog => {

    // Matrícula Inválida!
    // Matrícula Inexistente!
    // Senha Incorreta!
    // Código da Imagem Incorreto!

    let msgAlert = dialog.message();
    
    switch (msgAlert) {
      case 'Matrícula Inexistente!':
        console.log('Essa Matrícula não existe ...');
        break;
      case 'Senha Incorreta!':
        console.log('Senha digitada erradamente!!!!');
        break;
      case 'Código da Imagem Incorreto!':
        console.log('Valor do captcha está errado na base json.');
        break;
      default:
        console.log(msgAlert);
    }

    await dialog.accept();
    
  });

  //launch URL
  await page.goto(process.env.URL);
  console.log('*** FIM ***');
  //  const b = (await page.$x("//button[text()='Click for JS Confirm']"))[0]
  //  b.click()
}
confirmAlert()

