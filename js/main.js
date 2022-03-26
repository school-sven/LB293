function copyText(urlType) {
    switch (urlType) {
      case 1:
        var copiedText = "https://www.bbbaden.ch";
        break;
      case 2:
        var copiedText = "https://moodle.bbbaden.ch";
        break;
      case 3:
        var copiedText = "https://mail.bbbaden.ch/";
        break;
      case 4:
        var copiedText = "https://portfolio.bbbaden.ch";
        break;
      case 5:
        var copiedText = "https://www.deepl.com/de/translator";
        break
      case 6:
        var copiedText = "https://try.vikunja.io";
        break
      default:
        break;
    }
    navigator.clipboard.writeText(copiedText);
    alert(copiedText + "wurde kopiert");
  }