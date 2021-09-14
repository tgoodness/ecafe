/**
 * This function was written
 * @author
 * Akinyemi Tobiloba
 */
const Botmecash = {
  isEmail(str) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(str).toLowerCase());
  },

  isPhoneNumber(str) {
    return str.length === 11 && (str.charAt(2) === '0' || str.charAt(2) === '1') ? true : false;
  },

  isUrl(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query str
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ); // fragment locator
    return !!pattern.test(str);
  },

  randomNumber(to = 1000) {
    return Math.floor(Math.random() * to);
  },

  numberFormat(number, decimals, dec_point, thousands_sep) {
    // http://kevin.vanzonneveld.net
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     bugfix by: Michael White (http://getsprink.com)
    // +     bugfix by: Benjamin Lupton
    // +     bugfix by: Allan Jensen (http://www.winternet.no)
    // +    revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +     bugfix by: Howard Yeend
    // +    revised by: Luke Smith (http://lucassmith.name)
    // +     bugfix by: Diogo Resende
    // +     bugfix by: Rival
    // +      input by: Kheang Hok Chin (http://www.distantia.ca/)
    // +   improved by: davook
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Jay Klehr
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Amir Habibi (http://www.residence-mixte.com/)
    // +     bugfix by: Brett Zamir (http://brett-zamir.me)
    // +   improved by: Theriault
    // +   improved by: Drew Noakes
    // *     example 1: number_format(1234.56);
    // *     returns 1: '1,235'
    // *     example 2: number_format(1234.56, 2, ',', ' ');
    // *     returns 2: '1 234,56'
    // *     example 3: number_format(1234.5678, 2, '.', '');
    // *     returns 3: '1234.57'
    // *     example 4: number_format(67, 2, ',', '.');
    // *     returns 4: '67,00'
    // *     example 5: number_format(1000);
    // *     returns 5: '1,000'
    // *     example 6: number_format(67.311, 2);
    // *     returns 6: '67.31'
    // *     example 7: number_format(1000.55, 1);
    // *     returns 7: '1,000.6'
    // *     example 8: number_format(67000, 5, ',', '.');
    // *     returns 8: '67.000,00000'
    // *     example 9: number_format(0.9, 0);
    // *     returns 9: '1'
    // *    example 10: number_format('1.20', 2);
    // *    returns 10: '1.20'
    // *    example 11: number_format('1.20', 4);
    // *    returns 11: '1.2000'
    // *    example 12: number_format('1.2000', 3);
    // *    returns 12: '1.200'
    var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
      dec = typeof dec_point === 'undefined' ? '.' : dec_point,
      toFixedFix = function (n, prec) {
        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        var k = Math.pow(10, prec);
        return Math.round(n * k) / k;
      },
      s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');
    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
  },

  dateFormat(dateString) {
    const dt = new Date(dateString);
    let months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ];

    let day = dt.getDate();
    day = day < 10 ? '0' + day : day;

    months = months[dt.getMonth()];
    const year = dt.getFullYear();

    return `${months} ${day}, ${year}`;
  },

  timeFormat(dateString) {
    const date = new Date(dateString);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  },

  isEmptyObj(value) {
    return Object.keys(value).length === 0 && value.constructor === Object ? false : true;
  },

  isArr(value) {
    return value.length > 0 && value !== undefined ? true : false;
  },

  isStrongPassword(str) {
    return str.match(
      /(?=^.{8,32}$)(?=(?:.*?\d){1})(?=.*[a-z])(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%*()_+^&]*$/
    )
      ? true
      : false;
  },

  setItem(key, value, json = false) {
    try {
      if (json) localStorage.setItem(key, JSON.stringify(value));
      else localStorage.setItem(key, value);
    } catch {
      return false;
    }
  },

  getItem(key, json = false) {
    try {
      if (json) return JSON.parse(localStorage.getItem(key));
      else return localStorage.getItem(key);
    } catch {
      return false;
    }
  },

  requestError(error) {
    if (error.response) {
      return error.response.data.message;
    } else {
      return error.message;
    }
  },

  millisToTime(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return seconds === 60
      ? minutes + 1 + ':00'
      : minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  },
  formatTitle() {
    let title = window.location.pathname;

    title = title.replace('/', '');
    title = title.replace('-', ' ');
    title = this.split(title, '/')[1];
    title = this.capitalize(title);
    return title;
  },
  capitalize(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
  },

  wordEllipsis(text, length = 20) {
    return text.length > length ? text.substring(0, 15) + '...' : text;
  },

  getDocumentHeight() {
    // let scrollHeight = Math.max(
    //   document.body.scrollHeight,
    //   document.documentElement.scrollHeight,
    //   document.body.offsetHeight,
    //   document.documentElement.offsetHeight,
    //   document.body.clientHeight,
    //   document.documentElement.clientHeight
    // );
    return Math.max(window.innerHeight);
  },
  hexToRgbA(hex) {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length === 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
      return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',0.2)';
    }
    throw new Error('Bad Hex');
  },

  SNformat(value) {
    if (value <= 9) return '0' + (value + 1);
    else return value;
  },

  error404(error) {
    if (error !== null) {
      const findCode = error.message.search('404');
      return findCode === -1 ? false : true;
    }
  },

  error500(error) {
    if (error !== null) {
      const findCode = error.message.search('500');
      return findCode === -1 ? false : true;
    }
  },

  networkError(error) {
    if (error !== null) {
      const findCode = error.message.search('Network Error');
      return findCode === -1 ? false : true;
    }
  },
};

export default Botmecash;
