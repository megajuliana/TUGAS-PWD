// latihan 1
const namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const namaBulan = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

const time = new Date();

const tanggal = time.getDate();
const hari = namaHari[time.getDay()];
const bulan = namaBulan[time.getMonth()];
const tahun = time.getFullYear();

document.getElementById("waktu-lengkap").innerHTML = "Time = " + time;
document.getElementById("tanggal").innerHTML = "Hari ini adalah tanggal : " + tanggal;
document.getElementById("hari").innerHTML = "Hari ini adalah hari : " + hari;
document.getElementById("bulan").innerHTML = "Hari ini adalah bulan : " + bulan;
document.getElementById("tahun").innerHTML = "Hari ini adalah tahun : " + tahun;

console.log("Time = " + time);
console.log("Hari ini adalah tanggal : " + tanggal);
console.log("Hari ini adalah hari : " + hari);
console.log("Hari ini adalah bulan : " + bulan);
console.log("Hari ini adalah tahun : " + tahun);


// latihan 2
function konversiNilai() {
    let inputNilai = prompt("Masukkan nilai angka :");
    let nilai = parseFloat(inputNilai);

    let nilaiHuruf = "";
    if (isNaN(nilai) || nilai < 0 || nilai > 100) {
        alert("Masukkan nilai angka yang valid");
        console.log("Error Input tidak valid (" + inputNilai + ")");
        return;
    }

    if (nilai >= 80 && nilai <= 100) {
        nilaiHuruf = "A";
    } else if (nilai >= 65 && nilai < 80) {
        nilaiHuruf = "B";
    } else if (nilai >= 50 && nilai < 65) {
        nilaiHuruf = "C";
    } else if (nilai >= 35 && nilai < 50) {
        nilaiHuruf = "D";
    } else if (nilai >= 0 && nilai < 35) {
        nilaiHuruf = "E";
    }

    let pesan = "Nilai angka: " + nilai + "\nNilai huruf: " + nilaiHuruf;
    alert(pesan);
    
    document.getElementById("hasil").innerHTML = "Nilai Anda: <b>" + nilai + "</b> | Predikat: <b>" + nilaiHuruf + "</b>";
    console.log("Hasil Konversi Nilai");
    console.log("Nilai Angka : " + nilai);
    console.log("Nilai Huruf : " + nilaiHuruf);
}