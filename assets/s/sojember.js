var produk1 = document.getElementById('produk1');
var produk2 = document.getElementById('produk2');
var produk3 = document.getElementById('produk3');
var produk4 = document.getElementById('produk4');
var itema = document.getElementById('itema');
var itemb = document.getElementById('itemb');
var itemc = document.getElementById('itemc');
var itemd = document.getElementById('itemd');

var carousel1 = `<div class="page-title-container">
<h3 class="oxanium">Terasi Udang Super</h3>
</div>
<div class="carousel-container">
<div id="myCarousela" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li> 
      <li data-target="#myCarousel" data-slide-to="3"></li>  
    </ol>

    <!-- deklarasi carousel -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <a href="assets/i/pr/tr/terasi01.jpg" target="_BLANK"><img src="assets/i/pr/tr/terasi01.jpg" alt=""></a>
        <div class="carousel-caption">
          <h3></h3>
          <p></p>
        </div>
      </div>
      <div class="item">
        <a href="assets/i/pr/tr/terasi02.jpg" target="_BLANK"><img src="assets/i/pr/tr/terasi02.jpg" alt=""></a>
        <div class="carousel-caption">
          <h3></h3>
          <p></p>
        </div>
      </div>    
      <div class="item">
        <a href="assets/i/pr/tr/terasi03.jpg" target="_BLANK"><img src="assets/i/pr/tr/terasi03.jpg" alt=""></a>
        <div class="carousel-caption">
          <h3></h3>
          <p></p>
        </div>
      </div>  
      <div class="item">
        <a href="assets/i/pr/tr/terasi04.jpg" target="_BLANK"><img src="assets/i/pr/tr/terasi04.jpg" alt=""></a>
        <div class="carousel-caption">
          <h3></h3>
          <p></p>
        </div>
      </div>  
    </div>

    <!-- Left and right controls -->
  <a class="carousel-control carousel-bt-left" href="#myCarousela" data-slide="prev">
    <img class="arrow-left" src="assets/i/arrow.png">
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control carousel-bt-right" href="#myCarousela" data-slide="next">
    <img class="arrow-right" src="assets/i/arrow.png">
    <span class="sr-only">Next</span>
  </a>

  </div>
</div>`;

var carousel2 = `<div class="page-title-container">
<h3 class="oxanium">Cabe Jawa</h3>
</div>
<div class="carousel-container">
<div id="myCarouselb" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
    </ol>

    <!-- deklarasi carousel -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <a href="assets/i/pr/cj/cabejawa01.jpg" target="_BLANK"><img src="assets/i/pr/cj/cabejawa01.jpg" alt=""></a>
        <div class="carousel-caption">
          <h3></h3>
          <p></p>
        </div>
      </div>
      <div class="item">
        <a href="assets/i/pr/cj/cabejawa02.jpg" target="_BLANK"><img src="assets/i/pr/cj/cabejawa02.jpg" alt=""></a>
        <div class="carousel-caption">
          <h3></h3>
          <p></p>
        </div>
      </div>    
    </div>

    <!-- Left and right controls -->
  <a class="carousel-control carousel-bt-left" href="#myCarouselb" data-slide="prev">
    <img class="arrow-left" src="assets/i/arrow.png">
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control carousel-bt-right" href="#myCarouselb" data-slide="next">
    <img class="arrow-right" src="assets/i/arrow.png">
    <span class="sr-only">Next</span>
  </a>

  </div>
</div>`;

var carousel3 = `<div class="page-title-container">
<h3 class="oxanium">Petis Ikan Tongkol Khas Puger</h3>
</div>
<div class="carousel-container">
<div id="myCarouselc" class="carousel slide" data-ride="carousel">
<!-- Indicators -->
<ol class="carousel-indicators">
  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
  <li data-target="#myCarousel" data-slide-to="1"></li>
  <li data-target="#myCarousel" data-slide-to="2"></li> 
  <li data-target="#myCarousel" data-slide-to="3"></li>  
  <li data-target="#myCarousel" data-slide-to="4"></li>
  <li data-target="#myCarousel" data-slide-to="5"></li> 
</ol>

<!-- deklarasi carousel -->
<div class="carousel-inner" role="listbox">
  <div class="item active">
    <a href="assets/i/pr/pt/asin1.jpg" target="_BLANK"><img src="assets/i/pr/pt/asin1.jpg" alt=""></a>
    <div class="carousel-caption">
      <h3></h3>
      <p></p>
    </div>
  </div>
  <div class="item">
    <a href="assets/i/pr/pt/asin2.jpg" target="_BLANK"><img src="assets/i/pr/pt/asin2.jpg" alt=""></a>
    <div class="carousel-caption">
      <h3></h3>
      <p></p>
    </div>
  </div>    
  <div class="item">
    <a href="assets/i/pr/pt/manis1.jpg" target="_BLANK"><img src="assets/i/pr/pt/manis1.jpg" alt=""></a>
    <div class="carousel-caption">
      <h3></h3>
      <p></p>
    </div>
  </div>  
  <div class="item">
    <a href="assets/i/pr/pt/manis2.jpg" target="_BLANK"><img src="assets/i/pr/pt/manis2.jpg" alt=""></a>
    <div class="carousel-caption">
      <h3></h3>
      <p></p>
    </div>
  </div>  
  <div class="item">
    <a href="assets/i/pr/pt/pedas1.jpg" target="_BLANK"><img src="assets/i/pr/pt/pedas1.jpg" alt=""></a>
    <div class="carousel-caption">
      <h3></h3>
      <p></p>
    </div>
  </div>
  <div class="item">
    <a href="assets/i/pr/pt/pedas2.jpg" target="_BLANK"><img src="assets/i/pr/pt/pedas2.jpg" alt=""></a>
    <div class="carousel-caption">
      <h3></h3>
      <p></p>
    </div>
  </div>  
</div>

<!-- Left and right controls -->
  <a class="carousel-control carousel-bt-left" href="#myCarouselc" data-slide="prev">
    <img class="arrow-left" src="assets/i/arrow.png">
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control carousel-bt-right" href="#myCarouselc" data-slide="next">
    <img class="arrow-right" src="assets/i/arrow.png">
    <span class="sr-only">Next</span>
  </a>

  </div>
</div>
`;

var carousel4 = `<div class="page-title-container">
<h3 class="oxanium">Wayang Kulit Asli</h3>
</div>
<div class="carousel-container">
<div id="myCarouseld" class="carousel slide" data-ride="carousel">
<!-- Indicators -->
<ol class="carousel-indicators">
  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
  <li data-target="#myCarousel" data-slide-to="1"></li>
  <li data-target="#myCarousel" data-slide-to="2"></li> 
  <li data-target="#myCarousel" data-slide-to="3"></li>
  <li data-target="#myCarousel" data-slide-to="4"></li>
  <li data-target="#myCarousel" data-slide-to="5"></li> 
  <li data-target="#myCarousel" data-slide-to="6"></li>
  <li data-target="#myCarousel" data-slide-to="7"></li>
  <li data-target="#myCarousel" data-slide-to="8"></li> 
  <li data-target="#myCarousel" data-slide-to="9"></li> 
  <li data-target="#myCarousel" data-slide-to="10"></li>
  <li data-target="#myCarousel" data-slide-to="11"></li> 
  <li data-target="#myCarousel" data-slide-to="12"></li>
</ol>

<!-- deklarasi carousel -->
<div class="carousel-inner" role="listbox">
  <div class="item active">
    <a href="assets/i/pr/wk/wayang01.jpg" target="_BLANK"><img src="assets/i/pr/wk/wayang01.jpg" alt=""></a>
    <div class="carousel-caption">
      <h3></h3>
      <p></p>
    </div>
  </div>
  <div class="item">
    <a href="assets/i/pr/wk/wayang02.jpg" target="_BLANK"><img src="assets/i/pr/wk/wayang02.jpg" alt=""></a>
    <div class="carousel-caption">
      <h3></h3>
      <p></p>
    </div>
  </div>    
  <div class="item">
    <a href="assets/i/pr/wk/wayang03.jpg" target="_BLANK"><img src="assets/i/pr/wk/wayang03.jpg" alt=""></a>
    <div class="carousel-caption">
      <h3></h3>
      <p></p>
    </div>
  </div>  
  <div class="item">
    <a href="assets/i/pr/wk/wayang04.jpg" target="_BLANK"><img src="assets/i/pr/wk/wayang04.jpg" alt=""></a>
    <div class="carousel-caption">
      <h3></h3>
      <p></p>
    </div>
  </div>  
  <div class="item">
    <a href="assets/i/pr/wk/wayang05.jpg" target="_BLANK"><img src="assets/i/pr/wk/wayang05.jpg" alt=""></a>
    <div class="carousel-caption">
      <h3></h3>
      <p></p>
    </div>
  </div>  
  <div class="item">
    <a href="assets/i/pr/wk/wayang06.jpg" target="_BLANK"><img src="assets/i/pr/wk/wayang06.jpg" alt=""></a>
    <div class="carousel-caption">
      <h3></h3>
      <p></p>
    </div>
  </div>  
  <div class="item">
    <a href="assets/i/pr/wk/wayang07.jpg" target="_BLANK"><img src="assets/i/pr/wk/wayang07.jpg" alt=""></a>
    <div class="carousel-caption">
      <h3></h3>
      <p></p>
    </div>
  </div>  
  <div class="item">
    <a href="assets/i/pr/wk/wayang08.jpg" target="_BLANK"><img src="assets/i/pr/wk/wayang08.jpg" alt=""></a>
    <div class="carousel-caption">
      <h3></h3>
      <p></p>
    </div>
  </div>  
  <div class="item">
    <a href="assets/i/pr/wk/wayang09.jpg" target="_BLANK"><img src="assets/i/pr/wk/wayang09.jpg" alt=""></a>
    <div class="carousel-caption">
      <h3></h3>
      <p></p>
    </div>
  </div>  
  <div class="item">
    <a href="assets/i/pr/wk/wayang10.jpg" target="_BLANK"><img src="assets/i/pr/wk/wayang10.jpg" alt=""></a>
    <div class="carousel-caption">
      <h3></h3>
      <p></p>
    </div>
  </div>  
  <div class="item">
    <a href="assets/i/pr/wk/wayang11.jpg" target="_BLANK"><img src="assets/i/pr/wk/wayang11.jpg" alt=""></a>
    <div class="carousel-caption">
      <h3></h3>
      <p></p>
    </div>
  </div>  
  <div class="item">
    <a href="assets/i/pr/wk/wayang12.jpg" target="_BLANK"><img src="assets/i/pr/wk/wayang12.jpg" alt=""></a>
    <div class="carousel-caption">
      <h3></h3>
      <p></p>
    </div>
  </div>  
  <div class="item">
    <a href="assets/i/pr/wk/wayang13.jpg" target="_BLANK"><img src="assets/i/pr/wk/wayang13.jpg" alt=""></a>
    <div class="carousel-caption">
      <h3></h3>
      <p></p>
    </div>
  </div> 
</div>


    <!-- Left and right controls -->
  <a class="carousel-control carousel-bt-left" href="#myCarouseld" data-slide="prev">
    <img class="arrow-left" src="assets/i/arrow.png">
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control carousel-bt-right" href="#myCarouseld" data-slide="next">
    <img class="arrow-right" src="assets/i/arrow.png">
    <span class="sr-only">Next</span>
  </a>

  </div>
</div>`;

var detail1 = `<div class="page-title-container">
<h3 class="oxanium">Keterangan</h3>
</div>
<div class="page-content-container">
<div class="page-20"></div>
<div class="page-60">
    <h4 class="oxanium azure">
        Terasi asli puger, terbuat dari udang rebon kualitas terbaik.<br/>
        Bisa digunakan untuk bumbu masakan.<br/>
        Dijamin kualitas terbaik.<br/><br/>
        Varian: 
            1 Kg (Rp. 80.000) | 
            500 g (Rp. 42.000)
        <br/><br/>
        link : <br/>
        tokopedia > <a href="https://www.tokopedia.com/sojember/terasi-puger-terasi-udang-kualitas-super-500-g" target="_BLANK">500 g </a> |
        <a href="https://www.tokopedia.com/sojember/terasi-puger-terasi-udang-kualitas-super-1kg" target="_BLANK"> 1 kg</a><br/>
        shopee > <a href="https://shopee.co.id/TERASI-PUGER-TERASI-UDANG-KUALITAS-SUPER-500g--i.21631174.3249522838" target="_BLANK">500 g </a>|
        <a href="https://shopee.co.id/TERASI-PUGER-TERASI-UDANG-KUALITAS-SUPER-1000g-atau-1kg--i.21631174.4949354073" target="_BLANK"> 1 kg </a>|
        <a href="https://shopee.co.id/TERASI-PUGER-TERASI-UDANG-KUALITAS-SUPER-i.21631174.4645757920" target="_BLANK"> alternatif</a><br/>
        bukalapak > <a href="https://www.bukalapak.com/p/food/bumbu/bumbu-mentah/4fby667-jual-terasi-udang-super-khas-puger-500g" target="_BLANK">500 g </a>|
        <a href="https://www.bukalapak.com/p/food/bumbu/bumbu-mentah/4fby43g-jual-terasi-udang-super-khas-puger-1kg" target="_BLANK"> 1 kg</a><br/>
        blibli > <a href="https://www.blibli.com/p/terasi-khas-puger-terasi-udang-kualitas-super-1-2kg-500g/ps--SUO-70057-00005" target="_BLANK">500 g </a>|
        <a href="https://www.blibli.com/p/terasi-khas-puger-terasi-udang-kualitas-super-1kg/ps--SUO-70057-00004" target="_BLANK"> 1 kg</a><br/>
        </h4>
</div>
<div class="page-20"></div>
</div>`;

var detail2 = `<div class="page-title-container">
<h3 class="oxanium">Keterangan</h3>
</div>
<div class="page-content-container">
<div class="page-20"></div>
<div class="page-60">
    <h4 class="oxanium azure">Cabe Jawa/Cabe Jamu<br/>
        <br/>
        Kondisi kering, utuh, tidak berjamur.<br/>
        <br/>
        Manfaat lihat di <a href="https://s.id/sojcabejawa" target="_BLANK">sini.</a></h4><br/><br/>
        <h4 class="oxanium azure">Varian: 
            <a href="https://www.tokopedia.com/sojember/cabe-jawa-cabe-jamu-1kg" target="_BLANK">1 Kg (Rp. 55.000)</a>
        </h4>
</div>
<div class="page-20"></div>
</div>`;

var detail3 = `<div class="page-title-container">
<h3 class="oxanium">Keterangan</h3>
</div>
<div class="page-content-container">
<div class="page-20"></div>
<div class="page-60">
    <h4 class="oxanium azure">
        Petis Ikan Tongkol Khas Puger<br/>
        <br/>
        Terbuat dari ikan tongkol, diolah tanpa menggunakan pengawet.<br/>
        Cocok digunakan sebagai bumbu tambahan.<br/>
        <br/>
        Varian : asin (gambar 2), manis (gambar 4), pedas (gambar 6)<br/>
        *Pilih salah satu varian (asin / manis / pedas) berisi 4 pcs<br/>
        atau khusus tokopedia terdapat pilihan semua varian dengan masing-masing 1 pcs (total 3 pcs)<br/>
        <br/>
        **Khusus pemesanan melalui blibli wajib konfirmasi varian yang dipilih melalui chat, jika tidak konfirmasi kami kirim varian asin (default)<br/>
        <br/>
        link : <br/>
        tokopedia > <a href="https://www.tokopedia.com/sojember/petis-ikan-tongkol-khas-puger-asin" target="_BLANK">1 varian </a>|
        <a href="https://www.tokopedia.com/sojember/petis-ikan-tongkol-khas-puger-asin-manis-pedas" target="_BLANK"> campur</a><br/>
        shopee > <a href="https://shopee.co.id/Petis-Ikan-Tongkol-Khas-Puger-i.21631174.8486626117" target="_BLANK">1 varian </a><br/>
        bukalapak > <a href="https://www.bukalapak.com/p/food/bumbu/bumbu-instan/4g8dbs1-jual-petis-ikan-tongkol-khas-puger" target="_BLANK">1 varian </a><br/>
        blibli > <a href="https://www.blibli.com/p/petis-ikan-tongkol-khas-puger-asin-manis-pedas/ps--SUO-70057-00006" target="_BLANK">1 varian </a><br/>
</div>
<div class="page-20"></div>
</div>`;

var detail4 = `<div class="page-title-container">
<h3 class="oxanium">Keterangan</h3>
</div>
<div class="page-content-container">
<div class="page-20"></div>
<div class="page-60">
    <h4 class="oxanium azure">
        Wayang Kulit asli 1 kotak / 1 set isi 180 wayang<br/>
        <br/>
        - Tidak dijual perbiji<br/>
        - Kondisi masih bagus<br/>
        - Gapit / gagang sebagian besar kayu<br/>
        - Bekas pemakaian standar pedalangan<br/>
        - Lokasi Puger, Kab. Jember, Jatim<br/>
        <br/>
        *Untuk nego hubungi [SMS / WA] 085230651250 atau klik <a href="https://s.id/soj-wyg1-nego" target="_BLANK">di sini.</a></h4><br/><br/>
        <h4 class="oxanium azure">Link: 
            <a href="https://www.tokopedia.com/sojember/wayang-kulit-asli-standar-pedalangan-1-set" target="_BLANK">tokopedia</a>
        </h4><br/><br/>
        <iframe width="640" height="360" class="youtube-player" src="https://www.youtube.com/embed/d9jrSu4Q9HQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div class="page-20"></div>
</div>`;

var indukCarousel = document.getElementById('page-product');
var indukDetail = document.getElementById('page-detail');
var page4 = document.getElementById('page4');

function inserta(){
    page4.style.marginBottom = '0';
    indukCarousel.innerHTML = carousel1;
    indukCarousel.setAttribute('class', 'page')
    indukDetail.innerHTML = detail1;
    indukDetail.setAttribute('class', 'page detail-terasi last-page');
    indukCarousel.scrollIntoView();
}

function insertb(){
    page4.style.marginBottom = '0';
    indukCarousel.innerHTML = carousel2;
    indukCarousel.setAttribute('class', 'page')
    indukDetail.innerHTML = detail2;
    indukDetail.setAttribute('class', 'page detail-cabe last-page');
    indukCarousel.scrollIntoView();
}

function insertc(){
    page4.style.marginBottom = '0';
    indukCarousel.innerHTML = carousel3;
    indukCarousel.setAttribute('class', 'page')
    indukDetail.innerHTML = detail3;
    indukDetail.setAttribute('class', 'page detail-petis last-page');
    indukCarousel.scrollIntoView();
}

function insertd(){
    page4.style.marginBottom = '0';
    indukCarousel.innerHTML = carousel4;
    indukCarousel.setAttribute('class', 'page')
    indukDetail.innerHTML = detail4;
    indukDetail.setAttribute('class', 'page detail-wayang last-page');
    indukCarousel.scrollIntoView();
}

produk1.addEventListener("click", function(){
    inserta();
});

produk2.addEventListener("click", function(){
    insertb();
});

produk3.addEventListener("click", function(){
    insertc();
});

produk4.addEventListener("click", function(){
    insertd();
});

itema.addEventListener("click", function(){
    inserta();
});

itemb.addEventListener("click", function(){
    insertb();
});

itemc.addEventListener("click", function(){
    insertc();
});

itemd.addEventListener("click", function(){
    insertd();
});
