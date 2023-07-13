// const popUp = prompt('masukan nama anda!')
// const contentH1 = document.querySelector('.content h1 span')

// contentH1.textContent = popUp


const navbarNav = document.querySelector('.option')

document.querySelector('#h-menu').onclick = (e) => {
    navbarNav.classList.toggle('active')
    e.preventDefault()
}


const hamMenu = document.querySelector('.ham-menu')

document.addEventListener('click', function (e) {
    if (!hamMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})



const btnKenapa = document.getElementsByClassName('btnKenapa');
const modal = document.querySelector('.modal-body')
let pbaru = document.querySelector('.pbaru')
let imgbaru = document.querySelector('.imgbaru')
let insNama = document.querySelector('.insNama')
let igIns = document.querySelector('.igIns')
let ytIns = document.querySelector('.ytIns')


for (let i = 0; i < btnKenapa.length; i++) {
    btnKenapa[i].addEventListener('click', (e) => {
        if (e.target.classList.contains('knpWindah')) {
            return isiWindahBasudara()
        } else if (e.target.classList.contains('knpDea')) {
            return isiDeaAfrizal()
        } else if (e.target.classList.contains('knpWpu')) {
            return isiSandhikaGalih()
        } else if (e.target.classList.contains('knpJkt48')) {
            return isiJKT48()
        } else if (e.target.classList.contains('knpGurugembul')) {
            return isiGuruGembul()
        }
    });
}



// windah basudara
function isiWindahBasudara() {
    const isiWindah = ('alasan yang menginspirasi saya tentang Windah Basudara dimulai sejak pandemi COVID-19. Pada saat itu, jumlah subscriber di channelnya sekitar 2 juta. Sayangnya, handphone saya rusak dan saya hanya bisa menonton YouTube melalui TV. Awalnya, saya hanya mampir di channel Windah Basudara. Namun, lama kelamaan saya sangat menyukainya karena sikapnya yang selalu berinteraksi dengan para penontonnya.Selama saya menyukainya, saya sering melihat jadwal livestreaming Windah Basudara di Instagram pribadinya. Setiap kali ada jadwal livestreaming, saya selalu menontonnya, bahkan jika itu berarti harus begadang atau menonton saat tengah malam. Saya sangat terinspirasi oleh semangat pantang menyerah yang luar biasa yang dimiliki oleh Windah Basudara.Melihat perjalanan karirnya, dari seorang pelayan restoran hingga berhasil menabung untuk membeli PC demi keperluan livestreaming dan berjuang untuk menghasilkan konten tanpa kenal lelah, sungguh menginspirasi bagi saya.Dalam kata-kata lain, Windah Basudara telah memberikan contoh semangat pantang menyerah yang luar biasa bagi saya.Saya terinspirasi untuk tidak menyerah dalam menghadapi tantangan dan terus berjuang untuk mencapai impian saya, sebagaimana Windah Basudara yang telah melakukannya.')
    const namaWindah = ('Windah Basudara')
    igIns.setAttribute('href', 'https://www.instagram.com/windahbasudara/')
    ytIns.setAttribute('href', 'https://www.youtube.com/@WindahBasudara')
    insNama.innerHTML = namaWindah
    imgbaru.setAttribute('src', 'windah3.jpg')
    pbaru.innerHTML = isiWindah
}

// dea afrizal
function isiDeaAfrizal() {
    const isiDea = ('Dea Afrizal, sebagai youtuber coding yang pertama kali saya tonton, memberikan materi yang sangat saya sukai. Bahkan pada video pertamanya yang saya tonton, saya rela mengorbankan waktu tidur saya hanya untuk mengikuti tutorialnya. Beliau benar-benar menginspirasi saya untuk terus belajar coding.Ketika saya merasa malas dan kurang semangat untuk belajar, saya selalu mengingat pesan dari Dea Afrizal untuk tetap berusaha dan terus belajar, meskipun coding terasa sulit dan membutuhkan waktu yang cukup lama untuk menjadi mahir.Dalam perjalanan belajar coding ini, saya menyadari bahwa kesabaran dan ketekunan sangatlah penting. Setiap kali saya menghadapi kesulitan, saya mengingat semangat dan dedikasi Dea Afrizal yang mendorong saya untuk tidak menyerah. Ia telah mengajarkan saya bahwa meskipun sulit, dengan tekad dan upaya yang konsisten, saya bisa mencapai keahlian yang saya impikan.Saya sangat berterima kasih kepada Dea Afrizal karena inspirasinya telah membantu saya melewati tantangan dan menjaga semangat saya dalam belajar coding. Dengan dedikasinya dalam menyampaikan materi dan pengalaman yang ia bagikan, Dea Afrizal telah menjadi panutan dan guru virtual saya dalam perjalanan belajar coding.')
    const namaDea = ('Dea Afrzal')
    igIns.setAttribute('href', 'https://www.instagram.com/dea.afrizal/')
    ytIns.setAttribute('href', 'https://www.youtube.com/@deaafrizal')
    insNama.innerHTML = namaDea
    imgbaru.setAttribute('src', 'dea.jpg')
    pbaru.innerHTML = isiDea
}

// wpu
function isiSandhikaGalih() {
    const isiWpu = ('Sandhika Galih, pemilik akun YouTube "Web Programming UNPAS" dan seorang dosen di salah satu universitas di Bandung, menjadi salah satu sosok yang sangat berpengaruh dalam perjalanan belajarku. Aku menganggapnya sebagai guru pribadiku sendiri. Materi coding yang ia sajikan di kanal YouTube-nya sangat mudah dipahami dan aku benar-benar mengerti apa yang ia sampaikan.Seperti Dea Afrizal, Sandhika Galih juga sangat mahir dalam skill coding. Ketajamannya dalam memahami dan menguasai konsep-konsep coding yang rumit sangat mengesankan. Menyaksikan kemahirannya dalam aksi membuatku semakin bersemangat dan termotivasi untuk terus mempelajari coding.Belajar dari Sandhika Galih membuatku melihat coding sebagai sebuah tantangan yang menarik dan kreatif. Melalui materi-materi yang ia bagikan, aku merasa dibimbing dengan baik dan aku bisa melihat perkembangan yang pesat dalam kemampuanku.Aku sangat berterima kasih kepada Sandhika Galih karena ia telah berperan sebagai guru virtualku dan membantu aku dalam perjalanan belajar coding ini.')
    const namaWpu = ('Sandhika Galih')
    igIns.setAttribute('href', 'https://www.instagram.com/sandhikagalih/')
    ytIns.setAttribute('href', 'https://www.youtube.com/@sandhikagalihWPU')
    insNama.innerHTML = namaWpu
    imgbaru.setAttribute('src', 'sandhika.jpg')
    pbaru.innerHTML = isiWpu
}

// jkt48
function isiJKT48() {
    const isiJkt = ('JKT48 adalah idol grup yang benar-benar membawa warna dan kebahagiaan dalam hidup saya. Ketika saya pertama kali mengenal JKT48, saya merasa telah menemukan identitas sejati diri saya. Kesukaan saya terhadap idol grup ini memberikan keberanian kepada saya untuk melakukan apa pun dengan keyakinan diri. Terlebih lagi, menonton mereka tampil membuat saya merasa tidak lagi takut dijauhi oleh teman-teman.Saya sangat menyukai lagu-lagu JKT48 karena mereka memiliki cara unik dalam menyampaikan pesan melalui perumpamaan benda atau objek lainnya. Hal ini membuat lagu-lagu mereka, baik yang bertemakan penyemangat atau percintaan, terasa lebih segar dan tidak terlalu berlebihan. Sayangnya, banyak orang mungkin menganggap bahwa kecintaan saya terhadap JKT48 hanya karena pakaian mereka yang minim. Padahal, idol grup ini justru memberikan kebebasan kepada saya dari prasangka-prasangka tersebut dan mengajarkan saya untuk menghargai kesenian dan karya mereka.Saya merasa beruntung dan berterima kasih kepada JKT48 karena mereka telah memberikan saya pengalaman yang tak terlupakan dan inspirasi yang mendalam. Melalui musik dan penampilan mereka, saya belajar untuk menghargai diri sendiri, mengejar impian dengan penuh semangat, dan memperkuat rasa percaya diri saya. JKT48 bukan hanya sebuah idol grup bagi saya, tetapi juga sumber kekuatan dan motivasi dalam perjalanan hidup saya.')
    const namaJkt = ('JKT48')
    igIns.setAttribute('href', 'https://www.instagram.com/jkt48/')
    ytIns.setAttribute('href', 'https://www.youtube.com/@JKT48')
    insNama.innerHTML = namaJkt
    imgbaru.setAttribute('src', 'jkt2.png')
    pbaru.innerHTML = isiJkt
}

// guru gembul
function isiGuruGembul() {
    const isiGuru = ('Guru Gembul adalah seorang guru yang benar-benar memiliki pengetahuan yang tinggi. Pernyataan dan argumen yang disampaikannya memiliki daya tarik yang luar biasa, membuat orang seolah terhipnotis oleh kejeniusannya dalam memaparkan informasi berdasarkan fakta-fakta. Saya sangat senang mendengarkan Guru Gembul saat ia berargumen melalui saluran YouTube-nya.Salah satu video yang sangat saya sukai dan langsung menginspirasi saya adalah video berjudul \'Eps 184 | CARA CEPAT MENJADI CERDAS\'. Video tersebut membawa pemahaman bahwa kecerdasan setiap individu itu berbeda-beda, dan kita tidak boleh membanding-bandingkannya. Melalui penjelasan Guru Gembul, saya merasa terinspirasi untuk lebih menghargai kecerdasan yang dimiliki oleh diri sendiri dan orang lain, serta menerima perbedaan dalam cara berpikir dan memahami dunia.Guru Gembul mengajarkan saya untuk melihat kecerdasan sebagai sebuah spektrum yang beragam, bukan hanya terbatas pada pengetahuan akademik. Video-video seperti itu membuka mata saya dan memberikan perspektif yang lebih luas tentang definisi kecerdasan serta mengajarkan pentingnya menghormati keunikan setiap individu.Saya sangat mengapresiasi Guru Gembul atas kontribusinya dalam memberikan informasi yang bermanfaat dan inspiratif melalui channel YouTube-nya. Melalui kejeniusannya dan cara penyampaiannya yang memukau, ia telah mengubah cara pandang saya terhadap kecerdasan dan membantu saya menghargai keragaman yang ada di sekitar kita.')
    const namaGuru = ('Guru Gembul')
    igIns.setAttribute('href', 'https://www.youtube.com/@gurugembul')
    ytIns.setAttribute('href', 'https://www.instagram.com/gurugembul/')
    insNama.innerHTML = namaGuru
    imgbaru.setAttribute('src', 'gurugembul.jpg')
    pbaru.innerHTML = isiGuru
}







// let home = document.querySelector('.home')
// const code = document.getElementById('code')
// const kj = document.getElementById('kj')
// const demon = document.getElementById('demon')
// const hutao = document.getElementById('hutao')

// code.onclick = function () {
//     home.style.backgroundImage = "url('code.jpg')"
// }
// kj.onclick = function () {
//     home.style.backgroundImage = "url('kj.jpg')"
// }
// demon.onclick = function () {
//     home.style.backgroundImage = "url('demon.jpg')"
// }
// hutao.onclick = function () {
//     home.style.backgroundImage = "url('hutao.jpg')"
// }










// // mengambil data button kenapa ketika di klik


//   // Menangkap semua elemen dengan class "btnKenapa"
//   var btnKenapaList = document.querySelectorAll(".btnKenapa");

//   // Menangkap elemen modal
//   var modal = document.getElementById("kenapabtn");

//   // Menambahkan event listener pada setiap elemen
//   btnKenapaList.forEach(function(btn) {
//     btn.addEventListener("click", function() {
//       modal.style.display = "block";
//     });
//   });




// const btnkenapa = document.querySelectorAll('#btnKenapa')
// btnkenapa.forEach(m => {
//     m.addEventListener('click',function() {
//         console.log(m)
//     })
// })



// button.onclick = function(e) {
//     console.log(e)
// }


// var tombol = document.getElementById('tombol');
// var overlay = document.getElementById('overlay');
// var tombolTutup = document.getElementById('tombol-tutup');

// tombol.addEventListener('click', function() {
//   overlay.style.display = 'block';
// });

// tombolTutup.addEventListener('click', function() {
//   overlay.style.display = 'none';
// });


// const btn = document.querySelector('.btnKenapa')

// btn.addEventListener('click',function () {
//   document.innerHTML = ` <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>`
// })



// document.addEventListener('click',function(e) {
//     if(e.target.classList.contains('button-kenapa')) {
//         return ` <div class="card" style="width: 18rem;">
//         <img src="..." class="card-img-top" alt="...">
//         <div class="card-body">
//             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         </div>
//     </div>`
//     console.log(e)
//     }
// })


// function btnKenapa(e) {
//     return  `<div class="card" style="width: 18rem;">
//     <img src="..." class="card-img-top" alt="...">
//     <div class="card-body">
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     </div>
// </div>`
// }