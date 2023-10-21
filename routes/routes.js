// import express
import express from "express";
 
// init express router
const router = express.Router();
 router.get('/biodata/:nama/:tempat/:tanggal/:jk/:agama/:imah/:no/:email/:hobi/:cita_cita',(req, res) => {
    var nama = req.params.nama;
    var tempat_lahir = req.params.tempat;
    var tanggal_lahir = req.params.tanggal;
    var jk = req.params.jk;
    var agama = req.params.agama;
    var imah = req.params.imah;
    var no_hp = req.params.no;
    var email = req.params.email;
    var hobi = req.params.hobi;
    var cita_cita = req.params.cita_cita;
    res.send(
        'Nama : ' + nama + '<br>' + 
        'Tempat Lahir : ' + tempat_lahir + '<br>' +
        'Tanggal Lahir : ' + tanggal_lahir + '<br>' +
        'Jenis Kelamin : ' + jk + '<br>' +
        'Agama : ' + agama + '<br>' +
        'Alamat :  ' + imah + '<br>' +
        'Telepon :  ' + no_hp + '<br>' +
        'Email :  ' + email + '<br>' +
        'Hobi : ' + hobi + '<br>' +
        'Cita-cita : ' + cita_cita);
});

router.get('/aritmatika',(req, res) => {
    var bilangan1 = 10;
    var bilangan2 = 5;
    var tambah = bilangan1 + bilangan2;
    var pengurangan = bilangan1 - bilangan2;
    var perkalian = bilangan1 * bilangan2;
    var pembagian = bilangan1 / bilangan2;
    res.send(
        '<h3>Perjumlahan</h3>' +
        'Bilangan ke 1 : ' + bilangan1 + '<br>' +
        'Bilangan ke 2 : ' + bilangan2 + '<br>' +
        'Hasil : ' + tambah + '<hr> <br>' +

        '<h3>Pengurangan</h3>' +
        'Bilangan ke 1 : ' + bilangan1 + '<br>' +
        'Bilangan ke 2 : ' + bilangan2 + '<br>' +
        'Hasil : ' + pengurangan + '<hr> <br>' +

        '<h3>Perkalian</h3>' +
        'Bilangan ke 1 : ' + bilangan1 + '<br>' +
        'Bilangan ke 2 : ' + bilangan2 + '<br>' +
        'Hasil : ' + perkalian + '<hr> <br>' +

        '<h3>Pembagian</h3>' +
        'Bilangan ke 1 : ' + bilangan1 + '<br>' +
        'Bilangan ke 2 : ' + bilangan2 + '<br>' +
        'Hasil : ' + pembagian + '<hr>'        
    );
});

router.get('/bangun_datar',(req, res) => {
    var sisi1 = 5;
    var persegi = sisi1 * sisi1;

    var panjang = 10;
    var lebar = 4;
    var luas = panjang * lebar;

    var alas = 10;
    var tinggi = 7;
    var segitiga = alas * tinggi / 2;

    var v = 3.14;
    var jari = 15;
    var lingkaran = v * jari * jari;

    res.send(
        '<h3>Persegi</h3>' +
        'Nilai Sisi  : ' + sisi1 + '<br>' +
        'Hitung : ' + sisi1 + ' x ' + sisi1 + ' = ' + persegi + '<hr> <br>' +

        '<h3>Persegi Panjang</h3>' +
        'Nilai Panjang  : ' + panjang + '<br>' +
        'Nilai Lebar  : ' + lebar + '<br>' +
        'Hitung : ' + panjang + ' x ' + lebar + ' = ' + luas + '<hr> <br>' +

        '<h3>Segitiga</h3>' +
        'Nilai Alas  : ' + alas + '<br>' +
        'Nilai Tinggi  : ' + tinggi + '<br>' +
        'Hitung : ' + alas + ' x ' + tinggi + ' : ' + ' 2 ' + ' = ' + segitiga + '<hr> <br>' +

        '<h3>Lingkaran</h3>' +
        'Nilai V  : ' + v + '<br>' +
        'Nilai Jari  : ' + jari + '<br>' +
        'Hitung : ' + v + ' x ' + jari +  ' = ' + lingkaran

    );
});

router.get('/tes/:nama/:kelas/:pts/:pas',(req, res) => {
    var nama = req.params.nama;
    var kelas = req.params.kelas;
    var pts = parseInt(req.params.pts);
    var pas = parseInt(req.params.pas);
    var rapot = (pts + pas) / 2;

        if (rapot >= 90 && rapot <= 100) {
            var grade = "Grade A";
        } else if (rapot >= 80) {
            var grade = "Grade B";
        } else if (rapot >= 70) {
            var grade = "Grade C";
        } else if (rapot >= 60) {
            var grade = "Grade D";
        } else if (rapot >= 50) {
            var grade = "Grade E";
        } else if (rapot >= 0) {
            var grade = "Sing Getol Jang";
        } else {
            var grade = "Nilai Tidak Valid";
        }

        res.send(
        'Nama = : ' + nama + '<br>' +
        'Kelas = : ' + kelas + '<br>' +
        'Nilai PTS = : ' + pts + '<br>' +
        'Nilai PAS = : ' + pas + '<br>' +
        'Nilai Rapot  : ' + rapot + '<br>' +
        'Keterangan : ' +  grade 


        );


});

router.get('/bersarang/:nama/:jurusan/:kelas',(req, res) => {

    var nama = req.params.nama;
    var jurusan = req.params.jurusan;
    var kelas = req.params.kelas;
    
    if (jurusan == 'RPL') {
       if (kelas == '10 RPL') {
        var ket = "Anda Kelas 10 RPL";
       } else if (kelas == '11 RPL') {
        var ket = "Anda Kelas 11 RPL";
       } else if (kelas == '12 RPL'){
        var ket = "Anda Kelas 12 RPL"
       } else {
        var ket = "Anda Alumni Cuyyy"
       }

    } else if (jurusan == 'TKRO') {
        if (kelas == '10 TKRO') {
            var ket = "Anda Kelas 10 TKRO";
           } else if (kelas == '11 TKRO') {
            var ket = "Anda Kelas 11 TRKO";
           } else if (kelas == '12 TKRO'){
            var ket = "Anda Kelas 12 TKRO"
           } else {
            var ket = "Anda Alumni Cuyyy"
           }
    } else if (jurusan == 'TBSM') {
        if (kelas == '10 TBSM') {
            var ket = "Anda Kelas 10 TBSM";
           } else if (kelas == '11 TBSM') {
            var ket = "Anda Kelas 11 TBSM";
           } else if (kelas == '12 TBSM'){
            var ket = "Anda Kelas 12 TBSM"
           } else {
            var ket = "Anda Alumni Cuyyy"
           }
    } else {
        var ket = "Jurusan Tidak Tersedia"
    }

    res.send(
        'Nama : ' + nama + '<br>' +
        'Jurusan : ' + ket
    );

});

router.get('/Latihan/:Nama/:Tanggal/:Jenis/:Pesanan/:Jumlah',(req, res) => {
    var Nama = req.params.Nama;
    var Tanggal = req.params.Tanggal;
    var Jenis = req.params.Jenis;
    var Pesanan = req.params.Pesanan;
    var Jumlah = parseInt(req.params.Jumlah);

    if (Jenis == 'Makanan') {
        if (Pesanan == 'Nasi Goreng') {
         var Harga = 20000;
        } else if (Pesanan == 'Mie Goreng') {
         var Harga = 30000;
        } else if (Pesanan == 'Ayam Goreng'){
         var Harga = 40000;
        } else {
         var Harga = "Anda Harus Memesan Dulu"
        }
    } else if (Jenis == 'Minuman') {
        if (Pesanan == 'Air Mineral') {
            var Harga = 10000;
           } else if (Pesanan == 'Jus') {
            var Harga = 20000;
           } else if (Pesanan == 'Kopi'){
            var Harga = 30000;
           } else {
            var Harga = "Anda Harus Memesan Dulu"
           }
    }

    var Total = Jumlah * Harga;
    if (Total >= 100000) {
        var Diskon = Total * 0.5;
    } else {
        var Diskon = 0
    }
    var Total_Pembayaran = Total - Diskon

    res.send(
        '<h3>"Starbuck Lokal"</h3>' +
        'Nama Pembeli  : ' + Nama + '<br>' +
        'Tanggal       : ' + Tanggal + '<br>' +
        'Jenis         : ' + Jenis + '<br>' +
        'Pesanan       : ' + Pesanan + '<br>' +
        'Harga         : ' + Harga + '<br>' +
        'Jumlah        : ' + Jumlah + '<br>' +

        '-----------------------------------------' + '<br>' +

        'Total        : ' +  Total + '<br>' +
        'Diskon 50%      : ' + Diskon + '<br>' +
        'Total_Pembayaran : ' + Total_Pembayaran +

        '<h3>>>>>Terima Kasih<<<<</h3>' 
    );

});

router.get('/Sample',(req, res) => {
    res.send( 
        '<h3>Selamat Datang</3>'
    );

});   


// export default router
export default router;