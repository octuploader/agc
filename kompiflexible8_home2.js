/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("myTopnav").style.left = "0";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("myTopnav").style.left = "-250px";
}

// Add active class to the current button (highlight it)
var btns = document.getElementsByClassName("dropbtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {  
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropbtn");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('active')) {
        openDropdown.classList.remove('active');
      }
    }
  }
}
function menuoverlayOn() {
    document.getElementById("menuoverlay").style.display = "block";
}

function menuoverlayOff() {
    document.getElementById("menuoverlay").style.display = "none";
}

function addClassBody() {
    var element, name, arr;
    element = document.body;
    name = "flow";
    arr = element.className.split(" ");
    if (arr.indexOf(name) == -1) {
        element.className += " " + name;
    }
}
function removeClassBody() {
    var element = document.body;
    element.className = element.className.replace(/\bflow\b/g, "");
}

var randomRandomIndex,showRandomPost;(function(n,m,k){var d={widgetTitle:"",widgetStyle:2,homePage:"https://www.kompiajaib.com/",numPosts:10,summaryLength:370,titleLength:"auto",thumbnailSize:90,thumbnailHeight:50,noImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",containerId:"random-post",newTabLink:false,moreText:"Baca Selengkapnya",callBack:function(){}};for(var f in RandomPostConfig){d[f]=(RandomPostConfig[f]=="undefined")?d[f]:RandomPostConfig[f]}var j=function(a){var b=m.createElement("script");b.type="text/javascript";b.src=a;k.appendChild(b)},o=function(b,a){return Math.floor(Math.random()*(a-b+1))+b},l=function(a){var p=a.length,c,b;if(p===0){return false}while(--p){c=Math.floor(Math.random()*(p+1));b=a[p];a[p]=a[c];a[c]=b}return a},h=function(b){var c=b.feed.openSearch$totalResults.$t-d.numPosts,a=o(1,(c>0?c:1));j(d.homePage.replace(/\/$/,"")+"/feeds/posts/summary?alt=json-in-script&orderby=updated&start-index="+a+"&max-results="+d.numPosts+"&callback=showRandomPost")},g=function(z){var s=document.getElementById(d.containerId),x=l(z.feed.entry),A=d.widgetStyle,c=d.widgetTitle+'<ul class="random-post-style-'+A+'">',b=d.newTabLink?' target="_blank"':"",y='<span style="display:block;clear:both;"></span>',v,t,w,r,u;if(!s){return}for(var q=0;q<d.numPosts;q++){if(q==x.length){break}t=x[q].title.$t;w=(d.titleLength!=="auto"&&d.titleLength<t.length)?t.substring(0,d.titleLength)+"&hellip;":t;r=("media$thumbnail"in x[q]&&d.thumbnailSize!==false)?x[q].media$thumbnail.url.replace(/.*?:\/\//g , "https://cdn.staticaly.com/img/").replace(/\/s[0-9]+(\-c)?/, "/w"+d.thumbnailSize+"-h50-p-k-no-nu"):d.noImage;u=("summary"in x[q]&&d.summaryLength>0)?x[q].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,d.summaryLength)+"&hellip;":"";for(var p=0,a=x[q].link.length;p<a;p++){v=(x[q].link[p].rel=="alternate")?x[q].link[p].href:"#"}if(A==2){c+='<li><div class="random-post-item-thumbnail"><a href="'+v+'" title="'+t+'"'+b+'><img alt="" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailHeight+'"></a></div><div class="random-post-item-title"><a title="'+t+'" href="'+v+'"'+b+">"+w+'</a></div><span class="random-post-item-summary"><span class="random-post-item-summary-text">'+u+'</span> <a href="'+v+'" class="random-post-item-more"'+b+">"+d.moreText+"</a></span>"+y+"</li>"}else{if(A==3||A==4){c+='<li class="random-post-item" tabindex="0"><a class="random-post-item-title" href="'+v+'"'+b+' target="_blank"><img alt="" class="random-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"></a><div class="random-post-item-tooltip"><a class="random-post-item-title" title="'+t+'" href="'+v+'"'+b+" target='_blank'>"+w+"</a></div>"+y+"</li>"}else{if(A==5){c+='<li class="random-post-item" tabindex="0"><a class="random-post-item-wrapper" href="'+v+'" title="'+t+'"'+b+' target="_blank"><img alt="" class="random-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><span class="random-post-item-tooltip">'+w+"</span></a>"+y+"</li>"}else{if(A==6){c+='<li><a class="random-post-item-title" title="'+t+'" href="'+v+'"'+b+" target='_blank'>"+w+'</a><div class="random-post-item-tooltip"><img alt="" class="random-post-item-thumbnail" src="'+r+'" width="'+d.thumbnailSize+'" height="'+d.thumbnailSize+'"><span class="random-post-item-summary"><span class="random-post-item-summary-text">'+u+"</span></span>"+y+"</div></li>"}else{c+='<li><a title="'+t+'" href="'+v+'"'+b+" target='_blank'>"+w+"</a></li>"}}}}}s.innerHTML=c+="</ul>"+y;d.callBack()};randomRandomIndex=h;showRandomPost=g;j(d.homePage.replace(/\/$/,"")+"/feeds/posts/summary?alt=json-in-script&orderby=updated&max-results=0&callback=randomRandomIndex")})(window,document,document.getElementsByTagName("head")[0]);

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}