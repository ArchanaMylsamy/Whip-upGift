const input = document.getElementById('ipfield');
const giftbox = document.getElementById('giftbox');
function generatebox(){
    var html = '';
    const gifts = parseInt(input.value);
    for(let i=0;i<gifts;i++)
    {
        html += '<img src="https://img.buzzfeed.com/buzzfeed-static/static/2015-12/3/11/enhanced/webdr08/enhanced-25656-1449158550-1.jpg" id="img1" alt="gifts">'
    }
    input.value = ''
    giftbox.innerHTML = html;
}
